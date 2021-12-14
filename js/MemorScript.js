const cartas = document.querySelectorAll('.carta');
let flipcarta = false;
let bloquear = false;
let primeiracarta, segundacarta;

function virarcarta() {
    if (bloquear) return;
    if (this === primeiracarta) return;

    this.classList.add('flip');

    if (!flipcarta) {
        flipcarta = true;
        primeiracarta = this;
        return;
    }

    segundacarta = this;
    flipcarta = false;

    checar();
}

function checar() {
    if (primeiracarta.dataset.carta === segundacarta.dataset.carta) {
        disabilitarcartas();
        return;
    }

    naovirarcartas();
}

function disabilitarcartas() {
    primeiracarta.removerevento('click', virarcarta);
    segundacarta.removerevento('click', virarcarta);

    reinicia();
}

function naovirarcartas() {
    bloquear = true;

    setTimeout(() => {
        primeiracarta.classList.remove('flip');
        segundacarta.classList.remove('flip');

        reinicia();
    }, 1500);
}

function reinicia() {
    [flipcarta, bloquear] = [false, false];
    [primeiracarta, segundacarta] = [null, null];
}

(function embaralhar() {
    cartas.forEach((carta) => {
        let posicaorandom = Math.floor(Math.random() * 12);
        carta.style.order = posicaorandom;
    })
})();

cartas.forEach((carta) => {
    carta.addEventListener('click', virarcarta);
});