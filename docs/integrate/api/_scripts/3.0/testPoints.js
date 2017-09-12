var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        planId: "5",
		suiteId: "6",
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
	
	//get few test points
	apiwriter.postJson('/test/points',
    		function (context, result) {
    		    return {
					PointsFilter: {
					TestcaseIds: [7,8,9]
					}
				}
    		}
    ,
    function (context, result) {
        context.newRunId = result.responseBody.id;
    }
    );	

    // get test points with Configurations filter
	apiwriter.postJson('/test/points',
    		function (context, result) {
    		    return {
					PointsFilter: {
					TestcaseIds: [7,8,9],
					ConfigurationNames: [
						"Windows 10",
					]
					}
				}
    		}
    ,
    function (context, result) {
        context.newRunId = result.responseBody.id;
    }
    );

    // // get test points with tester filter
	apiwriter.postJson('/test/points',
    		function (context, result) {
    		    return {
					PointsFilter: {
					TestcaseIds: [7,8,9],
					Testers: [
						{DisplayName: "VSEQA1"},
					]
					}
				}
    		}
    ,
    function (context, result) {
        context.newRunId = result.responseBody.id;
    }
    );
	

    // // get test points a page at a time
	apiwriter.postJson('/test/points?$skip={skip}&$top={top}',
    		function (context, result) {
    		    return {
					PointsFilter: {
					TestcaseIds: [7,8,9]
					}
				}
    		}
    ,
    function (context, result) {
        context.newRunId = result.responseBody.id;
    }
    );

}
