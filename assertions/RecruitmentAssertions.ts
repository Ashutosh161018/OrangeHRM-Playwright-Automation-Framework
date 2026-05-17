import{ Page, expect} from '@playwright/test';
export class RecruitmentAssertions{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async verifyRecruitmentPageVisible(){
        await expect(this.page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
    }


    async verifyJobVacancyAdded(vacancyName: string, jobTitle: string, hiringManager: string) {
        const row = this.page.locator('.oxd-table-card').filter({hasText: vacancyName});
        await expect(row).toBeVisible();
        await expect(row).toContainText(jobTitle);
        await expect(row).toContainText(hiringManager);
        await expect(row).toContainText('Active');
}
       
    async verifyEmptyVacancyForm(){
       
        await expect(this.page.locator('.oxd-input-field-error-message')).toHaveCount(3);
    }  

    async  verifySearchByJobTitle(JobTitle:string){
        
        const matchingRow = this.page.locator('.oxd-table-card').filter({ hasText: JobTitle });
        await expect(matchingRow).toBeVisible();
    }

    async verifyEnterBroadFilter(){
         await expect(this.page.getByText('Records Found')).toBeVisible();
    }
}
 