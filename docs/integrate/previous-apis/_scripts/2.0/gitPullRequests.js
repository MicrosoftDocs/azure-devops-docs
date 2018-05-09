var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		pullRequestId: null,
		repositoryId: null,
		devBranchName: 'refs/heads/npaulk/feature',
		masterBranchName: 'refs/heads/master',
		initialReviewerId: '3b5f0c34-4aec-4bf4-8708-1d36f0dbc468', /* christie church on fabrikam-fiber-inc */
		initialReviewerUserName: 'fabrikamfiber1@hotmail.com',
		initialReviewerPassword: process.env.cfgPassword,
		additionalReviewerId: '19d9411e-9a34-45bb-b985-d24d9d87c0c9', /* johnny mcleaod */
		createdBy: null,
		lastMergeSourceCommit: null,
		top: null,
		skip: null
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);

    //get the first repository
    apiwriter.getJson('/git/repositories',
        function(context, result) {
            context.repositoryId = result.responseBody.value[0].id;
			context.friendlyName = result.responseBody.value[0].name;
            context.projectName = result.responseBody.value[0].project.name;
        });

    apiwriter.setEnableWrite(true);

    //create a pull request 
    apiwriter.postJson('/git/repositories/{repositoryId}/pullRequests',
        function(context, result) {
            return {"sourceRefName": context.devBranchName, "targetRefName": context.masterBranchName, "title": "New fix for hello world class", 
			 "description": "Example pull request showing review and integration of a simple change.", 
			 "reviewers": [ { "id": context.initialReviewerId } ] };
        },
        function(context, result) {
            context.pullRequestId = result.responseBody.pullRequestId;
            context.creatorId = result.responseBody.createdBy.Id;
			context.lastMergeSourceCommit = result.responseBody.lastMergeSourceCommit;
        }
    );

    //get the list of pull requests
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests');

    //get the list of pull requests by target branch
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests?targetRefName=refs/heads/master');
		
    //get a detailed pull request
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}');
	
    //get reviewers
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers');	
	
    // add a reviewer
    apiwriter.putJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{additionalReviewerId}',
       function(context, result) {
            return { "vote": 0 } 
        },
        function(context, result) {
        }
    );
	
    //get a reviewer
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{additionalReviewerId}');

    // delete a reviewer
    apiwriter.deleteJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{additionalReviewerId}', null);
	
    // update a vote
    apiwriter.putJsonEx('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{initialReviewerId}',
       function(context, result) {
            return { "vote": 10 }; 
        },
		function(context, options) {
		    //options.headers["Authentication"] = "Basic " + new Buffer(context.initialReviewerUserName + ":" + process.env.cfgPassword).toString('base64');
			options.auth.username = context.initialReviewerUserName;
		},
        function(context, result) {
        }
    );

    // get iterations
    apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations');

    // approve/complete
    apiwriter.patchJsonEx('/git/repositories/{repositoryId}/pullRequests/{pullRequestId}',
       function(context, result) {
            return {"status":"completed", "lastMergeSourceCommit": context.lastMergeSourceCommit }
        },
		function(context, options) {
		    //options.headers["Authentication"] = "Basic " + new Buffer(context.initialReviewerUserName + ":" + process.env.cfgPassword).toString('base64');
			options.auth.username = process.env.cfgUserName;
		},
        function(context, result) {
        }
    );
	
	//get the list of pull requests by status
	apiwriter.getJson('/git/repositories/{repositoryId}/pullRequests?status=completed');
};

