import { join } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
const calculateHash = async () => {
  const filePath=join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  await pipeline(
    createReadStream(filePath),
    new Transform({
      transform(chunk, _, callback) {
        hash.update(chunk.toString());
        callback();
      },
      flush(callback){
        this.push(hash.digest('hex'));
        callback();
      }
    }),
    process.stdout
  );
};

await calculateHash();
