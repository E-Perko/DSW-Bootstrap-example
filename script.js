const password = ["1", "6", "6", "4", "2", "5"];
const attempt = ["0", "0", "0", "0", "0", "0"];

$(document).ready(function(){
	$("#end2").hide();
	
	$("#b1").click(function(){
		attempt.push("1");
		attempt.shift();
		check();
	});
	$("#b2").click(function(){
		attempt.push("2");
		attempt.shift();
		check();
	});
	$("#b3").click(function(){
		attempt.push("3");
		attempt.shift();
		check();
	});
	$("#b4").click(function(){
		attempt.push("4");
		attempt.shift();
		check();
	});
	$("#b5").click(function(){
		attempt.push("5");
		attempt.shift();
		check();
	});
	$("#b6").click(function(){
		attempt.push("6");
		attempt.shift();
		check();
	});
	
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

function check() {
	if ((attempt[0] == password[0]) && (attempt[1] == password[1]) && (attempt[2] == password[2]) && (attempt[3] == password[3]) && (attempt[4] == password[4]) && (attempt[5] == password[5])) {
		$("#end").text("You Win!");
		$("#end1").text("You found both clues and finished the escape room.");
		$("#end2").toggle();
	}
}

