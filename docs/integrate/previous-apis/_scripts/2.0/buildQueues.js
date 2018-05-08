var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        queueId: null,
        poolId: null
    };
};

var resourceVersion2 = function (context, options) {
    options.headers["Accept"] = "application/json;api-version=2.0;res-version=2"
};

var collectionUrl = function (context, options) {
    options.url = options.url.substring(0, options.url.lastIndexOf('/'));
    options.url = options.url.substring(0, options.url.lastIndexOf('/')) + "/_apis";
    resourceVersion2(context, options);
}

var collectionUrlv1 = function (context, options) {
    options.url = options.url.substring(0, options.url.lastIndexOf('/'));
    options.url = options.url.substring(0, options.url.lastIndexOf('/')) + "/_apis";
    options.headers["Accept"] = "application/json;api-version=1.0"
}

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    // get a pool
    apiwriter.getJsonEx('/distributedtask/pools',
        collectionUrlv1,
        function (context, result) {
            context.poolId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

    // create a queue
    apiwriter.postJsonEx('/build/queues',
        function (context, options) {
            return {
                name: 'myNewQueue',
                type: 'agentPool',
                pool: {
                    id: context.poolId
                }
            };
        },
        collectionUrl,
        function (context, result) {
            context.queueId = result.responseBody.id;
        });

    // get a queue
    apiwriter.getJsonEx('/build/queues/{queueId}',
        collectionUrl);

    // get queues
    apiwriter.getJsonEx('/build/queues',
        collectionUrl);

    apiwriter.setEnableWrite(false);

    // find a controller
    apiwriter.getJsonEx('/build/queues?type=buildController',
        collectionUrl,
        function (context, result) {
            context.controllerId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

    // get a controller
    apiwriter.getJsonEx('/build/controllers/{controllerId}',
        collectionUrl);
}
