const hamburger = document.querySelector(".hamburgermenuu");
firstthird = document.querySelector(".firstthirda");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    firstthird.classList.toggle("active");
})
