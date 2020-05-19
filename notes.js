/*
TO - DO
1. Event handler for button
2. Get input values
3. Add the new item to out data structure
4. add the new item to UI
5. Calculate budget
6. Update the UI

UI Modules
- get input values
- add new item to the UI
- update the UI

Controller Module
- add event handler

Data Module
- add new item to data structure
- calculate budget

STURCTURE
modules :
  - important aspect of any robust applications architecture.
  - keep the units of code for a project both cleanly separated and organized.
  - incapsulate some data into privacy and expose other data publicly.
  - allow us to break up our code into logical parts and then make them interact with one another.
  - each will have variables and functions that are available only within each module.

Data Encapsulation - allows us to hide implementation details of a module from the outside scope.
*/
////// MODULE PATTERN ////////////////////
// creates a new scope.
// variable and function are safe in here and cant be accessed from outside
// b/c of closures, an inner function alwasy has access to the variables and parameters of its outer function even after the outer has returned.

// IFFE : invoked immediately :
var budgetController = (function () {

    // Included in the closure but private :
    var x = 23;  // private var

    var add = function (a) {  //private funct
      return x + a;
    }

    // This is the function that is returned :
    return {
      publicTest: function(b) {  // public funct
        return add(b);
      }
    }
})();

// Separation of concerns : each part of the app should only be concerned with doing their own thing independently.

// UI Controller :

var UIController = (function () {

  //some code

})();

// Controller module :

var controller = (function (budgetCtrl, UICtrl) {

  var z = budgetCtrl.publicTest(5);

  return  {
    anotherPublic: function () {
      console.log(z);
    }
  }

})(budgetController, UIController);





















