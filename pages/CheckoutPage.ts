import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
    await expect(this.page).toHaveURL(/checkout-step-two\.html/);
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click();
    await expect(this.page).toHaveURL(/checkout-complete\.html/);
  }

  async shouldShowConfirmation() {
    // El sitio muestra el texto en mayúsculas por CSS (text-transform), pero el DOM trae "Thank you for your order!"
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText(/thank you for your order/i);
  }
}
