let slider = document.querySelector(".contenido-slider");
let sliderIndividual = document.querySelectorAll(".contenido-slider img");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 2000;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;

});

setInterval(function() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .7s";
    contador++;
    let largo = sliderIndividual.length;

    if (contador == largo - 4) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;

        }, 1500);
    }

}