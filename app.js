// Node.js Event Loop Example
// Demonstrates:
// 1. Synchronous code
// 2. process.nextTick()
// 3. Promise
// 4. setTimeout()
// 5. setImmediate()

console.log("1. Synchronous Start");

setTimeout(() => {
    console.log("4. setTimeout");
}, 0);

setImmediate(() => {
    console.log("5. setImmediate");
});

Promise.resolve().then(() => {
    console.log("3. Promise");
});

process.nextTick(() => {
    console.log("2. process.nextTick");
});

console.log("1. Synchronous End");