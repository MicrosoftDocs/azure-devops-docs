---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Test Configurations | REST API Reference for Team Foundation Server
description: Work with test configurations programmatically using the REST APIs for Team Foundation Server.
ms.assetid: b551e771-0315-4cfc-a3bd-ddfa3bb6b71f
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Test configurations

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test configurations

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/configurations?api-version={version}[&$skip={int}&$top={int}&continuationToken={string}&includeAllProperties={boolean}]
```

| Parameter          | Type    | Default | Notes
|:-------------------|:--------|:--------|:---------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.
| Query
| api-version        | string  |         | Version of the API to use.
| $skip				 | int     |         | Number of test configurations to skip.
| $top               | int     |         | Number of test configurations to return.
| continuationToken               | string     |         | If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
| includeAllProperties | boolean | false | If true, it returns all properties of the test configurations. Otherwise, it returns the skinny version.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "Windows 10",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/1",
      "description": "Default operating system for testing",
      "isDefault": true,
      "state": "active"
    },
    {
      "id": 2,
      "name": "Win10 IE11",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/2",
      "description": "Windows 10 - IE 11"
    },
    {
      "id": 3,
      "name": "Win10 English",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/3",
      "description": ""
    }
  ],
  "count": 3
}
```


```json
response header contains continuation token (considering batchSize is 3)

{
    "x-ms-continuationtoken": 4;0
}
```

### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations?$top=5&api-version=3.0-preview.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "Windows 10",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/1",
      "description": "Default operating system for testing",
      "isDefault": true,
      "state": "active"
    },
    {
      "id": 2,
      "name": "Win10 IE11",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/2",
      "description": "Windows 10 - IE 11"
    }
  ],
  "count": 2
}
```


```json
response header contains continuation token (considering batchSize is 3)

{
    "x-ms-continuationtoken": 4;2
}

```

### With continuation token

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations?$skip=10&$top=15&continuationToken=14;12&api-version=3.0-preview.2
```

#### Sample response

```json
{
  "value": [
    {
      "id": 14,
      "name": "Windows 10-2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/14",
      "description": "Default operating system for testing",
      "isDefault": true,
      "state": "active"
    },
    {
      "id": 15,
      "name": "Win10 IE11-2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/15",
      "description": "Windows 10 - IE 11"
    },
    {
      "id": 16,
      "name": "Win10 English-2",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/16",
      "description": ""
    }
  ],
  "count": 3
}
```


```json
response header contains continuation token (considering batchSize is 3)

{
    "x-ms-continuationtoken": 17;9
}

```

### Include all properties of the test configurations

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations?includeAllProperties=true&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "value": [
    {
      "id": 1,
      "name": "Windows 10",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/1",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Default operating system for testing",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2015-12-23T05:21:26.42Z",
      "area": {
        "name": "fabrikam-fiber-tfvc"
      },
      "isDefault": true,
      "revision": 1,
      "values": [
        {
          "name": "Operating System",
          "value": "Windows 10"
        }
      ],
      "state": "active"
    },
    {
      "id": 2,
      "name": "Win10 IE11",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/2",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "Windows 10 - IE 11",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2015-12-23T05:49:13.94Z",
      "area": {
        "name": "fabrikam-fiber-tfvc"
      },
      "revision": 2,
      "values": [
        {
          "name": "Operating System",
          "value": "Windows 10"
        },
        {
          "name": "Renamed Language",
          "value": "English - US"
        }
      ]
    },
    {
      "id": 3,
      "name": "Win10 English",
      "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/3",
      "project": {
        "name": "fabrikam-fiber-tfvc",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
      },
      "description": "",
      "lastUpdatedBy": {
        "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "displayName": "Fabrikam Fiber",
        "uniqueName": "fabrikamfiber1@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
      },
      "lastUpdatedDate": "2015-12-23T05:52:48.167Z",
      "area": {
        "name": "fabrikam-fiber-tfvc\\QA"
      },
      "revision": 2,
      "values": [
        {
          "name": "Operating System",
          "value": "Windows 10"
        },
        {
          "name": "Renamed Language",
          "value": "English - US"
        }
      ]
    }
  ],
  "count": 3
}
```


## Get a test configuration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/configurations/{configurationId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| configurationId    | int     | ID of the test configuration to get.
| Query
| api-version        | string  | Version of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations/1?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "id": 1,
  "name": "Windows 10",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/1",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "Default operating system for testing",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2015-12-23T05:21:26.42Z",
  "area": {
    "name": "fabrikam-fiber-tfvc"
  },
  "isDefault": true,
  "revision": 1,
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    }
  ],
  "state": "active"
}
```


