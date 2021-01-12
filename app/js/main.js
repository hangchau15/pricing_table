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
slider('.slideshow-container', 'mySlides', '.group-dots', 'group-dots', {})
slider(
  '.slider-footer-project',
  'row-item',
  '.group-position',
  'group-position',
  { showArrow: false, showDot: false }
)
function slider(
  slideContainerClass,
  slideItemClass,
  dotContainerClass,
  dotClassAppend,
  { showDot = true, showArrow = true }
) {
  let slideIndex = 1
  let myTimer
  let arrowLeftElm = document.createElement('a')
  let arrowRightElm = document.createElement('a')
  let dotsElm = document.getElementsByClassName('dot')
  let slidesElm = document.getElementsByClassName(slideItemClass)
  myTimer = setInterval(function () {
    moveSlide(1)
  }, 2000)
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
  if (showDot) {
    let dotContainer = document.createElement('div')
    document.querySelector(slideContainerClass).appendChild(dotContainer)
    dotContainer.classList.add(dotClassAppend)
    for (let i = 0; i < slidesElm.length; i++) {
      let dotsElm = document.createElement('button')
      dotsElm.innerHTML = slideIndex++
      document.querySelector(dotContainerClass).appendChild(dotsElm)
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
  showSlides(slideIndex)
  const currentSlide = (indexSlideElm) => {
    clearInterval(myTimer)
    myTimer = setInterval(function () {
      moveSlide(indexSlideElm + 1)
    }, 2000)
    showSlides((slideIndex = indexSlideElm))
  }
}

//slideshow footer
// let sIndex = 0
// showSlidesFooter()

// function showSlidesFooter() {
//   let slideItem = document.getElementsByClassName('row-item')
//   let dotItem = document.getElementsByClassName('dots')
//   for (let i = 0; i < slideItem.length; i++) {
//     slideItem[i].style.display = 'none'
//   }
//   sIndex++
//   if (sIndex > slideItem.length) {
//     sIndex = 1
//   }
//   for (i = 0; i < dotItem.length; i++) {
//     dotItem[i].className = dotItem[i].className.replace(' active', '')
//   }
//   slideItem[sIndex - 1].style.display = 'block'
//   dotItem[sIndex - 1].className += ' active'
//   setTimeout(showSlidesFooter, 4000) // Change image every 4 seconds
// }
