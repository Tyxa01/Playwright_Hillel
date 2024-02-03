import { test, expect } from "@playwright/test";
import { ProfilePage } from "./POM/profile.page";

test.describe("Profile tests ", () => {
  test("Profile photo update", async ({ page }) => {
    const profilePage = new ProfilePage(page);
    await profilePage.open();
    await profilePage.editProfileButton.click();
    await profilePage.setInputFiles("fixtures/logo.png");
    await profilePage.saveButton.click();
    await expect(profilePage.updatePhotoPopup).toBeVisible();
  });
});
