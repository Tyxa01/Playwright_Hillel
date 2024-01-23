import { test, expect } from "@playwright/test";
import { ProfilePage } from "./POM/profile.page";

test.describe("Profile tests ", () => {
  test("Profile photo update", async ({ page }) => {
    const profilePage = new ProfilePage(page);
    await page.goto("/panel/profile");
    await profilePage.profilePageButton.click();
    await profilePage.editProfile.click();
    await profilePage.photoLoader;
    await profilePage.saveButton.click();
    await expect(profilePage.updatePhotoPopup).toBeVisible();
  });
});
