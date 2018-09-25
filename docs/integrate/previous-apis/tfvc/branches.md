---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: TFVC Branches | REST API Reference for Team Foundation Server
description: Work with TFVC branches programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 9C1923A9-4887-4DC4-9C20-153C19D453CE
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Branches
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a branch

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/branches/{path}?api-version={version}[&includeChildren={bool}&includeParent={bool}&includeDeleted={bool}]
```

| Parameter       | Type   | Default | Notes
|:----------------|:-------|:--------|:------------|
| URL
| instance        | string |         | TFS server name ({server:port}).
| path            | string | $/      | Full path to the branch.<br/>Examples: `$/`, `$/MyProject`, `$/MyProject/SomeFolder`.
| Query
| api-version     | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeChildren | bool   | false   | Return child branches, if there are any.
| includeParent   | bool   | false   | Return the parent branch, if there is one.
| includeDeleted  | bool   | false   | Return branches marked as deleted.


[!code-REST [GET__tfvc_branches__path__json](./_data/branches/GET__tfvc_branches__path_.json)]

### With child branches
[!code-REST [GET__tfvc_branches__path__includeChildren-true_json](./_data/branches/GET__tfvc_branches__path__includeChildren-true.json)]

### With the parent branch
[!code-REST [GET__tfvc_branches__path__includeParent-true_json](./_data/branches/GET__tfvc_branches__path__includeParent-true.json)]

### Deleted branch
[!code-REST [GET__tfvc_branches__deleted__includeDeleted-true_json](./_data/branches/GET__tfvc_branches__deleted__includeDeleted-true.json)]

## Get a list of root branches

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/branches?api-version={version}[&includeChildren={bool}&includeDeleted={bool}]
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|:------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeChildren  | bool   | false   | Return the child branches for each root branch.
| includeDeleted   | bool   | false   | Return deleted branches.

[!code-REST [GET__tfvc_branches_json](./_data/branches/GET__tfvc_branches.json)]

### With child branches
[!code-REST [GET__tfvc_branches_includeChildren-true_json](./_data/branches/GET__tfvc_branches_includeChildren-true.json)]

### Including deleted branches
[!code-REST [GET__tfvc_branches_includeDeleted-true_json](./_data/branches/GET__tfvc_branches_includeDeleted-true.json)]


