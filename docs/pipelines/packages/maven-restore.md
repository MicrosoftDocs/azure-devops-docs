---
title: Restore Maven packages (YAML/Classic)
description: Learn how to restore Maven packages from internal and external feed using Azure Pipelines.
ms.topic: how-to
ms.date: 02/04/2025
monikerRange: '<= azure-devops'
---

# Restore Maven packages with Azure Pipelines (YAML/Classic)

This article guides you through setting up your YAML and Classic pipelines to restore your Maven packages from internal and external feeds.

## Prerequisites

|    **Product**     |   **Requirements**  |
|--------------------|---------------------|
|  **Azure DevOps**  | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> An [Azure Artifacts feed](../../artifacts/get-started-maven.md#create-a-feed).<br> - **Permissions:**<br> - To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br> - To create service connections, you must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |

## Restore packages from a feed in the same organization

### [YAML](#tab/yaml/)

::: moniker range="azure-devops"
1. Sign in to your Azure DevOps organization, and then navigate to your project.
::: moniker-end

::: moniker range="< azure-devops"
1. Sign in to your Azure DevOps collection, and then navigate to your project.
::: moniker-end

::: moniker range="azure-devops-2019"
2. Select **Pipelines** > **Builds**, and then select your build definition. 
::: moniker-end

::: moniker range="> azure-devops-2019"
2. Select **Pipelines**, and then select your pipeline definition. 
::: moniker-end

3. Select **Edit**, and then add the following snippet to your YAML pipeline.

```yml
steps:
- task: MavenAuthenticate@0
  displayName: 'Maven Authenticate'
  inputs:
    artifactsFeeds: 'YOUR_FEED_NAME'
- script: |
   mvn install
```

### [Classic](#tab/classic/)

::: moniker range="azure-devops"
1. Sign in to your Azure DevOps organization, and then navigate to your project.
::: moniker-end

::: moniker range="< azure-devops"
1. Sign in to your Azure DevOps collection, and then navigate to your project.
::: moniker-end

::: moniker range="azure-devops-2019"
2. Select **Pipelines** > **Builds**, and then select your build definition. 
::: moniker-end

::: moniker range="> azure-devops-2019"
2. Select **Pipelines**, and then select your pipeline definition. 
::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *Maven Authenticate* and *Command line* tasks to your pipeline definition and configure them as follows:

    1. **Maven Authenticate**: Select one or multiple feeds from the **Feeds** dropdown menu.

    1. **Command line task**:
        - **Display name**: Restore.
        - **Script**: 
            ```
            mvn install
            ```

4. Select **Save & queue** when you're done.   

---

## Restore packages from a feed in another organization

To restore your packages from a feed in another Azure DevOps organization, you must first create a personal access token in the target organization, and then create a service connection to authenticate with the target feed.

#### Create a Personal Access Token 

1. Navigate to the target organization where the feed is hosted

1. [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scope.

1. Copy your personal access token as you'll need it in the next step.

#### Create a Maven service connection

1. Sign in to the Azure DevOps organization where your pipeline will run, and then navigate to your project.

1. Navigate to **Project settings** > **Service connections**. 

1. Select **New service connection**, select **Maven**, and then select **Next**. 

1. Select **Username and Password** as the **Authentication method**, and then enter your **Repository URL** and your **Repository Id**.

1. Enter your **Username** (a placeholder, as Azure Pipelines will use your `pom.xml` and the personal access token you created earlier to authenticate). For **Password**, paste your personal access token. 

1. Provide a **Name** for your service connection, and select **Grant access permission to all pipelines**.

1. Select **Save** when you're done.

#### Restore packages

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

```yaml
steps:
- task: MavenAuthenticate@0
  displayName: 'Maven Authenticate'
  inputs:
    MavenServiceConnections: <SERVICE_CONNECTION_NAME> 

- script: |
   mvn install
  displayName: 'Restore'
```

#### [Classic](#tab/classic/)

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

::: moniker-end

::: moniker range="azure-devops-2019"

2. Select **Pipelines** > **Builds**, and then select your build definition. 

::: moniker-end

::: moniker range="> azure-devops-2019"

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *Maven Authenticate* and *Command line* tasks to your pipeline definition and configure them as follows:

    1. **Maven Authenticate**: Select your service connection from the **Credentials for repositories outside this organization/collection** dropdown menu.

    1. **Command line task**:
        - **Display name**: Restore.
        - **Script**: 
            ```
            mvn install
            ```

4. Select **Save & queue** when you're done.

---

## Related content

- [Publish Maven packages with Azure Pipelines](../artifacts/publish-maven-artifacts.md)
- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)
- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)