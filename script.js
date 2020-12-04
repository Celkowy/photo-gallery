lightbox.option({
  albumLabel: '%1 / %2',
  disableScrolling: true,
  faceDuration: 500,
  resizeDuration: 500,
  wrapAround: true,
  positionFromTop: 0,
})

const builder = document.querySelector('.nav-ul li:nth-of-type(2)')
const whyThisGallery = document.querySelector('.nav-ul li:nth-of-type(3)')
const services = document.querySelector('.nav-ul li:last-of-type')
const topMenu = document.querySelector('.top-menu')
const switchColor = document.querySelectorAll('.switch-color')
const nav = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger')
const topSlideMenu = document.querySelector('.top-slide-menu')
const exitI = document.querySelector('.exit i')
const hide = document.querySelector('.hide')

let navSwitcher = [document.querySelector('.move1'), document.querySelector('.move2'), document.querySelector('.move3')]

let arrowRotation = [
  document.querySelector('.rotate1'),
  document.querySelector('.rotate2'),
  document.querySelector('.rotate3'),
]

for (let i = 0; i < navSwitcher.length; i++) {
  navSwitcher[i].addEventListener('click', () => {
    for (let i = 0; i < arrowRotation.length; i++) {
      arrowRotation[i].classList.toggle('rotate')
    }
  })
}

hamburger.addEventListener('click', () => {
  topSlideMenu.classList.toggle('active')
  document.body.classList.add('do-not-move')
  exitI.classList.add('show')
})

exitI.addEventListener('click', () => {
  topSlideMenu.classList.remove('active')
  document.body.classList.remove('do-not-move')
  exitI.classList.remove('show')
})

let topMenuTriggers = [builder, whyThisGallery, services]

for (let i = 0; i < topMenuTriggers.length; i++) {
  topMenuTriggers[i].addEventListener('click', () => {
    topMenu.classList.toggle('active')
    nav.classList.toggle('black')

    switchColor.forEach(color => {
      color.classList.toggle('black')
    })
  })
}

window.addEventListener('resize', () => {
  const mq = window.matchMedia('(max-width: 1280px)')
  if (mq.matches) {
    topMenu.classList.remove('active')
    nav.classList.remove('black')

    switchColor.forEach(color => {
      color.classList.remove('black')
    })

    for (let i = 0; i < arrowRotation.length; i++) {
      arrowRotation[i].classList.remove('rotate')
    }
  }
})
