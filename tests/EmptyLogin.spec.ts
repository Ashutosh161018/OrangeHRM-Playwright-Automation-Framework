import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginAssertions } from '../assertions/LoginAssertions';

test('TC03 - EmptyLogin and Password', async({page})=>{
 const emptyLogin = new LoginPage(page);
 const verify = new LoginAssertions(page);
 
 await emptyLogin.open();
 await emptyLogin.clickLogin();
 await verify.verifyEmptyCredentials()

});