---
title: Build and publish a Python app
description: Learn how to automatically build and test Python apps with Azure Pipelines.
ms.topic: quickstart
ms.date: 08/19/2025
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
monikerRange: "<=azure-devops"
ms.author: jukullam
ms.custom:
  - devx-track-python
  - freshness-fy22q2
  - sfi-image-nochange
---

# Build and publish a Python app

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

In this quickstart, you create a pipeline that builds and tests a Python app. You see how to use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your continuous integration and continuous delivery (CI/CD) system.

## Prerequisites

- An Azure DevOps organization and project where you have permission to create pipelines and deploy apps. To create a project, see [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- A GitHub account.

  >[!IMPORTANT]
  >During GitHub procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or be redirected to GitHub to sign in, install Azure Pipelines, authorize Azure Pipelines, or authenticate to GitHub organizations. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

::: moniker range=">=azure-devops"

Python is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) for Linux, macOS, and Windows. You don't have to set up anything more to build Python projects. To see which Python versions are preinstalled, see [Software](../agents/hosted.md#software).

::: moniker-end

## Fork the sample code

Fork the sample Python repository to your GitHub account.

1. Go to the [python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial) repository.
1. Select **Fork** at upper right.
1. Make sure your GitHub account name is selected under **Owner**, and select **Create fork**. The fork is named the same as the parent repository by default, but you can name it something different.

## Create your pipeline

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu and then select **New pipeline**, or **Create Pipeline** if this is the first pipeline in the project.
1. On the **Where is your code** screen, select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked Python sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.

## Customize your pipeline

On the **Review your pipeline YAML** screen, replace the contents of the generated *azure-pipelines.yml* file with the following code. The code does the following actions on three different versions of Python:

1. Installs required Python version and dependencies.
1. Packages build artifacts to a ZIP archive.
1. Publishes the archive to your pipeline.
1. Runs tests.

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

- If you have a different agent pool, replace the pool `name` placeholder with your pool name or `default`.
- If necessary, change the Python `versionSpec` to a version installed on your self-hosted agent.

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

Select **Save and run**, and then select **Save and run** again.

You can select **Job** on the **Summary** screen to see your job in action.

::: moniker range=">=azure-devops"

The job runs three times on the three specified Python versions. The three versions can run in parallel on different agents.

:::image type="content" source="media/pipeline-summary-multiple.png" alt-text="Screenshot of completed Python multiple version job.":::

::: moniker-end

## View artifacts

To view your build artifact, select the **[N] published** link in the **Summary** tab.

:::image type="content" source="media/published-artifacts-link.png" alt-text="Screenshot of published build artifacts link.":::

The **Artifacts** page shows the published build artifacts.

::: moniker range=">=azure-devops"

:::image type="content" source="media/pipeline-artifacts-list.png" alt-text="Screenshot of published build artifacts.":::

::: moniker-end

::: moniker range="< azure-devops"

:::image type="content" source="media/pipeline-summary-page-single-job.png" alt-text="Screenshot of completed Python job.":::

The **Artifacts** page shows the published build artifacts.

:::image type="content" source="media/pipeline-artifacts-list-single-file.png" alt-text="Screenshot of published build artifacts link.":::

::: moniker-end

::: moniker range="<=azure-devops"

To view the test results, select the **Tests** tab.

:::image type="content" source="media/pipeline-test-results.png" alt-text="Screenshot of pipeline test results.":::

::: moniker-end

## Clean up

If you're done using the pipeline you created, you can delete it.

1. Select **Pipelines** from your project's left navigation menu.
1. In the pipeline list, hover over the pipeline you created, select the **More actions** icon on the right, and then select **Delete**.
   Or select the pipeline, and on the pipeline page, select the **More actions** icon at upper right, and then select **Delete**.
1. Enter the pipeline name, and then select **Delete** again.

You successfully created and ran a pipeline that built and tested a Python app. You can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your CI/CD process.

## Next steps

> [!div class="nextstepaction"]
> [Configure Python](customize-python.md)

> [!div class="nextstepaction"]
> [Use CI/CD to deploy a Python web app to Azure App Service](python-webapp.md).

