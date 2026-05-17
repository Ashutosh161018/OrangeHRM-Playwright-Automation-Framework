import { test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import{ expect} from '@playwright/test';


test('TC10 -Page load performance', async ({ page }) => {
  const validLogin = new LoginPage(page);

    const startTime = Date.now();

    await validLogin.open();
    await validLogin.userName('Admin');
    await validLogin.password('admin123');
    await validLogin.clickLogin();

    await page.getByRole('heading', { name: 'Dashboard' }).waitFor();

    const endTime = Date.now();
    const loadTime = endTime - startTime;

    console.log(`Page load time: ${loadTime} ms`);

    expect(loadTime).toBeLessThan(10000); // 5 seconds threshold
});