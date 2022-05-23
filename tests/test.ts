import { expect, test } from '@playwright/test'

test('index page has a theme element with proper content', async ({ page }) => {
	await page.goto('/')
	expect(await page.$eval('style[id^=theme-]', el => el.innerHTML)).toBe(':root {--color-background:white;--color-text:black;}')
})
test('index page has a button which changes the theme', async ({ page }) => {
	await page.goto('/')
	await page.click('button')
	expect(await page.$eval('style[id^=theme-]', el => el.innerHTML)).toBe(':root {--color-background:black;--color-text:white;}')
})