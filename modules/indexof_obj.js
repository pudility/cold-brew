Array.prototype.findIndex = function(id, search) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][id] === search) {
      return i;
    };
  }
}
