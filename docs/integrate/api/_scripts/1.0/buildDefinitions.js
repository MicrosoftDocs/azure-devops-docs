var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        definitionId: null,
        deleteComment: 'delete me'
    };
};

exports.submitRequests = function()
{
    apiwriter.setEnableWrite(true);
    apiwriter.getJson('/build/definitions',
        function(context, result) {
            context.definitionId = result.responseBody.value[result.responseBody.value.length - 1].id;
        });

    //apiwriter.getJson('/build/definitions?projectName={projectName}')

    apiwriter.getJson('/build/definitions/{definitionId}');

    /*
    apiwriter.postJson('/build/definitions',
        {"name":"new build definition","automationDefinitionType":1,"repositories":[{"id":1,"type":"tfvc","rootFolder":"$/MyTfsProject","name":"default repo","url":"http://scdallam.me.tfsallin.net:81/DefaultCollection"}],"process":{"phases":[{"name":"Build Phase","type":2,"enabled":true,"init":[],"body":[{"name":"Build","type":3,"enabled":true,"tasks":[{"name":"pullFromGit","description":"Pull from git: default repo","enabled":true,"inputs":{"repository":"1"},"taskId":"acbafed4-0b18-4f58-968d-86655b4d2c10","demands":{},"type":4,"versionSpec":"*"},{"name":"MSBuildSolution","description":"Build solution **\\*.sln","enabled":true,"inputs":{"solution":"**\\*.sln","clean":"false"},"taskId":"bea74f14-67d3-4463-8ac2-9252b49c3602","demands":{},"type":4,"versionSpec":"*"}],"matrices":[]}],"cleanup":[]}]},"variables":{},"authoredBy":{"displayName":""},"projectId":"000f2357-0abc-4711-bfcf-d69148d4972f"},
        function(context, result) {
            context.definitionId = result.responseBody.id;
        });

    apiwriter.putJson('/build/definitions/{definitionId}/draft',
        { "name": "draft definition", "repositories": [{ "id": 1, "type": "tfvc", "rootFolder": "$/MyTfsProject", "name": "default repo", "url": "http://scdallam.me.tfsallin.net:81/DefaultCollection" }], "process": { "phases": [{ "name": "Build Phase", "type": 2, "enabled": true, "init": [], "body": [{ "name": "Build", "type": 3, "enabled": true, "tasks": [{ "name": "pullFromGit", "description": "Pull from git: default repo", "enabled": true, "inputs": { "repository": "1" }, "taskId": "acbafed4-0b18-4f58-968d-86655b4d2c10", "demands": {}, "type": 4, "versionSpec": "*" }, { "name": "MSBuildSolution", "description": "Build solution **\\*.sln", "enabled": true, "inputs": { "solution": "**\\*.sln", "clean": "false" }, "taskId": "bea74f14-67d3-4463-8ac2-9252b49c3602", "demands": {}, "type": 4, "versionSpec": "*" }], "matrices": [] }], "cleanup": [] }] }, "variables": {}, "authoredBy": { "displayName": "" }, "projectId": "000f2357-0abc-4711-bfcf-d69148d4972f" },
        function (context, result) {
            context.definitionId = result.responseBody.id;
        });

    apiwriter.deleteJson('/build/definitions/{definitionId}?comment={deleteComment}', null);
    */
}
