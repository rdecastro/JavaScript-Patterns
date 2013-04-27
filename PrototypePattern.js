// Prototype Pattern
// Usage: 
// 
// var theInstance = new PrototypePattern();
// theInstance.publicMethodA();

var PrototypePattern = function () {

    this.publicVariableA = 'A value';
    this.publicVariableB = 'B value';

};

PrototypePattern.prototype = {

    publicMethodA: function () {
        var privateVariableA = 'hello world!';
        return privateVariableA;
    }

  , publicMethodB: function (paramB) {
        this.publicVariableB = paramB;
        return this.publicVariableB;
    }

  , publicMethodC: function (paramC, paramD) {
        console.log(paramC);
        return paramD;
  }

}