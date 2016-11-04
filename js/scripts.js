function Receipt(ingredient, pizzaSize) {
  this.ingredient = ingredient;
  this.pizzaSize = pizzaSize;
  this.price = 0
}

Receipt.prototype.priceCalculator = function () {
  debugger;
  this.price = 0;
  for (i = 0; i < this.ingredient.length; i++) {
    this.price += 1;
  }
  if (this.pizzaSize === "Small") {
    this.price += 8;
  }
   else if (this.pizzaSize === "Medium") {
     this.price += 10;
  }
  else if (this.pizzaSize === "Large") {
    this.price += 12;
  }
  else if (this.pizzaSize === "Extra Large") {
    this.price += 14;
  }
}

var vegIngredients = ['tomatoes', 'onions', 'mushrooms', 'olives', 'peppers', 'artichoke']
var vegAndMeatIngredients = ['chicken', 'sausage', 'pepperoni', 'tomatoes', 'onions', 'mushrooms', 'olives', 'peppers', 'artichoke']


$(document).ready(function(){
  $('form#preferenceForm').submit(function(event){
    event.preventDefault();
    var preference = $("input:radio[name=preference]:checked").val();
    if (preference === "yes") {
      vegIngredients.forEach(function(vegIngredient){
        $('.pizzaIngredients p').append('<input type=\"checkbox\" name=\"ingredients\" value=\"'+ vegIngredient + '\">' + vegIngredient +'<br>')
      });
    }
    else {
      vegAndMeatIngredients.forEach(function(vegAndMeatIngredient){
        $('.pizzaIngredients p').append('<input type=\"checkbox\" name=\"ingredients\" value=\"'+ vegAndMeatIngredient + '\">' + vegAndMeatIngredient +'<br>')
      });
      ('form#preferenceForm').hide()
    }
  });
  $('form#pizzaForm').submit(function(event){
    event.preventDefault();
    var inputtedIngredients = [];
    $("input:checkbox[name=ingredients]:checked").each(function(){
      var eachIngredient = $(this).val();
      inputtedIngredients.push(eachIngredient);
    });
    var inputtedSize =  $("#pizzaSizeOption").val();
    var pizzaOrder = new Receipt (inputtedIngredients, inputtedSize)
    pizzaOrder.price = pizzaOrder.priceCalculator(pizzaOrder);
  });
});
