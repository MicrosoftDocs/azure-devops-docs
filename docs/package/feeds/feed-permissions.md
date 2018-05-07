---
title: Secure and share packages using feed permissions
description: Secure and share packages using feed permissions in Package Management in VSTS or Team Foundation Server
ms.assetid: 70313C3C-2E52-4FFC-94C2-41F1E37C9D26
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 11/30/2017
monikerRange: '>= tfs-2017'
---

# Secure and share packages using feed permissions

**VSTS | TFS 2017**

Packages you host in Package Management are stored in a [feed](../concepts/feeds.md). Setting permissions on the feed allows you to share your packages with as many or as few people as your scenario requires.

## Feed permissions overview
Feeds have three levels of access: Owners, Contributors, and Readers. Owners can add any type of identity&mdash;individuals, teams, and groups&mdash;to any access level.

| Permission | Reader | Contributor | Owner |
| ---------- | ------ | ----------- | ----- |
| List and restore/install packages             | &#x2713; | &#x2713; | &#x2713; |
| Push packages                                 |          | &#x2713; | &#x2713; |
| Unlist/deprecate packages                     |          | &#x2713; | &#x2713; |
| Delete/unpublish package                      |          |          | &#x2713; |
| Edit feed permissions                         |          |          | &#x2713; | 
| [Rename and delete feed](edit-feed.md)        |          |          | &#x2713; |

By default, the Project Collection Build Service is a Contributor and your project team is a Reader.
Learn more about [common identities used with Package Management](#common-identities).

<a name="edit-permissions"></a>

## Editing permissions for a feed

[!INCLUDE [edit-feed](../_shared/edit-feed.md)]

Select **Permissions**.

![Editing a feed's permissions](_img/editfeeddialog1.png)

In the edit feed dialog:

- Choose to make each person or team an Owner, Contributor, or Reader.
- When you're done, select **Save**.

<a name="common-identities"></a>

## Give teams and builds access to feeds

<!-- TODO -->

- how to share my packages with everyone
- how to let builds publish packages
- how to 