var ready = function(fn){

	(document.readyState != "loading") ? fn() : document.addEventListener("DOMContentLoaded", fn, false);
};

ready(function(){

	/* scroll to top */

	var scrollBtn = document.querySelector("#back-to-top");

	scrollBtn.addEventListener("click", function(){ toTop(); }, false);	

	function toTop() {

	 var step = -window.pageYOffset / 50;

			var scrollFun = setInterval(function(){

				window.pageYOffset != 0 ? window.scrollBy( 0, step ) : clearInterval(scrollFun); 

			}, 20);
	}

	 
});





