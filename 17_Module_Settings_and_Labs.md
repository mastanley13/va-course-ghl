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
<details><summary>What</summary>
Settings act as the foundation layer; if timezone, permissions, or branding are off, everything downstream breaks.
</details>

<details><summary>Where</summary>
Review the Settings overview pages, starting with the course welcome that calls out the five most common mistakes to avoid.
</details>

<details><summary>How</summary>
Walk through the introductory pages that explain how settings connect to automations, calendars, and reporting, noting any current gaps in your sub-account.
</details>

<details><summary>Troubleshoot</summary>
If something seems off later, return here to confirm timezone, sender identity, and permission baselines before changing workflows.
</details>

> **You should see…** A clear list of foundational settings and the top mistakes highlighted for quick reference.

### Section B — Business profile + branding
<details><summary>What</summary>
Business Profile controls timezone, language, and phone defaults, while branded domains keep links clean and trusted.
</details>

<details><summary>Where</summary>
Navigate to Settings → Business Profile for timezone/identity, then open the branded domain or tracking link configuration page.
</details>

<details><summary>How</summary>
Update timezone, language, and main phone first, then confirm the branded domain or link is pointed correctly before using it in pages or emails.
</details>

<details><summary>Troubleshoot</summary>
If links look generic or emails show the wrong locale, re-check the Business Profile defaults and branded domain DNS/SSL status.
</details>

> **You should see…** Business Profile showing the correct timezone/identity and a branded domain status that is connected/secure.

### Section C — Data model settings
<details><summary>What</summary>
Custom values and fields structure your reusable data; deduplication keeps records clean for automations.
</details>

<details><summary>Where</summary>
Go to Settings → Custom Values to build variables, then Settings → Custom Fields for contacts and opportunities, and finish with the Data Management tools for dedupe rules.
</details>

<details><summary>How</summary>
Create the baseline values (business name, main phone/email, booking/website links), add intake-aligned custom fields, and set a deduplication rule before importing data.
</details>

<details><summary>Troubleshoot</summary>
If automations show blanks or duplicates, verify the value keys match your templates and run the dedupe rules on recent imports.
</details>

> **You should see…** Custom Values and Custom Fields populated with the baseline entries, plus dedupe rules enabled for new records.

### Section D — Access control
<details><summary>What</summary>
Roles and permissions guard access so staff only see what they need for onboarding and support.
</details>

<details><summary>Where</summary>
Open Settings → My Staff to create users and assign roles, then review the permission matrix or copy permissions flow.
</details>

<details><summary>How</summary>
Add staff with least-privilege roles, duplicating permissions from a known-good profile when possible, and document who owns sensitive modules.
</details>

<details><summary>Troubleshoot</summary>
If a user cannot see a module, compare their role to the reference profile; if they see too much, tighten access and retest their login.
</details>

> **You should see…** Staff accounts scoped to the right modules with permission sets matching your onboarding template.

### Section E — Labs
<details><summary>What</summary>
Labs toggles enable in-development features that can change the UI or module availability.
</details>

<details><summary>Where</summary>
Navigate to Settings → Labs to review available toggles and their descriptions before enabling them.
</details>

<details><summary>How</summary>
Turn on required Labs features deliberately, noting the date, owner, and purpose, and capture evidence for the build log.
</details>

<details><summary>Troubleshoot</summary>
If a feature is missing or unstable, confirm the Lab is enabled, refresh the app, and be ready to disable it if it introduces regressions.
</details>

> **You should see…** Labs toggles set as intended with notes on what was enabled and why.

### Section F — Quiz
<details><summary>What</summary>
The quiz validates understanding of settings, data hygiene, permissions, and Labs impacts.
</details>

<details><summary>Where</summary>
Access the quiz page for this module after completing Sections A–E to check mastery.
</details>

<details><summary>How</summary>
Answer the 12 questions using your notes from the walkthroughs and confirm any missed items before proceeding.
</details>

<details><summary>Troubleshoot</summary>
If you miss multiple questions in one area, revisit that section’s callouts and retake the quiz to confirm retention.
</details>

> **You should see…** A completion notice for the 12-question quiz and clarity on any topics to review before the lab.

### Section G — Lab
- Page 11: Setup “new sub-account baseline”

## Production SOP — New sub-account baseline
1. [ ] Business Profile complete and correct — confirm identity, address, and sender details before anything else. ![Expected screenshot placeholder](./images/expected-screenshot.png)
2. [ ] Timezone set correctly to prevent calendar and reporting confusion for every user. ![Expected screenshot placeholder](./images/expected-screenshot.png)
3. [ ] Custom values created for business name, main phone/email, booking link, and website link so templates stay reusable. ![Expected screenshot placeholder](./images/expected-screenshot.png)
4. [ ] Custom fields created for the capstone (`biz_type`, `biz_industry`, `ad_interest_level`, `consent_sms`, `lead_source`) before importing or building forms. ![Expected screenshot placeholder](./images/expected-screenshot.png)
5. [ ] Staff user added with restricted permissions aligned to least privilege and onboarding standards. ![Expected screenshot placeholder](./images/expected-screenshot.png)
6. [ ] Labs toggles enabled as required and documented with date/owner for future audits. ![Expected screenshot placeholder](./images/expected-screenshot.png)

> **You should see…** Each checklist item marked off with screenshots confirming the baseline is ready for builds.

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
1. [ ] Complete the baseline SOP in a test sub-account, mirroring production-ready settings. ![Expected screenshot placeholder](./images/expected-screenshot.png)
2. [ ] Capture Business Profile and timezone proof to verify reporting will align. ![Expected screenshot placeholder](./images/expected-screenshot.png)
3. [ ] Capture Custom Values and Custom Fields lists to demonstrate reusable data scaffolding. ![Expected screenshot placeholder](./images/expected-screenshot.png)
4. [ ] Capture Staff permissions and Labs toggles screens to validate access control and feature availability. ![Expected screenshot placeholder](./images/expected-screenshot.png)

> **You should see…** A complete set of screenshots mapped to each checklist item, showing the test sub-account matches the baseline standard.

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
1. [ ] Lab: Settings stabilization — work through the checklist to confirm each critical area is configured and documented. ![Expected screenshot placeholder](./images/expected-screenshot.png)
2. [ ] Deliverable: Submit the completed settings checklist with proof for each area, including Labs toggles and who enabled them. ![Expected screenshot placeholder](./images/expected-screenshot.png)
3. [ ] Evidence: Capture screenshots for timezone, domains/senders, phone/SMS, integrations, and the Labs page, noting any deviations. ![Expected screenshot placeholder](./images/expected-screenshot.png)
4. [ ] Rubric confirmation: Ensure all critical settings meet the standard, Labs toggles are recorded, and evidence is time-stamped. ![Expected screenshot placeholder](./images/expected-screenshot.png)

> **You should see…** A fully documented lab package with screenshots and timestamps that align to the stabilization rubric.
