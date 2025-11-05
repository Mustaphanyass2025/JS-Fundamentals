// 5-to_integer.js

const args = process.argv.slice(2); // get command-line arguments
const firstArg = args[0];           // first argument (could be undefined)

const number = parseInt(firstArg, 10); // convert to integer

if (isNaN(number)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${number}`);
}
