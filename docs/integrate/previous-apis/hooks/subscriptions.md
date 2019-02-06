---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Hook Subscriptions | REST API Reference for Team Foundation Server
description: Work with service hook subscriptions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 249F8AEB-0E5C-41D5-9B67-C8AC6A22A98D
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hook subscriptions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

A service hooks subscription defines the action to perform on a consumer service when an event occurs in a project. 
For example, a subscription can cause a card to be created on a Trello board when a work item is created. 


[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of subscriptions

### Sample request

```http
GET https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/?api-version=1.0
```

### Sample response

```json
{
    "count": 12,
    "value": [
        {
        "id": "8dea9aba-3a9a-4ad0-860f-2a5c7379e3eb",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/8dea9aba-3a9a-4ad0-860f-2a5c7379e3eb",
        "publisherId": "tfs",
        "eventType": "build.complete",
        "resourceVersion": null,
        "eventDescription": "Build CustomerAddressModule, Status Succeeded",
        "consumerId": "myGet",
        "consumerActionId": "publishPackage",
        "actionDescription": "Feed: fabrikam-package",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-20T19:47:15.247Z",
        "modifiedBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "modifiedDate": "2014-05-20T19:47:15.247Z",
        "publisherInputs": {
            "buildStatus": "Succeeded",
            "definitionName": "CustomerAddressModule",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "e15ed970-8b92-4b71-8ec2-f99b5db5e34d"
        },
        "consumerInputs": {
            "feedId": "fabrikam-package",
            "packageSourceId": "ef1a74fb-53e3-46b8-9d8f-03a38a9c7b78"
        }
        },
        {
        "id": "ff9c24c5-45b5-491f-831a-39b9d481b425",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/ff9c24c5-45b5-491f-831a-39b9d481b425",
        "publisherId": "tfs",
        "eventType": "build.complete",
        "resourceVersion": null,
        "eventDescription": "Any completed build",
        "consumerId": "jenkins",
        "consumerActionId": "triggerGenericBuild",
        "actionDescription": "Server: ossbinjenkins.cloudapp.net, Build: GitBuild",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-22T21:40:27.12Z",
        "modifiedBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "modifiedDate": "2014-05-22T21:40:27.12Z",
        "publisherInputs": {
            "buildStatus": "",
            "definitionName": "",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "tfsSubscriptionId": "fe4c65f7-e421-4cee-b4d9-055b7239a79c"
        },
        "consumerInputs": {
            "buildName": "GitBuild",
            "serverBaseUrl": "http://ossbinjenkins.cloudapp.net:8080/",
            "username": "ossadmin",
            "password": "********"
        }
        },
        {
        "id": "a3c0ef7e-610c-4321-9a05-6d74e4930c7d",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/a3c0ef7e-610c-4321-9a05-6d74e4930c7d",
        "status": "disabledBySystem",
        "publisherId": "tfs",
        "eventType": "build.complete",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-02T19:13:45.767Z",
        "modifiedBy": {
            "id": "31394b6e-666e-4ca8-8f92-4cc712caf9e2"
        },
        "modifiedDate": "2014-06-09T14:41:54.653Z",
        "publisherInputs": {
            "buildStatus": "",
            "definitionName": "MyWebSite CI",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "9e1cdeec-05f9-4ca0-9462-fde704958419"
        },
        "consumerInputs": {
            "url": "http://requestb.in/stkb4jst"
        }
        },
        {
        "id": "be80ffe3-7463-4961-b5fd-f3b075a720c4",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/be80ffe3-7463-4961-b5fd-f3b075a720c4",
        "status": "onProbation",
        "publisherId": "tfs",
        "eventType": "build.complete",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "Any completed build.",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "To host requestb.in",
        "probationRetries": 6,
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-06-11T15:14:09.27Z",
        "modifiedBy": {
            "id": "31394b6e-666e-4ca8-8f92-4cc712caf9e2"
        },
        "modifiedDate": "2014-10-07T22:19:27.41Z",
        "publisherInputs": {
            "buildStatus": "",
            "definitionName": "",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "ed56d972-3668-42c3-9a9f-82547ae2c391"
        },
        "consumerInputs": {
            "url": "http://requestb.in/1c6c3bh1"
        }
        },
        {
        "id": "25bc678f-dc35-47b3-8924-2c9f907f39a7",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/25bc678f-dc35-47b3-8924-2c9f907f39a7",
        "status": "onProbation",
        "publisherId": "tfs",
        "eventType": "git.push",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "",
        "probationRetries": 2,
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-02T19:14:03.27Z",
        "modifiedBy": {
            "id": "31394b6e-666e-4ca8-8f92-4cc712caf9e2"
        },
        "modifiedDate": "2014-06-30T17:48:52.017Z",
        "publisherInputs": {
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "390db3c8-616d-417a-9b44-725f415a4409"
        },
        "consumerInputs": {
            "url": "http://requestb.in/stkb4jst"
        }
        },
        {
        "id": "f7d8e1a8-1d3c-4f91-bc94-7ffd6ce9f190",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/f7d8e1a8-1d3c-4f91-bc94-7ffd6ce9f190",
        "status": "onProbation",
        "publisherId": "tfs",
        "eventType": "git.push",
        "resourceVersion": null,
        "eventDescription": "Any branch on any repository",
        "consumerId": "jenkins",
        "consumerActionId": "triggerGenericBuild",
        "actionDescription": "Server: fabrikam-fiber-inc.ci.cloudbees.com, Build: MyBuild",
        "probationRetries": 1,
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-06-09T21:02:19.82Z",
        "modifiedBy": {
            "id": "31394b6e-666e-4ca8-8f92-4cc712caf9e2"
        },
        "modifiedDate": "2014-06-30T18:11:06.19Z",
        "publisherInputs": {
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "fb307bd5-cf4c-41f1-b26f-077b417627ba"
        },
        "consumerInputs": {
            "buildName": "MyBuild",
            "buildParameterized": "False",
            "serverBaseUrl": "https://fabrikam-fiber-inc.ci.cloudbees.com",
            "username": "fabrikamfiber3@hotmail.com",
            "password": "********"
        }
        },
        {
        "id": "ef9a3751-f8eb-4105-98cc-e29008281695",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/ef9a3751-f8eb-4105-98cc-e29008281695",
        "publisherId": "tfs",
        "eventType": "git.push",
        "resourceVersion": null,
        "eventDescription": "",
        "consumerId": "trello",
        "consumerActionId": "createCard",
        "actionDescription": "",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-04-16T21:40:46.5Z",
        "modifiedBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "modifiedDate": "2014-04-16T21:40:46.5Z",
        "publisherInputs": {
            "branch": "master",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "repository": "278d5cd2-584d-4b63-824a-2ba458937249",
            "tfsSubscriptionId": "416c686b-de28-4f2b-bfc2-33c9f5392fed"
        },
        "consumerInputs": {
            "addToTop": "True",
            "boardId": "531e1ae7f8f090f93829e83c",
            "listId": "531e1babb29c372b47783433",
            "userToken": "********"
        }
        },
        {
        "id": "5c11cf6b-b9f6-4403-a2dc-4ff7a1f99f9f",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/5c11cf6b-b9f6-4403-a2dc-4ff7a1f99f9f",
        "publisherId": "tfs",
        "eventType": "tfvc.checkin",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "Path $/Fabrikam-Fiber-TFVC",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "To host requestb.in",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-12T22:38:28.837Z",
        "modifiedBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "modifiedDate": "2014-05-12T22:38:28.837Z",
        "publisherInputs": {
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "path": "$/Fabrikam-Fiber-TFVC",
            "projectId": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "tfsSubscriptionId": "6bf0f776-1e2e-45fc-90ee-ca8b00ac1c85"
        },
        "consumerInputs": {
            "url": "http://requestb.in/z1iwd9z1"
        }
        },
        {
        "id": "1499c133-e888-4bf9-baa8-519d5eda559b",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/1499c133-e888-4bf9-baa8-519d5eda559b",
        "publisherId": "tfs",
        "eventType": "workitem.commented",
        "resourceVersion": null,
        "eventDescription": "Any work item",
        "consumerId": "zendesk",
        "consumerActionId": "createPrivateComment",
        "actionDescription": "Account name: FabrikamFiber",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-20T20:29:49.52Z",
        "modifiedBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "modifiedDate": "2014-05-20T20:29:49.52Z",
        "publisherInputs": {
            "areaPath": "",
            "commentPattern": "Zendesk:",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "tfsSubscriptionId": "e1d1041d-4722-4240-8e0f-8123c90e4570",
            "workItemType": ""
        },
        "consumerInputs": {
            "accountName": "FabrikamFiber",
            "username": "fabrikamfiber3@hotmail.com",
            "apiToken": "********"
        }
        },
        {
        "id": "177922d7-2f1b-410a-8a2c-bad1dce444bc",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/177922d7-2f1b-410a-8a2c-bad1dce444bc",
        "publisherId": "tfs",
        "eventType": "workitem.commented",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-02T19:14:35.39Z",
        "modifiedBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "modifiedDate": "2014-05-02T19:14:35.39Z",
        "publisherInputs": {
            "areaPath": "",
            "commentPattern": "My",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "68c12bdc-ba05-4faa-8505-9612987d2ff0",
            "workItemType": ""
        },
        "consumerInputs": {
            "url": "http://requestb.in/stkb4jst"
        }
        },
        {
        "id": "11c6b191-6b61-4ca0-96ed-99719ecdd916",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/11c6b191-6b61-4ca0-96ed-99719ecdd916",
        "status": "disabledBySystem",
        "publisherId": "tfs",
        "eventType": "workitem.created",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-02T19:14:20.23Z",
        "modifiedBy": {
            "id": "31394b6e-666e-4ca8-8f92-4cc712caf9e2"
        },
        "modifiedDate": "2014-09-30T20:57:27.783Z",
        "publisherInputs": {
            "areaPath": "",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "4ee183da-f941-4d82-8139-5d1a5c0b6dcc",
            "workItemType": ""
        },
        "consumerInputs": {
            "url": "http://requestb.in/stkb4jst"
        }
        },
        {
        "id": "6fd8cd25-6527-4ad5-8729-e0beab730931",
        "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/6fd8cd25-6527-4ad5-8729-e0beab730931",
        "status": "disabledBySystem",
        "publisherId": "tfs",
        "eventType": "workitem.updated",
        "resourceVersion": "1.0-preview.1",
        "eventDescription": "",
        "consumerId": "webHooks",
        "consumerActionId": "httpRequest",
        "actionDescription": "",
        "createdBy": {
            "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
        },
        "createdDate": "2014-05-02T19:14:46.243Z",
        "modifiedBy": {
            "id": "31394b6e-666e-4ca8-8f92-4cc712caf9e2"
        },
        "modifiedDate": "2014-08-04T22:24:21.067Z",
        "publisherInputs": {
            "areaPath": "",
            "changedFields": "",
            "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
            "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "tfsSubscriptionId": "da2238b1-724d-4757-97fa-9cae9388cbdc",
            "workItemType": ""
        },
        "consumerInputs": {
            "url": "http://requestb.in/stkb4jst"
        }
        }
    ]
}
```



## Get a subscription

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/8dea9aba-3a9a-4ad0-860f-2a5c7379e3eb?api-version=1.0
```

#### Sample response

```json
{
  "id": "8dea9aba-3a9a-4ad0-860f-2a5c7379e3eb",
  "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/8dea9aba-3a9a-4ad0-860f-2a5c7379e3eb",
  "publisherId": "tfs",
  "eventType": "build.complete",
  "resourceVersion": null,
  "eventDescription": "Build CustomerAddressModule, Status Succeeded",
  "consumerId": "myGet",
  "consumerActionId": "publishPackage",
  "actionDescription": "Feed: fabrikam-package",
  "createdBy": {
    "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
  },
  "createdDate": "2014-05-20T19:47:15.247Z",
  "modifiedBy": {
    "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
  },
  "modifiedDate": "2014-05-20T19:47:15.247Z",
  "publisherInputs": {
    "buildStatus": "Succeeded",
    "definitionName": "CustomerAddressModule",
    "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
    "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "tfsSubscriptionId": "e15ed970-8b92-4b71-8ec2-f99b5db5e34d"
  },
  "consumerInputs": {
    "feedId": "fabrikam-package",
    "packageSourceId": "ef1a74fb-53e3-46b8-9d8f-03a38a9c7b78"
  }
}
```


## Create a subscription
<a name="createasubscription" />

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions?api-version=1.0
```
```json
{
  "publisherId": "tfs",
  "eventType": "build.complete",
  "resourceVersion": "1.0-preview.1",
  "consumerId": "webHooks",
  "consumerActionId": "httpRequest",
  "publisherInputs": {
    "buildStatus": "Failed",
    "definitionName": "MyWebSite CI",
    "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c"
  },
  "consumerInputs": {
    "url": "https://myservice/myhookeventreceiver"
  }
}
```

#### Sample response

```json
{
  "id": "fd672255-8b6b-4769-9260-beea83d752ce",
  "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/fd672255-8b6b-4769-9260-beea83d752ce",
  "publisherId": "tfs",
  "eventType": "build.complete",
  "resourceVersion": "1.0-preview.1",
  "eventDescription": "Build MyWebSite CI, status Failed",
  "consumerId": "webHooks",
  "consumerActionId": "httpRequest",
  "actionDescription": "To host myservice",
  "createdBy": {
    "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
  },
  "createdDate": "2014-10-27T15:37:24.873Z",
  "modifiedBy": {
    "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
  },
  "modifiedDate": "2014-10-27T15:37:24.873Z",
  "publisherInputs": {
    "buildStatus": "Failed",
    "definitionName": "MyWebSite CI",
    "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
    "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "tfsSubscriptionId": "3e8b33e7-426d-4c92-9bf9-58e163dd7dd5"
  },
  "consumerInputs": {
    "url": "https://myservice/myhookeventreceiver"
  }
}
```


## Update a subscription

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/fd672255-8b6b-4769-9260-beea83d752ce?api-version=1.0
```
```json
{
  "publisherId": "tfs",
  "eventType": "build.complete",
  "resourceVersion": "1.0-preview.1",
  "consumerId": "webHooks",
  "consumerActionId": "httpRequest",
  "publisherInputs": {
    "buildStatus": "Failed",
    "definitionName": "MyWebSite CI",
    "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c"
  },
  "consumerInputs": {
    "url": "https://myservice/newreceiver"
  }
}
```

#### Sample response

```json
{
  "id": "fd672255-8b6b-4769-9260-beea83d752ce",
  "url": "https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/fd672255-8b6b-4769-9260-beea83d752ce",
  "publisherId": "tfs",
  "eventType": "build.complete",
  "resourceVersion": "1.0-preview.1",
  "eventDescription": "Build MyWebSite CI, status Failed",
  "consumerId": "webHooks",
  "consumerActionId": "httpRequest",
  "actionDescription": "To host myservice",
  "createdBy": {
    "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
  },
  "createdDate": "2014-10-27T15:37:24.873Z",
  "modifiedBy": {
    "id": "00ca946b-2fe9-4f2a-ae2f-40d5c48001bc"
  },
  "modifiedDate": "2014-10-27T15:37:26.23Z",
  "publisherInputs": {
    "buildStatus": "Failed",
    "definitionName": "MyWebSite CI",
    "hostId": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
    "projectId": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "tfsSubscriptionId": "3e8b33e7-426d-4c92-9bf9-58e163dd7dd5"
  },
  "consumerInputs": {
    "url": "https://myservice/newreceiver"
  }
}
```


## Delete a subscription

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/hooks/subscriptions/fd672255-8b6b-4769-9260-beea83d752ce?api-version=1.0
```





