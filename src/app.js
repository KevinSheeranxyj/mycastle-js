import addTwo from './addTwo.js';


import EventEmitter from 'node:events';
const eventEmitter = new EventEmitter();

eventEmitter.on('error', (error) => {
    console.log(error);
});

eventEmitter.emit('error', new Error('Something went wrong'));


export default function helloWorld() {
    console.log('Hello World');
}

console.log(import.meta);

console.log(import.meta.resolve('./addTwo.js'));

console.log(eventEmitter);

import packageConfig from './package.json' with { type: 'json' };
console.log(packageConfig);

// console.log(import.meta.dirname);
// console.log(import.meta.filename);
// console.log(import.meta.path);
// console.log(import.meta.url);
// console.log(import.meta.main);