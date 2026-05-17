import { test} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import{RecruitmentPage} from '../pages/RecruitmentPage';
import{RecruitmentAssertions} from '../assertions/RecruitmentAssertions';

test('TC07 - Submit empty vacancy form', async ({ page }) => {
  
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
    await recruitmentPage.clickSave();
    await recruitmentAssertions.verifyEmptyVacancyForm();
      
});




