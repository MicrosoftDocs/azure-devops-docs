---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Definitions | REST API Reference for Team Foundation Server
description: Get build definitions programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 20BE109C-0350-4338-B6BC-522A2200F5CC
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build definitions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build definitions

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions?api-version={version}[&name={string}][&type={string}]
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| name          | string               | Filters to definitions whose names equal this value. Append a `*` to filter to definitions whose names start with this value. For example: `MS*`.
| type          | enum { build, xaml } | The type of the build definitions to retrieve. If not specified, all types will be returned.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions?api-version=2.0
```

#### Sample response

```json
{
  "count": 5,
  "value": [
    {
      "quality": "definition",
      "authoredBy": {
        "id": "47d25e84-de54-49ce-8f3d-351c77422775",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/Generic/d81542e4-cdfa-4333-b082-1ae2d6c3ad16\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/47d25e84-de54-49ce-8f3d-351c77422775",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=47d25e84-de54-49ce-8f3d-351c77422775",
        "isContainer": true
      },
      "queue": {
        "pool": null,
        "id": 1,
        "name": "default"
      },
      "uri": "vstfs:///Build/Definition/7",
      "type": "build",
      "revision": 2,
      "id": 7,
      "name": "MyRepo CI",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/7",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      }
    },
    {
      "quality": "definition",
      "authoredBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "queue": {
        "pool": null,
        "id": 2,
        "name": "Hosted"
      },
      "uri": "vstfs:///Build/Definition/25",
      "type": "build",
      "revision": 10,
      "id": 25,
      "name": "VsoBuildApi",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/25",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      }
    },
    {
      "quality": "definition",
      "authoredBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "queue": {
        "pool": null,
        "id": 1,
        "name": "default"
      },
      "uri": "vstfs:///Build/Definition/29",
      "type": "build",
      "revision": 1,
      "id": 29,
      "name": "myDefinition",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      }
    },
    {
      "uri": "vstfs:///Build/Definition/2",
      "type": "xaml",
      "id": 2,
      "name": "MyWebSite CI",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/2",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      }
    },
    {
      "uri": "vstfs:///Build/Definition/3",
      "type": "xaml",
      "id": 3,
      "name": "CustomerAddressModule",
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/3",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "description": "Git projects",
        "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed",
        "revision": 3432824
      }
    }
  ]
}
```


## Get a build definition

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}[&revision={int}]
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the build definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| revision     | int    | The specific revision number of the definition to retrieve.
| propertyFilters | string | A comma-delimited list of extended properties to retrieve.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/29?api-version=2.0
```

#### Sample response

```json
{
  "build": [
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Build solution **\\*.sln",
      "task": {
        "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
        "versionSpec": "*"
      },
      "inputs": {
        "solution": "**\\*.sln",
        "msbuildArgs": "",
        "platform": "$(platform)",
        "configuration": "$(config)",
        "clean": "false",
        "restoreNugetPackages": "true",
        "vsLocationMethod": "version",
        "vsVersion": "latest",
        "vsLocation": "",
        "msbuildLocationMethod": "version",
        "msbuildVersion": "latest",
        "msbuildArchitecture": "x86",
        "msbuildLocation": "",
        "logProjectEvents": "true"
      }
    },
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
      "task": {
        "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
        "versionSpec": "*"
      },
      "inputs": {
        "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
        "testFiltercriteria": "",
        "runSettingsFile": "",
        "codeCoverageEnabled": "true",
        "otherConsoleOptions": "",
        "vsTestVersion": "14.0",
        "pathtoCustomTestAdapters": ""
      }
    }
  ],
  "options": [
    {
      "enabled": true,
      "definition": {
        "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
      },
      "inputs": {
        "parallel": "false",
        "multipliers": "[\"config\",\"platform\"]"
      }
    }
  ],
  "variables": {
    "forceClean": {
      "value": "false",
      "allowOverride": true
    },
    "config": {
      "value": "debug, release",
      "allowOverride": true
    },
    "platform": {
      "value": "any cpu",
      "allowOverride": true
    }
  },
  "retentionRules": [
    {
      "branches": [
        "+refs/heads/*"
      ],
      "daysToKeep": 10,
      "deleteBuildRecord": true
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&definitionId=29"
    }
  },
  "createdDate": "2015-07-16T19:47:20.12Z",
  "comment": "my first definition",
  "jobAuthorizationScope": "projectCollection",
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
    "defaultBranch": "refs/heads/master",
    "clean": "false",
    "checkoutSubmodules": false
  },
  "quality": "definition",
  "authoredBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "queue": {
    "pool": null,
    "id": 1,
    "name": "default"
  },
  "uri": "vstfs:///Build/Definition/29",
  "type": "build",
  "revision": 1,
  "id": 29,
  "name": "myDefinition",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  }
}
```