## Create a test configuration

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/configurations?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {NameValuePair}
  "area": {string},
  "state": {
	enum { Active, Inactive }
	}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the new test configuration.
| description | string   |                             | Description of the new test configuration.
| values      | NameValuePair|                             | An array of test variable name and corresponding selected value pairs.
| area        | string | Project root area | Name of the area under which the configuration is created.
| state       | enum { Active, Inactive } | Active       | State of the test configuration.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations?api-version=3.0-preview.1
```
```json
{
  "name": "Win10 IE11",
  "description": "Windows 10 - IE 11",
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    },
    {
      "name": "Browser",
      "value": "Internet Explorer 11.0"
    }
  ]
}
```

#### Sample response

```json
{
  "id": 2,
  "name": "Win10 IE11",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/2",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "Windows 10 - IE 11",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2015-12-23T05:49:13.8Z",
  "area": {
    "name": "fabrikam-fiber-tfvc"
  },
  "revision": 1,
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    },
    {
      "name": "Browser",
      "value": "Internet Explorer 11.0"
    }
  ]
}
```


### With Area

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations?api-version=3.0-preview.1
```
```json
{
  "name": "Win10 English",
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    },
    {
      "name": "Renamed Language",
      "value": "English - US"
    }
  ],
  "area": {
    "name": "fabrikam-fiber-tfvc\\QA"
  }
}
```

#### Sample response

```json
{
  "id": 3,
  "name": "Win10 English",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/3",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2015-12-23T05:52:48.11Z",
  "area": {
    "name": "fabrikam-fiber-tfvc\\QA"
  },
  "revision": 1,
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    },
    {
      "name": "Renamed Language",
      "value": "English - US"
    }
  ]
}
```


## Update a test configuration

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/configurations/{configurationId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {NameValuePair},
  "area": {string},
  "state": {
	enum { Active, Inactive }
	}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| configurationId               | int     |            | ID of the test configuration to update.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the test configuration.
| description | string   |                             | Description of the test configuration.
| values      | NameValuePair|                             | An array of test variable name and corresponding selected value pairs.
| area        | string| Project root area | Name of the area under which the configuration is created.
| state       | enum { Active, Inactive } | Active       | State of the test configuration.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations/3?api-version=3.0-preview.1
```
```json
{
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    },
    {
      "name": "Renamed Language",
      "value": "English - US"
    }
  ]
}
```

#### Sample response

```json
{
  "id": 3,
  "name": "Win10 English",
  "url": "https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/Configurations/3",
  "project": {
    "name": "fabrikam-fiber-tfvc",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/fabrikam-fiber-tfvc"
  },
  "description": "",
  "lastUpdatedBy": {
    "id": "e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "displayName": "Fabrikam Fiber",
    "uniqueName": "fabrikamfiber1@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/e5a5f7f8-6507-4c34-b397-6c4818e002f4",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=e5a5f7f8-6507-4c34-b397-6c4818e002f4"
  },
  "lastUpdatedDate": "2015-12-23T05:52:48.167Z",
  "area": {
    "name": "fabrikam-fiber-tfvc\\QA"
  },
  "revision": 2,
  "values": [
    {
      "name": "Operating System",
      "value": "Windows 10"
    },
    {
      "name": "Renamed Language",
      "value": "English - US"
    }
  ]
}
```


## Delete a test configuration

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/configurations/{configurationId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| configurationId               | int     | ID of the test configuration to get.
| Query
| api-version        | string  | Version of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-tfvc/_apis/test/configurations/3?api-version=3.0-preview.1
```

