---
title: Troubleshoot changing the owner of an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn the answers to frequently asked questions (FAQs), like changing the organization owner and organization name (URL), learning the difference between an organization owner and user, and more.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: e0fe24d4-f76b-43af-b0fd-125a7fb39042
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2017
monikerRange: 'azure-devops'
---

# Troubleshoot changing the organization owner

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

<a name="find-owner-pca"></a>

[!INCLUDE [find-project-collection-administrator](../../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-organization-owner](../../_shared/qa-find-organization-owner.md)]

<a name="NoNewOwner"></a>

#### Q: Why can't I find the user who I want to make the new owner?

A: This might happen for one of the following reasons:

* The user isn't in your organization, or the user doesn't have organization access. Learn how to [add a user to your organization](add-organization-users.md).  
* The user hasn't created a Visual Studio profile and agreed to the Terms of Service.  
* If you recently added this person to your organization, you might experience a delay before the user appears in the possible organization owners list.  
* If your organization uses Azure Active Directory to control access, directory members don't appear in the possible organization owners list until they meet the requirements described in this article.

[!INCLUDE [recover-password](../../_shared/qa-recover-password.md)]

#### Q: Can I reverse an organization owner change?

A: Yes, if you're a project collection administrator.

#### Q: Can I change the organization name (URL), too?

A: Only the organization owner can change the URL. If you're the organization owner, learn how to [change the organization URL](rename-vsts-organization.md).

#### Q: How many organization owners can I have?

A: Your organization can have only one owner. Only organization owners can [perform certain actions](#owner-differences), so make sure you keep your organization owner updated.

#### Q: Why did you ask for extra information when I signed in?

A: If our Terms of Service have changed since you last signed in, you might be asked to agree and confirm that your information is up to date.

<a name="owner-differences"></a>

#### Q: What makes the organization owner different from other organization users?

A: The organization owner manages payments and access for organization users. The organization owner also manages billing for the organization through the [Azure classic portal](https://manage.windowsazure.com/) or the [Azure portal](https://portal.azure.com). 

Organization owners also have permissions to perform the following tasks:

* Pay for users to access the organization
* Pay for additional organization services
* Rename the organization URL
* Change the organization owner

Project collection administrators can manage user access and change the organization owner, but they can't rename the organization URL.

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

[!INCLUDE [why-no-owned-organizations](../../_shared/qa-why-no-owned-organizations.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]
