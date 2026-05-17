import { test } from '@playwright/test'; 
import { LoginPage } from '../pages/LoginPage'; 
import { DashboardAssertions } from '../assertions/DashboardAssertions'; 
test('TC04 - Dashboard loads successfully', async ({ page }) => { 
    
    const login = new LoginPage(page); 
    const dashboard = new DashboardAssertions(page); 
    
    await login.open(); 
    await login.userName('Admin'); 
    await login.password('admin123'); 
    await login.clickLogin(); 
    await dashboard.verifyDashboardWidgets(); 
});