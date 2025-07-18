---
title: Publish Maven artifacts with Azure Pipelines
description: Learn how to publish Maven artifacts to internal and external feed using Azure Pipelines.
ms.topic: how-to
ms.date: 06/30/2025
monikerRange: '>= azure-devops-2020'
---

# Publish Maven artifacts with Azure Pipelines (YAML/Classic)

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Pipelines enables developers to publish Maven artifacts to Azure Artifacts feeds within the same organization, across other organizations, and to public registries such as Maven Central. This article guides you through publishing your Maven artifacts using both YAML and Classic pipelines.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../../artifacts/start-using-azure-artifacts.md#create-a-new-feed).<br> - A [working pipeline](../create-first-pipeline.md).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections, you must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |

## Publish packages to a feed in the same organization

#### [YAML](#tab/yaml/)

::: moniker range="azure-devops"
1. Sign in to your Azure DevOps organization, and then navigate to your project.
::: moniker-end

::: moniker range="< azure-devops"
1. Sign in to your Azure DevOps collection, and then navigate to your project.
::: moniker-end

::: moniker range="<=azure-devops"
2. Select **Pipelines**, and then select your pipeline definition. 
::: moniker-end

3. Select **Edit**, and then add the following snippet to your YAML pipeline:

    ```yml
    steps:
    - task: MavenAuthenticate@0
      displayName: 'Authenticate to Azure Artifacts feed'
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

::: moniker range="<=azure-devops"
2. Select **Pipelines**, and then select your pipeline definition. 
::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the **Maven Authenticate** and **Command line** tasks to your pipeline definition and configure them as follows:

    1. **Maven Authenticate**: Select one or multiple feeds from the **Feeds** dropdown menu.

    1. **Command line task**:
        - **Display name**: Publish
        - **Script**: `mvn deploy`

4. Select **Save & queue** when you're done.   

---

> [!NOTE]
> To publish packages to a feed using Azure Pipelines, make sure that both the **Project Collection Build Service** and your project's **Build Service** identities are assigned the **Feed Publisher (Contributor)** role in your feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md#pipelines-permissions) for more details.

## Publish packages to a feed in a different organization

To publish packages to a feed in a different Azure DevOps organization, you must first create a personal access token (PAT) in the target organization, and then use that PAT to create a service connection and authenticate with the target feed.

#### Create a personal access token

1. Navigate to the organization that hosts the target feed.

1. [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scope.

1.  Copy your personal access token as you'll need it in the following section.

#### Create a service connection

1. Sign in to the Azure DevOps organization where your pipeline will run, and then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **Maven**, and then select **Next**. 

1. For **Authentication method**, select **Username and Password**. Enter your **Repository URL** and your **Repository Id**.

1. In the **Username**  field, enter any string value (this is required, but Azure Pipelines will use your `pom.xml` configuration and the personal access token you created earlier for authentication). 
    - For **Password**, paste the personal access token you created earlier.
    - Provide a **Name** for your service connection.
    - Check the **Grant access permission to all pipelines** checkbox.

1. Select **Save** when you're done.

#### Publish packages

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline:

    ```yaml
    steps:
    - task: MavenAuthenticate@0
      displayName: 'Authenticate to Azure Artifacts feed'
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

::: moniker range="<=azure-devops"

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` icon to add a new task. Add the **Maven Authenticate** and **Command line** tasks to your pipeline definition and configure them as follows:

    1. **Maven Authenticate**: From the **Credentials for repositories outside this organization/collection** dropdown, select your service connection.

    1. **Command line task**:
        - **Display name**: Publish.
        - **Script**: `mvn deploy`

4. Select **Save & queue** when you're done.

- - -

## Related content

- [Maven Authenticate v0 task](/azure/devops/pipelines/tasks/reference/maven-authenticate-v0)

- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)

- [Publish and download pipeline artifacts](pipeline-artifacts.md)