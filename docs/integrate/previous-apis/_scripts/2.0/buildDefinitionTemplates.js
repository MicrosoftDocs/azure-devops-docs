var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        templateId: null
    };
};

var resourceVersion1 = function (context, options) {
    options.headers["Accept"] = "application/json;api-version=1.0"
};

var collectionUrl = function (context, options) {
    options.url = options.url.substring(0, options.url.lastIndexOf('/'));
    options.url = options.url.substring(0, options.url.lastIndexOf('/')) + "/_apis";
}

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);

    // get templates
    apiwriter.getJson('/build/definitions/templates',
        function (context, result) {
            context.templateId = result.responseBody.value[0].id;
        });

    // get a specific template
    apiwriter.getJson('/build/definitions/templates/{templateId}');

    // create a template
    apiwriter.putJson('/build/definitions/templates/{templateId}',
        function (context, options) {
            context.templateId = "myCustomTemplate";

            return {
                name: "My Custom Template",
                description: "A custom template for a custom process",
                template: {
                    build: [
                        {
                            "enabled": true,
                            "continueOnError": false,
                            "alwaysRun": false,
                            "displayName": "Build solution **\\*.sln",
                            "task": {
                                "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
                                "versionSpec": "*"
                            },
                            "inputs": {
                                "solution": "**\\*.sln",
                                "msbuildArgs": "",
                                "platform": "$(platform)",
                                "configuration": "$(config)",
                                "clean": "false",
                                "restoreNugetPackages": "true",
                                "vsLocationMethod": "version",
                                "vsVersion": "latest",
                                "vsLocation": "",
                                "msbuildLocationMethod": "version",
                                "msbuildVersion": "latest",
                                "msbuildArchitecture": "x86",
                                "msbuildLocation": "",
                                "logProjectEvents": "true"
                            }
                        },
                        {
                            "enabled": true,
                            "continueOnError": false,
                            "alwaysRun": false,
                            "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
                            "task": {
                                "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
                                "versionSpec": "*"
                            },
                            "inputs": {
                                "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
                                "testFiltercriteria": "",
                                "runSettingsFile": "",
                                "codeCoverageEnabled": "true",
                                "otherConsoleOptions": "",
                                "vsTestVersion": "14.0",
                                "pathtoCustomTestAdapters": ""
                            }
                        }
                    ],
                    buildNumberFormat: "$(date:yyyyMMdd)$(rev:.r)",
                    jobAuthorizationScope: "projectCollection",
                    triggers: [
                        {
                            batchChanges: false,
                            branchFilters: "",
                            triggerType: "continuousIntegration"
                        }
                    ],
                    variables: {
                        "forceClean": { "value": "false", "allowOverride": true },
                        "config": { "value": "debug, release", "allowOverride": true },
                        "platform": { "value": "any cpu", "allowOverride": true }
                    },
                }
            };
        },
        function (context, result) {
            context.revision = result.responseBody.revision;
            context.definitionId = result.responseBody.id;
        });

    // delete a template
    apiwriter.deleteJson('/build/definitions/templates/{templateId}');
}
