$(document).ready(function() {
	function update_seconds() {
		var seconds = new Date().getSeconds();
		var angle = seconds * 6;
		
		var zero_padded_seconds = (seconds < 10 ? '0' : '') + seconds;
		$('#seconds-value').html(zero_padded_seconds);
		
		var line_img = 'line-' + angle + '.gif';
		$('#seconds-hand').attr('src', line_img);
	}
	
	update_seconds();
	setInterval(update_seconds, 1000);
});
