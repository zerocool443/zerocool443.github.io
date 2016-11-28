$(document).ready(function(){

$('.ryu').mouseenter(function(){
	$('.ryu-still').hide()
	$('.ryu-ready').show()

})
.mouseleave(function() {
    $('.ryu-ready').hide()
	$('.ryu-still').show()
  })
.mousedown(function(){
	$('.ryu-ready').hide()
	$('.ryu-throwing').show()
	$('.hadouken').show()
})
 
 .mouseup(function(){
 	$('.hadouken').hide()
 	$('.ryu-throwing').hide()
 	$('.ryu-ready').show()


 })

 $(document).keydown(function(e){
 	 if (e.keyCode == 88){
 	$('.ryu-ready').hide();
 	$('.ryu-still').hide();
 	$('.ryu-cool').show();
	
	}
 })
 
 .keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();

    }



});

});