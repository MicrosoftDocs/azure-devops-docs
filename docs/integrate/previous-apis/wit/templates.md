---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Templates | REST API Reference for Team Foundation Server
description: Work with work item templates programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 0FF507EB-0E59-45F9-8A04-E3E95BA3DA58
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/26/2016
---

# Work item templates

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version3-preview](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

Templates are sets of field values that are saved and can be used to create new items or update existing work items.
Templates are scoped to a work item type and an owner. Today, the only possible owners are teams. 
## Get a template
Returns all details about a template, including field-value pairs, based on a specified template ID.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/wit/templates/{templateid}?api-version={version}
```

| Parameter       | Type    | Notes      | 
|:----------------|:--------|:------------|
| URL             |         |             |            
| instance        | string  | TFS server name ({server:port}).  | 
| project         | string  | Name or ID of the project.  |
| team            | string  | Name or ID of the team.          |  
| templateid      | GUID    | ID of the template.  | 
| Query |         |         |  
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.  | 

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/Fabrikam-Fiber-Git%20Team/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae?api-version=3.0-preview
```

#### Sample response

```json
{
  "fields": {
    "Microsoft.VSTS.Common.Priority": "2",
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.Reason": "New",
    "System.State": "New",
    "System.Title": "<Enter title here>"
  },
  "id": "ed3cb377-0808-4e91-ab8d-6cc5270263ae",
  "name": "Create a new Bug",
  "description": "Creates a new Bug",
  "workItemTypeName": "Bug",
  "_links": {
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
    },
    "self": {
      "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
}
```


## Get a list of templates for a team
Enumerate the templates owned by a team and for a work item type. The team must be specified, but the work item type is optional. This returns a list of shallow references to templates. For the full details of a template, including all field values, you must use the GET call for that specific template, listed below.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/wit/templates?[workitemtypename={string}]&api-version={version}
```

| Parameter           | Type    | Default                       | Notes       |
|:--------------------|:--------|:------------------------------|:------------|
| URL                 |         |                               |             | 
| instance            | string  |                               | TFS server name ({server:port}). | 
| project             | string  |                               | Name or ID of the project.| 
| team                | string  |                               | Name or ID of the team.        |  
| Query               |         |                               |             | 
| api-version         | string  |                               | [Version](../../concepts/rest-api-versioning.md) of the API to use.| 
| workitemtypename    | string  | parameter excluded by default | Work Item Type name (not refname), further filtering a team's templates.|   

### List all templates in a team

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/Fabrikam-Fiber-Git%20Team/_apis/wit/templates?api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "ed3cb377-0808-4e91-ab8d-6cc5270263ae",
      "name": "Create a new Bug",
      "description": "Creates a new Bug",
      "workItemTypeName": "Bug",
      "_links": {
        "workItemType": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
        },
        "self": {
          "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
    },
    {
      "id": "b72b7a65-0511-4d04-ad7b-7d7e5d370a40",
      "name": "Mark Task as Active Pri 1",
      "description": "Mark Task as Active Pri 1",
      "workItemTypeName": "Task",
      "_links": {
        "workItemType": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
        },
        "self": {
          "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/b72b7a65-0511-4d04-ad7b-7d7e5d370a40"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/b72b7a65-0511-4d04-ad7b-7d7e5d370a40"
    }
  ]
}
```


### Filter by work item type

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/Fabrikam-Fiber-Git%20Team/_apis/wit/templates?workItemTypeName=Task&api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "b72b7a65-0511-4d04-ad7b-7d7e5d370a40",
      "name": "Mark Task as Active Pri 1",
      "description": "Mark Task as Active Pri 1",
      "workItemTypeName": "Task",
      "_links": {
        "workItemType": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Task"
        },
        "self": {
          "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/b72b7a65-0511-4d04-ad7b-7d7e5d370a40"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/b72b7a65-0511-4d04-ad7b-7d7e5d370a40"
    }
  ]
}
```


## Create a template
Create a new template, specifying the team and work item type along with name, description, and field values. The response will confirm these values and provide the template ID.

```no-highlight
POST https://{instance}/DefaultCollection/{project}/{team}/_apis/wit/templates?api-version={version}
```

| Parameter       | Type    | Notes  | 
|:----------------|:--------|:------------| 
| URL             |         |             | 
| instance        | string  | TFS server name ({server:port}). | 
| project         | string  | Name or ID of the project. |
| team            | string  | Name or ID of the team.         |  
| Query             |         |             |
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use. | 
| Request body             |         |             |
| workItemTypeName   | JSON    | Work Item Type name (not refname), that the template will be scoped to.
| name			  | JSON    | Name of the template. | 
| description     | JSON    | Description of the template. | 
| fields          | JSON    | Field-value pairs of fields that will be applied by the template. | 

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/Fabrikam-Fiber-Git%20Team/_apis/wit/templates?api-version=3.0-preview
```
```json
{
  "description": "Creates a new Bug",
  "name": "Create a new Bug",
  "id": null,
  "workItemTypeName": "Bug",
  "fields": {
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "Microsoft.VSTS.Common.Priority": "2",
    "System.Reason": "New",
    "System.State": "New",
    "System.Title": "<Enter title here>",
    "Microsoft.VSTS.Common.ValueArea": "Business"
  }
}
```

