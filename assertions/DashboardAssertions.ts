import { Page, expect } from '@playwright/test';

export class DashboardAssertions {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async verifyDashboardVisible() {
        await expect(
            this.page.getByRole('heading', { name: 'Dashboard' })
        ).toBeVisible();
    }

    
    async verifyDashboardWidgets() {

        await expect(this.page.getByText('Time at Work')).toBeVisible();
        await expect(this.page.getByText('My Actions')).toBeVisible();
        await expect(this.page.getByText('Quick Launch')).toBeVisible();
        await expect(this.page.getByText('Buzz Latest Posts')).toBeVisible();
        await expect(this.page.getByText('Employees on Leave Today')).toBeVisible();
        await expect(this.page.getByText('Employee Distribution by Sub Unit')).toBeVisible();
        await expect(this.page.getByText('Employee Distribution by Location')).toBeVisible();

    }
}