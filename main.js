
$(document).ready(function(){
	var li_items = $('ul li'); 

	li_items.each(function(){
		var left = $(this).attr('data-left'), delay = $(this).attr('data-delay');
		
		$(this).css({
			"left" : left , 
			"transition-delay" : delay
		});
	});

//time out function is just for demo
	setTimeout(function(){
		li_items.css("left","0em");
	},500);
});