import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pjson = require('../package.json');
const semver = require('semver');
const tap = require('tap');

// Accommodate for labels and build metadata appearing as SemVer extensions.
const NODE_VERSION = process.version.split('-')[0];

tap.test((t) => {
  t.ok(
    semver.satisfies(NODE_VERSION, pjson.engines.node),
    `current \`node\`, ${NODE_VERSION}, should satisfy ${pjson.engines.node}`
  );
  t.done();
});
