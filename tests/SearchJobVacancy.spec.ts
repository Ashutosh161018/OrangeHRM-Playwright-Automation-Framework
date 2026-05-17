import { test} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import{RecruitmentPage} from '../pages/RecruitmentPage';
import{RecruitmentAssertions} from '../assertions/RecruitmentAssertions';

test('TC08 - Search job vacancy by job title', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    const recruitmentPage = new RecruitmentPage(page);
    const recruitmentAssertions = new RecruitmentAssertions(page);
    
    await loginPage.open();
    await loginPage.userName('Admin');
    await loginPage.password('admin123');
    await loginPage.clickLogin();
    await recruitmentPage.navigateToRecruitment();
    await recruitmentPage.navigateToVacancies();
    await recruitmentPage.SearchByJobTitle('QA Lead');
    await recruitmentPage.clickSearch();
    await recruitmentAssertions.verifySearchByJobTitle('QA Lead');


});
