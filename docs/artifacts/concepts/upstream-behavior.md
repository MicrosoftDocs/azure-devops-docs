---
title: Configure upstream behavior
description: Allow or block the consumption of package versions from public registries.
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 01/19/2021
ms.author: rabououn
author: ramiMSFT
monikerRange: '>= tfs-2017'
---

# Configure upstream behavior

Upstream sources enables developers to use a single feed to publish and consume packages from Artifact feeds and public registries such as NuGet.org or npmjs.com. To set up upstream sources for your feed, check the box to **include packages from common public sources**. This will allow your feed to use packages from the common public registries.

:::image type="content" source="media/include-upstream-sources.png" alt-text="Include packages from common public sources checkbox":::

Previously, Artifact feeds combined a list of available package versions from the feed and all the upstream sources.

:::image type="content" source="media/previous-behavior.svg" alt-text="Previous upstream sources behavior":::

Upstream behavior is a feature that enables developers to choose if they want to consume externally-sourced package versions. Upstream behavior dictates which packages will be made available from the public registries for individual packages.

When the upstream behavior is enabled, when a package is published to your Azure Artifacts feed, any version from the public registry will be blocked and not made available for download.

This approach provides another layer of security by blocking the exposure to malicious packages that may infiltrate the public registries.

Users will still be able to toggle off the upstream behavior setting and consume packages from the public registries if they choose to do so.

> [!NOTE]
> The new behavior won't affect any package versions that are already in use. Those are stored in the feed's `@local` view.

## Applicable scenarios

The next section shows a few common scenarios where the upstream behavior is triggered to block externally sourced package versions along with few other cases where no blockage to the public packages is needed.

## Public versions will be blocked

- **Private package version made public**: in this scenario, a team has a private package that was made public. The upstream behavior in this case will be triggered to block any new public versions (untrusted packages). 

    :::image type="content" source="media\internal-to-public.svg" alt-text="Internal package version made public":::

- **Having both private and public packages**: in this scenario, if a team already has both private and public packages, enabling the upstream behavior will result in blocking any new package versions from the public registry.

    :::image type="content" source="media\private-and-public-packages.svg" alt-text="both private and public packages":::

## Public versions will not be blocked

- **All packages are private**: if all existing packages are private and the team won't be consuming any public packages, the new upstream behavior will have no effect on the team's workflow in this scenario.
    
    :::image type="content" source="media\only-private-packages.svg" alt-text="private packages only":::

- **All packages are public**: if all the packages consumed are public, whether it's from the public registry or any other open-source repositories, the new upstream behavior will have no effect on the team's workflow in this scenario.

    :::image type="content" source="media\public-packages-only.svg" alt-text="public packages only":::

- **Public package made private**: if a public package is switched to a private package, the new upstream behavior will have no effect on the team's workflow in this scenario.

    :::image type="content" source="media\public-to-internal.svg" alt-text="switched from public to private":::

## Allow external versions

> [!NOTE]
> Only feed owners are allowed to configure the upstream behavior. See [Feed permissions](../feeds/feed-permissions.md) for more details.

To configure the new upstream behavior, select a package from within your feed then select the toggle button to **Allow external sourced versions**.

:::image type="content" source="media\allow-external-sourced-versions.png" alt-text="Allow external sourced versions toggle button":::

## Allow external versions using the REST API

Aside from using the feed's user interface, you can also configure the upstream behavior using the Azure DevOps Services REST API. Select the appropriate tab and find the links to the REST API docs.

#### [NuGet](#tab/nuget/)

- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/nuget/get%20upstreaming%20behavior)
- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/nuget/set%20upstreaming%20behavior)
 
#### [Npm](#tab/npm/)

- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/getpackageupstreamingbehavior)
- [Get scoped package upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/getscopedpackageupstreamingbehavior)
- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/set%20upstreaming%20behavior)
- [Set scoped package upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/set%20scoped%20upstreaming%20behavior)

#### [Python](#tab/python/)

- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/python/get%20upstreaming%20behavior)
- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/python/set%20upstreaming%20behavior)

#### [Maven](#tab/maven/)

- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/maven/get%20upstreaming%20behavior)
- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/maven/set%20upstreaming%20behavior)

* * * 

## Allow external versions with PowerShell

To successfully execute the next steps in this section, you will need to create a personal access token with packaging **Read, write, & manage** permissions. See [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to learn how to create your personal access token. 


:::image type="content" source="media\packaging-permissions.png" alt-text="select packaging permissions":::

In an elevated PowerShell command prompt window, run the following command to create an environment variable for your personal access token.

```PowerShell
$env:PATVAR = "YOUR_PAT_GOES_HERE"
```

The following commands will convert your personal access token to baser64 encoded string and construct the HTTP request header.

```PowerShell
$token = [Convert]::ToBase64String(([Text.Encoding]::ASCII.GetBytes("username:$PatVar")))
$headers = @{
    Authorization = "Basic $token"
}
```

Invoking the REST method requires an endpoint url. Enter your `OrganizationName`, `ProjectName`, `FeedName`, `Protocol`, and your `PackageName` to construct the `$Url` variable. (Project-scoped feed example: /pkgs.dev.azure.com/MyOrg/MyProject/_apis/packaging/feeds/MyFeed/nuget/packages/Myapp1.0.nupkg/upstreaming?api-version=6.1-preview.1)

- **Project-scoped feed**:

```PowerShell
$url = "https://pkgs.dev.azure.com/{OrganizationName}/{ProjectName}/_apis/packaging/feeds/{FeedName}/{Protocol}/packages/{PackageName}/upstreaming?api-version=6.1-preview.1"
```

- **Organization-scoped feed**:

```PowerShell
$url = "https://pkgs.dev.azure.com/{OrganizationName}/_apis/packaging/feeds/{FeedName}/{Protocol}/packages/{PackageName}/upstreaming?api-version=6.1-preview.1"
```

Now that we have both the header and the endpoint URL set up, we can start sending HTTP requests to get, set, and clear upstreaming for any specific package.

### Get upstreaming behavior

Run the following command to retrieve the upstream behavior state of your package. `$url` and `$headers` are the same variables we used in the previous section.

 ```PowerShell
 Invoke-RestMethod -Uri $url -Headers $headers
 ```

### Set upstreaming behavior

Run the following commands to allow externally sourced versions for your package. This will set `versionsFromExternalUpstreams` to `AllowExternalVersions`, and will use the `$url` and `$headers` variables to query the REST API.

```PowerShell
$body = '{"versionsFromExternalUpstreams": "AllowExternalVersions"}'

Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"
```

### Clear upstreaming behavior

To clear the upstream behavior for your package, run the following commands to set `versionsFromExternalUpstreams` to `Auto` and query the REST API.

```PowerShell
$body = '{"versionsFromExternalUpstreams": "Auto"}'

Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"
```

> [!NOTE]
> In some cases, configuring the upstream behavior can take time to propagate across the service. If your package is not available after updating the settings, please allow up to 3 hours for the new settings to take effect.

## Related articles

- [Understand upstream sources](upstream-sources.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
- [Feeds permissions](../feeds/feed-permissions.md)
- [Best practices](best-practices.md)
