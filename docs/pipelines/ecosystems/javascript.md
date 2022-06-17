---
title: Quickstart - Use Azure Pipelines to build and publish a Node.js package
description:  Build, deploy, and test JavaScript and Node.js apps with Azure Pipelines
ms.assetid: 5BB4D9FA-DCCF-4661-B52B-0C42006A2AE5
ms.reviewer: vijayma
ms.topic: quickstart
ms.custom: seodec18, seo-javascript-september2019, contperf-fy20q4, devx-track-js, freshness-fy22q2, contperf-fy22q1
ms.date: 06/16/2022
monikerRange: '<= azure-devops'
zone_pivot_groups: pipelines-version
---

# Quickstart - Use Azure Pipelines to build and publish a Node.js package

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use an Azure DevOps pipeline to build, deploy, and test JavaScript apps. 

This quickstart walks through how to use a pipeline to create a Node.js package with Node Package Manager (npm) and publish a pipeline artifact. 

## Prerequisites

You must have the following items in Azure DevOps:

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps organization. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 

::: moniker range=">=azure-devops-2020"

## 1 - Fork the sample code

Fork the following repo at GitHub.

```
https://github.com/Azure-Samples/js-e2e-express-server
```

::: zone pivot="pipelines-yaml"

## 2 - Create your pipeline
 
1. Sign in to [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines). Your browser will go to `https://dev.azure.com/my-organization-name` and display your Azure DevOps dashboard.

1. Go to your project and select **Pipelines** > **Create a new pipeline**.

1. Select **GitHub** as the location of your source code.

1. If you're redirected to GitHub to sign in, enter your GitHub credentials.

1. When the list of repositories appears, select your Node.js sample repository.

1. Azure Pipelines analyzes the code in your repository and recommends the `Node.js` template for your pipeline. Select that template.

1. Azure Pipelines generates a YAML file for your pipeline. Select **Save and run** > **Commit directly to the main branch**, and then choose **Save and run** again.

1. A new run starts. Wait for the run to finish.

When you're done, you have a working YAML file *azure-pipelines.yml* in your repository that's ready for you to customize.

## 3 - Build your package and publish an artifact

1. **Edit** your *azure-pipelines.yml* file.

1. Update the [Node.js Tool Installer task](../tasks/tool/node-js.md) to use Node.js version 16 LTS.

    ```yaml
    trigger:
    - main
    
    pool:
      vmImage: 'ubuntu-latest'
    
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '16.x'
      displayName: 'Install Node.js'
    
    - script: |
        npm install
      displayName: 'npm install'
    
    - script: |
        npm run build
      displayName: 'npm build'
    ``` 

1. Add new tasks to your pipeline to copy your npm package, package.json, and to publish your artifact. The [Copy Files task](../tasks/utility/copy-files.md) copies files from local path on the agent where your source code files are downloaded and saves files to a local path on the agent where any artifacts are copied to before being pushed to their destination. Those files are saved into a *npm* folder. The pipeline-artifacts[Publish Pipeline Artifact task](../artifacts/pipeline-artifacts.md), downloads the files from the earlier Copy Files tasks and makes them available as pipeline artifacts that will be published with your pipeline build.  

    ```yaml
    - task: CopyFiles@2
      inputs:
        sourceFolder: '$(Build.SourcesDirectory)'
        contents: '*.tgz' 
        targetFolder: $(Build.ArtifactStagingDirectory)/npm
      displayName: 'Copy npm package'
    
    - task: CopyFiles@2
      inputs:
        sourceFolder: '$(Build.SourcesDirectory)'
        contents: 'package.json' 
        targetFolder: $(Build.ArtifactStagingDirectory)/npm
      displayName: 'Copy package.json'   

    - task: PublishPipelineArtifact@1
      inputs:
        targetPath: '$(Build.ArtifactStagingDirectory)/npm'
        artifactName: npm
      displayName: 'Publish npm artifact'
    ```

## 4 - Run your pipeline

Save and run your pipeline. After your pipeline runs, verify that the job ran successfully and that you see a published artifact. 
    
:::image type="content" source="media/node-artifact-run.png" alt-text="Screenshot of successful pipeline run with an artifact. ":::

::: moniker-end


::: moniker range="azure-devops-2019" 

### Create a pipeline

#### YAML

1. Fork the following repo at GitHub.

    ```
   https://github.com/Azure-Samples/js-e2e-express-server
   ```

2. Add an *azure-pipelines.yml* file in your repository. This YAML assumes that you have Node.js with npm installed on your server. 

```yaml
trigger:
- main

pool: Default

- script: |
    npm install
  displayName: 'npm install'

- script: |
    npm run build
  displayName: 'npm build'
```
3. [Create a pipeline](../create-first-pipeline.md) and select the **YAML** template.

4. Set the **Agent pool** and **YAML file path** for your pipeline. 

5. Save the pipeline and queue a build. When the **Build #nnnnnnnn.n has been queued** message appears, select the number link to see your pipeline in action.

6. You can **Edit** your pipeline any time.

::: moniker-end

::: zone-end

::: zone pivot="pipelines-classic"

::: moniker range="< azure-devops" 

#### Classic

1. Fork the following repo at GitHub.

    ```
    https://github.com/Azure-Samples/js-e2e-express-server
    ```

2. After you have the sample code in your own repository, [create your first pipeline](../create-first-pipeline.md) and select the **Empty process** template.

3. Select **Process** under the **Tasks** tab in the pipeline editor and change the properties as follows:
   * **Agent queue:** `Hosted Ubuntu 1604`

4. Add the following tasks to the pipeline in the specified order:
   * **npm**
     * **Command:** `install`

   * **npm**
     * **Display name:** `npm test`
     * **Command:** `custom`
     * **Command and arguments:** `test`

   * **Publish Test Results**
     * Leave all the default values for properties

   * **Archive Files**
     * **Root folder or file to archive:** `$(System.DefaultWorkingDirectory)`
     * **Prepend root folder name to archive paths:** Unchecked

   * **Publish Build Artifacts**
     * Leave all the default values for properties

5. Save the pipeline and queue a build to see it in action.

::: moniker-end

::: zone-end

## Next steps

Congratulations, you've successfully completed this quickstart!

> [!div class="nextstepaction"]
> [Configure JavaScript](configure-javascript.md)

