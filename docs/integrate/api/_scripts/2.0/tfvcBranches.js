var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        path: "$/Fabrikam-Fiber-TFVC/AuthSample-Dev",
        special: "$/Fabrikam-Fiber-TFVC/AuthSample+Special",
        deleted: "$/Fabrikam-Fiber-TFVC/MyBranch"
    };
};


exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);
	
	// specific branch
	apiwriter.getJson('/tfvc/branches/{path}');

    // specific branch and children
	apiwriter.getJson('/tfvc/branches/{path}?includeChildren=true');
	
    // specific branch and parent
	apiwriter.getJson('/tfvc/branches/{path}?includeParent=true');

    // specific deleted branch
	apiwriter.getJson('/tfvc/branches/{deleted}?includeDeleted=true');

    // branch with special characters
	// apiwriter.getJson('/tfvc/branches?path={special}');

	// all "root" branches
	apiwriter.getJson('/tfvc/branches');

	// all branches
	apiwriter.getJson('/tfvc/branches' + '?includeChildren=true');
	
	// get root branches, including deleted
	apiwriter.getJson('/tfvc/branches' + '?includeDeleted=true');
	
    /*
	// --- by path --- 
	// specific folder
	apiwriter.getJson('/tfvc/branches' + '?scopePath=' + '$/Project Number Two/');
	
	// all below root, including deleted
	apiwriter.getJson('/tfvc/branches' + '?scopePath=$/&includeDeleted=true');
    */
}
