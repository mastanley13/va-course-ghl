# Module 04 — Calendars (Sub-Account)

🔗 **Appendix:** [Plain Language + Glossary (A–Z with screenshots)](Appendix_Plain_Language_Glossary.md) — includes navigation verbs quick-reference (EN/ES/PH).

## Why it matters
Calendars connect marketing to revenue: leads book appointments, confirmations go out, no-shows are reduced, and ops schedules (vendor pickup/delivery) are coordinated.

## Learning outcomes
A passing VA can:
- Create a Personal Booking calendar and share/embed it.
- Connect a user’s external calendar (Google/Outlook/iCloud) where required.
- Configure availability, buffers, duration, and reminders.
- Use calendars in workflows and sites.

## Key platform note (Dec 2025)
HighLevel requires a HighLevel Booking Calendar as the foundation for scheduling rules even if Google Calendar is used.

## Vocabulary
- **Calendar type**: personal booking vs other types
  - *What this means:* Choose the correct calendar template so availability and booking links behave as expected.
- **Availability**: allowed booking windows
  - *What this means:* Set the exact hours people can book so appointments never land outside working times.
- **Buffer**: padding before/after appointments
  - *What this means:* Buffers add breathing room to avoid back-to-back meetings and rushed handoffs.
- **Conflict calendar**: blocks times based on another calendar
  - *What this means:* Connect conflict calendars to stop double-booking when a user has events elsewhere.
- **Reminders**: SMS/email reminders tied to appointment events
  - *What this means:* Reminders nudge attendees so they show up or reschedule instead of no-showing.
- **Embed code**: place calendar on a website/funnel page
  - *What this means:* Copy the embed to drop the booking widget directly into a page visitors can use.

## Course sections and pages
### Section A — Orientation
- Page 1: What Calendars do in GHL builds
- Page 2: Appointment lifecycle (booked → confirmed → no-show → completed)

### Section B — UI map + setup
- Page 3: Calendar settings and types
- Page 4: Personal Booking Calendar setup

### Section C — Production SOP
- Page 5: Standard availability rules (quiet hours, buffers)
- Page 6: Reminder stack best practices (reduce no-shows)
- Page 7: Calendar embed into Sites/Funnels

### Section D — QA + troubleshooting
- Page 8: Double-booking causes and prevention
- Page 9: Google calendar integration pitfalls and re-integration

### Section E — Quiz
- Page 10: Quiz (8 questions)

### Section F — Lab
- Page 11: Build “Vendor Pickup/Dropoff” calendar + booking link

## Production SOP — Minimal calendar configuration
1) Calendar name is explicit (who/what)
2) Duration matches service type
3) Buffers set (protect ops)
4) Confirmation + reminder sequence exists
5) Calendar link tested end-to-end

## Quiz (sample bank)
1) A booking calendar is used to: **let contacts schedule appointments** ✅  
2) True/False: Google calendar alone is sufficient without a HighLevel booking calendar. **False** ✅  
3) What prevents back-to-back meetings? **Buffers** ✅  
4) A conflict calendar is used to: **block availability when another calendar has events** ✅  
5) Where do you embed a calendar for leads to book? **Sites/Funnels page via Calendar element or embed** ✅  
6) Reminders help reduce: **no-shows** ✅  
7) If bookings double-book, what do you check first? **availability/conflict calendar settings** ✅  
8) Calendar links should be tested in: **incognito / logged-out view** ✅

## Lab assignment (evidence required)
**Goal:** Build the **Website Consultation Calendar** for Ace Web Agency.
1) Navigate to Calendars → Calendar Settings → **Create New Calendar** (Single User).
2) Configure basics: Name `Website Consultation Calendar`, 15-minute duration, slot interval 30 minutes, description “15-minute Zoom call to discuss your website needs.”
3) Availability: Set sample hours (e.g., Mon/Wed 9am–12pm), add buffer (e.g., 5 min) and minimum notice (e.g., 1 hour).
4) Assign owner: Ensure your user is the calendar owner; set location to Zoom/Phone/Meet as available.
5) Save + share: Save the calendar, copy the booking link, and open it in a new tab; optionally book a test slot.
6) Evidence: (a) Calendar Settings list showing the new calendar, (b) booking page screenshot with available slots, (c) if booked, the appointment visible in Calendar/Appointments.
Rubric: Pass if the calendar exists with availability/buffers set, booking link works/preview is shown, and owner is assigned.

## Relatable metaphor — “Restaurant Reservation Book”
Calendars are the reservation book and seating chart for the business. If the book is sloppy, guests double-book or wait forever; if it’s clean, service runs smooth and the kitchen (teams) stay in sync.

## Scenario walkthroughs with decision points
- **New service launch**
  - Decision: one or multiple calendars? → Use separate calendars for different offer types or teams to avoid availability collisions.
  - Decision: who owns bookings? → Assign calendar ownership and pipeline stage mapping before sharing links.
- **Troubleshooting no-shows**
  - Decision: Are reminders firing? → Check notification settings; if off, enable and test.
  - Decision: Timezones wrong? → Verify account timezone, then calendar-specific overrides.

## UI callouts + screenshot placeholders
- [Screenshot: Calendar availability grid with buffer/minimum notice highlighted]
- [Screenshot: Pipeline mapping settings showing stage selection]
- [Screenshot: Booking confirmation page with timezone indicator]

## Stop and try (self-check)
1. When would you split calendars by team? <details><summary>Answer</summary>When sales vs service need separate availability and routing.</details>
2. What protects against back-to-back burnout? <details><summary>Answer</summary>Buffers configured between appointments.</details>
3. How do you ensure a booking updates sales tracking? <details><summary>Answer</summary>Map the calendar to an Opportunities pipeline/stage.</details>
4. Which setting prevents last-minute abuse? <details><summary>Answer</summary>Minimum notice time before scheduling.</details>
5. What’s the first place to check if times look off by a day? <details><summary>Answer</summary>Sub-account timezone and then the calendar-specific timezone override.</details>

## Practice labs + evidence rubric
- **Lab: Build + test a consultation calendar**
  - Deliverable: `Website Consultation Calendar` with availability, buffers, min notice, and owner assignment.
  - Evidence: Calendar settings screenshot, booking page view with slots, and (optional) a test appointment record.
  - Rubric: Pass if the booking page is reachable, settings show buffers/min notice, and ownership/timezone are correct.
