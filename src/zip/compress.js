import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const compress = async () => {
  const dirname = import.meta.dirname;
  const fileFromPath=join(dirname, 'files', 'fileToCompress.txt');
  const fileToPath=join(dirname, 'files', 'archive.gz');
  const rs = createReadStream(fileFromPath);
  const ws = createWriteStream(fileToPath);
  try {
    await pipeline(rs, createGzip(), ws);
  } catch(err) {
    console.log(err.message);
  }
};

await compress();