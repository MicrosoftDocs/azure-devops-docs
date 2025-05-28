---
title: Publish npm packages with Azure Pipelines
ms.custom: devx-track-js
description: Learn how to publish npm packages to internal and external feed using Azure Pipelines.
ms.assetid: F4C61B91-2C5B-4848-A4BF-B658F549673A
ms.topic: conceptual
ms.date: 11/14/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish npm packages with Azure Pipelines (YAML/Classic)

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

With Azure Pipelines, you can publish your npm packages to Azure Artifacts feeds within your organization and in other organizations. This article will guide you through publishing your npm packages to internal and external feeds using YAML and Classic pipelines.

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Create a [new feed](../../artifacts/get-started-nuget.md#create-feed) if you don't have one already.

- If you're using a self-hosted agent, make sure that it has [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Publish packages to a feed in the same organization

> [!NOTE]
> To publish your packages to a feed using Azure Pipelines, ensure that both the **Project Collection Build Service** and your project's **Build Service** identity are configured as a **Feed Publisher (Contributor)**. See [Add new users/groups](../../artifacts/feeds/feed-permissions.md#feed-settings) for more details.

#### [YAML](#tab/yaml/)

```yaml
steps:
- task: NodeTool@0
  inputs:
    checkLatest: true

- task: npmAuthenticate@0
  displayName: 'Authenticate to Azure Artifacts feed'
  inputs:
    workingFile: .npmrc

- script: |
   npm publish
  displayName: Publish
```

#### [Classic](#tab/classic/)

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

::: moniker-end

::: moniker range="<=azure-devops"

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *Node.js tool installer*, *npm Authenticate* and *Command line* tasks to your pipeline definition. You can leave the *Node.js tool installer* task with the default settings and configure the *npm Authenticate* and *Command line* tasks as follows:

    1. **npm Authenticate task**: Select the path to the *.npmrc* file.
    
    1. **Command line task**:
        - **Display name**: Publish.
        - **Script**: 
            ```
            npm publish
            ```

* * *

## Publish packages to a feed in another organization

To publish your packages to a feed in another Azure DevOps organization, you must first create a personal access token in the target organization.

Navigate to the organization hosting your target feed and [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scope. Copy your personal access token as you'll need it in the following section.

#### Create a service connection

1. Sign in to the Azure DevOps organization where your pipeline will run, and then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **npm**, and then select **Next**. 

1. Select **Username and Password** as the **Authentication method**, and then enter your **Registry URL**. Enter your **Username** (a placeholder, as Azure Pipelines will use your `.npmrc` configuration file and the personal access token you created earlier to authenticate). For **Password**, paste your personal access token. Provide a name for your service connection, and check the **Grant access permission to all pipelines** checkbox.

1. Select **Save** when you're done.

#### Publish packages

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    - task: NodeTool@0
      inputs:
        checkLatest: true

    - task: npmAuthenticate@0
      displayName: 'Authenticate to Azure Artifacts feed'
      inputs:
        workingFile: .npmrc
        customEndpoint: <SERVICE_CONNECTION_NAME>
        
    - script: |
       npm publish  
      displayName: Publish  
    ```

#### [Classic](#tab/classic/)

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

::: moniker-end

::: moniker range="<=azure-devops"

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *Node.js tool installer*, *npm Authenticate* and *Command line* tasks to your pipeline definition. You can leave the *Node.js tool installer* task with the default settings and configure the *npm Authenticate* and *Command line* tasks as follows:.

    1. **npm Authenticate task**: 
        1. Select the path to your *.npmrc* file.
        1. Select the service connection you created earlier from the **Credentials for registries outside this organization/collection** dropdown menu.
    
    1. **Command line task**:
        - **Display name**: Publish.
        - **Script**: 
            ```
            npm publish
            ```

***

## Related content

- [Publish and download pipeline artifacts](../artifacts/build-artifacts.md)
- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)
- [Deploy pull request Artifacts](../release/deploy-pull-request-builds.md).
