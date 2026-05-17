import{ Page, expect} from '@playwright/test';
export class LoginAssertions{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async verifyDashboardVisible(){
        await expect(this.page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
    }
     
    async verifyInvalidCredentials(){
        await expect(this.page.getByText('Invalid credentials')).toBeVisible();
    }

    async verifyEmptyCredentials(){
    const errors = this.page.locator('.oxd-input-field-error-message');

    await expect(errors).toHaveCount(2);
    await expect(errors.first()).toHaveText('Required');
    await expect(errors.nth(1)).toHaveText('Required');
    
    }


}
 

