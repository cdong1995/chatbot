// var apigClient = apigClientFactory.newClient();
var apigClient = apigClientFactory.newClient({
    apiKey: 'NYAlEwnNdj7LFk4Gejp0ma454JIQ6zAp3NTPkbwX'
});
$('#submit').on('click', function(event){
	event.preventDefault();
	var body = {
		"messages": [
			{
				"type": "string",
				"unstructured": {
				"id": "0",
				"text": $('#msg').val(),
				"timestamp": "10/14/2018"
				}
			}
		]
	};
	// console.log($('#msg').val())
	apigClient.chatbotPost(null, body)
	    .then(function(result){
	        //This is where you would put a success callback
	        // console.log('it is ok!')
	        // console.log(result)
	        
	        // $('#res').append('<p>' + result.messages.unstructured.text + '</p>')
	        // document.getElementById('res').appendChild(img)
	        $('#res').append('<p>' + result.data.messages[0].unstructured.text + '</p>')
	    }).catch( function(result){
	        //This is where you would put an error callback
	        console.log('Wrong!')
	        // console.log(result)
	        // alert("Error!")
	    });
	$('#msg').val('')
})
