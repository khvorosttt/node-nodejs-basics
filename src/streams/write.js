import { join } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
  const filePath=join(import.meta.dirname, 'files', 'fileToWrite.txt');
  console.log('Press Ctrl+C to end');
  await pipeline(process.stdin, createWriteStream(filePath));
};

await write();
