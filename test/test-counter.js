/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */

// var mocha = require('mocha');
// var MDA = require('../MultiDimensionalArrays');

// var chai = require('chai');
// var expect = chai.expect;
// var should = chai.should();

// describe('MultiDimensionalArray.count', function() {
//   it('calling MDA with 2 arguments: an array and a boolean value', function() {
//     var sample_array = [1,0,0,1,0,0,0,0,1];
//     var result = MDA.count(sample_array, true);
//     //expect(result).to.be.instanceof(Array);
//     expect(result).to.be.a('number');
//     result.should.equal(3);
//   });
//   it('calling MDA with 2 arguments: an array and a boolean value', function() {
//     var sample_array = [[1,0],[0,1],[0,0],[0,0]];
//     var result = MDA.count(sample_array, false);
//     //expect(result).to.be.instanceof(Array);
//     expect(result).to.be.a('number');
//     result.should.equal(6);
//   });
//   it('calling MDA with 2 arguments: an array and a string value (color)', function() {
//     var sample_array =  
//   [  
//     [  
//       ["red","green","blue"],  
//       ["red","green","blue"],  
//       ["red","green","blue"],  
//     ],  
//     [  
//       ["red","green","red"],  
//       ["red","green","red"],  
//       ["red","green","red"],  
//     ],  
//     [  
//       ["red","red","blue"],  
//       ["red","red","blue"],  
//       ["red","red","blue"],  
//     ],  
//   ];
//     var result = MDA.count(sample_array, "red");
//     //expect(result).to.be.instanceof(Array);
//     expect(result).to.be.a('number');
//     result.should.equal(15);
//   });
// });