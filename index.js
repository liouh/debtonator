$(function() {
	$('#submit_button').click(function(){
		var data = {}; 
		$('#submit_form :input').each(function (){
			var $el = $(this)
			if($el.attr('name') !== undefined)
				data[$el.attr('name')] = $el.val();
		});

		saveStudent(data, function() {
            window.location.href="invite.html";
        });
	});
});
