import {defineConfig,devices} from '@playwright/test';
const site=process.env.BROWSER_SITE||'';
const output=site?`dist/${site}`:'dist';
export default defineConfig({testDir:'./tests/browser',timeout:45000,retries:process.env.CI?1:0,reporter:[['list'],['html',{open:'never'}]],use:{baseURL:process.env.PREVIEW_URL||'http://127.0.0.1:8788',trace:'retain-on-failure'},projects:[{name:'desktop',use:{...devices['Desktop Chrome']}},{name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium'}}],webServer:process.env.PREVIEW_URL?undefined:{command:`npx wrangler pages dev ${output} --ip 127.0.0.1 --port 8788 --local`,url:'http://127.0.0.1:8788',reuseExistingServer:false,timeout:120000}});
