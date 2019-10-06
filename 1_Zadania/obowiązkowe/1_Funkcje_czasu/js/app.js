function countHello(number){

    var number2 = 1;

    const interval = setInterval(function(){
        console.log('Hello ' + number2);
        if(number === number2) clearInterval(interval);
        number2++;
    }, 1000);
}

countHello(10);