var {expect} = require('chai');
var {Poter} = require('../src/poter.js');

describe("Poter Kata", function() {
  context('#compute_price', () => {
    context('With 1 item in the cart', () =>{
      it("returns 8", function() {
        const poter = new Poter([1]);
        const price = poter.compute_price();

        expect(price).to.equal(8);
      });
    });

    context('With 2 same item in the cart', () =>{
      it("return 16", function() {
        const poter = new Poter([1, 1]);
        const price = poter.compute_price();

        expect(price).to.equal(16);
      });
    });

    context('With 2 differents item in the cart', () =>{
      it("return 15.2", function() {
        const poter = new Poter([1, 2]);
        const price = poter.compute_price();

        expect(price).to.equal(15.2);
      });
    });


    context('With 3 differents item in the cart', () =>{
      it("return 21.6", function() {
        const poter = new Poter([1, 2, 3]);
        const price = poter.compute_price();

        expect(price).to.equal(21.6);
      });
    });

    context('With 4 differents item in the cart', () =>{
      it("return 25.6", function() {
        const poter = new Poter([1, 2, 3, 4]);
        const price = poter.compute_price();

        expect(price).to.equal(25.6);
      });
    });

    context('With 5 differents item in the cart', () =>{
      it("return 30", function() {
        const poter = new Poter([1, 2, 3, 4, 5]);
        const price = poter.compute_price();

        expect(price).to.equal(30);
      });
    });

    context('With 2 diferrent series in the cart', () =>{
      it("return 36.8", function() {
        const poter = new Poter([1, 2, 3, 1, 2]);
        const price = poter.compute_price();

        expect(price).to.equal(36.8);
      });
    });




  });
});
