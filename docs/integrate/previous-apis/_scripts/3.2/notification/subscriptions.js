var apiwriter = require('apiwriter');

exports.getContext = function () {
    return {
        sharedSubscriptionId: "ms.vss-code.pull-request-updated-subscription",
        teamId: "552e2388-e9bb-429e-ad71-c2fef2ad085f" /* fab cloud / fab */
    };
};

var fixResult = function(context, result) {
    if (result) {
        var str = JSON.stringify(result, null, 2);

        str = str.replace(/vsalmopen.visualstudio.com/gi, "fabrikam-fiber-inc:8080");
        str = str.replace(/will smythe/gi, "Jamal Hartnett");
        str = str.replace(/wismythe@microsoft.com/gi, "fabrikamfiber16@outlook.com");
        
        var newResult = JSON.parse(str);

        result.requestUrl = newResult.requestUrl;
        result.responseBody = newResult.responseBody;
    }
};

exports.submitRequests = function() {

    apiwriter.setEnableWrite(false);

    // Get all projects
    apiwriter.getJson('/projects', function(context, result) {
        context.project1 = result.responseBody.value[0].id;
        context.project2 = result.responseBody.value[1].id;
    });

    // Get all teams for project 1
    apiwriter.getJson('/projects/{project1}/teams', function(context, result) {
        context.team1 = result.responseBody.value[0].id;
    });

    apiwriter.setEnableWrite(true);

    // Create a new personal subscriptions
    apiwriter.postJson('/notification/subscriptions',
        function (context, result) {
           var newPersonalSubscription = 
                {
                    "description": "All changes to work items in the Fabrikam project",
                    "filter": {
                        "eventType": "ms.vss-work.workitem-changed-event",
                        "criteria": {
                            "clauses": [],
                            "groups": [],
                            "maxGroupLevel": 0
                        },
                        "type": "Expression"
                    },
                    "channel": {
                        "type": "EmailHtml"
                    },
                    "scope": {
                        "id": context.project1
                    }
                };

            return newPersonalSubscription;
        }, 
        function (context, result) {
            fixResult(context, result);

            context.subscriptionId = result.responseBody.id;
        }
    );
    
    // Get all subscriptions for me
    apiwriter.getJson('/notification/subscriptions', fixResult);

    // Get a subscription
    apiwriter.getJson('/notification/subscriptions/{subscriptionId}', fixResult);

    // Update a subscription (description and scope)
    apiwriter.patchJson('/notification/subscriptions/{subscriptionId}',
        function (context, result) {
            return {
                description: "All changes to work items in this account",
                scope: {
                    id: null
                }
            };
        },
        fixResult
    );

    // Update a subscription (disable)
    apiwriter.patchJson('/notification/subscriptions/{subscriptionId}',
        function (context, result) {
            return {
                status: "disabled"
            };
        },
        fixResult
    );

    // Delete the personal subscriptions
    apiwriter.deleteJson('/notification/subscriptions/{subscriptionId}', null, fixResult);

    // Opt out of a default subscription

    // First, reset to make sure the user isn't already opted out
    apiwriter.setEnableWrite(false);
    apiwriter.putJson('/notification/subscriptions/{sharedSubscriptionId}/userSettings/me',
        function (context, result) {
            return {
                optedOut: false
            };
        },
        fixResult
    );

    apiwriter.setEnableWrite(true);
    apiwriter.putJson('/notification/subscriptions/{sharedSubscriptionId}/userSettings/me',
        function (context, result) {
            return {
                optedOut: true
            };
        },
        fixResult
    );


    /******************/

    // Create a team subscription
    apiwriter.postJson('/notification/subscriptions',
        function (context, result) {
           var newSub = 
                 {
                    "description": "A new work item enters our area path",
                    "filter": {
                        "eventType": "ms.vss-work.workitem-changed-event",
                        "criteria": {
                            "clauses": [],
                            "groups": [],
                            "maxGroupLevel": 0
                        },
                        "type": "Expression"
                    },
                    "subscriber": {
                        "id": context.teamId
                    },
                    "channel": {
                        "type": "EmailHtml",
                        "address": "myteam@fabrikam.org",
                        "useCustomAddress": true
                    }
                };

            return newSub;
        }, 
        function (context, result) {
            fixResult(context, result);

            context.teamSubscriptionId = result.responseBody.id;
        }
    );

    // Query for subscriptions for a particular team
    apiwriter.postJson('/notification/subscriptionQuery',
        function(context) {
            return {
                conditions: [
                    {
                        subscriber: context.teamId
                    }
                ]
            }
        },
        fixResult
    );

    // Cleanup newly created team subscription
    apiwriter.deleteJson('/notification/subscriptions/{teamSubscriptionId}', null, fixResult);


    // Get
    /*apiwriter.postJson('/notification/subscriptionQuery',
        function (context, result) {
            return {
                "conditions": [
                    {
                        "subscriber":"acaa9abb-d626-43e7-ac5a-e5266a6028bd"
                    }
                ]
            };
        },
        function (context, result) {
            
        }
    );*/


};

