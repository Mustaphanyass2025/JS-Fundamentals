const args = process.argv.slice(2); // get only the actual arguments

const firstArg = args[0];  // could be undefined
const secondArg = args[1]; // could be undefined

console.log(`${firstArg} is ${secondArg}`);