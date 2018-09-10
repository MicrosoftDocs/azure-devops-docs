---
title: Assign paid extension access to users for Azure DevOps Services and TFS
description: Assign paid extension access to users for Azure DevOps Services and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 13c4b901-70d6-488f-9ee5-00eb3121b977 
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 10/17/2017
ms.topic: conceptual
monikerRange: '>= tfs-2013'
---

 

# Assign paid extension access to users

**Azure DevOps Services** | **TFS**

After you install a paid extension, you must assign that extension to users who need access, so they can start using that extension's capabilities. 
To assign extensions, you'll need Azure DevOps Services or TFS [project collection administrator or organization owner permissions](./faq-extensions.md#find-owner).

> [!TIP]
> You only have to assign extensions to users who need access. If you have [Visual Studio subscribers](https://marketplace.visualstudio.com/subscriptions), 
> they automatically get access to specific extensions that are included with their subscriptions as benefits, like Test Manager. If you installed these extensions, you don't have to assign them to Visual Studio subscribers in your organization. 

::: moniker range="vsts"


## Azure DevOps Services 
0.	Sign in to your Azure DevOps Services organization (```https://dev.azure.com/{organization}```).

0.	Go to **Users**.

    ![Azure DevOps Services Users hub](../_shared/_img/users-hub-updated-ui.png)

0.	Most extensions require that users have at least Basic access, not Stakeholder. Check your users' access levels here:

    ![Check user access](_img/assign-extensions/check-user-access.png)

	To find the access that your extension requires, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

0.	To assign the extension, right click or click the ellipses (...) for the user you want to assign access to:

	![Manage extensions](_img/assign-extensions/manage-extensions.png)

0.	Assign the extension:

    ![Assign extensions](_img/assign-extensions/assign-extension.png)

	You can assign the extension to specific users up to the number allowed for free extensions or the number that you purchased for paid extensions.

0.	Tell your team about this extension, so they can start using its capabilities.


::: moniker-end

::: moniker range=">= tfs-2013 < vsts"


## TFS

0.  From your TFS home page, go to your settings' User hub: (```https://{server}:8080/tfs/_admin/_userHub```)

    ![TFS server settings](../_shared/_img/users-hub-tfs-updated.png)

0.  Select the extension from the extension pane and assign your extension to users who need access:

    ![Assign extensions](_img/assign-extensions/assign-extension-tfs.png)

    You can assign the extension to one user, specific users, or to all users at the same time, even going above the number allowed 
    for your extension, if necessary.

0.  Tell your team about this extension, so they can start using its capabilities.

::: moniker-end
