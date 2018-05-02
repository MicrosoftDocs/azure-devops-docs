var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
    	"requiredReviewerPolicyId": "fd2167ab-b0be-447a-8ec8-39368250530e",
    	"approverCountPolicyId": "FA4E907D-C16B-4A4C-9DFA-4906E5D171DD",

    	"identity1": process.env.identity1,
    	"identity2": process.env.identity2,
    	"identity3": process.env.identity3,

    	// should probably detect these
    	"top": 1,
    	"skip": 1
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    apiwriter.getJson('/git/repositories',
    	function(context, result)
    	{
    		context.repositoryId = result.responseBody.value[0].id;
			context.projectId = result.responseBody.value[0].project.id;
       	}
	);

	apiwriter.getJson('/git/repositories/{repositoryId}/refs/heads',
		function(context, result)
		{
			result.responseBody.value.forEach(function(item)
			{
				if(item.name !== "refs/heads/master")
				{
					context.sourceRefName = item.name;
				}
			});
		}
	);

	apiwriter.postJson('/policy/configurations',
		function(context, options) {
			return {
				type: {id: context.approverCountPolicyId},
				isEnabled: true,
				isBlocking: true,
				settings: {
					minimumApproverCount: 1,
					scope: [{
						repositoryId: context.repositoryId,
						refName: "refs/heads/master",
						matchKind: "exact"
					}]
				}
			}
		},
		function(context, result)
		{
			context.policyId = result.responseBody.id;
			context.policyRevision = result.responseBody.revision;
		}
	);

	apiwriter.postJson('/git/repositories/{repositoryId}/pullrequests',
		function(context, options)
		{
			return {
				sourceRefName: context.sourceRefName,
				targetRefName: "refs/heads/master",
				title: "demo pull request",
				description: "demo pull request",
				reviewers: []
			}
		},
		function(context, result)
		{
			context.pullRequestId = result.responseBody.pullRequestId;
			context.artifactId = 'vstfs:///CodeReview/CodeReviewId/' + context.projectId + '%2f' + context.pullRequestId;
		}
	);

    apiwriter.setEnableWrite(true);

    apiwriter.getJson('/policy/configurations/{policyId}/evaluations');
    apiwriter.getJson('/policy/configurations/{policyId}/evaluations?$top={top}&$skip={skip}');

    apiwriter.getJson('/policy/configurations/{policyId}/revisions/{policyRevision}/evaluations');
    apiwriter.getJson('/policy/configurations/{policyId}/revisions/{policyRevision}/evaluations?$top={top}&$skip={skip}');

    apiwriter.getJson('/policy/evaluations?artifactId={artifactId}');

    apiwriter.setEnableWrite(false);
    apiwriter.patchJson('/git/repositories/{repositoryId}/pullrequests/{pullRequestId}', {status: "Abandoned"});
    apiwriter.deleteJson('/policy/configurations/{policyId}', null);
}
