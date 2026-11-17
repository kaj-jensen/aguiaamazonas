import {spawnSync} from 'node:child_process';
const site=process.argv[2]||'';
const multisite=false;
function run(command,args,env={}){const result=spawnSync(command,args,{stdio:'inherit',env:{...process.env,...env}});if(result.error||result.status!==0)process.exit(result.status||1);}
if(multisite&&!['en','pt'].includes(site))throw Error('Choose en or pt explicitly');
run('node',['scripts/check-framework-policy.mjs']);
run('node',['scripts/audit-policy.mjs']);
run('npm',['run',multisite?`build:${site}:assets`:'build:assets']);
run('npx',['playwright','install','chromium']);
run('npx',['playwright','test'],{BROWSER_SITE:site});
