# Module 03 — Conversations (Sub-Account)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Conversations is the operational heart: SMS, email, chat, social DMs—where leads are triaged, qualified, and moved into appointments and deals.

## Learning outcomes
A passing VA can:
- Operate the inbox efficiently (filtering, tagging, assignment).
- Use templates/snippets appropriately without sounding robotic.
- Hand off to AI agents (when configured) and know when to escalate to humans.
- Keep conversations “production clean” (proper outcomes logged and pipeline updated).

## Key platform notes (Dec 2025)
- HighLevel has a redesigned Conversations experience that may be enabled via Labs (Agency-level toggle). It uses a 4-panel layout and advanced filtering with AND/OR logic.

## Vocabulary
- **Inbox**: list of conversations across channels
  - *What this means:* The inbox shows every thread from SMS, email, chat, and social so you can triage in one place.
- **Thread**: message history with a contact
  - *What this means:* A thread is the chronological conversation log, including files and system notes.
- **Assignment**: which user owns the conversation
  - *What this means:* Assigning a thread clarifies who is responsible to respond and close it out.
- **Tags**: conversation or contact tags used for filtering/routing
  - *What this means:* Tags label conversations for search, routing, or automation triggers.
- **Internal comment**: team-only note (not visible to customer)
  - *What this means:* Use internal comments to brief teammates without sending anything externally.
- **Snippets / templates**: reusable text blocks
  - *What this means:* Snippets speed responses while keeping tone consistent; edit them lightly to stay human.
- **Stop on response**: automation setting that pauses sequences when a contact replies
  - *What this means:* This guardrail prevents workflows from over-messaging once a person engages.
- **Handoff**: AI → human escalation
  - *What this means:* Move the conversation to a human owner when AI confidence drops or the contact requests it.

## Course sections and pages
### Section A — Orientation
- Page 1: What Conversations is and why it’s mission-critical
- Page 2: Channels overview (SMS/email/live chat/social)

### Section B — UI map and core operations
- Page 3: Inbox layout + triage workflow
- Page 4: Filtering (including tags and AND/OR), bulk actions where applicable

### Section C — Production SOP
- Page 5: “Triage to outcome” SOP (every thread ends in a next step)
- Page 6: Using snippets/templates responsibly
- Page 7: Escalation rules + internal comments

### Section D — QA + troubleshooting
- Page 8: Why replies sometimes don’t “stop” workflows (reply settings, stop-on-response configuration)
- Page 9: Common failures: wrong sender, wrong channel, unassigned conversations

### Section E — Quiz (100% required)
- Page 10: Quiz (10 questions)

### Section F — Lab
- Page 11: Inbox triage simulation (screenshots)

## Production SOP — Triage to Outcome
Every inbound conversation must end with ONE of:
- Booked appointment (Calendar booking link sent / appointment created)
- Qualified and moved to pipeline stage
- Disqualified (tag + close reason)
- Follow-up sequence started (workflow enrolled)
- Escalated to human (assigned + internal note)

## Common pitfalls
- “New Conversations UI” missing because Labs not enabled.
- Reply tracking issues can prevent stop-on-response behavior (requires correct email reply/forward settings).
- Overusing AI or templates causes poor deliverability and spam complaints.

## Quiz (sample bank)
1) The primary job of Conversations is: **manage multi-channel customer messaging** ✅  
2) True/False: Internal comments are visible to the lead. **False** ✅  
3) If a lead asks for a human, your next step is: **assign + notify owner, stop automation** ✅  
4) Stop-on-response exists to: **prevent over-messaging after a reply** ✅  
5) Best practice for templates: **personalize key lines; keep it human** ✅  
6) If you need to move a lead into sales tracking, open: **Opportunities** ✅  
7) If the lead requests a price sheet, best delivery method is: **email with PDF or link + track click** ✅  
8) Which module is connected to live chat widget? **Sites → Chat Widget** ✅  
9) Inbox triage should be done: **daily (or multiple times daily)** ✅  
10) If messages are sending at 2am, what should you check? **Workflow timing / quiet hours** ✅

## Lab assignment (evidence required)
**Goal:** Inbox Zero + Templates for the Ace Web Agency scenario.
1) Unified inbox tour: Open Conversations, show filters (Unread/Recents) and channel icons in one screenshot.
2) Create a template: Navigate to Templates, click **Add Template** → choose Text or Email → name it `FAQs – Directions` (or similar), include merge fields like `{{contact.first_name}}`, and save. Screenshot the Templates list showing the new entry.
3) Simulate a conversation: Add yourself as a contact (“Test Lead”), send a test SMS/email, and mark the thread unread/starred; screenshot the inbox with an Unread filter applied.
4) Use the template: Reply in the test thread using the template you created (show the sent message or selection). If SMS/email sending isn’t available, capture the template insertion step in the composer.
5) Triage drill write-up: In your submission, list the triage sequence for the module’s scenario (3 mixed-channel unread messages) in your own words, prioritizing SMS first, then others.
Evidence: Template list screenshot, inbox screenshot with filter, conversation showing template use/internal note if applicable, and the written triage plan. Rubric: Pass if template exists with merge field, filtering/unread handling is demonstrated, and the triage order matches best practices.

## Relatable metaphor — “Hotel Front Desk”
Conversations is the hotel front desk: every guest question, complaint, or booking request lands here first. The goal is to route each guest to the right service quickly without losing their luggage (context).

## Scenario walkthroughs with decision points
- **Spike of unread messages after a campaign**
  - Decision: bulk reply with a template? → Only after tagging and segmenting; personalize key lines for top-value leads.
  - Decision: Which channel to prioritize? → Start with inbound calls/voicemails, then SMS, then email.
- **AI agent escalation**
  - Decision: AI stuck in a loop? → Add an internal comment, stop the workflow, and reassign to a human.
  - Decision: Lead requests pricing? → Send the approved snippet and log the outcome in Opportunities.

## UI callouts + screenshot placeholders
- [Screenshot: Four-panel Conversations UI with filters highlighted]
- [Screenshot: Internal comment entry with “@assignment” callout]
- [Screenshot: Template/snippet edit drawer showing personalization tokens]

## Stop and try (self-check)
1. Which filter removes closed threads from your triage view? <details><summary>Answer</summary>Status or “Open only” filter.</details>
2. What should you add after escalating to a human? <details><summary>Answer</summary>An internal comment with context and an assignment change.</details>
3. When should you avoid bulk-sending a template? <details><summary>Answer</summary>When contacts are in different stages or have open tickets that need personalized answers.</details>
4. Which module do you update after confirming an appointment by SMS? <details><summary>Answer</summary>Calendars for the booking and Opportunities for the stage change.</details>

## Practice labs + evidence rubric
- **Lab: Inbox Zero + Template practice**
  - Deliverable: Template created, test thread triaged with unread/star, and written triage order for the provided scenario.
  - Evidence: Screenshots of template list entry, inbox with filter applied, and the reply showing template use (or composer with template inserted), plus the triage write-up.
  - Rubric: Pass if the template uses personalization, inbox filters are shown, and the triage ordering aligns to SMS-first prioritization.
