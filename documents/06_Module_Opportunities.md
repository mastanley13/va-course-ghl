# Module 06 — Opportunities (Pipelines)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Opportunities convert conversation into a trackable sales process: stages, owners, values, and “won/lost” outcomes that power reporting and follow-up automations.

## Learning outcomes
A passing VA can:
- Create and edit pipelines and stages with clear rules.
- Manage opportunity cards (create, move, assign, update value/status).
- Automate pipeline movement using workflows.
- Use opportunities for two-track operations (Sales + Fulfillment).

## Vocabulary
- **Pipeline**: a board representing a process (sales or fulfillment)
  - *What this means:* Pipelines give you columns to move deals through so everyone sees current status at a glance.
- **Stage**: column in a pipeline (must be action-based)
  - *What this means:* Stage names should describe the action completed, guiding when to move a card forward.
- **Opportunity**: a deal object tied to a contact
  - *What this means:* Each opportunity links to one contact record and tracks potential revenue for that deal.
- **Card value**: expected revenue (not necessarily cash collected)
  - *What this means:* This is the forecasted amount; you still need Payments to confirm real money collected.
- **Won/Lost**: closing outcomes
  - *What this means:* Marking Won or Lost closes the loop so reports stay accurate and follow-ups stop or change.

## Course sections and pages
### Section A — Orientation
- Page 1: Pipelines vs Contacts vs Payments
- Page 2: What makes a stage “good” (rules and triggers)

### Section B — Setup
- Page 3: Create pipeline + stages
- Page 4: Stage naming and uniqueness rules

### Section C — Production SOP
- Page 5: “Sales pipeline” standard for advertisers
- Page 6: “Fulfillment pipeline” standard for sign delivery
- Page 7: Automation hooks (tags/workflow triggers to move stages)

### Section D — QA + troubleshooting
- Page 8: Why revenue reports don’t match payments
- Page 9: Stuck opportunities and “missing next step” diagnosis

### Section E — Quiz
- Page 10: Quiz (10 questions)

### Section F — Lab
- Page 11: Build two pipelines + move test opportunities

## Recommended pipeline patterns (for capstone)
### Sales - Web Projects (default) / Sales - Advertisers (variant)
Stages (example):
1) New Lead
2) Demo Scheduled
3) Proposal Sent
4) Closed Won
5) Closed Lost

### Fulfillment - Projects (default) / Fulfillment - Sign Orders (variant)
Stages (example):
1) Onboarded
2) Work In Progress
3) Completed
4) Closed Won/Lost (outcomes via status)

## Quiz (sample bank)
1) Opportunities represent: **deals tied to contacts** ✅  
2) True/False: Opportunity value always equals cash collected. **False** ✅  
3) A pipeline stage should be: **action-based with clear move rules** ✅  
4) Won/Lost stages: **exist by default and represent outcomes** ✅  
5) Two pipelines can be used for: **sales tracking and fulfillment tracking** ✅  
6) If a lead pays, you should move to: **Won** ✅  
7) If fulfillment is waiting on vendor, stage should reflect: **Sent to Vendor / waiting** ✅  
8) Pipelines can be updated by: **workflows** ✅  
9) If stages are duplicated, you might see: **naming uniqueness errors** ✅  
10) Opportunities help reporting by: **tracking deal progress and values** ✅

## Lab assignment (evidence required)
**Goal:** Build Sales + Fulfillment pipelines for the Ace Web Agency scenario.
1) Create pipelines: `Sales - Web Projects` and `Fulfillment - Projects` (use Advertisers/Sign Orders variant if keeping golf context).
2) Add stages: Sales → New Lead, Demo Scheduled, Proposal Sent, Closed Won/Lost (via status). Fulfillment → Onboarded, Work In Progress, Completed (outcome via status).
3) Enter test opportunities: Add at least one card per pipeline with value and contact (e.g., John Doe). Place one Sales card in New Lead and one directly in Proposal Sent.
4) Move stages: Drag the Sales card through Demo Scheduled → Proposal Sent; set status Won or Lost. Move the Fulfillment card from Onboarded → Work In Progress and mark Completed.
5) Stale trigger write-up: Identify one stage to watch (e.g., Proposal Sent > 7 days) and describe the Stale Opportunity trigger you would configure.
Evidence: Screenshots of both pipeline boards with stages visible, one opportunity detail showing value/contact/status, and the written stale-trigger note. Rubric: Pass if pipelines/stages follow the scenario names, test cards exist in both, and the stale-trigger plan is present.

## Relatable metaphor — “Factory Assembly Line”
Opportunities are the assembly line for deals. Each stage is a workstation; if parts pile up at one station, the whole line slows.

## Scenario walkthroughs with decision points
- **Lead qualifies mid-call**
  - Decision: create opportunity immediately or later? → Create immediately, assign owner, and set stage to reflect verbal intent.
  - Decision: missing budget info? → Add a follow-up task and tag `status:needs-info` before moving stages.
- **Pipeline clog**
  - Decision: many cards stuck in “Proposal Sent”? → Trigger follow-up workflow or schedule callbacks; consider moving stale cards to Lost with reasons.
  - Decision: lost reasons not captured? → Add required field or dropdown before stage change is allowed.

## UI callouts + screenshot placeholders
- [Screenshot: Pipeline board with stage definitions annotated]
- [Screenshot: Opportunity detail showing custom fields, tasks, and activity]
- [Screenshot: Stage change modal capturing lost reason]

## Stop and try (self-check)
1. What data must be captured before moving to “Qualified”? <details><summary>Answer</summary>Contact owner, budget/need notes, and next action.</details>
2. How do you avoid stale opportunities? <details><summary>Answer</summary>Use tasks/reminders and enforce lost reasons for aging cards.</details>
3. Which module links most directly to pipeline value? <details><summary>Answer</summary>Payments/Transactions for actual collected revenue.</details>
4. Why align pipeline names to naming conventions? <details><summary>Answer</summary>For consistent reporting and automation triggers.</details>
5. What should happen after marking Lost? <details><summary>Answer</summary>Apply a lost reason, tag for reactivation sequence, and update reporting.</details>

## Practice labs + evidence rubric
- **Lab: Dual pipelines + stage movement**
  - Deliverable: Sales + Fulfillment pipelines with test cards moved through stages and a documented stale-stage trigger.
  - Evidence: Pipeline board screenshots, one opportunity detail with value/contact/status, and the stale-trigger description.
  - Rubric: Pass if both pipelines exist with scenario names, cards are moved, and stale-stage monitoring is defined.
