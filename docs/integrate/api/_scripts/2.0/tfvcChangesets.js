var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        id: null,
        top: 2,
        skip: 2,
        from: 2,
        to: 5,
        fromDate: '01-01-2014',
        toDate: '03-18-2014-2:00PM',
        author: "fabrikamfiber3@hotmail.com",
        path: "$/Fabrikam-Fiber-TFVC/AuthSample/AuthSample/Program.cs",
        order: "id asc",
        commentLength: 10,
        id_array : new Array()
    };
};

exports.populateArray = function (context) {
    context.id_array.push(1);
    context.id_array.push(3);
    context.id_array.push(6);
    return{
        id_array : context.id_array 
    };
};

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);

    apiwriter.getJson('/tfvc/changesets?$top={top}&$skip={skip}',
        function (context, result) {
            context.id = result.responseBody.value[0].changesetId;
        });

    apiwriter.getJson('/tfvc/changesets');

    apiwriter.getJson('/tfvc/changesets?maxCommentLength={commentLength}');

    apiwriter.getJson('/tfvc/changesets?$orderBy={order}');

    apiwriter.getJson('/tfvc/changesets?searchCriteria.itemPath={path}');

//    apiwriter.getJson('/tfvc/changesets?searchCriteria.includeSourceRenames=false');

    apiwriter.getJson('/tfvc/changesets?fromDate={fromDate}&toDate={toDate}');

    apiwriter.getJson('/tfvc/changesets?fromId={from}&toId={to}');

    apiwriter.getJson('/tfvc/changesets?searchcriteria.author={author}');

    apiwriter.getJson('/tfvc/changesets/{id}');

    apiwriter.getJson('/tfvc/changesets/{id}?includeDetails=true');

    apiwriter.getJson('/tfvc/changesets/{id}?includeWorkItems=true');

    apiwriter.getJson('/tfvc/changesets/{id}?maxChangeCount=All');

//    apiwriter.getJson('/tfvc/changesets/{id}?includeSourceRename=false');

    apiwriter.getJson('/tfvc/changesets/{id}/changes');

    apiwriter.getJson('/tfvc/changesets/{id}/workitems');

    apiwriter.postJson('/tfvc/changesetsBatch', function (context, result) {
        return { 'changesetIds': exports.populateArray(context).id_array, 'commentLength': 90 }
    }
	);
}
