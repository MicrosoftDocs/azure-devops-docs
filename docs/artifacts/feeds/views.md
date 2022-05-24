---
title: Use feed views to share packages
description: How to use feed views to share your packages
ms.assetid: EB40D23E-1053-4EBF-9D1D-19CF1BBAF1C6
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 04/07/2022
monikerRange: '<= azure-devops'
---
 
# Use feed views to share packages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Feed views are a way to enable users to share some packages while keeping other packages private. Views filter the feed to a subset of packages that meet a set of criteria defined by that view.

By default, Azure Artifacts comes with three views: **@Local**, **@Prerelease**, and **@Release**. @local is the default view that contains all the published packages as well as all the packages saved from an upstream source. All views support NuGet, npm, Maven, Python, and Universal packages.

## Promote packages

With Azure Artifacts, you can promote packages to a specific to only share a subset of packages with your customers. Note that you cannot publish a package directly to a view. Instead, you should publish the package to your feed then promote it to a view as follows.

1. Select **Artifacts**.

1. Select your feed from the dropdown menu.

1. Select the package you wish to promote.

1. Select **Promote**.

    :::image type="content" source="media/promote-package.png" alt-text="A screenshot showing how to promote a package to a view.":::

1. Select a view from the dropdown menu, and then select **Promote**.

    :::image type="content" source="media/release-views-promote-choice.png" alt-text="Screenshot showing the promote package dialog box.":::

> [!NOTE]
> Package demotion is not supported. If you want this feature to be added to a future release, please feel free to **Suggest a feature** on [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Promote packages using the REST API

In addition to using the Azure Artifacts user interface, you can also promote packages using the REST API.

- **NuGet**:

    ```Command
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=5.1-preview.1
    ```
    
    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/nuget/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [NuGet - update package version](/rest/api/azure/devops/artifactspackagetypes/nuget/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true) for more details.

- **npm**:
  
    ```Command
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=5.1-preview.1
    ```
    
    Use [JsonPatchOperation](/javascript/api/azure-devops-extension-api/jsonpatchoperation) to construct the body of your request. See [npm - update package version](/rest/api/azure/devops/artifactspackagetypes/npm/update%20package?view=azure-devops-rest-5.1&preserve-view=true) for more details.

- **Python**:
   
    ```Command
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=5.1-preview.1
    ```
    
    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/python/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [Python - update package version](/rest/api/azure/devops/artifactspackagetypes/python/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true) for more details.


- **Universal packages**:
    
    ```Command
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=5.1-preview.1
    ```
    
    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/universal/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [Universal packages - update package version](/rest/api/azure/devops/artifactspackagetypes/universal/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true) for more details.

> [!TIP]
> Check out the [Get started with the REST API](../../integrate/how-to/call-rest-api.md) and the [REST API samples](../../integrate/get-started/rest/samples.md) to learn how to interact with Azure DevOps REST API.

## Manage views

You can create your own views or rename and delete existing ones from your feed's settings.

> [!NOTE]
> All feed views in a public project are accessible to everyone on the internet.

1. Select **Artifacts**.

1. Select your feed from the dropdown menu.

1. Select the gear icon :::image type="icon" source="../../media/icons/blue-gear.png" border="false"::: to access your feed's settings.

    :::image type="content" source="../media/feed-settings.png" alt-text="Screenshot showing how to access the feed's settings.":::

1. Select **Views**.

    :::image type="content" source="./media/views-settings.png" alt-text="A screenshot showing how to navigate to views.":::

1. Select a view, and then select **Edit** to edit your view or select **Add view** if you want to add a new view.

1. Select **Save** when you are done.

> [!IMPORTANT]
> For public feeds, if you change the access permissions of a certain view to **Specific people** your view will not be available as an upstream source.

## Related articles

- [Upstream sources overview](../concepts/upstream-sources.md)
- [Configure permissions](./feed-permissions.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)