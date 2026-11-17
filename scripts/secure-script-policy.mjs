import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
async function files(dir) {
  const result=[];
  for(const e of await readdir(dir,{withFileTypes:true})) {
    const path=`${dir}/${e.name}`;
    if(e.isDirectory())result.push(...await files(path)); else if(e.name.endsWith(".html"))result.push(path);
  }
  return result;
}
const hashes=new Set();
for(const file of await files("dist")) {
  const html=await readFile(file,"utf8");
  if(/\son[a-z]+\s*=/i.test(html))throw new Error(`Inline event handler in ${file}`);
  for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\b[^>]*>/gi)) {
    if(/\bsrc\s*=/i.test(match[1]) || !match[2].trim())continue;
    hashes.add(`'sha256-${createHash("sha256").update(match[2]).digest("base64")}'`);
  }
}
const headers=await readFile("dist/_headers","utf8");
if(/script-src[^;]*'unsafe-inline'/.test(headers))throw new Error("Broad inline script permission remains");
if(headers.split("\n").some(line=>line.length>2000))throw new Error("Pages header exceeds static line limit");
console.log(`Validated ${hashes.size} inline scripts for exact response hashing; inline handlers prohibited.`);
