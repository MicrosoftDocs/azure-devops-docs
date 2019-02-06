---
ms.topic: include
---

A feed is a container for packages.
You consume and publish packages through a particular feed.

::: moniker range="azure-devops"

1. Go to **Azure Artifacts**:

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![Go to Azure Artifacts](_img/goto-feed-hub-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![Go to Azure Artifacts](_img/goto-feed-hub.png)

    ---  

1. Select **+ New feed**:

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![New feed button](_img/new-feed-button-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![New feed button](_img/new-feed-button.png)

    ---   

1. In the dialog box:
   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, select **Create**.

    Most of the default settings work great for most feed users. Making your feed organization visible means you can share a single source of packages across your entire team. Enabling [upstream sources](../concepts/upstream-sources.md) to public sources makes it easy to use your favorite OSS packages. Enabling upstream sources can also give you more protection against outages and corrupted or compromised packages.

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![New feed dialog box](_img/new-feed-dialog-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![New feed dialog box](_img/new-feed-dialog.png)

    ---

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops"

1. Go to the **Packages** page:

    ![Go to Azure Artifacts](_img/goto-feed-hub.png)

1. Select **+ New feed**:

    ![New feed button](_img/new-feed-button.png)

1. In the dialog box:
   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, select **Create**.

    Most of the default settings work great for most feed users. Making your feed organization visible means you can share a single source of packages across your entire team. Enabling [upstream sources](../concepts/upstream-sources.md) to public sources makes it easy to use your favorite OSS packages. Enabling upstream sources can also give you more protection against outages and corrupted or compromised packages.

    ![New feed dialog box](_img/new-feed-dialog.png)

::: moniker-end


You can change these settings later by [editing the feed](../feeds/edit-feed.md).
