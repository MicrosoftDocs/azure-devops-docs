---
title: Troubleshoot changing organization owner for VSTS 
description: Troubleshoot changing VSTS organization owner and organization name (URL), difference between organization owner and organization user, frequently asked questions (FAQ)
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: e0fe24d4-f76b-43af-b0fd-125a7fb39042
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/09/2017
monikerRange: 'vsts'
---
# Troubleshoot changing organization owner for VSTS

**VSTS**

<a name="find-owner-pca"></a>

[!INCLUDE [find-project-collection-administrator](../../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-organization-owner](../../_shared/qa-find-organization-owner.md)]

<a name="NoNewOwner"></a>

#### Q: Why can't I find the user I want to make the new owner?

A: This might happen because of one of the following:

*	They're not in your VSTS organization, 
or they don't have organization access. 
Learn how to [add them to your organization](add-organization-users-from-user-hub.md).  
*	They haven't created a Visual Studio profile 
and agreed to the Terms of Service.  
*	If you recently added this person to your organization, 
you might experience a delay before this person appears 
in the possible organization owners list.   
*	If your organization uses Azure Active Directory to control access, 
directory members won't appear in the possible organization owners 
list until they meet the requirements above.

[!INCLUDE [recover-password](../../_shared/qa-recover-password.md)]

#### Q: Can I reverse the organization owner change?

A: Yes, if you're a project collection administrator.

#### Q: Can I change the organization name (URL) too?

A: Only the organization owner can change the URL. 
If you're the organization owner, learn how to 
[change the organization URL here](rename-vsts-organization.md).

#### Q :	How many organization owners can I have?

A:	Your organization can have only one owner. 
Only they can [perform certain actions](#owner-differences), 
so make sure to keep your organization owner updated.

#### Q: Why did you ask for extra information when I signed in?

A: If our Terms of Service have changed since you last signed in, 
you might be asked to agree and confirm that your information is up to date.

<a name="owner-differences"></a>

#### Q: What makes the organization owner different than other organization users?

A: The organization owner manages payments and access for organization users and also manages billing for the organization through the 
[Azure classic portal](https://manage.windowsazure.com/) or the
[Azure portal](https://portal.azure.com). 

Organization owners also have permissions to perform the following tasks:

*	Pay for users accessing the organization
*	Pay for additional organization services
*	Rename the organization URL
*	Change the organization owner

In contrast, project collection administrators can manage user access 
and change the organization owner, but they can't rename the organization URL.

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

[!INCLUDE [why-no-owned-organizations](../../_shared/qa-why-no-owned-organizations.md)]

<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]

