import { join } from 'path';
import { fork } from 'child_process';
const spawnChildProcess = async (args) => {
  const dirname = import.meta.dirname;
  const filePath = join(dirname, 'files', 'script.js');
  const cp = fork(filePath, args, { silent: true });
  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
};

// Put your arguments in function call to test this functionality
//spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess( [1, 2, 3]);
