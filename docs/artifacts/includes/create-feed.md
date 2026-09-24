---
ms.topic: include
ms.service: azure-artifacts
ms.manager: wiwagn
ms.author: rabououn
author: ramiMSFT
ms.date: 09/02/2026
---

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed.

1. Choose a **Visibility** setting to control who can view packages in the feed.

1. Select **Include packages from common public sources** if you want your feed to use upstream packages from sources such as *nuget.org* or *npmjs.com*.

1. For **Scope**, choose whether the feed is scoped to the current project or the entire organization.

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-azure-devops.png" alt-text="Screenshot showing selections for creating a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="=azure-devops-2022"

1. Sign in to your Azure DevOps server, and then go to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Enter a **Name** for your feed.

1. Choose a **Visibility** setting to control who can view packages in the feed.

1. Select **Include packages from common public sources** if you want your feed to use upstream packages from sources such as *nuget.org* or *npmjs.com*.

1. For **Scope**, choose whether the feed is scoped to the current project or the entire organization.

::: moniker-end

::: moniker range="azure-devops-2022"

1. Select **Create** when you're done.

    :::image type="content" source="../media/create-new-feed-server-2022.png" alt-text="Screenshot showing selections for creating a new feed in Azure DevOps 2022.":::

::: moniker-end

> [!NOTE]
> When you create a feed, the project's **Build Service** account, such as *projectName Build Service (orgName)*, is assigned the **Feed and Upstream Reader (Collaborator)** role by default.
