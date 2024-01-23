import { test, expect } from "@playwright/test";
import { GaragePage } from "./POM/garage.page";

test.describe("Garage page tests", () => {
  test("Car add", async ({ page }) => {
    const garagePage = new GaragePage(page);
    await page.goto("/");
    await garagePage.addCarButton.click();
    await garagePage.brandDropdown.selectOption("Porsche");
    await garagePage.modelDropdown.selectOption("Panamera");
    await garagePage.mileageInput.fill("55");
    await garagePage.addButton.click();
    await garagePage.addFuelExpenseButton.first().click();
    await garagePage.numberOfLiters.fill("77");
    await garagePage.totalCost.fill("20000");
    await garagePage.mileageInput.fill("110");
    await garagePage.addButton.click();
    await expect(garagePage.test).toHaveText("20000.00 USD");
  });
});
