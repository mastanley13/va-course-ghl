export const quizBank = {
    'orientation-sprint': {
        passingScore: 100,
        questions: [
            {
                id: 'os1',
                question: 'What is the core goal of the Orientation Sprint?',
                options: [
                    'Build the entire capstone workflow',
                    'Log in, click through the main areas, and get comfortable navigating',
                    'Recreate the appendix glossary from memory',
                    'Import a CSV of test contacts',
                ],
                correctIndex: 1,
            },
            {
                id: 'os2',
                question: 'Which habit proves you completed a task correctly?',
                options: [
                    'Sending a DM that you think it worked',
                    'Capturing screenshots that show the exact setting you changed',
                    'Waiting until the capstone to document anything',
                    'Deleting your draft after it runs once',
                ],
                correctIndex: 1,
            },
            {
                id: 'os3',
                question: 'What safety check should you run before sending automation to many contacts?',
                options: [
                    'Send a single test to yourself first',
                    'Skip testing because drafts always work',
                    'Turn on every trigger at once',
                    'Only test the SMS steps and ignore email',
                ],
                correctIndex: 0,
            },
            {
                id: 'os4',
                question: 'If you are unsure about an instruction during Orientation, what should you do?',
                options: [
                    'Guess and hope nothing breaks',
                    'Wait until Module 10 to ask questions',
                    'Ask for clarification before acting',
                    'Turn off notifications so nobody sees errors',
                ],
                correctIndex: 2,
            },
            {
                id: 'os5',
                question: 'What action officially moves you into Module 1 after Orientation?',
                options: [
                    'Waiting for the system to auto-advance overnight',
                    'Clicking the “Complete & Continue” button',
                    'Submitting a support ticket',
                    'Finishing the capstone lab first',
                ],
                correctIndex: 1,
            },
        ],
    },
    default: {
        passingScore: 80,
        questions: [
            {
                id: 'dq1',
                question: 'What two actions usually prove you completed a module successfully?',
                options: [
                    'Skimming the text and moving on',
                    'Finishing the quiz and submitting the lab evidence',
                    'Waiting for a teammate to confirm for you',
                    'Leaving the module unread',
                ],
                correctIndex: 1,
            },
            {
                id: 'dq2',
                question: 'Why should you tie module work back to the capstone scenario?',
                options: [
                    'It is only required for Orientation',
                    'It keeps naming, assets, and workflows aligned for handoffs',
                    'It shortens every quiz',
                    'It disables notifications',
                ],
                correctIndex: 1,
            },
            {
                id: 'dq3',
                question: 'What is a smart first step before starting any lab?',
                options: [
                    'Review the naming conventions and evidence requirements',
                    'Turn off all workflow safety settings',
                    'Delete existing sample data without reading',
                    'Skip straight to the final publish step',
                ],
                correctIndex: 0,
            },
        ],
    },
    'module-1': {
        passingScore: 80,
        questions: [
            {
                id: 'm1q1',
                question: 'Which routine proves you are using the Dashboard correctly each day?',
                options: [
                    'Ignoring widgets unless a client calls',
                    'Rebuilding the layout from scratch daily',
                    'Only checking the dashboard after workflows are published',
                    'Scanning key widgets, drilling down, and logging red flags',
                ],
                correctIndex: 3,
            },
            {
                id: 'm1q2',
                question: 'Why might the revenue widget not match actual cash collected?',
                options: [
                    'It only counts unread conversations',
                    'It ignores timezone settings by design',
                    'It often reflects opportunity value, not Payments transactions',
                    'It excludes all recurring revenue',
                ],
                correctIndex: 2,
            },
            {
                id: 'm1q3',
                question: 'What is the best first investigation if unread conversations spike on the dashboard?',
                options: [
                    'Open Conversations, assign owners, and triage',
                    'Reboot the browser',
                    'Export every contact to CSV',
                    'Delete the Conversations widget',
                ],
                correctIndex: 0,
            },
            {
                id: 'm1q4',
                question: 'What timezone issue can make dashboard numbers look “off by a day”?',
                options: [
                    'Sub-account timezone misaligned with reporting widgets',
                    'Staff users working remotely',
                    'The dashboard refresh interval is too short',
                    'Opportunities lack values',
                ],
                correctIndex: 0,
            },
            {
                id: 'm1q5',
                question: 'After seeing a sudden drop in bookings, which modules should you open from the Dashboard drill-down?',
                options: [
                    'Contacts and Memberships',
                    'Reporting and App Marketplace',
                    'Settings and Labs',
                    'Sites/Forms, Calendars, and relevant Workflows',
                ],
                correctIndex: 3,
            },
        ],
    },
    'module-2': {
        passingScore: 80,
        questions: [
            {
                id: 'm2q1',
                question: 'What does the “triage to outcome” SOP require for every thread?',
                options: [
                    'Mark unread and move on',
                    'Copy/paste the same template for all replies',
                    'Assign it to AI without review',
                    'End with a clear next step such as booking, qualifying, or disqualifying',
                ],
                correctIndex: 3,
            },
            {
                id: 'm2q2',
                question: 'Which Conversations setting prevents workflows from over-messaging once a lead replies?',
                options: ['Stop on response', 'Bulk actions', 'Unread filter', 'Archive'],
                correctIndex: 0,
            },
            {
                id: 'm2q3',
                question: 'When should you trigger a human handover from AI?',
                options: [
                    'When the AI is confident and on-script',
                    'Only after 24 hours of inactivity',
                    'When the user requests a person or the bot is unsure',
                    'Never—keep AI in control',
                ],
                correctIndex: 2,
            },
            {
                id: 'm2q4',
                question: 'If the new four-panel Conversations UI is missing, what is the first check?',
                options: [
                    'Clear browser cache',
                    'Delete all templates',
                    'Disable stop-on-response',
                    'Verify the Labs toggle for the redesigned experience is enabled',
                ],
                correctIndex: 3,
            },
            {
                id: 'm2q5',
                question: 'What should an internal comment include when escalating a thread?',
                options: [
                    'Only the contact’s first name',
                    'Context, what was promised, and the next action needed',
                    'A screenshot with no notes',
                    'A request to close the conversation without review',
                ],
                correctIndex: 1,
            },
        ],
    },
    'module-3': {
        passingScore: 80,
        questions: [
            {
                id: 'm3q1',
                question: 'Why do you still need a HighLevel booking calendar even if Google Calendar is connected?',
                options: [
                    'Google calendars cannot send invites',
                    'HighLevel blocks all external conflicts by default',
                    'HighLevel calendars provide the scheduling rules and booking links',
                    'Google calendars delete events automatically',
                ],
                correctIndex: 2,
            },
            {
                id: 'm3q2',
                question: 'Which setting protects against back-to-back meetings?',
                options: ['Minimum notice', 'Conflict calendars', 'Reminders', 'Buffers'],
                correctIndex: 3,
            },
            {
                id: 'm3q3',
                question: 'When should you configure a conflict calendar?',
                options: [
                    'When bookings must block off events from another calendar',
                    'When you want to track no-shows',
                    'When you are embedding a form',
                    'When SMS reminders are disabled',
                ],
                correctIndex: 0,
            },
            {
                id: 'm3q4',
                question: 'Where do you place a calendar so leads can self-book from a page?',
                options: [
                    'Inside the App Marketplace',
                    'Embedded on a Sites/Funnels page via a calendar element or embed code',
                    'As a chat widget only',
                    'Only in an invoice',
                ],
                correctIndex: 1,
            },
            {
                id: 'm3q5',
                question: 'What does adding a minimum notice period accomplish?',
                options: [
                    'Reduces reminder messages',
                    'Auto-confirms all new events',
                    'Prevents last-minute bookings that the team cannot service',
                    'Stops double-booking entirely',
                ],
                correctIndex: 2,
            },
        ],
    },
    'module-4': {
        passingScore: 80,
        questions: [
            {
                id: 'm4q1',
                question: 'How do Smart Lists stay up to date?',
                options: [
                    'Manual refresh each morning',
                    'Export/import cycles',
                    'Only admins can see changes',
                    'They update automatically based on saved filters',
                ],
                correctIndex: 3,
            },
            {
                id: 'm4q2',
                question: 'Which identifiers are most important for deduplication?',
                options: ['Birthday and address', 'Owner and tag', 'Email and phone', 'Creation date and source'],
                correctIndex: 2,
            },
            {
                id: 'm4q3',
                question: 'What is a safe rule for CSV imports?',
                options: [
                    'Only import contacts with documented consent and clean data',
                    'Import any purchased list to warm up domains',
                    'Skip mapping unknown fields',
                    'Disable dedupe during import',
                ],
                correctIndex: 0,
            },
            {
                id: 'm4q4',
                question: 'Why must you double-check filters before running bulk actions?',
                options: [
                    'Bulk actions are slow and queue overnight',
                    'Bulk actions only work for tags',
                    'Bulk actions ignore custom fields',
                    'Bulk actions cannot be undone and affect many records at once',
                ],
                correctIndex: 3,
            },
            {
                id: 'm4q5',
                question: 'After an import, what should you review to avoid accidental outreach?',
                options: [
                    'Dashboard widget colors',
                    'Only the contact owner column',
                    'Workflow enrollments and triggers tied to tags or sources',
                    'Social Planner drafts',
                ],
                correctIndex: 2,
            },
        ],
    },
    'module-5': {
        passingScore: 80,
        questions: [
            {
                id: 'm5q1',
                question: 'What makes a good pipeline stage name?',
                options: [
                    'A vague emotion like “Interested?”',
                    'Whatever matches the contact tag',
                    'A random color label',
                    'An action-based milestone with clear move rules',
                ],
                correctIndex: 3,
            },
            {
                id: 'm5q2',
                question: 'Why should you not treat opportunity value as cash collected?',
                options: [
                    'Opportunity value is a forecast; Payments tracks actual transactions',
                    'Opportunities never track currency',
                    'Payments also shows forecast amounts',
                    'Value always excludes taxes',
                ],
                correctIndex: 0,
            },
            {
                id: 'm5q3',
                question: 'How do you run sales and fulfillment in parallel without confusion?',
                options: [
                    'Use one giant pipeline for everything',
                    'Delete closed deals monthly',
                    'Maintain separate Sales and Fulfillment pipelines',
                    'Rely only on tags',
                ],
                correctIndex: 2,
            },
            {
                id: 'm5q4',
                question: 'What is a reliable way to move opportunities automatically?',
                options: [
                    'Manual drag-and-drop only',
                    'Changing the contact owner',
                    'Sending a payment link',
                    'A workflow trigger tied to events or tags',
                ],
                correctIndex: 3,
            },
            {
                id: 'm5q5',
                question: 'What should you monitor to prevent deals from stalling in “Proposal Sent”?',
                options: [
                    'Calendar availability',
                    'A stale-stage alert (e.g., 7 days) with follow-up tasks',
                    'Widget colors on the dashboard',
                    'Email deliverability scores only',
                ],
                correctIndex: 1,
            },
        ],
    },
    'module-6': {
        passingScore: 80,
        questions: [
            {
                id: 'm6q1',
                question: 'What must exist before you can create a Payment Link?',
                options: ['A product with at least one price', 'A funnel page', 'A published workflow', 'A survey'],
                correctIndex: 0,
            },
            {
                id: 'm6q2',
                question: 'Which statement about Payment Links is true?',
                options: [
                    'They require an invoice first',
                    'They automatically refund failed charges',
                    'They support manual bank transfers by default',
                    'They can pre-fill buyer info via URL parameters',
                ],
                correctIndex: 3,
            },
            {
                id: 'm6q3',
                question: 'What is a common cause of “revenue mismatch” in Payments vs reporting?',
                options: [
                    'Products missing descriptions',
                    'Payment links expiring too fast',
                    'Opportunity values not aligned with collected transactions',
                    'Timezone differences only',
                ],
                correctIndex: 2,
            },
            {
                id: 'm6q4',
                question: 'When would you choose an invoice instead of a Payment Link?',
                options: [
                    'When you need manual payment methods or negotiated terms',
                    'When running an SMS campaign',
                    'When you want to hide taxes',
                    'When selling only recurring products',
                ],
                correctIndex: 0,
            },
            {
                id: 'm6q5',
                question: 'Which offer type fits best for ongoing advertising placements?',
                options: [
                    'One-time payment link with no renewal',
                    'Manual cash collection only',
                    'An unpaid survey response',
                    'Subscription/recurring price attached to a product',
                    'Manual cash collection only',
                ],
                correctIndex: 3,
            },
        ],
    },
    'module-7': {
        passingScore: 80,
        questions: [
            {
                id: 'm7q1',
                question: 'What do Bot Goals control inside a Conversation AI bot?',
                options: [
                    'Timezone for booking links',
                    'Payment processor selection',
                    'Global tone, boundaries, and intent instructions',
                    'DNS settings for domains',
                ],
                correctIndex: 2,
            },
            {
                id: 'm7q2',
                question: 'What happens when Auto Pilot is enabled?',
                options: [
                    'The bot responds autonomously on supported channels',
                    'The bot waits for human approval',
                    'All workflows pause automatically',
                    'Conversations are closed immediately',
                ],
                correctIndex: 0,
            },
            {
                id: 'm7q3',
                question: 'When should you trigger a “Stop bot” or human handover?',
                options: [
                    'After every third message',
                    'Only for billing conversations',
                    'Never—handover is optional',
                    'Whenever the bot is unsure or the user requests a person',
                ],
                correctIndex: 3,
            },
            {
                id: 'm7q4',
                question: 'What advantage does Agent Studio provide over simple Q&A bots?',
                options: [
                    'It removes the need for testing',
                    'It blocks workflow triggers',
                    'It adds tool nodes, routing logic, testing, and versioning',
                    'It limits bots to SMS only',
                ],
                correctIndex: 2,
            },
            {
                id: 'm7q5',
                question: 'Why must you monitor premium AI actions closely?',
                options: [
                    'They can incur per-execution charges that add up quickly',
                    'They disable Stop-on-response',
                    'They delete chat history automatically',
                    'They prevent booking actions',
                ],
                correctIndex: 0,
            },
        ],
    },
    'module-8': {
        passingScore: 80,
        questions: [
            {
                id: 'm8q1',
                question: 'What is the primary benefit of trigger links in campaigns?',
                options: [
                    'They shorten URLs only',
                    'They replace all UTMs automatically',
                    'They track clicks and can trigger workflow actions',
                    'They disable unsubscribes',
                ],
                correctIndex: 2,
            },
            {
                id: 'm8q2',
                question: 'When should you choose a Campaign over a Workflow?',
                options: [
                    'For broadcast/batch sends on a schedule',
                    'For behavior-driven nurturing',
                    'When you need quiet hours enforced',
                    'When building a calendar',
                ],
                correctIndex: 0,
            },
            {
                id: 'm8q3',
                question: 'How do UTM parameters help in Marketing?',
                options: [
                    'They encrypt email content',
                    'They speed up page load times',
                    'They create Smart Lists automatically',
                    'They provide attribution for clicks and conversions',
                ],
                correctIndex: 3,
            },
            {
                id: 'm8q4',
                question: 'What role does Social Planner play?',
                options: [
                    'Creating payment links',
                    'Assigning pipeline stages',
                    'Scheduling and managing social posts',
                    'Controlling chat widgets',
                ],
                correctIndex: 2,
            },
            {
                id: 'm8q5',
                question: 'What is a prudent final step before sending a marketing asset live?',
                options: [
                    'Skip testing to save time',
                    'Delete all UTMs',
                    'Remove trigger links from SMS',
                    'Send to a test contact to verify links, trigger links, and rendering',
                ],
                correctIndex: 3,
            },
        ],
    },
    'module-9': {
        passingScore: 80,
        questions: [
            {
                id: 'm9q1',
                question: 'What is the Scheduler Trigger designed for?',
                options: [
                    'Contactless recurring jobs like nightly list ops',
                    'Immediate SMS blasts',
                    'Manual task creation only',
                    'Voice call routing',
                ],
                correctIndex: 0,
            },
            {
                id: 'm9q2',
                question: 'When must Stop-on-response be enabled?',
                options: [
                    'Whenever a workflow sends outbound messages',
                    'Only when using webhooks',
                    'Never for appointment workflows',
                    'Only on scheduler workflows',
                ],
                correctIndex: 0,
            },
            {
                id: 'm9q3',
                question: 'Why are Wait steps important between actions?',
                options: [
                    'They reduce storage usage',
                    'They guarantee deliverability',
                    'They control timing, respect quiet hours, and allow condition checks',
                    'They disable stop-on-response',
                ],
                correctIndex: 2,
            },
            {
                id: 'm9q4',
                question: 'Why is placing an SMS action inside a Scheduler (contactless) workflow a problem?',
                options: [
                    'Scheduler only supports calls',
                    'SMS costs more at night',
                    'It blocks reporting exports',
                    'Scheduler workflows have no contact context, so contact-only actions will not run',
                ],
                correctIndex: 3,
            },
            {
                id: 'm9q5',
                question: 'What is the safest first step before enabling an outbound webhook?',
                options: [
                    'Turn off error logging',
                    'Test with a tool like webhook.site and add a failure branch/alert',
                    'Add it to every workflow by default',
                    'Strip all headers',
                ],
                correctIndex: 1,
            },
        ],
    },
    'module-10': {
        passingScore: 80,
        questions: [
            {
                id: 'm10q1',
                question: 'When should you pick a funnel instead of a website?',
                options: [
                    'When you need a multi-page navigation structure',
                    'When you only need to manage contacts',
                    'When you want a step-based conversion flow with A/B testing',
                    'When you are setting staff permissions',
                ],
                correctIndex: 2,
            },
            {
                id: 'm10q2',
                question: 'Where do form submissions end up by default?',
                options: ['App Marketplace', 'Memberships', 'Payments only', 'Contacts and their timelines'],
                correctIndex: 3,
            },
            {
                id: 'm10q3',
                question: 'What happens when you deploy the chat widget on a page?',
                options: [
                    'A new pipeline is created automatically',
                    'Messages route into Conversations for triage',
                    'SEO settings are removed',
                    'The widget blocks form submissions',
                ],
                correctIndex: 1,
            },
            {
                id: 'm10q4',
                question: 'Where should tracking codes and SEO meta data be configured?',
                options: [
                    'Inside page or site settings (head/body code and meta fields)',
                    'Only in Payments',
                    'Inside Staff settings',
                    'In Contacts custom fields',
                ],
                correctIndex: 0,
            },
            {
                id: 'm10q5',
                question: 'Why should you always preview the mobile view of a funnel page?',
                options: [
                    'Mobile preview disables CTAs',
                    'Desktop settings automatically fix mobile',
                    'It hides chat widgets by default',
                    'Most visitors see pages on mobile, so CTAs/forms must remain clear and usable',
                ],
                correctIndex: 3,
            },
        ],
    },
    'module-11': {
        passingScore: 80,
        questions: [
            {
                id: 'm11q1',
                question: 'How do courses and offers differ in Memberships?',
                options: [
                    'Courses handle access; offers handle content',
                    'Offers replace communities',
                    'Courses are the content, offers control access/pricing',
                    'Courses are only for free material',
                ],
                correctIndex: 2,
            },
            {
                id: 'm11q2',
                question: 'What is the safest way to restore member login access issues?',
                options: [
                    'Send a password reset or new invite through the portal',
                    'Delete and recreate the course',
                    'Disable all offers temporarily',
                    'Remove the user from Contacts',
                ],
                correctIndex: 0,
            },
            {
                id: 'm11q3',
                question: 'Why should you avoid deleting paid course content outright?',
                options: [
                    'Deleted courses increase storage usage',
                    'Communities stop working',
                    'It breaks the App Marketplace',
                    'Deletion cannot be reversed easily; archive/hide is safer for paid users',
                ],
                correctIndex: 3,
            },
            {
                id: 'm11q4',
                question: 'How do communities enhance the membership experience?',
                options: [
                    'They replace all lessons',
                    'They disable notifications',
                    'They provide discussion channels and can surface course content in a learning tab',
                    'They block offers from being sold',
                ],
                correctIndex: 2,
            },
            {
                id: 'm11q5',
                question: 'Which channel is usually best for delivering login links and onboarding steps?',
                options: ['Email, so members can click and save credentials', 'SMS without consent', 'Phone call only', 'In-app chat only'],
                correctIndex: 0,
            },
        ],
    },
    'module-12': {
        passingScore: 80,
        questions: [
            {
                id: 'm12q1',
                question: 'Why establish a consistent folder structure in Media Storage?',
                options: [
                    'It increases file size limits',
                    'It blocks public links',
                    'It keeps assets discoverable and repeatable across builds',
                    'It forces automatic captions',
                ],
                correctIndex: 2,
            },
            {
                id: 'm12q2',
                question: 'What happens when you delete a file in Media Storage?',
                options: [
                    'It moves to Trash for a limited time where it can be restored',
                    'It duplicates itself',
                    'It hides all other files in the folder',
                    'It is permanently gone immediately',
                ],
                correctIndex: 0,
            },
            {
                id: 'm12q3',
                question: 'Which task can the built-in media editor handle?',
                options: ['Full video production', 'Domain connection', 'Workflow creation', 'Basic crop/rotate/adjustments'],
                correctIndex: 3,
            },
            {
                id: 'm12q4',
                question: 'Why avoid duplicate uploads of the same logo or image?',
                options: [
                    'They speed up page load times',
                    'They cause confusion and increase the risk of using the wrong asset',
                    'They improve SEO automatically',
                    'Duplicates are required for automation',
                ],
                correctIndex: 1,
            },
            {
                id: 'm12q5',
                question: 'What is a smart way to confirm a shared media link will work on a live page?',
                options: [
                    'Test the link in an incognito window and refresh the page using it',
                    'Assume it works if it loads once',
                    'Rename the file repeatedly',
                    'Move the file to every folder',
                ],
                correctIndex: 0,
            },
        ],
    },
    'module-13': {
        passingScore: 80,
        questions: [
            {
                id: 'm13q1',
                question: 'How should you time and send review requests?',
                options: [
                    'Blast daily until a customer replies',
                    'Only ask for reviews on social media',
                    'Send compliant, timed requests via SMS/email using manual, bulk, or automated modes',
                    'Avoid templates to stay generic',
                ],
                correctIndex: 2,
            },
            {
                id: 'm13q2',
                question: 'Where should you embed a review widget for maximum impact?',
                options: [
                    'On the dashboard',
                    'Inside the App Marketplace',
                    'In the Media Library',
                    'On funnel/website pages near CTAs as social proof',
                ],
                correctIndex: 3,
            },
            {
                id: 'm13q3',
                question: 'Why use multi-link distribution for review requests?',
                options: [
                    'To split traffic across available review URLs like Google and Facebook',
                    'To randomize tags on contacts',
                    'To disable widgets',
                    'To hide low-star reviews',
                ],
                correctIndex: 0,
            },
            {
                id: 'm13q4',
                question: 'What is a strong reason to respond to reviews quickly?',
                options: [
                    'Fast replies build trust and can help SEO/engagement',
                    'Responses hide the original review',
                    'It reduces hosting costs',
                    'It disables negative feedback',
                ],
                correctIndex: 0,
            },
            {
                id: 'm13q5',
                question: 'Which practice should you avoid when requesting reviews?',
                options: [
                    'Spacing requests and honoring opt-out',
                    'Personalizing the message template',
                    'Requesting every day from the same customer',
                    'Linking to multiple sources when allowed',
                ],
                correctIndex: 2,
            },
        ],
    },
    'module-14': {
        passingScore: 80,
        questions: [
            {
                id: 'm14q1',
                question: 'What is the difference between first and latest attribution?',
                options: [
                    'First is the original source; latest is the most recent source',
                    'First is the highest-value source; latest is the lowest',
                    'First is paid; latest is organic',
                    'They are identical metrics',
                ],
                correctIndex: 0,
            },
            {
                id: 'm14q2',
                question: 'How can you convert a dashboard into a custom report?',
                options: [
                    'Print the dashboard and scan it',
                    'Export it to CSV manually',
                    'You cannot convert dashboards',
                    'Use the platform option to create a report from the dashboard or build from scratch',
                ],
                correctIndex: 3,
            },
            {
                id: 'm14q3',
                question: 'What often causes revenue to look incorrect in reports?',
                options: [
                    'Emails sent too early',
                    'Too many workflows',
                    'Opportunity values not aligned with actual Payments totals',
                    'Calendar buffers are missing',
                ],
                correctIndex: 2,
            },
            {
                id: 'm14q4',
                question: 'How can timezone mismatches affect reporting?',
                options: [
                    'They can shift dates and make trends look off by a day',
                    'They only change widget colors',
                    'They delete historic data',
                    'They increase spam complaints',
                ],
                correctIndex: 0,
            },
            {
                id: 'm14q5',
                question: 'Which KPI belongs on a weekly advertiser acquisition dashboard?',
                options: [
                    'Media storage capacity',
                    'Number of staff vacations',
                    'Leads, booked appointments, won deals, and revenue as defined',
                    'Count of course lessons',
                ],
                correctIndex: 2,
            },
        ],
    },
    'module-15': {
        passingScore: 80,
        questions: [
            {
                id: 'm15q1',
                question: 'How are most Marketplace app connections scoped?',
                options: [
                    'Per sub-account, so each location authenticates separately',
                    'Globally for every agency by default',
                    'Only at the user level',
                    'They require no authentication',
                ],
                correctIndex: 0,
            },
            {
                id: 'm15q2',
                question: 'What does an OAuth scope describe?',
                options: [
                    'SMS quiet hours',
                    'The permissions an app is requesting',
                    'The page layout settings',
                    'Your billing currency',
                ],
                correctIndex: 1,
            },
            {
                id: 'm15q3',
                question: 'Where do you manage or revoke an app’s access?',
                options: [
                    'Contacts → Smart Lists',
                    'Conversations → Filters',
                    'Settings → Connected Apps',
                    'Payments → Products',
                ],
                correctIndex: 2,
            },
            {
                id: 'm15q4',
                question: 'Why should you test Marketplace actions before wide rollout?',
                options: [
                    'They never change once installed',
                    'It disables automation logs',
                    'Testing is optional for installed apps',
                    'Some actions may incur usage charges or require extra permissions',
                ],
                correctIndex: 3,
            },
            {
                id: 'm15q5',
                question: 'When is it better to use a native Marketplace action instead of a webhook?',
                options: [
                    'When you need to bypass permissions',
                    'When no one approved the integration',
                    'When you want to avoid logging',
                    'When a supported native action reduces maintenance and handles auth for you',
                ],
                correctIndex: 3,
            },
        ],
    },
    'module-16': {
        passingScore: 80,
        questions: [
            {
                id: 'm16q1',
                question: 'Why is confirming the sub-account timezone a critical first step?',
                options: [
                    'It changes the app language',
                    'It enables payments processing',
                    'Calendars, reports, and quiet hours depend on it for accuracy',
                    'It unlocks the App Marketplace',
                ],
                correctIndex: 2,
            },
            {
                id: 'm16q2',
                question: 'What is the advantage of using Custom Values?',
                options: [
                    'They allow reusable variables like company name or booking links to update everywhere',
                    'They replace permissions',
                    'They stop all automations',
                    'They hide pages from search engines',
                ],
                correctIndex: 0,
            },
            {
                id: 'm16q3',
                question: 'Which principle should guide staff roles and permissions?',
                options: [
                    'Give every user full admin',
                    'Assign no roles until after the capstone',
                    'Rotate roles daily',
                    'Least privilege—only access needed for their duties',
                ],
                correctIndex: 3,
            },
            {
                id: 'm16q4',
                question: 'How can Labs toggles affect your build?',
                options: [
                    'They only change colors',
                    'They delete contacts',
                    'They enable or hide features and can alter the UI',
                    'They stop payments',
                ],
                correctIndex: 2,
            },
            {
                id: 'm16q5',
                question: 'What should you document after enabling a Lab feature?',
                options: [
                    'Nothing; Labs are temporary',
                    'Only the feature name',
                    'A screenshot of the dashboard',
                    'Date, owner, what was enabled, and a rollback note',
                ],
                correctIndex: 3,
            },
        ],
    },
};
