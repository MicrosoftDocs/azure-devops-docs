var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {};
};

exports.submitRequests = function() {
    apiwriter.setEnableWrite(true);
    
    // get endpoint types
    apiwriter.getJson('/distributedtask/serviceendpointtypes');
    
    // Get list of service endpoints
    apiwriter.getJson('/distributedtask/serviceendpoints',
    function(context, result) {
        for (var i = 0; i < result.responseBody.count; i++) {
            var endpoint = result.responseBody.value[i];
            if(endpoint.type === "azure") {
                context.azureId = endpoint.id;
            }
            if(endpoint.type === "jenkins") {
                context.jenkinsId = endpoint.id;
            }
        }
    });
    
    apiwriter.postJson('/distributedtask/serviceendpoints', {
        "name": "Fabrikam-Chef",
        "type": "chef",
        "url": "https://fabrikam-chef:9090",
        "authorization": {
            "scheme": "UsernamePassword",
            "parameters": {
                "username": "someUsername",
                "password": "somePassword"
            }
        },
        //"data": {}
    },
    function (context, result) {
            context.Id = result.responseBody.id;
    });
    
    apiwriter.getJson('/distributedtask/serviceendpoints/{Id}');
    
    apiwriter.putJson('/distributedtask/serviceendpoints/{Id}', {
        "name": "Fabrikam-Chef-Updated",
        "type": "chef",
        "url": "https://fabrikam-chef-updated:9090",
        "authorization": {
            "scheme": "UsernamePassword",
            "parameters": {
                "username": "someUsername",
                "password": "somePassword"
            }
        }
    });
    
    apiwriter.deleteJson('/distributedtask/serviceendpoints/{Id}', {});
    
    // serviceendpointproxy api is getting replaced by a new api
    /*apiwriter.postJson('/distributedtask/serviceendpointproxy', 
    function(context, options) {
        return {
            "dataSourceName": "AzureHostedServiceNames",
            "endpointId": context.azureId
        }
    });
    
    apiwriter.postJson('/distributedtask/serviceendpointproxy', 
    function(context, options) {
        return {
            "dataSourceName": "Jobs",
            "endpointId": context.jenkinsId,
            "resultTemplate": '{ "Value" : "{{name}}", "DisplayValue" : "{{{displayName}}}" }'
        }
    },
    function(context, result) {
        console.log(result.responseBody.value[0]);
        console.log(JSON.parse(result.responseBody.value[0]));
        context.jenkinsJob = JSON.parse(result.responseBody.value[0]).Value;
    });
    
    apiwriter.postJson('/distributedtask/serviceendpointproxy', 
    function(context, options) {
        return {
            "dataSourceName": "Builds",
            "endpointId": context.jenkinsId,
            "parameters": {
                "definition": context.jenkinsJob
            }
        }
    });*/
}