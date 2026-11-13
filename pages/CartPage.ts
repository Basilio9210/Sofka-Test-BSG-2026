import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async shouldContain(productNames: string[]) {
    const items = this.page.locator('[data-test="inventory-item-name"]');
    await expect(items).toHaveCount(productNames.length);
    for (const name of productNames) {
      await expect(items.filter({ hasText: name })).toHaveCount(1);
    }
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
  }
}
