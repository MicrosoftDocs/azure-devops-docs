---
title: Assign paid extension access to users for Azure DevOps Services and TFS
description: Assign paid extension access to users for Azure DevOps Services and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 13c4b901-70d6-488f-9ee5-00eb3121b977 
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 02/05/2019
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

## Azure DevOps Services

::: moniker range=">= azure-devops-2019"

1. Sign in to your organization, ```https://dev.azure.com/{yourorganization}```.

2. Select ![gear icon](../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users**.

   ![Users page](../_shared/_img/settings/open-organization-settings-users-vert.png)
   
4. Most extensions require that users have at least Basic access, not Stakeholder. Check your users' access levels here:

   ![Check that users have required access to extension assignment](_img/user-access-level.png)

   To find the access that your extension requires, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

5. To assign the extension, right click or choose the ellipses (...) for the user you want to assign access to. Select **Manage extensions**.

   ![Manage extensions](_img/manage-extensions.png)

6. Assign the extension and **Save changes**.

   ![Assign extension](_img/assign-extension.png)

   You can assign the extension to specific users up to the number allowed for free extensions or the number that you purchased for paid extensions. Ensure that any users you add in excess of what you've paid for, already have a license.

::: moniker-end

::: moniker range="<= tfs-2018"

1. Sign in to your Azure DevOps Services organization: ```https://dev.azure.com/{organization}```.

2. Go to **Users**.

   <img alt="Go to Users" src="../_shared/_img/users-hub-updated-ui.png" style="border: 1px solid #CCCCCC" />

3. Most extensions require that users have at least Basic access, not Stakeholder. Check your users' access levels here:

   ![Check that users have required access to extension assignment](_img/user-access-level.png)

   To find the access that your extension requires, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

4. To assign the extension, right click or click the ellipses (...) for the user you want to assign access to.

   ![Manage extensions](_img/assign-extensions/manage-extensions.png)

5. Assign the extension and **Save changes**.

   ![Assign extensions](_img/assign-extensions/assign-extension.png)

   You can assign the extension to specific users up to the number allowed for free extensions or the number that you purchased for paid extensions.

Tell your team about this extension, so they can start using its capabilities.

::: moniker-end

::: moniker range=">= tfs-2013 < azure-devops"

## TFS

1.  From your TFS home page, go to your settings' User hub: (```https://{server}:8080/tfs/_admin/_userHub```)

    ![TFS server settings](../_shared/_img/users-hub-tfs-updated.png)

2.  Select the extension from the extension pane and assign your extension to users who need access:

    ![Assign extensions](_img/assign-extensions/assign-extension-tfs.png)

    You can assign the extension to one user, specific users, or to all users at the same time, even going above the number allowed 
    for your extension, if necessary.

3.  Tell your team about this extension, so they can start using its capabilities.

::: moniker-end
