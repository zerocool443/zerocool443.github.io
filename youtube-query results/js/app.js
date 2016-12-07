function gotquery(args) {
	
	$.getJSON("https://www.googleapis.com/youtube/v3/search",{part:"snippet",key:"AIzaSyD2HwPDLGSk2npuXLGiGMQw1fECS-w9AuA",q:args},function(e){

		$.each(e.items,function(i,d){
			
			thumburl= d.snippet.thumbnails.high.url;
			videourl="https://www.youtube.com/watch?v="+d.id.videoId
			
			$("#results-sub").append("<a target='_blank' href="+videourl+">"+"  <img height='400px' align='middle' width='400px' src="+thumburl+">  </a> <br> </br>")
		});
		
	});


	

}

$(document).ready(function(){

	$('#submit').click(function(){
		q=$('#query').val();
		gotquery(q);
		$("#results-sub").html("")
	})
	
	$('#query').keypress(function (e) {
  if (e.which == 13) {
    	q=$('#query').val();
		gotquery(q);
		$("#results-sub").html("")
    return false;    
  }
})

})
