var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        queueId: null,
        poolId: null
    };
};

var resourceVersion3 = function (context, options) {
    options.headers["Accept"] = "application/json;api-version=3.0-preview.1"
};

var projectUrl = function (context, options) {
    options.url = options.url.substring(0, options.url.lastIndexOf('/')) + "/_apis";
    resourceVersion3(context, options);
}

var accountUrl = function (context, options) {
    options.url = options.url.substring(0, options.url.lastIndexOf('/'));
    options.url = options.url.substring(0, options.url.lastIndexOf('/'));
    options.url = options.url.substring(0, options.url.lastIndexOf('/')) + "/_apis";
    options.headers["Accept"] = "application/json;api-version=3.0-preview.1"
}

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(false);

    // get a pool
    apiwriter.getJsonEx('/distributedtask/pools',
        accountUrl,
        function (context, result) {
            context.poolId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

    // create a queue
    apiwriter.postJsonEx('/distributedtask/queues',
        function (context, options) {
            return {
                name: 'myNewQueue',
                pool: {
                    id: context.poolId
                }
            };
        },
        projectUrl,
        function (context, result) {
            context.queueId = result.responseBody.id;
        });

    // get a queue
    apiwriter.getJsonEx('/distributedtask/queues/{queueId}',
        projectUrl);

    // get queues
    apiwriter.getJsonEx('/distributedtask/queues',
        projectUrl);

    apiwriter.deleteJsonEx('/distributedtask/queues/{queueId}',
        function (context, options) {
              return context.queueId;
        },
        projectUrl);

    apiwriter.setEnableWrite(true);
}
