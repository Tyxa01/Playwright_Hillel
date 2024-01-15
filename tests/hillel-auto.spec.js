import { test, expect } from "@playwright/test";

test.describe("Base page test", () => {
  test("Registration", async ({ page }) => {
    const emailInput = page.locator("#signupEmail");
    const passwordInput = page.locator('input[name="password"]');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
    const randomIndex = Math.floor(Math.random() * 1000);
    const email = `testuser${randomIndex}@example.com`;
    await page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
    await page.locator("button.btn-primary").click();
    await page.locator("#signupName").fill("Artur");
    await expect(page.locator("#signupName")).toHaveValue("Artur");
    await page.locator("#signupLastName").fill("Test");
    await emailInput.fill(email);
    await expect(emailInput).toHaveValue(email);
    await passwordInput.fill("Password12345");
    await repeatPasswordInput.fill("Password12345");
    await page.locator("button", { hasText: "Register" }).click();
    await page.pause();
  });
});
