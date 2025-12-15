# Global Grading Rubrics & Checklists (Dec 2025)

## Grading rules
- Module quizzes: 100% required
- Capstone: 100% rubric required
- One revision allowed for capstone (unless cohort rules override)

---

# Capstone Rubric (Pass/Fail Checklist)

## A) Settings & Foundation (Required)
- [ ] Business profile configured (timezone correct)
- [ ] Labs features enabled as required and documented
- [ ] Staff user created with least-privilege permissions
- [ ] Custom Values created (company name, phone, email, booking link, offer link)
- [ ] Custom Fields created exactly as required in capstone spec

## B) Data & Segmentation (Required)
- [ ] Tags taxonomy implemented (stage/seg/intent/status)
- [ ] 3 Smart Lists exist:
  - [ ] New Prospects
  - [ ] Interested Leads
  - [ ] Do Not Contact / Opt-out
- [ ] Contact record shows correct fields + tags populated for at least one test lead

## C) Pipelines (Required)
- [ ] Pipeline `Sales - Advertisers` exists with clear stages
- [ ] Pipeline `Fulfillment - Sign Orders` exists with clear stages
- [ ] At least 1 test opportunity in each pipeline and moved through stages

## D) Calendars (Required)
- [ ] Calendar `Sales - Advertiser Meeting` exists + booking link works
- [ ] Calendar `Vendor - Pickup Scheduling` exists + booking link works
- [ ] Reminders configured (at least 1 reminder per calendar)

## E) Sites (Required)
- [ ] Landing page exists (Advertise at Golf Place) with CTA(s)
- [ ] Thank-you page exists with next-step instructions
- [ ] Mobile view verified (screenshot)

## F) Payments (Required)
- [ ] Stripe connected or documented as connected
- [ ] Product created (one-time or recurring)
- [ ] Payment link created and tested
- [ ] Post-payment redirect configured OR clear thank-you flow exists

## G) Automation (Required)
- [ ] Scheduler-trigger workflow exists for daily ops
- [ ] Outbound outreach workflow exists and is compliant:
  - [ ] quiet hours configured
  - [ ] stop-on-response enabled
  - [ ] max touches logic exists (documented)
  - [ ] consent gating for SMS/calls
- [ ] Post-payment workflow exists:
  - [ ] moves opportunity to won
  - [ ] creates fulfillment opportunity
  - [ ] notifies vendor + internal team
- [ ] Vendor scheduling workflow exists (booking link to pickup/dropoff)

## H) AI Agents (Required)
- [ ] Conversation AI bot exists with:
  - [ ] bot goals defined
  - [ ] routing by intent (interested/book/not interested)
  - [ ] capture required fields (interest + budget + package)
  - [ ] triggers workflows for handoff
  - [ ] stop/human handover safeguards enabled
- [ ] Bot tested with screenshot transcript

## I) Reporting (Required)
- [ ] Dashboard `RPT - Advertiser Weekly KPIs` exists
- [ ] Report scheduled weekly with correct recipients (internal)

## J) Evidence Package (Required)
- [ ] All required links provided
- [ ] Screenshots provided for all areas listed in capstone deliverables
- [ ] Tester proof: contact moved from new → interested → payment link sent
- [ ] Tester proof: payment triggers fulfillment steps (or documented test-mode limitation)

## Pass/Fail
- Pass requires every checkbox checked.
- Any missing checkbox = fail until corrected within the allowed revision.
