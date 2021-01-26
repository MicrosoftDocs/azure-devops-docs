---
title: Upstream behavior
description: Allow or block the consumption of specific package versions from public registries.
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 01/19/2021
ms.author: rabououn
author: ramiMSFT
monikerRange: '>= tfs-2017'
---

# Upstream behavior

Upstream sources allow developers to use a single feed to publish and consume packages to/from Artifact feeds as well as public registries(e.g. NuGet.org, npmjs.com etc.). To set up upstream sources for your feed, check the box to **include packages from common public sources**. This will allow your feed to use packages from the common public registries.

Azure Artifacts is introducing a new upstream behavior that will dictate which packages will be made available from the public registries.

Previously, Artifact feeds combined a list of available package versions from both the feed as well as all the upstream sources.

:::image type="content" source="media/previous-upstream-behavior.png" alt-text="Previous upstream sources behavior":::

The new upstream behavior will provide another layer of security by blocking the exposure to malicious packages that may infiltrate the public feeds.

With the new behavior, when a package is published to your Azure Artifacts feed, same versions of that package will not be made available from the public registry.

Users will still be able to override the new upstream behavior and consume packages from the public registries if they chose to do so.

> [!NOTE]
> The new behavior won't affect any package versions that are already in use. Those are stored in the feed's `@local` view.

## Applicable Scenarios

Below are few common scenarios where the upstream behavior will be triggered to block external packages as well as cases where no blockage to the public packages is needed.

## Public versions will be blocked

- **Private package version made public**: in this scenario, a team has a private package that was made public. The upstream behavior in this case will be triggered to block any new public versions (untrusted packages). 

    :::image type="content" source="media\internal-package-made-public.png" alt-text="Internal package version made public":::

- **Having both private and public packages**: in this scenario, if a team already has both private and public packages, enabling the upstream behavior will result in blocking any new package versions from the public registry.

    :::image type="content" source="media\both-private-and-public.png" alt-text="both private and public packages":::

## Public versions will not be blocked

- **All packages are private**: if all existing packages are private and the team won't be consuming any public packages, the new upstream behavior will have no effect on the team's workflow in this scenario.
    
    :::image type="content" source="media\private-packages-only.png" alt-text="private packages only":::

- **All packages are public**: if all the packages consumed are public, whether it's from the public registry or any other open-source repositories, the new upstream behavior will have no effect on the team's workflow in this scenario.

    :::image type="content" source="media\only-public-packages.png" alt-text="public packages only":::

- **Public package made private**: if a public package is switched to a private package, the new upstream behavior will have no effect on the team's workflow in this scenario.

    :::image type="content" source="media\public-to-private.png" alt-text="switched from public to private":::

## Enable upstream behavior

> [!NOTE]
> Only feed owners are allowed to enable/disable upstream behavior. See [Feed permissions](../feeds/feed-permissions.md) for more details.

To enable the new upstream behavior, select a package from within your feed then select the toggle button to **Allow external sourced versions**.

:::image type="content" source="media\allow-external-sourced-versions.png" alt-text="Allow external sourced versions toggle button":::

<!-- This feature is not ready yet.
Users can view and filter packages by **Sourced versions**.

- **External**: open-source package versions only.
- **Internal**: private package versions only.
- **Mixed**: both internal and external package versions.
-->

## Enable upstream behavior using the REST API

Aside from using the feed's user interface, you can also enable the upstream behavior using the Azure DevOps services REST API.

<!-- API reference link -->

## Enable upstream behavior with PowerShell

To successfully execute the next steps in this section, you will need to create a personal access token with packaging **Read, write, & manage** permissions. See [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to learn how to create your personal access token. 


:::image type="content" source="media\packaging-permissions.png" alt-text="select packaging permissions":::

In an elevated PowerShell command prompt window, run the following command to create an environment variable for your personal access token.

```PowerShell
$env:PATVAR = "YOUR_PAT_GOES_HERE"
```

We can now use the personal access token and construct our HTTP request header.

```PowerShell
$token = [Convert]::ToBase64String(([Text.Encoding]::ASCII.GetBytes("username:$PatVar")));
$headers = @{
    Authorization = "Basic $token"
}
```

Invoking the REST method requires an endpoint url. Enter your `OrganizationName`, `ProjectName`, `FeedName`, `Protocol`, and your `PackageName` to store it in the `$Url` variable. (E.g. `https://pkgs.dev.azure.com/MyOrg/MyProject/_apis/packaging/feeds/MyFeed/nuget/packages/Myapp1.0.nupkg/upstreaming?api-version=6.1-preview.1`)

```PowerShell
$url = "https://pkgs.dev.azure.com/{OrganizationName}/{ProjectName}/_apis/packaging/feeds/{FeedName}/{Protocol}/packages/{PackageName}/upstreaming?api-version=6.1-preview.1"
```

Now that we have both the header and endpoint URL set up, we can now start sending HTTP requests to get, set, and clear upstreaming for our feed.

### Get upstream override state for a package

Run the following command to retrieve the upstreaming state of your package. `$url` and `$headers` are the same variables we used in the previous section.

 ```PowerShell
 Invoke-RestMethod -Uri $url -Headers $headers
 ```

### Set upstream override for a package

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

