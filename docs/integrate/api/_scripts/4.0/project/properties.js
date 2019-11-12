var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        wildcard: "*SourceControl*"
    };
};

var fixResult = function(context, result) {
    var str = JSON.stringify(result);

    str = str.replace(/test123.me.tfsallin.net:444/gi, "fabrikam-fiber-inc.visualstudio.com");

    var newResult = JSON.parse(str);

    result.requestUrl = newResult.requestUrl;
    result.responseBody = newResult.responseBody;
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);

    // Get a project
    apiwriter.getJson('/projects', function(context, result) {
        context.project = result.responseBody.value[0].id;
    });

    apiwriter.setEnableWrite(true);

    // Get all project properties
    apiwriter.getJson('/projects/{project}/properties', function(context, result) {
        fixResult(context, result);
        context.propertyName = result.responseBody.value[0].name;
    });

    // Get specific project properties
    apiwriter.getJson('/projects/{project}/properties?keys={propertyName},{wildcard}', fixResult);

    // Create a project property
    apiwriter.patchJsonEx('/projects/{project}/properties',
        function (context, result) {
            return [
                    {
                        "op": "add",
                        "path": "/Alias",
                        "value": "Fabrikam"
                    }
                ]
        },
        function(context, options)
        {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        fixResult
    );

    // Delete a project property
    apiwriter.patchJsonEx('/projects/{project}/properties',
        function (context, result) {
            return [
                    {
                        "op": "remove",
                        "path": "/Alias"
                    }
                ]
        },
        function(context, options)
        {
            options.headers["Content-Type"] = "application/json-patch+json"
        },
        fixResult
    );
};