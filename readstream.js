import { createReadStream } from 'node:fs';

const stream = createReadStream('plrabn12.txt', {
  encoding: 'utf8',
  highWaterMark: 100,
});

const symbolCounter = {}; 

stream.on('data', (chunk) => {
  const str = chunk.toString();

  for (let i = 0; i < str.length; i++) {
    if (symbolCounter[str[i]]) {
      symbolCounter[str[i]]++;
    } else {
      symbolCounter[str[i]] = 1;
    }
  }
});

stream.on('end', () => {
  console.table(symbolCounter);
});



// Object.entries