### By revision
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/29?revision=1&api-version=2.0
```

#### Sample response

```json
{
  "build": [
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Build solution **\\*.sln",
      "task": {
        "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
        "versionSpec": "*"
      },
      "inputs": {
        "solution": "**\\*.sln",
        "msbuildArgs": "",
        "platform": "$(platform)",
        "configuration": "$(config)",
        "clean": "false",
        "restoreNugetPackages": "true",
        "vsLocationMethod": "version",
        "vsVersion": "latest",
        "vsLocation": "",
        "msbuildLocationMethod": "version",
        "msbuildVersion": "latest",
        "msbuildArchitecture": "x86",
        "msbuildLocation": "",
        "logProjectEvents": "true"
      }
    },
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
      "task": {
        "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
        "versionSpec": "*"
      },
      "inputs": {
        "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
        "testFiltercriteria": "",
        "runSettingsFile": "",
        "codeCoverageEnabled": "true",
        "otherConsoleOptions": "",
        "vsTestVersion": "14.0",
        "pathtoCustomTestAdapters": ""
      }
    }
  ],
  "options": [
    {
      "enabled": true,
      "definition": {
        "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
      },
      "inputs": {
        "parallel": "false",
        "multipliers": "[\"config\",\"platform\"]"
      }
    }
  ],
  "variables": {
    "forceClean": {
      "value": "false",
      "allowOverride": true
    },
    "config": {
      "value": "debug, release",
      "allowOverride": true
    },
    "platform": {
      "value": "any cpu",
      "allowOverride": true
    }
  },
  "retentionRules": [
    {
      "branches": [
        "+refs/heads/*"
      ],
      "daysToKeep": 10,
      "deleteBuildRecord": true
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&definitionId=29"
    }
  },
  "createdDate": "2015-07-16T19:47:20.12Z",
  "comment": "my first definition",
  "jobAuthorizationScope": "projectCollection",
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
    "defaultBranch": "refs/heads/master",
    "clean": "false",
    "checkoutSubmodules": false
  },
  "quality": "definition",
  "authoredBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "queue": {
    "pool": null,
    "id": 1,
    "name": "default"
  },
  "uri": "vstfs:///Build/Definition/29",
  "type": "build",
  "revision": 1,
  "id": 29,
  "name": "myDefinition",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  }
}
```


<a name="createabuilddefinition" />

## Create a build definition

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/build/definitions?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions?api-version=2.0
```
```json
{
  "name": "myDefinition",
  "type": "build",
  "quality": "definition",
  "queue": {
    "id": 1
  },
  "build": [
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Build solution **\\*.sln",
      "task": {
        "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
        "versionSpec": "*"
      },
      "inputs": {
        "solution": "**\\*.sln",
        "msbuildArgs": "",
        "platform": "$(platform)",
        "configuration": "$(config)",
        "clean": "false",
        "restoreNugetPackages": "true",
        "vsLocationMethod": "version",
        "vsVersion": "latest",
        "vsLocation": "",
        "msbuildLocationMethod": "version",
        "msbuildVersion": "latest",
        "msbuildArchitecture": "x86",
        "msbuildLocation": "",
        "logProjectEvents": "true"
      }
    },
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
      "task": {
        "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
        "versionSpec": "*"
      },
      "inputs": {
        "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
        "testFiltercriteria": "",
        "runSettingsFile": "",
        "codeCoverageEnabled": "true",
        "otherConsoleOptions": "",
        "vsTestVersion": "14.0",
        "pathtoCustomTestAdapters": ""
      }
    }
  ],
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "name": "Fabrikam-Fiber-Git",
    "localPath": "$(sys.sourceFolder)/MyGitProject",
    "defaultBranch": "refs/heads/master",
    "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
    "clean": "false"
  },
  "options": [
    {
      "enabled": true,
      "definition": {
        "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
      },
      "inputs": {
        "parallel": "false",
        "multipliers": "[\"config\",\"platform\"]"
      }
    }
  ],
  "variables": {
    "forceClean": {
      "value": "false",
      "allowOverride": true
    },
    "config": {
      "value": "debug, release",
      "allowOverride": true
    },
    "platform": {
      "value": "any cpu",
      "allowOverride": true
    }
  },
  "triggers": [],
  "comment": "my first definition"
}
```

