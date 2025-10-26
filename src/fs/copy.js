import { join } from 'path';
import { cp, access } from 'node:fs/promises';

const copy = async () => {
  const dirname = import.meta.dirname;
  const files = join(dirname, 'files');
  const copyFiles = join(dirname, 'files_copy');
  const errMsg = 'FS operation failed';
  try{
    await access(copyFiles);
    throw new Error();
  } catch(err) {
    if (err.code !== 'ENOENT') throw new Error(errMsg);
    try {
      await cp(files, copyFiles, {recursive: true});
    } catch(_) {
      throw new Error(errMsg);
    }
  }
};

await copy();
