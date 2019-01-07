var apiwriter = require('apiwriter');

/*
 * Notes for this script
 * 
 * Because these APIs are project-scoped, the value for cfgApisUrl should be project-scoped, for example: 
 *
 *  set cfgApisUrl=https://fabrikam-fiber-inc:8080/DefaultCollection/Fabrikam-Fiber-TFVC/_apis
 *
*/ 

exports.getContext = function() {
    return {
        planId: null
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);
    	
	//get all test plans
    apiwriter.getJson('/test/plans',
        function(context, result) {
            context.planId = result.responseBody.value[0].id;
    });
    
    //get all test plans (with details)
    apiwriter.getJson('/test/plans?includePlanDetails=true',
        function(context, result) {
            context.planId = result.responseBody.value[0].id;
    });
    
     //get just active plans
    apiwriter.getJson('/test/plans?filterActivePlans=true',
        function(context, result) {
            context.planId = result.responseBody.value[0].id;
    });   
    
    //get top 3
    apiwriter.getJson('/test/plans?$top=3',
        function(context, result) {
            context.planId = result.responseBody.value[0].id;
    });   
		
	//get a specific test plan
	apiwriter.getJson('/test/plans/{planId}');

	//create a test plan
	apiwriter.postJson('/test/plans',
        function(context, result) {
            return { "name": "New Test Plan" }
        },
        function(context, result) {
            context.planId = result.responseBody.id;
        }
    );

	//create a test plan (with description)
	apiwriter.postJson('/test/plans',
        function(context, result) {
            return { "name": "New Test Plan 2", "description": "Here is a description for my new test plan." }
        },
        function(context, result) {
            context.planId = result.responseBody.id;
        }
    );        
        
    //create a test plan (with start and end dates)
	apiwriter.postJson('/test/plans',
        function(context, result) {
            return { "name": "New Test Plan 3", "description": "Here is a description for my new test plan.", "startDate": "2014-10-25","endDate": "2014-11-14" }
        },
        function(context, result) {
            context.planId = result.responseBody.id;
        }
    );  
    
	//create a test plan (in an area and iteration)
	apiwriter.postJson('/test/plans',
        function(context, result) {
            return { "name": "New Test Plan 4", "area": {
                "name": "Fabrikam-Fiber-TFVC\\Quality assurance"
              },
              "iteration": "Fabrikam-Fiber-TFVC\\Release 1" }
        },
        function(context, result) {
            context.planId = result.responseBody.id;
        }
    );        

	//update a test plan (name)
	apiwriter.patchJson('/test/plans/{planId}',
        function(context, result) {
            return { "name": "Renamed New Test Plan 4" }
        },
        function(context, result) {
            context.planId = result.responseBody.id;
        }
    );
    
    //delete a test plan
    //apiwriter.deleteJson('/test/plans/{planId}', null);
}
