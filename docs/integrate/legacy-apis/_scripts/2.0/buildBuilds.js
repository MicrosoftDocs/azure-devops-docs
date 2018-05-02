var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        build1: null,
        build2: null,
        definition: null,
        person: null,
        after: "02-01-2015",
        quality: "Rejected",
        status: "Succeeded",
        top: 1,
        skip: 1,
        continuationToken: null,
        // VsoBuildApi definition
        definitionId: 25,
        knownBuildId: 391
    };
};

var DEFAULT_MAX = 3;

var limitResult = function (result, max) {
    try {
        if (result.responseBody.value && result.responseBody.value.length > max) {
            result.responseBody.value = result.responseBody.value.slice(0, max);
            result.responseBody.count = max;
        }
    } catch (e) { }
};

var resourceVersion1 = function (context, options) {
    options.headers["Accept"] = "application/json;api-version=1.0"
};

var collectionUrl = function (context, options) {
    options.url = options.url.substring(0, options.url.lastIndexOf('/'));
    options.url = options.url.substring(0, options.url.lastIndexOf('/')) + "/_apis";
}

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);

    // queue a build
    apiwriter.postJson('/build/builds',
        function (context, result) {
            return {
                "definition": {
                    "id": context.definitionId
                },
                "sourceBranch": "refs/heads/master",
                "parameters": "{\"system.debug\":\"true\",\"BuildConfiguration\":\"debug\",\"BuildPlatform\":\"x64\"}"
            };
        },
        function (context, result) {
            context.buildId = result.responseBody.id;
        });

    // get builds
    apiwriter.getJson('/build/builds?definitions={definitionId}&statusFilter=completed&$top=1',
        function (context, result) {
            context.continuationToken = result.responseHeaders["x-ms-continuationtoken"];
        });

    // get builds with continuation token
    apiwriter.getJson('/build/builds?definitions={definitionId}&statusFilter=completed&continuationToken={continuationToken}');

    // get a build
    apiwriter.getJson('/build/builds/{knownBuildId}');

    // get changes associated with the build
    apiwriter.getJson('/build/builds/{knownBuildId}/changes');

    // get work items associated with the build
    apiwriter.postJson('/build/builds/{knownBuildId}/workitems');

    // get the build timeline
    apiwriter.getJson('/build/builds/{knownBuildId}/timeline');

    // get the build artifacts
    apiwriter.getJson('/build/builds/{knownBuildId}/artifacts');

    // get the build logs
    apiwriter.getJson('/build/builds/{knownBuildId}/logs');

    // tag the build
    apiwriter.putJson('/build/builds/{knownBuildId}/tags/myTag');

    // list the tags for the build
    apiwriter.getJson('/build/builds/{knownBuildId}/tags');

    // get builds with a tag
    apiwriter.getJson('/build/builds?tagFilters=myTag');

    // get all tags
    apiwriter.getJson('/build/tags');

    // delete the tag from the build
    apiwriter.deleteJson('/build/builds/{knownBuildId}/tags/myTag');

    // update the build
    apiwriter.patchJson('/build/builds/{buildId}',
        function (context, result) {
            return {
                keepForever: true
            };
        });

    apiwriter.setEnableWrite(false);
    // un-set keepForever so the build can be deleted
    apiwriter.patchJson('/build/builds/{buildId}',
        function (context, result) {
            return {
                keepForever: false
            };
        });
    apiwriter.setEnableWrite(true);

    // delete a build
    apiwriter.deleteJson('/build/builds/{buildId}');
}
