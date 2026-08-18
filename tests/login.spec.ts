
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login exitoso', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.abrir();
await loginPage.iniciarSesion('tomsmith', 'SuperSecretPassword!');
await expect(loginPage.mensajeFlash).toContainText('You logged into a secure area!');
});

test('login fallido', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.abrir();
await loginPage.iniciarSesion('usuarioMalo', 'claveMala');
await expect(loginPage.mensajeFlash).toContainText('Your username is invalid!');
});