const nav = document.querySelector('nav');
const header = document.querySelector('.header');

const homeTrailer = document.querySelector('.backvideo');

const nextVideo = document.querySelector('.nextvideo');

const previousVideo = document.querySelector('.previousvideo');

const pourcentage = document.querySelector('.pourcentage');
const quoteNotation = document.querySelector('.quotenotation');
const scoreFinal = document.querySelector('.scorefinal');



window.addEventListener('scroll', () => {

    
    if (window.scrollY > 1900) {

        nav.style.visibility = "hidden";
        header.style.visibility = "hidden";
    } else if (window.scrollY <= 1900) {
        nav.style.visibility = "visible";
        header.style.visibility = "visible";
    }

    if (window.scrollY > 6500) {

        nav.style.visibility = "visible";
        header.style.visibility = "visible";
    }
});


window.addEventListener('scroll', () => {


    if (window.scrollY === 5157) {
        console.log(window.scrollY);
        pourcentage.animate([
            // key frames note globale pourcentage
            { width: '0%' },
            { width: '90%' }
        ], {
            // sync options vitesse et nombre de répétitions
            duration: 1000,
            iterations: 1
        });



        quoteNotation.animate([
            // key frames texte note global
            { opacity : '0', transform: 'translateX(0)' },
            { opacity:'1', transform: 'translateX(70%)'}
        ], {
            // sync options
            duration: 1000,
            iterations: 1
        });

        scoreFinal.animate([
            // key frames texte note global
            { opacity : '0', scale : '0.2' },
            { opacity:'1', scale : '1'}
        ], {
            // sync options
            duration: 1000,
            iterations: 1
        });
    }
});


function nextvideo() {

    nextVideo.addEventListener('click', () => {

        homeTrailer.setAttribute('src', 'img/re-village.mp4');

    });
};

nextvideo();

function previousvideo() {

    previousVideo.addEventListener('click', () => {

        homeTrailer.setAttribute('src', 'img/control.mp4');

    });
};

previousvideo();