const Paint = function(volume) {
this.volume = volume;
};

Paint.prototype.reducePaint = function(){
  this.volume = 0;
};



module.exports = Paint
