$(document).ready(function() {

$('#button').click(translate);

function translate() {
	console.log("in translate function");
	
	var language = document.getElementById("Lan");
	var textInput = document.getElementById("text");
	var textOutput= document.getElementById("textOutput");

	$.ajax({
  		type: 'POST',
  		url: "https://lc-api.sdl.com/translate",
  		data: JSON.stringify({
    			to: language.value,
    			from: 'eng',
    			text: textInput.value
  		}),
  		headers: {
    			Authorization: 'LC apiKey=[insert api key here]'
  		},
  		dataType: 'json',
  		contentType: 'application/json'
	}).done(function(response) {
  		console.log(response);
		textOutput.value = response.translation;
	});
	console.log("done with the ajax request");
}

});
