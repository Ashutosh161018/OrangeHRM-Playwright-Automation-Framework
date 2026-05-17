import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginAssertions } from '../assertions/LoginAssertions';

test('TC01 -Valid Login and Password', async({page})=>{
 const validLogin = new LoginPage(page);
 const verify = new LoginAssertions(page);

 await validLogin.open();
 await validLogin.userName('Admin');
 await validLogin.password('admin123');
 await validLogin.clickLogin();
 await verify.verifyDashboardVisible();

});