// SET UP AS A NODE MODULE ???
module.exports = {

  generate: function() {

    //console.log(arguments.length);

    var result = [];

    // 3 special cases:
    if(arguments.length === 0) { // unspecified argument, assume 3x3
        for(var x=0; x<3; x++) {
          result.push([]);
          for(var y=0; y<3; y++) {
            result[x].push(this.randomBinary());
          }
        }
        return result;

    } else if(arguments.length === 1) { // one dimensional array
        for(var i=0; i<arguments[0]; i++) {
          result = this.stuffArray(arguments[0]);
        }

    } else if(arguments.length === 2) { // two dimensional array
        for(var j=0; j<arguments[0]; j++) {
          result.push([]);
          for(var k=0; k<arguments[1]; k++) {
            result[j][k] = this.randomBinary();
          }
        }

    } else { // more than 2 arguments

        var finalLevel = arguments.length - 1;
        var currLevel = arguments[0];
        var nextLevel = currLevel - 1;

        var createMDA = function() {
          for(var currLevel=0; currLevel<arguments.length; currLevel++, nextLevel++) {

            if(nextLevel !== finalLevel) {
              // create arrays in current according to amount specified in next level
              createMDA(result);
              result.push([]);
            } else { // need to populate final level(s)
              // currLevel[i].push(this.randomBinary());
              result.push(this.randomBinary());
            } 
          }
        };
  
    }
  

    return result; // return created array 
  },



  count: function(mda, boolValue) {

    var boolCount = 0;
    // can we re-do as counter and not deepCounter?
    function deepCounter(arr) {
      for(var i=0; i<arr.length; i++) {
        if(arr[i] instanceof Array) {   // element is an array
          // console.log("is an array");
          deepCounter(arr[i]);
        } else {                        // element is a number
            // console.log("is a number");
            if (arr[i] === Number(boolValue)) {
            boolCount++; // element is a number
            // console.log("bool count = " + boolCount);
          }
        }
      }
      return boolCount;
    }
  return deepCounter(mda);
  },

// utility functions:

// random binary number generator produces 0 or 1
  randomBinary : function() {
    return Math.floor(Math.random() * 2);
  },

  // can we remove this function?
  // returns an array populated with random binary values, as specified by numElements
  stuffArray :function() { 
    var stuffedArray = [];
    if(arguments.length >= 1) {
      numElements = arguments[arguments.length - 1];
      for(var i=0; i<numElements; i++) {
        stuffedArray.push(this.randomBinary());
      }
    }
    return stuffedArray;
  },

};


