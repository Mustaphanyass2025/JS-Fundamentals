// 8-square.js

const args = process.argv.slice(2);       // get command-line arguments
const size = parseInt(args[0], 10);       // convert first argument to integer

if (isNaN(size) || size <= 0) {
    if (isNaN(size)) console.log("Missing size"); // only print for invalid numbers
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size)); // prints a row of X's
    }
}
