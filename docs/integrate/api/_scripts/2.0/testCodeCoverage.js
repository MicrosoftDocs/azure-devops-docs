var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
		projectName: "fabrikam-fiber-tfvc",
		runId: 51,
        planId: null,
        created2Id: null,
        projId: this.getConfig().getProjectId(),
        buildIdParam: 363
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
	
    //get build code coverage
    apiwriter.getJson('/test/codeCoverage?buildId={buildIdParam}&flags=7');
	
    //get test run code coverage
    apiwriter.getJson('/test/runs/{runId}/codeCoverage?flags=7');	    
}
