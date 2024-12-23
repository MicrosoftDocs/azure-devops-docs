---
title: Publish NuGet packages to NuGet.org (Classic/YAML)
description: Learn how to publish NuGet packages to NuGet.org using Azure Pipelines.
ms.topic: conceptual
ms.date: 12/23/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish NuGet packages to NuGet.org (Classic/YAML)

Using Azure Pipelines, developers can streamline the process of publishing their NuGet packages to feeds and public registries. This article will walk you through publishing your NuGet packages to NuGet.org.

## Prerequisites

| **Product**       | **Requirements**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections, you must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |
| **NuGet.org**      | - A [NuGet](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) account.                                                                                                                                                                                                                                                                                                                                                                                |

## Create an API key

1. Navigate to [NuGet.org](https://www.nuget.org/) and sign in to your account.

1. Select your user name icon, and then select **API Keys**.

1. Select **Create**, and then provide a name for your key. Assign the **Push new packages and package version** scope to your key, and enter `*` in the **Glob Pattern** field to include all packages.

1. Select **Create** when you're done.

1. Select **Copy** and save your API key in a secure location.

## Create a service connection

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select ![gear icon](../../media/icons/gear-icon.png) **Project settings** in the bottom left corner of the page.

1. Select **NuGet**, and then select **Next**.

1. Select **ApiKey** as your authentication method and set the **Feed URL** to: `https://api.nuget.org/v3/index.json`.

1. Enter the ApiKey you created earlier in the **ApiKey** field, and provide a name for your service connection.

1. Select the **Grant access permission to all pipelines** checkbox, and then select **Save** when you're done.

## Publish packages

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Add the following snippet to your YAML pipeline. Replace the placeholder with the name of the service connection you created earlier:

    ```yml
    steps:
    - task: DotNetCoreCLI@2
      displayName: 'dotnet pack'
      inputs:
        command: pack
    - task: NuGetCommand@2
      displayName: 'NuGet push'
      inputs:
        command: push
        nuGetFeedType: external
        publishFeedCredentials: <NAME_OF_YOUR_SERVICE_CONNECTION>
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select **+** to add a new task, and then add the **.NET Core** task to your pipeline.

1. From the command dropdown, select **pack**, and then select the **Path to csproj or nuspec file(s) to pack**. You can leave the default values for the other fields.

1. Select **+** to add another task, then add the **NuGet** task to your pipeline.

1. From the command dropdown, select **push**, and then select the **Path to NuGet package(s) to publish**.

1. Select **External NuGet server** for the **Target feed location**, and then select the service connection you created earlier from **NuGet server** dropdown menu.

    :::image type="content" source="media/nuget-push-task.png" alt-text="A screenshot displaying how to configure a NuGet push task to an external NuGet server.":::

---

Once the pipeline completes successfully, navigate to the [packages](https://www.nuget.org/account/Packages) page on *NuGet.org*, where you will find your recently published package listed at the top.

:::image type="content" source="media/published-package.png" alt-text="A screenshot showing the published packages on NuGet.org.":::

## Related content

- [Publish packages to internal and external feeds](nuget.md)
- [Restore NuGet packages with Azure Pipelines](../packages/nuget-restore.md)
- [Pipeline caching](../release/caching.md)