#### Sample response

```json
{
  "build": [
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Build solution **\\*.sln",
      "task": {
        "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
        "versionSpec": "*"
      },
      "inputs": {
        "solution": "**\\*.sln",
        "msbuildArgs": "",
        "platform": "$(platform)",
        "configuration": "$(config)",
        "clean": "false",
        "restoreNugetPackages": "true",
        "vsLocationMethod": "version",
        "vsVersion": "latest",
        "vsLocation": "",
        "msbuildLocationMethod": "version",
        "msbuildVersion": "latest",
        "msbuildArchitecture": "x86",
        "msbuildLocation": "",
        "logProjectEvents": "true"
      }
    },
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
      "task": {
        "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
        "versionSpec": "*"
      },
      "inputs": {
        "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
        "testFiltercriteria": "",
        "runSettingsFile": "",
        "codeCoverageEnabled": "true",
        "otherConsoleOptions": "",
        "vsTestVersion": "14.0",
        "pathtoCustomTestAdapters": ""
      }
    }
  ],
  "options": [
    {
      "enabled": true,
      "definition": {
        "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
      },
      "inputs": {
        "parallel": "false",
        "multipliers": "[\"config\",\"platform\"]"
      }
    }
  ],
  "variables": {
    "forceClean": {
      "value": "false",
      "allowOverride": true
    },
    "config": {
      "value": "debug, release",
      "allowOverride": true
    },
    "platform": {
      "value": "any cpu",
      "allowOverride": true
    }
  },
  "retentionRules": [
    {
      "branches": [
        "+refs/heads/*"
      ],
      "daysToKeep": 10,
      "deleteBuildRecord": true
    }
  ],
  "properties": {},
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&definitionId=29"
    }
  },
  "createdDate": "2015-07-16T19:47:20.12Z",
  "comment": "my first definition",
  "jobAuthorizationScope": "projectCollection",
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
    "defaultBranch": "refs/heads/master",
    "clean": "false",
    "checkoutSubmodules": false
  },
  "quality": "definition",
  "authoredBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "queue": {
    "pool": null,
    "id": 1,
    "name": "default"
  },
  "uri": "vstfs:///Build/Definition/29",
  "type": "build",
  "revision": 1,
  "id": 29,
  "name": "myDefinition",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  }
}
```



