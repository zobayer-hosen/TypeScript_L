console.log("Hello, World!");
function divide(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
console.log(divide(11, 12));
export {};
