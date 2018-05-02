var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        consumerId: null,
        publisherId: null,
        eventTypeId: null,
        consumerActionId: null,
        newSubscriptionId: null,
        newSubscription: null
    };
};

exports.submitRequests = function()
{    

    apiwriter.getJson('/hooks/consumers',
        function(context, result) {
            context.consumerId = result.responseBody.value[0].id;
        });
    
    apiwriter.getJson('/hooks/consumers/{consumerId}');
    
    apiwriter.getJson('/hooks/consumers/{consumerId}/actions',
        function(context, result) {
            context.consumerActionId = result.responseBody.value[0].id;
        });
    
    apiwriter.getJson('/hooks/consumers/{consumerId}/actions/{consumerActionId}');
    
    apiwriter.getJson('/hooks/publishers',
        function(context, result) {
            context.publisherId = result.responseBody.value[0].id;
        });
        
    apiwriter.getJson('/hooks/publishers/{publisherId}/eventTypes',
        function(context, result) {
            context.eventTypeId = result.responseBody.value[0].id;
        });           
        
     apiwriter.getJson('/hooks/publishers/{publisherId}/eventTypes/{eventTypeId}');
   
    
    apiwriter.getJson('/hooks/subscriptions/',
        function(context, result) {
            context.subscriptionId = result.responseBody.value[0].id;
        });  

    apiwriter.getJson('/hooks/subscriptions/{subscriptionId}');        

    // Create dummy web hook subscription
    apiwriter.postJson('/hooks/subscriptions',
        function(context, result) {
            return {
                "publisherId": "tfs",
                "eventType": "build.complete",
                "resourceVersion": "1.0-preview.1",
                "consumerId": "webHooks",
                "consumerActionId": "httpRequest",
                "publisherInputs": {
                    "buildStatus": "Failed",
                    "definitionName": "MyWebSite CI",
                    "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
                },
                "consumerInputs": {
                    "url": "https://myservice/myhookeventreceiver"
                }
            }
        },
        function(context, result) {
            context.newSubscriptionId = result.responseBody.id;
            context.newSubscription = result.responseBody;
        }
     );
        
   // update the dummy subscription
   apiwriter.putJson('/hooks/subscriptions/{newSubscriptionId}',
        function(context, result) {
            context.newSubscription.consumerInputs.url = "https://myservice/newreceiver"
            return context.newSubscription;
        }
    );

   // delete the dummy subscription
   apiwriter.deleteJson('/hooks/subscriptions/{newSubscriptionId}', null);



    /*apiwriter.postJson('/git/repositories',
        function(context, result) {
            return { "name": "newCreatedRepo1", "project": _getProj(context) }
        },
        function(context, result) {
            context.repoId = result.responseBody.id;
        }
    );

    apiwriter.getJson('/git/repositories/{repoId}');

    apiwriter.postJson('/git/repositories',
        function(context, result) {
            return { "name": "newCreatedRepo2", "project": _getProj(context) }
        },
        function(context, result) {
            context.created2Id = result.responseBody.id;
        }
    );

    apiwriter.patchJson('/git/repositories/{repoId}',
        function(context, result) {
            return {"name": "renamedRepo"}
        }
    );

    apiwriter.getJson('/git/repositories');
    apiwriter.getJson('/git/{projId}/repositories',
        function(context, result) {
            context.projName = result.responseBody.value[0].project.name;
        });

    apiwriter.deleteJson('/git/repositories/{repoId}', null);

    apiwriter.setEnableWrite(false);
    apiwriter.deleteJson('/git/repositories/{created2Id}', null);
    apiwriter.setEnableWrite(true);*/
}
