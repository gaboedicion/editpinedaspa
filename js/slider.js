/* js vanilla */

var imagenes = ['img/ico/feed1.jpg', 'img/ico/feed2.jpg', 'img/ico/feed3.jpg'];
var encabezado = ['  \" I HAVE LOVED GOOD JOB \"  ', ' \" I LOVE IT \" ', ' \" I HAVE NICE TIME \" '];
var txt = (" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit");

var contenido = ['1' + txt, '2' + txt, txt]

var cont = 0;
var cen = 0;

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('i'),
            img = contenedor.querySelector('img'),
            enc = contenedor.querySelector('.card-title'),
            texto = contenedor.querySelector('.card-text'),
            tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                enc.innerHTML = encabezado[cont - 1];
                texto.innerHTML = contenido[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                enc = encabezado[encabezado.length - 1];
                texto.innerHTML = contenido[cont - 1];
                cont = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                cen = encabezado.length - 1;
                img.src = imagenes[cont + 1];
                enc.innerHTML = encabezado[cont + 1];
                texto.innerHTML = contenido[cont + 1];

                cont++;
                cen++;
            } else {
                img.src = imagenes[0];
                enc.innerHTML = encabezado[0];
                texto.innerHTML = contenido[0];
                cont = 0;
                cen = 0;
            }
        }

    });

}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);


});

window.addEventListener('load', function() {
    console.log("El contenido a cargado");
    var imgSlider = [];
    imgSlider[0] = 'img/slider/slider1.jpg';
    imgSlider[1] = 'img/slider/slider2.jpg';
    imgSlider[2] = 'img/slider/slider3.jpg';
    imgSlider[3] = 'img/slider/slider4.jpg';

    var indexImagen = 0;

    function slider() {
        document.slider.src = imgSlider[indexImagen];
        if (indexImagen < 3) {
            indexImagen++;
        } else {
            indexImagen = 0;
        }
    }
    setInterval(slider, 1500);

});