// if default, no bracket; otherwise, bracket;
import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';
// if importing everything
// import * as multiplyModule from './multiply';

const a = 5;
const b = 8;
console.log(`${a} * ${b} = ${multiply(a,b)}`); // multiplyModule.multiply(a,b)
console.log(mBy2(a));