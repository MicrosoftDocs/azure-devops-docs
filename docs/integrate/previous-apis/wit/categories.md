---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Type Categories | REST API Reference for Team Foundation Server
description: Work with categories of work item types programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 5DACB173-F971-4288-8EBD-29B4EF98237C
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Categories of work item types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[Categories](http://msdn.microsoft.com/library/dd695775.aspx) define the set of work item types that are used in a specific role in your project.
For example, work item types in the "requirements" category show up in your backlog.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work item type categories
<a name="getalistofworkitemtypecategories" />
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypeCategories?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:-----------------
| URL
| instance      | string    | TFS server name ({server:port}).
| project 		| string 	| Name or ID of a project that contains the categories
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workItemTypeCategories?api-version=1.0
```

#### Sample response

```json
{
  "count": 14,
  "value": [
    {
      "name": "Bug Category",
      "referenceName": "Microsoft.BugCategory",
      "defaultWorkItemType": {
        "name": "Bug",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
      },
      "workItemTypes": [
        {
          "name": "Bug",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.BugCategory"
    },
    {
      "name": "Feature Category",
      "referenceName": "Microsoft.FeatureCategory",
      "defaultWorkItemType": {
        "name": "Feature",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feature"
      },
      "workItemTypes": [
        {
          "name": "Feature",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feature"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.FeatureCategory"
    },
    {
      "name": "Requirement Category",
      "referenceName": "Microsoft.RequirementCategory",
      "defaultWorkItemType": {
        "name": "Product Backlog Item",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
      },
      "workItemTypes": [
        {
          "name": "Product Backlog Item",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.RequirementCategory"
    },
    {
      "name": "Test Case Category",
      "referenceName": "Microsoft.TestCaseCategory",
      "defaultWorkItemType": {
        "name": "Test Case",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Case"
      },
      "workItemTypes": [
        {
          "name": "Test Case",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Case"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.TestCaseCategory"
    },
    {
      "name": "Shared Step Category",
      "referenceName": "Microsoft.SharedStepCategory",
      "defaultWorkItemType": {
        "name": "Shared Steps",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Steps"
      },
      "workItemTypes": [
        {
          "name": "Shared Steps",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Steps"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.SharedStepCategory"
    },
    {
      "name": "Code Review Request Category",
      "referenceName": "Microsoft.CodeReviewRequestCategory",
      "defaultWorkItemType": {
        "name": "Code Review Request",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Request"
      },
      "workItemTypes": [
        {
          "name": "Code Review Request",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Request"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.CodeReviewRequestCategory"
    },
    {
      "name": "Code Review Response Category",
      "referenceName": "Microsoft.CodeReviewResponseCategory",
      "defaultWorkItemType": {
        "name": "Code Review Response",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Response"
      },
      "workItemTypes": [
        {
          "name": "Code Review Response",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Response"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.CodeReviewResponseCategory"
    },
    {
      "name": "Feedback Request Category",
      "referenceName": "Microsoft.FeedbackRequestCategory",
      "defaultWorkItemType": {
        "name": "Feedback Request",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Request"
      },
      "workItemTypes": [
        {
          "name": "Feedback Request",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Request"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.FeedbackRequestCategory"
    },
    {
      "name": "Feedback Response Category",
      "referenceName": "Microsoft.FeedbackResponseCategory",
      "defaultWorkItemType": {
        "name": "Feedback Response",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Response"
      },
      "workItemTypes": [
        {
          "name": "Feedback Response",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Response"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.FeedbackResponseCategory"
    },
    {
      "name": "Task Category",
      "referenceName": "Microsoft.TaskCategory",
      "defaultWorkItemType": {
        "name": "Task",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
      },
      "workItemTypes": [
        {
          "name": "Task",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.TaskCategory"
    },
    {
      "name": "Hidden Types Category",
      "referenceName": "Microsoft.HiddenCategory",
      "defaultWorkItemType": {
        "name": "Code Review Request",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Request"
      },
      "workItemTypes": [
        {
          "name": "Code Review Request",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Request"
        },
        {
          "name": "Code Review Response",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Code%20Review%20Response"
        },
        {
          "name": "Feedback Request",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Request"
        },
        {
          "name": "Feedback Response",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Feedback%20Response"
        },
        {
          "name": "Shared Steps",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Steps"
        },
        {
          "name": "Shared Parameter",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Parameter"
        },
        {
          "name": "Test Plan",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Plan"
        },
        {
          "name": "Test Suite",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Suite"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.HiddenCategory"
    },
    {
      "name": "Shared Parameter Category",
      "referenceName": "Microsoft.SharedParameterCategory",
      "defaultWorkItemType": {
        "name": "Shared Parameter",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Parameter"
      },
      "workItemTypes": [
        {
          "name": "Shared Parameter",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Shared%20Parameter"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.SharedParameterCategory"
    },
    {
      "name": "Test Plan Category",
      "referenceName": "Microsoft.TestPlanCategory",
      "defaultWorkItemType": {
        "name": "Test Plan",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Plan"
      },
      "workItemTypes": [
        {
          "name": "Test Plan",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Plan"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.TestPlanCategory"
    },
    {
      "name": "Test Suite Category",
      "referenceName": "Microsoft.TestSuiteCategory",
      "defaultWorkItemType": {
        "name": "Test Suite",
        "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Suite"
      },
      "workItemTypes": [
        {
          "name": "Test Suite",
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Test%20Suite"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.TestSuiteCategory"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfWorkItemTypeCategories method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemTypeCategoriesSample.cs#L23)

## Get a work item type category
<a name="getaworkitemtypecategory" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypeCategories/{name}?api-version={version}
```

| Property  | Type 		| Description |
|:--------------|:----------|:-----------------
| instance  | string    | TFS server name ({server:port}).
| project 	| string 	| Name or ID of a project that contains the categories
| name 		| string 	| Name of the category
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/workItemTypeCategories/Microsoft.RequirementCategory?api-version=1.0
```

#### Sample response

```json
{
  "name": "Requirement Category",
  "referenceName": "Microsoft.RequirementCategory",
  "defaultWorkItemType": {
    "name": "Product Backlog Item",
    "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
  },
  "workItemTypes": [
    {
      "name": "Product Backlog Item",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Product%20Backlog%20Item"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypeCategories/Microsoft.RequirementCategory"
}
```


#### Sample code

* [C# (GetWorkItemCategory method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemTypeCategoriesSample.cs#L43)
