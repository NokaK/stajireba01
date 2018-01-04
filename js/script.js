$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});


// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
// }

// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }

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

// $(function(){

//         $('#nav-icon1').click(function() {
//           var clicks = $(this).data('clicks');
//           if (clicks) {
//             closeNav()
//           } else {
//              openNav()
//           }
//           $(this).data("clicks", !clicks);
//         });

//     function openNav() {
//         document.getElementById("auto1").style.color = "red";
//     }

//     function closeNav() {
//         document.getElementById("auto1").style.width = "0%";
//     }

//         });