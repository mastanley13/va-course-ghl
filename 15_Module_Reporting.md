# Module 15 — Reporting (Dashboards + Custom Reports + Attribution)

## Why it matters
Reporting proves the system works and tells you where to improve. For capstone, reporting must answer:
- Are we generating new advertiser leads?
- Which channels convert?
- How long does it take to go from lead → paid?
- What’s the fulfillment throughput?

## Learning outcomes
A passing VA can:
- Explain attribution at a high level (first vs latest).
- Build a dashboard for weekly KPIs.
- Convert dashboards into custom reports (or build a report from scratch).
- Identify common reporting discrepancies (timezone, opportunity value vs payment totals).

## Vocabulary
- **Attribution**: source/channel that generated lead
- **First vs latest attribution**: original source vs most recent source
- **Dashboard**: KPI view
- **Custom report**: scheduled/shareable report output
- **KPI**: measurable metric (leads, bookings, won deals, revenue)

## Course sections and pages
### Section A — Orientation
- Page 1: What reporting should answer for operators
- Page 2: Attribution fundamentals

### Section B — Dashboards and reports
- Page 3: Building dashboards
- Page 4: Creating custom reports (from scratch or from dashboard)
- Page 5: Scheduling and sharing reports

### Section C — QA + troubleshooting
- Page 6: “Revenue mismatch” root causes
- Page 7: Timezone mismatch root causes

### Section D — Quiz
- Page 8: Quiz (10 questions)

### Section E — Lab
- Page 9: Build a weekly advertiser acquisition report

## Quiz (sample bank)
1) Attribution answers: **where leads came from** ✅  
2) First attribution is: **first interaction source** ✅  
3) Latest attribution is: **most recent interaction source** ✅  
4) Custom reports can be created by: **starting from scratch or converting a dashboard** ✅  
5) A KPI dashboard should include: **leads, booked, won, revenue (as defined)** ✅  
6) Revenue mismatch can occur because: **opportunity value vs payments collected** ✅  
7) Timezone mismatch can cause: **date shifts in reporting** ✅  
8) Reports should be: **scheduled weekly/monthly for client communication** ✅  
9) Reporting helps: **optimize workflows and outreach** ✅  
10) A strong report is: **actionable, not just numbers** ✅

## Lab assignment (evidence required)
- Create a dashboard: `RPT - Advertiser Weekly KPIs`
- Include at least: leads created, appointments booked, won deals, payments collected (if available)
- Schedule a report (weekly)
Evidence: screenshots of dashboard widgets and report schedule settings

## Relatable metaphor — “Flight Instruments”
Reporting is the cockpit instrument panel. It tells you altitude, speed, and heading so you can correct course before turbulence becomes a crisis.

## Scenario walkthroughs with decision points
- **Revenue dip detected**
  - Decision: attribution or actual? → Compare Payments vs Opportunities; if mismatch, inspect source/UTM and timezone settings.
  - Decision: which module next? → Drill into Opportunities stages for drop-off points.
- **Channel performance review**
  - Decision: which filters to apply? → Filter by campaign/source tags and date ranges aligned to spend periods.
  - Decision: share or export? → Share dashboard links internally; export CSV only when needed for finance.

## UI callouts + screenshot placeholders
- [Screenshot: Dashboard widget configuration panel]
- [Screenshot: Saved report filters highlighting date and source fields]
- [Screenshot: Drill-down table with column highlights]

## Stop and try (self-check)
1. What do you check if appointments drop but traffic is steady? <details><summary>Answer</summary>Calendar availability/reminders and form submission-to-booking conversion.</details>
2. How do you avoid skewed revenue reports? <details><summary>Answer</summary>Separate opportunity value from collected payments and align timezones.</details>
3. When should you export data? <details><summary>Answer</summary>Only when necessary for finance/audits; prefer in-platform sharing otherwise.</details>
4. Which tags help with source-level reporting? <details><summary>Answer</summary>`src:` and `utm_` fields on contacts/opportunities.</details>

## Practice labs + evidence rubric
- **Lab: Signal-trace report**
  - Deliverable: Dashboard with three widgets (appointments, pipeline value, payments) plus a saved report filtered by source and date.
  - Evidence: Screenshots of widget settings, saved report filters, and a drill-down record view.
  - Rubric: Pass if metrics align (no timezone errors), filters are documented, and drill-down matches the top-level numbers.
