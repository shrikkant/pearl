// JavaScript Document
$(document).ready(function(){
	$(".questions_container").corner("5px")
	if ($.browser.msie) {
		// $(".questions_container").boxShadow(2, 2, 10, "#CCC");
	} else {
		$(".questions_container").css("box-shadow","2px 2px 10px #CCC");
		$(".questions_container").css("-o-box-shadow","2px 2px 10px #CCC");
		$(".questions_container").css("-moz-box-shadow","2px 2px 10px #CCC");
		$(".questions_container").css("-webkit-box-shadow","2px 2px 10px #CCC");
	}
	$(".questions_container h2, .questions_container h3").corner("5px");
	
	$(".questions_container.colapsable h2").hover(
			function(){
				$(this).parent().addClass('over');
			},
			function(){
				$(this).parent().removeClass('over');
			}
	);
	
	$(".questions_container.colapsable h2").toggle(
			function(){
				$(this).parent().addClass('selected');
				$(".questions_container_inner", $(this).parent()).show("slow");
			},
			function(){
				$(this).parent().removeClass('selected');
				$(".questions_container_inner", $(this).parent()).hide("slow");
			}
	);

	$(".questions_container.colapsable .questions_container_inner").hide();

	var active_color = '#999'; // Colour of user provided text
	var inactive_color = '#CCC'; // Colour of default text

	$("#search_content INPUT.inputText").css("color", inactive_color);
	  var default_values = new Array();
	  $("#search_content INPUT.inputText").focus(function() {
		if (!default_values[this.id]) {
		  default_values[this.id] = this.value;
		}
		if (this.value == default_values[this.id]) {
		  this.value = '';
		  this.style.color = active_color;
		}
		$(this).blur(function() {
		  if (this.value == '') {
			this.style.color = inactive_color;
			this.value = default_values[this.id];
		  }
		});
	  });	
	  
	$(".form_container INPUT.email").css("color", inactive_color);
	  var default_values2 = new Array();
	  $(".form_container INPUT.email").focus(function() {
		if (!default_values[this.id]) {
		  default_values2[this.id] = this.value;
		}
		if (this.value == default_values2[this.id]) {
		  this.value = '';
		  this.style.color = active_color;
		}
		$(this).blur(function() {
		  if (this.value == '') {
			this.style.color = inactive_color;
			this.value = default_values2[this.id];
		  }
		});
	  });	
	  
/*	  $("SELECT.select_jump").sSelect();
*/	  $("SELECT.select_jump").change(function(){
	  	$.scrollTo("#"+$(this).val(),500);
		if (!$("#"+$(this).val()+" .questions_container_inner").is(":visible")){
			$("#"+$(this).val()+" h2").click();
		}
	  });
/*	 */

		$(".hideshowpanel").hide();
		$("SELECT.selectTo").change(function(){
			$(".hideshowpanel").hide("slow");
			$("#"+$(this).val()).show("slow");
		});
		
		$("#sales").show();
		
});