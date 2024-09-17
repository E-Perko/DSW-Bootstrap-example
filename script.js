$(document).ready(function() {

	$("#revealpassword").click(function(){
		$("#password").slideToggle("slow");
	});
	
	$(".incorect").click(function(){
		$(".wrong").show();
	});
	$(".btn-close").click(function(){
		$(".wrong").hide();
	});
	
	 $(".Submit").click(function(){
		if($("#pword").val() == $('#yes').val()){
			window.location.href = 'page2.html'
			return false;
		}
  });
});