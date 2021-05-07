---
title: Use dotnet with Azure Artifacts feeds
description: Authenticating to feeds with NuGet in Azure Artifacts
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 11/14/2019
monikerRange: 'azure-devops'
---

# Use dotnet with Azure Artifacts feeds

## On developer machines

1. Navigate to your feed ([or create a feed if you haven't](../index.yml)). 

2. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   >![Connect to feed button in the upper-right of the page](../media/connect-to-feed-azure-devops-newnav.png)
   > 

3. Select **dotnet** under the **NuGet** header

4. Select **Get the tools** in the top right corner

5. Follow steps **1**, **2**, and **3** to download and install the latest .NET Core SDK and credential provider.

6. Follow the instructions in the **Project setup**, **Restore packages**, and **Publish packages** sections to publish.

   > [!div class="mx-imgBorder"] 
   >![NuGet publish instructions in the Connect to feed](../media/dotnet-azure-devops-newnav.png)
   > 

   > [!NOTE]
   > You can also paste the **Project setup** XML snippet in your default nuget.config file to use outside of a project.
## On build machines and in non-interactive scenarios

In Azure Pipelines, use the [.NET Core step's restore command](../../pipelines/tasks/build/dotnet-core-cli.md), which automatically handles authentication to Azure Artifacts feeds. Otherwise, use the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) and pass in credentials using the `VSS_NUGET_EXTERNAL_FEED_ENDPOINTS` [environment variable](https://github.com/Microsoft/artifacts-credprovider/blob/master/README.md#environment-variables).