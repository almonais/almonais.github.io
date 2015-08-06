$(function() {
	$("#button-send-form").click(function( event ) {
	  $("#form-contact").submit(function(event) {
	  	event.preventDefault();
	  });
	});

	$.ajax({
        url: "//formspree.io/nalcaraz@gmail.com", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          $('#contact_container').empty();
          $('#contact_container').html("<h3>Thank You</h3><p>Your request has been sent and I will get in touch with you soon.");
        }
      });
});

