var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        projectName: "Fabrikam"
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);	   
   
    //Get test result retention settings
    apiwriter.getJson('/test/resultretentionsettings',
			function (context, result) {			      
			});

    //Update test result retention settings
    apiwriter.patchJson('/test/resultretentionsettings',
			function (context, result) {
			    return {
			        "automatedResultsRetentionDuration": 30,
			        "manualResultsRetentionDuration": 100
			    }
			});
}
