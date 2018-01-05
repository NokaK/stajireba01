$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});



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

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

        });

// $(document).ready(function(){
//   $('#nav-icon1').click(function(){
//     $('#white').toggleClass('auto1');
//   });
// });

 $(document).ready(function(){
  $('#nav-icon1').click(function(){
            $("#red").css("z-index","3");
      

      });
        });


