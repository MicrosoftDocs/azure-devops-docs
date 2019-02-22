---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Fields | REST API Reference for Team Foundation Server
description: Work with work item fields programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: A2365AB4-482A-46A5-A235-2D3C94C2ED96
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item fields

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work item fields

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/fields?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:----------------------------
| URL
| instance      | string    | TFS server name ({server:port}).
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/fields?api-version=1.0
```

#### Sample response

```json
{
  "count": 121,
  "value": [
    {
      "name": "Link Type",
      "referenceName": "System.Links.LinkType",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Links.LinkType"
    },
    {
      "name": "Iteration Path",
      "referenceName": "System.IterationPath",
      "type": "treePath",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Under",
          "name": "Under"
        },
        {
          "referenceName": "SupportedOperations.NotUnder",
          "name": "Not Under"
        },
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
    },
    {
      "name": "Iteration ID",
      "referenceName": "System.IterationId",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationId"
    },
    {
      "name": "External Link Count",
      "referenceName": "System.ExternalLinkCount",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ExternalLinkCount"
    },
    {
      "name": "Iteration Level 7",
      "referenceName": "System.IterationLevel7",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel7"
    },
    {
      "name": "Iteration Level 6",
      "referenceName": "System.IterationLevel6",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel6"
    },
    {
      "name": "Iteration Level 5",
      "referenceName": "System.IterationLevel5",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel5"
    },
    {
      "name": "Iteration Level 4",
      "referenceName": "System.IterationLevel4",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel4"
    },
    {
      "name": "Iteration Level 3",
      "referenceName": "System.IterationLevel3",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel3"
    },
    {
      "name": "Iteration Level 2",
      "referenceName": "System.IterationLevel2",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel2"
    },
    {
      "name": "Iteration Level 1",
      "referenceName": "System.IterationLevel1",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationLevel1"
    },
    {
      "name": "Area Level 7",
      "referenceName": "System.AreaLevel7",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel7"
    },
    {
      "name": "Area Level 6",
      "referenceName": "System.AreaLevel6",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel6"
    },
    {
      "name": "Area Level 5",
      "referenceName": "System.AreaLevel5",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel5"
    },
    {
      "name": "Area Level 4",
      "referenceName": "System.AreaLevel4",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel4"
    },
    {
      "name": "Area Level 3",
      "referenceName": "System.AreaLevel3",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel3"
    },
    {
      "name": "Area Level 2",
      "referenceName": "System.AreaLevel2",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel2"
    },
    {
      "name": "Area Level 1",
      "referenceName": "System.AreaLevel1",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaLevel1"
    },
    {
      "name": "Team Project",
      "referenceName": "System.TeamProject",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
    },
    {
      "name": "TF Server",
      "referenceName": "System.TFServer",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TFServer"
    },
    {
      "name": "InDeletedTreeFlag",
      "referenceName": "System.InDeletedTreeFlag",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.InDeletedTreeFlag"
    },
    {
      "name": "InAdminOnlyTreeFlag",
      "referenceName": "System.InAdminOnlyTreeFlag",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.InAdminOnlyTreeFlag"
    },
    {
      "name": "Hyperlink Count",
      "referenceName": "System.HyperLinkCount",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.HyperLinkCount"
    },
    {
      "name": "Attached File Count",
      "referenceName": "System.AttachedFileCount",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFileCount"
    },
    {
      "name": "ProjectID",
      "referenceName": "System.ProjectId",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ProjectId"
    },
    {
      "name": "Work Item Form",
      "referenceName": "System.WorkItemForm",
      "type": "plainText",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemForm"
    },
    {
      "name": "Work Item FormID",
      "referenceName": "System.WorkItemFormId",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemFormId"
    },
    {
      "name": "Node Name",
      "referenceName": "System.NodeName",
      "type": "string",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeName"
    },
    {
      "name": "Node Type",
      "referenceName": "System.NodeType",
      "type": "string",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.NodeType"
    },
    {
      "name": "Area Path",
      "referenceName": "System.AreaPath",
      "type": "treePath",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Under",
          "name": "Under"
        },
        {
          "referenceName": "SupportedOperations.NotUnder",
          "name": "Not Under"
        },
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
    },
    {
      "name": "PersonID",
      "referenceName": "System.PersonId",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.PersonId"
    },
    {
      "name": "Revised Date",
      "referenceName": "System.RevisedDate",
      "type": "dateTime",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RevisedDate"
    },
    {
      "name": "Changed Date",
      "referenceName": "System.ChangedDate",
      "type": "dateTime",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedDate"
    },
    {
      "name": "ID",
      "referenceName": "System.Id",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "name": "Area ID",
      "referenceName": "System.AreaId",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaId"
    },
    {
      "name": "Authorized As",
      "referenceName": "System.AuthorizedAs",
      "type": "string",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedAs"
    },
    {
      "name": "Title",
      "referenceName": "System.Title",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "name": "State",
      "referenceName": "System.State",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    },
    {
      "name": "Authorized Date",
      "referenceName": "System.AuthorizedDate",
      "type": "dateTime",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AuthorizedDate"
    },
    {
      "name": "Watermark",
      "referenceName": "System.Watermark",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Watermark"
    },
    {
      "name": "Rev",
      "referenceName": "System.Rev",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Rev"
    },
    {
      "name": "Changed By",
      "referenceName": "System.ChangedBy",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.ChangedBy"
    },
    {
      "name": "Reason",
      "referenceName": "System.Reason",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Reason"
    },
    {
      "name": "Assigned To",
      "referenceName": "System.AssignedTo",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
    },
    {
      "name": "Work Item Type",
      "referenceName": "System.WorkItemType",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
    },
    {
      "name": "Created Date",
      "referenceName": "System.CreatedDate",
      "type": "dateTime",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
    },
    {
      "name": "Created By",
      "referenceName": "System.CreatedBy",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
    },
    {
      "name": "Related Links",
      "referenceName": "System.RelatedLinks",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinks"
    },
    {
      "name": "Attached Files",
      "referenceName": "System.AttachedFiles",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AttachedFiles"
    },
    {
      "name": "Linked Files",
      "referenceName": "System.LinkedFiles",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.LinkedFiles"
    },
    {
      "name": "Description",
      "referenceName": "System.Description",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Description"
    },
    {
      "name": "History",
      "referenceName": "System.History",
      "type": "history",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.History"
    },
    {
      "name": "BIS Links",
      "referenceName": "System.BISLinks",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.BISLinks"
    },
    {
      "name": "Related Link Count",
      "referenceName": "System.RelatedLinkCount",
      "type": "integer",
      "readOnly": true,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.RelatedLinkCount"
    },
    {
      "name": "Tags",
      "referenceName": "System.Tags",
      "type": "plainText",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
    },
    {
      "name": "System Info",
      "referenceName": "Microsoft.VSTS.TCM.SystemInfo",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.SystemInfo"
    },
    {
      "name": "Repro Steps",
      "referenceName": "Microsoft.VSTS.TCM.ReproSteps",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.ReproSteps"
    },
    {
      "name": "State Change Date",
      "referenceName": "Microsoft.VSTS.Common.StateChangeDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateChangeDate"
    },
    {
      "name": "Activated Date",
      "referenceName": "Microsoft.VSTS.Common.ActivatedDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedDate"
    },
    {
      "name": "Activated By",
      "referenceName": "Microsoft.VSTS.Common.ActivatedBy",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ActivatedBy"
    },
    {
      "name": "Closed Date",
      "referenceName": "Microsoft.VSTS.Common.ClosedDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedDate"
    },
    {
      "name": "Closed By",
      "referenceName": "Microsoft.VSTS.Common.ClosedBy",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ClosedBy"
    },
    {
      "name": "Priority",
      "referenceName": "Microsoft.VSTS.Common.Priority",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
    },
    {
      "name": "Severity",
      "referenceName": "Microsoft.VSTS.Common.Severity",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Severity"
    },
    {
      "name": "Integration Build",
      "referenceName": "Microsoft.VSTS.Build.IntegrationBuild",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.IntegrationBuild"
    },
    {
      "name": "Found In",
      "referenceName": "Microsoft.VSTS.Build.FoundIn",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Build.FoundIn"
    },
    {
      "name": "Closing Comment",
      "referenceName": "Microsoft.VSTS.CodeReview.ClosingComment",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosingComment"
    },
    {
      "name": "Associated Context Code",
      "referenceName": "Microsoft.VSTS.CodeReview.ContextCode",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ContextCode"
    },
    {
      "name": "Associated Context Type",
      "referenceName": "Microsoft.VSTS.CodeReview.ContextType",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ContextType"
    },
    {
      "name": "Associated Context",
      "referenceName": "Microsoft.VSTS.CodeReview.Context",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.Context"
    },
    {
      "name": "Associated Context Owner",
      "referenceName": "Microsoft.VSTS.CodeReview.ContextOwner",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ContextOwner"
    },
    {
      "name": "Closed Status Code",
      "referenceName": "Microsoft.VSTS.CodeReview.ClosedStatusCode",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosedStatusCode"
    },
    {
      "name": "Closed Status",
      "referenceName": "Microsoft.VSTS.CodeReview.ClosedStatus",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.ClosedStatus"
    },
    {
      "name": "State Code",
      "referenceName": "Microsoft.VSTS.Common.StateCode",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StateCode"
    },
    {
      "name": "Accepted Date",
      "referenceName": "Microsoft.VSTS.CodeReview.AcceptedDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.AcceptedDate"
    },
    {
      "name": "Accepted By",
      "referenceName": "Microsoft.VSTS.CodeReview.AcceptedBy",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CodeReview.AcceptedBy"
    },
    {
      "name": "Reviewed By",
      "referenceName": "Microsoft.VSTS.Common.ReviewedBy",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.ReviewedBy"
    },
    {
      "name": "Application Type",
      "referenceName": "Microsoft.VSTS.Feedback.ApplicationType",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Feedback.ApplicationType"
    },
    {
      "name": "Application Start Information",
      "referenceName": "Microsoft.VSTS.Feedback.ApplicationStartInformation",
      "type": "plainText",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Feedback.ApplicationStartInformation"
    },
    {
      "name": "Application Launch Instructions",
      "referenceName": "Microsoft.VSTS.Feedback.ApplicationLaunchInstructions",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Feedback.ApplicationLaunchInstructions"
    },
    {
      "name": "Rating",
      "referenceName": "Microsoft.VSTS.Common.Rating",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Rating"
    },
    {
      "name": "Issue",
      "referenceName": "Microsoft.VSTS.Common.Issue",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Issue"
    },
    {
      "name": "Steps",
      "referenceName": "Microsoft.VSTS.TCM.Steps",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Steps"
    },
    {
      "name": "Parameters",
      "referenceName": "Microsoft.VSTS.TCM.Parameters",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.Parameters"
    },
    {
      "name": "Activity",
      "referenceName": "Microsoft.VSTS.Common.Activity",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Activity"
    },
    {
      "name": "Remaining Work",
      "referenceName": "Microsoft.VSTS.Scheduling.RemainingWork",
      "type": "double",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.RemainingWork"
    },
    {
      "name": "Automated Test Name",
      "referenceName": "Microsoft.VSTS.TCM.AutomatedTestName",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestName"
    },
    {
      "name": "Automated Test Storage",
      "referenceName": "Microsoft.VSTS.TCM.AutomatedTestStorage",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestStorage"
    },
    {
      "name": "Automated Test Id",
      "referenceName": "Microsoft.VSTS.TCM.AutomatedTestId",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestId"
    },
    {
      "name": "Automated Test Type",
      "referenceName": "Microsoft.VSTS.TCM.AutomatedTestType",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomatedTestType"
    },
    {
      "name": "Local Data Source",
      "referenceName": "Microsoft.VSTS.TCM.LocalDataSource",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.LocalDataSource"
    },
    {
      "name": "Automation status",
      "referenceName": "Microsoft.VSTS.TCM.AutomationStatus",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.AutomationStatus"
    },
    {
      "name": "Blocked",
      "referenceName": "Microsoft.VSTS.CMMI.Blocked",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.CMMI.Blocked"
    },
    {
      "name": "Backlog Priority",
      "referenceName": "Microsoft.VSTS.Common.BacklogPriority",
      "type": "double",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BacklogPriority"
    },
    {
      "name": "Effort",
      "referenceName": "Microsoft.VSTS.Scheduling.Effort",
      "type": "double",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.Effort"
    },
    {
      "name": "Acceptance Criteria",
      "referenceName": "Microsoft.VSTS.Common.AcceptanceCriteria",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.AcceptanceCriteria"
    },
    {
      "name": "Resolution",
      "referenceName": "Microsoft.VSTS.Common.Resolution",
      "type": "html",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Resolution"
    },
    {
      "name": "Business Value",
      "referenceName": "Microsoft.VSTS.Common.BusinessValue",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.BusinessValue"
    },
    {
      "name": "Target Date",
      "referenceName": "Microsoft.VSTS.Scheduling.TargetDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.TargetDate"
    },
    {
      "name": "Start Date",
      "referenceName": "Microsoft.VSTS.Scheduling.StartDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.StartDate"
    },
    {
      "name": "Finish Date",
      "referenceName": "Microsoft.VSTS.Scheduling.FinishDate",
      "type": "dateTime",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.FinishDate"
    },
    {
      "name": "Test Suite Type Id",
      "referenceName": "Microsoft.VSTS.TCM.TestSuiteTypeId",
      "type": "integer",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.TestSuiteTypeId"
    },
    {
      "name": "Test Suite Type",
      "referenceName": "Microsoft.VSTS.TCM.TestSuiteType",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.TestSuiteType"
    },
    {
      "name": "Query Text",
      "referenceName": "Microsoft.VSTS.TCM.QueryText",
      "type": "plainText",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.QueryText"
    },
    {
      "name": "Test Suite Audit",
      "referenceName": "Microsoft.VSTS.TCM.TestSuiteAudit",
      "type": "plainText",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.TCM.TestSuiteAudit"
    },
    {
      "name": "WEF_4E8EFA1942384BC3856B5E64506F5934_Extension Marker",
      "referenceName": "WEF_4E8EFA1942384BC3856B5E64506F5934_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_4E8EFA1942384BC3856B5E64506F5934_System.ExtensionMarker"
    },
    {
      "name": "WEF_4E8EFA1942384BC3856B5E64506F5934_Features Column",
      "referenceName": "WEF_4E8EFA1942384BC3856B5E64506F5934_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_4E8EFA1942384BC3856B5E64506F5934_Kanban.Column"
    },
    {
      "name": "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Extension Marker",
      "referenceName": "WEF_6CB513B6E70E43499D9FC94E5BBFB784_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_6CB513B6E70E43499D9FC94E5BBFB784_System.ExtensionMarker"
    },
    {
      "name": "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Backlog items Column",
      "referenceName": "WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_6CB513B6E70E43499D9FC94E5BBFB784_Kanban.Column"
    },
    {
      "name": "WEF_F9C56016EE7B42ECA999258C1E1204B5_Extension Marker",
      "referenceName": "WEF_F9C56016EE7B42ECA999258C1E1204B5_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9C56016EE7B42ECA999258C1E1204B5_System.ExtensionMarker"
    },
    {
      "name": "WEF_F9C56016EE7B42ECA999258C1E1204B5_Features Column",
      "referenceName": "WEF_F9C56016EE7B42ECA999258C1E1204B5_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_F9C56016EE7B42ECA999258C1E1204B5_Kanban.Column"
    },
    {
      "name": "WEF_BAA7879501C0497D8036CC13CF6122B2_Extension Marker",
      "referenceName": "WEF_BAA7879501C0497D8036CC13CF6122B2_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_BAA7879501C0497D8036CC13CF6122B2_System.ExtensionMarker"
    },
    {
      "name": "WEF_BAA7879501C0497D8036CC13CF6122B2_Backlog items Column",
      "referenceName": "WEF_BAA7879501C0497D8036CC13CF6122B2_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_BAA7879501C0497D8036CC13CF6122B2_Kanban.Column"
    },
    {
      "name": "WEF_82492A114E2B498998D17A01C85E3552_Extension Marker",
      "referenceName": "WEF_82492A114E2B498998D17A01C85E3552_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_82492A114E2B498998D17A01C85E3552_System.ExtensionMarker"
    },
    {
      "name": "WEF_82492A114E2B498998D17A01C85E3552_Features Column",
      "referenceName": "WEF_82492A114E2B498998D17A01C85E3552_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_82492A114E2B498998D17A01C85E3552_Kanban.Column"
    },
    {
      "name": "WEF_855DC225BBCF4310BFC0EBE016173F80_Extension Marker",
      "referenceName": "WEF_855DC225BBCF4310BFC0EBE016173F80_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_855DC225BBCF4310BFC0EBE016173F80_System.ExtensionMarker"
    },
    {
      "name": "WEF_855DC225BBCF4310BFC0EBE016173F80_Backlog items Column",
      "referenceName": "WEF_855DC225BBCF4310BFC0EBE016173F80_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_855DC225BBCF4310BFC0EBE016173F80_Kanban.Column"
    },
    {
      "name": "WEF_4361695967364731A3A602D54E11A522_Extension Marker",
      "referenceName": "WEF_4361695967364731A3A602D54E11A522_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_4361695967364731A3A602D54E11A522_System.ExtensionMarker"
    },
    {
      "name": "WEF_4361695967364731A3A602D54E11A522_Features Column",
      "referenceName": "WEF_4361695967364731A3A602D54E11A522_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_4361695967364731A3A602D54E11A522_Kanban.Column"
    },
    {
      "name": "WEF_EE49F472197F4A5BA0F259BA7251D994_Extension Marker",
      "referenceName": "WEF_EE49F472197F4A5BA0F259BA7251D994_System.ExtensionMarker",
      "type": "boolean",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_EE49F472197F4A5BA0F259BA7251D994_System.ExtensionMarker"
    },
    {
      "name": "WEF_EE49F472197F4A5BA0F259BA7251D994_Backlog items Column",
      "referenceName": "WEF_EE49F472197F4A5BA0F259BA7251D994_Kanban.Column",
      "type": "string",
      "readOnly": false,
      "supportedOperations": [
        {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        {
          "referenceName": "SupportedOperations.GreaterThan",
          "name": ">"
        },
        {
          "referenceName": "SupportedOperations.LessThan",
          "name": "<"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEquals",
          "name": ">="
        },
        {
          "referenceName": "SupportedOperations.LessThanEquals",
          "name": "<="
        },
        {
          "referenceName": "SupportedOperations.Contains",
          "name": "Contains"
        },
        {
          "referenceName": "SupportedOperations.NotContains",
          "name": "Does Not Contain"
        },
        {
          "referenceName": "SupportedOperations.In",
          "name": "In"
        },
        {
          "referenceName": "SupportedOperations.InGroup",
          "name": "In Group"
        },
        {
          "referenceName": "SupportedOperations.NotInGroup",
          "name": "Not In Group"
        },
        {
          "referenceName": "SupportedOperations.Ever",
          "name": "Was Ever"
        },
        {
          "referenceName": "SupportedOperations.EqualsField",
          "name": "= [Field]"
        },
        {
          "referenceName": "SupportedOperations.NotEqualsField",
          "name": "<> [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanField",
          "name": "> [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanField",
          "name": "< [Field]"
        },
        {
          "referenceName": "SupportedOperations.GreaterThanEqualsField",
          "name": ">= [Field]"
        },
        {
          "referenceName": "SupportedOperations.LessThanEqualsField",
          "name": "<= [Field]"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/WEF_EE49F472197F4A5BA0F259BA7251D994_Kanban.Column"
    }
  ]
}
```


#### Sample code

* [C# (GetReadonlyWorkItemFields method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/FieldsSample.cs#L40)

## Get a work item field

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/fields/{fieldName}?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:----------------------------
| instance      | string    | TFS server name ({server:port}).
| fieldName     | string    | Reference name of the field
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath?api-version=1.0
```

#### Sample response

```json
{
  "name": "Iteration Path",
  "referenceName": "System.IterationPath",
  "type": "treePath",
  "readOnly": true,
  "supportedOperations": [
    {
      "referenceName": "SupportedOperations.Under",
      "name": "Under"
    },
    {
      "referenceName": "SupportedOperations.NotUnder",
      "name": "Not Under"
    },
    {
      "referenceName": "SupportedOperations.Equals",
      "name": "="
    },
    {
      "referenceName": "SupportedOperations.NotEquals",
      "name": "<>"
    },
    {
      "referenceName": "SupportedOperations.In",
      "name": "In"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
}
```


#### Sample code

* [C# (GetFieldDetails method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/FieldsSample.cs#L40)
