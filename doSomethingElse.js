




function doSomethingElse()
{
    console.log('Inside doSomethingElse function');
    //This does NOT work. Javascript functions cannot call globals defined in another file...
    //a.log();
    return
}


module.exports = doSomethingElse;
