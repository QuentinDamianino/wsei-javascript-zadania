/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji 'sortArray()'
function sortArray() {

    //deklaracja tablicy 'points'
    var points = [41, 3, 6, 1, 114, 54, 64];

    //funkcja 'sort()' sortuje tablice 'points'
    points.sort(function (a, b) {
        //funkcja odejmuje 'b' od 'a'
        return a - b;
    });

    //funkcja zwraca posortowaną tablice 'points'
    return points;
}

//wywołanie funkcji 'sortArray()'

sortArray();