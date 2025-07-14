document.addEventListener('DOMContentLoaded', function () {
    var contenedorBoton = document.querySelector('.contenedor-boton-whatsapp');
    contenedorBoton.classList.add('mostrar');

    var contenedorProyectos = document.getElementById('container-proyectos');
    contenedorProyectos.classList.add('show');

    var techText = document.getElementById('tech-text');
    
    function restartAnimation() {
        techText.style.animation = 'none';
        void techText.offsetWidth; 
        techText.style.animation = null;
        techText.style.animation = 'typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite';
    }

    setInterval(restartAnimation, 10000);
    restartAnimation();

    var start, progress, duration;

    function step(timestamp) {
        if (!start) start = timestamp;
        progress = timestamp - start;

        if (progress < duration) {
            contenedorProyectos.style.marginTop = easeInOutQuad(progress, 0, 50, duration) + 'px';
            requestAnimationFrame(step);
        } else {
            contenedorProyectos.style.marginTop = '50px';
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    duration = 300;
    requestAnimationFrame(step);
});


function cambiarImagenResponsive() {
    const img = document.getElementById('AppQr-img');
    const AppJDimg = document.getElementById('AppJD-img');
    const webCredenimg = document.getElementById('webCredenciales-img');

    if (window.innerWidth <= 768) {
      img.src = "images/AppQr_Movil.png";
      AppJDimg.src = "images/AppJD_Movil.png";
      webCredenimg.src = "images/webCredenciales_Movil.png";
    } else {
      img.src = "images/AppQr.png";
      AppJDimg.src = "images/AppJD.png";
      webCredenimg.src = "images/webCredenciales.png";
    }


  }

  cambiarImagenResponsive();
  window.addEventListener('resize', cambiarImagenResponsive);
