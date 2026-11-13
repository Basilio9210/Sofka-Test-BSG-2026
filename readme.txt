PRUEBA E2E SAUCEDEMO (Playwright + TypeScript)

REQUISITOS
- Node.js 18 o superior (https://nodejs.org)
- Git 

PASOS DE EJECUCION (Windows CMD / PowerShell, macOS o Linux)
1. Clonar el repositorio y entrar a la carpeta del ejercicio:
     git clone <URL_DEL_REPO>
     cd ejercicio-1-saucedemo-playwright
2. Instalar dependencias:
     npm install
3. Instalar el navegador de Playwright:
     npx playwright install chromium
4. Ejecutar la prueba:
     npm test
   (opcional, viendo el navegador: npm run test:headed)
5. Ver el reporte HTML (incluye pasos, capturas y trazas):
     npm run report

ESTRUCTURA
- tests/purchase-flow.spec.ts : escenario E2E
- pages/                      : Page Object Model (Login, Inventory, Cart, Checkout)
- playwright.config.ts        : configuracion y reporteros
- playwright-report/          : reporte HTML (se genera al ejecutar)
- conclusiones.txt            : hallazgos y conclusiones

FLUJO CUBIERTO
Login standard_user/secret_sauce -> agregar 2 productos -> ver carrito ->
formulario de compra -> finalizar -> confirmacion "THANK YOU FOR YOUR ORDER".

TESTER: BASILIO SALDARRIAGA GIRALDO
