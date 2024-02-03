export class HomePage {
  constructor(page) {
    this.page = page;
    this.signUpButton = page.locator("button.btn-primary");
    this.signUpName = page.locator("#signupName");
    this.signUpLastName = page.locator("#signupLastName");
    this.passwordInput = page.locator('input[name="password"]');
    this.repeatPasswordInput = page.locator('input[name="repeatPassword"]');
    this.registerButton = page.locator("button", { hasText: "Register" });
  }
}
