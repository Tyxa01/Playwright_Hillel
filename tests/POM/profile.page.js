export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profilePageButton = page.getByRole("link", { name: "Profile" });
    this.editProfile = page.locator("button", { hasText: "Edit profile" });
    this.photoLoader = page.setInputFiles(
      "input#editProfilePhoto",
      "fixtures/logo.png"
    );
    this.saveButton = page.locator("button", { hasText: "Save" });
  }
}
