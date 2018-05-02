var apiwriter = require('apiwriter');

/* When running with OnPrem, ensure that Basic Auth is set up in the virtual directory itself.
 * Set these environment variables when running writer tool for plans.js 
 * set cfgApisUrl=http://localhost:8080/tfs/DefaultCollection/agile/_apis
 * set cfgUserName=<Domain\UserName>
 * set cfgPassword=<PasswordInPlainText>
 * set cfgApiVersion=3.0-preview.1
 * set cfgScript=plans.js
 * set cfgScriptPath =../../Content.VS/vscom/integrate/api/_scripts/3.0
 */

exports.getContext = function () {
    return {
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
     apiwriter.getJson('/work/plans');
                
    // Keep it clean!
    apiwriter.postJson('/work/plans', function (context, result) {
            return {
                "id": result.id
            };
    });
    
    apiwriter.getJson('/work/plans/', 
		        function (context, result) {
		        	context.planId = result.responseBody.value[0].id;
		        	context.planName = result.responseBody.value[0].name;
		        });
    
	// By id
    apiwriter.getJson('/work/plans/{planId}');

    // By name
    apiwriter.getJson('/work/plans/{planName}');
    
    // Remove a plan from a project
    apiwriter.deleteJson('/work/plans/{planId}', null);
	
}
