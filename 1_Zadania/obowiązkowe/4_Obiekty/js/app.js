// zad0a

const city = {
    capital: 'Warsaw',
    population: 38000000,
    president: 'Andrzej',
    primeMinisters: [
        'Marek ZAGÓRSKI',
        'Dariusz PIONTKOWSKI',
        'Krzysztof TCHÓRZEWSKI'
    ]
};

console.log(`capital: ${city.capital}`);
console.log(`population: ${city.population}`);
console.log(`president: ${city.president}`);
console.log(`primeMinisters: ${city.primeMinisters}`);

//zad0b

const timeMachine = {
    shape: 'circle',
    model: 'pumba',
    run: (date, place) => {
        console.log(`Now(${date}) we are in ${place}`);
    }
};
console.log(`shape: ${timeMachine.shape}`);
console.log(`model: ${timeMachine.model}`);
timeMachine.run('2050-01-01', 'the Moon');

//zad01

const book = {
    title: 'Programming in C#',
    author: 'Gall anonim',
    numberOfPages: 999
};
console.log(book);

//zad02

const person = {
    name: 'Jan Kowalski',
    age: 50,
    sayHello: () => {
        console.log('Hello');
    }
};
console.log(`name: ${person.name}, age: ${person.age}`);
person.sayHello();

//zad03

const favouriteRecipe = {
    title: 'pizza',
    servings: 4
};

favouriteRecipe.ingredients = [
    'flour',
    'eggs',
    'water',
    'salt',
    'yeast',
    'tomatoes',
    'ham',
    'cheese'
];

console.log(`title: ${favouriteRecipe.title}, servings: ${favouriteRecipe.servings}, ingredients: ${favouriteRecipe.ingredients}`);

//zad06

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);