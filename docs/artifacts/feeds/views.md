---
title: Communicate package quality with prerelease and release views
description: Use prerelease and release views to communicate the quality of a package to your consumers in Azure DevOps Services or Team Foundation Server
ms.assetid: EB40D23E-1053-4EBF-9D1D-19CF1BBAF1C6
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 03/10/2020
monikerRange: '>= tfs-2017'
---
 

# Communicate package quality with prerelease and release views

**Azure DevOps Services**

Views filter the feed to a subset of packages that meet criteria defined by the view.

There are two types of view `Prerelease` and `Release`. These views contain the subset of the feed's package-versions that have been *promoted* into that specific view. Both views work with NuGet, npm, and Maven packages.

*If you've never used feed views, read more about [why and how they're useful for package continuous integration and delivery](../concepts/views.md) before getting started.*

## Get started with feed views

By default, every feed has two types of views: `Prerelease` and `Release`.

### Promoting to a prerelease or release view 
To promote a package-version:

1. Select the package
1. Select the **Promote** button
1. Select the view to promote to and select **Promote**

> [!div class="mx-imgBorder"]
> ![Promote button next to the package ID](media/release-views-promote.png)
> [!div class="mx-imgBorder"]
> ![Promote scrollbar](media/release-views-promote-choice.png)

You can also promote using REST APIs. 

However, you cannot publish packages directly to a view (for example, `nuget.exe publish -Source ...feed@view/nuget/...`). Instead, publish packages to the feed directly then promote them into a view. 

> [!NOTE]
> Package demotion is not supported currently. If you want this feature to be added to future releases, please feel free to **Suggest a feature** on our [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

<!-- TODO REST API link -->

## Managing views

You can create your own views or rename and delete existing ones in the feed settings dialog.

[!INCLUDE [edit-feed](../includes/edit-feed.md)]

In the feed settings view:
- Select **Views**
- Make your changes (Add view, Edit, or Delete)
- Select **Ok**

> [!div class="mx-imgBorder"]
> ![Managing views](media/feed-settings-views.png)

[!INCLUDE [feedback](../../includes/help-support-shared.md)]