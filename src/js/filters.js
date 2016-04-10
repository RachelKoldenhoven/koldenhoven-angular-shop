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