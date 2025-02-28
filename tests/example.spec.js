import { test, expect } from '@playwright/test';

test('Sauce Demo Website', async ({ page }) => {


 await page.goto('https://www.saucedemo.com/');
 await expect(page).toHaveTitle('Swag Labs');

 await page.locator('#user-name').fill('standard_user');
 await page.locator('#password').fill('secret_sauce');

 await page.locator('#login-button').click();

 await page.locator('text=Sauce Labs Backpack').click();
    await page.locator('text=Add to cart').click();
    await page.locator('text=Remove').click();
    await page.locator('text=Add to cart').click();
    

    await page.locator('.shopping_cart_link').click();
    await page.locator('text=Checkout').click();
    await page.locator('#first-name').fill('Pratik');
    await page.locator('#last-name').fill('Kumar');
    await page.locator('#postal-code').fill('160055');
    await page.locator('text=Continue').click();
    await page.locator('text=Finish').click();
    await page.locator('text=Back Home').click();
    await page.locator('text=Open Menu').click();
    await page.locator('text=Logout').click();
    await expect(page).toHaveTitle('Swag Labs');





});



