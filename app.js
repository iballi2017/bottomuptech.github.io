// $document.ready(function(){
//     $(".active").click(function(){
//         console.log("hello");
//     });

// });


		// javascript (menu button click to toggle mobile nav menu)


		// x=1;
		// function toggleNav(){
		// 	if(x==1){
		// 	document.getElementById("mobile-nav").style.display="block"; x=0
		// 	}
		// 	else if(x==0){
		// 		document.getElementById("mobile-nav").style.display="none"; x=1
		// 	}
		// }



		// jquery  nav toggle codes
		$(document).ready(function () {
			$("#menu-button").click(function () {
                //menu button click to toggle mobile nav menu
				$("#mobile-nav").toggle(500);
			});
        });