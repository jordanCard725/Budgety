/*-----------------------------------------*/
/*----- Budget Controller -----------------*/
/*-----------------------------------------*/

var budgetController = (function() {

  // some code

})();


/*-----------------------------------------*/
/*----- UI Controller ---------------------*/
/*-----------------------------------------*/
var UIController = (function() {

  // some code

})();


/*-----------------------------------------*/
/*----- Global App Controller -------------*/
/*-----------------------------------------*/
//this is the place where we tell the other controllers what to do.

var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

    // 1. Get the field input Data

    // 2. Add item to budget Controller

    // 3. Add the new item to UI

    // 4. Calculate the budget

    // 5. Display the budget on UI

  }

  // Event listener for when the button is clicked
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


  // Event listener for keypress event
  document.addEventListener('keypress', function(event) {
    // Enter key has a keyCode number of 13
    // event.which is used in older browsers
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

    
  });
})(budgetController, UIController);












