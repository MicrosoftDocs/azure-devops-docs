---
title: Create a multi-platform pipeline
ms.custom: seodec18
description: Build and test on macOS, Linux, and Windows
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 4aaa98c7-f363-4fe6-b9dd-158108955e38
ms.manager: jillfra
ms.author: alewis
author: vtbassmatt
ms.date: 12/14/2018
monikerRange: 'azure-devops'
---

# Create a multi-platform pipeline

**Azure Pipelines**

This is a step-by-step guide to using Azure Pipelines to build on macOS, Linux, and Windows.

## Prerequisites

[!INCLUDE [include](_shared/ci-cd-prerequisites-vsts.md)]

* You need a GitHub account, where you can create a repository.

## Get the sample code

You can use Azure Pipelines to build an app on written in any language, on multiple platforms at the same time.

1. Go to https://github.com/MicrosoftDocs/pipelines-javascript.

1. Fork the repo into your own GitHub account.

You should now have a sample app in your GitHub account.

## Add additional platforms

In the sample repo, the Node.js app is configured to run on Ubuntu Linux. You're going to add additional jobs that run on other platforms.

1. Go to your fork of the sample code on GitHub.

1. Select `azure-pipelines.yml`, and then select the _Edit this file_ pencil icon.

1. In GitHub's web editor, replace the existing content with the content below.

```yaml
# Build NodeJS Express app using Azure Pipelines
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript?view=azure-devops
strategy:
  matrix:
    linux:
      imageName: 'ubuntu-16.04'
    mac:
      imageName: 'macos-10.13'
    windows:
      imageName: 'vs2017-win2016'

pool:
  vmImage: $(imageName)

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '8.x'

- script: |
    npm install
    npm test

- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/TEST-RESULTS.xml'
    testRunTitle: 'Test results for JavaScript'

- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'

- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(System.DefaultWorkingDirectory)'
    includeRootFolder: false

- task: PublishBuildArtifacts@1
```

At the bottom of the GitHub editor, select **Commit changes**.

Each job in this example runs on a different VM image.
By default, the jobs run at the same time in parallel.

Note: `script` runs in each platform's native script interpreter: Bash on macOS and Linux, CMD on Windows.
See [multi-platform scripts](scripts/cross-platform-scripting.md) to learn more.

## Create the pipeline

Now that you've configured your GitHub repo with a pipeline, you're ready to build it.

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, go to the **Pipelines** page, and then select **New pipeline**.

1. Select **GitHub** as the location of your source code.

   ![Select GitHub](_img/get-started-yaml/new-pipeline.png)

1. For **Repository**, select **Authorize** and then **Authorize with OAuth**. 

1. You might be redirected to GitHub to sign in. If this happens, then enter your GitHub credentials. After you're redirected back to Azure Pipelines, select the **sample app** repository.

1. For the **Template**, Azure Pipelines analyzes the code in your repository. If your repository already contains an `azure-pipelines.yml` file (as in this case), then this step is skipped. Otherwise, Azure Pipelines recommends a starter template based on the code in your repository.

1. Azure Pipelines shows you the YAML file that it will use to create your pipeline.

1. Select **Save and run**, and then select the option to **Commit directly to the master branch**.

1. The YAML file is pushed to your GitHub repository, and a new build is automatically started. Wait for the build to finish.

## Next steps

You've just learned the basics of using multiple platforms with Azure Pipelines. From here, you can learn more about:

* Running [multiple jobs](process/multiple-phases.md?tabs=yaml)
* [Cross-platform scripting](scripts/cross-platform-scripting.md)
* [Templates](process/templates.md) to remove the duplication
* Building [Node.js](languages/javascript.md) apps
* Building [.NET Core](languages/dotnet-core.md), [Go](languages/go.md), [Java](languages/java.md), or [Python](languages/python.md) apps

For details about building GitHub repositories, see [Build GitHub repositories](repos/github.md).
