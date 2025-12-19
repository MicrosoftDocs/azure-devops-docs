---
title: Build and publish a Python app
description: Learn how to automatically build and test Python apps with Azure Pipelines.
ms.topic: quickstart
ms.date: 08/22/2025
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
monikerRange: "<=azure-devops"
ms.author: jukullam
ms.custom:
  - devx-track-python
  - freshness-fy22q2
  - sfi-image-nochange
#customer intent: As a Python developer, I want to learn how to build and publish Python apps in Azure Pipelines so I can test and publish apps with different versions of Python.
---

# Build and publish a Python app

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this quickstart, you create a pipeline that builds and tests a Python app. You see how to use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your continuous integration and continuous delivery (CI/CD) system.

## Prerequisites

::: moniker range=">=azure-devops"

Python is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) for Linux, macOS, and Windows. You don't have to set up anything more to build Python projects. To see which Python versions are preinstalled, see [Software](../agents/hosted.md#software).

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier.  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; - To create a pipeline: you must be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Project Administrators group](../../organizations/security/permissions.md) can manage pipelines. <br> &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md).
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../library/service-endpoints.md) to authorize Azure Pipelines.|

::: moniker-end

::: moniker range="< azure-devops"

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - A self-hosted agent with Python 3.12 or other Python version installed. To create one, see [Self-hosted agents](../agents/agents.md#self-hosted-agents).  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create a pipeline: you must be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Project Administrators group](../../organizations/security/permissions.md) can manage pipelines. <br> &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md).
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../library/service-endpoints.md) to authorize Azure Pipelines.|

::: moniker-end

>[!IMPORTANT]
>GitHub procedures might require you to take one or more of the following actions in GitHub:
>- Sign in.
>- Authorize Azure Pipelines.
>- Authenticate to GitHub organizations.
>- Install the Azure Pipelines app.
>
>Follow instructions to complete the required processes. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Fork the sample code

Fork the sample Python repository to your GitHub account.

1. Go to the [python-sample-vscode-flask-tutorial](https://github.com/Microsoft/python-sample-vscode-flask-tutorial) repository.
1. Select **Fork** at upper right.
1. Make sure your GitHub account name is selected under **Owner**, and select **Create fork**. The fork is named the same as the parent repository by default, but you can name it something different.

## Create your pipeline

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu and then select **New pipeline**, or **Create Pipeline** if this pipeline is the first in the project.
1. On the **Where is your code** screen, select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked Python sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.

## Customize your pipeline

::: moniker range=">=azure-devops"

On the **Review your pipeline YAML** screen, replace the contents of the generated *azure-pipelines.yml* file with the following code. The code does the following actions on three different versions of Python:

1. Installs required Python version and dependencies.
1. Packages build artifacts to a ZIP archive.
1. Publishes the archive to your pipeline.
1. Runs tests.

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

On the **Review your pipeline YAML** screen, replace the contents of the generated *azure-pipelines.yml* file with the following code. The code does the following actions:

1. Installs required Python version and dependencies.
1. Packages build artifacts to a ZIP archive.
1. Publishes the archive to your pipeline.
1. Runs tests.

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

Select **Save and run**, and then select **Save and run** again. You can select **Job** on the **Summary** screen to see your job in action.

::: moniker range=">=azure-devops"

The job runs three times, once for each specified Python version. The three versions can run in parallel on different agents.

:::image type="content" source="media/pipeline-summary-multiple.png" alt-text="Screenshot of completed Python job with multiple versions.":::

::: moniker-end

::: moniker range="< azure-devops"

:::image type="content" source="media/pipeline-summary-page-single-job.png" alt-text="Screenshot of completed single Python job.":::

::: moniker-end

## View artifacts and test results

To view your build artifacts, select the **[N] published** link on the **Summary** tab.

:::image type="content" source="media/published-artifacts-link.png" alt-text="Screenshot of published build artifacts link.":::

The **Artifacts** page shows the published build artifacts.

::: moniker range=">=azure-devops"

:::image type="content" source="media/pipeline-artifacts-list.png" alt-text="Screenshot of published build artifacts.":::

::: moniker-end

::: moniker range="< azure-devops"

:::image type="content" source="media/pipeline-artifacts-list-single-file.png" alt-text="Screenshot of published build artifacts for a single job.":::

::: moniker-end

To view the test results, select the **Tests** tab.

:::image type="content" source="media/pipeline-test-results.png" alt-text="Screenshot of pipeline test results.":::

## Clean up

If you're done using the pipeline you created, you can delete it.

1. Select **Pipelines** from your project's left navigation menu.
1. In the pipeline list, hover over the pipeline you created, select the **More actions** icon at right, and then select **Delete**.

   Or select the pipeline, and on the pipeline page, select the **More actions** icon at upper right, and then select **Delete**.
1. Enter the pipeline name, and then select **Delete** again.

You successfully created and ran a pipeline that built and tested a Python app. You can now use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your CI/CD process.

## Next step

> [!div class="nextstepaction"]
> [Use CI/CD to deploy a Python web app to Azure App Service](python-webapp.md).

## Related content

- [Configure Python](customize-python.md)
- [Build GitHub repositories](../repos/github.md)
