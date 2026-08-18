import { Page } from '@playwright/test';

export class BasePage {
protected page: Page;

constructor(page: Page) {
this.page = page;
}

async navegarA(ruta: string) {
await this.page.goto(`https://the-internet.herokuapp.com${ruta}`);
}
}