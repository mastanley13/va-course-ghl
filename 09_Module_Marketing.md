# Module 09 — Marketing (Email, Campaigns, Templates, Trigger Links, Ad Manager entry)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Marketing is how you produce outbound sequences and assets that are measurable and consistent. For capstone: email templates, campaign-style outreach, trigger links to landing pages/PDF, and (optionally) Ad Manager integration.

## Learning outcomes
A passing VA can:
- Create and manage email templates.
- Use campaigns appropriately (when vs workflows).
- Use trigger links to track clicks and trigger automations.
- Understand Social Planner and Ad Manager at a “navigation + setup” level.

## Vocabulary
- **Email template**: reusable email content
  - *What this means:* Draft the message once and reuse it across campaigns or workflows with merge fields.
- **Campaign**: scheduled/batched marketing sends (use-case dependent)
  - *What this means:* Use campaigns for planned blasts instead of event-driven automation.
- **Trigger link**: tracked link that can trigger workflow actions when clicked
  - *What this means:* Swap ordinary URLs for trigger links so clicks show on the contact timeline and fire automations.
- **Ad Manager**: ad management workspace (if used)
  - *What this means:* This area centralizes ad accounts and reporting when connected.
- **UTM parameters**: tracking tags added to URLs for attribution
  - *What this means:* Add UTMs to see which channel or campaign produced the click or conversion.

## Course sections and pages
### Section A — Orientation
- Page 1: Marketing vs Automation (when to use what)
- Page 2: Where Marketing assets show up (email builder, reporting)

### Section B — Templates + campaigns
- Page 3: Email templates (structure + brand voice)
- Page 4: Campaign concepts (basic)

### Section C — Trigger Links (capstone-critical)
- Page 5: Create trigger links
- Page 6: Using trigger links in email/SMS + how they tie into workflows

### Section D — Social Planner + Ad Manager (navigation-level)
- Page 7: Social Planner basics (post scheduling)
- Page 8: Ad Manager: what it is, when it matters for reporting

### Section E — Quiz
- Page 9: Quiz (10 questions)

### Section F — Lab
- Page 10: Create 2 email templates + 1 trigger link + verify click tracking

## Production SOP — Trigger link usage
- Use trigger links for:
  - click tracking
  - moving pipeline stages (“proposal viewed”)
  - starting payment follow-ups
- Always test:
  - link resolves to correct URL
  - click registers on contact timeline
  - workflow trigger fires as intended

## Quiz (sample bank)
1) Trigger links do: **track clicks and can trigger workflow actions** ✅  
2) True/False: A trigger link click can be used as a workflow trigger. **True** ✅  
3) Email templates help by: **standardizing brand voice and saving time** ✅  
4) UTM parameters help with: **attribution tracking** ✅  
5) Trigger links can be used in: **email, SMS, and supported social channels** ✅  
6) Marketing assets should be tested by: **sending to a test contact** ✅  
7) Social Planner is used for: **scheduling social posts** ✅  
8) Ad Manager matters for: **ad reporting + campaign management (if enabled)** ✅  
9) Workflows are best for: **behavior-driven automation** ✅  
10) Campaigns are best for: **broadcast/batch marketing (use-case dependent)** ✅

## Lab assignment (evidence required)
1) Create email template: `TPL - Advertiser Intro`
2) Create email template: `TPL - Follow-Up #1`
3) Create trigger link: `TL - Advertiser Offer Page`
4) Send test email to yourself; click link; screenshot contact activity showing link click.
Rubric: Pass if click is recorded and template content is clean and branded.

## Relatable metaphor — “Broadcast Studio with Switchboard”
Marketing is a studio with mics, cameras, and a switchboard. You pick the channel, queue the segment, and watch the meters to avoid dead air or feedback.

## Scenario walkthroughs with decision points
- **List warm-up**
  - Decision: send SMS or email first? → Use email to warm, SMS only to consented contacts with quiet hours set.
  - Decision: which link to track? → Use trigger links for each offer variant to segment responders.
- **Ad hoc promo request**
  - Decision: use campaign or workflow? → Use campaign for broadcast batch, workflow for behavior-driven sequences.
  - Decision: low open rates? → Test subject line variation, resend to non-openers, and check domain reputation.

## UI callouts + screenshot placeholders
- [Screenshot: Campaign builder showing steps and timing]
- [Screenshot: Trigger link configuration screen]
- [Screenshot: Campaign analytics with opens/clicks annotated]

## Stop and try (self-check)
1. When should SMS be avoided? <details><summary>Answer</summary>When consent is not explicit or quiet hours would be violated.</details>
2. What is a trigger link used for? <details><summary>Answer</summary>Tracking clicks and applying tags/automation when contacts engage.</details>
3. Which module checks deliverability health? <details><summary>Answer</summary>Reporting/Email deliverability metrics or domain reputation tools.</details>
4. How do you prevent sending duplicate promos? <details><summary>Answer</summary>Use exclusion filters/tags and test lists before broadcasting.</details>

## Practice labs + evidence rubric
- **Lab: Mini-campaign launch**
  - Deliverable: Two-step email/SMS with trigger link and suppression rules.
  - Evidence: Screenshots of campaign steps, trigger link, and analytics after a test send.
  - Rubric: Pass if consent rules are followed, trigger link fires tags/metrics, and analytics screenshots show opens/clicks.
