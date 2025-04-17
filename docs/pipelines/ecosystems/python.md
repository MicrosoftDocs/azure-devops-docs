---
title: Build and publish a Python app
description: Learn how to automatically build and test Python apps with Azure Pipelines.
ms.topic: quickstart
ms.date: 07/08/2024
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
monikerRange: "<=azure-devops"
ms.custom: devx-track-python, freshness-fy22q2
ms.author: jukullam
---

# Build and publish a Python app

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

In this quickstart, you create a pipeline that builds and tests a Python app. You see how to use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your continuous integration and continuous delivery (CI/CD) system.

## Prerequisites


[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

::: moniker range=">=azure-devops"

Python is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) for Linux, macOS, and Windows. You don't have to set up anything more to build Python projects. To see which Python versions are preinstalled, see [Use a Microsoft-hosted agent](../agents/hosted.md#software).

::: moniker-end

## Fork the sample code

Fork the sample Python repository to your GitHub account.

1. Go to the [python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial) repository.
1. Select **Fork** in the upper-right corner of the page.
1. Select your GitHub account. By default, the fork is named the same as the parent repository, but you can name it something different.

>[!IMPORTANT]
>During the following procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Create your pipeline

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.

## Customize your pipeline

On the **Review your pipeline YAML** screen, replace the contents of the generated *azure-pipelines.yml* file with the following code. The code:

- Installs required Python versions and dependencies.
- Packages build artifacts to a ZIP archive.
- Publishes the archive to your pipeline.
- Runs tests.

::: moniker range=">=azure-devops"
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

::: moniker range="<=azure-devops"

Select **Save and run**, and then select **Save and run** again.

The **Summary** tab shows the status of your pipeline run.

To view your build artifact, select the **published** link in the **Summary** tab.

::: moniker-end

::: moniker range=">=azure-devops"

:::image type="content" source="media/published-artifacts-link.png" alt-text="Screenshot of published build artifacts link.":::

The **Artifacts** page shows the published build artifacts.
:::image type="content" source="media/pipeline-artifacts-list.png" alt-text="Screenshot of published build artifacts.":::

::: moniker-end

::: moniker range="<azure-devops"

:::image type="content" source="media/pipeline-summary-page-single-job.png" alt-text="Screenshot of completed Python job.":::

The **Artifacts** page shows the published build artifacts.
:::image type="content" source="media/pipeline-artifacts-list-single-file.png" alt-text="Screenshot of published build artifacts link.":::

::: moniker-end

::: moniker range="<=azure-devops"

To view the test results, select the **Tests** tab.

:::image type="content" source="media/pipeline-test-results.png" alt-text="Screenshot of pipeline test results.":::

::: moniker-end

## Clean up

When you finish this quickstart, you can delete the Azure DevOps project you created.

1. In your project, select the **Project settings** gear icon in the lower left corner of the page.
1. At the bottom of the **Project overview** page, select **Delete**.
1. Enter the project name and select **Delete**.

Congratulations, you successfully created and ran a pipeline that built and tested a Python app. Now you can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your continuous integration and continuous delivery (CI/CD) system.

## Next steps

> [!div class="nextstepaction"]
> [Configure Python](customize-python.md)

> [!div class="nextstepaction"]
> [Use CI/CD to deploy a Python web app to Azure App Service](python-webapp.md).

