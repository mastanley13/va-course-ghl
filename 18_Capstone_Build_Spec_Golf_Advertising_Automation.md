# Capstone Build Spec — Golf Facility Advertising Partner Acquisition + Fulfillment System (Dec 2025)

## 1) Scenario
You are building a GoHighLevel sub-account for a golf facility (“Golf Place”) that sells **advertising placements** (e.g., signage, scorecards, tee-box signs) to local businesses:
- mortgage brokers
- real estate agents
- car dealerships
- restaurants
- local service providers

The system must be **as automated as possible** using:
- GHL UI modules (Contacts, Conversations, Opportunities, Sites, Payments)
- Workflows (including Scheduler Trigger)
- AI Agents (Conversation AI + optional Agent Studio / GPT actions)
- Vendor fulfillment notifications and scheduling
- Reporting dashboards for weekly KPIs

## 2) Goals (what “success” looks like)
### Acquisition
- Generate a daily list of target businesses to contact (or ingest/enrich one automatically).
- Engage prospects across multiple channels in a **respectful, compliant** sequence.
- Build a profile for each business before messaging (industry, size proxy, website, last-touch summary).
- Qualify interest and move opportunities through sales stages.

### Conversion
- When a lead commits:
  - send them to a landing page OR send a PDF
  - collect payment via Stripe (Payment Link, Invoice, or Order Form)
  - optionally book an appointment to finalize details in person

### Fulfillment
- Upon payment:
  - notify sign vendor of order details automatically
  - create fulfillment opportunity and track stages
  - schedule pickup/dropoff date and place it on connected Google Calendar
  - notify internal team and vendor of schedule and reminders

### Financial ops (practical requirement)
- System must calculate and record vendor cost vs margin.
- “Pay vendor automatically” is ideal; if not natively feasible, system must:
  - create a payable task + send vendor payment request automatically
  - capture proof of payment step (manual but tracked)

## 3) Constraints & compliance requirements (non-negotiable)
- **SMS and phone outreach must be consent-based** where required. If consent is unknown:
  - initial outreach should use compliant channels (often email) or manual outreach
  - SMS can be enabled only after explicit opt-in or a clear consent flag
- Every outreach sequence must include:
  - stop conditions (stop on response, STOP keyword handling)
  - quiet hours / time windows
  - max touches per day
- Do not scrape sources that violate terms; list-building must use approved sources or integrations.

## 4) Required modules used
- Settings + Labs
- Contacts (Smart Lists + consent flags)
- Conversations (multi-channel inbox + triage)
- Opportunities (2 pipelines: Sales + Fulfillment)
- Calendars (Sales appointments + Vendor pickup/dropoff)
- Sites (Offer landing page + thank-you page)
- Payments (Stripe + product + payment link/invoice)
- Automation (Workflows + Scheduler Trigger)
- AI Agents (Qualifier bot + personalization support)
- Reporting (weekly KPIs)
- App Marketplace (optional but recommended for enrichment or vendor notification)

## 5) Data model (must implement)
### 5.1 Custom fields (Contacts)
Minimum required:
- `biz_name`
- `biz_type` (e.g., mortgage broker, restaurant)
- `biz_industry`
- `biz_city`
- `biz_state`
- `biz_website`
- `ad_interest_level` (cold/warm/hot)
- `ad_package_selected`
- `ad_budget_range`
- `consent_email` (yes/no/unknown)
- `consent_sms` (yes/no/unknown)
- `lead_source` (manual/import/integration)
- `last_ai_summary` (short)
- `assigned_owner`

### 5.2 Tags (Contacts)
Required taxonomy:
- `stage:new`, `stage:contacted`, `stage:interested`, `stage:proposal-sent`, `stage:won`, `stage:lost`
- `seg:<industry>` (e.g., `seg:real-estate`)
- `intent:pricing`, `intent:callback`, `intent:not-interested`
- `status:do-not-contact` (if STOP/opt-out)

### 5.3 Pipelines
1) **Sales - Advertisers**
2) **Fulfillment - Sign Orders**

Each stage must have a “move rule” written in plain English.

