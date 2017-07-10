var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		projectName: "Fabrikam",
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
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);
    
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

    //Update test results
    apiwriter.patchJson('/test/runs/{newRunId}/results',
			function (context, result) {
			    return [
			                {
			                    "testResult": {"id": context.result1},
			                    "state": "Completed",
                                "comment": "Website theme is looking good"
			                },
			                {
			                    "testResult": { "id": context.result2},
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
			    return  {
			        "state": "Completed",
                    "comment": "All test results got completed successfully"
			       }
			}
            );

    //get results by query
    apiwriter.postJson('/test/results/query?includeResultDetails=true&$top=2',
		function (context, result) {
		    return {
		        "query": "Select * From TestResult Where TestRunId = " + context.newRunId
		    }
		});

    //get a test case result
    apiwriter.getJson('/test/runs/{newRunId}/results/100000');
	
    //get a list of iteration results
    apiwriter.getJson('/test/runs/{newRunId}/results/100000/iterations');
	
    //get a list of action results
    apiwriter.getJson('/test/runs/{newRunId}/results/100000/iterations/1/actionresults');
	
    //get a list of parameter results
    apiwriter.getJson('/test/runs/{newRunId}/results/100000/iterations/1/parameterresults');
}
