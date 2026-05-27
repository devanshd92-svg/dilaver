/**
 * Captures homepage category gallery screenshots (requires dev or prod server).
 * Uses Playwright chromium (install: npx playwright install chromium).
 *
 * Example (if port 3000 is busy): `npm run build && npx next start --port 3001`
 * then `BASE_URL=http://127.0.0.1:3001 npm run screenshot:gallery`
 */

import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "changesdiscreptiononwhatsapp", "screenshots");
const baseURL = process.env.BASE_URL ?? "http://localhost:3000";

const categoryTitles = [
  "Undercarriage parts",
  "Frames and body parts",
  "Hydraulic systems",
  "Ground engaging tools",
  "Filters and consumables",
  "Electrical parts",
];

function screenshotSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

try {
  await page.goto(baseURL, { waitUntil: "networkidle", timeout: 120_000 });
} catch (err) {
  await browser.close();
  console.error(
    `Failed to load ${baseURL}. Start the site with "npm run dev" or "npm run start" first.\n`,
    err,
  );
  process.exit(1);
}

const section = page.locator("section").filter({
  has: page.getByRole("heading", { name: /Categories crews ask for first/i }),
});

await section.scrollIntoViewIfNeeded();
await new Promise((r) => setTimeout(r, 1200));

await section.screenshot({
  path: join(outDir, "screenshot-gallery-categories.png"),
});

for (const title of categoryTitles) {
  const card = section.locator("article").filter({ hasText: title }).first();
  await card.scrollIntoViewIfNeeded();
  await new Promise((r) => setTimeout(r, 300));
  const name = `screenshot-${screenshotSlug(title)}.png`;
  await card.screenshot({ path: join(outDir, name) });
}

await browser.close();
console.log(`Wrote gallery screenshots to ${outDir}`);
