var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		pushId: null,
		repositoryId: null,
		repositoryName: null,
		projectName: null,
		fromDate: "2014-01-15",
		toDate: "2014-02-01T14:00",
		pusherId: null,
		refName: 'refs/heads/develop',
	    skip: 2,
        top: 2
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

    //get the list of pushes
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes',
        function(context, result) {
            context.pushId = result.responseBody.value[0].pushId;
            context.pusherId = result.responseBody.value[0].pushedBy.id;
        });

    //get the list of pushes using the repository name
    //apiwriter.getJson('/git/{projectName}/repositories/{repositoryName}/pushes');

    //get the details of the first push
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes/{pushId}');
	
    // in a date range
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes?fromDate={fromDate}&toDate={toDate}');

    // in a page
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes?$skip={skip}&$top={top}');

    // by pusher
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes?pusherId={pusherId}');
	
	// for a particular ref name
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes?refName={refName}&includeRefUpdates=true');

    //get the first push using the repository name
    //apiwriter.getJson('/git/repositories/{repositoryId}/pushes/{pushId}');
	
	//get the refs that were updated for the first push
    apiwriter.getJson('/git/repositories/{repositoryId}/pushes/{pushId}?includeRefUpdates=true');

};
