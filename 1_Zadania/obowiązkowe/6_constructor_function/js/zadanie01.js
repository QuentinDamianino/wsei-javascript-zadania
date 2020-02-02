function Robot (name) {
    this.name = name;
    this.isFunctional = false;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

const robot1 = new Robot('Pan Paweł');
robot1.sayHi('Dawaj Maniek to już się kamieruje');
robot1.changeName('Jumper');
robot1.fixIt();