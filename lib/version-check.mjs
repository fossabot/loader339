import { createRequire } from 'module';
import { dirname as pathDirname, resolve as resolvePath } from 'path';
import { fileURLToPath as pathFromFileUrl } from 'url';
import { projectRoot } from 'loader339/constants';

const __filename = pathFromFileUrl(import.meta.url);
const __dirname = pathDirname(__filename);
const require = createRequire(__dirname);

const newlineMarker = require('os').EOL;
const requiredVersion = require(projectRoot + '/package.json').engines.node;
const semver = require('semver'); // SemVer supports Node.js versions >= 0.10.

// Accommodate for labels and build metadata appearing as SemVer extensions.
const NODE_VERSION = process.version.split('-')[0];

//------------------------------------------------------------------------------
// Version Check
//------------------------------------------------------------------------------

export default (() => {
  // Warn if the user's Node version is too low.
  if (!semver.satisfies(NODE_VERSION, requiredVersion)) {
    // Strip version range characters leaving raw semantic version for output.
    const rawRequiredVersion = requiredVersion.replace(/[^\d.]*/, '');
    const message = [
      'Loader339 requires Node.js version %s or higher!',
      'The device is currently running Node version %s.',
    ].join(newlineMarker);

    console.error(message, rawRequiredVersion, semver.clean(NODE_VERSION));
  }
})();
