# Module 08 — AI Agents (The Digital Workforce)

## 1. Why it matters
In 2025, GHL AI is not just a chatbot. It is a **Three-Tier Workforce**.
Most agencies build "dumb" bots that hallucinate and anger clients.
You will build **Smart Agents** that think, speak, and use software tools.
1.  **Conversation AI (Receptionist):** Text-based handler.
2.  **Voice AI (Phone Rep):** Real-time conversationalist.
3.  **Agent Studio (Manager):** Logic-driven workflow orchestrator.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Engineer "God Mode" Prompts**: Use the **COSTAR** framework to stop hallucinations.
- **Deploy Voice AI**: Configure "Interruption Sensitivity" (85) and "Filler Words" for natural speech.
- **Build Custom Tools**: Connect Agent Studio to external APIs using JSON headers.
- **Architect the Tri-Hybrid**: A single system where Text, Voice, and Logic work together.

---

## 3. Tier 1: Conversation AI (The Receptionist)
**Best for:** General FAQ, booking appointments on SMS/Social.

### Advanced Prompt Engineering (The COSTAR Framework)
Most people write: "You are a helpful assistant." (This is why their bots fail).
Use **COSTAR**:
1.  **C (Context):** "You are the Lead Intake Specialist for [Business], a high-end Dental practice. We focus on implants and whitening."
2.  **O (Objective):** "Your ONLY goal is to book a 'Free Consult'. Do not solve support tickets. Do not give medical advice."
3.  **S (Style):** "Be professional but warm. Use 1 emoji per message. Keep responses under 150 characters."
4.  **T (Tone):** "Empathetic, efficient, and polite."
5.  **A (Audience):** "Potential patients who are nervous about cost or pain."
6.  **R (Response):** "If asked about price, provide a range ($300-$500) and pivot to booking. If asked for a human, stop replying and tag `need_human`."

### The "Chain of Thought" Upgrade
To make the bot smarter, add this instruction:
> "Before answering, take a deep breath and think: Is this user asking for support or sales? If Support, politely decline. If Sales, proceed."
*(Note: You won't see this thought, but it forces the GPT model to process logic before outputting text).*

### Safety Protocols
*   **Sleep Mode:** Enable "Sleep" from 10 PM - 7 AM. Nothing is worse than a bot texting a lead at 3 AM.
*   **Temperature:** Set to **0.2**. We want an Accountant, not a Poet.

---

## 4. Tier 2: Voice AI (The Phone Rep)
**Best for:** After-hours calls, missed call callbacks, speed-to-lead.

### The Nuance Settings (Making it Human)
Go to **AI Agents > Voice > Advanced Settings**.
1.  **Interruption Sensitivity:** Set to **85**.
    *   *Why?* If set too low (50), the bot keeps talking over the client. If too high (100), it stops every time the client breathes. 85 is the "Sweet Spot".
2.  **Filler Words:** Enable "Use Fillers" (Ums, Ahs).
    *   *Why?* It sounds imperfect, which tricks the brain into thinking it's human.
3.  **Latency:** Set to **Low**.
    *   *Trade-off:* Faster replies, slightly robotic voice. Worth it for conversation flow.

### The "Dedicated Number" Architecture
**CRITICAL:** You cannot engage Voice AI on a line that has a standard "Press 1" IVR.
**The Fix:**
1.  **Main Line:** Incoming Call -> IVR ("Press 1 for AI Booking").
2.  **Forwarding:** "Press 1" -> Forward to **Number B** (The AI Number).
3.  **AI Line:** Configured solely for the Voice Agent.

---

## 5. Tier 3: Agent Studio (The Manager)
**Best for:** Complex logic ("If budget > $500, do X; else do Y") and **Tool Usage**.

### The "Custom Tool" Blueprint
Agent Studio isn't just a chat bot. It can "click buttons".
**Example: Real-Time Price Check Tool.**
If you have an external API (like a Google Sheet or CRM) that holds pricing:

**1. Create Tool > API Call**
*   **Method:** `GET`
*   **URL:** `https://api.my-pricing-sheet.com/v1/prices`
*   **Headers (The Key):**
    *   `Content-Type`: `application/json`
    *   `Authorization`: `Bearer {{custom_values.api_key}}` (Never hardcode keys!)
*   **Description for AI:** "Use this tool ONLY when the client asks for the price of a specific item."

### The "Lead Qualifier" Flow
We are moving beyond prompts. We are building a **Flow Chart**.

**Step 1: Start Node** (Trigger: Incoming SMS "I need a quote").

**Step 2: Collect Info Node (Variable Capture)**
*   *Question:* "What is your budget?"
*   *Variable:* Save to `{contact.budget}`.

**Step 3: AI Router Node (The Brain)**
*   *Path A (High Value):* Intent = Budget > $1000.
    *   *Action:* **Tool Node** -> [Calendar Booking].
    *   *Response:* "Great! For that size project, let's book a VIP consult."
*   *Path B (Low Value):* Intent = Budget < $1000.
    *   *Action:* **Tool Node** -> [Send YouTube Link].
    *   *Response:* "Got it. Our DIY course might be a better fit. Here is the link."

---

## 6. Lab Assignment: "The Tri-Hybrid Build"

**Scenario:**
A High-End MedSpa needs a "Night Shift" reception team.

**Your Mission:**
1.  **Voice (Night Shift):**
    *   Configure a number that forwards to AI after 6 PM.
    *   Set **Sensitivity to 85**.
    *   First Sentence: "Hi, this is Aria from Glow Spa. I see you're calling after hours, how can I help?"
2.  **Text (Prompts):**
    *   Write a **COSTAR Prompt** for the SMS bot.
    *   Goal: Book "Botox Consult".
    *   Constraint: "Do not give medical advice."
3.  **Agent Studio (Logic):**
    *   Build a Flow.
    *   **Router:** "Is user new or existing?"
    *   **Tool:** If Existing -> [Check Appointment Status].
    *   **Tool:** If New -> [Send New Patient Form].

**Deliverable:**
1.  A Google Doc with your COSTAR prompt.
2.  screenshot of Voice AI "Advanced Settings".
3.  Screenshot of Agent Studio Flow with a Router Node.

---

## 7. Production SOP (Deployment)
1.  **Tag Everything:** Every time AI touches a lead, tag them `ai_engaged`.
2.  **Monitor Latency:** If Voice AI hangs, switch to "Turbo" styling models.
3.  **Review Logs:** Check simple "Conversation AI" logs daily. Check "Agent Studio" executions weekly.

## 8. Quiz (Verified Bank)
1) What does the "O" in COSTAR stand for? (A) Octopus (B) **Objective** ✅.
2) What is the recommended "Interruption Sensitivity" for Voice AI? (A) 10 (B) **85** ✅.
3) In Agent Studio, what does an "API Tool" require to authenticate? (A) A smile (B) **Headers (Authorization/Content-Type)** ✅.
4) If a user asks for a price, and you have a pricing tool, what should the AI do? (A) Guess (B) **Call the Tool** ✅.
