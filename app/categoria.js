document.querySelector(".categoria-perros").addEventListener('click', e => {
    document.querySelector(".categoria-gatos").classList.add('opacidad');
    document.querySelector(".categoria-perros").classList.remove('opacidad');
    document.querySelector("#img-1").setAttribute("src", "./img/dog-1-rocky-card.svg");
    document.querySelector("#img-2").setAttribute("src", "./img/dog-2-papi-card.svg");
    document.querySelector("#img-3").setAttribute("src", "./img/dog-3-pelusa-card.svg");
    document.querySelector("#img-4").setAttribute("src", "./img/dog-4-charlie-card.svg")

    document.querySelector(".categoria-gatos").addEventListener('click', e => {
        document.querySelector(".categoria-perros").classList.add('opacidad');
        document.querySelector(".categoria-gatos").classList.remove('opacidad');
        document.querySelector("#img-1").setAttribute("src", "./img/cat-1-bombay-card.svg");
        document.querySelector("#img-2").setAttribute("src", "./img/cat-2-pelusa-card.svg");
        document.querySelector("#img-4").setAttribute("src", "./img/cat-3-bombon-card.svg");
        document.querySelector("#img-3").setAttribute("src", "./img/cat-4-matilde-card.svg");
    })
})