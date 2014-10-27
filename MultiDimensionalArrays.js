// SET UP AS A NODE MODULE ???
module.exports = {

  generate: function() {

    //console.log(arguments.length);

    var result = [];
    //var noArgs = false;

    // 3 special cases:
    if(arguments.length === 0) { // unspecified argument, assume 3x3
        // call general case function
        //noArgs = true;
        for(var x=0; x<3; x++) {
          result.push([]);
          for(var y=0; y<3; y++) {
            result[x].push(this.randomBinary());
          }
        }
        //result = buildLevels();
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
            //this.stuffArray(arguments[0]);
          }
        }
    } else { // general case, more than 2 arguments
        result = this.buildLevels();
    }
  
    return result; // return created array
  },



  count: function() {
    //return count result;
  },


//generate(3,3);

// random binary number generator produces 0 or 1
  randomBinary : function() {
    return Math.floor(Math.random() * 2);
  },

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

  // take stuffedArray, and builds specified remaining levels 
  buildLevels : function() {
      var finalArray;
      var level = arguments.length - 2;
      // while(level) {
      //   // buildLevel()

      //   for(var i =0; i<=level; i++) {
      //     finalArray = this.stuffArray();
      //     finalArray[i].push(finalArray);
      //   }

      //   level--;
      // }
      //console.log(finalArray);
    return finalArray;
  }

};


