$(function() {
	$("#button-send-form").click(function(e) {
		$("#form-contact").submit();
	});

	$("#form-contact").submit(function(e) {
	  	e.preventDefault();

		$.ajax({
	        url: "//formspree.io/nsalcaraz@gmail.com", 
	        method: "POST",
	        data: $(this).serialize(),
	        dataType: "json",
	        success: function(data){
	        	$("#form-modal").empty();
	        	$("#form-modal").html("<div style=\"padding: 10px;\">Merci !<br/><br/><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fermer</button></div>");
	        }
		});
	});
});
