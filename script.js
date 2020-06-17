lightbox.option({
  'albumLabel': "Zdjęcie %1 z %2",
  'disableScrolling': true,
  'faceDuration': 500,
  'resizeDuration': 500,
  'wrapAround': true,
})

const builder = document.querySelector('.nav-ul li:nth-of-type(2)');
const whyThisGallery = document.querySelector('.nav-ul li:nth-of-type(3)');
const services = document.querySelector('.nav-ul li:last-of-type');

const topMenu = document.querySelector('.top-menu');
const switchColor = document.querySelectorAll('.switch-color');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const topSlideMenu = document.querySelector('.top-slide-menu');
const exitI = document.querySelector('.exit i');

let topMenuTriggers = [builder, whyThisGallery, services];

hamburger.addEventListener('click', function(){
  topSlideMenu.classList.toggle('active');
  exitI.classList.add('show');
})

exitI.addEventListener('click', function(){
  topSlideMenu.classList.remove('active');
  exitI.classList.remove('show');
})

for(let i = 0; i < topMenuTriggers.length; i++){
  topMenuTriggers[i].addEventListener('click', function(){
  topMenu.classList.toggle('active')
  nav.classList.toggle('black');

  switchColor.forEach(function(color){
    color.classList.toggle('black')
  })
})
}


