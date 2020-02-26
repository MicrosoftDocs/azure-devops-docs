---
ms.topic: include
ms.prod: devops
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

A feed is a container for packages.
You consume and publish packages through a particular feed.

::: moniker range=">= azure-devops-2019"

1. Go to **Azure Artifacts**:

   > [!div class="mx-imgBorder"] 
   >![Go to Azure Artifacts](../media/goto-feed-hub-azure-devops-newnav.png)
   > 

2. Select **+ New feed**:

   > [!div class="mx-imgBorder"] 
   >![New feed button](../media/new-feed-button-azure-devops-newnav.png)
   > 

3. In the dialog box:

   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, select **Create**.

   Most of the default settings work great for most feed users. Making your feed organization visible means you can share a single source of packages across your entire team. Enabling upstream sources to public sources makes it easy to use your favorite OSS packages. Enabling upstream sources can also give you more protection against outages and corrupted or compromised packages.
   > [!NOTE]   
   > There are some important things to consider when publishing packages that involve upstream sources. Check out the documentation on [overriding a package from an upstream source](../concepts/upstream-sources.md#overriding-a-package-from-an-upstream-source) for more information.

   > [!div class="mx-imgBorder"] 
   >![New feed dialog box](../media/new-feed-dialog.png)
   > 

::: moniker-end

::: moniker range="< azure-devops-2019"

1. Go to the **Packages** page:

    ![Go to Azure Artifacts](../media/goto-feed-hub.png)

2. Select **+ New feed**:

    ![New feed button](../media/new-feed-button.png)

3. In the dialog box:

   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, select **Create**.

   Most of the default settings work great for most feed users. Making your feed organization visible means you can share a single source of packages across your entire team. Enabling upstream sources to public sources makes it easy to use your favorite OSS packages. Enabling upstream sources can also give you more protection against outages and corrupted or compromised packages.
   > [!NOTE]   
   > There are some important things to consider when publishing packages that involve upstream sources. Check out the documentation on [overriding a package from an upstream source](../concepts/upstream-sources.md#overriding-a-package-from-an-upstream-source) for more information.

   ![New feed dialog box](../media/new-feed-dialog.png)

::: moniker-end

You can change these settings later by [editing the feed](../feeds/edit-feed.md).
