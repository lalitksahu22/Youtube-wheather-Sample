// You can find your project ID in your Dialogflow agent settings
const projectId = 'chat-156f6'; //https://dialogflow.com/docs/agents#settings
const sessionId = 'quickstart-session-id';
const languageCode = 'en-US';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();

// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// The text query request.
var createRequest=function(query){
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: query,
            languageCode: languageCode,
          },
        },
      };
    return request;
}


// Send request and log result
module.exports= sendToDialogflow=function(query){
return sessionClient
  .detectIntent(createRequest(query))
  .then(responses => {

    console.log("*******************************")
    console.log("node backend dialogflow received response");
    console.log(JSON.stringify(responses))
    console.log("*******************************")

   
   
    
    const result = responses[0].queryResult;
   
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    return result.fulfillmentText;
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

}

