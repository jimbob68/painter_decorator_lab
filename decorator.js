const Decorator = function(){
  this.stock = []
}

Decorator.prototype.totalLitres = function(){
  let total = 0;

  for (const paint of this.stock){
  total += paint.volume;

  }
  return total;
}





module.exports = Decorator
