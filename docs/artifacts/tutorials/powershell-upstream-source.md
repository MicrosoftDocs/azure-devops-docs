---
title: Use packages from PowerShell Gallery
description: How to use the PowerShell Gallery as an upstream source
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 10/17/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# PowerShell Gallery upstream source

Enabling upstream sources for your feed extends your developers' access to packages from public registries. In this article, you'll learn how to set up the PowerShell Gallery as an upstream source and consume PowerShell packages from the public registry.

## Prerequisites

- [NuGet.exe](https://www.nuget.org/downloads)
- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider)
- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.
- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-feed) if you don't have one already.

## Add PowerShell Gallery upstream source

If the PowerShell Gallery upstream source is not available in your feed by default, you can add it as follows:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed Settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

    :::image type="content" source="media/add-upstream-source.png" alt-text="A screenshot showing how to add a new upstream source.":::

1. Select **Public source**, and then select **PowerShell Gallery** from the dropdown menu. Select **Add** when you're done.

    :::image type="content" source="media/add-powershell-gallery-upstream.png" alt-text="A screenshot showing how to add the PowerShell Gallery as an upstream source.":::

1. Select **Save** in the upper right corner to save your changes. Select **Save** again if prompted to confirm your choices.

## Connect to feed

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** permissions.

1. Run the following commands in a PowerShell prompt window, replacing the placeholders with the appropriate information:

    ```powershell
    $patToken = "<YOUR_PERSONAL_ACCESS_TOKEN>" | ConvertTo-SecureString -AsPlainText -Force
    ```

    ```powershell
    $myCredentialsObject = New-Object System.Management.Automation.PSCredential("<USER_NAME>", $patToken)
    ```

1. Run the following command to register your feed as a PSRepository. Replace the placeholders with the appropriate values:

    - Project-scoped feed:

        ```powershell
        Register-PSRepository -Name "PSGalleryUpstream" -SourceLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $myCredentialsObject
        ```

    - Org-scoped feed:

        ```powershell
        Register-PSRepository -Name "PSGalleryUpstream" -SourceLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -PublishLocation "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v2" -InstallationPolicy Trusted -Credential $myCredentialsObject
        ```

## Save packages from upstream

Now that you added the PowerShell Gallery as an upstream source and registered your feed as a PSRepository, every time you install a package from upstream, a copy will be saved to your feed. In the following example, we'll install the *PSScriptAnalyzer* module:

```PowerShell
Install-Module -Name PSScriptAnalyzer -Repository PSGalleryUpstream
```

[!INCLUDE [save-requires-collaborator](../includes/save-requires-collaborator.md)]

## View saved packages

You can access the packages you've saved from the PowerShell Gallery by choosing the appropriate **Source** from the dropdown menu.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Source** on the right, and then select **PowerShell Gallery** to filter for packages saved from upstream. You can see that the *PSScriptAnalyzer* package, which we installed in the previous step, has been saved to our feed.

    :::image type="content" source="media/saved-package-from-upstream-cropped.png" alt-text="A screenshot showing packages saved from upstream in an Azure Artifacts feed." lightbox="media/saved-package-from-upstream.png":::

## Related articles

- [NuGet.org upstream source](../nuget/upstream-sources.md)
- [Use upstream sources in a public feed](../how-to/public-feeds-upstream-sources.md)
- [Use feeds as a private PowerShell repository](private-powershell-library.md)