import { test, expect } from "@playwright/test";
import { HomePage } from "./POM/home.page";
test.use({ storageState: { cookies: [], origins: [] } });
test.describe("Base page test", () => {
  test("Registration", async ({ page }) => {
    const emailInput = page.locator("#signupEmail");
    const randomIndex = Math.floor(Math.random() * 1000);
    const email = `testuser${randomIndex}@example.com`;
    const homePage = new HomePage(page);
    await page.goto("/");
    await homePage.signUpButton.click();
    await homePage.signUpName.fill("Artur");
    await expect(homePage.signUpName).toHaveValue("Artur");
    await homePage.signUpLastName.fill("Test");
    await emailInput.fill(email);
    await expect(emailInput).toHaveValue(email);
    await homePage.passwordInput.fill("Password12345");
    await homePage.repeatPasswordInput.fill("Password12345");
    await homePage.registerButton.click();
  });
});
