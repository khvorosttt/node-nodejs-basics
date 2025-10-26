import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
  await pipeline(
    process.stdin,
    new Transform({
      transform(chunk, _, callback) {
        this.push(chunk.toString().split('').reverse().join('').slice(1) + '\n');
        callback();
      }
    }),
    process.stdout
  );
};

await transform();
