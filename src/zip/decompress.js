import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const dirname = import.meta.dirname;
  const fileFromPath=join(dirname, 'files', 'archive.gz');
  const fileToPath=join(dirname, 'files', 'fileToCompress.txt');
  const rs = createReadStream(fileFromPath);
  const ws = createWriteStream(fileToPath);
  try{
    await pipeline(rs, createGunzip(), ws);
  } catch(err){
    console.log(err.message);
  }
};

await decompress();
