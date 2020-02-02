function Calculator() {
    this.historyOperations = [];
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    const log = `added ${num1} to ${num2} got ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    const result = num1 * num2;
    const log = `multiplied ${num1} with ${num2} got ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.substract = function(num1, num2) {
    const result = num1 - num2;
    const log = `substracted ${num1} from ${num2} got ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    if(num2 === 0) {
        this.historyOperations.push('tried to divide by zero');
        return;
    }  
    const result = num1 / num2;
    const log = `divided ${num1} by ${num2} got ${result}`;
    this.historyOperations.push(log);
    return result;
}

Calculator.prototype.printOperations = function() {
    this.historyOperations.forEach(el => console.log(el));
}

Calculator.prototype.clearOperations = function() {
    this.historyOperations = [];
    this.historyOperations.length = 0;
}

const calc = new Calculator();
calc.add(4,2);
calc.multiply(5,10);
calc.substract(122,21);
calc.divide(10,0);
calc.divide(10,5);
calc.printOperations();
calc.clearOperations();