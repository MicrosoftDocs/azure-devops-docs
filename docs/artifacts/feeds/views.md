---
title: Promote packages and manage feed views 
description: Learn how to promote packages to a specific view and manage feed views in Azure Artifacts.
ms.assetid: EB40D23E-1053-4EBF-9D1D-19CF1BBAF1C6
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 01/22/2026
monikerRange: "<=azure-devops"
---
 
# Promote packages and manage feed views

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Feed views enable developers to control package visibility by sharing some packages while keeping others private. Each view filters the feed to display a subset of packages based on specific criteria defined for that view.

By default, Azure Artifacts includes three views: *@Local*, *@Prerelease*, and *@Release*. The *@Local* view is the default and contains all published packages, along with packages saved from upstream sources. All views support NuGet, npm, Maven, Python, Cargo, and Universal Packages.

You can change the default view in **Feed Settings** > **Views**. However, changing the default view doesn’t allow direct publishing to that view. Packages can only be published to the base feed, where they're available in the *@Local* view.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md).<br>- An Azure Artifacts [feed](../get-started-npm.md#create-a-feed). |


## Promote a package to a view

> [!NOTE]
> You must be a **Feed Publisher (Contributor)** or a **Feed Owner** to promote packages to a view.

Follow these steps to promote a package to a specific view in your feed:

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the package you want to promote, then select **Promote**.

1. Select a view from the dropdown menu, then select **Promote** once more.

    :::image type="content" source="media/promote-packages-select-view.png" alt-text="A screenshot displaying how to promote a package to a view in Azure Artifacts.":::

> [!IMPORTANT]
> Azure Artifacts doesn't support package demotion. Once a package is promoted, it can't be reverted to a previous view.

## Promote a package using the REST API

To promote a package using the REST API, send a PATCH request with a request body formatted as a [JSON Patch](https://jsonpatch.com/) document. This appends the target view (for example, Prerelease) to the package’s views array.

1. Sign in to Azure DevOps, then navigate to your project.

1. Create a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read, write, & manage** scope.

1. Copy the endpoint URL, replace it in one of the examples below (PowerShell or curl), and run the command to promote your package to the desired view.

::: moniker range="azure-devops"

### [NuGet](#tab/nuget)

- **Organization-scoped feed**:

    ```HTTP
    https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

- **Project-scoped feed**:
   
    ```HTTP
    https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/nuget/update-package-version#request-body) and [NuGet - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/nuget/update-package-version) for more details.

### [Npm](#tab/npm)
  
- **Organization-scoped feed**:

    ```HTTP
    https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

- **Project-scoped feed**:
    
    ```HTTP
    https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/npm/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/npm/update-package#request-body) and [Npm - Update Package](/rest/api/azure/devops/artifactspackagetypes/npm/update-package) for more details.

### [Python](#tab/python)
 
- **Organization-scoped feed**:
  
    ```HTTP
    https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

- **Project-scoped feed**:
    
    ```HTTP
    https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/pypi/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/python/update-package-version#request-body) and [Python - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/python/update-package-version) for more details.

### [Maven](#tab/maven)

- **Organization-scoped feed**:

    ```HTTP
    https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.2-preview.1
    ```
- **Project-scoped feed**:
   
    ```HTTP
    https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.2-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version#request-body) and [Maven - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version) for more details.

### [Cargo](#tab/cargo)

- **Organization-scoped feed**:

    ```HTTP
    https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/cargo/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```
- **Project-scoped feed**:
   
    ```HTTP
    https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/cargo/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/cargo/update-package-version#request-body) and [Cargo - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/cargo/update-package-version) for more details.

### [Universal Packages](#tab/universalpackages)
    
- **Organization-scoped feed**:

    ```HTTP
    https://pkgs.dev.azure.com/{organization}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

- **Project-scoped feed**:

    ```HTTP
    https://pkgs.dev.azure.com/{organization}/{project}/_apis/packaging/feeds/{feedId}/upack/packages/{packageName}/versions/{packageVersion}?api-version=7.2-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/universal/update-package-version#request-body) and [Universal Packages - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/universal/update-package-version) for more details.

---

::: moniker-end

::: moniker range="azure-devops-2022"

### [NuGet](#tab/nugetserver22)

- **Collection-scoped feed**:

    ```HTTP
    https://{instance}/{collection}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

- **Project-scoped feed**:
   
    ```HTTP
    https://{instance}/{collection}/{project}/_apis/packaging/feeds/{feedId}/nuget/packages/{packageName}/versions/{packageVersion}?api-version=7.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/nuget/update-package-version#request-body) and [NuGet - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/nuget/update-package-version) for more details.

### [Npm](#tab/npmserver22)
  
- **Collection-scoped feed**:

    ```HTTP
    https://{instance}/{collection}/_apis/packaging/feeds/{feedId}/npm/packagesbatch?api-version=7.1
    ```

- **Project-scoped feed**:
    
    ```HTTP
    https://{instance}/{collection}/{project}/_apis/packaging/feeds/{feedId}/npm/packagesbatch?api-version=7.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/npm/update-package#request-body) and [Npm - Update Package](/rest/api/azure/devops/artifactspackagetypes/npm/update-package) for more details.

### [Maven](#tab/mavenserver22)

- **Collection-scoped feed**:

    ```HTTP
    https://{instance}/{collection}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.1-preview.1
    ```
- **Project-scoped feed**:
   
    ```HTTP
    https://{instance}/{collection}/{project}/_apis/packaging/feeds/{feed}/maven/groups/{groupId}/artifacts/{artifactId}/versions/{version}?api-version=7.1-preview.1
    ```

See [JsonPatchOperation](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version#request-body) and [Maven - Update Package Version](/rest/api/azure/devops/artifactspackagetypes/maven/update-package-version) for more details.

---

::: moniker-end

#### Examples

Replace the placeholders with your personal access token, endpoint URL, and view name, then run the command to promote your package to the desired view:

### [PowerShell](#tab/powershell)

```PowerShell
$env:PAT = "YOUR_PERSONAL_ACCESS_TOKEN"
$uri = "YOUR_URL"
$headers = @{
    "Content-Type" = "application/json"
    Authorization = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(":$env:PAT"))
}
$body = @{
    views = @{
        op    = "add"
        path  = "/views/-"
        value = "YOUR_VIEW_NAME"
    }
} | ConvertTo-Json

