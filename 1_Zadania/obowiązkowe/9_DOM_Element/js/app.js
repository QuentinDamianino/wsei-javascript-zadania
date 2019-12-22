document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //zadanie 0

    function getDatasInfo(elements)
    {
        let array = [];

        for(let i = 0; i < elements.length; i++) {
            array.push(elements[i].dataset);
        }

        return array;
    }

    console.log(getDatasInfo(links));


    //Zadanie 1
    console.log(homeElement);
    console.log(banner);

    for (let i = 0; i < childElements.length; i++) console.log(childElements[i]);

    for (let i = 0; i < blocks.length; i++) console.log(blocks[i].innerHTML);

    for (let i = 0; i < links.length; i++) console.log(links[i]);

    //Zadanie 2
    for (let item of blocks){
        console.log(item.innerHTML);
        console.log(item.outerHTML);
    }

   blocks.innerHtml = 'Nowa wartość diva o klasie blocks';

    // innerHTML wyświetla strukturę dom wewnątrz elementu
    // outerHTML wyświetla wraz z elementem

    //Zadanie 3
    let mainFooter = document.querySelector('#mainFooter');

    function getId(element) {
        const id = element.getAttribute('id');
        console.log(id);

        return id;
    }

    console.log(getId(mainFooter));

    //Zadanie 4
    function getTags(elements) {
        let tags = [];
        for(let item of elements) {
            tags.push(item.tagName);
        }

        return tags;
    }

    console.log(getTags(childElements));

    //Zadanie 5
    function getClassInfo(element){
        let classes = [];

        for (item of element) {
            classes.push(element.classList);
        }

        return classes;
    }

    console.log(classes);

    //Zadanie 6
    const liElements = document.querySelectorAll('nav li');
    function setDataDirection(elements){
        for(let item of elements){
            if(!item.getAttribute('data-direction')){
                item.setAttribute('data-direction','top');
            }
        }
    }

    setDataDirection(liElements);

    console.log(liElements);
});
