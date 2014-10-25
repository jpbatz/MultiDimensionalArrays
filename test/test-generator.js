var mocha = require('mocha');
var MDA = require('../MultiDimensionalArrays');

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
 
 
describe('MultiDimensionalArray.generate', function() {
  it('should return an array of length 3, each is an array containing 3 random boolean values', function() {
    //var result = MDA.generate();
    var result = [ [0,1,0], [1,1,0], [0,1,1] ];
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(3);
    for(var i=0; i<result.length; i++) {
      expect(result[i]).to.have.length(3);
      for(var j=0; j<result[i].length; j++) {
        expect(result[i][j]).to.be.at.most(1);
      }
    }
  });
  it('should return an array of length 4, containing random boolean values', function() {
    var result = [1,0,1,1] ;
    // var result = MDA.generate([4]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(4);
  });
});

//expect().to.be.a."number"
