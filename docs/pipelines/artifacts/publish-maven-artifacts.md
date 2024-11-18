---
title: Publish Maven artifacts
description: Learn how to publish Maven artifacts to internal and external feed using Azure Pipelines.
ms.topic: how-to
ms.date: 11/18/2024
monikerRange: '<= azure-devops'
---

# Publish Maven artifacts with Azure Pipelines (YAML/Classic)

Using Azure Pipelines, you can publish your Maven artifacts to Azure Artifacts feeds in your organization, in other organizations, and to public registries such as nuget.org. This article will guide you through publishing your Maven artifacts using both YAML and Classic pipelines.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../../artifacts/get-started-maven.md#create-a-feed).

## Publish packages to a feed in the same organization

#### [YAML](#tab/yaml/)

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
    artifactsFeeds: 'MavenDemo,MavenDemoFeed2'        ## Select one or multiple feeds to authenticate with.
- script: |
   mvn deploy
  displayName: 'Publish'
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

    1. **Maven Authenticate**: Select one or multiple feeds from the **Feeds** dropdown menu.

    1. **Command line task**:
        - **Display name**: Publish.
        - **Script**: 
            ```
            mvn deploy
            ```

4. Select **Save & queue** when you're done.   

---

## Publish packages to a feed in another organization

To publish your packages to a feed in another Azure DevOps organization, you must first create a personal access token in the target organization.

Navigate to the organization hosting your target feed and [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scope.  Copy your personal access token as you'll need it in the following section.

#### Create a service connection

1. Sign in to the Azure DevOps organization where your pipeline will run, and then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **Maven**, and then select **Next**. 

1. Select **Username and Password** as the **Authentication method**, and then enter your **Repository URL** and your **Repository Id**.

1. Enter your **Username** and use the personal access token you created earlier as your **Password**. Provide a name for your service connection, and then check the **Grant access permission to all pipelines** checkbox.

1. Select **Save** when you're done.

#### Publish packages

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

```yaml
steps:
- task: MavenAuthenticate@0
  displayName: 'Maven Authenticate'
  inputs:
    MavenServiceConnections: <NAME_OF_YOUR_SERVICE_CONNECTION> 

- script: |
   mvn deploy
  displayName: 'Publish'
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
        - **Display name**: Publish.
        - **Script**: 
            ```
            mvn deploy
            ```

4. Select **Save & queue** when you're done.

- - -

## Related content

- [Maven Authenticate v0 task](/azure/devops/pipelines/tasks/reference/maven-authenticate-v0)
- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)
- [Publish and download pipeline artifacts](pipeline-artifacts.md)