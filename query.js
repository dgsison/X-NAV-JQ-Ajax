$( document ).ready(function() {
	
	$.ajax({
		url:"text.txt",
		cache: false,
	})
	.done(function(data){
		$("#insert").append(data);
	});
	


	$("#insert2").click(function(){
		$.ajax({
			url:"text2.txt",
		})
		.done(function(data){
			$("#insert3").append(data);
		});
	});
});