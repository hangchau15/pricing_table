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
slider('.slideshow-container', 'mySlides', {})
slider('.slide-container', 'slide-item', { showDot: true })
slider('.slider-footer-project', 'row-item', { showArrow: false })
function slider(
  slideContainerClass,
  slideItemClass,
  { showDot = true, showArrow = true }
) {
  let slideIndex = 1
  let myTimer
  let arrowLeftElm = document.createElement('a')
  let arrowRightElm = document.createElement('a')
  let dotsElm = document
    .querySelector(slideContainerClass)
    .getElementsByClassName('dot')
  let slidesElm = document.getElementsByClassName(slideItemClass)
  const timing = function (indexCount = 0, index = null) {
    // clearInterval(myTimer)
    const val = index ? index : indexSlideElm
    setInterval(function () {
      moveSlide(val + indexCount)
    }, 2000)
  }
  myTimer = timing(0, 1)
  const moveSlide = (indexSlideElm) => {
    clearInterval(myTimer)
    if (indexSlideElm < 0) {
      showSlides((slideIndex -= 1))
    } else {
      showSlides((slideIndex += 1))
    }
    myTimer = indexSlideElm === -1 ? timing(2) : timing(1)
  }
  const currentSlide = (indexSlideElm) => {
    myTimer = timing(1)
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
      slidesElm[i].style.display = 'none'
    }
    for (let i = 0; i < dotsElm.length; i++) {
      if (showDot) {
        dotsElm[i].className = dotsElm[i].className.replace(' active', '')
      }
    }
    slidesElm[slideIndex - 1].style.display = 'block'
    if (showDot) {
      dotsElm[slideIndex - 1].className += ' active'
    }
  }

  if (showArrow) {
    arrowLeftElm.innerHTML = '&#8592;'
    document.querySelector(slideContainerClass).appendChild(arrowLeftElm)
    arrowLeftElm.classList.add('prev')
    arrowRightElm.innerHTML = '&#8594;'
    document.querySelector(slideContainerClass).appendChild(arrowRightElm)
    arrowRightElm.classList.add('next')
    arrowLeftElm.onclick = function () {
      moveSlide(-1)
    }
    arrowRightElm.onclick = function () {
      moveSlide(1)
    }
  } else {
    arrowLeftElm.style.visibility = 'hidden'
    arrowRightElm.style.visibility = 'hidden'
  }
  if (showDot) {
    let dotContainer = document.createElement('div')
    let x = document
      .querySelector(slideContainerClass)
      .appendChild(dotContainer)
    dotContainer.classList.add('group-dots')
    for (let i = 0; i < slidesElm.length; i++) {
      let dotsElm = document.createElement('button')
      dotsElm.innerHTML = slideIndex++
      x.appendChild(dotsElm)
      dotsElm.classList.add('dot')
    }
    for (let i = 0; i < dotsElm.length; i++) {
      for (let indexDot = i; indexDot < i + 1; indexDot++) {
        indexDot++
        dotsElm[i].onclick = function () {
          currentSlide(indexDot)
        }
      }
    }
  }
  showSlides(slideIndex)
}
