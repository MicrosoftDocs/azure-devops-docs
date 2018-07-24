---
title: Organizations REST API Reference for VSTS
description: Work with organizations programmatically using the REST APIs for VSTS.
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.assetid: C9470271-C11E-4BD2-82C8-D5272AADF82C
ms.manager: douge
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 02/22/2017
---

# Organizations
[!INCLUDE [API_version](../_data/version3-preview2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of organizations

```no-highlight
GET https://app.vssps.visualstudio.com/_apis/Organizations?[memberId={GUID}][&ownerId={GUID}]&api-version=3.2-preview
```

| Parameter | Type   | Notes 
|:----------|:-------|:--------------------------
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| memberId    | GUID | ID of the user (use [Profiles](https://visualstudio.microsoft.com/en-us/docs/integrate/api/shared/profiles) for ID)
| ownerId     | GUID | ID of the user (use [Profiles](https://visualstudio.microsoft.com/en-us/docs/integrate/api/shared/profiles) for ID)

### By member ID

[!code-REST [GET__Accounts_memberId-_userId__json](./_data/accounts/GET__Accounts_memberId-_userId_.json)]

### By owner ID

[!code-REST [GET__Accounts_ownerId-_userId__json](./_data/accounts/GET__Accounts_ownerId-_userId_.json)]

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Can I use basic auth with the profiles API?

A: No, you must use [OAuth](../../get-started/authentication/oauth.md).

<!-- ENDSECTION --> 

