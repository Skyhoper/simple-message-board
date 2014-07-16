var parseID="YRnmujI4N7IeMvgjUmy1UV2nFtmlOGtR2RVKtgMW";
var parseRestKey="KJNBeL7cr7XWhNgNjXcdvQqbpPjVSzpDtv3TDnBQ";

$(document).ready(function() {
	getMessages();
	$("#send").click(function(){
		var username = $('input[name=username]').attr('value');
		var message = $('input[name=message]').attr('value');
		console.log(username)
		console.log('!')
		$.ajax({
			url: 'https://api.parse.com/1/classes/MessageBoard',
			headers: {
				'X-Parse-Application-Id': parent