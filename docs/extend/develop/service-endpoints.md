---
ms.prod: devops
ms.technology: devops-ecosystem
title: Service Endpoints | Extensions for Azure DevOps Services
description: Browse through the places where your extension can extend Visual Studio Online.
ms.assetid: ad0ea9de-620e-4605-8fcd-3c1443b26d8c
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/22/2016
---

# Service Endpoints in Azure DevOps Services

::: moniker range="<= tfs-2018"
> [!NOTE]
> _Service endpoints_ are called _service connections_ in TFS 2018 and in older versions.
> _Pipelines_ are called _definitions_ in TFS 2018 and older versions.
::: moniker-end

Service endpoints are a way for Azure DevOps Services to connect to external systems or services. They are a bundle of properties securely stored by Azure DevOps Services which includes but is not limited to:

- Service name
- Description
- Server URL
- Certificates or tokens
- User names and passwords
  
Extensions are then able to leverage the service endpoint to acquire the stored details to perform the necessary operations on that service. 
Follow this guide to create a new Service Point contribution and leverage it in your extension.

## Task overview

This article walks through developing a service endpoint by creating an example extension for Azure DevOps Services that includes:
-	A custom service endpoint with data sources. This enables a build task or dashboard widget to call a REST endpoint on the service/server defined by the endpoint.
-	A build task which defines 2 properties: The service endpoint & a picklist which has values populated from the REST endpoint data source.

> Note: Service endpoints created by users will be created at the project level, not the organization level. 

