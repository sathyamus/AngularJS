

// calling here throws error
// testHello(); ^ TypeError: testHello is not a function

// testHello();

var testHello = function() {
    console.log("Welcome"); 
    console.log(new Date());
}

// calling after declaration
testHello();

