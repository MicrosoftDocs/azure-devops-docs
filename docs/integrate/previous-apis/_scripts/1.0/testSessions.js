var apiwriter = require('apiwriter');

/*
 * Notes for this script
 * 
 * Because these APIs are team-scoped, the value for cfgApisUrl should be team-scoped, for example: 
 *
 *  set cfgApisUrl=https://fabrikam-fiber-inc:8080/DefaultCollection/Fabrikam-Fiber-TFVC/Fabrikam-Fiber-TFVC Team/_apis
 *
*/ 

exports.getContext = function() {
    return {
        sessionId: null
    };
};

exports.submitRequests = function()
{
	apiwriter.setEnableWrite(true);
	
	//get all test sessions
	apiwriter.getJson('/test/session',
	     function(context, result) {
		      
	});


	
	//create a test session
	apiwriter.postJson('/test/session',
        function(context, result) {
            return { 
                      "Title": "Sample TestSession",
                      "Area": {"Name": "Agile"}, }
        },
        function(context, result) {
            context.sessionId = result.responseBody.Id;
        }); 
 
       //update a test session (state)
	apiwriter.patchJson('/test/session',
        function(context, result) {
            return {   
                      "Title": "Sample TestSession",
                      "Area": {"Name": "Agile"},
                       "id":4,
                      "Comment":"Test session comment",
                      "State":4,
   
                      "Revision":1}
        },
        function(context, result) {
            context.sessionId = result.responseBody.Id;
        }
    );
}
