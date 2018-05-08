var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        planId: "1",
		suiteId: "1",
		projectName:"fabrikam-fiber-tfvc",
		testerName:"Jamal Hartnett",
		pointId: null,
        created2Id: null,
        projId: this.getConfig().getProjectId(),
        fields: "System.Title,System.Reason",
        configuration: "Windows 8",
        testcaseId: "39",
        testpointIds: "1,2",
        top: "1",
        skip: "1"
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
	
	//get all test points
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points',
		   function (context, result) {
		       context.pointId = result.responseBody.value[0].id;
		   });

    // with work item fields
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points?witFields={fields}');

    // by configuration
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points?configuration={configuration}');

    // by test case
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points?testcaseid={testcaseId}');

    // specific points
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points?testPointIds={testpointIds}');

    // with details
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points?includePointDetails=true');

    // a page at a time
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points?$skip={skip}&$top={top}');

	//get a particular test point	
	apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points/{pointId}');	
	
    // with fields
	apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/points/{pointId}?witFields={fields}');

    // reset test points to active
	apiwriter.patchJson('/test/plans/{planId}/suites/{suiteId}/points/{pointId}',
	       function (context, result) {
	           return {
	               "resetToActive": "true"
	           }
	       });

    //update test points outcome
	apiwriter.patchJson('/test/plans/{planId}/suites/{suiteId}/points/{pointId}',
	       function(context, result) {
		        return {
					 "outcome":"Passed"
		   	    } 
	});	
	
	//update test points -set tester
	apiwriter.patchJson('/test/plans/{planId}/suites/{suiteId}/points/{pointId}',
	       function(context, result) {
		        return {
					 "tester": {
						"displayName" : context.testerName
					 }
		   	    } 
	});	
}
