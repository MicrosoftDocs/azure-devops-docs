---
ms.topic: include
---

A feed is a container for packages.
You consume and publish packages through a particular feed.

1. Navigate to the **Artifacts** hub:

    ::: moniker range="vsts"

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![Go to Packages hub](_img/goto-feed-hub-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![Go to Packages hub](_img/goto-feed-hub.png)

    ---
    ::: moniker-end

    ::: moniker range=">= tfs-2017 < vsts"

    ![Go to Packages hub](_img/goto-feed-hub.png)

    ::: moniker-end
   

1. Select **+ New feed**:

    ::: moniker range="vsts"

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![New feed button](_img/new-feed-button-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![New feed button](_img/new-feed-button.png)

   ---

   ::: moniker-end

   ::: moniker range=">= tfs-2017 < vsts"

   ![New feed button](_img/new-feed-button.png)

   ::: moniker-end
   

1. In the dialog:
   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, choose **Create**.

    Most of the default settings work great for most feed users. Making your feed account visible means it's easy to share a single source of packages across your entire team. Enabling [upstream sources](../concepts/upstream-sources.md) to public sources makes it easy to use your favorite OSS packages, and can also give you additional protection against outages and corrupted or compromised packages.

    ::: moniker range="vsts"

    # [New navigation](#tab/new-nav)
    > [!div class="mx-imgBorder"] 
    >![New feed dialog](_img/new-feed-dialog-azure-devops-newnav.png)
    > 

    # [Previous navigation](#tab/previous-nav)
    ![New feed dialog](_img/new-feed-dialog.png)

    ---

    ::: moniker-end

    ::: moniker range="tfs-2018"

    ![New feed dialog](_img/new-feed-dialog.png)

    ::: moniker-end


You can change these settings later by [editing the feed](../feeds/edit-feed.md).
