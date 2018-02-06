A feed is a container for packages.
You consume and publish packages through a particular feed.

1. Navigate to the **Packages** hub in the **Build & Release** hub group:

   ![Go to Packages hub](_img/goto-feed-hub.png)

   >If you don't see the Packages hub, ask your account owner to install the [Package Management extension](https://marketplace.visualstudio.com/items?itemName=ms.feed) from the [Visual Studio Marketplace](../../marketplace/install-vsts-extension.md).

1. Click the dropdown in the top left and select **New feed**:

   ![New feed button](_img/new-feed-button.png)

1. In the dialog:
   - Give the feed a name.
   - Choose who can read and contribute (or update) packages in your feed.
   - Choose the upstream sources for your feed.
   - When you're done, choose **Create**.

Most of the default settings work great for most feed users. Making your feed account visible means it's easy to share a single source of packages across your entire team. Enabling [upstream sources](../concepts/feeds/upstream-sources.md) to public sources makes it easy to use your favorite OSS packages, and can also give you additional protection against outages and corrupted or compromised packages.

   ![New feed dialog](_img/new-feed-dialog.png)

   You can change these settings later by [editing the feed](../feeds/edit-feed.md).
