console.log('connected')
$('.readmore a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideDown()
  $('.readmore').hide()
  $('.readless').show()
})

$('.readless a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideUp()
  $('.readless').hide()
  $('.readmore').show()
})

$('.learnmore').click(function() {
  event.preventDefault();
  $('#learnmoretext').slideDown()
  $('.learnmore').hide()
})
