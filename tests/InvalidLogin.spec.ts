import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginAssertions } from '../assertions/LoginAssertions';

test('TC02 -Invalid Login and Password', async({page})=>{
 const invalidLogin = new LoginPage(page);
 const verify = new LoginAssertions(page);
 
 await invalidLogin.open();
 await invalidLogin.userName('XYZ');
 await invalidLogin.password('123XYZ');
 await invalidLogin.clickLogin();
 await verify.verifyInvalidCredentials();
 

});