import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async login(user: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(user);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}
