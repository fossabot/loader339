import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDirname = dirname(__dirname);
const projectRoot = parentDirname;

/** @type {string} */
export { projectRoot };
