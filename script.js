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
const navLi1 = document.querySelector('.move1')
const navLi2 = document.querySelector('.move2')
const navLi3 = document.querySelector('.move3')
const rotate1 = document.querySelector('.rotate1');
const rotate2 = document.querySelector('.rotate2');
const rotate3 = document.querySelector('.rotate3');


navLi1.addEventListener('click', function(){
  rotate1.classList.toggle('rotate')
})

navLi2.addEventListener('click', function(){
  rotate2.classList.toggle('rotate')
})

navLi3.addEventListener('click', function(){
  rotate3.classList.toggle('rotate')
})

hamburger.addEventListener('click', function(){
  topSlideMenu.classList.toggle('active');
  document.body.classList.add('do-not-move')
  exitI.classList.add('show');
  
})

exitI.addEventListener('click', function(){
  topSlideMenu.classList.remove('active');
  document.body.classList.remove('do-not-move')
  exitI.classList.remove('show');
})


let topMenuTriggers = [builder, whyThisGallery, services];

for(let i = 0; i < topMenuTriggers.length; i++){
  topMenuTriggers[i].addEventListener('click', function(){
  topMenu.classList.toggle('active')
  nav.classList.toggle('black');


  switchColor.forEach(function(color){
    color.classList.toggle('black')
      })
})
}


