
//Мобильное меню (ОТКРЫТЬ / ЗАКРЫТЬ)//

const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});



//Закрывать мобильное меню при клике на ссылку//

const mobileLinks = document.querySelectorAll('.navi-link-mobile-menu');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});


//Форма «Rent a yacht» (чтобы сайт не перезагружался)//

const form = document.querySelector('.modal-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // отменяем перезагрузку

  alert('Thank you! We will contact you soon 🚤');

  form.reset(); // очищаем поля
});




