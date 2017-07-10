var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        request: null,
        requestToDelete: null,
        person: null,
        definition: null,
        controller: null,
        age: 3600, // one hour
        status: "completed",
        top: 2,
        skip: 2,
        postBody: { definition: { id: null } },
    };
};

var DEFAULT_MAX = 5;

var limitResult = function(result, max) {
    try {	
		if (result.responseBody.value && result.responseBody.value.length > max) {
			result.responseBody.value = result.responseBody.value.slice(0, max);
			result.responseBody.count = max;
		}
	} catch (e) { }
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);

    // We need at least one build to start with
    apiwriter.getJson('/build/requests',
        function (context, result) {		
		    limitResult(result, DEFAULT_MAX);
		
            context.request = result.responseBody.value[0].id;
            context.person = result.responseBody.value[0].requestedBy.uniqueName;
            context.definition = context.postBody.definition.id = result.responseBody.value[0].definition.id;
            context.queue = result.responseBody.value[0].queue.id;
            context.queueTye = result.responseBody.value[0].queue.queueType;
            context.status = result.responseBody.value[0].status;
        });

    nBuildsToQueue = 4;
    for (i = 0; i < nBuildsToQueue; i++) {
        apiwriter.postJson('/build/requests',
            function (context) {
                return {
                    'definition': {
                        'id': context.definition
                    },
                    'reason': 'Manual',
                    'priority': 'Normal'
                }
            });

        // after the first one, turn the writer off
        if (i == 0) {
            apiwriter.setEnableWrite(false);
        }
    }
    apiwriter.setEnableWrite(true);

    apiwriter.getJson('/build/requests?requestedFor={person}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/requests?definitionId={definition}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/requests?controllerId={queue}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/requests?maxCompletedAge={age}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/requests?status={status}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/requests?$top={top}&$skip={skip}');

    apiwriter.setEnableWrite(false);
    apiwriter.getJson('/build/requests?status=Queued',
        function (context, result) {
            context.requestToDelete = result.responseBody.value[0].id;
            /*
            context.person = result.responseBody.value[0].requestedBy.uniqueName;
            context.definition = context.postBody.definition.id = result.responseBody.value[0].definition.id;
            context.queue = result.responseBody.value[0].queue.id;
            context.queueTye = result.responseBody.value[0].queue.queueType;
            context.status = result.responseBody.value[0].status;
            */
        });
    apiwriter.setEnableWrite(true);
    apiwriter.patchJson('/build/requests/{request}', {
        status: 'Stopped'
    });

    apiwriter.deleteJson('/build/requests/{requestToDelete}', null);
}
