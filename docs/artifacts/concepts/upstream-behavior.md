---
title: Safeguard against malicious public packages
description: Learn how to control access to public registries and protect your environment from malicious public packages.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 08/22/2023
ms.author: rabououn
author: ramiMSFT
monikerRange: 'azure-devops'
---

# Safeguard against malicious public packages

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts upstream sources, developers gain the convenience of using a unified feed to both publish and consume packages from Artifact feeds and popular public registries like NuGet.org or npmjs.com.

## Allow externally-sourced versions

This feature enables developers to control whether they want to consume package versions from public registries such as NuGet.org or npmjs.com. 

once the **Allow External Versions** toggle is enabled for a specific packge, versions from the public registry become available for download. By default, this option is disabled, adding an extra layer of security by preventing exposure to potentially malicious packages from public registries. You must be a **Feed Owner** to enable the *allow externally sourced versions* feature.

> [!NOTE]
> Changing this setting does not affect package versions already saved to the feed. Those versions will remain accessible regardless of this setting.

## Applicable scenarios

The following section outlines common scenarios where external versions (packages from public registries) are either blocked or allowed from being saved to the feed. In the rest of this article, we refer to packages from public registries as public packages and packages in an Azure Artifacts feed as private packages.

### Scenario 1: public versions are blocked

* [Private package version made public](#private-package-version-made-public)
* [Having both private and public packages](#having-both-private-and-public-packages)

#### Private package version made public

In this scenario, a team has a private package that was made public. The external versions setting in this case will cause the feed to block consumption of any new versions with that package name from a public source.

:::image type="content" source="media\internal-to-public.svg" alt-text="An illustration showing an internal package version made public.":::

#### Having both private and public packages 

In this scenario, if a team uses a combination of private and public packages, disallowing externally sourced packages blocks any new package versions from the public registry.

:::image type="content" source="media\private-and-public-packages.svg" alt-text="An illustration showing available private and public packages.":::

### Scenario 2: public versions won't be blocked

* [All packages are private](#all-packages-are-private)
* [All packages are public](#all-packages-are-public)
* [Public package made private](#public-package-made-private)

#### All packages are private*

If all existing packages are private, and the team has no plans to use any public packages, the external versions setting has no effect on the team's workflow in this scenario.

:::image type="content" source="media\only-private-packages.svg" alt-text="An illustration showing feed with only private packages.":::

#### All packages are public

In this scenario, if the team exclusively consumes public packages, whether from the public registry or other open-source repositories, the setting doesn't affect their workflow in any way.

:::image type="content" source="media\public-packages-only.svg" alt-text="An illustration showing feed with only public packages.":::

#### Public package made private

In this situation, when a public package is converted to a private package, the external versions setting doesn't affect the team's workflow in any way.

:::image type="content" source="media\public-to-internal.svg" alt-text="An illustration showing a package converted from public to private.":::

## Allow external versions

> [!NOTE]
> You must be a **Feed Owner** to allow externally sourced versions. For more information, see [Feed permissions](../feeds/feed-permissions.md).

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select your package, and then select the ellipsis button for more options. Select **Allow externally-sourced versions**.

    :::image type="content" source="media\allow-external-versions.png" alt-text="A screenshot showing how to allow externally sourced versions.":::

1. Select the toggle button to allow external versions. Select **Close** when you're done.

    :::image type="content" source="media\enable-external-versions.png" alt-text="A screenshot showing how to enable external versions.":::

## Allow external versions using the REST API

#### [NuGet](#tab/nuget/)

- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/nuget/set-upstreaming-behavior)
- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/nuget/get-upstreaming-behavior)

#### [npm](#tab/npm/)

- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/set-upstreaming-behavior)
- [Set scoped upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/set-scoped-upstreaming-behavior)
- [Get package upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/get-package-upstreaming-behavior)
- [Get scoped package upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/get-scoped-package-upstreaming-behavior)

#### [Python](#tab/python/)

- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/python/get-upstreaming-behavior)
- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/python/set-upstreaming-behavior)

#### [Maven](#tab/maven/)

- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/maven/get-upstreaming-behavior)
- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/maven/set-upstreaming-behavior)

* * *

## Allow external versions using PowerShell

1. [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read, write, & manage** permissions.

    :::image type="content" source="media\packaging-permissions.png" alt-text="Screenshot showing how to select packaging permissions.":::

1. Create an environment variable for your personal access token.

    ```PowerShell
    $env:PATVAR = "YOUR_PERSONAL_ACCESS_TOKEN"
    ```

1. Convert your personal access token to baser64 encoded string and construct the HTTP request header.

    ```PowerShell
    $token = [Convert]::ToBase64String(([Text.Encoding]::ASCII.GetBytes("username:$env:PatVar")))
    $headers = @{
        Authorization = "Basic $token"
    }
    ```

1. Construct your endpoint url. Example: //pkgs.dev.azure.com/MyOrg/MyProject/_apis/packaging/feeds/MyFeed/nuget/packages/pkg1.0.0.nupkg/upstreaming?api-version=6.1-preview.1

    - **Project-scoped feed**:

        ```PowerShell
        $url = "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_apis/packaging/feeds/<FEED_NAME>/<PROTOCOL>/packages/<PACKAGE_NAME>/upstreaming?api-version=6.1-preview.1"
        ```

    - **Organization-scoped feed**:

        ```PowerShell
        $url = "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_apis/packaging/feeds/<FEED_NAME>/<PROTOCOL>/packages/<PACKAGE_NAME>/upstreaming?api-version=6.1-preview.1"
        ```

#### [Get upstreaming behavior](#tab/get/)

Run the following command to retrieve the upstream behavior state of your package. `$url` and `$headers` are the same variables we used in the previous section.

 ```PowerShell
 Invoke-RestMethod -Uri $url -Headers $headers
 ```

#### [Set upstreaming behavior](#tab/set/)

Run the following commands to allow externally sourced versions for your package. This sets `versionsFromExternalUpstreams` to `AllowExternalVersions`, and uses the `$url` and `$headers` variables to query the REST API.

```PowerShell
$body = '{"versionsFromExternalUpstreams": "AllowExternalVersions"}'

Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"
```

> [!NOTE]
> In some cases, setting up the upstream behavior can take time to propagate across the service. If your package is not available after updating the settings, please allow up to 3 hours for the new settings to take effect.

#### [Clear upstreaming behavior](#tab/clear/)

To clear the upstream behavior for your package, run the following commands to set `versionsFromExternalUpstreams` to `Auto` and query the REST API.

```PowerShell
$body = '{"versionsFromExternalUpstreams": "Auto"}'

Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"
```

* * *

## Related articles

- [Understand upstream sources](upstream-sources.md)
- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
- [Best practices](best-practices.md)
