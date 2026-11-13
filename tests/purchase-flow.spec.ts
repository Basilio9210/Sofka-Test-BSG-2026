import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('SauceDemo - flujo de compra E2E', () => {
  test('el usuario standard_user completa una compra de dos productos', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await test.step('Autenticarse con standard_user', async () => {
      await login.open();
      await login.login('standard_user', 'secret_sauce');
    });

    await test.step('Agregar dos productos al carrito', async () => {
      await inventory.addProduct('sauce-labs-backpack');
      await inventory.addProduct('sauce-labs-bike-light');
      await inventory.cartBadgeShould(2);
    });

    await test.step('Visualizar el carrito', async () => {
      await inventory.goToCart();
      await cart.shouldContain(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
    });

    await test.step('Completar el formulario de compra', async () => {
      await cart.checkout();
      await checkout.fillInformation('Basilio', 'QA', '050001');
    });

    await test.step('Finalizar la compra y validar confirmación', async () => {
      await checkout.finish();
      await checkout.shouldShowConfirmation();
    });
  });
});
