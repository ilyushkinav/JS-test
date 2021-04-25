'use strict';




function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Inter number', 0);
  };
}

let acc = new Accumulator(1);

