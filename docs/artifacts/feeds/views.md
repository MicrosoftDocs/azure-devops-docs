---
title: Use feed views to share packages
description: How to use feed views to share your packages
ms.assetid: EB40D23E-1053-4EBF-9D1D-19CF1BBAF1C6
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 08/25/2022
monikerRange: '<= azure-devops'
---
 
# Use feed views to share packages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Feed views are a way to enable users to share some packages while keeping other packages private. Views filter the feed to a subset of packages that meet a set of criteria defined by that view.

By default, Azure Artifacts comes with three views: **@Local**, **@Prerelease**, and **@Release**. @local is the default view that contains all the published packages and all the packages saved from upstream sources. All views support NuGet, npm, Maven, Python, and Universal packages.

> [!Note]
> Publishing and restoring packages directly to/from a view is not supported in Azure Artifacts.

## Promote packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you wish to promote, and then select **Promote**.

    :::image type="content" source="media/promote-package.png" alt-text="A screenshot showing how to promote a package to a view.":::

1. Select a view from the dropdown menu, and then select **Promote**.

    :::image type="content" source="media/promote-package-views.png" alt-text="A screenshot showing the available feed views.":::

> [!NOTE]
> Package demotion is not supported. If you want this feature to be added to a future release, please feel free to **Suggest a feature** on [Azure DevOps Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Promote packages using the REST API

In addition to using the Azure Artifacts user interface, you can also promote packages using the REST API. The URI varies based on the package type:

Use the actual user-facing name and version of the package for the `{packageName}` and `{packageVersion}` fields, respectively. If your feed is organization-scoped, omit the `{project}` field.

The body of the request is a [JSON Patch](https://jsonpatch.com/) document adding the view to the end of the `views` array. See [Get started with the REST API](../../integrate/how-to/call-rest-api.md) and the [REST API samples](../../integrate/get-started/rest/samples.md) for more information on how to interact with Azure DevOps REST API.

### [NuGet](#tab/nuget)

- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

- **Project scoped feed**:
   
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/nuget/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [NuGet - update package version](/rest/api/azure/devops/artifactspackagetypes/nuget/update%20package%20version?view=azure-devops-rest-7.1&preserve-view=true) for more details.

### [Npm](#tab/npm)
  
- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

- **Project scoped feed**:
    
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

    Use [JsonPatchOperation](/javascript/api/azure-devops-extension-api/jsonpatchoperation) to construct the body of your request. See [npm - update package version](/rest/api/azure/devops/artifactspackagetypes/npm/update%20package?view=azure-devops-rest-7.1&preserve-view=true) for more details.

### [Python](#tab/python)
 
- **Organization scoped feed**:
  
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

- **Project scoped feed**:
    
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/python/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [Python - update package version](/rest/api/azure/devops/artifactspackagetypes/python/update%20package%20version?view=azure-devops-rest-7.1&preserve-view=true) for more details.

### [Maven](#tab/maven)

- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.1-preview.1
    ```
- **Project scoped feed**:
   
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.1-preview.1
    ```

    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/python/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [Maven  - update package version](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version?view=azure-devops-rest-7.1&preserve-view=true) for more details.

### [Universal Packages](#tab/universalpackages)
    
- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

- **Project scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

    Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/universal/update%20package%20version?view=azure-devops-rest-5.1&preserve-view=true#jsonpatchoperation) to construct the body of your request. See [Universal packages - update package version](/rest/api/azure/devops/artifactspackagetypes/universal/update%20package%20version?view=azure-devops-rest-7.1&preserve-view=true) for more details.

---

- **Example**:

```HTTP
PATCH https://pkgs.dev.azure.com/fabrikam-fiber-inc/litware/_apis/packaging/feeds/litware-tools/nuget/packages/LitWare.Common/versions/1.0.0?api-version=5.1-preview.1 HTTP/1.1
Content-Type: application/json-patch+json

{
  "views": {
    "op": "add",
    "path": "/views/-",
    "value": "Release"
  }
}
```

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

1. Select **Save** when you're done.

> [!IMPORTANT]
> For public feeds, if you change the access permissions of a certain view to **Specific people** your view will not be available as an upstream source.

## Related articles

- [Upstream sources overview](../concepts/upstream-sources.md)
- [Configure permissions](./feed-permissions.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
