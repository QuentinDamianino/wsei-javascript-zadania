function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function (num1, num2) {
    const sum = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + sum);
    return sum;
}

Calculator.prototype.multiply = function (num1, num2) {
    const sum = num1 * num2;
    this.history.push("multiplied " + num1 + " to " + num2 + " got " + sum);
    return sum;
}

Calculator.prototype.substract = function (num1, num2) {
    const sum = num1 + num2;
    this.history.push("substracted " + num1 + " to " + num2 + " got " + sum);
    return sum;
}

Calculator.prototype.divide = function (num1, num2) {
    const sum = num1 + num2;
    this.history.push("divided " + num1 + " to " + num2 + " got " + sum);
    return sum;
}

Calculator.prototype.printOperations = function() {
    console.table(this.history);
}

Calculator.prototype.clearOperations = function() {
    this.history = [];
}

calculator = new Calculator();

calculator.add(2,2)
calculator.multiply(2,2)
calculator.substract(2,2)
calculator.divide(2,2)
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();