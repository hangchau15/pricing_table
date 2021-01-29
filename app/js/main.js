window.onscroll = function () {
  stickyHeader(), scrollFunction()
}
//sticky header menu
function stickyHeader() {
  let headerElm = document.getElementById('header')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headerElm.classList.add('sticky', 'add-sticky-padding')
    headerElm.classList.remove('remove-sticky-padding')
  } else {
    headerElm.classList.remove('sticky', 'add-sticky-padding')
    headerElm.classList.add('remove-sticky-padding')
  }
}

//responsive header menu
function myFunction() {
  let headerMenuElm = document.getElementById('menu-responsive')
  if (headerMenuElm.className === 'menu-responsive') {
    headerMenuElm.className += ' responsive'
  } else {
    headerMenuElm.className = 'menu-responsive'
  }
}

//scroll to top button
function scrollFunction() {
  scrollBtnElm = document.getElementById('scrollBtn')
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtnElm.style.display = 'block'
  } else {
    scrollBtnElm.style.display = 'none'
  }
}
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

//smooth scroll to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn()
    } else {
      $('#scroll').fadeOut()
    }
  })
  $('#scroll').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500)
    return false
  })
})

// //slideshow using javascript
slider('.slideshow-container', {})
slider('.slide-track', { showArrow: false })
slider('.slider-footer-project', { showArrow: false })
function slider(slideContainerClass, { showDot = true, showArrow = true }) {
  let slideIndex = 1
  let myTimer = setInterval(function () {
    moveSlide(1)
  }, 2000)
  const arrowLeftElm = document.createElement('a')
  const arrowRightElm = document.createElement('a')
  const slideContainerElm = document.querySelector(slideContainerClass)
  const slidesElm = slideContainerElm.getElementsByClassName('slide-item')
  const dotsElm = slideContainerElm.getElementsByClassName('dot')
  const slideItem = slideContainerElm.children
  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.add('slide-item')
  }

  const moveSlide = (indexSlideElm) => {
    clearInterval(myTimer)
    if (indexSlideElm < 0) {
      showSlides((slideIndex -= 1))
    } else {
      showSlides((slideIndex += 1))
    }
    myTimer =
      indexSlideElm === -1
        ? setInterval(function () {
            moveSlide(indexSlideElm + 2)
          }, 2000)
        : setInterval(function () {
            moveSlide(indexSlideElm + 1)
          }, 2000)
  }

  const gotoSlide = (indexSlideElm) => {
    clearInterval(myTimer)
    myTimer = setInterval(function () {
      moveSlide(indexSlideElm + 1)
    }, 2000)
    showSlides((slideIndex = indexSlideElm))
  }

  const showSlides = (indexSlideElm) => {
    if (indexSlideElm > slidesElm.length) {
      slideIndex = 1
    }
    if (indexSlideElm < 1) {
      slideIndex = slidesElm.length
    }
    for (let i = 0; i < slidesElm.length; i++) {
      slidesElm[i].classList.add('d-none')
      slidesElm[i].classList.remove('d-block')
    }
    for (let i = 0; i < dotsElm.length; i++) {
      if (showDot) {
        dotsElm[i].classList.remove('active')
      }
    }
    slidesElm[slideIndex - 1].classList.add('d-block')
    slidesElm[slideIndex - 1].classList.remove('d-none')
    if (showDot) {
      dotsElm[slideIndex - 1].classList.add('active')
    }
  }

  if (showArrow) {
    arrowLeftElm.innerHTML = '&#8592;'
    slideContainerElm.appendChild(arrowLeftElm)
    arrowLeftElm.classList.add('prev')
    arrowRightElm.innerHTML = '&#8594;'
    slideContainerElm.appendChild(arrowRightElm)
    arrowRightElm.classList.add('next')
    arrowLeftElm.addEventListener('click', function () {
      moveSlide(-1)
    })
    arrowRightElm.addEventListener('click', function () {
      moveSlide(1)
    })
  } else {
    arrowLeftElm.classList.add('d-hidden')
    arrowRightElm.classList.add('d-hidden')
  }

  if (showDot) {
    const dotContainer = document.createElement('div')
    const parent = slideContainerElm.appendChild(dotContainer)
    dotContainer.classList.add('group-dots')
    for (let i = 0; i < slidesElm.length; i++) {
      const dotsElm = document.createElement('button')
      dotsElm.innerHTML = slideIndex++
      parent.appendChild(dotsElm)
      dotsElm.classList.add('dot')
    }
    for (let i = 0; i < dotsElm.length; i++) {
      for (let indexDot = i; indexDot < i + 1; indexDot++) {
        indexDot++
        dotsElm[i].addEventListener('click', function () {
          gotoSlide(indexDot)
        })
      }
    }
  }
  showSlides(slideIndex)
}
