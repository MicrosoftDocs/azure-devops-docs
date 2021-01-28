---
title: Upstream override
description: Allow or block the consumption of package versions from public registries.
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 01/19/2021
ms.author: rabououn
author: ramiMSFT
monikerRange: '>= tfs-2017'
---

# Upstream override

Upstream sources allow developers to use a single feed to publish and consume packages to/from Artifact feeds as well as public registries (e.g. NuGet.org, npmjs.com etc.). To set up upstream sources for your feed, check the box to **include packages from common public sources**. This will allow your feed to use packages from the common public registries.

Azure Artifacts is introducing a new upstream behavior that will dictate which packages will be made available from the public registries for individual packages.

Previously, Artifact feeds combined a list of available package versions from the feed and all the upstream sources.

:::image type="content" source="media/previous-upstream-behavior.png" alt-text="Previous upstream sources behavior":::

The new upstream override will provide another layer of security by blocking the exposure to malicious packages that may infiltrate the public registries.

With the new upstream override, when a package is published to your Azure Artifacts feed, any version from the public registry will be blocked and not made available for download.

Users will still be able to toggle off the new upstream override and consume packages from the public registries if they chose to do so.

> [!NOTE]
> The new behavior won't affect any package versions that are already in use. Those are stored in the feed's `@local` view.

## Applicable Scenarios

Below are few common scenarios where the upstream override comes into play to block externally sourced package versions along with few other cases where no blockage to the public packages is needed.

## Public versions will be blocked

- **Private package version made public**: in this scenario, a team has a private package that was made public. The upstream override in this case will be triggered to block any new public versions (untrusted packages). 

    :::image type="content" source="media\internal-package-made-public.png" alt-text="Internal package version made public":::

- **Having both private and public packages**: in this scenario, if a team already has both private and public packages, enabling the upstream override will result in blocking any new package versions from the public registry.

    :::image type="content" source="media\both-private-and-public.png" alt-text="both private and public packages":::

## Public versions will not be blocked

- **All packages are private**: if all existing packages are private and the team won't be consuming any public packages, the new upstream override will have no effect on the team's workflow in this scenario.
    
    :::image type="content" source="media\private-packages-only.png" alt-text="private packages only":::

- **All packages are public**: if all the packages consumed are public, whether it's from the public registry or any other open-source repositories, the new upstream override will have no effect on the team's workflow in this scenario.

    :::image type="content" source="media\only-public-packages.png" alt-text="public packages only":::

- **Public package made private**: if a public package is switched to a private package, the new upstream override will have no effect on the team's workflow in this scenario.

    :::image type="content" source="media\public-to-private.png" alt-text="switched from public to private":::

## Enable upstream override

> [!NOTE]
> Only feed owners are allowed to enable/disable upstream override. See [Feed permissions](../feeds/feed-permissions.md) for more details.

To enable the new upstream override, select a package from within your feed then select the toggle button to **Allow external sourced versions**.

:::image type="content" source="media\allow-external-sourced-versions.png" alt-text="Allow external sourced versions toggle button":::

<!-- This feature is not ready yet.
Users can view and filter packages by **Sourced versions**.

- **External**: open-source package versions only.
- **Internal**: private package versions only.
- **Mixed**: both internal and external package versions.
-->

## Enable upstream override using the REST API

Aside from using the feed's user interface, you can also enable the upstream override using the Azure DevOps Services REST API.

< API reference link >

## Enable upstream override with PowerShell

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

Invoking the REST method requires an endpoint url. Enter your `OrganizationName`, `ProjectName`, `FeedName`, `Protocol`, and your `PackageName` to store it in the `$Url` variable. (Example: /pkgs.dev.azure.com/MyOrg/MyProject/_apis/packaging/feeds/MyFeed/nuget/packages/Myapp1.0.nupkg/upstreaming?api-version=6.1-preview.1)

```PowerShell
$url = "https://pkgs.dev.azure.com/{OrganizationName}/{ProjectName}/_apis/packaging/feeds/{FeedName}/{Protocol}/packages/{PackageName}/upstreaming?api-version=6.1-preview.1"
```

Now that we have both the header and endpoint URL set up, we can now start sending HTTP requests to get, set, and clear upstreaming for our feed.

### Get package's upstream override state

Run the following command to retrieve the upstreaming state of your package. `$url` and `$headers` are the same variables we used in the previous section.

 ```PowerShell
 Invoke-RestMethod -Uri $url -Headers $headers
 ```

### Set package's upstream override

Run the following commands to allow externally sourced versions for your package. This will set `versionsFromExternalUpstreams` to `AllowExternalVersions`, and will use the `$url` and `$headers` variables to query the REST API.

```PowerShell
$body = '{"versionsFromExternalUpstreams": "AllowExternalVersions"}'

Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"
```

### Clear upstream override for a package

To clear upstream override for your package, run the following commands to set `versionsFromExternalUpstreams` to `Auto` and query the REST API.

```PowerShell
$body = '{"versionsFromExternalUpstreams": "Auto"}'

Invoke-RestMethod -Uri $url -Headers $headers -Body $body -Method Patch -ContentType "application/json"
```

> [!NOTE]
> In some cases, enabling/disabling upstream override can take time to propagate across the service. If your package is not available after updating the settings, please allow up to 3 hours for the new settings to take effect.

## Related articles

- [Understand upstream sources](upstream-sources.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
- [Feeds permissions](../feeds/feed-permissions.md)
- [Best practices](best-practices.md)