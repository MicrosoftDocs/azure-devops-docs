var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		projectName:"Fabrikam",        
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
	
	//create a new test run
	apiwriter.postJson('/test/runs',
			function(context, result) {
				return {
				    "name": "NewTestRun",
				    "isAutomated": "true"
				}
			},
			function(context, result) {
				context.newRunId = result.responseBody.id;
			}
			);
	

	apiwriter.setEnableWrite(false);

    //Add test results
	apiwriter.postJson('/test/runs/{newRunId}/results',
			function (context, result) {
			    return [
			                {
			                    "testCaseTitle": "VerifyWebsiteTheme",
			                    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme",
			                    "testCasePriority": 1,
			                    "outcome": "Passed"
			                },
			                {
			                    "testCaseTitle": "VerifyWebsiteLinks",
			                    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks",
			                    "testCasePriority": 2,
			                    "outcome": "Failed"
			                }
			    ]
			},
            function (context, result) {
                context.result1 = result.responseBody.value[0].id;
                context.result2 = result.responseBody.value[1].id;
            }
            );

	apiwriter.setEnableWrite(true);

	//update test run
	apiwriter.patchJson('/test/runs/{newRunId}',
			function(context, result) {
				return {
					"name": "NewTestRun2",
					"comment": "This test run is doomed"
				}
			});


	//get all test runs
    apiwriter.getJson('/test/runs?includeRunDetails=true', 
		function(context, result) {
			context.runId = result.responseBody.value[0].id;
	});
	
	//get a test run
    apiwriter.getJson('/test/runs/{newRunId}');
	
	//get test run statistics
    apiwriter.getJson('/test/runs/{newRunId}/statistics');

    //get runs by query
    apiwriter.postJson('/test/runs/query?$top=2',
	function (context, result) {
	   return {
	           "query": "Select * From TestRun"
		    }
	});
			
	//delete test run
	apiwriter.deleteJson('/test/runs/{newRunId}', null);   

    apiwriter.setEnableWrite(false);

    apiwriter.postJson('/test/runs',
    		function (context, result) {
    		    return {
    		        "name": "NewTestRun with message logs",
    		        "isAutomated": "true"
    		    }
    		}
        ,
       function (context, result) {
          context.newRunIdWithMessageLogs = result.responseBody.id;
       }
     );

     apiwriter.setEnableWrite(true);

     apiwriter.patchJson('/test/runs/{newRunIdWithMessageLogs}',
    		function (context, result) {
    		    return {
    		        "logEntries": [{ "entryId": 1, "dateCreated": '2015-05-17 05:00:00', "message": "Test run started" }, { "entryId": 2, "dateCreated": '2015-05-17 05:01:00', "message": "Test run completed" }],
    		        "state": "Completed"
    		    }
    		}
     );

     apiwriter.getJson('/test/runs/{newRunIdWithMessageLogs}/messageLogs');
}
