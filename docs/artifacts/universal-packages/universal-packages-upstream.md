---
title: Universal Packages upstream sources
description: Learn how to set up internal and external feeds as Universal Packages upstream sources in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 03/09/2026
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Universal Packages upstream sources

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages in Azure Artifacts allow developers to store various types of packages bundled into a single package. This article walks you through setting up internal and external feeds as upstream sources for Universal Packages.

## Prerequisites

| **Product**        | **Requirements**       |
|--------------------|------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Download and install [Azure CLI](/cli/azure/install-azure-cli).<br> - Install the [Azure DevOps extension](#install-azure-devops-extension). |

> [!NOTE]
> Universal Packages are only available in Azure DevOps Services.

## Add a feed in your organization as an upstream source

Follow these steps to add a feed from the same organization as an upstream source for Universal Packages:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the ![gear icon](../../media/icons/gear-icon.png) in the upper‑right corner to open **Feed Settings**.

1. Select **Upstream sources**, then select **Add Upstream**.

    :::image type="content" source="./media/upack-add-upstream.png" alt-text="A screenshot showing how to add upstream.":::

1. Select **Azure Artifacts feed in this organization** to use a feed in your organization.

    :::image type="content" source="./media/same-org-feed.png" alt-text="A screenshot showing the types of upstream sources - same org.":::

1. Select your **Feed** from the dropdown menu, choose a **View**, and enter a name for your upstream source. Make sure the **UPack**  package type is selected.

    :::image type="content" source="./media/upack-upstream.png" alt-text="A screenshot showing how to set up a new Universal Packages upstream source.":::

1. Select **Add**, and then select **Save** to apply your changes.

## Add a feed in another organization as an upstream source

Follow these steps to add a feed from a different organization as an upstream source for Universal Packages:

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the ![gear icon](../../media/icons/gear-icon.png) in the upper‑right corner to navigate to **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

    :::image type="content" source="./media/upack-add-upstream.png" alt-text="A screenshot showing how to add an upstream source.":::

1. Select **Azure Artifacts feed in another organization** to use a feed in a different organization within the same Microsoft Entra ID.

    :::image type="content" source="./media/other-org-feed.png" alt-text="A screenshot showing the types of upstream sources - feed in another org.":::

1. Enter your **Azure Artifacts feed locator**, and give your upstream source a name. Make sure the **UPack**  package type is selected.

    :::image type="content" source="./media/upack-upstream-other-org.png" alt-text="A screenshot showing how to set up a new Universal Packages upstream source with a feed in another organization.":::

1. Select **Add**, and then select **Save** in the upper-right corne to apply your changes.

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant**. To do this, navigate to **Feed Settings** > **Views** > select the ellipsis for the view, select **Edit**.

## Related content

- [Use upstream sources with public feeds](../how-to/public-feeds-upstream-sources.md)

- [Safeguard against malicious public packages](../concepts/upstream-behavior.md)

- [Manage permissions](../feeds/feed-permission.md)
