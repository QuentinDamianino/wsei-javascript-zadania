Hi()
function Hi(){
  console.log("Cześć")
}
Hi()

//funkcja wykonuje się poprawnie zarówno przed jak i po deklaracji funkcji

Hello()
var Hello = function(){ 
  console.log("Witaj")
}
Hello()

//funkcja wykonuje się tylko po deklaracji zmiennej, przed deklaracją wyskakuje błąd (ponieważ nie jest widoczna powyżej deklaracji)