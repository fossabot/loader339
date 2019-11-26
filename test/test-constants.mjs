import tap from 'tap';
import { projectRoot } from 'lorem/constants';

const root = '/'

tap.test(t => {
  t.ok(process.versions.node.match('13.2.0'), 'Node version must be 13.2.0.');
  t.ok(projectRoot.includes('lorem-demo'), 'path should include lorem-demo');
  t.ok(!projectRoot.includes('lib'), 'it should not include lib');
  t.done();
});
