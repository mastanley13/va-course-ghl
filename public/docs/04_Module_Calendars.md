# Module 04 — Calendars (Sub-Account)

## Why it matters
Calendars connect marketing to revenue: leads book appointments, confirmations go out, no-shows are reduced, and ops schedules (vendor pickup/delivery) are coordinated.

-# Module 04 — Calendars (The Traffic Controller)

## 1. Why it matters
The ultimate goal of most automated systems is to get a human prospect on a phone call or Zoom meeting. If your calendar system fails (double-booking, wrong timezone, or no-shows), the entire marketing machine is wasted.
Mastering this module makes you the **Air Traffic Controller** of the business—ensuring every landing is safe and on schedule.

---

## 2. Learning Outcomes
By the end of this module, you will be able to:
- **Build "Round Robin" Calendars** to distribute leads fairly among a sales team.
- **Create "Calendar Groups"** to create a clean "Service Menu" for clients (e.g., "30 Min Consult" vs "1 Hour Strategy").
- **Troubleshoot Conflicts**: Diagnose why a client *couldn't* book a slot (usually a hidden "Busy" event on a personal Google Calendar).
- **Configure Reminders**: Reduce no-shows by 50% using automated workflow triggers.

---

## 3. Vocabulary
- **Unassigned Calendar**: A simple calendar for ONE person (e.g., "CEO's Calendar").
- **Round Robin**: A team calendar that automatically assigns the meeting to whoever is available (or rotates equally), like dealing cards in a poker game.
- **Calendar Group**: A folder or "Menu" that groups multiple calendars together on one page (e.g., "Select your Service").
- **Two-Way Sync**: The system reads your Google/Outlook calendar to block off unavailability ("Read") AND puts new GHL appointments back onto your Google/Outlook calendar ("Write").
- **Conflict**: When an external event (like "Dentist Appt") blocks a slot in GHL. Key Note: The external event must be marked **"Busy"** (not "Free") to block the slot.

---

## 4. Deep Dive: The Traffic Controller

### The Types of Runways (Calendar Types)
Think of your Calendar settings as the Runway at an airport.
1.  **Simple Calendar (Private Jet)**: One pilot, one plane. Used for a consultant who handles everything themselves.
2.  **Round Robin (Commercial Hub)**: Many pilots (Sales Team). The system acts as the Tower, deciding which pilot takes the next flight based on:
    *   *Availability*: Who is free right now?
    *   *Optimization*: Who needs more leads to hit their quota?
3.  **Class Booking (Tour Bus)**: One pilot, many passengers. Used for Webinars or Group Coaching calls where 50 people can book the same 2 PM slot.

### The "Service Menu" (Calendar Groups)
If you walk into a restaurant, you don't ask about the ingredients; you ask for the Menu.
**Calendar Groups** are your Menu.
You first create the individual calendars ("30 Min Call", "Onboarding", "Support").
Then you bundle them into a **Group**.
*   **Result**: The client sees `consulting.com/book` and can simply click the appointment type they need. It looks professional and organized.

### The "Blockade" (Sync Conflicts)
This is the #1 reason tickets are filed: *"My calendar is empty, but clients can't book me!"*
As the Traffic Controller, you must check the **Two-Way Sync**.
*   GoHighLevel is looking at your Google Calendar.
*   It sees an event called "Walk the Dog" at 2 PM.
*   **Question**: Is "Walk the Dog" marked as **Busy** or **Free**?
    *   If **Busy**: The GHL Runway is CLOSED at 2 PM.
    *   If **Free**: The Runway is OPEN.
*   *Pro Tip:* All-day events (like "Dad's Birthday") often default to "Free" in Google, meaning clients CAN still book you on your Dad's birthday unless you manually change it to "Busy".

---

## 5. Lab Assignment: "The Impossible Booking" (Troubleshooting)

**Scenario:**
A client complains: *"I have wide open availability from 1pm to 5pm on Friday, but the booking link says 'No Slots Available'. Fix it!"*

**Your Mission:**
Diagnose the issue using the "Traffic Controller" checklist.

**Investigation Checklist:**
1.  **Check Profile Sync:** Go to Settings > My Profile. Is the correct Google/Outlook account linked?
2.  **Check "Conflict Calendars":** In the same settings block, under "Check Conflicts From", is the user's personal calendar selected?
3.  **The "Hidden Block":** Ask the user to check their Google Calendar for Friday 1-5pm.
    *   *Suspicion:* Do they have a generic "Focus Time" or "Out of Office" block?
    *   *Solution:* Tell them to delete that block or mark it as "Free".
4.  **Check GHL Availability:** Go to the Calendar Settings > Availability tab.
    *   *Suspicion:* Is the "Date Range" set to "This Week" (accidentally expired)?
    *   *Suspicion:* Is the "Minimum Scheduling Notice" set to 24 hours, and it's currently Thursday afternoon? (Meaning they missed the window).

**Deliverable:**
Write a quick email reply to the client explaining the likely "Minimum Scheduling Notice" error.

*Example Reply:*
"Hi [Client], I checked your settings. Your calendar requires a **24-hour notice** for bookings. Since it is currently Thursday at 3 PM, the system is correctly blocking off Friday at 1 PM because that is less than 24 hours away. I generally recommend lowering this setting to 4 hours to fill those last-minute gaps!"

---

## 6. Production SOP (Setup Checklist)
1.  **Connect Integration:** Settings > Integrations > Sign in with Google/Outlook.
2.  **Configure Profile:** Settings > My Profile > Select "Primary Calendar" (for writes) and "Check Conflicts" (for reads).
3.  **Create Calendar:** Calendars > Create New > Select Type (Round Robin usually best for future-proofing).
4.  **Set "Meeting Location":** Use a custom value like `{{user.zoom_link}}` or a static URL.
5.  **Set Availability:** Standard Hours (9-5 M-F).
6.  **Set Confirmation:** Assign the correct "Appointment Reminder" workflow.

## 7. Quiz (Verified Bank)
1) Which calendar type is best for a Sales Team of 3 people? (A) Simple (B) **Round Robin** ✅ (C) Class Booking.
2) If a Google Event is marked "Free", will it block the GHL slot? (A) Yes (B) **No** ✅.
3) What is a "Calendar Group"? (A) A team meeting (B) **A visual menu of multiple calendars** ✅.
4) If a client cannot book a slot for *tomorrow*, which setting is the likely culprit? (A) Buffer Time (B) **Minimum Scheduling Notice** ✅.
 help reduce: **no-shows** ✅  
7) If bookings double-book, what do you check first? **availability/conflict calendar settings** ✅  
8) Calendar links should be tested in: **incognito / logged-out view** ✅

## Lab assignment (evidence required)
- Create a calendar named: `Vendor - Pickup Scheduling`
- Provide:
  - booking link
  - screenshot of availability settings
  - screenshot of reminder configuration
Rubric: Pass if calendar exists, settings match instructions, and link works.
