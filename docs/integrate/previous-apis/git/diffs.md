---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Diffs | REST API Reference for Team Foundation Server
description: Work with Git differences programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 920FAC3A-471D-412C-BC6B-CA767CFC3645
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Git diffs

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Diffs compare a target version with a base version and return a list of items that are only in the target version.
If either the target or base version isn't specified, the default branch is used.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of differences

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/diffs/commits?api-version={version}
```

| Parameter         | Type                         | Default | Notes
|:------------------|:-----------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string                       |         | TFS server name ({server:port}).
| project           | string                       |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string                       |         | ID of the [repository](./repositories.md).
| Query
| api-version       | string                       |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| baseVersionType   | enum { Branch, Tag, Commit } | Branch  | [Item versions](./items.md#getaspecificversion).
| baseVersion       | string                       | master  | [Item versions](./items.md#getaspecificversion).
| targetVersionType | enum { Branch, Tag, Commit } | Branch  | [Item versions](./items.md#getaspecificversion).
| targetVersion     | string                       | master  | [Item versions](./items.md#getaspecificversion).
| $skip             | integer                      | 0       | Number of commits to skip.
| $top              | integer                      | 100     | Number of commits to return.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/diffs/commits?targetVersion=master&baseVersion=develop&api-version=1.0
```

#### Sample response

```json
{
  "allChangesIncluded": true,
  "changeCounts": {
    "Add": 24,
    "Edit": 6
  },
  "changes": [
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule.sln",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule.sln?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/App.config",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/App.config?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/CustomerAddressModule.csproj",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/CustomerAddressModule.csproj?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Form1.Designer.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Form1.Designer.cs?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Form1.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Form1.cs?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Form1.resx",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Form1.resx?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Program.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Program.cs?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Properties",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Properties?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Properties/AssemblyInfo.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Properties/AssemblyInfo.cs?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Properties/Resources.Designer.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Properties/Resources.Designer.cs?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Properties/Resources.resx",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Properties/Resources.resx?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Properties/Settings.Designer.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Properties/Settings.Designer.cs?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/Properties/Settings.settings",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/Properties/Settings.settings?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/.classpath",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/.classpath?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/.project",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/.project?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/build.xml",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/build.xml?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/dist",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/dist?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/dist/lib",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/dist/lib?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/dist/lib/MyProject-20140210.jar",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/dist/lib/MyProject-20140210.jar?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/src",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/src?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/HelloWorld/src/HelloWorld.java",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/HelloWorld/src/HelloWorld.java?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/MyWebSite",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/MyWebSite/MyWebSite",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/MyWebSite/MyWebSite/Views",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Views?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/MyWebSite/MyWebSite/Views/Home",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Views/Home?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/MyWebSite/MyWebSite/Views/Home/_Register.cshtml",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Views/Home/_Register.cshtml?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/MyWebSite/MyWebSite/Web.config",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Web.config?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "edit"
    }
  ],
  "commonCommit": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "aheadCount": 17,
  "behindCount": 1
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/diffs/commits?targetVersion=master&baseVersion=develop&$top=2&$skip=2&api-version=1.0
```

#### Sample response

```json
{
  "changeCounts": {
    "Add": 24,
    "Edit": 6
  },
  "changes": [
    {
      "item": {
        "gitObjectType": "tree",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
        "path": "/CustomerAddressModule/CustomerAddressModule/App.config",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/CustomerAddressModule/CustomerAddressModule/App.config?versionType=Commit&version=23d0bc5b128a10056dc68afece360d8a0fabb014"
      },
      "changeType": "add"
    }
  ],
  "commonCommit": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "aheadCount": 17,
  "behindCount": 1
}
```


