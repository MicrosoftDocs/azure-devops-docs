var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
    	"requiredReviewerPolicyId": "fd2167ab-b0be-447a-8ec8-39368250530e",
    	"approvalCountPolicyId": "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
    	"buildPolicyId": "0609b952-1397-4640-95ec-e00a01b2c241",


    	"identity1": process.env.identity1,
    	"identity2": process.env.identity2,
    	"identity3": process.env.identity3,

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
       	}
	);

	apiwriter.postJson('/build/definitions?api-version=2.0-preview.2',
		{
			// this is a rather incomplete build definition, but we only need a valid ID, not a valid definition
			"name":"PolicyAPIDocsExample",
			"documentQuality":"definition"
		},
		function(context, result)
		{
			context.buildDefinitionId = result.responseBody.id
		}
	);

    apiwriter.setEnableWrite(true);
	apiwriter.postJson('/policy/configurations', 
		function(context, options) {
			return {
				isEnabled: true,
				isBlocking: true,
				type: { id: context.requiredReviewerPolicyId },
				settings: {
				    requiredReviewerIds: [context.identity1],
				    optionalReviewerIds: [context.identity2],
				    filenamePatterns: ['*/API*.cs'],
				    addedFilesOnly: false,
				    scope: [
				    	{
				    		repositoryId: null,
				    		refName: 'refs/heads/master',
				    		matchKind: 'exact'
				    	},
				    	{
				    		repositoryId: null,
				    		refName: 'refs/heads/releases/',
				    		matchKind: 'prefix'
				    	}
				    ]
			    }
			}
		},
		function(context, result)
		{
			context.configurationId = result.responseBody.id;
			context.configurationRevision = result.responseBody.revision
		}
	);

	apiwriter.putJson('/policy/configurations/{configurationId}', 
		function(context, options) {
			return {
				isEnabled: true,
				isBlocking: true,
				type: { id: context.requiredReviewerPolicyId },
				settings: {
				    requiredReviewerIds: [context.identity1, context.identity2],
				    optionalReviewerIds: [context.identity3],
				    filenamePatterns: ['*/API*.cs', 'sql/tables/*'],
				    addedFilesOnly: false,
				    scope: [
				    	{
				    		repositoryId: null,
				    		refName: 'refs/heads/master',
				    		matchKind: 'exact'
				    	},
				    	{
				    		repositoryId: null,
				    		refName: 'refs/heads/releases/',
				    		matchKind: 'prefix'
				    	},
				    	{
				    		repositoryId: context.repositoryId,
				    		refName: 'refs/heads/adventureworks',
				    		matchKind: 'exact'
				    	}
				    ]
			    }
			}
		}
	);

	apiwriter.postJson('/policy/configurations', 
		function(context, options) {
			return {
				isEnabled: true,
				isBlocking: false,
				type: { id: context.approvalCountPolicyId },
				settings: {
				    minimumApproverCount: 1,
				    creatorVoteCounts: false,
				    scope: [
				    	{
				    		repositoryId: null,
				    		refName: 'refs/heads/master',
				    		matchKind: 'exact'
				    	}
				    ]
			    }
			}
		},
		function(context, result)
		{
			context.countConfigurationId = result.responseBody.id;
		}
	);

	apiwriter.postJson('/policy/configurations', 
		function(context, options) {
			return {
				isEnabled: true,
				isBlocking: false,
				type: { id: context.buildPolicyId },
				settings: {
				    buildDefinitionId: context.buildDefinitionId,
				    scope: [
				    	{
				    		repositoryId: null,
				    		refName: 'refs/heads/features/',
				    		matchKind: 'prefix'
				    	}
				    ]
			    }
			}
		},
		function(context, result)
		{
			context.buildConfigurationId = result.responseBody.id;
		}
	);

	apiwriter.getJson('/policy/configurations/{configurationId}');
	apiwriter.getJson('/policy/configurations/{configurationId}/revisions');
	apiwriter.getJson('/policy/configurations');
	apiwriter.getJson('/policy/configurations?$top={top}&$skip={skip}');
	apiwriter.getJson('/policy/configurations/{configurationId}/revisions?$top={top}&$skip={skip}');
	apiwriter.getJson('/policy/configurations/{configurationId}/revisions/{configurationRevision}');

	apiwriter.deleteJson('/policy/configurations/{configurationId}', null)

    apiwriter.setEnableWrite(false);

	// clean up
    apiwriter.deleteJson('/policy/configurations/{buildConfigurationId}', null);
    apiwriter.deleteJson('/policy/configurations/{countConfigurationId}', null);
    apiwriter.deleteJson('/build/definitions/{buildDefinitionId}?api-version=2.0-preview.2', null);
}
