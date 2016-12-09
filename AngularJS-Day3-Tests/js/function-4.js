

// calling here throws error
// testHello(); ^ TypeError: testHello is not a function

// testHello();

var testHello = function() {
    var i=10;
    console.log("Welcome"); 
    console.log(new Date());
}

// when creating the variable with var then it becomes function scope
// ReferenceError: i is not defined
 
console(i);

// calling after declaration
testHello();

