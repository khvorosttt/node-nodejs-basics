import { join } from 'path';
import { open, access } from 'node:fs/promises';

const create = async () => {
  const dirname = import.meta.dirname;
  const filePath = join(dirname,'files', 'fresh.txt');
  const msg = 'I am fresh and young';
  const errMsg = 'FS operation failed';
  try{
    await access(filePath);
    throw new Error();
  } catch(err) {
    if (err.code !== 'ENOENT') throw new Error(errMsg);
  }
  const file = await open(filePath, 'w');
  await file.write(msg);
  await file?.close();
   
};

await create();
