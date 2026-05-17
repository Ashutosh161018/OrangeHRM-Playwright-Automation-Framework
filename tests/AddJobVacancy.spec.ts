import { test} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import{RecruitmentPage} from '../pages/RecruitmentPage';
import{RecruitmentAssertions} from '../assertions/RecruitmentAssertions';
test('TC06 - Open Add Job Vacancy form', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    const recruitmentPage = new RecruitmentPage(page);
    const recruitmentAssertions = new RecruitmentAssertions(page);

    await loginPage.open();
    await loginPage.userName('Admin');
    await loginPage.password('admin123');
    await loginPage.clickLogin();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.navigateToVacancies()
    await recruitmentPage.clickAddVacancy();
    await recruitmentPage.fillVacancyName('QA Automation Engineer');
    await recruitmentPage.selectJobTitle('QA Engineer');
    await recruitmentPage.fillDescription('This is a job vacancy for QA Engineer');
    await recruitmentPage.selectHiringManager('Ravi M B');
    await recruitmentPage.fillPositions(2);
    await recruitmentPage.clickSave();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.navigateToVacancies()
    await recruitmentAssertions.verifyJobVacancyAdded('QA Engineer', 'QA Engineer' ,'Ravi B');
      
});




