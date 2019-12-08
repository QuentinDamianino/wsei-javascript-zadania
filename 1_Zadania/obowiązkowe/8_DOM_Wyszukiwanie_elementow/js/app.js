document.addEventListener("DOMContentLoaded", function () {
    //zadnie 1

    const title = document.getElementsByClassName("title");

    function getDataAnimation(element) {
        let dataAnimation = element.getAttribute("data-animation");
        return dataAnimation;
    }

    getDataAnimation(title[0]);


    //zadanie 2
    
    const home = document.getElementById("home");
    const home2 = document.querySelector("#home");
    console.log(home);
    console.log(home2);

    const li = document.getElementsByTagName("li")[0];
    console.log(li);

    const block = document.getElementsByClassName("block")[0];
    console.log(block);

    //zadanie 3 

    const nav = document.querySelectorAll("nav li");
    console.log(nav);

    const p = document.querySelectorAll("div p");
    console.log(p);

    const article = document.querySelectorAll("article div");
    console.log(article);
});
