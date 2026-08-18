import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxesPage extends BasePage {
private checkboxes: Locator;

constructor(page: Page) {
super(page);
this.checkboxes = page.locator('#checkboxes input[type="checkbox"]');
}

async abrir() {
await this.navegarA('/checkboxes');
}

obtenerCheckbox(indice: number): Locator {
return this.checkboxes.nth(indice);
}

async marcar(indice: number) {
await this.obtenerCheckbox(indice).check();
}

async desmarcar(indice: number) {
await this.obtenerCheckbox(indice).uncheck();
}
}