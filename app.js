
function showElements(){$('.name').hide();
$('.job').hide();
$('.name').fadeIn(2000);
$('.job').delay(2000).fadeTo(3000, 0.60);}

showElements();



$("header").hover(function(){
      	$(".menu").addClass("active");
	  	$(".header-content").addClass("hide");
       	 }, function () {
	   	 $(".menu").removeClass("active");
	   	 $(".header-content").removeClass("hide");
     });
