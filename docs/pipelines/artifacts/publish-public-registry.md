---
title: Publish NuGet packages to NuGet.org with Azure Pipelines (Classic/YAML)
description: Learn how to publish NuGet packages to NuGet.org using Azure Pipelines.
ms.topic: conceptual
ms.date: 05/14/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish NuGet packages to NuGet.org with Azure Pipelines

Using Azure Pipelines, developers can streamline the process of publishing their NuGet packages to feeds and public registries. In this tutorial, we'll explore how to leverage YAML and classic pipelines to publish NuGet packages to NuGet.org. In this article, you'll learn how to:

> [!div class="checklist"]  
> * Authenticate with NuGet.org.
> * Create service connections.
> * Publish packages to NuGet.Org.

## Prerequisites

- An Azure DevOps organization and a project. [Create one for free](../get-started/pipelines-sign-up.md), if you don't have one already. 

- A [nuget.org](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) account.

## Create an API key

1. Navigate to [NuGet.org](https://www.nuget.org/users/account/LogOn?returnUrl=%2F) and sign in to your account.

1. Select your user name icon, and then select **API Keys**.

1. Select **Create**, and then provide a name for your key. Assign the **Push new packages and package version** scope to your key, and enter `*` in the **Glob Pattern** field to include all packages.

1. Select **Create** when you're done.

1. Select **Copy** and save your API key in a safe location.

## Create a service connection

1. Sign in to your Azure DevOps organization `https://dev.azure.com/<Your_Organization>` and then navigate to your project.

1. Select ![gear icon](../../media/icons/gear-icon.png) **Project settings** located at the bottom left corner of the page.

1. Select **NuGet**, and then select **Next**.

1. Select **ApiKey** as your authentication method and set the **Feed URL** to the following: `https://api.nuget.org/v3/index.json`.

1. Enter the ApiKey you generated earlier in the **ApiKey** field, and then provide a name for your service connection.

1. Check the **Grant access permission to all pipelines** checkbox, and then select **Save** when you're done.

## Publish packages

1. Sign in to your Azure DevOps organization `https://dev.azure.com/<Your_Organization>` and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline. Select **Edit** to edit your pipeline.

#### [Classic](#tab/classic/)

3. Select **+** to add a new task, and then search for the **.NET Core** task. select **Add** to add it to your pipeline.

4. Select the **pack** command from the command's dropdown menu, and then select the **Path to csproj or nuspec file(s) to pack**. You can keep the default values for the other fields depending on your scenario.

    :::image type="content" source="media/dotnet-pack-task.png" alt-text="A screenshot showing how to configure the dotnet pack task in a classic pipeline.":::

5. Select **+** to add a new task, and then search for the **NuGet** task. select **Add** to add it to your pipeline.

6. Select the **push** command from the command's dropdown menu, and then select the **Path to NuGet package(s) to publish**.

7. Select **External NuGet server** for your **Target feed location**. Then, in the **NuGet server** field, select the service connection you created earlier.

    :::image type="content" source="media/nuget-push-task.png" alt-text="A screenshot showing how to configure a NuGet push task to an external NuGet server.":::

#### [YAML](#tab/yaml/)

3. Add the following task to build your project and create your NuGet package.

```yml
steps:
- task: DotNetCoreCLI@2
  displayName: 'dotnet pack'
  inputs:
    command: pack
```

4. Add the following tasks to your YAML pipeline to publish your NuGet package to NuGet.org. Replace the placeholder with the name of the service connection you created earlier.

```yml
steps:
- task: NuGetCommand@2
  displayName: 'NuGet push'
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: <NAME_OF_YOUR_SERVICE_CONNECTION>
```
---

Once completed, you can visit the [packages](https://www.nuget.org/account/Packages) page on nuget.org, where you can find your recently published package listed at the top.

:::image type="content" source="media/published-package.png" alt-text="A screenshot showing the published packages in nuget.org.":::

## Related articles

- [Release triggers](../release/triggers.md)
- [Deploy from multiple branches](../release/deploy-multiple-branches.md)
- [Pipeline caching](../release/caching.md)