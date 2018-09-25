var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        publisherId: "ms.vss-code.git-event-publisher",
        eventTypeId: "ms.vss-build.build-completed-event"
    };
};

var fixSubscription = function(sub) {
   
}

var fixResult = function(context, result) {
    if (result) {
        var str = JSON.stringify(result, null, 2);

        str = str.replace(/vsalmopen.visualstudio.com/gi, "fabrikam-fiber-inc:8080");

        var newResult = JSON.parse(str);

        result.requestUrl = newResult.requestUrl;
        result.responseBody = newResult.responseBody;
    }
};

exports.submitRequests = function() {

    // Get all event types
    apiwriter.getJson('/notification/eventTypes', function(context, result) {
        // strip away any without a name
        var newTypes = [];
        var allEventTypes = result.responseBody.value;
        allEventTypes.forEach(function(eventType) {
            if (eventType.name) {
                newTypes.push(eventType);
            }
        });

        result.responseBody.count = newTypes.length;
        result.responseBody.value = newTypes;

        fixResult(context, result);
    });

   // Get all event types for the "Git" event publisher
   apiwriter.getJson('/notification/eventTypes?publisherId={publisherId}', fixResult);

    // Get a specific event type (build completed)
    apiwriter.getJson('/notification/eventTypes/{eventTypeId}', function(context, result) {
        // strip away all the field "value"

        var fields = result.responseBody.fields;
        if (fields) {
            var k = Object.keys(fields);
            k.forEach(function(fieldId) {
                var field = fields[fieldId];
                if (field.fieldType) {
                    if (field.fieldType.value) {
                        delete field.fieldType.value
                    }
                }
            });
        }

        fixResult(context, result);
    });
};

