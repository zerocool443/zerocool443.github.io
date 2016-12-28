$(document).ready(function(){


$(".click").click(function(){

	var id = $(this).attr("id");

	var curprice= $("#totalbill").text();
	
	var priceid="#price"+id;
	var quantid="#quantity"+id;
	
	t1=$(priceid).text();
	t2=$(quantid).val();
	var update = t1*t2;

	var newprice = parseInt(curprice)+update;
	

	$("#totalbill").text(newprice);


});

});