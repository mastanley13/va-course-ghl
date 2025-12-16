# Module 06 — Opportunities (The Digital Assembly Line)

## 1. Why it matters
If Contacts are the "Brain," Opportunities are the **Money**.
Without a Pipeline, leads are just names in a list. You have no idea of who is about to buy vs. who is just browsing.
Mastering this module makes you the **Factory Foreman**. You build the "Digital Assembly Line" that turns raw leads into finished Deals.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Design Pipelines**: Architect the Stages of a sale (Discovery -> Proposal -> Contract).
- **Distinguish Status vs. Stage**: The #1 rookie mistake. (A lead can be in "Proposal Stage" but have a Status of "Lost").
- **Automate the Assembly Line**: Create workflows that automatically move the Opportunity when a Contract is signed.
- **Track Stale Deals**: Identify leads that have been stuck in "Follow Up" for > 30 days (The "Rust" detector).

---

## 3. Vocabulary
- **Pipeline**: The visual board (The Factory).
- **Stage**: The vertical columns (The Workstations).
- **Opportunity**: The card representing the lead (The Car being built).
- **Status**: The ultimate fate of the deal: **Open**, **Won**, **Lost**, or **Abandoned**.
- **Pipeline Value**: The total potential revenue of all "Open" opportunities on the board.
- **Lead Value**: The estimated worth of a *single* deal (e.g., $1,500).

---

## 4. Deep Dive: The Digital Assembly Line

### The Architecture: Factory vs. Workstation
Think of a Car Factory.
*   **The Pipeline** is the entire building.
*   **The Stages** are the stations: *Chassis Assembly* -> *Engine Install* -> *Paint Shop* -> *Quality Control*.
*   **The Opportunity** is the Car moving through them.

**Architectural Rule:**
Do **NOT** mix different business processes in one Pipeline.
*   *Bad Pipeline:* "New Lead" -> "Interview Booked" -> "Hired" -> "Project Started" -> "Invoice Sent". (This mixes Hiring, Project Mgmt, and Sales).
*   *Good Pipeline:* "Discovery" -> "Demo" -> "Proposal" -> "Closing". (Pure Sales).

### The "Status" Confusion (Crucial Concept)
This is where 90% of beginners fail.
A lead is in the **"Proposal Sent"** Stage.
The client emails: *"We decided to go with a competitor."*
*   *Rookie Move:* Delete the card. (Data Destruction).
*   *Rookie Move 2:* Drag them to a stage called "Lost". (Messy Reporting).
*   *Pro Move:* Keep them in the "Proposal Sent" Stage, but change the **Status** to **Lost**.
    *   *Result:* Your reports typically say: "We lost 5 deals at the Proposal Stage." This tells you your Pricing or Pitch is the problem. If you just delete them, you have no data.

### The "Rust" Detector (Stale Opportunities)
In a real factory, if a car sits at the "Paint Shop" for 30 days, it rusts.
In GHL, if a lead sits in "Follow Up" for 30 days, they go cold.
*   **The Solution:** Use the **"Stale Opportunities"** trigger in Automations.
*   *Logic:* IF Time in Stage > 30 Days -> THEN Activity: Notification to Sales Manager ("This deal is rotting!").

---

## 5. Lab Assignment: "The Pipeline Architect"

**Scenario:**
A Roofing Company needs a sales pipeline. Their process:
1.  Lead calls in.
2.  They schedule a roof inspection.
3.  They send a quote.
4.  They sign the contract.
5.  They get paid.

**Your Mission:**
1.  **Create the Pipeline:** Name it "Roofing Sales".
2.  **Define Stages:**
    *   New Lead
    *   Inspection Scheduled
    *   Quote Sent
    *   Contract Signed
3.  **The "Stale" Trap:** The owner hates when leads sit in "Quote Sent" for more than 7 days.
    *   *Action:* Describe the Automation Trigger you would build.
    *   *Answer:* Trigger = "Stale Opportunities". Filter = Pipeline "Roofing Sales", Stage "Quote Sent", Duration "7 Days". Action = SMS to Sales Rep.

**Deliverable:**
Screenshot of the "Roofing Sales" pipeline with a test Opportunity card in "Inspection Scheduled".

---

## 6. Production SOP (Pipeline Hygiene)
1.  **End of Day Sweep:** Drag all "Won" deals to Won status. Do not leave money on the table.
2.  **The "Lost" Resaon:** If you mark a deal Lost, you MUST add a Note explaining why (Price, Timing, Competitor).
3.  **Value Check:** Ensure every Opportunity has a Lead Value ($). Without this, the "Pipeline Value" widget on the Dashboard is $0.
4.  **No "Zombie" Pipelines:** If a pipeline hasn't moved in 6 months, archive it.

## 7. Quiz (Verified Bank)
1) What is the difference between a Stage and a Status? (A) Same thing (B) **Stage is the step, Status is the outcome (Won/Lost)** ✅.
2) If a client says "No", what should you do? (A) Delete the opportunity (B) **Mark Status as Lost** ✅.
3) Why do we assign a $$ Value to an Opportunity? (A) To charge them (B) **To calculate total Pipeline Value** ✅.
4) Which trigger detects a deal that hasn't moved in X days? (A) Stale Opportunities (B) Pipeline Change (C) Rotting Deal.
quals cash collected. **False** ✅  
3) A pipeline stage should be: **action-based with clear move rules** ✅  
4) Won/Lost stages: **exist by default and represent outcomes** ✅  
5) Two pipelines can be used for: **sales tracking and fulfillment tracking** ✅  
6) If a lead pays, you should move to: **Won** ✅  
7) If fulfillment is waiting on vendor, stage should reflect: **Sent to Vendor / waiting** ✅  
9) If stages are duplicated, you might see: **naming uniqueness errors** ✅  
10) Opportunities help reporting by: **tracking deal progress and values** ✅

## Lab assignment (evidence required)
1) Create pipeline `Sales - Advertisers`
2) Create pipeline `Fulfillment - Sign Orders`
3) Create 2 test opportunities and move them through 3 stages.
Evidence:
- screenshots of both pipelines with stage names visible
- screenshot of an opportunity card showing value + assigned owner
Rubric: Pass if pipelines exist and stages match spec.
