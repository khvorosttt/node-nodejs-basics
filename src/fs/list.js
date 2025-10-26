import { join } from 'path';
import {readdir} from 'node:fs/promises';
const list = async () => {
  const dirname = import.meta.dirname;
  const files = join(dirname,'files');
  const errMsg = 'FS operation failed';
  try{
    const filesArray = await readdir(files);
    for(const file of filesArray){
      console.log(file);
    }
  } catch(err) {
    throw new Error(errMsg);
  }
  
};

await list();
