import { join } from 'path';
import {readFile, access} from 'node:fs/promises';
const read = async () => {
  const dirname = import.meta.dirname;
  const filePath = join(dirname,'files', 'fileToRead.txt');
  const errMsg = 'FS operation failed'
  try{
    await access(filePath);
  } catch(err) {
    throw new Error(errMsg);
  }
  const content = await readFile(filePath, { encoding: 'utf8' });
  console.log(content);
};

await read();
