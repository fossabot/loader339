import addself from './beta.mjs';
import { spawn } from 'child_process';

spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
console.log(addself(100));
