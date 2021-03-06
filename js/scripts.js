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
  if (this.pizzaSize === "12") {
    this.price += 8;
  }
   else if (this.pizzaSize === "15") {
     this.price += 10;
  }
  else if (this.pizzaSize === "17") {
    this.price += 13;
  }
  else if (this.pizzaSize === "22") {
    this.price += 17;
  }
  return this.price;
}
Receipt.prototype.ingredientBreaker = function () {
  if (this.ingredients.length === 1) {
    this.ingredients = this.ingredients.join();
    return this.ingredients;
  }
   else if (this.ingredients.length >= 2) {
     //this.ingredients = this.ingredients.splice(this.ingredients.length-1,0,"and");
     this.ingredients = this.ingredients.join(", ");
     return this.ingredients;
   }
}

var vegIngredients = ['Tomatoes', 'Onions', 'Mushrooms', 'Olives', 'Peppers', 'Artichokes']
var vegAndMeatIngredients = ['Chicken', 'Sausage', 'Pepperoni', 'Tomatoes', 'Onions', 'Mushrooms', 'Olives', 'Peppers', 'Artichokes']


$(document).ready(function(){
  $('form#preferenceForm').submit(function(event){
    event.preventDefault();
    var preference = $("input:radio[name=preference]:checked").val();
    if (preference === "yes") {
      vegIngredients.forEach(function(vegIngredient){
        $('.pizzaIngredients p').append('<input type=\"checkbox\" name=\"ingredients\" value=\"'+ vegIngredient + '\">' +" " + vegIngredient +'<br>')
        $('form#preferenceForm').hide();
        $('form#pizzaForm').show();
      });
    }
    else if (preference === "no") {
      vegAndMeatIngredients.forEach(function(vegAndMeatIngredient){
        $('.pizzaIngredients p').append('<input type=\"checkbox\" name=\"ingredients\" value=\"'+ vegAndMeatIngredient + '\">' +" " + vegAndMeatIngredient +'<br>')
        $('form#preferenceForm').hide();
        $('form#pizzaForm').show();
      });
    }
    else {
      alert("Please select an option")
    }
  });
  $('form#pizzaForm').submit(function(event){
    event.preventDefault();
    $('.confirmation').show();
    var inputtedIngredients = [];
    $('input:checkbox[name=ingredients]:checked').each(function(){
      var eachIngredient = $(this).val();
      eachIngredient = eachIngredient.toUpperCase();
      inputtedIngredients.push(eachIngredient);
    });
    var inputtedSize =  $("#pizzaSizeOption").val()
    if (inputtedSize ==="choose") {
      alert("Please enter a pizza size")
        $('.confirmation').hide();
    }

    var pizzaOrder = new Receipt (inputtedIngredients, inputtedSize)
    pizzaOrder.price = pizzaOrder.priceCalculator(pizzaOrder);
    $('.userSize').text("");
    $('.userSize').append('&#960;' + pizzaOrder.pizzaSize + 'cm&sup2;');
    $('.userIngredients').text(pizzaOrder.ingredientBreaker());
    $('.pizzaPrice').text(pizzaOrder.price);
  });
});
