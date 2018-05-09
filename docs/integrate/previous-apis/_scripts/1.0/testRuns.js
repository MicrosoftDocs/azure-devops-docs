var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		projectName:"fabrikam-fiber-tfvc",
        planId: "1",
		runId: null,
        created2Id: null,
		pointIds: new Array(),
        projId: this.getConfig().getProjectId()
    };
};


exports.populateArray = function (context) {
    context.pointIds.push(1);
    return{
        pointIds : context.pointIds 
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
    
    apiwriter.setEnableWrite(true); 
	
	//get all test runs
    apiwriter.getJson('/test/runs?includeRunDetails=true', 
		function(context, result) {
			context.runId = result.responseBody.value[0].id;
	});
	
	//get a test run
	apiwriter.getJson('/test/runs/{runId}');	
	
	//get test run statistics
	apiwriter.getJson('/test/runs/{runId}/statistics');
	
	//create a new test run
	apiwriter.postJson('/test/runs',
			function(context, result) {
				return {
					"name": "NewTestRun",
					"plan": {
								"id": context.planId
							},
					'pointIds': exports.populateArray(context).pointIds
				}
			},
			function(context, result) {
				context.newRunId = result.responseBody.id;
			}
			);
	
	//update test run
	apiwriter.patchJson('/test/runs/{runId}',
			function(context, result) {
				return {
					"name": "NewTestRun2",
					"comment": "This test run is doomed"
				}
			});
			
	//delete test run
	apiwriter.deleteJson('/test/runs/{newRunId}', null);
}
