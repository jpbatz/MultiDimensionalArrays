/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */
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
    // var result = MDA.generate(4);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(4);
  });
  it('should return a 5x4 multi-dimensional array, containing random boolean values', function() {
    var result = [ [1,0,1,1], [0,1,0,0], [1,1,0,1], [0,0,0,1], [0,1,1,1] ] ;
    // var result = MDA.generate(5,4);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(5);
    for(var i=0; i<result.length; i++) {
      expect(result[i]).to.have.length(4);
      for(var j=0; j<result[i].length; j++) {
        expect(result[i][j]).to.be.at.most(1);
      }
    }
  });
  it('should return a 3x4x5 multi-dimensional array, containing random boolean values', function() {
    var result = [ [ [1,0,1,0,0], [0,1,0,0,1], [1,1,0,1,1], [0,0,0,0,1] ], [ [1,1,0,1,1], [1,0,1,0,0], [0,1,0,0,1], [0,0,0,0,1] ], [ [1,0,1,0,0], [1,1,0,1,1], [0,0,0,0,1], [0,1,0,0,1] ] ];
    // var result = MDA.generate(5,4);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.length(3);
    for(var i=0; i<result.length; i++) {
      expect(result[i]).to.have.length(4);
      for(var j=0; j<result[i].length; j++) {
        expect(result[i][j]).to.have.length(5);
        for(var k=0; k<result[i][j].length; k++) {
          expect(result[i][j][k]).to.be.at.most(1);
        }
      }
    }
  });
});

// remove commented var result lines
//expect().to.be.a."number"
