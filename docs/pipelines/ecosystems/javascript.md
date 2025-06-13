---
title: Build and publish a Node.js package
description:  Learn how to use Azure Pipelines to build, deploy, and test a Node.js app.
ms.assetid: 5BB4D9FA-DCCF-4661-B52B-0C42006A2AE5
ms.reviewer: vijayma
ms.topic: how-to
ms.custom: devx-track-js, freshness-fy22q2
ms.date: 05/27/2025
monikerRange: '<= azure-devops'
---

# Build and publish a Node.js package

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can build, test, and deploy Node.js apps as part of your Azure Pipelines continuous integration and continuous delivery (CI/CD) system. Learn how to use a pipeline to create a Node.js package with Node Package Manager (npm) and publish a pipeline artifact. 

The example pipeline automates the process of building, testing, and packaging a Node.js application, making it ready for further deployment or distribution.  

## Prerequisites

[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

## Fork the sample code

Fork the sample Express.js server app.

1. Go to the [js-e2e-express-server](https://github.com/Azure-Samples/js-e2e-express-server) repository.
1. Select **Fork** in the upper-right corner of the page.
1. Select your GitHub account. By default, the fork is named the same as the parent repository, but you can give it a different name.

>[!IMPORTANT]
>During the following procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the instructions on the screen to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Create your pipeline

### [YAML](#tab/yaml)

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**, then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**. Azure Pipelines generates a YAML file named *azure-pipelines.yml* for your pipeline.
1. Select the dropdown caret next to **Save and run**, select **Save**, then select **Save** again. The file is saved to your forked GitHub repository.
1. On the next screen, select **Edit**.

## Build the package and publish an artifact

Edit the *azure-pipelines.yml* file as follows.

1. Replace the file contents with the following code. 

    ```yaml
    trigger:
      - main
    
    pool:
      vmImage: 'ubuntu-latest'
    
    variables:
      nodeVersion: '18.x'
    
    steps:
      # Install Node.js
      - task: UseNode@1
        inputs:
          version: $(nodeVersion)
        displayName: 'Install Node.js'
    
      # Install dependencies
      - script: |
          npm install
        displayName: 'Install dependencies'
    
      # Build the project
      - script: |
          npm run build
        displayName: 'Build project'
    
      # Run tests
      - script: |
          npm test
        displayName: 'Run tests'
    
      # Copy project files to artifact staging directory
      - task: CopyFiles@2
        inputs:
          sourceFolder: '$(Build.SourcesDirectory)'
          contents: |
            src/**
            public/**
          targetFolder: '$(Build.ArtifactStagingDirectory)'
        displayName: 'Copy project files'
    
      # Publish pipeline artifact
      - task: PublishPipelineArtifact@1
        inputs:
          artifactName: 'nodejs-app'
          targetPath: '$(Build.ArtifactStagingDirectory)'
        displayName: 'Publish pipeline artifact'
    ```

In the updated pipeline, you'll: 

- Install Node.js: The [UseNode@1 task](/azure/devops/pipelines/tasks/reference/use-node-v1) installs the specified Node.js version (18.x).
- Install dependencies: The npm install command installs the required dependencies for the Node.js project.
- Build the project: The npm run build command builds the Node.js project.
- Run Tests: The npm test command runs the project's test suite.
- Copy files: The [CopyFiles@2 task](/azure/devops/pipelines/tasks/reference/copy-files-v2) copies the necessary project files (for example, `src/**` and `public/**`) to the artifact staging directory.
- Publish pipeline artifact: The [PublishPipelineArtifact@1 task](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) publishes the files from the artifact staging directory as a pipeline artifact named nodejs-app.

## Run your pipeline

Select **Validate and save**, then **Save**, **Run**, and **Run** again.

After your pipeline runs, verify that the job ran successfully and that you see a published artifact.

::: moniker range=">=azure-devops-2020"

:::image type="content" source="media/node-artifact-run.png" alt-text="Screenshot of successful pipeline run with an artifact.":::

::: moniker-end

### [Classic](#tab/classic)

1. Select **GitHub** as the source for your code.
1. Under **Repository**, select your forked repository and **Continue**.
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

   :::image type="content" source="media/classic-node.png" alt-text="Screenshot of the classic pipeline.":::

---

Congratulations, you successfully created and ran a pipeline that built and tested a Node.js package. To extend your pipeline, you can:

- Deploy to a cloud platform with a service like [Azure App Service](/azure/app-service/deploy-azure-pipelines)
- Publish as a [NPM package](../artifacts/npm.md)
- Deploy a static hosting service like [Azure Static Web Apps](/azure/devops/pipelines/tasks/reference/azure-static-web-app-v0)
- Containerize and deploy [Azure Kubernetes Service](/azure/aks/devops-pipeline) or other container orchestration platforms



## Next steps

> [!div class="nextstepaction"]
> [Configure JavaScript](customize-javascript.md)

