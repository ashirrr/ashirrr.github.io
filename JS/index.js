$(document).ready(function() {

//Hide the footer when the page loads
	$('#foot').hide();

//On click of the scroll button reveal the homepage footer
	$('#scroller').click(showFoot)
		function showFoot(){ 
		  event.preventDefault();
		  $('#foot').slideToggle("fast");

}

//On click of the responsive menu show nav items in vertical stack
	$('nav li:first-child').addClass('downNav');
		$('nav li:first-child').click(function(){
		$('nav ul').toggleClass("downNav");
	});
});

/*
// NOT WORKING: On click of the "Get in Touch" button the contact form opens in a dialog box
	var body_message = $('#email').value;
	var email = 'ashirbadami@gmail.com';
	var subject = 'Your Services';
	$('.button').click(function() {

    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();

});
*/

// Function for the accordion
		$('.accordion-section .accordion-section-title').click(function(){
		$(this).siblings().slideToggle('active');
	
});

//
	$(function(){
  		
  		$('#submit').on('click',function(){
    		$(this).val('Please wait ...')
      		.attr('disabled','disabled');
    		$('#submit').submit();
  });
  
});

//Form validation to ensure all fields are filled in
		$('#submit').click(function() {
			var name = $("#firstName").val();
			var surName = $("lastName").val();
			var eAddress = $("#email").val();
			var telephone = $("#phone").val();
				if (name == "" || email == "" || contactno == "" || message == ""){
				alert("Please Fill in All the Fields");
		}

		else {

			if (validateEmail(email)) {
			$("#form").css("display", "none");
		}

		else {
			alert('Invalid Email Address');

		}

		function validateEmail(email) {
		var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (filter.test(email)) {
		return true;
		}
		else {
		return false;
		}

		}
		}
		});

