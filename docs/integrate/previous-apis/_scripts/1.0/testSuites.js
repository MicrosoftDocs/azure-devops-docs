var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        projectName: "fabrikam-fiber-tfvc",
		planId: "1",
		suiteId: "1",
		staticSuiteId: "8",
		testcaseId: "39",
        created2Id: null,		
        projId: this.getConfig().getProjectId(),
		requirementIds : new Array()
    };
};


exports.populateArray = function (context) {
    context.requirementIds.push(41);
    return {
        requirementIds : context.requirementIds 
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
// go find the projName without writing
    apiwriter.setEnableWrite(false);
	
	//get the project name
    apiwriter.getJson('/projects',
        function(context, result) {
            context.projectName = result.responseBody.value[0].name;
        }
    );
	*/
	//get all test plans
    /*apiwriter.getJson('/test/{projectName}/plans',
        function(context, result) {
            context.planId = result.responseBody.value[0].id;
    });
	*/
	//apiwriter.setEnableWrite(true);
	
	/*
	//get all test suites
	apiwriter.getJson('/test/plans/{planId}/suites',
	     function(context, result) {
		      context.suiteId = result.responseBody.value[0].id;
	});
	
	//get a test suite
	apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}');

	 //adding test cases to suite
	 apiwriter.postJson('/test/plans/{planId}/suites/{suiteId}/testcases/39,40',
		function(context,result) {
			return {
			
			}
		});
	

	//get all test cases of a suite
    apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/testcases',
        function(context, result) {
            context.testcaseId = result.responseBody.value[0].id;
	});
	
	//get a test case within a suite
	apiwriter.getJson('/test/plans/{planId}/suites/{suiteId}/testcases/{testcaseId}');
	
	//create a static test suite
	apiwriter.postJson('/test/plans/{planId}/suites/{suiteId}',
	     function(context, result) {
		 return {
			 "suiteType": "StaticTestSuite", 
			 "name": "NewTestSuite"
		   }		 
	   },
	   function(context, result) {
	       context.staticSuiteId = result.responseBody.id;
	   }
	 );	 
	 
	 //renaming a test suite
	apiwriter.patchJson('/test/plans/{planId}/suites/{staticSuiteId}',
		function(context, result) {
			return {
				"name": "RenamedTestSuite"
			}
		});
	
	//create a dynamic test suite
	apiwriter.postJson('/test/plans/{planId}/suites/{suiteId}',
	     function(context, result) {
		 return {
			 "suiteType": "DynamicTestSuite", 
			 "name": "AllTestCases",
			 "queryString": "SELECT [System.Id],[System.WorkItemType],[System.Title],[Microsoft.VSTS.Common.Priority],[System.AssignedTo],[System.AreaPath] FROM WorkItems WHERE [System.WorkItemType] IN GROUP 'Microsoft.TestCaseCategory'"
		 },
		  function(context, result) {
			  context.suiteId = result.responseBody.id;
		  }

			
	 });	
	 */
	 
	 /*
	//creating requirement based suite
	 apiwriter.postJson('/test/{projectName}/plans/{planId}/suites/{suiteId}',
	     function(context, result) {
			 return {
				 "suiteType": "RequirementTestSuite", 
				 "requirementIds": exports.populateArray(context).requirementIds
			 }
		 }
	 );	*/

	 /*
	 //moving a test suite
	 apiwriter.patchJson('/test/plans/{planId}/suites/{suiteId}',
		function(context, result) {
			return {
				"parent": { 
				'id': context.staticSuiteId
				}			
			}
	});	 
	 
	 //deleting a test suite
	 apiwriter.deleteJson('/test/plans/{planId}/suites/{staticSuiteId}', null);
	 
	 //removing test cases from suite
	 apiwriter.deleteJson('/test/plans/1/suites/{suiteId}/testcases/39', null);
	 */
	
	 apiwriter.setEnableWrite(true);

	 //deleting test case
	 apiwriter.deleteJson('/test/testcase/5', null);
}
