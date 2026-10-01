const button = document.querySelector(".evilbutton");

const pages = [
    "evil1.html",
    "evil2.html",
    "evil3.html",
    "evil4.html",
    "evil5.html",
    "evil6.html",

];

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * pages.length);

    window.location.href = pages[randomIndex];
});



    


