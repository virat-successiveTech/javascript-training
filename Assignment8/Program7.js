for (let i = 0; i < 10; i++) {

    setTimeout(function() { console.log(i); }, i*1000); 

}

//var should not be used in the loop as it is function scoped and here we want a block scoped varible 
//and set time out is timed out to i*1000 so that 1 is printed after 1second and 9 after 9 seconds and so on 