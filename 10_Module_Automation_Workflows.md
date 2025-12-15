# Module 10 — Automation (Workflows)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Workflows are the system’s engine. The capstone is fundamentally a set of workflows that:
- runs daily recurring list operations (Scheduler Trigger)
- executes multi-channel outreach sequences
- routes by intent
- stops on response and respects quiet hours
- triggers payment, fulfillment, and vendor notifications

## Learning outcomes
A passing VA can:
- Build workflows from scratch with correct triggers and actions.
- Use Wait steps and timing controls safely.
- Use Stop-on-response and correct call/voicemail settings.
- Use Scheduler Trigger to run contactless recurring jobs (daily, weekly, cron).
- Use webhooks (outbound/inbound conceptually) for integrations.
- Use AI actions (GPT, AI Decision Maker) responsibly (cost + reliability).

## Vocabulary
- **Trigger**: event that starts workflow (contact event, webhook, scheduler, etc.)
  - *What this means:* Triggers decide when a workflow runs—no trigger, no automation.
- **Action**: step in workflow (send SMS, add tag, webhook, create task, voicemail)
  - *What this means:* Actions are the tasks the workflow performs after it starts.
- **Wait**: delays next steps; can be time-based or condition-based
  - *What this means:* Wait steps space out actions so contacts aren’t overwhelmed and logic can check for updates.
- **Stop on response**: pauses/stops messaging when contact replies
  - *What this means:* This prevents double-messaging once someone responds.
- **Scheduler Trigger**: contactless scheduled workflow trigger (hourly/daily/cron)
  - *What this means:* Use Scheduler when you need automations to run on a time basis instead of per contact.
- **Webhook (Outbound)**: send data from GHL to external system
  - *What this means:* Outbound webhooks push HighLevel data to another app via URL.
- **Webhook (Inbound)**: external system triggers a workflow in GHL
  - *What this means:* Inbound webhooks start a workflow when another system sends data into HighLevel.
- **Voicemail (drop)**: send pre-recorded voicemail message
  - *What this means:* The system leaves a recorded voicemail without ringing the phone like a normal call.
- **AI Decision Maker / GPT action**: AI-powered workflow actions (often premium)
  - *What this means:* These steps use AI to classify or generate text, so monitor cost and accuracy.

## Course sections and pages
### Section A — Orientation
- Page 1: Workflow reliability principles (determinism, testing, stop conditions)
- Page 2: Triggers vs actions vs filters

### Section B — Timing + compliance
- Page 3: Wait action (how it works and why)
- Page 4: Workflow settings (quiet hours, sender, stop on response)

### Section C — Scheduler Trigger (capstone-critical)
- Page 5: Why scheduler matters (daily jobs without contacts)
- Page 6: Scheduling options (daily/weekly/monthly/cron; skip weekends; stop-on date)
- Page 7: “Contactless” caveat (contact-only actions skip)

### Section D — Communication actions
- Page 8: SMS/email/call/voicemail basics
- Page 9: Voicemail drop action and file requirements

### Section E — Integrations
- Page 10: Outbound webhook concept + testing
- Page 11: Using workflows to notify vendors (email/SMS/webhook)

### Section F — AI in workflows
- Page 12: GPT action use cases (summaries, personalization, classification)
- Page 13: AI Decision Maker for routing (cost + guardrails)

### Section G — Quiz
- Page 14: Quiz (15 questions)

### Section H — Lab
- Page 15: Build 2 workflows (Daily Scheduler + Outbound Sequence)

## Production SOP — Workflow build rules
- Name every workflow clearly (department/purpose/trigger/version).
- Add a “test mode” toggle (tag-based) so you can run safely.
- Always include:
  - stop conditions
  - quiet hours
  - max touches per day
- Log key events:
  - tag or note on contact timeline at each milestone
- Build with recoverability:
  - if webhook fails, create task + alert team

## Quiz (sample bank)
1) Scheduler Trigger is: **contactless scheduled workflow start** ✅  
2) Cron schedules cannot run: **more than once per hour** ✅  
3) Stop on response prevents: **over-messaging after a reply** ✅  
4) Wait actions are used to: **control timing between steps** ✅  
5) Outbound webhook sends data: **from HighLevel to external system** ✅  
6) Inbound webhook is: **external → starts workflow in HighLevel** ✅  
7) Voicemail action sends: **pre-recorded voicemail file to contact** ✅  
8) Quiet hours are configured in: **workflow settings** ✅  
9) A “test tag” is used to: **prevent sending to real prospects during testing** ✅  
10) AI actions should be used: **intentionally and measured (cost/reliability)** ✅  
11) Contactless workflows should focus on: **contactless actions (tasks, webhooks, sheets)** ✅  
12) Workflows should always be: **tested end-to-end** ✅  
13) A re-engagement sequence should stop when: **lead commits or opts out** ✅  
14) If a step fails, you should: **alert + create task + allow recovery** ✅  
15) Workflow naming should include: **purpose + trigger + version** ✅

## Lab assignment (evidence required)
Workflow A: `OPS - Daily Prospect Build - Scheduler - v1`
- Trigger: Scheduler daily (weekday only)
- Action: outbound webhook OR create task “Build today’s list” (if no integration)

Workflow B: `ACQ - Outbound Prospecting - New Contact Tag - v1`
- Trigger: contact tagged `stage:new`
- Actions: email → wait → SMS (only if consent) → voicemail drop → stop on response

Evidence:
- screenshots of both workflow canvases
- screenshot of settings tab showing quiet hours + stop-on-response
Rubric: Pass if workflows match spec and include stop conditions.

## Relatable metaphor — “Factory Robot Arm”
Automation is the robot arm on the production line: it performs repeatable tasks consistently and stops when a safety sensor (conditions) is tripped.

## Scenario walkthroughs with decision points
- **New lead from form**
  - Decision: start workflow instantly or delay? → Start instantly for confirmation, delay outreach if consent/timezone uncertain.
  - Decision: what stops the workflow? → Stop on response or when opportunity stage changes.
- **Workflow failing mid-run**
  - Decision: is trigger correct? → Check enrollment history and filters first.
  - Decision: retries vs manual fix? → Retry after correcting settings; if data missing, branch to human task creation.

## UI callouts + screenshot placeholders
- [Screenshot: Workflow canvas with trigger, conditions, and actions annotated]
- [Screenshot: Execution log showing success/failure statuses]
- [Screenshot: Stop-on-response/conditional branch configuration]

## Stop and try (self-check)
1. When should you enable “Stop on Response”? <details><summary>Answer</summary>Whenever continued messaging after a reply would feel spammy or duplicative.</details>
2. How do you prevent loops? <details><summary>Answer</summary>Use entry filters, tags, and stage checks before re-enrolling contacts.</details>
3. Where do you confirm if a trigger is firing? <details><summary>Answer</summary>Enrollment/execution logs and trigger history.</details>
4. What should happen before updating pipeline stages automatically? <details><summary>Answer</summary>Ensure the stage move rules are documented and mirrored in Opportunities.</details>
5. How do you handle missing data needed for an action? <details><summary>Answer</summary>Branch to a task creation or human review step instead of forcing the action.</details>

## Practice labs + evidence rubric
- **Lab: Safety-first workflow**
  - Deliverable: Workflow with clear trigger, safety checks, and stop conditions.
  - Evidence: Screenshots of the workflow, enrollment log, and a test contact timeline showing each action.
  - Rubric: Pass if steps execute correctly, stop conditions work, and evidence shows mapping to pipeline/tags.
