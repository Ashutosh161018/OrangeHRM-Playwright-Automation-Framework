import { Page } from '@playwright/test'; 
export class DashboardPage { 
    readonly page: Page; 
    constructor(page: Page) 
    { this.page = page; } 
    
    dashboardHeading() { 
        return this.page.getByRole('heading', { name: 'Dashboard' }); 
    } 
    
    timeAtWorkWidget() { 
        return this.page.getByText('Time at Work');
     } 
     
     myActionsWidget() { 
        return this.page.getByText('My Actions'); 
    } 
    
    quickLaunchWidget() { 
        return this.page.getByText('Quick Launch'); 
    } 
    
    buzzLatestPostsWidget() { 
        return this.page.getByText('Buzz Latest Posts'); 
    } 
    
    employeesOnLeaveWidget() { 
        return this.page.getByText('Employees on Leave Today'); 
    } 
    
    employeeDistributionSubUnitWidget() { 
        return this.page.getByText('Employee Distribution by Sub Unit');
     } 
     
     employeeDistributionLocationWidget() { 
        return this.page.getByText('Employee Distribution by Location'); 
    } 
}