---
title: Promote packages and manage feed views 
description: Learn how to promote packages in an Azure Artifacts feed.
ms.assetid: EB40D23E-1053-4EBF-9D1D-19CF1BBAF1C6
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 10/21/2024
monikerRange: '<= azure-devops'
---
 
# Promote packages and manage feed views

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Feed views allow users to control package visibility by sharing some packages while keeping others private. Each view filters the feed to display a subset of packages based on specific criteria defined for that view.

By default, Azure Artifacts comes with three views: **@Local**, **@Prerelease**, and **@Release**. The `@Local` view is the default and contains all published packages as well as those saved from upstream sources. All views support NuGet, npm, Maven, Python, Cargo, and Universal Packages.

> [!Note]
> Azure Artifacts only supports publishing and restoring packages from the default view - *@Local*. You cannot publish directly to the *@Prerelease* or *@Release* views.

## Promote packages

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the package you wish to promote, and then select **Promote**.

    :::image type="content" source="media/promote-packages-to-a-view.png" alt-text="A screenshot displaying how to promote a package to a view in an Azure Artifacts feed.":::

1. Select a view from the dropdown menu, and then select **Promote**.

    :::image type="content" source="media/promote-packages-select-view.png" alt-text="A screenshot showing the list of available views.":::

> [!IMPORTANT]
> Package demotion is not supported. Once a package has been promoted, it cannot be reverted to a previous view.

## Promote packages using the REST API

In addition to using the Azure Artifacts user interface, you can also promote packages using the REST API.

The request body should be formatted as a [JSON Patch](https://jsonpatch.com/) document that appends the view to the end of the views array. See the [Get started with the REST API](../../integrate/how-to/call-rest-api.md) and the [REST API samples](../../integrate/get-started/rest/samples.md) for more details.

### [NuGet](#tab/nuget)

- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

- **Project scoped feed**:
   
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/nuget/update-package-version#request-body) to construct the body of your request. See [NuGet - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/nuget/update-package-version) for more details.

### [Npm](#tab/npm)
  
- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

- **Project scoped feed**:
    
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/npm/update-package#request-body) to construct the body of your request. See [Npm - Update Package](/rest/api/azure/devops/artifactspackagetypes/npm/update-package) for more details.

### [Python](#tab/python)
 
- **Organization scoped feed**:
  
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

- **Project scoped feed**:
    
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/python/update-package-version#request-body) to construct the body of your request. See [Python - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/python/update-package-version) for more details.

### [Maven](#tab/maven)

- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.1-preview.1
    ```
- **Project scoped feed**:
   
    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.1-preview.1
    ```

Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version#request-body) to construct the body of your request. See [Maven - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version) for more details.

### [Cargo](#tab/cargo)



### [Universal Packages](#tab/universalpackages)
    
- **Organization scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

- **Project scoped feed**:

    ```HTTP
    PATCH https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=7.1-preview.1
    ```

Use [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/universal/update-package-version#request-body) to construct the body of your request. See [Universal - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/universal/update-package-version) for more details.

---

#### Examples

### [curl](#tab/curl)

```curl
$ curl -X "PATCH" "https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1" \
-h 'Content-Type: application/json' \
-u ':${PAT}' \
-d $'{
  "views": {
    "op": "add",
    "path": "/views/-",
    "value": "{viewName}"
  }
}'
```

### [PowerShell](#tab/powershell)

```PowerShell
$uri = "https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1"
$headers = @{
    "Content-Type" = "application/json"
    Authorization = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$env:PAT"))
}
$body = @{
    views = @{
        op    = "add"
        path  = "/views/-"
        value = "{viewName}"
    }
} | ConvertTo-Json

Invoke-RestMethod -Uri $uri -Method Patch -Headers $headers -Body $body
```

---

> [!NOTE]
> All feed views in a public project are accessible to everyone on the internet.

## Manage views

Azure Artifacts offers three default views: *@Local*, *@Prerelease*, and *@Release*. You can also create new views and manage existing ones by renaming or deleting them directly from your feed's settings.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the gear icon on the far right :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: to access your feed's settings.

    :::image type="content" source="../media/feed-settings.png" alt-text="Screenshot showing how to access the feed's settings.":::

1. Select **Views**, select a view, and then select **Edit** to edit your view. If you want to add a new view, select **Add view**.

1. Select **Save** when you're done.

    :::image type="content" source="./media/manage-views.png" alt-text="A screenshot showing how to add, edit, or delete feed views.":::

> [!IMPORTANT]
> For public feeds, if you change the access permissions of a view to **Specific people**, that view will no longer be available as an upstream source.

## Related content

- [Configure feed permissions](feed-permissions.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
