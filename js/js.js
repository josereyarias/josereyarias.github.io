particlesJS.load('particles-js', 'particles.json')
let t = 0
setTimeout(() => {
    let opacidad = setInterval(() => {
        t = t + 0.4
        document.querySelector("#preloader").style.opacity = 1 - t
    }, 700);
    setTimeout(() => {
        document.querySelector("body").removeChild(document.querySelector("#preloader"))
        clearInterval(opacidad)

        typeWriter()



    }, 1300);
}, 400);



let l = 0;
let i = 0;
let txt = ["No se que poner texto 1.", "No se que poner texto 2 xdd."];


function typeWriter() {
    if (i < txt[0].length) {
        document.querySelector(".type span").innerHTML = txt[l].substring(0, i + 1)
        i++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(typeWriterRev, 2000)
    }
}

function typeWriterRev() {
    if (i > 0) {
        document.querySelector(".type span").innerHTML = txt[l].substring(0, i - 1)
        i = i - 1;
        setTimeout(typeWriterRev, 25)
    } else {
        setTimeout(typeWriter, 1000)
        if (l == 0) {
            l = 1
        } else {
            l = 0
        }
    }
}