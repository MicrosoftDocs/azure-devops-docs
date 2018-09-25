---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Templates | REST API Reference for Team Foundation Server
description: Work with work item templates programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 0FF507EB-0E59-45F9-8A04-E3E95BA3DA58
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/26/2016
---

# Work item templates
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

[!code-REST [GET__wit_templates__template1Id__json](./_data/templates/GET__wit_templates__template1Id_.json)]

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

[!code-REST [GET__wit_templates__json](./_data/templates/GET__wit_templates.json)]

### Filter by work item type

[!code-REST [GET__wit_templates_workItemTypeName-Task__json](./_data/templates/GET__wit_templates_workItemTypeName-Task.json)]

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

[!code-REST [POST__wit_templates_json](./_data/templates/POST__wit_templates.json)]

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

[!code-REST [PUT__wit_templates__template1Id__json](./_data/templates/PUT__wit_templates__template1Id_.json)]

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

[!code-REST [DELETE__wit_templates__template1Id__json](./_data/templates/DELETE__wit_templates__template1Id_.json)]