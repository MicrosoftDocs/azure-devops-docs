---
title: Safeguard against malicious public packages
description: Learn how to control access to public registries and protect your environment from malicious public packages.
ms.service: azure-devops-artifacts
ms.topic: overview
ms.date: 10/21/2025
ms.author: rabououn
author: ramiMSFT
monikerRange: 'azure-devops'
---

# Safeguard against malicious public packages

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts upstream sources enable developers to centralize package management by using a single feed to store both published packages and those consumed from public registries such as NuGet.org.

Upstream sources offer several advantages for managing dependencies, including simplicity, reliability, and package integrity. See [What are upstream sources?]() for more details.

## Allow externally sourced versions

This feature enables developers to control whether they want to consume package versions from public registries such as NuGet.org or npmjs.com. 

Once the **Allow External Versions** toggle is enabled for a specific package, versions from the public registry become available to be saved to the feed. By default, this option is disabled, adding an extra layer of security by reducing exposure to potentially malicious packages from public registries. Changing this setting does not affect package versions already saved to the feed. Those versions remain accessible regardless of this setting. You must be a *Feed Owner* to enable the *allow externally sourced versions* feature.

## Allow external versions for a package

To enable consuming external versions for a specific package, follow these steps:

> [!NOTE]
> You must be a **Feed Owner** to allow externally sourced versions.

1. Sign in to Azure DevOps, then navigate to your project.

1. Select **Artifacts**, then select your feed from the dropdown menu.

1. Select your package, select the ellipsis button for more options, then select **Allow externally-sourced versions**.

1. Toggle **Allow External Versions** to enable the feature, then select **Close** when you're done.

    :::image type="content" source="media\allow-externally-sourced-versions.png" alt-text="A screenshot displaying how to enable external versions for a specific package in Azure Artifacts.":::

## Allow external versions using the REST API

To enable external versions for a specific package using the REST API, use the following endpoints:

| Package Type | API Endpoints |
|-------------|---------------|
| **NuGet**   | - [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/nuget/set-upstreaming-behavior)<br>- [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/nuget/get-upstreaming-behavior) |
| **npm**     | - [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/set-upstreaming-behavior)<br>- [Set scoped upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/set-scoped-upstreaming-behavior)<br>- [Get package upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/get-package-upstreaming-behavior)<br>- [Get scoped package upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/npm/get-scoped-package-upstreaming-behavior) |
| **Python**  | - [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/python/get-upstreaming-behavior)<br>- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/python/set-upstreaming-behavior) |
| **Maven**   | - [Get upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/maven/get-upstreaming-behavior)<br>- [Set upstreaming behavior](/rest/api/azure/devops/artifactspackagetypes/maven/set-upstreaming-behavior) |

## Allow external versions using PowerShell

To enable external versions for a specific package using PowerShell, follow these steps:

1. [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read, write, & manage** permissions.

1. Create an environment variable for your personal access token.

    ```PowerShell
    $env:PATVAR = "YOUR_PERSONAL_ACCESS_TOKEN"
    ```

1. Convert your personal access token to a Base64-encoded string and construct the HTTP request header.

    ```PowerShell
    $token = [Convert]::ToBase64String(([Text.Encoding]::ASCII.GetBytes("username:$env:PatVar")))
    $headers = @{
        Authorization = "Basic $token"
    }
    ```

1. Construct the endpoint URL based on your feed type:

    - **Project-scoped feed**:

        ```PowerShell
        $url = "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_apis/packaging/feeds/<FEED_NAME>/<PROTOCOL>/packages/<PACKAGE_NAME>/upstreaming?api-version=7.1"
        ```

    - **Organization-scoped feed**:

        ```PowerShell
        $url = "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_apis/packaging/feeds/<FEED_NAME>/<PROTOCOL>/packages/<PACKAGE_NAME>/upstreaming?api-version=7.1"
        ```

1. Run the command from the table based on your scenario:

    | Action | Description | Command |
    |--------|-------------|---------|
    | **Get Upstreaming Behavior** | Retrieve the upstream behavior state of your package. Uses `$url` and `$headers` from previous steps. | `Invoke-RestMethod -Uri $url -Headers $headers` |
    | **Set Upstreaming Behavior** | Allow externally sourced versions for your package by setting `versionsFromExternalUpstreams` to `AllowExternalVersions`. | `$body = '{"versionsFromExternalUpstreams": "AllowExternalVersions"}'` <br> `Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"` |
    | **Clear Upstreaming Behavior** | Reset upstream behavior by setting `versionsFromExternalUpstreams` to `Auto`. | `$body = '{"versionsFromExternalUpstreams": "Auto"}'` <br> `Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"` |

> [!NOTE]
> Changes to upstream behavior may take time to propagate across the service. If your package is not available after updating the settings, allow up to 3 hours for the changes to take effect.

## Applicable scenarios

This section describes common scenarios where external versions (packages from public registries) are either **blocked** or **allowed** from being saved to the feed. For the rest of this article, we refer to packages from public registries as *public packages* and packages stored in an Azure Artifacts feed as *private packages*.

## Scenario 1: Public versions are blocked

Public versions are blocked from being saved to the feed when the **Allow External Versions** feature is enabled in the following two cases:

* [Private package version made public](#private-package-version-made-public)

* [Having both private and public packages](#having-both-private-and-public-packages)

#### Private package version made public

If a private package is later made public, the feed blocks any new versions with the same package name from public sources.

:::image type="content" source="media\internal-to-public.svg" alt-text="An illustration showing an internal package version made public.":::

#### Having both private and public packages 

When a team uses both private and public packages, the feed blocks any new package versions from the public registry when the allow external version is enabled.

:::image type="content" source="media\private-and-public-packages.svg" alt-text="An illustration showing available private and public packages.":::

## Scenario 2: public versions are allowed

Public versions are allowed to be saved to the feed when the **Allow External Versions** feature is enabled in the following three cases:

* [All packages are private](#all-packages-are-private)

* [All packages are public](#all-packages-are-public)

* [Public package made private](#public-package-made-private)

#### All packages are private

If all packages are private and the team doesn’t plan to use public packages, enabling this setting has no impact on the team's workflow.

:::image type="content" source="media\only-private-packages.svg" alt-text="An illustration showing feed with only private packages.":::

#### All packages are public

If the team exclusively consumes public packages from registries or open-source repositories, enabling the setting doesn't affect their workflow.

:::image type="content" source="media\public-packages-only.svg" alt-text="An illustration showing feed with only public packages.":::

#### Public package made private

When a public package is later converted to private, enabling the allow external versions setting doesn't affect the team's workflow.

:::image type="content" source="media\public-to-internal.svg" alt-text="An illustration showing a package converted from public to private.":::

## Related content

- [Understand upstream sources](upstream-sources.md)

- [Package graphs in Azure Artifacts](package-graph.md)

- [How to restore packages from upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
