/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Funkcja zewnętrzna
function jeden() {

    //Zmienna lokalna
    var zmienna1 = 1;

    //funkcja wewnętrzna
    function dwa() {

        //funkcja wewnętrzna ma dostęp do zmiennej z funkcji zewnętrznej
        console.log(zmienna1);

        //zmienna lokalna w funkcji wewnętrznej
        var zmienna2 = 3;
    }

    //Wywołanie funkcji w zasięgu lokalnym
    dwa();

    //funkcja nie ma dostępu do lokalnej zmiennej funkcji dwa()
    console.log(zmienna2)
}

//wywołanie funkcji zewnętrznej a co za tym idzie wewnętrzej też bo funkcja zewnętrzna w środku wywołuje funkcję wewnętrzna
jeden()