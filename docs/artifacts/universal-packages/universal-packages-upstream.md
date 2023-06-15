---
title: Universal Packages upstream sources
description: How to add Universal Packages upstream sources
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 05/12/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Universal Packages upstream sources

With Azure Artifacts, you can enable upstream sources to start consuming packages from public registries such as NuGet.org or npmjs.com. Once you enable upstream sources, Azure Artifacts will save a copy of any packages you install from upstream. Azure Artifacts also supports using other feeds as upstreams. In this article, you'll learn how to add a new Universal Packages upstream source with a feed in your organization or other organizations within the same Azure Active Directory. See [Manage access with Azure Active Directory](../../organizations/accounts/connect-organization-to-azure-ad.md) to learn how to connect your organization to Azure Active Directory.

## Add a feed in your organization as an upstream source

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

    :::image type="content" source="./media/upack-add-upstream.png" alt-text="A screenshot showing how to add upstream.":::

1. Select **Azure Artifacts feed in this organization** to use packages from a feed in your organization.

    :::image type="content" source="./media/same-org-feed.png" alt-text="A screenshot showing the types of upstream sources - same org.":::

1. Select your **Feed** from the dropdown menu, select a **View** and give your upstream source a name. Make sure you check the **UPack** package type.

    :::image type="content" source="./media/upack-upstream.png" alt-text="A screenshot showing how to set up a new Universal Packages upstream source.":::

1. Select **Save** when you're done.

1. Select **Save** at the top right corner to save your changes.

## Add a feed in another organization as an upstream source

1. Select the ![gear icon](../../media/icons/gear-icon.png) at the top right corner to navigate to **Feed Settings**.

1. Select **Upstream sources**, and then select **Add Upstream**.

    :::image type="content" source="./media/upack-add-upstream.png" alt-text="A screenshot showing how to add an upstream source.":::

1. Select **Azure Artifacts feed in another organization** to use packages from a feed in a different organization within the same Azure Active Directory.

    :::image type="content" source="./media/other-org-feed.png" alt-text="A screenshot showing the types of upstream sources - feed in another org.":::

1. Enter your **Azure Artifacts feed locator**, and give your upstream source a name. Make sure you check the **UPack** package type.

    :::image type="content" source="./media/upack-upstream-other-org.png" alt-text="A screenshot showing how to set up a new Universal Packages upstream source with a feed in another organization.":::

1. Select **Save** when you're done.

1. Select **Save** at the top right corner to save your changes.

## View saved packages from upstream

To view the packages saved from your Universal Packages upstream source, select your UPack source from the dropdown menu.

:::image type="content" source="./media/filter-packages.png" alt-text="A screenshot showing how to filter for packages from UPack upstream source.":::

## Related articles

- [DevBlogs - Universal Packages upstream sources](https://devblogs.microsoft.com/devops/azure-artifacts-introduces-new-upstreaming-capabilities/)
- [Configure upstream sources](../how-to/set-up-upstream-sources.md)
- [Publish packages to NuGet.org](../nuget/publish-to-nuget-org.md)
- [Configure upstream behavior](../concepts/upstream-behavior.md)