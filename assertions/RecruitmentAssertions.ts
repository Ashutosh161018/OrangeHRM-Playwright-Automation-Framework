import{ Page, expect} from '@playwright/test';
export class RecruitmentAssertions{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async verifyRecruitmentPageVisible(){
        await expect(this.page.getByRole('heading', { name: 'Recruitment' })).toBeVisible();
    }


    async verifyJobVacancyAdded(vacancyName: string, jobTitle: string, hiringManager: string){
       await this.page.pause();
       await expect(this.page.getByText(vacancyName)).toBeVisible();
       await expect(this.page.getByText(jobTitle)).toBeVisible();
       await expect(this.page.getByText(hiringManager, { exact: true })).toBeVisible();
       await expect(this.page.getByRole('row', { name: vacancyName })).toBeVisible();
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
 