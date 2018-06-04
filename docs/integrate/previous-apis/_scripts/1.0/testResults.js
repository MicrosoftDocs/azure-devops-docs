var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		projectName: "fabrikam-fiber-tfvc",
		runId: "4",
        planId: null,
        created2Id: null,
        projId: this.getConfig().getProjectId()
    };
};

var _getProj = function (context) {
    return {
        "id": context.projId,
        "name": context.projName
    }
}

exports.submitRequests = function()
{
    /*
	apiwriter.setEnableWrite(false);
	
	//get a runId
    apiwriter.getJson('/test/{projectName}/runs?includeRunDetails=true', 
		function(context, result) {
			context.runId = result.responseBody.value[0].id;
	});
	*/
	
    apiwriter.setEnableWrite(true);
	
	//get all test results
	apiwriter.getJson('/test/runs/{runId}/results');
	
	//get a test case result
	apiwriter.getJson('/test/runs/{runId}/results/100000');
	
	//get a list of iteration results
	apiwriter.getJson('/test/runs/{runId}/results/100000/iterations');
	
	//get a list of action results
	apiwriter.getJson('/test/runs/{runId}/results/100000/iterations/1/actionresults');
	
	//get a list of parameter results
	apiwriter.getJson('/test/runs/{runId}/results/100000/iterations/1/parameterresults');
}
