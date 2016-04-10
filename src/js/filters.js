/**
 * Created by rachelkoldenhoven on 4/9/16.
 */
app.filter('byCategory', function() {
  return function(products, category) {
    var res = products.filter(function isValid(product) {
        if(category === 'all categories') {
          return true;
        }
        return product.categories.indexOf(category) !== -1;
    });
    return res;
  };
});

app.filter('isInStock', function() {
    return function(boolean) {
      if(boolean) {
        return "yes";
      }  else {
        return "no";
      }
    }
});

app.filter('cartCount', function() {
     return function (cart) {
       return cart.reduce(function(previousCount, cartItem) {
         return previousCount + cartItem.quantity;
       }, 0);
     }
});

app.filter('totalPrice', function() {
     return function (cart) {
       var totalPrice = cart.map(function(cartItem) {
          return cartItem.price * cartItem.quantity * 0.01;
       }).reduce(function (prev, curr) {
            return prev + curr;
       });
       return totalPrice;
     }
});