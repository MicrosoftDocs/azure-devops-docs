---
ms.prod: devops
ms.technology: devops-ecosystem
title: Create a consumer service for service hooks | Extensions for Azure DevOps Services
description: Tutorial for creating a custom consumer service for service hooks in Azure DevOps Services.
ms.assetid: 294ae93b-7522-40ef-95ab-d5002f8c3ca8
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/22/2016
---

# Service hooks in Azure DevOps Services

Service hooks enable you to perform tasks on other services when events happen in your Azure DevOps Services projects. For example, create a card in Trello 
when a work item is created or send a push notification to your team's mobile devices when a build fails. Service hooks can also be used in custom apps and services 
as a more efficient way to drive activities when events happen in your projects.

## How service hooks work
Service hook **publishers** define a set of *events*. **Subscriptions** listen for the *events* and define **actions** to take based on the event. 
Subscriptions also target **consumers**, which are external services that can perform their own actions, when an event occurs. 

<center>![Service Hooks Diagram](./_img/service-hooks.png)</center>

## Tutorial Overview - Custom Consumer Service

This tutorial walks through developing an extension that implements a **sample consumer service** that includes:
-	Supported events that trigger actions to be taken
    - Code pushed
    - Pull request created
    - Pull request updated
-   Supported actions to take when events occur
    - Perform action

> Note: This tutorial will refer to the home directory for your project as "home". 

<center>![Sample Consumer Service](./_img/consumer-service.png)</center>

## Create the extension
### Add an icon

Add a square image in the ```images``` folder that identifies your extension.
It will displayed in the Marketplace, and when someone installs your extension. You don't need to do this for your extension to work, 
but below is a sample image you can use along with how it will look with the extension.

>NOTE: Name the image ```logo.png```, or remove the "icons" sections from the manifest file if you wish to skip this step.

<div style="vertical-align:middle;display:block;width:60%;margin-left:auto;margin-right:auto">
<img alt="Sample logo" src="../get-started/_img/logo.png" style="display:block;padding-bottom:10px;margin-left:auto;margin-right:auto">
</div>
<div style="vertical-align:middle;display:block;width:60;margin-left:auto;margin-right:auto">
<img alt="first sample extension example" src="../get-started/_img/first-sample-extension.png" style="display:block;padding-bottom:10px;margin-left:auto;margin-right:auto">
</div>

### Create the manifest file and populate it
The [manifest file](./manifest.md) defines both your extension and the consumer service.

Create a json file (`vss-extension.json`, for example) in the `home` directory of your extension with the following contents:

```json
{
    "manifestVersion": 1,
    "id": "samples-service-hooks-consumer",
    "version": "0.1.2",
    "name": "Service Hooks Sample",
    "description": "A simple extension that demonstrates how to contribute a consumer service into service hooks.",
    "publisher": "fabrikam",
    "public": false,
    "icons": {
        "default": "images/logo.png"
    },
    "scopes": [],
    "files": [
        {
            "path": "images",
            "addressable": true
        }
    ],
    "content": {
        "details": {
            "path": "readme.md"
        }
    },
    "categories": [
        "Developer samples"
    ],
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ],
    "contributions": [
        {
            "id": "consumer",
            "type": "ms.vss-servicehooks.consumer",
            "targets": [
                "ms.vss-servicehooks.consumers"
            ],
            "properties": {
                "id": "consumer",
                "name": "Sample Consumer",
                "description": "Sample consumer service",
                "informationUrl": "https://aka.ms/vsoextensions",
                "inputDescriptors": [
                    {
                        "id": "url",
                        "isRequired": true,
                        "name": "URL",
                        "description": "URL to post event payload to",
                        "inputMode": "textbox"
                    }
                ],
                "actions": [
                    {
                        "id": "performAction",
                        "name": "Perform action",
                        "description": "Posts a standard event payload",
                        "supportedEventTypes": [
                            "git.push",
                            "git.pullrequest.created",
                            "git.pullrequest.updated"
                        ],
                        "publishEvent": {
                            "url": "{{{url}}}",
                            "resourceDetailsToSend": "all",
                            "messagesToSend": "all",
                            "detailedMessagesToSend": "all"
                        }
                    }
                ]
            }
        }
    ]
}
```
> Note: You will need to update the `publisher` property.

The `icons` stanza specifies the path to your extension's icon in your manifest.

The `contributions` stanza adds your contribution - the consumer service - to your extension manifest.

For each contribution in your extension, the manifest defines
- the type of contribution - consumer service (ms.vss-servicehooks.consumer) in this case,
- the contribution target - consumer services (ms.vss-servicehooks.consumers) in this case,
- and the properties that are specific to each type of contribution. For a consumer service we have:

| Property           | Description                                                                                                                         
|--------------------|------------------------------------------------------------------------------------------|
| id                 | Unique id for your consumer service.                                                     |                  
| name               | Name of the consumer service.                                                            |                   
| description        | Describes your consumer service.                                                         |                   
| informationUrl     | Where more info can be found about your extension.                                       |
| inputDescriptors   | Inputs to be used by users that are creating subscriptions with the consumer service.    |                   
| actions            | Describes the actions to take and which events trigger them.                             |    

## Package, Publish, and Install

Now that you've written your extension, the next steps are to Package, Publish, and Install your extension. You can also check out the 
documentation for Testing and Debugging your extension. 

* [Package, publish, and install extensions](../publish/overview.md)
* [Testing and debugging extensions](../test/debug-in-browser.md)
