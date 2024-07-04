---
title: Quickstart - Build and publish a Python app
description: Automatically build and test Python apps with Azure Pipelines.
ms.topic: quickstart
ms.date: 07/03/2024
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
monikerRange: '>=azure-devops-2019'
ms.custom: devx-track-python, freshness-fy22q2
ms.author: v-catherbund
author: cebundy
---

# Build Python apps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your continuous integration and continuous delivery (CI/CD) system. In this quickstart, you create a pipeline to build and test a Python app.

## Prerequisites

::: moniker range=">=azure-devops"

- A GitHub account where you can create a repository. [Create a GitHub account for free](https://github.com).
- An Azure DevOps organization. [Create one for free](../get-started/pipelines-sign-up.md). 
- An Azure DevOps project. [Create one using the Azure DevOps Project Creation Wizard](../../organizations/projects/create-project.md).
- An ability to run pipelines on Microsoft-hosted agents. You can [request the free grant of parallel jobs](https://aka.ms/azpipelines-parallelism-request) or purchase a [parallel job](../licensing/concurrent-jobs.md).

Python is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) for Linux, macOS, and Windows. You don't have to set up anything more to build Python projects. To see which Python versions are preinstalled, see [Use a Microsoft-hosted agent](../agents/hosted.md#software).

::: moniker-end

::: moniker range="< azure-devops"

- A GitHub account where you can create a repository. [Create a GitHub account for free](https://github.com).
- An Azure DevOps organization. [Create one for free](../get-started/pipelines-sign-up.md). 
- An Azure DevOps project. [Create one using the Azure DevOps Project Creation Wizard](../../organizations/projects/create-project.md).
- A self-hosted agent. To create one, see [Self-hosted agents](../agents/agents.md#self-hosted-agents).
- Python installed on your self-hosted agent. To install Python on your agent, see [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0#how-can-i-configure-a-self-hosted-agent-to-use-this-task).

::: moniker-end

## Fork the sample code

Fork the sample Python repository to your GitHub account.

1. Go to the [python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial) repository.
1. Select **Fork** in the upper-right corner of the page.
1. Select the GitHub account where you want to fork the repository, and enter a name for your forked repository.

## Set up a GitHub service connection

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**.
1. When you're prompted to set up a Service Connection, select **Create Service Connection**, select **GitHub**, and then select **Next**.
1. Under **Authentication method**, select **Grant authorization**, and under **OAuth configuration**, choose **AzurePipelines**. Select **Authorize**.
1. On the GitHub screen, select **Authorize AzurePipelines**. If prompted, sign in to GitHub.
1. Select **Save**.

## Create your pipeline

::: moniker range=">=azure-devops"

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**.
1. Select **GitHub** as the location of your source code. Make sure you have a service connection set up for your GitHub repository.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.

::: moniker-end

::: moniker range="< azure-devops"

1. In a browser, go to your DevOps Server collection.

1. Go to your project and select **Pipelines** > **Create a new pipeline**.

1. Select **GitHub Enterprise Server** as the location of your source code.

1. If you're redirected to GitHub to sign in, enter your GitHub credentials.

1. When the list of repositories appears, select your forked sample repository.

1. On the **Configure your pipeline** tab, select **Starter pipeline**.

::: moniker-end

## Customize your pipeline

::: moniker range=">=azure-devops"

On the **Review your pipeline YAML** screen, replace the contents of the generated *azure-pipelines.yml* file with the following code. The code installs required Python versions and dependencies, packages build artifacts to a ZIP archive and publishes it to your pipeline, and runs tests.

```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest

strategy:
  matrix:
    Python310:
      python.version: '3.10'
    Python311:
      python.version: '3.11'
    Python312:
      python.version: '3.12'

steps:
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '$(python.version)'
    displayName: 'Use Python $(python.version)'
  
  - script: |
      python -m pip install --upgrade pip
      pip install -r requirements.txt
    displayName: 'Install dependencies'
  
  - task: ArchiveFiles@2
    displayName: 'Archive files'
    inputs:
      rootFolderOrFile: $(System.DefaultWorkingDirectory)
      includeRootFolder: false
      archiveType: zip
      archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId)-$(python.version).zip
      replaceExistingArchive: true
  
  - task: PublishBuildArtifacts@1
    inputs:
      PathtoPublish: '$(Build.ArtifactStagingDirectory)'
      ArtifactName: 'drop'
      publishLocation: 'Container'

  - script: |
      pip install pytest pytest-azurepipelines
      pytest
    displayName: 'pytest'
```

::: moniker-end

::: moniker range="< azure-devops"

Replace the generated YAML with the following code. The code installs the required Python version and dependencies, packages build artifacts to a ZIP archive and publishes it to your pipeline, and runs tests.

Customize *azure-pipelines.yml* to match your project configuration.

- If you have a different agent pool, change the pool `name` parameter.
- If necessary, change the Python version to a version installed on your self-hosted agent.

```yaml
  trigger:
  - main
  
  pool: 
    name: '<your-pool-name or default>'
  
  steps:
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '3.12'
    displayName: 'Use Python 3.12'  
  
  - script: |
      python -m pip install --upgrade pip
      pip install -r requirements.txt
    displayName: 'Install dependencies'
  
  
  - task: ArchiveFiles@2
    displayName: 'Archive files'
    inputs:
      rootFolderOrFile: $(System.DefaultWorkingDirectory)
      includeRootFolder: false
      archiveType: zip
      archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
      replaceExistingArchive: true
  
  - task: PublishBuildArtifacts@1
    inputs:
      PathtoPublish: '$(Build.ArtifactStagingDirectory)'
      ArtifactName: 'drop'
      publishLocation: 'Container'
  
  - script: |
      pip install pytest pytest-azurepipelines
      pytest
    displayName: 'pytest'
```

::: moniker-end

## Run your pipeline

::: moniker range="> azure-devops-2019"

Select **Save and run**, and then select **Save and run** again.

The **Summary** tab shows the status of your pipeline run.

::: moniker-end

::: moniker range="azure-devops-2019"

Select **Run**.

The build number is displayed at the top of the page. Select the build number to see the details of the build.

:::image type="content" source="media/server-2019-build-link.png" alt-text="Screenshot of pipeline build link.":::

::: moniker-end

::: moniker range=">=azure-devops"

:::image type="content" source="media/published-artifacts-link.png" alt-text="Screenshot of published build artifacts link.":::

To view your build artifact, select the **published** link in the **Summary** tab.

The **Artifacts** page shows the published build artifacts.

:::image type="content" source="media/pipeline-artifacts-list.png" alt-text="Screenshot of published build artifacts.":::

To view the test results, select the **Tests** tab.
:::image type="content" source="media/pipeline-test-results.png" alt-text="Screenshot of pipeline test results.":::

::: moniker-end

::: moniker range="> azure-devops-2019 < azure-devops"

:::image type="content" source="media/pipeline-summary-page-single-job.png" alt-text="Screenshot of completed Python job.":::

To view your build artifact, select the **published** link in the **Summary** tab.

:::image type="content" source="media/pipeline-artifacts-list-single-file.png" alt-text="Screenshot of published build artifacts link.":::

To view the test results, select the **Tests** tab.

:::image type="content" source="media/pipeline-test-results.png" alt-text="Screenshot of pipeline test results.":::

::: moniker-end

::: moniker range="azure-devops-2019"

The **Summary** tab shows the status of your pipeline run.

:::image type="content" source="media/server-2019-build-job-summary.png" alt-text="Screenshot of completed Python job.":::

To download your build artifact, select the **drop** link from the **Build artifacts published** section.

To view the test results, select the **Tests** tab.

:::image type="content" source="media/server-2019-test-results.png" alt-text="Screenshot of pipeline test results.":::

::: moniker-end


## Clean up

When you finish this quickstart, you can delete the Azure DevOps project you created.

1. In your project, select the **Project settings** gear icon in the lower left corner of the page.
1. At the bottom of the **Project overview** page, select **Delete**.
1. Enter the project name and select **Delete**.

Congratulations, you successfully used Azure Pipelines to build and test a Python app.  You can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your continuous integration and continuous delivery (CI/CD) system.

## Next steps

* [Configure Python](customize-python.md)
* [Use CI/CD to deploy a Python web app to Azure App Service](python-webapp.md).
