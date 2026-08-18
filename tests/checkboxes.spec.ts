import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

test('marcar el primer checkbox', async ({ page }) => {
const checkboxesPage = new CheckboxesPage(page);
await checkboxesPage.abrir();
await checkboxesPage.marcar(0);
await expect(checkboxesPage.obtenerCheckbox(0)).toBeChecked();
});

test('desmarcar el segundo checkbox', async ({ page }) => {
const checkboxesPage = new CheckboxesPage(page);
await checkboxesPage.abrir();
await checkboxesPage.desmarcar(1);
await expect(checkboxesPage.obtenerCheckbox(1)).not.toBeChecked();
});