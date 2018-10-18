'use strict';


// console.log('Loading function123456');

exports.handler = function(event, context, callback) {

  let response = "Sorry, I am in the initial version so cann't understand: ";
  if(event.messages[0].unstructured.text ==="hello"){
      response = "nice to meet you";
  } else if(event.messages[0].unstructured.text ==="goodbye"){
      response ="bye!"
  } else if(event.messages[0].unstructured.text ==="chatbot?"){
    response = "Yes! I am chatbot!"
  } else {
    response += event.messages[0].unstructured.text;
  }
  event.messages[0].unstructured.text = response;

  
  // Return a greeting to the caller
  callback(null, 
     // "response": response,
        event
  ); 
};
