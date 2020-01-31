/**
 * @fileoverview Loader339
 *
 * * Monkey patch a module at import time.
 * * Have more than one active APM/transformer within a single app.
 *
 * Reqs: node v13.7.0
 * Flags: --experimental-loader
 *
 * node --experimental-loader=./loader339.mjs ./alpha.mjs
 *
 * @author Derek Lewis <DerekNonGeneric@inf.is>
 * @license 0BSD
 * @module {module} loader339
 */

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

function apmMemUse(source) {
  // Monkey patch `export default ...` w/ IIFE wrapper [IIFExport].
  const regexp = /(export default )(.*)/g;
  const wrapper = `export default (() => {
    import('os').then((module) => {
      import.meta.freemem = module.freemem();
      import.meta.totalmem = module.totalmem();
      console.table(import.meta);
    });
    return $2
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
      source: apmMemUse(tranSpawn(source)),
    };
  }
  // Defer to Node.js for all other sources.
  return defaultTransformSource(source, context, defaultTransformSource);
}
