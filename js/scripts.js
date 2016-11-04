function Receipt(ingredients, pizzaSize) {
  this.ingredients = ingredients;
  this.pizzaSize = pizzaSize;
  //this.price = price;
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
    console.log(inputtedSize);
    console.log(inputtedIngredients);
    var pizzaOrder = new Receipt (inputtedSize, InputtedIngredients)
  });
});
