function distFromAverage(tab) {
    let sum = 0;
    let newTab = [];

    for(i = 0; i < tab.length; i++) {
        sum = sum + tab[i];
    }

    sum = sum / tab.length;

    tab.forEach(el => {
        newTab.push(el -sum);
    })

    return(newTab);
}

let tab = [1, 2, 3, 4, 5, 6, 7];

distFromAverage(tab);

//zadanie 1

var favouriteFruits = ['apple', 'orange', 'bannana'];

console.log(favouriteFruits[0]);
console.log(favouriteFruits[favouriteFruits.length - 1]);

for (var i = 0; i < favouriteFruits.length; i++) {
    console.log(favouriteFruits[i]);
}


//zadanie 3

var tab = [1, 2, 3, 4];
function printTable(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printTable(tab);

//zadnie 4
function multiply(array) {
    let sum = 1;
    for(var i=0; i<array.length; i++) {
        sum *= array[i];
    }
    console.log(sum);
    return sum;
}

multiply([1,2,3,4,5,6,7]);

//zadanie 5
function getEvenAvarage(array) {
    let avg = 0;
    let evenArray = [];
    array.forEach(item => {
        if(item %2 == 0) {
            evenArray.push(item);
        }
    })

    if(evenArray.length == 0) {
        return null;
    }

    let sum = evenArray.reduce((prev, next) => prev + next);
    avg = sum / evenArray.length;

    console.log(avg);
    return avg;
}

getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1]);
getEvenAvarage([2,8,3,7,4]);

//zadanie 6
function sortArray(array) {
    array.sort((a,b) => a - b);
    console.log(array);
    return array;
}

sortArray([145,11,3,64,4,6,10]);

//zadanie 7
function addArrays(arr1, arr2) {
    let len = arr1.length > arr2.length ? arr1.length : arr2.length;
    let newArr = [];
    for(let i = 0; i < len; i++) {
        if(typeof(arr1[i]) === 'undefined') {
            newArr.push(arr2[i]);
        }else if(typeof(arr2[i]) === 'undefined') {
            newArr.push(arr1[i]);
        }else {
            newArr.push(arr1[i] + arr2[i]);
        }
        
    }
    console.log(newArr);
    return newArr;
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);