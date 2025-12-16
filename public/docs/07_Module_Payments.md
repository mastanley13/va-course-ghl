# Module 07 — Payments (Stripe, Products, Payment Links, Invoices)

## Why it matters
Payments is where intent turns into revenue. For the capstone, the VA must collect payments for ad placements and trigger fulfillment automations.

## Learning outcomes
A passing VA can:
- Connect Stripe (or confirm it is connected).
- Create products and prices (one-time and recurring).
- Create a Payment Link and personalize it when needed.
- Create invoices/subscriptions from a contact profile when required.
- Understand what payment methods are supported where.

## Key platform notes (Dec 2025)
- Payment links require a Product first.
# Module 07 — Payments (The Digital Cash Register)

## 1. Why it matters
The "Payments" tab is your **Digital Cash Register**.
If this is broken, the business works for free.
As a VA, you aren't just sending invoices; you are the **Chief Financial Officer (CFO)** of the account.
You must understand how to collect money (invoices/text-to-pay), how to chase money (dunning), and how to return money (refunds) without breaking the books.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Configure Text-to-Pay**: Enable the "Magical Payment Link" via SMS (and stay A2P compliant).
- **Manage "Dunning"**: The automated system that chases failed credit cards so you don't have to.
- **Differentiate Invoices vs. Subscriptions**: When to use a One-Time Bill vs. a Recurring Membership.
- **Process Refunds Correctly**: Finding the hidden button and ensuring the "Opportunity" status updates automatically.

---

## 3. Vocabulary
- **Text-to-Pay**: Sending a payment link via SMS. (Requires A2P 10DLC registration).
- **Product**: An item in your library (e.g., "Gold Consultation - $100").
- **Invoice**: A one-time bill sent to a client for specific products.
- **Subscription**: A recurring bill (e.g., $97/month).
- **Dunning**: The process of retrying a failed payment (e.g., "Card declined -> Wait 1 day -> Retry").
- **Payment Gateway**: The bank processor (Stripe, PayPal) connected to the system.

---

## 4. Deep Dive: The Digital Cash Register

### Text-to-Pay (The "Magic Link")
Imagine asking a client for a check. They have to find a pen, write it, stamp it, and mail it. Friction = 100%.
**Text-to-Pay** is the opposite. You send a link via SMS. They click, Apple Pay faces scans, and you get paid. Friction = 0%.
*   **The Compliance Trap:** You CANNOT send these texts unless the business is A2P 10DLC Registered. If you try, the carrier will block it as "Spam".
*   *SME Tip:* Always check the "Trust Center" in settings before promising this feature to a client.

### Subscriptions & Dunning (The "Utility Company" Model)
If a client is on a $300/month plan, what happens when their card expires?
*   **Rookie VA:** Manually emails the client "Hey, your card failed." (Awkward, slow).
*   **Pro VA:** Configures **Dunning Settings** (Payments > Settings).
    *   *Logic:* "If payment fails, retry in 24 hours. If it fails 3 times, cancel subscription + send 'Update Card' email."
    *   *Result:* The system chases the money while you sleep.

### Refunds: The Hidden "Returns Counter"
Where is the refund button? It is NOT on the dashboard.
*   **The Path:** Payments > Transactions > Find the Charge > Click the "Three Dots" > Refund.
*   **The Workflow:** Just giving money back is not enough. You must update the *Sales Pipeline*.
    *   *Automation:* Create a workflow: Trigger = "Payment Refunded". Action = "Update Opportunity Status to Lost".
    *   *Why?* If you don't, the Dashboard will still say you "Won" that deal, but your bank account will show a loss. Your data is lying to you.

---

## 5. Lab Assignment: "The Refund Request"

**Scenario:**
A client, "John Doe", bought a $100 consultation but is unhappy.
He demands a refund.
Your boss says: "Refund him, but make sure we track it as a loss."

**Your Mission:**
1.  **Simulate the Refund:** (In a Sandbox, describe the clicks).
    *   Go to Payments > Transactions.
    *   Find John Doe ($100).
    *   Action: Full Refund.
2.  **The Automation Fix:**
    *   Create a Workflow named "Refund Processor".
    *   Trigger: "Payment Refunded".
    *   Action: "Update Opportunity" -> Pricing Pipeline -> Stage: Refunded / Status: Lost.
    *   Action: "Remove Tag" -> "Customer".

**Deliverable:**
A Loom video or Screenshot series showing the "Payment Refunded" workflow setup.

---

## 6. Production SOP (Financial Hygiene)
1.  **Daily Transaction Check:** Scan the "Transactions" tab. Are there any "Failed" payments?
2.  **Product Library:** Never create "Custom Items" on an invoice if you can avoid it. create official "Products" so reporting is clean.
3.  **Test Mode:** Always toggle "Live Mode" on before sending a real invoice. Sending a "Test Invoice" to a real client is unprofessional.

## 7. Quiz (Verified Bank)
1) To send a "Text-to-Pay" link, the business must be: (A) Nice (B) **A2P 10DLC Registered** ✅.
2) What is "Dunning"? (A) Bullying clients (B) **Automated payment retries for failed cards** ✅.
3) Where do you find the Refund button? (A) Dashboard (B) **Payments > Transactions > Three Dots** ✅.
4) If you refund a client, does the Opportunity Status update automatically? (A) Yes (B) **No, you need a Workflow** ✅.
11) Stripe integration is connected via: **Payments > Integrations** ✅  
12) A failed payment should: **trigger internal alert and follow-up** ✅

## Lab assignment (evidence required)
1) Create product + price
2) Create payment link
3) Provide:
  - screenshot of product setup
  - screenshot of payment link settings
  - test checkout screenshot (use test mode if available)
Rubric: Pass if link works and configuration matches spec.