## Update a build definition

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| definitionId  | int                  | ID of the build definition.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| revision      | int                  | The current revision number of the definition. If this doesn't match the current version, the update will fail.

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/29?api-version=2.0
```
```json
{
  "id": 29,
  "revision": 1,
  "name": "myFavoriteDefinition",
  "definitionType": "build",
  "documentQuality": "definition",
  "queue": {
    "id": 1
  },
  "build": [
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Build solution **\\*.sln",
      "task": {
        "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
        "versionSpec": "*"
      },
      "inputs": {
        "solution": "**\\*.sln",
        "msbuildArgs": "",
        "platform": "$(platform)",
        "configuration": "$(config)",
        "clean": "false",
        "restoreNugetPackages": "true",
        "vsLocationMethod": "version",
        "vsVersion": "latest",
        "vsLocation": "",
        "msbuildLocationMethod": "version",
        "msbuildVersion": "latest",
        "msbuildArchitecture": "x86",
        "msbuildLocation": "",
        "logProjectEvents": "true"
      }
    },
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
      "task": {
        "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
        "versionSpec": "*"
      },
      "inputs": {
        "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
        "testFiltercriteria": "",
        "runSettingsFile": "",
        "codeCoverageEnabled": "true",
        "otherConsoleOptions": "",
        "vsTestVersion": "14.0",
        "pathtoCustomTestAdapters": ""
      }
    }
  ],
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "name": "Fabrikam-Fiber-Git",
    "localPath": "$(sys.sourceFolder)/MyGitProject",
    "defaultBranch": "refs/heads/master",
    "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
    "clean": "false"
  },
  "options": [
    {
      "enabled": true,
      "definition": {
        "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
      },
      "inputs": {
        "parallel": "false",
        "multipliers": "[\"config\",\"platform\"]"
      }
    }
  ],
  "variables": {
    "forceClean": {
      "value": "false",
      "allowOverride": true
    },
    "config": {
      "value": "debug, release",
      "allowOverride": true
    },
    "platform": {
      "value": "any cpu",
      "allowOverride": true
    }
  },
  "triggers": [],
  "comment": "renamed"
}
```

#### Sample response

```json
{
  "build": [
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Build solution **\\*.sln",
      "task": {
        "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
        "versionSpec": "*"
      },
      "inputs": {
        "solution": "**\\*.sln",
        "msbuildArgs": "",
        "platform": "$(platform)",
        "configuration": "$(config)",
        "clean": "false",
        "restoreNugetPackages": "true",
        "vsLocationMethod": "version",
        "vsVersion": "latest",
        "vsLocation": "",
        "msbuildLocationMethod": "version",
        "msbuildVersion": "latest",
        "msbuildArchitecture": "x86",
        "msbuildLocation": "",
        "logProjectEvents": "true"
      }
    },
    {
      "enabled": true,
      "continueOnError": false,
      "alwaysRun": false,
      "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
      "task": {
        "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
        "versionSpec": "*"
      },
      "inputs": {
        "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
        "testFiltercriteria": "",
        "runSettingsFile": "",
        "codeCoverageEnabled": "true",
        "otherConsoleOptions": "",
        "vsTestVersion": "14.0",
        "pathtoCustomTestAdapters": ""
      }
    }
  ],
  "options": [
    {
      "enabled": true,
      "definition": {
        "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
      },
      "inputs": {
        "parallel": "false",
        "multipliers": "[\"config\",\"platform\"]"
      }
    }
  ],
  "variables": {
    "forceClean": {
      "value": "false",
      "allowOverride": true
    },
    "config": {
      "value": "debug, release",
      "allowOverride": true
    },
    "platform": {
      "value": "any cpu",
      "allowOverride": true
    }
  },
  "properties": {},
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_permalink/_build/index?collectionId=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&projectId=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&definitionId=29"
    }
  },
  "createdDate": "2015-07-16T19:47:22.193Z",
  "comment": "renamed",
  "jobAuthorizationScope": "projectCollection",
  "repository": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "type": "tfsgit",
    "name": "Fabrikam-Fiber-Git",
    "url": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git",
    "defaultBranch": "refs/heads/master",
    "clean": "false",
    "checkoutSubmodules": false
  },
  "quality": "definition",
  "authoredBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "queue": {
    "pool": null,
    "id": 1,
    "name": "default"
  },
  "uri": "vstfs:///Build/Definition/29",
  "type": "build",
  "revision": 2,
  "id": 29,
  "name": "myFavoriteDefinition",
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29",
  "project": {
    "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "name": "Fabrikam-Fiber-Git",
    "description": "Git projects",
    "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
    "state": "wellFormed",
    "revision": 3432824
  }
}
```



## Delete a build definition

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| definitionId  | int                  | ID of the build definition.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/29?api-version=2.0
```



## Get the history of a build definition

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/{definitionId}/revisions?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the build definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/29/revisions?api-version=2.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "revision": 1,
      "name": "myDefinition",
      "changedDate": "2015-07-16T19:47:20.12Z",
      "changeType": "add",
      "comment": "my first definition",
      "definitionUrl": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29?revision=1",
      "changedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    },
    {
      "revision": 2,
      "name": "myFavoriteDefinition",
      "changedDate": "2015-07-16T19:47:22.193Z",
      "changeType": "update",
      "comment": "renamed",
      "definitionUrl": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/build/Definitions/29?revision=2",
      "changedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      }
    }
  ]
}
```


## Get build definition options

```no-highlight
GET https://{instance}/DefaultCollection/_apis/build/options?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/build/options?api-version=2.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "ordinal": 100,
      "name": "MultiConfiguration",
      "description": "Continue running other configurations on failure",
      "inputs": [
        {
          "help": {
            "markdown": "A comma-delimited list of configuration variables to use for the builds. These are defined on the *Variables* tab.</br></br>For example, `BuildPlatform, BuildConfiguration` would run builds for both variables"
          },
          "name": "multipliers",
          "label": "Multipliers",
          "defaultValue": "",
          "required": true,
          "type": "stringList"
        },
        {
          "help": {
            "markdown": "Run the respective builds for each configuration in parallel"
          },
          "name": "parallel",
          "label": "Parallel",
          "defaultValue": "false",
          "required": true,
          "type": "boolean"
        },
        {
          "help": {
            "markdown": "Continue running the build if an error occurs"
          },
          "name": "continueOnError",
          "label": "Continue on Error",
          "defaultValue": "true",
          "required": true,
          "type": "boolean"
        }
      ],
      "groups": [],
      "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
    }
  ]
}
```
