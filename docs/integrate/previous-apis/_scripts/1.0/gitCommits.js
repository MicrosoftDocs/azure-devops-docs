var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        commitId: null,
        repositoryId: null,
        committer: null,
        author: null,
        fromDate: null,
        toDate: null,
        itemPath: "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml",
        repositoryName: null,
        projectName: null,
        pushId: null,
        branch: "develop",
        toBranch: "master",
        skip: 1,
        top: 2,
        includeChanges: 5
    };
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);

    //get the first repository
    apiwriter.getJson('/git/repositories',
        function(context, result) {
            context.repositoryId = result.responseBody.value[0].id;
            context.repositoryName = result.responseBody.value[0].name;
            context.projectName = result.responseBody.value[0].project.name;
        });

    apiwriter.setEnableWrite(true);

    //get the list of commits
    apiwriter.getJson('/git/repositories/{repositoryId}/commits',
        function(context, result) {
	    var firstCommit = result.responseBody.value.length - 1;
            context.commitId = result.responseBody.value[firstCommit].commitId;
			context.committer = result.responseBody.value[firstCommit].committer.name;
			context.author = result.responseBody.value[firstCommit].author.name;
			context.fromDate = result.responseBody.value[firstCommit].committer.date;
			context.toDate = result.responseBody.value[firstCommit].committer.date;
        });

    //get a list of commits project repository Name
    //apiwriter.getJson('/git/{projectName}/repositories/{repositoryName}/commits');

    //get a filtered list of commits
    apiwriter.getJson('/git/repositories/{repositoryId}/commits?user={committer}');
    apiwriter.getJson('/git/repositories/{repositoryId}/commits?committer={committer}');
    apiwriter.getJson('/git/repositories/{repositoryId}/commits?author={author}');
    apiwriter.getJson('/git/repositories/{repositoryId}/commits?fromDate={fromDate}&toDate={toDate}');

    //paging example
	apiwriter.getJson('/git/repositories/{repositoryId}/commits?$skip={skip}&$top={top}');

    //get the details of the first commit
    apiwriter.getJson('/git/repositories/{repositoryId}/commits/{commitId}?changeCount=10',
		function(context, result) {
			context.skip = result.responseBody.changes.length;
			context.pushId = result.responseBody.push.pushId;
		});

    //get some more changes from the first commit
	apiwriter.getJson('/git/repositories/{repositoryId}/commits/{commitId}/changes?top={top}&skip={skip}');
		
	//single commit with path filter
	apiwriter.getJson('/git/repositories/{repositoryId}/commits?itemPath={itemPath}');

/* TODO: Fix this when proper project-scoped routes are live (M73) 	
	//single commit with friendly repository name
	apiwriter.getJson('/git/{projectName}/repositories/{repositoryName}/commits/{commitId}'); */

	//single commit
	apiwriter.getJson('/git/repositories/{repositoryId}/commits/{commitId}');

	//commits from a push
	apiwriter.getJson('/git/repositories/{repositoryId}/pushes/{pushId}/commits');

    //commits in a version
	apiwriter.postJson('/git/repositories/{repositoryId}/commitsBatch',
        function (context, result) {
            return {
                'itemPath': context.itempath,
                'itemVersion': {
                    'versionType': 'branch',
                    'version': context.branch
                }
            }
        }
	);

    //commits in a version
	apiwriter.postJson('/git/repositories/{repositoryId}/commitsBatch',
        function (context, result) {
            return {
                'itemPath': context.itempath,
                'itemVersion': {
                    'versionType': 'branch',
                    'version': context.branch
                },
                'compareVersion': {
                    'versionType': 'branch',
                    'version': context.toBranch
                }
            }
        }
	);
};
