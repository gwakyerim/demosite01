$(function(){
  /*Scroll Change Download */
  $(window).scroll(function(){
    if($(window).scrollTop() > 500) {
      $('.download').addClass('active')
    }
    else {
      $('.download').removeClass('active')
    }
  })

  /*Sitemap Accordion */
  $('.link-title').click(function(){
    $(this).next('.link-content').slideToggle()
    $(this).parent().siblings().children('.link-content')
    .slideUp()
    $(this).toggleClass('active')
    $(this).parent().siblings().children('.link-title').removeClass('active')
  })
})