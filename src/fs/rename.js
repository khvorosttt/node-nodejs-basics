import { join } from 'path';
import fs, {access} from 'node:fs/promises';
const rename = async () => {
  const dirname = import.meta.dirname;
  const oldPath = join(dirname,'files', 'wrongFilename.txt');
  const newPath = join(dirname,'files', 'properFilename.md');
  const errMsg = 'FS operation failed';
  try{
      await access(newPath);
      throw new Error();
    } catch(err) {
      if (err.code !== 'ENOENT') throw new Error(errMsg);
    }
  try{
    await fs.rename(oldPath, newPath);
  } catch(err) {
    throw new Error(errMsg);
  }
};

await rename();
