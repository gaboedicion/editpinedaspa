let slider = document.querySelector(".item-sl ");
let sliderIndividual = document.querySelectorAll(".item-sl img");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;

});

setInterval(function() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .2s, , 0px, 0px";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .2s";
            contador = 1;

        }, 1500);
    }

}