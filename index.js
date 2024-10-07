function receivesAFunction(callback) {
    callback();
}
function sayHello() {
    console.log("Hello, mate!")
}

receivesAFunction(sayHello);

function returnsANamedFunction() {
    return function namedFunction () {
        console.log("Named Function")
    }

}

returnsANamedFunction()();

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Anonymmous Function")
    }

}

returnsAnAnonymousFunction()();