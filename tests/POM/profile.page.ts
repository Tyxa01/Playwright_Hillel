import { Page, Response } from "@playwright/test";
export class ProfilePage {
  constructor(private page: Page) {
    this.page = page;
  }

  readonly editProfileButton = this.page.locator("button", {
    hasText: "Edit profile",
  });
  readonly saveButton = this.page.locator("button", { hasText: "Save" });
  readonly updatePhotoPopup = this.page.locator(".alert-success");
  open(): Promise<null | Response> {
    return this.page.goto("/panel/profile");
  }
  async setInputFiles(filePath: string | string[]): Promise<void> {
    await this.page.setInputFiles("input#editProfilePhoto", filePath);
  }
}
