/**
 * @fileoverview Loader339
 *
 * * Monkey patch a module at import time.
 * * Have more than one active APM/transformer within a single app.
 * * Keep track of which modules have been imported.
 *
 * Reqs: node v13.7.0
 * Flags: --experimental-loader --harmony-top-level-await
 *
 * node --experimental-loader=./loader339.mjs ./alpha.mjs
 *
 * @author Derek Lewis <DerekNonGeneric@inf.is>
 * @license 0BSD
 * @module {module} loader339
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { inspect } from 'util';

//------------------------------------------------------------------------------
// APMs/Transformers
//------------------------------------------------------------------------------

function tranSpawn(source) {
  // Replace a builtin module with custom module.
  return source.replace(
    /import { spawn } from 'child_process';/g,
    `import spawn from 'cross-spawn';`
  );
}

function apmAnalytics(source, context) {
  // Monkey patch `export default ...` w/ IIFE wrapper [IIFExport].
  const regexp = /(export default )(.*)/g;
  const wrapper = `export default (async function () {
    const { Module } = await import('module');
    const module = new Module(import.meta.url);
    module.context = ${ inspect(context) };
    module.node = Module;
    const original = $2
    module.exports.default = function() {
      return original.apply(this, arguments);
    };
    // console.log(Module);
    return module;
  })();`;
  return source.replace(regexp, wrapper)
}

//------------------------------------------------------------------------------
// Hooks
//------------------------------------------------------------------------------

/**
 * @param {string|Buffer} source
 * @param {object} context
 * @param {function} defaultTransformSource
 * @return {(object)|(string|Buffer)} response or response.source
 */
export async function transformSource(source, context, defaultTransformSource) {
  if (typeof source === 'string') {
    // For some or all URLs, do some custom logic for modifying the source.
    // Always return an object of the form {source: <string|buffer>}.
    return {
      source: apmAnalytics(tranSpawn(source), context),
    };
  }
  // Defer to Node.js for all other sources.
  return defaultTransformSource(source, context, defaultTransformSource);
}
