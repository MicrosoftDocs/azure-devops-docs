---
title: Secure feeds using permissions
description: Secure feeds using permissions in Package Management in Visual Studio Team Services or Team Foundation Server
ms.assetid: 70313C3C-2E52-4FFC-94C2-41F1E37C9D26
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Secure feeds using permissions

**Team Services | TFS 2017**

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
Learn more about [common identities used with Package Management](common-identities.md).

<a name="edit-permissions"></a>

## Editing permissions for a feed

[!INCLUDE [edit-feed](../_shared/edit-feed.md)]

Select **Permissions**.

![Editing a feed's permissions](_img/editfeeddialog1.png)

In the edit feed dialog:
- Search for the person or team you want to make an Owner, Contributor, or Reader.
- Select them or press Enter. 
- When you're done, select **Save and close**.