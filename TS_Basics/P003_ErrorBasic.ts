



function test()
{
    console.log("Test is calling.....");
    dev();
}


function dev()
{
    console.log("Dev is calling.....");
    //test();
}

dev();

test();
//RangeError: Maximum call stack size exceeded
