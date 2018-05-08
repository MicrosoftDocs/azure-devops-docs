var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        build1: null,
        build2: null,
        build3: null,
        definition: null,
        person: null,
        after: "02-01-2014",
        quality: "Rejected",
        status: "Failed",
        top: 1,
        skip: 1
    };
};

var DEFAULT_MAX = 3;

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
    apiwriter.getJson('/build/builds',
        function(context, result) {
		    limitResult(result, DEFAULT_MAX);
		
            context.build1 = result.responseBody.value[0].id;
            context.build2 = result.responseBody.value[1].id;
            context.build3 = result.responseBody.value[2].id;
            context.definition = result.responseBody.value[0].definition.name;
            context.person = result.responseBody.value[0].requests[0].requestedFor.uniqueName;
        });

    apiwriter.getJson('/build/builds?definition={definition}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});
	
    apiwriter.getJson('/build/builds?requestedFor={person}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/builds?minFinishTime={after}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/builds?quality={quality}', function(context, result) {
		limitResult(result, DEFAULT_MAX);
	});

    apiwriter.getJson('/build/builds?status={status}',
            function (context, result) {
				limitResult(result, DEFAULT_MAX);
				
                context.build1 = result.responseBody.value[0].id;
            });

    apiwriter.getJson('/build/builds?$skip={skip}&$top={top}');

    apiwriter.getJson('/build/builds/{build1}');

    apiwriter.getJson('/build/builds/{build1}/details');

    apiwriter.patchJson('/build/builds/{build1}', {
        status: 'Stopped'
    });

    apiwriter.patchJson('/build/builds/{build2}', {
        quality: 'Rejected'
    });

    apiwriter.patchJson('/build/builds/{build3}', {
        retainIndefinitely: 'true'
    });

    apiwriter.deleteJson('/build/builds/{build3}', null);
}
