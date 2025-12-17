# Module 02 — Dashboard (Sub-Account)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
The Dashboard is where VAs confirm account health, quickly access key areas, and spot “red flags” (failed workflows, missing integrations, unread messages).

## Learning outcomes
A passing VA can:
- Navigate key dashboard widgets and understand what each means.
- Identify the 5 most common “account is broken” symptoms from the dashboard.
- Use dashboard → drill-down behavior to find the source module (Conversations, Payments, Calendars, etc.).

## Vocabulary
- **Widget**: dashboard block (e.g., appointments, conversations, revenue).
  - *What this means:* Each widget is a live tile you can click to open the underlying list or report.
- **Drill-down**: clicking into the relevant module/details behind a widget.
  - *What this means:* Use drill-down to jump straight from the summary number to the exact records causing it.
- **KPI**: key performance indicator (appointments booked, leads, revenue, etc.).
  - *What this means:* KPIs are the few numbers leaders watch to judge health; you should know where each one comes from.
- **Account health check**: quick checks to validate systems are running.
  - *What this means:* Run a short daily review to catch errors or outages before customers feel them.

## Course sections and pages
### Section A — Orientation
- Page 1: What the Dashboard is used for (VA perspective)
- Page 2: “Daily Checklist” mindset: how to scan in <5 minutes

### Section B — Practical Navigation
- Page 3: Where dashboard data comes from (Contacts / Opportunities / Calendars / Payments / Conversations)
- Page 4: How to drill down into each metric

### Section C — Production SOP
- Page 5: Daily Dashboard SOP checklist
- Page 6: Weekly “Build QA” dashboard checklist (after shipping new automation/site)

### Section D — Pitfalls & troubleshooting
- Page 7: Common dashboard inconsistencies (timezone, attribution, incomplete integrations)

### Section E — Quiz (100% required)
- Page 8: Quiz (8 questions)

### Section F — Lab
- Page 9: Hands-on: create a “Daily Ops” dashboard snapshot (screenshots)

## Production SOP — Daily Dashboard Checklist
1) Unread conversations count is not ignored (triage)
2) Appointment volume and no-show rate (spot issues)
3) Payment failures/refunds (spot revenue leakage)
4) Workflow errors/failed steps (if surfaced)
5) Lead volume vs historical baseline (if visible)

## Pitfalls
- Numbers don’t match other reports due to timezone differences.
- Revenue widgets may show opportunity value, not payments received (validate in Payments/Transactions).

## Quiz (sample bank)
1) Dashboard is primarily used to: (A) build funnels (B) manage company settings (C) **monitor account health + KPIs** ✅  
2) True/False: All dashboard numbers are always payments collected. **False** ✅  
3) If unread messages spike, which module do you check? **Conversations** ✅  
4) If bookings drop suddenly, which modules are likely involved? **Calendars + Sites/Forms + Workflows** ✅  
5) A “health check” should be done: (A) once a month (B) **daily** ✅  
6) What is drill-down? **Clicking a widget to see underlying details** ✅  
7) A dashboard anomaly you must investigate immediately: **payment failures** ✅  
8) If metrics look “off by a day,” what root cause is common? **Timezone mismatch** ✅

## Lab assignment (evidence required)
Build the **Dashboard – Daily Health Check Snapshot** for the Ace Web Agency scenario (or your selected variant).
1) Access + confirm sub-account: Log in via your invite link, confirm the sub-account name at top (screenshot the dashboard home to prove you’re inside the trainee sub-account).
2) Identify widgets: Note the current values for Conversations, Opportunities/Pipeline value, Appointments, and any error tiles (failed payments/workflow errors). Record the numbers even if 0.
3) Drill down: Click at least two widgets (Conversations and Appointments recommended) and capture screenshots of the resulting pages/lists.
4) Screenshot set: Capture (a) full dashboard overview and (b) each drill-down view you opened (min two).
5) Red-flag list: List three signals you’d investigate (e.g., “Unread conversations = 5 → open Conversations,” “Pipeline value dropped → open Opportunities,” “Appointments = 0 → open Calendars/Sites”). Include which module you’d open for each.
6) Example action: Add one example narrative: “Appointments widget is red/0 this week → click it, open Calendar, confirm links and availability.”
Evidence bundle: dashboard overview, two drill-down screenshots, and a short write-up with three signals + next modules. Rubric: Pass if screenshots show drill-down use and the follow-up mapping is correct.

## Relatable metaphor — “Vitals Monitor in an ER”
The dashboard is the patient monitor in an emergency room. It shows pulse, pressure, and alerts. You don’t diagnose everything there, but you use it to decide which room to rush into next.

## Scenario walkthroughs with decision points
- **Morning health check**
  - Decision: unread messages spike? → Jump to Conversations and assign owners before moving on.
  - Decision: bookings drop vs last week? → Drill into Calendars, then inspect Sites/Forms submissions.
- **Post-launch QA after new workflow**
  - Decision: revenue widget unchanged after promo? → Check Payments for failed attempts, then Opportunities for deal stage updates.
  - Decision: workflow errors indicator lit? → Open Automation → specific workflow error logs before toggling anything off.

## UI callouts + screenshot placeholders
- [Screenshot: Dashboard home with arrows to Conversations, Calendars, and Payments widgets]
- [Screenshot: Drill-down modal for Appointments showing filter options]
- [Screenshot: Workflow error/alert tile with hover tooltip]

## Stop and try (self-check)
1. Which widget do you check first when inbox volume jumps? <details><summary>Answer</summary>Unread Conversations to confirm triage load.</details>
2. How do you verify if revenue drops are real vs tracking? <details><summary>Answer</summary>Compare Payments → Transactions with Opportunities values to rule out attribution gaps.</details>
3. What’s your next step if the timezone seems off? <details><summary>Answer</summary>Confirm sub-account timezone in Settings and re-run a spot check on the widget timestamps.</details>
4. When should you document a dashboard anomaly? <details><summary>Answer</summary>Immediately after you observe it, with a screenshot and a note on which module you will inspect.</details>
5. What drill-down behavior matters for KPIs? <details><summary>Answer</summary>Each widget should link to the source object list (conversations, appointments, payments) for root-cause review.</details>

## Practice labs + evidence rubric
- **Lab: Daily Ops snapshot (Ace Web Agency)**
  - Deliverable: Dashboard overview + two drill-down screenshots, plus a written list of three “red flags” and which module you will open for each.
  - Evidence: Dashboard screenshot proving you’re in the trainee sub-account, drill-down captures for at least two widgets, and the three-item action list.
  - Rubric: Pass if drill-downs are shown, actions map to the right modules, and the sub-account context is visible.
