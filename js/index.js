import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'


const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

// A modal em si
const modal = document.querySelector(".modal");

// O botão de Abrir Modal
const openModalBtn = document.querySelector(".open");

// O botão de Fechar Modal
const closeModalBtn = document.querySelector(".close");

/* Ao clicar no botão de Abrir Modal, executamos a função
showModal() na Modal: */
openModalBtn.addEventListener("click", () => modal.showModal());

/* Ao clicar no botão de Fechar Modal, executamos a função
close() na Modal */
closeModalBtn.addEventListener("click", () => modal.close());