import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
private campoUsuario: Locator;
private campoPassword: Locator;
private botonLogin: Locator;
readonly mensajeFlash: Locator;

constructor(page: Page) {
super(page);
this.campoUsuario = page.locator('#username');
this.campoPassword = page.locator('#password');
this.botonLogin = page.getByRole('button', { name: 'Login' });
this.mensajeFlash = page.locator('#flash');
}

async abrir() {
await this.navegarA('/login');
}

async iniciarSesion(usuario: string, password: string) {
await this.campoUsuario.fill(usuario);
await this.campoPassword.fill(password);
await this.botonLogin.click();
}
}
