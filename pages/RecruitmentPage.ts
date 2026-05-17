import{Page} from '@playwright/test';
export class RecruitmentPage{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async navigateToRecruitment(){
    await this.page.locator('.oxd-main-menu').getByText('Recruitment').click();
       
    }

    async navigateToVacancies(){
        await Promise.all([
        this.page.waitForURL(/viewJobVacancy/),
        this.page.getByRole('link', { name: 'Vacancies' }).click()
    ]);
         await this.page.pause();       
}
     
    async clickAddVacancy(){
            await this.page.getByRole('button', { name: ' Add' }).click();
    }

    async fillVacancyName(VacancyName:string){
            await this.page.getByRole('textbox').nth(1).fill(VacancyName);
        }

     async selectJobTitle(JobTitle:string){
            await this.page.getByText('-- Select --').click();
            await this.page.getByRole('option', { name: JobTitle }).click();
        }

    async fillDescription(Description:string){
            await this.page.getByRole('textbox', { name: 'Type description here' }).fill(Description);
        }

    async selectHiringManager(HiringManager:string){
            const input = this.page.getByRole('textbox', { name: 'Type for hints...' });
            await input.click();
            await input.fill(HiringManager);
            await this.page.getByRole('option', { name: HiringManager }).click();
        }

    async fillPositions(NumberOfPositions:number){
            await this.page.getByRole('textbox').nth(4).fill(NumberOfPositions.toString());
        }

    async clickSave(){
            await this.page.getByRole('button', { name: 'Save' }).click();
            
        }

     async SearchByJobTitle(JobTitle:string){
            await this.page.locator('div.oxd-grid-item').filter({ hasText: 'Job Title' }).locator('.oxd-select-text-input').click();
            await this.page.getByRole('option', { name: JobTitle }).click();
        }
    
        async clickSearch(){
            await this.page.getByRole('button', { name: 'Search' }).click();
            
        }   
        
}
 

