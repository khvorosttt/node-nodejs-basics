import os from 'os';
import { join } from 'path';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const CPUCoresLength = os.cpus().length;
  const workers = [];
  const dirname = import.meta.dirname;
  const workerPath = join(dirname, 'worker.js')
  for(let i=0; i<CPUCoresLength;i++){
    workers.push(new Worker(workerPath, {
      workerData: 10 + i
    }));
  }
  const result = await Promise.all(
    workers.map((worker) => new Promise((resolve) => {
      worker.on('message', (msg) => {
        resolve({ status: 'resolved', data: msg });
      });
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
    }))
  );
  console.log(result);
};

await performCalculations();
