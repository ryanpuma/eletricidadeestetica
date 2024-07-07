document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.add('loaded');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'item'
    const items = document.querySelectorAll('.item');

    // Itera sobre cada item
    items.forEach(item => {
        // Verifica se o item está vazio
        if (!item.innerHTML.trim()) {
            // Se estiver vazio, aplica a classe 'hidden' para ocultá-lo
            item.classList.add('hidden');
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const blob = document.querySelector(".blob");

    function moveBlob(event) {
        const blobRect = blob.getBoundingClientRect();
        const blobWidth = blobRect.width;
        const blobHeight = blobRect.height;
        let x, y;

        if (event.type === "mousemove") {
            x = event.clientX - blobWidth / 2;
            y = event.clientY - blobHeight / 2;
        } else if (event.type === "touchmove") {
            x = event.touches[0].clientX - blobWidth / 2;
            y = event.touches[0].clientY - blobHeight / 2;
        }

        // Obtém as dimensões da janela visível (excluindo a barra de rolagem)
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;

        // Limita a posição da blob para dentro da janela visível
        x = Math.max(0, Math.min(x, windowWidth - blobWidth));
        y = Math.max(0, Math.min(y, windowHeight - blobHeight));

        blob.style.transform = `translate(${x}px, ${y}px)`;
    }

    document.addEventListener("mousemove", moveBlob);
    document.addEventListener("touchmove", moveBlob, { passive: false });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Slider 1
    const container1 = document.querySelector("#comparison1");
    const finalImage1 = container1.querySelector(".img-final");
    const slider1 = container1.querySelector(".slider");

    // Inicializa o slider 1 no meio
    const containerWidth1 = container1.offsetWidth;
    const initialClipX1 = containerWidth1 / 2;
    finalImage1.style.clip = `rect(0, ${initialClipX1}px, auto, 0)`;
    slider1.style.left = `${initialClipX1}px`;

    function slide1(event) {
        const containerRect1 = container1.getBoundingClientRect();
        let clientX;

        if (event.touches) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        const offsetX = clientX - containerRect1.left;
        const clipX = Math.max(0, Math.min(containerRect1.width, offsetX));
        
        finalImage1.style.clip = `rect(0, ${clipX}px, auto, 0)`;
        slider1.style.left = `${clipX}px`;
    }

    container1.addEventListener("mousemove", slide1);
    container1.addEventListener("touchmove", function(event) {
        slide1(event);
        event.preventDefault();
    }, { passive: false });

    // Slider 2
    const container2 = document.querySelector("#comparison2");
    const finalImage2 = container2.querySelector(".img-final");
    const slider2 = container2.querySelector(".slider");

    // Inicializa o slider 2 no meio
    const containerWidth2 = container2.offsetWidth;
    const initialClipX2 = containerWidth2 / 2;
    finalImage2.style.clip = `rect(0, ${initialClipX2}px, auto, 0)`;
    slider2.style.left = `${initialClipX2}px`;

    function slide2(event) {
        const containerRect2 = container2.getBoundingClientRect();
        let clientX;

        if (event.touches) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        const offsetX = clientX - containerRect2.left;
        const clipX = Math.max(0, Math.min(containerRect2.width, offsetX));
        
        finalImage2.style.clip = `rect(0, ${clipX}px, auto, 0)`;
        slider2.style.left = `${clipX}px`;
    }

    container2.addEventListener("mousemove", slide2);
    container2.addEventListener("touchmove", function(event) {
        slide2(event);
        event.preventDefault();
    }, { passive: false });

// Slider 3
const container3 = document.querySelector("#comparison3");
const finalImage3 = container3.querySelector(".img-final");
const slider3 = container3.querySelector(".slider");

// Inicializa o slider 3 no meio
const containerWidth3 = container3.offsetWidth;
const initialClipX3 = containerWidth3 / 2;
finalImage3.style.clip = `rect(0, ${initialClipX3}px, auto, 0)`;
slider3.style.left = `${initialClipX3}px`;

function slide3(event) {
    const containerRect3 = container3.getBoundingClientRect();
    let clientX;

    if (event.touches) {
        clientX = event.touches[0].clientX;
    } else {
        clientX = event.clientX;
    }

    const offsetX = clientX - containerRect3.left;
    const clipX = Math.max(0, Math.min(containerRect3.width, offsetX));
    
    finalImage3.style.clip = `rect(0, ${clipX}px, auto, 0)`;
    slider3.style.left = `${clipX}px`;
}

container3.addEventListener("mousemove", slide3);
container3.addEventListener("touchmove", function(event) {
    slide3(event);
    event.preventDefault();
}, { passive: false });
});


document.addEventListener("DOMContentLoaded", function() {
    const objetoMobile = document.querySelector(".objeto-mobile");

    function adjustPosition() {
        const objRect = objetoMobile.getBoundingClientRect();
        const objWidth = objRect.width;
        const objHeight = objRect.height;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let x = viewportWidth / 2 - objWidth / 2;
        let y = viewportHeight / 2 - objHeight / 2;

        // Certifique-se de que o objeto não saia do viewport
        x = Math.max(0, Math.min(x, viewportWidth - objWidth));
        y = Math.max(0, Math.min(y, viewportHeight - objHeight));

        objetoMobile.style.transform = `translate(${x}px, ${y}px)`;
    }

    window.addEventListener("resize", adjustPosition);
    adjustPosition();
});
