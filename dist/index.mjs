import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Log } = require('../dist/index.cjs');
export { Log };
