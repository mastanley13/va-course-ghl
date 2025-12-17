# Capstone Build Spec — Ace Web Agency Implementation (Golf Advertising variant optional) (Dec 2025)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## 1) Scenario
Default track (recommended for all new cohorts): **Ace Web Agency** — a small web design agency using GoHighLevel to capture leads, book consultations, close projects, collect deposits, and deliver sites. All labs build toward this capstone, so your sub-account should already contain the calendars, forms, and assets from earlier modules.

Legacy/alternate track: If your cohort started with the Golf Advertising scenario, you may continue using it. Wherever this spec names web-agency assets, you can substitute the Golf equivalents (e.g., pipelines/products/calendars) and keep the same structure.

The system must be **as automated as possible** using:
- GHL UI modules (Contacts, Conversations, Opportunities, Sites, Payments)
- Workflows (including Scheduler Trigger)
- AI Agents (Conversation AI + optional Agent Studio / GPT actions)
- Project fulfillment notifications and scheduling
- Reporting dashboards for weekly KPIs

## 2) Goals (what “success” looks like)
### Acquisition
- Generate or import a daily list of prospects (Option A: webhook/enrichment; Option B: manual CSV) with website/industry captured.
- Engage prospects across compliant channels (email first, SMS only with consent).
- Qualify interest (services needed, budget range, website URL) and move opportunities through sales stages.

### Conversion
- When a lead commits:
  - send them to a landing page or PDF
  - collect a deposit or full payment via Stripe (Payment Link/Invoice/Order Form)
  - book a consultation to finalize scope if needed

### Fulfillment
- Upon payment:
  - create/update fulfillment opportunity
  - schedule project milestones or review calls on the calendar
  - notify internal team and (if applicable) external contractors

### Financial ops (practical requirement)
- Track project value vs. fulfillment cost.
- If contractor/vendor payments are used, create payable tasks or payment requests and capture proof once paid.

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
- Calendars (Consultations + Project Reviews)
- Sites (Lead capture funnel + thank-you page)
- Payments (Stripe + product + payment link/invoice)
- Automation (Workflows + Scheduler Trigger)
- AI Agents (Qualifier bot + personalization support)
- Reporting (weekly KPIs)
- App Marketplace (optional but recommended for enrichment or contractor notification)

## 5) Data model (must implement)
### 5.1 Custom fields (Contacts)
Minimum required (Ace Web Agency):
- `website_url`
- `biz_name`
- `biz_industry`
- `project_type` (e.g., new build, redesign)
- `project_budget_range`
- `project_timeline` (optional)
- `consent_email` (yes/no/unknown)
- `consent_sms` (yes/no/unknown)
- `lead_source` (manual/import/integration)
- `last_ai_summary` (short)
- `assigned_owner`

*(Golf Advertising variant: keep `ad_interest_level`, `ad_package_selected`, `ad_budget_range`, `biz_type`, etc., matching earlier labs.)*

### 5.2 Tags (Contacts)
Required taxonomy:
- `stage:new`, `stage:contacted`, `stage:interested`, `stage:proposal-sent`, `stage:won`, `stage:lost`
- `seg:<industry>` (e.g., `seg:real-estate`)
- `intent:consultation`, `intent:quote`, `intent:not-interested`
- `status:do-not-contact` (if STOP/opt-out)

### 5.3 Pipelines
1) **Sales - Web Projects** (or **Sales - Advertisers** for golf)
2) **Fulfillment - Projects** (or **Fulfillment - Sign Orders** for golf)

Each stage must have a “move rule” written in plain English.

### 5.4 Calendars
- `Website Consultation Calendar` (or `Sales - Advertiser Meeting`)
- `Project Review/Delivery` (or `Vendor - Pickup Scheduling`)

## 6) System architecture (what must happen)
### 6.1 Daily list-building
Two acceptable implementations:

**Option A (Preferred, if you have integration tools):**
- Scheduler Trigger (weekday) → webhook/marketplace action to pull/enrich prospects (website/industry/email) and create/update contacts tagged `stage:new` + segmentation tags.

**Option B (If external integration is not available):**
- Scheduler Trigger creates an “Ops Task” daily: “Build today’s prospect list” and VA imports a small CSV tagged `stage:new`.

### 6.2 Profiling before outreach
Before messaging, populate:
- industry + website + project type/budget
- short “business profile summary” (`last_ai_summary`)
Use AI summary (GPT action) or a concise VA note.

### 6.3 Multi-channel outreach sequence
Standard outreach workflow:
- Trigger: contact tagged `stage:new`
- Email intro → wait 1–2 business days → follow-up email → SMS follow-up only if `consent_sms = yes`
- Stop on response or opt-out
- Interested responses: send landing page/PDF, booking link, or payment link when scoped

### 6.4 Qualification & handoff using AI
Conversation AI bot should:
- detect intent: quote/consult/book/not interested
- capture: project type, budget range, website URL
- handoff: move pipeline stage + send booking link; tag/stop on opt-out

### 6.5 Checkout + conversion
At minimum:
- Create a product and payment link for a design package/deposit.
- On successful payment:
  - mark Sales opportunity Won
  - create Fulfillment opportunity
  - notify internal team (and contractor if used)
  - send confirmation email with next steps

### 6.6 Project fulfillment coordination
Upon payment:
- Create/update fulfillment record with scope, assets, and due dates.
- Schedule project milestones/review calls on the `Project Review/Delivery` calendar (or vendor scheduling in golf variant).
- Send reminders 24–48h before reviews/milestones.

### 6.7 Contractor/vendor payment handling (pragmatic)
- Record fulfillment cost on the opportunity.
- Create a payable task: “Pay contractor $X for Project #Y.”
- Optional: send payment request/link and track completion.

## 7) Required assets to build (Sites)
- Landing page: “Ace Web Agency – Website Consultation”
  - benefits + packages + social proof
  - CTA: “Request info” (form) and “Book a call” (calendar link) and/or “Pay deposit”
- Thank-you page:
  - next steps + calendar link + resource link (PDF)
- Optional: PDF “Website Project One-Pager”
  - offer summary + pricing + contact info + QR to payment/booking

## 8) Reporting requirements
Create dashboard: `RPT - Agency Weekly KPIs` including:
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
  - workflows (scheduler + outreach + post-payment + fulfillment coordination)
  - AI bot flow builder
  - pipelines showing at least 1 test opportunity in each pipeline
  - reporting dashboard + scheduled report
- Test proofs:
  - a test contact moving through: new → contacted → interested → payment link sent/booked
  - a test payment (in test mode if needed) triggering fulfillment workflow
  - if using golf variant, note the substituted asset names

## 10) Grading rubric (100% required)
See `19_Grading_Rubrics_and_Checklists.md`.
