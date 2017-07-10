var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        suiteId: 339
    }
}

exports.submitRequests = function () {
    apiwriter.setEnableWrite(true);

    // get suite entries
    apiwriter.getJson('/test/suiteentry/{suiteId}',
        function (context, result) {
        });

    // reorder suite entries
    apiwriter.patchJson('/test/suiteentry/{suiteId}',
        function (context, result) {
            return [
                { "sequenceNumber": 2, "testCaseId": 401, "childSuiteId": 0 },
                { "sequenceNumber": 0, "testCaseId": 402, "childSuiteId": 0 },
                { "sequenceNumber": 1, "testCaseId": 341, "childSuiteId": 0 }
            ];
        },
        function (context, result) {
        });
}