### 5.4 Calendars
- `Sales - Advertiser Meeting`
- `Vendor - Pickup Scheduling` (or Dropoff Scheduling)

## 6) System architecture (what must happen)
### 6.1 Daily list-building
Two acceptable implementations:

**Option A (Preferred, if you have integration tools):**
- Scheduler Trigger (daily, weekdays) runs an ops workflow that triggers an external integration (webhook or marketplace action) to:
  - pull a list of local businesses meeting the target criteria
  - enrich each record (website, category, email)
  - create/update contacts in GHL with tags `stage:new` and segmentation tags

**Option B (If external integration is not available):**
- Scheduler Trigger creates an internal “Ops Task” daily:
  - “Build today’s prospect list”
  - VA manually imports the list (small CSV) and applies `stage:new`

### 6.2 Profiling before outreach
Before sending the first message, the system must populate:
- industry + website
- a short “business profile summary” field (`last_ai_summary`)
This can be:
- AI workflow step (GPT action) summarizing provided data, OR
- manual VA note (minimum acceptable)

### 6.3 Multi-channel outreach sequence
A standard outreach workflow must:
- start when contact is tagged `stage:new`
- send an email intro
- wait 1–2 business days
- if no response:
  - send follow-up email
  - if `consent_sms = yes`, send SMS follow-up
  - optionally send voicemail drop (if phone consent policy allows)
- stop immediately if:
  - contact replies
  - contact opts out (STOP / do-not-contact tag)
- route “interested” responses to:
  - send PDF or landing page link
  - offer booking link
  - offer payment link once commitment is confirmed

### 6.4 Qualification & handoff using AI
A Conversation AI bot must:
- detect intent: pricing / book / not interested / ask questions
- capture at least: interest level, budget range, package interest
- trigger a workflow (handoff) when:
  - lead is interested → move pipeline stage + send next step link
  - lead asks for appointment → send booking link or book appointment
  - lead opts out → tag + stop

### 6.5 Checkout + conversion
At minimum:
- Create a product and a payment link for the advertising package(s).
- When payment succeeds:
  - mark Sales opportunity as Won
  - create Fulfillment opportunity
  - notify vendor and internal team
  - send confirmation email with next steps

### 6.6 Vendor fulfillment coordination
Upon payment:
- Notify vendor via email/SMS (and optional webhook integration).
- Create or update a fulfillment record:
  - package type, dimensions, artwork, due date
- Schedule pickup/dropoff:
  - send vendor a booking link to pick a date
  - booking creates event on Google calendar through calendar integration
- Reminders:
  - 24–48h reminders for pickup/dropoff

### 6.7 Vendor payment handling (pragmatic)
System must:
- record vendor cost on the fulfillment opportunity
- create a payable task for finance:
  - “Pay vendor $X for Order #Y”
- optional: send vendor payment link/request and track completion

## 7) Required assets to build (Sites)
- Landing page: “Advertise at Golf Place”
  - benefits + packages + social proof
  - CTA: “Request info” and “Book a call” and/or “Buy now”
- Thank-you page:
  - next steps + calendar link
- Optional: PDF “Advertiser One-Pager”
  - offer summary + pricing + contact info + QR to payment/booking

## 8) Reporting requirements
Create dashboard: `RPT - Advertiser Weekly KPIs` including:
- new leads created this week
- leads contacted
- appointments booked
- deals won
- payments collected (if available)
- fulfillment status counts (open vs completed)

Schedule report weekly and send to internal team.

## 9) Deliverables (what the trainee must submit)
- Links:
  - funnel/website preview links
  - payment link URL
  - calendar booking links
- Screenshots:
  - custom fields list
  - tags taxonomy evidence (smart list filters or contact record)
  - workflows (scheduler + outreach + post-payment + vendor coordination)
  - AI bot flow builder
  - pipelines showing at least 1 test opportunity in each pipeline
  - reporting dashboard + scheduled report
- Test proofs:
  - a test contact moving through: new → contacted → interested → payment link sent
  - a test payment (in test mode if needed) triggering fulfillment workflow

## 10) Grading rubric (100% required)
See `19_Grading_Rubrics_and_Checklists.md`.
