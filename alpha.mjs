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

/**
 * @param {(string)} relative file path
 *  @return {(string)} absolute file path
 */
function getAbsPath() {
  // ~  pretend this this magically returns absolute paths ~
}

const absPathTestResolved = join(absPathFixturesDir, resolvedUrl);

/**
 * Converts actual URL returned by our real resolver (fileUrl) into path
 * relative to fixturesDir so that it can be compared against a test's
 * resolutionTest[0].resolvedURL.
 *
 * @param {!(URL|string)} realResolvedFileUrl - actual URL returned by our real resolver
 * @param {!(string)} fixturesDir - path relative to project root (resolutionTest[0].fixturesDir)
 * @param {!(string)} resolvedUrl - path relative to fixturesDir (resolutionTest[0].resolvedURL)
 * @return {!(string)} path relative to fixturesDir
 */
async function relativePathFromFileUrl(
  realResolvedFileUrl,
  fixturesDir,
  resolvedUrl
) {
  const { relative } = await import('path');
  const absPathRealResolved = URL.fileURLToPath(realResolvedFileUrl);
  const absPathFixturesDir = getAbsPath(fixturesDir);

  return relative(absPathFixturesDir, absPathRealResolved);
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

beta = await beta; // Dubbing this "lazy loading" while reengineering.

const selfVar = 100;
console.log(`\n ↓ addself(${selfVar})`);
console.log(await maybeUnwrap(beta).addself(selfVar));

if (beta.hasOwnProperty('_cache')) {
  const abbreviatedModuleMap = {};

  Object.keys(beta._cache).forEach((v, i, a) => {
    const newKey = cliTruncate(v, 63, { position: 'middle', space: false });

    const blankModuleRecord = new Module(import.meta.url);
    blankModuleRecord.loaded = true;
    const moduleRecord = Object.assign(blankModuleRecord, {
      ...beta._cache[v],
    });
    Object.create;
    /** @type {Module} */ abbreviatedModuleMap[newKey] = { moduleRecord };
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
