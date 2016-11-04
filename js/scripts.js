function Receipt(preference, ingredients, pizzaSize, price) {
  this.ingredients = ingredients;
  this.pizzaSize = pizzaSize;
  this.price = price;
}

var vegIngredients = ['tomatoes', 'onions', 'mushrooms', 'olives', 'peppers', 'artichoke']
var vegAndMeatIngredients = ['chicken', 'sausage', 'pepperoni', 'tomatoes', 'onions', 'mushrooms', 'olives', 'peppers', 'artichoke']

$(document).ready(function(){
  $('form#preferenceForm').submit(function(event){
    event.preventDefault();
    var preference = $("input:radio[name=preference]:checked").val();
    if (preference === "yes") {
      vegIngredients.forEach(function(vegIngredient){
        $('.pizzaIngredients').append('<input type=\"checkbox\" name=\"ingredients\" value=\"'+ vegIngredient + '\">' + vegIngredient +'<br>')
      });
    }
    else {
      vegAndMeatIngredients.forEach(function(vegAndMeatIngredient){
        $('.pizzaIngredients').append('<input type=\"checkbox\" name=\"ingredients\" value=\"'+ vegAndMeatIngredient + '\">' + vegAndMeatIngredient +'<br>')
      });
    }

  });
});
