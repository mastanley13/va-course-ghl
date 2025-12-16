# Module 08 — AI Agents (Conversation AI + Agent Studio)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
AI Agents enable personalized, scalable engagement. For the capstone, AI must:
- personalize outreach (based on business profile)
- qualify responses (intent detection)
- route the lead to the correct workflow/next step
- optionally book appointments

## Learning outcomes
A passing VA can:
- Create and configure a Conversation AI bot using the Flow Builder.
- Define bot goals (tone, personality, global instruction).
- Configure “Stop bot” and “Human handover” safeguards.
- Trigger workflows from within Conversation AI when conditions are met.
- Understand Agent Studio capabilities (tool nodes, logic routing, test tab, versioning).

## Vocabulary
- **Conversation AI**: AI bot that communicates with contacts across channels
  - *What this means:* A single bot can answer on SMS, email, chat, or social DMs without rebuilding logic.
- **Flow Builder**: visual builder for conversation logic (similar UI to workflows)
  - *What this means:* Drag-and-drop nodes control how the bot greets, asks questions, and routes replies.
- **Bot Goals**: global prompt / personality / intent
  - *What this means:* Bot Goals set the tone and boundaries so every response aligns with the business rules.
- **Auto Pilot**: bot status enabling autonomous responses
  - *What this means:* Turning on Auto Pilot lets the bot answer immediately without human approval.
- **AI Actions**: nodes like capture info, book appointment, transfer bot
  - *What this means:* Each action is a building block that collects data, books meetings, or hands off to workflows.
- **Human handover**: escalation to a human
  - *What this means:* Define when to stop the bot and assign a user so contacts aren’t stuck with automation.
- **Agent Studio**: drag-and-drop platform to build AI agents with tool nodes (API, knowledge base, web search, etc.)
  - *What this means:* Agent Studio adds advanced tools so the bot can read files, call APIs, or search before responding.
- **Premium actions**: some AI actions incur per-execution charges (must be used intentionally)
  - *What this means:* Monitor usage because these steps can increase costs if left unchecked.

## Course sections and pages
### Section A — Orientation + safety
- Page 1: What AI Agents are used for in production
- Page 2: Safety + compliance: no hallucinated promises, no spam, always respect STOP

### Section B — Conversation AI Flow Builder
- Page 3: Creating a bot + setting channels
- Page 4: Bot Goals (tone, personality, global prompt)
- Page 5: Core AI actions (qualify, book appointment, end, transfer)
- Page 6: Safeguards (Stop bot, Human handover)

### Section C — Triggering workflows from AI
- Page 7: “Trigger workflow” concept for automation handoff
- Page 8: Routing intents to correct workflow paths

### Section D — Agent Studio overview
- Page 9: What Agent Studio is (drag-and-drop builder)
- Page 10: Tool nodes (LLM, API, Knowledge Base, Web Search) and when to use them
- Page 11: Testing, versions, export/import

### Section E — Quiz
- Page 12: Quiz (12 questions)

### Section F — Lab
- Page 13: Build a “Advertiser Qualifier Bot” (test conversation + screenshot results)

## Production SOP — AI engagement guardrails (minimum standard)
- Always identify as an automated assistant when appropriate.
- Never fabricate pricing or availability; pull from approved fields/custom values.
- Always offer opt-out language when using outbound messages.
- If user asks for human, escalate immediately.
- Maintain a “max messages” limit and stop on negative sentiment.

## Quiz (sample bank)
1) Bot Goals are: **global prompt + style instructions applied across the bot** ✅  
2) Auto Pilot means: **the bot responds autonomously** ✅  
3) Human handover is used when: **bot is unsure or user requests human** ✅  
4) AI can book appointments by: **using a booking action tied to calendars** ✅  
5) Agent Studio provides: **tool nodes + logic routing + testing + versioning** ✅  
6) True/False: AI should make up pricing if it doesn’t know. **False** ✅  
7) Triggering workflows from AI is used to: **handoff to operational automations** ✅  
8) Intent routing is used to: **send leads down correct path based on what they want** ✅  
9) A safe bot includes: **stop bot on abusive language/STOP** ✅  
10) AI actions include: **capture info / book appointment / transfer** ✅  
11) Agent Studio can connect to external data via: **API tool nodes** ✅  
12) Premium AI steps should be used: **intentionally and measured** ✅

## Lab assignment (evidence required)
Build bot: `AI - Advertiser Qualifier`
- Captures: business type, interest level, budget range
- Routes:
  - Interested → send payment link or booking link
  - Not interested → tag and stop
- Provide screenshots:
  - bot goals screen
  - flow builder with actions visible
  - test conversation transcript (screenshot)
Rubric: Pass if bot captures required fields and routes correctly.

## Relatable metaphor — “Concierge with a Script”
AI Agents are like a concierge who follows a vetted script. They can greet guests, answer common questions, and know exactly when to call a human manager.

## Scenario walkthroughs with decision points
- **Lead asks pricing through chat**
  - Decision: let AI answer fully? → Yes, if pricing is standardized; otherwise provide ranges and tag for human follow-up.
  - Decision: when to escalate? → If the lead asks for custom terms or signals purchase intent (e.g., “I’m ready to buy”).
- **Agent off-brand responses**
  - Decision: retrain or pause? → Pause, tighten prompt instructions, add example answers, then retest before re-enabling.
  - Decision: logging evidence? → Save transcripts in the contact record for QA.

## UI callouts + screenshot placeholders
- [Screenshot: Agent configuration screen with prompt and guardrails annotated]
- [Screenshot: Handoff/escalation settings showing triggers]
- [Screenshot: Test chat transcript view highlighting tags/notes]

## Stop and try (self-check)
1. When should AI hand off to a human? <details><summary>Answer</summary>When questions go beyond the scripted scope or the lead shows strong buying intent.</details>
2. What makes a good system prompt? <details><summary>Answer</summary>Clear tone, boundaries, and examples that mirror approved messaging.</details>
3. Where do you store transcripts for QA? <details><summary>Answer</summary>Attach to the contact record or log in Conversations with tags.</details>
4. How do you avoid hallucinated promises? <details><summary>Answer</summary>Provide explicit “never promise” statements and require confirmation before quoting custom terms.</details>

## Practice labs + evidence rubric
- **Lab: Guardrail an agent**
  - Deliverable: Agent prompt with explicit scope, escalation rules, and a tested transcript.
  - Evidence: Screenshots of prompt settings, escalation configuration, and at least one test conversation with tags/notes.
  - Rubric: Pass if the agent answers within scope, escalates appropriately, and evidence shows the configured guardrails.