Invoke-RestMethod -Uri $uri -Method Patch -Headers $headers -Body $body
```

### [curl](#tab/curl)

```bash
PAT="YOUR_PERSONAL_ACCESS_TOKEN"
ENCODED_PAT=$(echo -n ":$PAT" | base64 | tr -d '\n')
$ curl -X PATCH "YOUR_ENDPOINT_URL" \
-H "Content-Type: application/json" \
-H "Authorization: Basic $ENCODED_PAT" \
-d '{
    "views":  {
                  "path":  "/views/-",
                  "op":  "add",
                  "value":  "YOUR_VIEW_NAME"
              }
    }'
```

---

> [!NOTE]
> All feed views in a public project are publicly accessible and can be viewed by anyone on the internet.

## Manage views

By default, Azure Artifacts includes three views: *@Local*, *@Prerelease*, and *@Release*. You can also create additional views and manage existing ones by renaming or deleting them from your feed’s settings

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select the gear icon :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: to open your feed's settings.

    :::image type="content" source="../media/feed-settings.png" alt-text="A screenshot showing how to access feed settings in Azure Artifacts.":::

1. Select **Views**, choose a view, and then select **Edit** to modify it. To create a new view, select **Add view**.

    :::image type="content" source="./media/manage-views.png" alt-text="A screenshot showing how to add, edit, or delete feed views.":::

1. Select **Save** when you're done.

::: moniker range="azure-devops"

> [!IMPORTANT]
> For public feeds, if you change the access permissions of a view to **Specific people**, that view is no longer available as an upstream source.

::: moniker-end

## Related content

- [Delete and recover packages](../how-to/delete-and-recover-packages.md)

- [Manage feed permissions](feed-permissions.md)

- [Share packages using package badges](../package-badges.md)

