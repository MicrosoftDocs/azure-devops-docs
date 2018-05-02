var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        definitionId: null,
        deleteComment: 'delete me',
        revision: null
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
    // get repository
    apiwriter.setEnableWrite(false);
    apiwriter.getJsonEx('/git/repositories',
        resourceVersion1,
        function (context, result) {
            for (var i = 0; i < result.responseBody.value.length; i++) {
                if (result.responseBody.value[i].name === "Fabrikam-Fiber-Git") {
                    repository = result.responseBody.value[i];
                    break;
                }
            }
            context.repository = repository;
        });

    // get queue
    apiwriter.getJsonEx('/build/queues?type=agentpool',
        collectionUrl,
        function (context, result) {
            context.queueId = result.responseBody.value[0].id;
        });

    apiwriter.setEnableWrite(true);

    apiwriter.postJson('/build/definitions',
        function (context, options) {
            return {
                "name": "myDefinition",
                "type": 'build',
                "quality": 'definition',
                "queue": {
                    "id": context.queueId,
                },
                "build": [
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
                "repository": {
                    "id": context.repository.id,
                    "type": "tfsgit",
                    "name": context.repository.name,
                    "localPath": "$(sys.sourceFolder)/MyGitProject",
                    "defaultBranch": "refs/heads/master",
                    "url": context.repository.remoteUrl,
                    "clean": "false"
                },
                "options": [
                    {
                        "enabled": true,
                        "definition": { "id": "7c555368-ca64-4199-add6-9ebaf0b0137d" },
                        "inputs": {
                            "parallel": "false",
                            "multipliers": "[\"config\",\"platform\"]"
                        }
                    }
                ],
                "variables": {
                    "forceClean": { "value": "false", "allowOverride": true },
                    "config": { "value": "debug, release", "allowOverride": true },
                    "platform": { "value": "any cpu", "allowOverride": true }
                },
                "triggers": [],
                "comment": "my first definition"
            };
        },
        function (context, result) {
            context.revision = result.responseBody.revision;
            context.definitionId = result.responseBody.id;
        });

    apiwriter.getJson('/build/definitions');

    apiwriter.getJson('/build/definitions/{definitionId}');

    apiwriter.getJson('/build/definitions/{definitionId}?revision={revision}');

    apiwriter.putJson('/build/definitions/{definitionId}',
        function (context, options) {
            return {
                "id": context.definitionId,
                "revision": context.revision,
                "name": "myFavoriteDefinition",
                "definitionType": 'build',
                "documentQuality": 'definition',
                "queue": {
                    "id": context.queueId,
                },
                "build": [
                    {
                        "enabled": true,
                        "continueOnError": false,
                        "alwaysRun": false,
                        "displayName":"Build solution **\\*.sln",
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
                "repository": {
                    "id": context.repository.id,
                    "type": "tfsgit",
                    "name": context.repository.name,
                    "localPath": "$(sys.sourceFolder)/MyGitProject",
                    "defaultBranch": "refs/heads/master",
                    "url": context.repository.remoteUrl,
                    "clean": "false"
                },
                "options": [
                    {
                        "enabled": true,
                        "definition": { "id": "7c555368-ca64-4199-add6-9ebaf0b0137d" },
                        "inputs": {
                            "parallel": "false",
                            "multipliers": "[\"config\",\"platform\"]"
                        }
                    }
                ],
                "variables": {
                    "forceClean": { "value": "false", "allowOverride": true },
                    "config": { "value": "debug, release", "allowOverride": true },
                    "platform": { "value": "any cpu", "allowOverride": true }
                },
                "triggers": [],
                "comment": "renamed"
            };
        },
        function (context, result) {
            context.definitionId = result.responseBody.id;
            context.revision = result.responseBody.revision - 1;
        });

    apiwriter.getJson('/build/definitions/{definitionId}/revisions');

    apiwriter.deleteJson('/build/definitions/{definitionId}');

    // build definition options
    apiwriter.getJsonEx('/build/options',
        collectionUrl);
}
