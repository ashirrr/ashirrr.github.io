$(document).ready(function() {

//When the page loads autoplay the video loop

//Hide the footer when the page loads
	$('#foot').hide();

//On click of the scroll button reveal the homepage footer
	$('#scroller').click(showFoot)
		function showFoot(){ 
		  event.preventDefault();
		  $('#foot').slideToggle("fast");

}

//On click of the scroll button for the second time, hide the homepage footer


//On click of the responsive menu show nav items in vertical stack
	$('nav li:first-child').addClass('downNav');
		$('nav li:first-child').click(function(){
		$('nav ul').toggleClass("downNav");
	});
});


// NOT WORKING: On click of the "Get in Touch" button the contact form opens in a dialog box
	$('.button').click(function(){
		$('#form').css("display", "block");
		alert('test');

});

// Function for the accordion
		$('.accordion-section .accordion-section-title').click(function(){
		$(this).siblings().slideToggle('active');
	
});




// Contact form popup send-button click event.
		$('#submit').click(function() {
		var name = $("#firstName").val();
		var surName = $("lastName").val();
		var eAddress = $("#email").val();
		var telephone = $("#phone").val();
		if (name == "" || email == "" || contactno == "" || message == ""){
		alert("Please Fill in All the Fields");
		}else{
		if (validateEmail(email)) {
		$("#form").css("display", "none");
		}else {
		alert('Invalid Email Address');
		}
		function validateEmail(email) {
		var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (filter.test(email)) {
		return true;
		}else {
		return false;
		}
		}
		}
		});

