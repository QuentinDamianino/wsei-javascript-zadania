hello();

function hello() {
    console.log("Cześć");
}

hello();
//funkcja wywołuje się bez względu na miejsce w którym ją wywołujemy


welcome();

let welcome = function() {
    console.log("witaj");
}

welcome();
//funkcja może byc wywołana tylko po jej deklaracji