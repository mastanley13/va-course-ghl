# Module 17 — Settings + Labs (Sub-Account Foundation)

## Why it matters
Settings determines whether everything works: timezone, staff permissions, branded links, custom values/fields, phone behavior, and Labs feature availability.

## Learning outcomes
A passing VA can:
- Configure business profile correctly (timezone, language, core business info).
- Create and use custom values for reusable content.
- Create custom fields aligned to intake + automation needs.
- Configure staff roles/permissions safely (least privilege).
- Enable/validate Labs features and document what’s enabled.

## Vocabulary
- **Business Profile**: core account settings (identity, timezone, language)
- **Custom Values**: reusable variables used across the platform
- **Custom Fields**: structured data fields on contacts/opportunities
- **Roles/Permissions**: what users can access
- **Labs**: feature toggles (some require agency-level enablement)

## Course sections and pages
### Section A — Orientation
- Page 1: Settings as the “foundation layer”
- Page 2: The 5 most common settings mistakes that break builds

### Section B — Business profile + branding
- Page 3: Business profile essentials (timezone, language, phone)
- Page 4: Branded domain concept (for links and tracking)

### Section C — Data model settings
- Page 5: Custom values (why + how to use)
- Page 6: Custom fields (contacts + opportunities)
- Page 7: Deduplication and data hygiene basics

### Section D — Access control
- Page 8: My Staff roles/permissions and copy permissions (team onboarding)

### Section E — Labs
- Page 9: Enabling Labs features and documenting changes

### Section F — Quiz
- Page 10: Quiz (12 questions)

### Section G — Lab
- Page 11: Setup “new sub-account baseline”

## Production SOP — New sub-account baseline
1) Business Profile complete and correct
2) Timezone correct (prevents reporting/calendar confusion)
3) Custom values created for:
   - business name, main phone, main email, booking link, website link
4) Custom fields created for capstone:
   - `biz_type`, `biz_industry`, `ad_interest_level`, `consent_sms`, `lead_source`
5) Staff user added with restricted permissions
6) Labs toggles enabled as required (documented)

## Quiz (sample bank)
1) Business Profile controls: **timezone/language/core identity** ✅  
2) Timezone matters because: **calendars + reports depend on it** ✅  
3) Custom values are used to: **reuse content and update globally** ✅  
4) Custom fields are used to: **store structured data for automation/reporting** ✅  
5) Roles/permissions should follow: **least privilege** ✅  
6) Labs features can change: **available UI/modules** ✅  
7) If a feature is missing, check: **Labs and permissions** ✅  
8) A branded domain helps with: **clean links and trust** ✅  
9) Data hygiene includes: **dedupe and consistent formatting** ✅  
10) Staff permissions should be: **restricted to required modules** ✅  
11) Documenting settings changes helps: **debugging and repeatable builds** ✅  
12) The baseline should be done: **before building workflows/pages** ✅

## Lab assignment (evidence required)
- Complete baseline SOP in a test sub-account
- Provide screenshots of:
  - Business Profile (timezone visible)
  - Custom Values list
  - Custom Fields list
  - Staff permissions screen
  - Labs toggles screen
Rubric: Pass if baseline matches checklist exactly.

## Relatable metaphor — “Engine Room and Circuit Breakers”
Settings + Labs are the engine room. You flip breakers to power features and tune the machinery so the rest of the ship runs without sparks.

## Scenario walkthroughs with decision points
- **New sub-account creation**
  - Decision: enable Labs now or later? → Enable critical UI features (e.g., Conversations) early; delay experimental items until QA’d.
  - Decision: who owns integrations? → Confirm account owner credentials before connecting email/SMS/payment providers.
- **Post-launch audit**
  - Decision: inconsistent naming found? → Pause new builds, normalize fields/tags, and communicate changes to the team.
  - Decision: deliverability issues? → Check sending domains, DND hours, and compliance toggles before adjusting workflows.

## UI callouts + screenshot placeholders
- [Screenshot: Settings overview with highlighted critical sections (Company, My Staff, Integrations)]
- [Screenshot: Labs page showing enabled toggles for Conversations/Dashboard]
- [Screenshot: Custom fields/tags page with naming convention examples]

## Stop and try (self-check)
1. Which settings must be verified before automations run? <details><summary>Answer</summary>Time zone, domain/sender authentication, phone/SMS setup, and user permissions.</details>
2. When should you avoid enabling a Lab feature? <details><summary>Answer</summary>When it is untested for your account type or lacks rollback options.</details>
3. How do you ensure naming stays consistent across modules? <details><summary>Answer</summary>Document standards and audit pipelines/tags/fields after each build.</details>
4. What should be captured after toggling a Lab on? <details><summary>Answer</summary>Screenshot, date/time, who enabled it, and a rollback note.</details>

## Practice labs + evidence rubric
- **Lab: Settings stabilization**
  - Deliverable: Completed settings checklist with proof of each critical area and Labs toggles.
  - Evidence: Screenshots of timezone, domains/senders, phone/SMS, integrations, and Labs page; note any deviations.
  - Rubric: Pass if all critical settings are configured per standard, Labs toggles are recorded, and evidence is time-stamped.
