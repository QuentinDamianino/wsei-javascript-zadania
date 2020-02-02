document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})

/* Po przeniesieniu tagu script do sekcji head kod wykonuje się przed załadowaniem strony, dlatego nie działa.
Po dodaniu skryptu do eventlistenera kod wykonuje sie po zaladowaniu calosci strony.*/
