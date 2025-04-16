---
title: Build and publish a Node.js package
description:  Learn how to use Azure Pipelines to build, deploy, and test a Node.js app.
ms.assetid: 5BB4D9FA-DCCF-4661-B52B-0C42006A2AE5
ms.reviewer: vijayma
ms.topic: quickstart
ms.custom: devx-track-js, freshness-fy22q2
ms.date: 07/08/2024
monikerRange: '<= azure-devops'
---

# Build and publish a Node.js package

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this quickstart, you use a pipeline to create a Node.js package with Node Package Manager (npm) and publish a pipeline artifact. You learn how to use Azure Pipelines to build, deploy, and test your JavaScript apps.

## Prerequisites

[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

## Fork the sample code

Fork the sample Express.js server app.

1. Go to the [js-e2e-express-server](https://github.com/Azure-Samples/js-e2e-express-server) repository.
1. Select **Fork** in the upper-right corner of the page.
1. Select your GitHub account. By default, the fork is named the same as the parent repository, but you can name it something different.

>[!IMPORTANT]
>During the following procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Create your pipeline

### [YAML](#tab/yaml)

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**. Azure Pipelines generates a YAML file called *azure-pipelines.yml* for your pipeline.
1. Select the dropdown caret next to **Save and run**, select **Save**, and then select **Save** again. The file is saved to your forked GitHub repository.
1. On the next screen, select **Edit**.

## Build the package and publish an artifact

Edit your *azure-pipelines.yml* file as follows.

1. Replace the contents of the file with the following code. The code updates the [Node.js tool installer task](/azure/devops/pipelines/tasks/reference/node-tool-v0) to use Node.js version 16 LTS.

    ```yaml
    trigger:
    - main
    
    pool:
      vmImage: 'ubuntu-latest'
    
    steps:
    - task: UseNode@1
      inputs:
        version: '16.x'
      displayName: 'Install Node.js'
    
    - script: |
        npm install
      displayName: 'npm install'
    
    - script: |
        npm run build
      displayName: 'npm build'

    - script: 
        npm test
      displayname: 'npm test'

    ``` 

1. Add the following new tasks to the pipeline:

   - The [copy files task](/azure/devops/pipelines/tasks/reference/copy-files-v2) copies the files from the *src* and *public* folders to the build artifact staging directory.

   - The [publish pipeline artifact task](../artifacts/pipeline-artifacts.md) gets the files from the artifact staging location and publishes them as artifacts to be output with pipeline builds.

    ```yaml
    - task: CopyFiles@2
      inputs:
        sourceFolder: '$(Build.SourcesDirectory)'
        contents: |
           src/*
           public/*
        targetFolder: '$(Build.ArtifactStagingDirectory)'
      displayName: 'Copy project files'
    
    - task: PublishPipelineArtifact@1
      inputs:
        artifactName: e2e-server
        targetPath: '$(Build.ArtifactStagingDirectory)'
        publishLocation: 'pipeline'
      displayName: 'Publish npm artifact'
    ```

## Run your pipeline

Select **Validate and save**, then select **Save**, select **Run**, and select **Run** again.

After your pipeline runs, verify that the job ran successfully and that you see a published artifact.

::: moniker range=">=azure-devops-2020"

:::image type="content" source="media/node-artifact-run.png" alt-text="Screenshot of successful pipeline run with an artifact.":::

::: moniker-end

### [Classic](#tab/classic)

1. Select **GitHub** as the source for your code.
1. Under **Repository**, select your forked repository, and select **Continue**.
1. Select **Empty pipeline**, and select **Apply**.
1. Under **Agent specification** in the right pane, select **ubuntu-latest**.

1. In the left pane, add the following tasks to the pipeline in order. For each task, select the **+**  in **Agent job 1**, select the task at right and select **Add**, and configure the task if necessary.

   1. **npm**

   1. **npm**
      - **Display name:** *npm test*
      - **Command:** **custom**
      - **Command and arguments:** *test*

   1. **Publish Test Results**

   1. **Archive files**
      - **Root folder or file to archive:** *$(System.DefaultWorkingDirectory)*
      - **Prepend root folder name to archive paths:** Uncheck

   1. **Publish build artifacts**

1. Select **Save & queue**, and then select **Save and run**.

   :::image type="content" source="media/classic-node.png" alt-text="Screenshot of the classic pipeline. ":::

---

Congratulations, you successfully created and ran a pipeline that built and tested a Node.js package. You can build, test, and deploy Node.js apps as part of your Azure Pipelines continuous integration and continuous delivery (CI/CD) system.

## Next steps

> [!div class="nextstepaction"]
> [Configure JavaScript](customize-javascript.md)

