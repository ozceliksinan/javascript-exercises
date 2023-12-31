// 1-) Global variable naming conflicts
// script.js
// var name = 'Sinan2';

// // app.js
// var name = 'Sinan';
// console.log(name);

// 2-) Encapsulation

// var Counter = {
//     number :0,
//     increment : function(){
//         return ++this.number;
//     },
//     decrement: function(){
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());

// IIFE (Immediately Invoked Function Expressions)

// script.js
// (function(){
//   var name = 'Sinan2';
//   console.log(name);
// })();

// // app.js
// (function(){
//     var name = 'Sinan';
//     console.log(name);
//   })();

// var Module = (function(){

//     // private members
//     let number = 0;

//     let increment = function() {
//         return ++number;
//     }

//     let decrement = function() {
//         return --number;
//     }

//     return {
//         // public members
//         increment,
//         decrement
//     }

// })();

// // console.log(number);
// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());

var Module = (function () {
  var privateMethod = function () {};

  return {
    publicMethod: function () {},
  };
})();

Module.publicMethod();
