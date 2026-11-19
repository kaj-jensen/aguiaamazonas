import test from 'node:test';
import assert from 'node:assert/strict';
import { handleUnexpected } from '../lib/unexpected-error.js';
test('unexpected errors are correlated without leaking provider or request data', async () => {
 const records=[];const original=console.error;console.error=value=>records.push(value);
 try {
  const response=await handleUnexpected(async()=>{throw new Error('secret=value customer@example.invalid');},'Please retry.');
  assert.equal(response.status,500);assert.equal(await response.text(),'Please retry.');
  assert.equal(response.headers.get('Cache-Control'),'no-store');
  const record=JSON.parse(records[0]);assert.deepEqual(Object.keys(record).sort(),['event','requestId']);
  assert.equal(record.event,'unexpected_error');assert.equal(record.requestId,response.headers.get('X-Request-ID'));
  assert.doesNotMatch(records.join(''),/secret|customer/);
 } finally { console.error=original; }
});
test('successful response is preserved',async()=>{
 const expected=new Response('ok',{status:201,headers:{'X-Test':'kept'}});
 assert.equal(await handleUnexpected(async()=>expected,'retry'),expected);
});

import {onRequest} from '../functions/_middleware.js';
test('Pages middleware sanitizes failures from its next handler',async()=>{
 const original=console.error;const records=[];console.error=value=>records.push(value);
 try {
  const response=await onRequest({request:new Request('https://www.aguiaamazonas.com.br/'),next:async()=>{throw Error('private-provider-details')}});
  assert.equal(response.status,500);assert.doesNotMatch(await response.text(),/private-provider/);
  assert.ok(response.headers.get('X-Request-ID'));assert.doesNotMatch(records.join(''),/private-provider/);
 } finally {console.error=original;}
});

test('a failed logger cannot replace the controlled error response',async()=>{
 const original=console.error;console.error=()=>{throw Error('logger failed');};
 try {
  const response=await handleUnexpected(async()=>{throw Error('provider failed');},'Please retry.');
  assert.equal(response.status,500);assert.equal(await response.text(),'Please retry.');
  assert.ok(response.headers.get('X-Request-ID'));
 } finally {console.error=original;}
});
