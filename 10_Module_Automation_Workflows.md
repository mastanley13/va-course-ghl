# Module 10 — Automation (Workflows)

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
- **Action**: step in workflow (send SMS, add tag, webhook, create task, voicemail)
- **Wait**: delays next steps; can be time-based or condition-based
- **Stop on response**: pauses/stops messaging when contact replies
- **Scheduler Trigger**: contactless scheduled workflow trigger (hourly/daily/cron)
- **Webhook (Outbound)**: send data from GHL to external system
- **Webhook (Inbound)**: external system triggers a workflow in GHL
- **Voicemail (drop)**: send pre-recorded voicemail message
- **AI Decision Maker / GPT action**: AI-powered workflow actions (often premium)

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

## Assessment — learning objective quizzes + misconfigurations
- Format: 1–2 quiz items per learning objective (single- or multi-select) plus a “spot the misconfiguration” screenshot prompt. Each item includes auto-feedback that cites the module section anchor for review.

### Build workflows from scratch with correct triggers and actions
1) **Single-select:** Which pairing best represents a minimal, production-ready workflow? (A) Trigger + one SMS only, (B) Trigger + action chain + stop conditions + logging, (C) Trigger only, (D) Action chain without trigger. **Answer: B.**
   - Auto-feedback: Review [Section A — Orientation](#section-a--orientation) for the reliability checklist and required stop conditions.
2) **Multi-select:** When cloning a workflow, which items must you verify before publishing? (A) Trigger type, (B) Tags or enrollment filters, (C) Execution logs, (D) Updated naming/version. **Answers: A, B, D.**
   - Auto-feedback: See [Section A — Orientation](#section-a--orientation) on triggers vs. actions and naming/versioning standards.
3) **Spot the misconfiguration:** ![Screenshot: Workflow canvas missing trigger and logs](screenshots/automation/workflow-missing-trigger.png) — Identify what prevents this workflow from running safely. **Expected callout:** Missing trigger and no logging/tagging steps.
   - Auto-feedback: Revisit [Section A — Orientation](#section-a--orientation) for the trigger/action model and logging requirements.

### Use Wait steps and timing controls safely
1) **Single-select:** What is the safest use of a Wait step after a voicemail drop? (A) Wait 1 minute, (B) Wait until 8am recipient local time with quiet hours honored, (C) No wait, send SMS immediately, (D) Wait 7 days with no conditions. **Answer: B.**
   - Auto-feedback: See [Section B — Timing + compliance](#section-b--timing--compliance) for Wait action behavior and quiet hours.
2) **Multi-select:** Which Wait configurations prevent over-messaging? (A) Time delay + “Stop on response”, (B) Conditional Wait on “Has appointment?”, (C) Wait until weekday morning, (D) Wait 1 minute repeated 10x. **Answers: A, B, C.**
   - Auto-feedback: Review [Section B — Timing + compliance](#section-b--timing--compliance) for safe delay patterns and stop conditions.
3) **Spot the misconfiguration:** ![Screenshot: Wait step set to 1 minute loop before SMS](screenshots/automation/wait-loop-misconfig.png) — Explain why this timing setup is risky. **Expected callout:** Ultra-short loop ignores quiet hours and can spam contacts.
   - Auto-feedback: Check [Section B — Timing + compliance](#section-b--timing--compliance) for recommended delays and compliance safeguards.

### Use Stop-on-response and correct call/voicemail settings
1) **Single-select:** Stop-on-response should be enabled when: (A) The workflow only tags a record, (B) Any outbound messaging is present, (C) Using only tasks and webhooks, (D) The workflow is disabled. **Answer: B.**
   - Auto-feedback: See [Section B — Timing + compliance](#section-b--timing--compliance) on when stop conditions are required.
2) **Multi-select:** Which items keep call/voicemail actions compliant? (A) Correct caller ID/SID, (B) File meets size/format rules, (C) Send during quiet hours, (D) Fallback branch when call fails. **Answers: A, B, D.**
   - Auto-feedback: Review [Section D — Communication actions](#section-d--communication-actions) for call/voicemail requirements and failure handling.
3) **Spot the misconfiguration:** ![Screenshot: Stop-on-response toggled off with multiple SMS steps](screenshots/automation/stop-off-misconfig.png) — What is wrong and how do you fix it? **Expected callout:** Stop-on-response disabled; enable it and add conditional exit.
   - Auto-feedback: Revisit [Section B — Timing + compliance](#section-b--timing--compliance) for stop-on-response rules.

### Use Scheduler Trigger to run contactless recurring jobs
1) **Single-select:** Which job fits a Scheduler Trigger? (A) Send SMS to new leads, (B) Rebuild Smart List export nightly, (C) Call every contact daily, (D) Manual task entry. **Answer: B.**
   - Auto-feedback: Review [Section C — Scheduler Trigger (capstone-critical)](#section-c--scheduler-trigger-capstone-critical) for contactless use cases.
2) **Multi-select:** Proper Scheduler configuration includes: (A) Weekday-only recurrence, (B) Explicit stop date when temporary, (C) Using contact-only actions, (D) Logging completion via tag/note. **Answers: A, B, D.**
   - Auto-feedback: See [Section C — Scheduler Trigger (capstone-critical)](#section-c--scheduler-trigger-capstone-critical) for scheduling options and contactless caveats.
3) **Spot the misconfiguration:** ![Screenshot: Scheduler workflow containing SMS step](screenshots/automation/scheduler-sms-misconfig.png) — Why is this setup incorrect? **Expected callout:** Scheduler is contactless; SMS step will never send because there is no contact context.
   - Auto-feedback: Revisit [Section C — Scheduler Trigger (capstone-critical)](#section-c--scheduler-trigger-capstone-critical) for contactless action rules.

### Use webhooks (outbound/inbound conceptually) for integrations
1) **Single-select:** Best practice before enabling an outbound webhook step? (A) Skip testing, (B) Test with webhook.site or staging endpoint, (C) Use GET for every call, (D) Disable retries. **Answer: B.**
   - Auto-feedback: Review [Section E — Integrations](#section-e--integrations) for webhook testing guidance.
2) **Multi-select:** Which items are required for a reliable webhook? (A) Auth headers or secrets, (B) Task fallback on failure, (C) Log response in notes, (D) Send PII without encryption. **Answers: A, B, C.**
   - Auto-feedback: See [Section E — Integrations](#section-e--integrations) on secure payloads and recovery patterns.
3) **Spot the misconfiguration:** ![Screenshot: Webhook step missing headers and failure branch](screenshots/automation/webhook-missing-headers.png) — What needs to be fixed? **Expected callout:** Add auth headers and a failure path (task/alert) to handle non-200 responses.
   - Auto-feedback: Revisit [Section E — Integrations](#section-e--integrations) for webhook security and error handling.

### Use AI actions (GPT, AI Decision Maker) responsibly (cost + reliability)
1) **Single-select:** When adding a GPT action to personalize SMS, you should: (A) Run on every contact unbounded, (B) Constrain prompt, token budget, and fallbacks, (C) Skip cost monitoring, (D) Let AI decide stage mappings. **Answer: B.**
   - Auto-feedback: Review [Section F — AI in workflows](#section-f--ai-in-workflows) for prompt guardrails and cost controls.
2) **Multi-select:** Safe AI Decision Maker setup includes: (A) Clear intents, (B) Human review for “uncertain”, (C) Logging AI output, (D) No rate limits. **Answers: A, B, C.**
   - Auto-feedback: See [Section F — AI in workflows](#section-f--ai-in-workflows) on routing, safeguards, and observability.
3) **Spot the misconfiguration:** ![Screenshot: AI step with no uncertainty branch and no cost limit](screenshots/automation/ai-no-guardrails.png) — What are the risks? **Expected callout:** Missing fallback/uncertain branch and no token/cost guardrails; add limits and human review path.
   - Auto-feedback: Revisit [Section F — AI in workflows](#section-f--ai-in-workflows) for safe AI configuration patterns.

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

## Rubric evidence gallery (pass vs. common fail)
| Learning objective focus | Pass example screenshot | Common fail screenshot |
| --- | --- | --- |
| Stop-on-response and timing | ![Pass: stop-on-response enabled with quiet hours shown](screenshots/automation/pass-stop-quiet.png) | ![Fail: stop-on-response off and DND window missing](screenshots/automation/fail-stop-dnd.png) |
| Scheduler Trigger contactless setup | ![Pass: scheduler with tasks/webhook + weekday cadence](screenshots/automation/pass-scheduler-webhook.png) | ![Fail: scheduler mapped to SMS stage change](screenshots/automation/fail-scheduler-sms.png) |
| Webhook/AI guardrails | ![Pass: webhook with auth headers + failure task branch](screenshots/automation/pass-webhook-headers.png) | ![Fail: AI action without uncertainty branch or cost cap](screenshots/automation/fail-ai-guardrail.png) |

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
