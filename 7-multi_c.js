// 7-multi_c.js

const args = process.argv.slice(2);  // get command-line arguments
const x = parseInt(args[0], 10);     // convert first argument to integer

if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
