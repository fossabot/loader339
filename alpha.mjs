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

import { createRequire } from 'module';
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

if (beta.hasOwnProperty('node')) {
  import.meta.loaded = new Set(Object.keys(beta.node._cache));
  const truncateLoaded = [...import.meta.loaded].map((v, i, a) => {
    return cliTruncate(v, 80, { position: 'middle', space: false });
  });

  console.log('\n ↓ MODULE CACHE ↓');
  console.table(truncateLoaded);
}

if (beta.hasOwnProperty('context')) {
  console.log('\n ↓ BETA MODULE CONTEXT ↓');
  console.table(beta.context);
}

console.log('\n ↓ INSTALLED PACKAGES ↓');
spawn('npm', ['list', '-depth', '0'], { stdio: 'inherit' });
