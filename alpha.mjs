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

import { Module, createRequire } from 'module';
import { spawn } from 'child_process';

let { default: beta } = await import('./beta.mjs');
const require = createRequire(import.meta.url);
const cliTruncate = require('cli-truncate');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * @param {object} object
 * @return {object}
 */
function maybeUnwrap(object) {
  return object && object.exports ? object.exports.default : object;
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

beta = await beta; // Dubbing this "lazy loading" while reengineering.
beta.addself = maybeUnwrap(beta);

const selfVar = 100;
console.log(`\n ↓ addself(${selfVar})`);
console.log(await beta.addself(selfVar));

if (beta.hasOwnProperty('_cache')) {
  const abbreviatedModuleMap = {};

  Object.keys(beta._cache).forEach((v, i, a) => {
    const newKey = cliTruncate(v, 63, { position: 'middle', space: false });

    const blankModuleRecord = new Module();
    blankModuleRecord.loaded = true;
    const moduleRecord = Object.assign(blankModuleRecord, {
      ...beta._cache[v],
    });

    abbreviatedModuleMap[newKey] = { moduleRecord };
  });

  console.log('\n ↓ BETA MODULE MAP ↓');
  console.table(abbreviatedModuleMap);
}

if (beta.hasOwnProperty('context')) {
  console.log('\n ↓ BETA MODULE CONTEXT ↓');
  console.table(beta.context);
}

console.log('\n ↓ INSTALLED PACKAGES ↓');
spawn('npm', ['list', '-depth', '0'], { stdio: 'inherit' });

// Entry module using top-level await that *also* exports.
export default maybeUnwrap;
