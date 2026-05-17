import{Page} from '@playwright/test';
export class LoginPage{

    readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async open(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async userName(user:string){
    await this.page.getByPlaceholder('Username').fill(user);

    }
    async password(password:string){    
    await this.page.getByPlaceholder('Password').fill(password); 
    }
      
    async clickLogin(){
        await this.page.getByRole('button',{name :'Login'}).click();
        await this.page.waitForTimeout(2000);
    }

   
}
 

