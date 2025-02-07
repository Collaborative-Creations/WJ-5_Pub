// tests/example.spec.js
import { test, expect } from '@playwright/test';

test.describe('Basic Tests', () => {
    test('Test that passes',
        { tag: ["@QUICK"] },
        async ({ page }) => {
        // Navigate to a simple page
        await page.goto('https://example.com');
        // Perform a simple assertion
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });

    test('Test that fails',
        { tag: ["@QUICK"] },
        async ({ page }) => {
        // Navigate to a simple page
        await page.goto('https://example.com');
        
        // Perform an intentional failing assertion
        const title = await page.title();
        expect(title).toBe('This Title Does Not Match'); // This will fail
    });

});
