import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addProduct(slug: string) {
    await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
    await expect(this.page.locator(`[data-test="remove-${slug}"]`)).toBeVisible();
  }

  async cartBadgeShould(count: number) {
    await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(String(count));
  }

  async goToCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }
}
