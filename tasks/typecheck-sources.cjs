/**
 * @fileoverview Typecheck sample's sources w/ TypeScript & Closure compilers.
 * @author Derek Lewis <DerekNonGeneric@inf.is>
 * @license 0BSD
 * @module {CommonJs} tasks/typecheck-sources
 */

exports = (() => {
  const { basename, join, resolve } = require('path');
  const { cp } = require('shelljs');
  const jsSampleSrcs = ['alpha.mjs', 'beta.mjs', 'loader339.mjs'];
  const { spawn } = require('cross-spawn');
  const projectRoot = resolve('.');
  const tmpSrcDir = require('tempy').directory();

  const compilerOptions = {
    clFlags: [
      // Closure compiler CLI args.
      '--compilation_level=ADVANCED_OPTIMIZATIONS',
      '--warning_level=VERBOSE',
      '--checks_only',
      '--jscomp_error=strictCheckTypes', // Our main concern.
      '--jscomp_off=moduleLoad', // Closure won't resolve the builtins.
      '--jscomp_off=undefinedVars', // ESLint performs this check anyways.
      '--externs=externs/node.extern.js', // Annotated symbols w/o implemention.
      '--language_out=ECMASCRIPT_NEXT', // No emissions, yet required.
      '--module_resolution=node',
      '--process_common_js_modules',
    ],
    tsFlags: [
      // TypeScript compiler CLI args.
      '--allowJs',
      '--checkJs',
      '--noEmit',
      '--strict',
      '--module',
      'esnext',
      '--moduleResolution',
      'node',
      '--allowSyntheticDefaultImports',
    ],
    clSrcPathArgs: jsSampleSrcs.map((path) => {
      return '--js=' + path;
    }),
    tsSrcPathArgs: jsSampleSrcs.map((sourcePath) => {
      let sourceBaseName = basename(sourcePath);

      if (/\.mjs$/.test(sourceBaseName))
        sourceBaseName = sourceBaseName.replace('.mjs', '.js');

      const temporarySourcePath = resolve(tmpSrcDir, sourceBaseName);
      cp(join(projectRoot, sourcePath), temporarySourcePath);

      return temporarySourcePath;
    }),
  };

  spawn(
    'npx',
    ['tsc', ...compilerOptions.tsFlags, ...compilerOptions.tsSrcPathArgs],
    { stdio: 'inherit' }
  );
  spawn(
    'npx',
    [
      'google-closure-compiler',
      ...compilerOptions.clFlags,
      ...compilerOptions.clSrcPathArgs,
    ],
    { stdio: 'inherit' }
  );
})();
