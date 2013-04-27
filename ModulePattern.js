// Module Pattern
//
// Usage: 
// 
// var theInstance = new ModulePattern();
// theInstance.publicMethodA();

var ModulePattern = function () {

        // Private Properties
    var privateVariableA = 'A'
      , privateVariableB = 'B'

        // Private Methods
      , privateMethodA = function () {
          return 'Method A';

      };

    return {

        // Public Properties
        publicVariableA: privateVariableA

        // Public Methods
      , publicMethodA: privateMethodA

        // Key : Value Mapping
        // Key - public method/property name you want to expose
        // Value - private method/property you want to use. 
        // Note: Key and Value can be the same name

    };
};