import { join } from 'path';
import { rm } from 'node:fs/promises';
const remove = async () => {
  const dirname = import.meta.dirname;
  const deletePath = join(dirname,'files', 'fileToRemove.txt');
  const errMsg = 'FS operation failed';
  try{
    await rm(deletePath);
  } catch(err) {
    throw new Error(errMsg);
  }
};

await remove();