The steps involved in completing this task are:
- [Step 1: Creating the extension manifest file](#step1)
- [Step 2: The build task pipeline, in the task.json file](#step2)

> [!NOTE]
> This tutorial will refer to the home directory for your project as "home". 

<a name="step1" />

## Step 1: Create the manifest file: `vss-extension.json`
The [manifest file](./manifest.md) defines the custom endpoint and links to the task.json manifest for the build task. 

In this article, the manifest file creation is separated into three parts:
- [Create the basic manifest file](#createbasic)
- [Add a custom endpoint contribution](#customendpoint)
- [Add a build task](#buildtask)

<a name="createbasic" />

### Create basic manifest file
Create a json file (`vss-extension.json`, for example) in the `home` directory of your extension.

```json
{
"manifestVersion": 1,
  "id": "service-endpoint-tutorial",
  "version": "0.1.1",
  "name": "Sample extension that leverages a service endpoint",
  "description": "A sample Azure DevOps Services extension which shows how to create a custom endpoint and dynamic build task parameters taking value from a REST API.",
  "publisher": "francistotten",
  "targets": [
    {
      "id": "Microsoft.VisualStudio.Services"
    }
  ],  
  "files": [
    {
      "path": "BuildTaskFolder"
    }
  ]
}
```

> [!NOTE]
> You will need to update the `publisher` property.

> [!NOTE]
> "BuildTaskFolder" is the path where we'll eventually place our build task pipeline

<a name="customendpoint" />

### Add the custom endpoint contribution
Add the following `contributions` array underneath the `targets` array of the basic manifest content. 

```json
  "contributions": [
    {
      "id": "service-endpoint",
      "description": "Service endpoint type for Fabrikam connections",
      "type": "ms.vss-endpoint.service-endpoint-type",
      "targets": [ "ms.vss-endpoint.endpoint-types" ],
      "properties": {
        "name": "fabrikam",
        "displayName": "Fabrikam server connection",
        "url": {
          "displayName": "Server Url",
          "helpText": "Url for the Fabrikam server to connect to."
        },
        "dataSources": [
          {
            "name": "Fabrikam Projects",
            "endpointUrl": "{{endpoint.url}}api/projects/index",
            "resultSelector": "jsonpath:$[*].nm"
          }

        ],
        "authenticationSchemes": [
          {
            "type": "ms.vss-endpoint.endpoint-auth-scheme-token"
          },
          {
            "type": "ms.vss-endpoint.endpoint-auth-scheme-basic",
            "inputDescriptors": [
              {
                "id": "username",
                "name": "Username",
                "description": "Username",
                "inputMode": "textbox",
                "validation": {
                  "isRequired": false,
                  "dataType": "string"
                }
              },
              {
                "id": "password",
                "name": "Password",
                "description": "Password",
                "inputMode": "passwordbox",
                "isConfidential": true,
                "validation": {
                  "isRequired": false,
                  "dataType": "string"
                }
              }
            ]
          }

        ],
        "helpMarkDown": "<a href=\"url-to-documentation\" target=\"_blank\"><b>Learn More</b></a>"
      }
    },
  ],
```

> [!NOTE]
> Below is what your endpoint will look like after you've packaged and published your extension. See the [Next Steps](#next-steps) section below for info on how to package and publish.


If you have successfully added the service contribution correctly, you will see the Fabrikam endpoint when trying to add a new service endpoint to your organization.
<img alt= "Service endpoint picker" src="./_img/service-endpoint-endpoint-picker.png" style="padding:10px;display:block;margin-left:auto;margin-right:auto">

Go ahead and create a service endpoint using the Fabrikam endpoint.
<img alt="Service endpoint setup" src="./_img/service-endpoint-setup.png" style="padding:10px;display:block;margin-left:auto;margin-right:auto">

<a name="buildtask" />

### Add the build task contribution
Inside the `contributions` array from the previous step, add the following object to the end. 

```json
{
      "id": "build-task",
      "description": "Task with a dynamic property getting data from an endpoint REST data source",
      "type": "ms.vss-distributed-task.task",
      "targets": [ "ms.vss-distributed-task.tasks" ],
      "properties": {
        "name": "BuildTaskFolder"
      }
    }
```

Note that the datasource endpointUrl is usually computed from the url of the endpoint (or a fixed url), and some additional values. 
For this tutorial this REST call will return nothing and is meant to be replaced by any REST calls you wish to make to your service.

It's possible to use other parameters than the endpoint url for the REST URL, for instance some endpoint properties. 
For instance, assuming that we had a property in the endpoint named subscriptionId, the REST URL could use it with the following syntax: $(endpoint.subscription)

<a name="step2" />

##	Step 2: Create the build task: `task.json`
The `task.json` file describes your build task.

> [!NOTE]
> Take a look at the [build task reference](./integrate-build-task.md) to find the schema for the build task json file. 

Create a `task.json` file in your `BuildTaskFolder` directory, if you have not created this folder yet, do so now. 

```json
{
  "id": "6557a6d2-4caf-4247-99ea-5131286a8753",
  "name": "build-task",
  "friendlyName": "Build Task that uses the service endpoint",
  "description": "Task with a dynamic property getting data from an endpoint REST data source",
  "author": "francistotten",
  "helpMarkDown": "Replace with markdown to show in help",
  "category": "Build",
  "visibility": [
    "Build",
    "Release"
  ],
  "demands": [],
  "version": {
    "Major": "0",
    "Minor": "1",
    "Patch": "1"
  },
  "minimumAgentVersion": "1.95.0",
  "instanceNameFormat": "Service Endpoint Build Task $(project)",
  "inputs": [
    {
      "name": "FabrikamService",
      "type": "connectedService:Fabrikam",
      "label": "Fabrikam service/server end point",
      "defaultValue": "",
      "required": true,
      "helpMarkDown": "Select the Fabrikam end point to use. If needed, click on 'manage', and add a new service endpoint of type 'Fabrikam server connection'"
    },
    {
      "name": "project",
      "type": "pickList",
      "label": "Fabrikam Project",
      "required": true,
      "helpMarkDown": "Select the name of the Fabrikam Project to analyze.",
      "properties": {
        "EditableOptions": "True"
      }
    }
  ],
  "dataSourceBindings": [
    {
      "target": "project",
      "endpointId": "$(FabrikamService)",
      "dataSourceName": "Fabfrikam Projects"
    }
  ],
  "execution": {
    "Node": {
      "target": "sample.js",
      "argumentFormat": ""
    },
    "PowerShell3": {
      "target": "sample.ps1"
    }
  }
}
```

### task.json components

**The `FabrikamService` input object**
<br>
This is the first field, of type connectedService:Fabrikam. connectedService expresses the fact that this is an endpoint type, 
and Fabrikam is simply the name of the object. 

**The `project` input object**
<br>
This is the second field. It's a picklist
- This field is populated by a REST call. 
- The values from the field "project" are taken from the "Projects" REST data source of the custom endpoint.
- This is expressed in the `dataSourceBindings` array
  -	The target is the name of the build task field to be populated ("project")
  -	The endpointId is the name of the build task field containing the custom endpoint type
  -	The REST call is chosen by the dataSourceName

If you've added the Build Task successfully, you should now see the Build Task when adding tasks to a build pipeline
<img alt="Service endpoint build task selector" src="./_img/service-endpoint-build-task-selector.png" style="padding:10px;display:block;margin-left:auto;margin-right:auto">

Once you've added the Build Task to your pipeline, confirm that it can see the Fabrikam endpoint you created. 
The projects dropdown in this tutorial will be blank since we are not using a real service. 
Once you replace Fabrikam with your service, replace the Projects call with your own REST api call to leverage dynamic data inside your build task
<img alt="Service endpoint build task setup" src="./_img/service-endpoint-build-task-setup.png" style="padding:10px;display:block;margin-left:auto;margin-right:auto">

## Authentication Documentation
The authentication scheme in a service endpoint determines the credentials that would be used to connect to the external service. Check out the
[authentication schemes documentation](./auth-schemes.md) for more information and to see the following authentication schemes:
- Basic authentication
- Token based authentication
- Certificate based authentication
- No authentication


## Next Steps

Now that you've written your extension, the next steps are to Package, Publish, and Install your extension. You can also check out the 
documentation for Testing and Debugging your extension. 

* [Package, publish, and install extensions](../publish/overview.md)
* [Testing and debugging extensions](../test/debug-in-browser.md)
