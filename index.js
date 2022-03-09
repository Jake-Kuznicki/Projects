doSomethingElse = require('./doSomethingElse.js')

var a = null;

function index(){

console.log("Inside index function")

var ff = {
    log: () => {
        console.log("Inside A function")
    }
}
a = ff;

var b = doSomething();

console.log("before returning from index function")
return "Done"

}

function doSomething(){
    console.log("Inside doSomething function")
    doSomethingElse();
    a.log();
    return
}

index();