### Between commit IDs

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/diffs/commits?baseVersionType=commit&baseVersion=c093714168cdd190c1e171a803e996d685454352&targetVersionType=commit&targetVersion=2f271272a1548da5a6507b4a29f3af943094c6b4&api-version=1.0
```

#### Sample response

```json
{
  "allChangesIncluded": true,
  "changeCounts": {
    "Edit": 15,
    "Add": 1
  },
  "changes": [
    {
      "item": {
        "objectId": "bde769ee42117ea4ea87d5ec29ebdad6d3db90e6",
        "originalObjectId": "5a99d58c0ee5d8ea32a837c0f3e1c384d9b3f35c",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/CustomerAddressModule",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//CustomerAddressModule?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "062c2370b4a773e4d1240d0591f05236ea6bffd5",
        "originalObjectId": "ac01e969c8f57a5ce4404c8314d28c376b9741aa",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/CustomerAddressModule/CustomerAddressModule",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//CustomerAddressModule/CustomerAddressModule?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "44d4defe7505e786c7843bb8d48742fbd7fb2a5d",
        "originalObjectId": "c7b2717ed43cf3a146178efe8c6b56f15e04e206",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/CustomerAddressModule/CustomerAddressModule/Form1.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//CustomerAddressModule/CustomerAddressModule/Form1.cs?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "86611e6e2a985a667b2d744d3e133c035d050fdc",
        "originalObjectId": "1880da2a57cc772c0e8cd1725911e05fb9dea384",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/CustomerAddressModule/CustomerAddressModule/Program.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//CustomerAddressModule/CustomerAddressModule/Program.cs?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "3936f555cbfd2354766c928f24314f3371b26eb9",
        "originalObjectId": "5ae8cdfbac92acedd2516c0cf47cb4e23834c907",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/HelloWorld",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//HelloWorld?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "12ab83fdf67f60340065fd6595f7b7d27ac43e64",
        "originalObjectId": "91ffd59c44444779a707d22dca26481062912771",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/HelloWorld/src",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//HelloWorld/src?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "11c2143a3d6cdf7c183875b1c9bcd9ed1148946b",
        "originalObjectId": "8c372a0d74743a1e6bde482b6ad1b7d3086400cc",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/HelloWorld/src/HelloWorld.java",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//HelloWorld/src/HelloWorld.java?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "5bb6f703f01eba72e9bb023891991f71e611b1e4",
        "originalObjectId": "64e06bc4be939bffe64c65ae3c290e4c5206acf2",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "a1ec6decdcc91b432aadac506db6e56f6d75cc60",
        "originalObjectId": "429e27bd5309b641581aed99ab7c26e3054ed1a0",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "a3237c23ed9a046387ddcacdf3b9c612bc884939",
        "originalObjectId": "0d106d2f98e710ff86c5991991990a2e8f9819bd",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite/Project_Readme.html",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite/Project_Readme.html?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "5b029732598033bba1d7e7087b54f3030fe67c09",
        "originalObjectId": "9b8bb976714f08fe5a2b82559a11ce35fa10c3cd",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite/Startup.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite/Startup.cs?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "d1d5c2d49045d52bba6419652d6ecb2cd560dc29",
        "originalObjectId": "cdf394b9560d7f9b1c97858d15962504def55642",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite/Views",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite/Views?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "ea6765e1976b9e8a6d4981fd8febebd574a91571",
        "originalObjectId": "de4d162bd8e761438917de6aa79ca0296d42d113",
        "gitObjectType": "tree",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite/Views/Home",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite/Views/Home?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "8052a02bee6f82ae02c4d408d1b5b98ab1bf56a6",
        "originalObjectId": "49602fb29a79ea6e70746b1cfccbb080531aa6dc",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite/Views/Home/_Register.cshtml",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite/Views/Home/_Register.cshtml?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "b219db18b7fd7c45b05a0092846a8fbf1edbe18f",
        "originalObjectId": "42f77316b7d166374ce8d6cb9f141b9e77c582f5",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/MyWebSite/MyWebSite/Web.config",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//MyWebSite/MyWebSite/Web.config?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "objectId": "f61bddbdf26a6365e02c94531abb370409c5aea3",
        "gitObjectType": "blob",
        "commitId": "2f271272a1548da5a6507b4a29f3af943094c6b4",
        "path": "/readme.md",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items//readme.md?versionType=Commit&version=2f271272a1548da5a6507b4a29f3af943094c6b4"
      },
      "changeType": "add"
    }
  ],
  "commonCommit": "c093714168cdd190c1e171a803e996d685454352",
  "baseCommit": "c093714168cdd190c1e171a803e996d685454352",
  "targetCommit": "2f271272a1548da5a6507b4a29f3af943094c6b4",
  "aheadCount": 22,
  "behindCount": 0
}
```
