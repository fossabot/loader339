const tap = require('tap');
const semver = require('semver');
const pjson = require('../package.json');

 // Accommodate for labels and build metadata appearing as SemVer extensions.
 const NODE_VERSION = process.version.split('-')[0];

tap.test(t => {
    t.ok(semver.satisfies(NODE_VERSION, pjson.engines.node), 'Node version must be correct.');
    t.done();
});
