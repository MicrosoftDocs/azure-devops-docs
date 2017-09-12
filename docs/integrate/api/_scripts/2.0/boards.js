var apiwriter = require('apiwriter');

/* When running with OnPrem, ensure that Basic Auth is set up in the virtual directory itself.
 * Set these environment variables when running writer tool for boards.js 
 * set cfgApisUrl=http://localhost:8080/tfs/DefaultCollection/fooScrum/AgileTeam/_apis
 * set cfgUserName=<Domain\UserName>
 * set cfgPassword=<PasswordInPlainText>
 * set cfgApiVersion=1.0
 * set cfgScript=boards.js
 * set cfgScriptPath = ../../VSContent/integrate/api/_scripts/2.0
 */

exports.getContext = function () {
    return {

    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
    apiwriter.getJson('/work/boards/', 
		        function (context, result) {
		        	context.boardId = result.responseBody.value[0].id;
		        	context.boardName = result.responseBody.value[0].name;
		        });
    
	// By ID
    apiwriter.getJson('/work/boards/{boardId}');

    // By name
    apiwriter.getJson('/work/boards/{boardName}');

	// By ID
    apiwriter.getJson('/work/boards/{boardId}/columns', 
		        function (context, result) {
		        	context.boardColumns = result.responseBody.value;
		        });

	// By name
    apiwriter.getJson('/work/boards/{boardName}/columns');

	// Update column
    apiwriter.putJson('/work/boards/{boardName}/columns',
        function(context, result) {
        	return context.boardColumns;
        }
    );

    // By id
    apiwriter.getJson('/work/boards/{boardId}/cardsettings',
		        function (context, result) {
		            context.boardCardSettings = result.responseBody;
		        });

    // By name
    apiwriter.getJson('/work/boards/{boardName}/cardsettings',
		        function (context, result) {
		            context.boardCardSettings = result.responseBody;
		        });

    // Update card settings
    apiwriter.putJson('/work/boards/{boardName}/cardsettings',
        function (context, result) {
            return context.boardCardSettings;
        }
    );

    // By id
    apiwriter.getJson('/work/boards/{boardId}/cardrulesettings',
		        function (context, result) {
		            context.boardCardRules = result.responseBody;
		        });

    // By name
    apiwriter.getJson('/work/boards/{boardName}/cardrulesettings',
		        function (context, result) {
		            context.boardCardRules = result.responseBody;
		        });

    // Update card rules
    apiwriter.patchJson('/work/boards/{boardName}/cardrulesettings',
        function (context, result) {
            delete context.boardCardRules['url'];
            delete context.boardCardRules['_links'];
            for (var i = 0 ; i < context.boardCardRules.rules['fill'].length; i++) {
                delete context.boardCardRules.rules['fill'][i]['clauses'];
            }
            return context.boardCardRules;
        }
    );

    // By id
    apiwriter.getJson('/work/boards/{boardId}/rows',
                function (context, result) {
                    context.boardRows = result.responseBody.value;
                });

    // By name
    apiwriter.getJson('/work/boards/{boardName}/rows');

    // Update rows
    apiwriter.putJson('/work/boards/{boardName}/rows',
        function(context, result) {
            context.boardRows[1].id=undefined;
            context.boardRows[1].name="New Expedite";
            return context.boardRows;
        }
    );

	// Get charts 
    apiwriter.getJson('/work/boards/{boardName}/charts');

	// GetCFD
    apiwriter.getJson('/work/boards/{boardName}/charts/cumulativeFlow',
        function(context, result) {
        	context.boardCFD = result.responseBody;
        }
    );

	// UpdateCFD
    apiwriter.patchJson('/work/boards/{boardName}/charts/cumulativeFlow',
        function(context, result) {
		var d = new Date();
		d.setDate(d.getDate()-1);
		context.boardCFD.settings.startDate = d.toUTCString();
		context.boardCFD.settings.hideIncomingColumn = true;
		delete context.boardCFD.name;
		delete context.boardCFD.url;
		delete context.boardCFD._links;
        	return context.boardCFD;
        }
    );
}
