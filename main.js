const menu = document.getElementById('navbar__menu')
const abrir = document.getElementById('navbar__btn')
const cerrar = document.getElementById('navbar__cerrar')
const slider = document.getElementById('slider')
const form = document.getElementById('form')
let sliderSection = document.querySelectorAll('.slider__section')
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const btnLeft = document.getElementById('btn--left')
const btnRight = document.getElementById('btn--right')

slider.insertAdjacentElement("afterbegin", sliderSectionLast)

function next() {
   let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
   slider.style.marginLeft = '-200%';
   slider.style.transition = 'all 0.5s';
   setTimeout(function(){
      slider.style.transition = 'none';
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = '-100%';
   }, 500);
}
function prev() {
   let sliderSection = document.querySelectorAll('.slider__section');
   let sliderSectionLast = sliderSection[sliderSection.length - 1]
   slider.style.marginLeft = '0';
   slider.style.transition = 'all 0.5s';
   setTimeout(function(){
      slider.style.transition = 'none';
      slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      slider.style.marginLeft = '-100%';
   }, 500);
}
btnRight.addEventListener('click', function(){
   next()
});
btnLeft.addEventListener('click', function(){
   prev()
});

setInterval(function() {
   next()
}, 5000)


 abrir.addEventListener('click', (e) => {
    menu.classList.add('navbar__cerrar')
 });
 cerrar.addEventListener('click', (e) => {
    menu.classList.remove('navbar__cerrar')
 })

 form.addEventListener('submit', function (e) {
   e.preventDefault()
   const email = 'trasladoslibrazonaoeste@gmail.com'
   const URL_BASE = `https://formsubmit.co/ajax/${email}`
   const input = e.currentTarget.elements
   const dataForm = {
      name: input.name.value,
      email: input.email.value,
      message: input.message.value
   }
   window.fetch(URL_BASE, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(dataForm)
})
    alert('Tu mensaje se envio correctamente')
   e.currentTarget.reset()

 })
    


 