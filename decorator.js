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
Decorator.prototype.enoughForRoom = function(){
  let total = 10;

  for(const volume of this.stock){
    total === paint.volume;
  }
  return true
}

Decorator.prototype.canPaintRoom = function(){
  let total = 10;
  for(const volume of this.stock){
    total === paint.volume;
  }
  return true
}

Decorator.prototype.reducingPaint = function(){
  let total = 10;
  for (const volume of this.stock){
    total -=  paint.volume;
  }
  return total
}





module.exports = Decorator
