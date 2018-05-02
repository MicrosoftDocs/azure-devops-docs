var apiwriter = require('apiwriter');
var _ = require('underscore');

var preferredRepositoryName = 'Fabrikam-Fiber-Git';

exports.getContext = function() {
    return {
        projectName: null, 
        repositoryId: null,
        repositoryName: null,
        baseVersion: null,
		baseVersionType: null,
        targetVersion: null,
		targetVersionType: null,
        top: 2,
        skip: 2
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    apiwriter.getJson('/git/repositories',
        function(context, result) {
            // For purposes of documenting, look for the preferred repo (fabrikam-fiber-inc)
            var repo = _.findWhere(result.responseBody.value, { "name": preferredRepositoryName });            
            // If not found, default to first repo returned
            if (_.isUndefined(repo)) {
                repo = result.responseBody.value[0];
            }

            context.repositoryId = repo.id;
            context.repositoryName = repo.name;
            context.projectName = repo.project.name;                
        });
	
	apiwriter.getJson('/git/repositories/{repositoryId}/refs/heads',
        function(context, result) {
            context.baseVersion = result.responseBody.value[0].name.substring(11);
            context.targetVersion = result.responseBody.value[1].name.substring(11);
        });
	
    apiwriter.setEnableWrite(true);
	
    // by repo ID 
    apiwriter.getJson('/git/repositories/{repositoryId}/diffs/commits?targetVersion={targetVersion}&baseVersion={baseVersion}');

    // by repo name
    //apiwriter.getJson('/git/{projectName}/repositories/{repositoryName}/diffs/commits?targetVersion={targetVersion}&baseVersion={baseVersion}');

   // In pages
    apiwriter.getJson('/git/repositories/{repositoryId}/diffs/commits?targetVersion={targetVersion}&baseVersion={baseVersion}' +
						'&$top={top}&$skip={skip}');
	
	apiwriter.setEnableWrite(false);
	
	// For commit diffs 
	apiwriter.getJson('/git/repositories/{repositoryId}/commits',
        function(context, result) {
			// hard-coded for now.
			context.baseVersion = 'c093714168cdd190c1e171a803e996d685454352';
			context.baseVersionType = 'commit';
            context.targetVersion = '2f271272a1548da5a6507b4a29f3af943094c6b4';
            context.targetVersionType = 'commit';
        });
		
	apiwriter.setEnableWrite(true);
		
	//apiwriter.getJson('/git/repositories/{repositoryId}/diffs/commits?baseVersionType=commit&baseVersion=c093714168cdd190c1e171a803e996d685454352&targetVersionType=commit&targetVersion=2f271272a1548da5a6507b4a29f3af943094c6b4');
	apiwriter.getJson('/git/repositories/{repositoryId}/diffs/commits?baseVersionType={baseVersionType}&baseVersion={baseVersion}&targetVersionType={targetVersionType}&targetVersion={targetVersion}');
}
