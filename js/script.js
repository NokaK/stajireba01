$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});


    function openNav() {
        document.getElementById("myNav").style.width = "100%";
           $('#white').hide();
           $('#red').show();

    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
         $('#white').show();
         $('#red').hide();
    }

$(function(){

        $('#nav-icon1').click(function() {
          var clicks = $(this).data('clicks');
          if (clicks) {
            closeNav()
          } else {
             openNav()
          }
          $(this).data("clicks", !clicks);
        });

    

        });


$("#homeLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 500);
    closeNav ();
});
$("#servicesLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 500);
    closeNav ();
});
$("#contactLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
    closeNav ();
});
