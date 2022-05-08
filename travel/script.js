// hamburger menu

$(document).ready(function () {
  $('#bar').click(function () {
    $('.side-bar').animate({ left: '0' })
  })

  $('#close').click(function () {
    $('.side-bar').animate({ left: '-500px' })
  })
  $('.side-bar ul').click(function () {
    $('.side-bar').animate({ left: '-500px' })
  })

})

//home background

$(document).ready(function () {
 setTimeout(() => {
 $('#home').css({
    'background-image': 'url("images/slider-5.jpg")',
    'transition': '1.8s'
  })
 }, 2000);
})

// home scroll block-none
$(document).ready(function () {
  $('#destination').click(function () {
    $('#dest-down').toggle('active')
    $('#dest-up').toggle('passiv')
    $(' #home #destination .overflow ').toggle('active')
  })
  $('#destination dd').click(function (e) {
    let destText = $('#dest-text')
    destText.text(e.target.textContent)
  })

  $('#activity').click(function () {
    $('#act-down').toggle('active')
    $('#act-up').toggle('passiv')
    $(' #home #activity .overflow ').toggle('active')
  })
  $('#activity dd').click(function (e) {
    let actText = $('#act-text')
    actText.text(e.target.textContent)
  })

  $('#guest-click').click(function () {
    $('#home #guest #guests').toggle('active')
  })
  $('#apply').click(function () {
    $('#home #guest #guests').toggle('active')
  })

  let countP = 0
  let countC = 0
  let sum = 0
  $('.incre-p').click(function () {
    countP++
    $('.num1').text(countP)
    Sum()
  })
  $('.decrease-p').click(function () {
    if (countP > 0) {
      countP--
      $('.num1').text(countP)
      Sum()
    }
  })

  $('.incre-c').click(function () {
    countC++
    $('.num2').text(countC)
    Sum()
  })
  $('.decrease-c').click(function () {
    if (countC > 0) {
      countC--
      $('.num2').text(countC)
      Sum()
    }
  })

  function Sum() {
    sum = countP + countC
    $('#sum').text(sum)
    console.log(sum)
  }
})

//  featured tours slider
$(document).ready(function () {
  $('#news-slider').owlCarousel({
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    navigation: true,
    navigationText: ['', ''],
    autoPlay: true,
  })
  // news and articles slider
  $('#new-slider').owlCarousel({
    items: 3,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    navigation: true,
    navigationText: ['', ''],
    autoPlay: true,
  })
  // navigation icon
  let owlPrev = $('.owl-prev')
  let owlNext = $('.owl-next')

  $('.nav-icon').on({
    mouseenter: function () {
      owlPrev.css('display', 'block')
      owlNext.css('display', 'block')
    },
    mouseleave: function () {
      owlPrev.css('display', 'none')
      owlNext.css('display', 'none')
    },
  })
})
