import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { courseModules } from '../src/data/courseData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.COURSE_BASE_URL || 'http://localhost:8000';
const OUTPUT_ROOT = path.resolve(__dirname, '..', 'captures');
const SCREENSHOT_DIR = path.join(OUTPUT_ROOT, 'screenshots');
const VIDEO_DIR = path.join(OUTPUT_ROOT, 'flows');

const DEFAULT_USER = {
    email: process.env.COURSE_USER_EMAIL || 'qa.automation@example.com',
    name: process.env.COURSE_USER_NAME || 'Automation QA',
    passcode: process.env.COURSE_USER_PASSCODE || 'pass-1234',
    inviteCode: process.env.COURSE_INVITE_CODE || 'VA-COHORT-2025',
};

const WAIT_FOR_IDLE = 400;

const ensureDirs = () => {
    [OUTPUT_ROOT, SCREENSHOT_DIR, VIDEO_DIR].forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
};

const slugify = (value) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

const waitForNetworkQuiet = async (page) => {
    await Promise.all([
        page.waitForLoadState('networkidle'),
        page.waitForTimeout(WAIT_FOR_IDLE),
    ]);
};

const highlightWithCallouts = async (page, targets) => {
    await page.evaluate(() => {
        document.getElementById('capture-callouts')?.remove();
        const layer = document.createElement('div');
        layer.id = 'capture-callouts';
        Object.assign(layer.style, {
            position: 'fixed',
            inset: '0',
            pointerEvents: 'none',
            zIndex: '9999',
        });
        document.body.appendChild(layer);
    });

    for (const [index, target] of targets.entries()) {
        const box = await target.locator.boundingBox();
        if (!box) continue;
        const payload = { box, label: target.label, index: index + 1 };
        await page.evaluate(({ box: rect, label, index: calloutIndex }) => {
            const layer = document.getElementById('capture-callouts');
            if (!layer) return;

            const outline = document.createElement('div');
            Object.assign(outline.style, {
                position: 'fixed',
                left: `${rect.x - 8}px`,
                top: `${rect.y - 8}px`,
                width: `${rect.width + 16}px`,
                height: `${rect.height + 16}px`,
                border: '3px solid #fb923c',
                borderRadius: '14px',
                boxShadow: '0 0 0 6px rgba(251,146,60,0.25)',
            });

            const badge = document.createElement('div');
            badge.textContent = String(calloutIndex);
            Object.assign(badge.style, {
                position: 'fixed',
                left: `${rect.x - 16}px`,
                top: `${rect.y - 18}px`,
                width: '28px',
                height: '28px',
                borderRadius: '14px',
                background: '#fb923c',
                color: '#0f172a',
                fontWeight: '800',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                display: 'grid',
                placeItems: 'center',
                boxShadow: '0 12px 30px rgba(251,146,60,0.35)',
            });

            const labelChip = document.createElement('div');
            labelChip.textContent = label;
            Object.assign(labelChip.style, {
                position: 'fixed',
                left: `${rect.x}px`,
                top: `${rect.y + rect.height + 10}px`,
                padding: '6px 10px',
                background: 'rgba(15,23,42,0.92)',
                border: '2px solid rgba(251,146,60,0.9)',
                color: '#e2e8f0',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: '600',
                maxWidth: '280px',
                backdropFilter: 'blur(6px)',
            });

            layer.append(outline, badge, labelChip);
        }, payload);
    }
};

const clearCallouts = async (page) => {
    await page.evaluate(() => document.getElementById('capture-callouts')?.remove());
};

const loginAndSeed = async (page) => {
    await page.goto(`${BASE_URL}/login`);
    await waitForNetworkQuiet(page);

    await page.getByPlaceholder('you@company.com').fill(DEFAULT_USER.email);
    await page.getByPlaceholder('Your display name').fill(DEFAULT_USER.name);
    await page.getByPlaceholder('Create or reuse your passcode').fill(DEFAULT_USER.passcode);
    await page.getByPlaceholder('VA-COHORT-2025').fill(DEFAULT_USER.inviteCode);
    await page.getByRole('button', { name: 'Enter workspace' }).click();

    await page.waitForURL('**/');

    // Unlock all modules to make sure navigation never stalls during capture.
    await page.evaluate(({ email, modules }) => {
        const payload = {
            users: {
                [email]: {
                    modules: modules.reduce((acc, moduleId) => {
                        acc[moduleId] = {
                            completed: true,
                            quizScore: null,
                            quizPassed: false,
                            labSubmitted: false,
                            labSubmission: '',
                        };
                        return acc;
                    }, {}),
                },
            },
        };
        window.localStorage.setItem('ghl-va-course-progress-v2', JSON.stringify(payload));
    }, {
        email: DEFAULT_USER.email.toLowerCase(),
        modules: courseModules.filter((module) => module.type !== 'resource').map((module) => module.id),
    });
};

