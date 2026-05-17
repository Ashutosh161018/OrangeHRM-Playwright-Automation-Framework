import { test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import { RecruitmentAssertions } from '../assertions/RecruitmentAssertions';

test('TC05 -Navigate to Recruitment module', async ({ page }) => {
  const validLogin = new LoginPage(page);
  const navigateToRecruitment = new RecruitmentPage(page);
  const recruitmentAssertions = new RecruitmentAssertions(page); 
  
  
  await validLogin.open();
   await validLogin.userName('Admin');
   await validLogin.password('admin123');
   await validLogin.clickLogin();
   await navigateToRecruitment.navigateToRecruitment();
   await recruitmentAssertions.verifyRecruitmentPageVisible();

  });