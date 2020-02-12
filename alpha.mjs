/**
 * @fileoverview The alpha module.
 *
 * @author Derek Lewis <DerekNonGeneric@inf.is>
 * @license 0BSD
 * @module {module} alpha
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { spawn } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const cliTruncate = require('cli-truncate');
const { default: beta } = (await import('./beta.mjs'));

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function maybeUnwrap(obj) {
  return obj && obj.exports ? obj.exports.default : obj;
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

var ns = {}
ns.beta = await beta;
ns.beta.addself = maybeUnwrap(ns.beta);

const selfVar = 100;
console.log(`\n ↓ addself(${selfVar})`);
await ns.beta.addself(selfVar).then(console.table.bind(console));

if(ns.beta.hasOwnProperty('node')) {
  import.meta.loaded = new Set(Object.keys(ns.beta.node._cache));
  const truncLoaded = Array.from(import.meta.loaded).map((v, i, a) => {
    return cliTruncate(v, 80, {position: 'middle', space: false});
  });
  
  console.log('\n ↓ MODULE CACHE ↓');
  console.table(truncLoaded);
}

if(ns.beta.hasOwnProperty('context')) {
  console.log('\n ↓ BETA MODULE CONTEXT ↓');
  console.table(ns.beta.context);
}

console.log('\n ↓ INSTALLED PACKAGES ↓');
spawn('npm', ['list', '-depth', '0'], { stdio: 'inherit' });



