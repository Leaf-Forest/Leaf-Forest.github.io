			//Get the button
			var topbutton = document.getElementById("topBtn");

			// When the user scrolls down 250px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
  				if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    					topbutton.style.display = "block";
  				} else {
    					topbutton.style.display = "none";
  				}
			}

			// When the user clicks on the button, scroll to the top of the document
			function topFunction() {
  				document.body.scrollTop = 0;
  				document.documentElement.scrollTop = 0;
			}
