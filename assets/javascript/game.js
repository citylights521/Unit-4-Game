//JavaScript

// global variables
var ordersNeeded;
var ordersFulfilled;
var buttonBurgerValue;
var buttonMilkshakeValue;
var buttonFriesValue;
var buttonCokeValue;
var winValue = 0;
var loseValue = 0;


//random orders needed number
$(document).ready(function () {
  newGame();
 
});



function newGame() {
  ordersNeeded = getRandomArbitrary(19, 120);
  $("#orderNumberGenerator").text(ordersNeeded);

  ordersFulfilled = 0;
  buttonBurgerValue = getRandomArbitrary(1, 12);
  buttonMilkshakeValue = getRandomArbitrary(1, 12);
  buttonFriesValue = getRandomArbitrary(1, 12);
  buttonCokeValue = getRandomArbitrary(1, 12);

  printOrdersFulfilled();
  printScoreboard();

  console.log("Burger Value: ", buttonBurgerValue);
  console.log("Milkshake Value: ", buttonMilkshakeValue);
  console.log(buttonFriesValue);
  console.log(buttonCokeValue);
}



//on-click food items value 
$("#burgerButton").on("click", function () {
  ordersFulfilled = buttonBurgerValue + ordersFulfilled;
  printOrdersFulfilled();
  checkOrders();
});

$("#milkshakeButton").on("click", function () {
  ordersFulfilled = buttonMilkshakeValue + ordersFulfilled;
  printOrdersFulfilled();
  checkOrders();
 
});

$("#friesButton").on("click", function () {
  ordersFulfilled = buttonFriesValue + ordersFulfilled;
  printOrdersFulfilled();
  checkOrders();

});

$("#cokeButton").on("click", function () {
  ordersFulfilled = buttonCokeValue + ordersFulfilled;
  printOrdersFulfilled();
  checkOrders();
});


//display running food items value in orders fulfilled
function printOrdersFulfilled() {
  $("#ordersFilled").text(ordersFulfilled);
}

function checkOrders() {
  if (ordersFulfilled === ordersNeeded) {
    winValue++;
    var msg = $("#message");
    msg.text("Order up!");
    msg.css("color", "green");
    $("#winSound")[0].play();
    newGame();
  } 
  
  if (ordersFulfilled > ordersNeeded) {
    loseValue++;
    var msg = $("#message");
    msg.text("Fire in the kitchen!");
    msg.css("color", "red");
    $("#loseSound")[0].play();
    newGame();
  }
}

//diplay wins, losses, and message
function printScoreboard() {
  $("#wins").text(winValue);
  $("#losses").text(loseValue);
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
