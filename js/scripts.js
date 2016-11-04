function Receipt(ingredients, pizzaSize) {
  this.ingredients = ingredients;
  this.pizzaSize = pizzaSize;
  this.price = 0;
}

Receipt.prototype.priceCalculator = function () {
  this.price = 0;
  for (i = 0; i < this.ingredients.length; i++) {
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
  return this.price
}
Receipt.prototype.ingredientBreaker = function () {
  debugger;
  if (this.ingredients.length === 1) {
    this.ingredients = this.ingredients.join();
    return this.ingredients
  }
   else if (this.ingredients.length >= 2) {
     debugger;
     this.ingredients = this.ingredients.splice(this.ingredients.length,0,"and")
     this.ingredients = this.ingredients.join(", ")
     return this.ingredients
   }
}

var vegIngredients = ['tomatoes', 'onions', 'mushrooms', 'olives', 'peppers', 'artichoke']
var vegAndMeatIngredients = ['chicken', 'sausage', 'pepperoni', 'tomatoes', 'onions', 'mushrooms', 'olives', 'peppers', 'artichoke']


$(document).ready(function(){
  $('form#preferenceForm').submit(function(event){
    event.preventDefault();
    $('form#preferenceForm').hide();
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
    }
    $('form#pizzaForm').show();
  });
  $('form#pizzaForm').submit(function(event){
    event.preventDefault();
    var inputtedIngredients = [];
    $("input:checkbox[name=ingredients]:checked").each(function(){
      var eachIngredient = $(this).val();
      //eachIngredient = eachIngredient.toUpperCase()
      inputtedIngredients.push(eachIngredient);
    });
    var inputtedSize =  $("#pizzaSizeOption").val();
    var pizzaOrder = new Receipt (inputtedIngredients, inputtedSize)
    pizzaOrder.price = pizzaOrder.priceCalculator(pizzaOrder);
    $('form#pizzaForm').hide();
    $('.userSize').text(pizzaOrder.pizzaSize);
    $('.userIngredients').text(pizzaOrder.ingredientBreaker());
    $('.pizzaPrice').text(pizzaOrder.price);
    $('.confirmation').show();
  });
});
