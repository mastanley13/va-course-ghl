# Module 10 — Automation Workflows (The Engine)

## 1. Why it matters
GHL isn't just an email sender. It is a Turing-complete automation engine.
Most VAs use 10% of its power. This module covers the other 90%.
If you can master **Math Operations**, **Formatters**, and **State Machines**, you are indispensable.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Architect Advanced Logic**: Use Loops, Go-To steps, and Math operations.
- **Master the Trigger Encyclopedia**: Know exactly when to use "Changed Field" vs "Stale Opportunity".
- **Deploy Premium AI**: Configure "Workflow AI" actions and "ChatGPT" integrations.
- **Debug Like a Pro**: Interpret Execution Logs and Status Codes (e.g., 30007).

---

## 3. Tier 1: The Trigger Encyclopedia
Don't just use "Form Submitted". Master the nuance.

### A. CRM Triggers
1.  **Contact Changed:** The "Watchdog". Triggers when *any* field changes.
    *   *Filter:* Field is `Credit_Score`.
    *   *Use Case:* If score > 700, move to "Qualified" pipeline.
2.  **Contact Tag:** The "Manual Switch".
    *   *Use Case:* Support agent adds tag `vip-escalation` -> Workflow alerts manager.
3.  **Task Reminder:** Time-based trigger.
    *   *Use Case:* "Due Date" is today -> SMS the assigned user.

### B. Pipeline Triggers
4.  **Opportunity Status Changed:**
    *   *Use Case:* Status becomes `Won` -> Send Onboarding Email.
5.  **Stale Opportunity:**
    *   *Use Case:* Lead sits in "New Lead" for > 5 days -> Move to "Cold" stage.

### C. Communication Triggers
6.  **Call Status:**
    *   *Filter:* Call Direction = Inbound, Call Status = Busy/No Answer.
    *   *Use Case:* Send "Sorry I missed you" SMS immediately.
7.  **Customer Replied:**
    *   *Filter:* Reply Channel = SMS. Contains phrase "Stop".
    *   *Use Case:* Enable DND (Do Not Disturb).

### D. Advanced/Premium Triggers
8.  **Inbound Webhook:**
    *   *Concept:* Gives you a unique URL. Send JSON data from *any* software to this URL.
    *   *Use Case:* Typeform submission -> GHL Workflow.
9.  **Recurring Date:**
    *   *Use Case:* "Birthday" workflows or "Anniversary" reminders.

---

## 4. Tier 2: The Action Arsenal
Beyond simple SMS/Email. This is where the magic happens.

### A. Data Manipulation (The Hidden Gems)
1.  **Math Operations:**
    *   *Add/Subtract:* Create a counter. "Lead Score = Lead Score + 1".
    *   *Date Math:* "Renewal Date = Today + 365 Days".
2.  **Number Formatter:**
    *   *Phone:* Clean messy input "123 456-7890" -> "+11234567890".
    *   *Currency:* Format "1000" -> "$1,000.00".
3.  **Date/Time Formatter:**
    *   *Timezone:* Convert "UTC" to "EST" for the email body.
    *   *Format:* Change "2025-12-25" to "Thursday, December 25th".

### B. Internal Tools
4.  **Add/Remove from Workflow:**
    *   *Pattern:* When a lead replies, **Remove** them from the "Nurture Workflow" so they don't get awkward automated texts.
5.  **Manual Action:**
    *   *Use Case:* Pauses the automation and creates a task in the "Conversations" tab for a human to call.

---

## 5. Tier 3: Logic Patterns (The Brain)

### Pattern A: The State Machine (Router)
Don't build linear monsters. Build a central router.
1.  **Trigger:** Pipeline Stage Changed.
2.  **If/Else 1:** Is Stage = "New Lead"? -> Add to Workflow A.
3.  **If/Else 2:** Is Stage = "Booked"? -> Add to Workflow B.
4.  **If/Else 3:** Is Stage = "Sold"? -> Add to Workflow C.

### Pattern B: The Infinite Loop (Collections)
1.  **Action:** Send Invoice SMS.
2.  **Wait:** 3 Days.
3.  **If/Else:** Tag `paid` exists?
    *   *Yes:* End.
    *   *No:* **Go To** -> Step 1.
*   *Safety:* GHL "Loop Lock" prevents infinite spam (max 100 executions).

### Pattern C: The "Round Robin" (Assignment)
1.  **Action:** Assign to User.
2.  **Setting:** "Round Robin" (distributes leads equally: A->B->C->A).
3.  **Action:** SMS "Hi, this is {{user.first_name}}". (Dynamic signature).

---

## 6. Tier 4: Deep AI & Premium Actions

### A. Workflow AI (Native)
*   **Action:** `Workflow AI`.
*   **Type:** "Sentiment Analysis".
*   **Logic:** If Sentiment = Negative -> Email Manager. If Positive -> Request Review.
*   *Cost:* Uses Premium Credits per execution.

### B. ChatGPT Integration (External)
For complex tasks (e.g., "Summarize this PDF").
1.  **Action:** Outbound Webhook (to Make.com).
2.  **Action:** Wait for Response (Webhook).
3.  **Action:** Update Contact Field with Summary.

---

## 7. Troubleshooting (The Mechanic)
When it breaks, check these 3 things:

### 1. Execution Logs
*   **Status:** "Finished" vs "Failed".
*   **Error Details:** Click the ID to see *exactly* which step failed.

### 2. Common Error Codes
*   **30007 (SMS):** Carrier Violation. The message looked like spam.
*   **30005 (SMS):** Landline/Unreachable. The number can't receive texts.
*   **Loop Detected:** Logic re-triggered itself too fast.

### 3. "Allow Re-entry"
*   *Issue:* "I tested it twice, but it didn't trigger the second time."
*   *Fix:* Go to Workflow Settings -> Toggle **Allow Re-entry** ON.

---

## 8. Lab Assignment: "The Ultimate Nurture"

**Scenario:**
Build a "Birthday Club" that runs forever.

**Your Mission:**
1.  **Trigger:** Birthday Reminder (Before 0 days).
2.  **Action:** Send "Happy Birthday! Here is a coupon."
3.  **Wait:** 2 days.
4.  **If/Else:** Did they claim it? (Tag: `claimed`).
    *   *Yes:* Send "Enjoy!"
    *   *No:* Send "Last chance!"
5.  **Math Operation:** "Loyalty Points = Loyalty Points + 10".
6.  **Go To:** End (It re-triggers next year automatically).

**Deliverable:**
Screenshot of the Workflow Canvas showing the Trigger, Math Action, and If/Else logic.

---

## 9. Quiz (Verified Bank)
1) Which action cleans up a phone number like "(555) 123-4567"? (A) Math Operation (B) **Number Formatter** ✅.
2) What happens if "Allow Re-entry" is OFF? (A) The contact enters multiple times (B) **The contact can only enter ONCE ever** ✅.
3) What does Error 30007 mean? (A) Invalid Number (B) **Carrier Violation (Spam)** ✅.
4) How do you stop a "Loop" from running forever? (A) You can't (B) **Use an If/Else 'Exit Condition'** ✅.
