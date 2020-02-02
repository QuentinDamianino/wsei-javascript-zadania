
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//zad00
function checkArray(arr2D) {
    let newArr = [];
    for(let i = 0; i < arr2D.length; i++) {
        let check = true;
        for(let j = 0; j < arr2D[i].length; j++) {
            if(arr2D[i][j] % 2 !== 0) {
                check = false;
                break;
            }
        }
        newArr.push(check);
    }
    return newArr;
}
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];
checkArray(arr);

//zad01

//1
console.log(task1Array[3][2]);

//2
task1Array.forEach(elem => {
    console.log(elem.length);
});

//3
console.log(task1Array[4][2]);


//zad02

//1
task2Array.forEach(elem => console.log(elem));

//2
task2Array.forEach(elem => console.log(elem.length));

//3
for(let i = 0; i < task2Array.length; i++) {
    for(let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

//zad03
function print2DArray(arr2D) {
    arr2D.forEach(elem => {
        elem.forEach(el => {
           console.log(el);
        });
    });
}

print2DArray(arr);

//zad04
let handMadeArray = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,true, false]
];
print2DArray(handMadeArray);

//zad05
function create2DArray(row_num, col_num) {
    let tabToReturn = [];
    let temp = [];
    let value = 1;
    for(let i = 0; i < row_num; i++) {
        for(let j = 0; j < col_num; j++) {
            temp.push(value++);
        }
        tabToReturn.push(temp);
        temp = [];
    }
    console.log(tabToReturn);
    return tabToReturn;
}

create2DArray(4,4); 
