async (page) => {
  const dir = '/Users/accysuite/Desktop/Design AccyBooks Marketing Website/.audit/';
  const r = {};
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:8443/', { waitUntil: 'networkidle' });
  const track = page.locator('#feature-track');
  const scroll = () => track.evaluate((el) => Math.round(el.scrollLeft));
  const status = () => page.locator('.carousel-status').innerText();
  const prev = page.getByRole('button', { name: 'Previous features' });
  const next = page.getByRole('button', { name: 'Next features' });
  await track.scrollIntoViewIfNeeded();

  r.h1Lines = await page.evaluate(() => { const h = document.querySelector('.hero h1'); return Math.round(h.getBoundingClientRect().height / parseFloat(getComputedStyle(h).lineHeight)); });
  r.initial = { scroll: await scroll(), status: await status(), prevDisabled: await prev.isDisabled(), nextDisabled: await next.isDisabled(), dots: await page.locator('.carousel-dots button').count() };
  await next.click(); await page.waitForTimeout(700);
  r.afterNext = { scroll: await scroll(), status: await status(), prevDisabled: await prev.isDisabled() };
  await next.click(); await page.waitForTimeout(700);
  r.afterNext2 = { scroll: await scroll(), status: await status() };
  await prev.click(); await page.waitForTimeout(700);
  r.afterPrev = { scroll: await scroll(), status: await status() };
  const dots = page.locator('.carousel-dots button');
  await dots.last().click(); await page.waitForTimeout(800);
  r.afterLastDot = { scroll: await scroll(), max: await track.evaluate((el) => el.scrollWidth - el.clientWidth), status: await status(), nextDisabled: await next.isDisabled() };
  await page.screenshot({ path: `${dir}carousel-end.jpg`, type: 'jpeg', quality: 80 });
  await track.focus(); await page.keyboard.press('Home'); await page.waitForTimeout(800);
  r.afterHomeKey = { scroll: await scroll(), status: await status() };
  await page.keyboard.press('ArrowRight'); await page.waitForTimeout(700);
  r.afterArrowKey = { scroll: await scroll(), status: await status() };

  // Hover tilt on a feature card
  const card = page.locator('.feature-card').nth(1);
  const box = await card.boundingBox();
  await page.mouse.move(box.x + box.width * 0.85, box.y + box.height * 0.2, { steps: 6 });
  await page.waitForTimeout(400);
  r.hoverTilt = await card.evaluate((el) => ({ transform: getComputedStyle(el).transform, tiltX: el.style.getPropertyValue('--tilt-x'), tiltY: el.style.getPropertyValue('--tilt-y'), shadow: getComputedStyle(el).boxShadow.slice(0, 60), glare: getComputedStyle(el.querySelector('.tilt-glare')).opacity, iconTransform: getComputedStyle(el.querySelector('.icon-tile')).transform }));
  await page.screenshot({ path: `${dir}hover-feature.jpg`, type: 'jpeg', quality: 85, clip: { x: box.x - 30, y: box.y - 30, width: box.width + 60, height: box.height + 60 } });
  await page.mouse.move(5, 5); await page.waitForTimeout(450);
  r.afterLeave = await card.evaluate((el) => getComputedStyle(el).transform);

  // Product tabs
  const panelState = () => page.evaluate(() => ({ heading: document.querySelector('.showcase-copy h3').textContent, focus: document.querySelector('.showcase .product-frame').dataset.focus, selected: document.querySelector('[role=tab][aria-selected=true]').textContent, zoom: getComputedStyle(document.querySelector('.showcase .product-frame-zoom')).transform }));
  await page.locator('#platform').scrollIntoViewIfNeeded();
  r.tab0 = await panelState();
  await page.getByRole('tab', { name: 'Bank Reconciliation' }).click(); await page.waitForTimeout(800);
  r.tabClick = await panelState();
  await page.locator('#platform-panel').screenshot({ path: `${dir}tab-recon.jpg`, type: 'jpeg', quality: 85 });
  await page.keyboard.press('ArrowRight'); await page.waitForTimeout(800);
  r.tabArrow = { ...(await panelState()), focused: await page.evaluate(() => document.activeElement.textContent) };
  await page.locator('#platform-panel').screenshot({ path: `${dir}tab-compliance.jpg`, type: 'jpeg', quality: 85 });
  await page.keyboard.press('End'); await page.waitForTimeout(800);
  r.tabEnd = await panelState();
  await page.locator('#platform-panel').screenshot({ path: `${dir}tab-reporting.jpg`, type: 'jpeg', quality: 85 });
  await page.getByRole('tab', { name: 'Client Management' }).click(); await page.waitForTimeout(800);
  await page.locator('#platform-panel').screenshot({ path: `${dir}tab-clients.jpg`, type: 'jpeg', quality: 85 });

  // Pricing hover + FAQ
  const plan = page.locator('.plan-card').nth(0);
  await plan.scrollIntoViewIfNeeded();
  const pb = await plan.boundingBox();
  await page.mouse.move(pb.x + pb.width * 0.2, pb.y + pb.height * 0.8, { steps: 5 }); await page.waitForTimeout(400);
  r.planHover = await plan.evaluate((el) => getComputedStyle(el).transform);
  await page.getByRole('button', { name: 'Can we change plans as our practice grows?' }).click();
  r.faq = await page.evaluate(() => [...document.querySelectorAll('.accordion-panel')].map((p) => !p.hidden));
  await page.getByRole('button', { name: 'Yearly' }).click();
  r.billing = await page.locator('.plan-card .eyebrow-text').first().innerText();

  // Mega menu
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.locator('.nav-link', { hasText: 'Features' }).hover(); await page.waitForTimeout(300);
  r.mega = await page.locator('.mega-panel b').innerText().catch(() => 'none');
  await page.screenshot({ path: `${dir}mega.jpg`, type: 'jpeg', quality: 80, clip: { x: 0, y: 0, width: 1440, height: 260 } });
  return r;
}
