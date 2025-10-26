import { join } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
  const filePath=join(import.meta.dirname, 'files', 'fileToRead.txt');
  await pipeline(createReadStream(filePath), process.stdout);
};

await read();