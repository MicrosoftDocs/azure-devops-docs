var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		runId: "26"
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);
	
	//get all test results
    apiwriter.getJson('/test/runs/{runId}/results');

    //get all test results with workitems
    apiwriter.getJson('/test/runs/{runId}/results?detailsToInclude=WorkItems&$top=100');

    //get all test results with test iterations and workitems
    apiwriter.getJson('/test/runs/31/results?$top=100&detailsToInclude=WorkItems,Iterations');
	
	//get a test case result
	apiwriter.getJson('/test/runs/{runId}/results/100000');
	
	apiwriter.setEnableWrite(false);

    //create a test run
	apiwriter.postJson('/test/runs',
    		function (context, result) {
    		    return {
    		        "name": "Fabrikam Fiber test run ",
    		        "isAutomated": "true"
    		    }
    		}
    ,
    function (context, result) {
        context.newRunId = result.responseBody.id;
    }
    );

	apiwriter.setEnableWrite(true);

    //Add test results
	apiwriter.postJson('/test/runs/{newRunId}/results',
			function (context, result) {
			    return [
			                {
			                    "testCaseTitle": "VerifyWebsiteTheme",
			                    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteTheme",
			                    "priority": 1,
			                    "outcome": "Passed"
			                },
			                {
			                    "testCaseTitle": "VerifyWebsiteLinks",
			                    "automatedTestName": "FabrikamFiber.WebSite.TestClass.VerifyWebsiteLinks",
			                    "priority": 2,
			                    "outcome": "Failed",
			                    "associatedBugs": [{ "id": 30 }]
			                }
			    ]
			},
            function (context, result) {
                context.result1 = result.responseBody.value[0].id;
                context.result2 = result.responseBody.value[1].id;
            }
            );

    //Update test results
	apiwriter.patchJson('/test/runs/{newRunId}/results',
			function (context, result) {
			    return [
			                {
			                    "id": context.result1,
			                    "state": "Completed",
			                    "comment": "Website theme is looking good",
			                    "associatedBugs": [{ "id": 30 }]
			                },
			                {
			                    "id": context.result2,
			                    "state": "Completed",
			                    "comment": "Website links are failing because of incorrect container id",
			                    "failureType": "Known Issue"
			                }
			    ]
			}
            );

    //Bulk update test results
	apiwriter.patchJson('/test/runs/{newRunId}/results?resultIds={result1},{result2}',
			function (context, result) {
			    return {
			        "state": "Completed",
			        "comment": "All test results got completed successfully"
			    }
			}
            );

}
