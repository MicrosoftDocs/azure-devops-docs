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
- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

## Add PowerShell Gallery upstream source

If the PowerShell Gallery upstream source is not available in your feed by default, you can add it as follows:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select the gear icon button ![gear icon](../../media/icons/gear-icon.png) to navigate to your **Feed Settings**.

1. Select **Upstream Sources**, and then select **Add Upstream**.

    :::image type="content" source="media/add-upstream-source.png" alt-text="A screenshot showing how to add an new upstream source.":::

1. Select **Public source**, and then select **PowerShell Gallery** from the dropdown menu. Select **Save** when you are done.

    :::image type="content" source="media/add-powershell-gallery-upstream.png" alt-text="A screenshot showing how to add the PowerShell Gallery as an upstream source.":::

1. Select **Save** in the upper right corner to save your changes. Select **Save** again if prompted to confirm your choices.
