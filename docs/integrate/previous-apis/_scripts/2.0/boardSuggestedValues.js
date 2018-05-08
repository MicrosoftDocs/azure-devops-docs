var apiwriter = require('apiwriter');

/* When running with OnPrem, ensure that Basic Auth is set up in the virtual directory itself.
 * Set these environment variables when running writer tool for boards.js 
 * set cfgApisUrl=http://yaliu:8080/tfs/DefaultCollection/_apis (for collection level)
 * Or set cfgApisUrl=http://yaliu:8080/tfs/DefaultCollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/_apis (for project level)
 * set cfgApiVersion=2.0-preview.1
 * set cfgScriptPath = ../../Content.VS/integrate/api/_scripts/2.0
 * set cfgScript=boardSuggestedValues.js
 */

exports.getContext = function () {
    return {

    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
  	// columns
    apiwriter.getJson('/work/boardColumns/');
	
	// Rows
    apiwriter.getJson('/work/boardRows/');
}
