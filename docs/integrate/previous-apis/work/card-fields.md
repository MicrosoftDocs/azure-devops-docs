---
title: Card Fields for Kanban Boards | REST API Reference for Team Foundation Server
description: Work with the fields on the cards in Kanban boards programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: C2E9062C-3C18-42BC-A057-794FD2F2BA35
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Card fields on a Kanban board

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

Use card fields to display work item fields on cards on Kanban boards.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get card fields for a board
<a name="getcardfieldsforaboard" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/cardSettings?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| team	    | string  | Project's default team ID | Name or ID of a team within the project.
| board	| string  || Name or ID of the specific board.
| Query
| api-version | string  || [Version](../../concepts/rest-api-versioning.md) of the API to use.

### By ID

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/_apis/work/boards/41688c28-a3fc-4811-977d-247a33f18a00/cardsettings?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "cards": {
    "Bug": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.State"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Severity"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarAndFullName",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "false"
      }
    ],
    "Product Backlog Item": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.TeamProject"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.BusinessValue"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarOnly",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "true"
      }
    ]
  }
}
```


### By name

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam/_apis/work/boards/Backlog%20items/cardsettings?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "cards": {
    "Bug": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.State"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Severity"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarAndFullName",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "false"
      }
    ],
    "Product Backlog Item": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.TeamProject"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.BusinessValue"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarOnly",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "true"
      }
    ]
  }
}
```


## Update card fields on a board
<a name="updatecardfieldsonaboard" />
Allow users to add, update or delete card fields.

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/cardSettings?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:--------|:------------------------------
| URL
| instance  | string  |   | TFS server name ({server:port}).
| project   | string  |  | Name or ID of a project.
| team	    | string  | Project's default team ID | Name or ID of a team within the project.
| board	| string  |  | Name or ID of the specific board.
| Query
| api-version | string  |  |[Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| cards | name/value pair | | Name is a valid workitem type singular name such as "Bug", "Product Backlog Item", etc. The associated value pair is a list of field identifiers such as "System.AssignedTo", "System.Title", etc.
| card.fieldIdentifier	| string	|  | Field reference name such as "System.Id", "System.Title", etc. For settings where fieldIdentifier is not defined, the key value pair will apply as a global setting e.g. if showEmptyFields is set to false, it will not display fields when they are empty.
| card.displayFormat	| string	|  | Optional display format associated with the field. For "System.AssignedTo" fieldIdentifier can take one of the following 3 options, "AvatarOnly", "FullName" and "AvatarAndFullName".
| card.displayType	| string	|  | Optional string that identifies whether a field is a core field or an additional field. e.g. card.displayType can take one of the following values, "CORE", "ADDITIONAL", or "COREANDADDITIONAL". "CORE" refers to a field being only Core e.g. "System.Id", "ADDITIONAL" refers to a field being only additional e.g. "System.ChangedBy", and "COREANDADDITIONAL" refers to fields that can be both core and additional e.g. "System.AssignedTo".

#### Assumption:
1. Field identifier order is determined by the order of elements in post data.
2. Any existing field identifier that is **not** on the post data will not be displayed.
3. For each work item type, all the existing field identifiers must be mentioned even if a single identifier needs to be updated. If any of the field identifiers are not valid, the card fields will not be updated.
4. Up to 10 additional fieldIdentifiers can be configured in card fields.

#### When update fails, it will return bad request. Following exceptions can be thrown depending on the errors:
1. CardSettingsValidationFailureException
2. CardSettingsUpdateFailureException
3. NoPermissionUpdateCardSettingsException

Status code: 400
```json
{
$id: "1"
innerException: null
message: "TF1530014: The card settings are invalid. Error message: Field identifier 'System.AssignedTo' is required but missing from 'Product Backlog Item' card type. "
typeName: "Microsoft.TeamFoundation.Agile.Common.Exceptions.CardSettingsValidationFailureException, Microsoft.TeamFoundation.Agile.Common, Version=14.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"
typeKey: "CardSettingsValidationFailureException"
errorCode: 0
eventId: 3000
}
```

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam/_apis/work/boards/Backlog%20items/cardsettings?api-version=2.0-preview.1
```
```json
{
  "cards": {
    "Bug": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.State"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Severity"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarAndFullName",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "false"
      }
    ],
    "Product Backlog Item": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.TeamProject"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.BusinessValue"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarOnly",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "true"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "cards": {
    "Bug": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.State"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Severity"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarAndFullName",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "false"
      }
    ],
    "Product Backlog Item": [
      {
        "fieldIdentifier": "System.Title"
      },
      {
        "fieldIdentifier": "System.ChangedBy"
      },
      {
        "fieldIdentifier": "System.TeamProject"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.Priority"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Common.BusinessValue"
      },
      {
        "fieldIdentifier": "System.AssignedTo",
        "displayFormat": "AvatarOnly",
        "displayType": "CORE"
      },
      {
        "fieldIdentifier": "Microsoft.VSTS.Scheduling.Effort",
        "displayType": "CORE"
      },
      {
        "showEmptyFields": "true"
      }
    ]
  }
}
```