const moduleAnnotations = (page, moduleTitle) => [
    {
        label: 'Breadcrumb trail, module index, and progress header',
        locator: page.locator('header.sticky'),
    },
    {
        label: 'In-page table of contents anchor links',
        locator: page.locator('h4:has-text("On this page")').locator('xpath=..'),
    },
    {
        label: `${moduleTitle} content body`,
        locator: page.locator('main .prose').first(),
    },
    {
        label: 'Knowledge Check quiz controls',
        locator: page.getByText('Knowledge Check', { exact: false }).first(),
    },
    {
        label: 'Hands-on Lab submission area',
        locator: page.getByText('Hands-on Lab', { exact: false }).first(),
    },
];

const quizAnnotations = (page) => [
    {
        label: 'Quiz question stem and options',
        locator: page.locator('form:has-text("Submit Quiz")'),
    },
    {
        label: 'Submit Quiz action',
        locator: page.getByRole('button', { name: 'Submit Quiz' }),
    },
    {
        label: 'Completion gate to continue',
        locator: page.getByRole('button', { name: /Note Completed/ }),
    },
];

const labAnnotations = (page) => [
    {
        label: 'Lab instructions and text area for evidence',
        locator: page.getByRole('textbox', { name: /Paste loom links/i }),
    },
    {
        label: 'Save Lab Evidence CTA and status chip',
        locator: page.getByRole('button', { name: 'Save Lab Evidence' }),
    },
];

const captureAnnotated = async (page, annotations, filePath) => {
    const normalizedAnnotations = annotations.filter((annotation) => Boolean(annotation));
    await highlightWithCallouts(page, normalizedAnnotations);
    await waitForNetworkQuiet(page);
    await page.screenshot({ path: filePath, fullPage: true });
    await clearCallouts(page);
};

const captureModuleScreenshots = async (page, module) => {
    const moduleDir = path.join(SCREENSHOT_DIR, module.id);
    if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir, { recursive: true });
    }

    const safeTitle = slugify(module.title);
    const overviewPath = path.join(moduleDir, `01-${safeTitle}-overview.png`);
    const quizPath = path.join(moduleDir, `02-${safeTitle}-quiz.png`);
    const labPath = path.join(moduleDir, `03-${safeTitle}-lab.png`);

    await waitForNetworkQuiet(page);

    await captureAnnotated(page, moduleAnnotations(page, module.title), overviewPath);
    await page.locator('form:has-text("Submit Quiz")').scrollIntoViewIfNeeded();
    await captureAnnotated(page, quizAnnotations(page), quizPath);
    await page.getByText('Hands-on Lab').first().scrollIntoViewIfNeeded();
    await captureAnnotated(page, labAnnotations(page), labPath);
};

const recordFlowClip = async (browser, flowName, runSteps) => {
    const context = await browser.newContext({
        recordVideo: {
            dir: VIDEO_DIR,
            size: { width: 1280, height: 720 },
        },
    });
    const page = await context.newPage();

    await loginAndSeed(page);
    await runSteps(page);

    const recording = page.video();
    await context.close();

    if (recording) {
        const pathOnDisk = await recording.path();
        const targetName = path.join(VIDEO_DIR, `${slugify(flowName)}.webm`);
        fs.renameSync(pathOnDisk, targetName);
        console.log(`Saved flow clip to ${targetName}`);
    }
};

const captureModules = async (browser) => {
    const page = await browser.newPage();
    await loginAndSeed(page);

    for (const module of courseModules) {
        const targetUrl = `${BASE_URL}/module/${module.id}`;
        await page.goto(targetUrl);
        await waitForNetworkQuiet(page);
        await captureModuleScreenshots(page, module);
    }

    await page.close();
};

const captureWorkflowSchedulerFlow = async (browser) => {
    await recordFlowClip(browser, 'workflow-scheduler-trigger', async (page) => {
        await page.goto(`${BASE_URL}/module/module-9`);
        await waitForNetworkQuiet(page);
        await page.locator('main .prose').first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(6000);
    });
};

const captureAiAgentIntentFlow = async (browser) => {
    await recordFlowClip(browser, 'ai-agent-intents', async (page) => {
        await page.goto(`${BASE_URL}/module/module-7`);
        await waitForNetworkQuiet(page);
        await page.locator('main .prose').first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(6000);
    });
};

const main = async () => {
    ensureDirs();
    const browser = await chromium.launch({ headless: true });

    try {
        await captureModules(browser);
        await captureWorkflowSchedulerFlow(browser);
        await captureAiAgentIntentFlow(browser);
    } catch (error) {
        console.error('Capture script failed', error);
        process.exitCode = 1;
    } finally {
        await browser.close();
    }
};

main();