#### Sample response

```json
{
  "fields": {
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "Microsoft.VSTS.Common.Priority": "2",
    "System.Reason": "New",
    "System.State": "New",
    "System.Title": "<Enter title here>",
    "Microsoft.VSTS.Common.ValueArea": "Business"
  },
  "id": "ed3cb377-0808-4e91-ab8d-6cc5270263ae",
  "name": "Create a new Bug",
  "description": "Creates a new Bug",
  "workItemTypeName": "Bug",
  "_links": {
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
    },
    "self": {
      "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
}
```


## Replace a template
Editing templates is a full replace. If the description element is not provided, the description is set to be blank. The type, name, and fields elements must be specified for the call to be valid. 

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/{team}/_apis/wit/templates/{templateid}?api-version={version}
```

| Parameter       | Type    | Notes  |  
|:----------------|:--------|:------------| 
| URL             |         |             |
| instance        | string  | TFS server name ({server:port}).  |  
| project         | string  | Name or ID of the project.  |  
| team            | string  | Name or ID of the team.         |  
| templateid      | GUID    | ID of the template to replace.  |  
| Query             |         |             |
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.  |  
| Body             |         |             | 
| template        | JSON    | Updated template details.  |  
| workItemTypeName   | JSON    | Work Item Type name (not refname), that the template will be scoped to.  |  
| name			  | JSON    | Name of the template.  |  
| description     | JSON    | Description of the template.  |  
| fields          | JSON    | Field-value pairs of fields that will be applied by the template.  |  

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/Fabrikam-Fiber-Git%20Team/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae?api-version=3.0-preview
```
```json
{
  "description": "Updated: Creates a new Bug",
  "name": "Create a new Bug",
  "id": "ed3cb377-0808-4e91-ab8d-6cc5270263ae",
  "workItemTypeName": "Bug",
  "fields": {
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "Microsoft.VSTS.Common.Priority": "2",
    "System.Reason": "New",
    "System.State": "New",
    "System.Title": "<Enter Title Here>"
  }
}
```

#### Sample response

```json
{
  "fields": {
    "Microsoft.VSTS.Common.Priority": "2",
    "System.AreaPath": "Fabrikam-Fiber-Git",
    "System.IterationPath": "Fabrikam-Fiber-Git",
    "System.Reason": "New",
    "System.State": "New",
    "System.Title": "<Enter Title Here>"
  },
  "id": "ed3cb377-0808-4e91-ab8d-6cc5270263ae",
  "name": "Create a new Bug",
  "description": "Updated: Creates a new Bug",
  "workItemTypeName": "Bug",
  "_links": {
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/workItemTypes/Bug"
    },
    "self": {
      "href": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae"
}
```


## Delete a template
Hard-delete a template by providing the ID.

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/{team}/_apis/wit/templates/{templateid}?api-version={version}
```

| Parameter       | Type    | Notes  |  
|:----------------|:--------|:------------|  
| URL             |         |             | 
| instance        | string  | TFS server name ({server:port}).  |  
| project         | string  | Name or ID of the project.  |  
| templateid      | GUID    | ID of the template to remove.  |  
| team            | string  | Name or ID of the team.         |  
| Query            |         |             | 
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.  |  

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/Fabrikam-Fiber-Git%20Team/_apis/wit/templates/ed3cb377-0808-4e91-ab8d-6cc5270263ae?api-version=3.0-preview
```
