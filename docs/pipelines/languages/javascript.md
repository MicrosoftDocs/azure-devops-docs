---
title: JavaScript and Node.js
description: Building JavaScript and Node.js apps using Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 5BB4D9FA-DCCF-4661-B52B-0C42006A2AE5
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.date: 08/15/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# JavaScript and Node.js

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

This guidance explains how to build JavaScript and Node.js apps.

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

## Example

For a working example of how to build a NodeJS app, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

The sample code in this repo is a Node server implemented with Express JS framework that echoes "Hello world". Tests for the app are written using mocha framework.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The sample code includes a `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the app.

Follow all the instructions in [Build a repo with YAML](../get-started-yaml.md) to create a build pipeline for the sample app.

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

::: moniker range="< vsts"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure Pipelines account. Then [try this with Azure Pipelines](#example?view=vsts&tabs=designer).
::: moniker-end

* After you have the sample code in your own repository, create a build pipeline using the instructions in [Your first build and release](../get-started-designer.md) and select the **Empty process** template.

* Select **Process** under the **Tasks** tab in the build pipeline editor and change the properties as follows:
  * **Agent queue:** `Hosted Linux Preview`

* Add the following tasks to the pipeline in the order specified:
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

  * **Public Build Artifacts**
    * Leave all the default values for properties

* Save the pipeline and queue a build to see it in action.

---

Read through the rest of this topic to learn some of the common ways to customize your JavaScript build process.

## Build environment

::: moniker range="vsts"

You can use Azure Pipelines to build your JavaScript apps without needing to set up any infrastructure of your own.
Tools that you commonly use to build, test, and run JavaScript apps - npm, node, gulp, gradle, grunt etc - are pre-installed on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can either use Windows (Hosted VS2017) or Linux (Hosted Linux Preview) agents to run your builds.

For the exact version of Node.js and npm pre-installed, refer to [Microsoft-hosted agents](../agents/hosted.md). To install a specific version of these tools on Microsoft hosted agents, add the **Node Tool Installer** task to the beginning of your process.

::: moniker-end

# [YAML](#tab/yaml)

::: moniker range="vsts"
If you need a version of the Node.js/npm that is not already installed on the Microsoft-hosted agent, add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: NodeTool@0
  inputs:
    version: '8.x' # replace this value with the version that you need for your project
```
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

If you need a version of the Node.js/npm that is not already installed on the Microsoft-hosted agent:

1. In the build pipeline, select **Tasks**, choose the phase that runs your build tasks, and then select **+** to add a new task to that phase.

1. In the task catalog, find and add the **Node Tool Installer** task.

1. Select the task and specify the version of the Node.js runtime that you want to install.

---

To just update the npm tool, run `npm i -g npm@version-number` command in your build process.

## Dependency management

As part of your build, you can download packages from the public npm registry, a private npm registry that you specify in .npmrc file, or from
Azure Artifacts/TFS. There are many ways you can download the packages:

* Directly run `npm install` in your build pipeline. This is the simplest way to download packages from a registry that does not need any authentication.
* Use [npm task](../tasks/package/npm.md). This is useful when using an authenticated registry.
* Use [npm Authenticate task](../tasks/package/npm-authenticate.md). This is useful when you run `npm install` from inside your task runners - gulp, grunt, or maven.

If you want to specify a npm registry, put the URLs in `.npmrc` file in your repository.
If your feed is authenticated, manage its credentials by creating a npm service connection in the **Services** tab under **Project Settings**.

# [YAML](#tab/yaml)

::: moniker range="vsts"

To install npm packages using a script in your build pipeline, add the following snippet to `azure-pipelines.yml`.

```yaml
- script: npm install
```

To use a private registry specified in your `.npmrc` file, add the following snippet to `azure-pipelines.yml`.

```yaml
- task: Npm@1
  inputs:
    customEndpoint: <Name of npm service connection>
```

To pass registry credentials to npm commands via task runners such as gulp, add the following task to `azure-pipelines.yml` before you call the task runner.

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>
```

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Use the [npm](../tasks/package/npm.md) or [npm Authenticate](../tasks/package/npm-authenticate.md) tasks in your build pipeline to download and install packages.

---

::: moniker range=">= tfs-2018"

If your builds occasionally fail when restoring packages from npm registry due to connection issues,
you can use Azure Artifacts in conjunction with [upstream sources](../../artifacts/concepts/upstream-sources.md),
and cache the packages. The credentials of the build pipeline are automatically used when connecting
to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service**
account.

::: moniker-end

::: moniker range="vsts"

If you're using Microsoft-hosted agents, you get a new machine every time your run a build - which means restoring the dependencies every time.
This can take a significant amount of time. To mitigate this you can either use Azure Artifacts or a self-hosted agent, in which case
you'll get the benefit of using the package cache.

::: moniker-end

## Test

The example uses **mocha** test framework to run tests and **istanbul** to get code coverage results in Cobertura XML format. 

# [YAML](#tab/yaml)

::: moniker range="vsts"

To run tests in your build pipeline, add the following snippet to `azure-pipelines.yml` file.

```yaml
- script: npm test
```

### Publish test results

Add the [Publish Test Results](../tasks/test/publish-test-results.md) task to publish JUnit or xUnit test results to the server. In this example, results are published in JUnit format. The test results published can be viewed under [Tests Tab](../test/review-continuous-test-results-after-build.md) in build.

```yaml
- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/TEST-RESULTS.xml'
    testRunTitle: 'Test results for JavaScript'
```

### Publish code coverage results

Add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results to the server. When you do this, coverage metrics can be seen in the build summary and HTML reports can be downloaded for further analysis. 

```yaml
- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Use the [Publish Test Results](../tasks/test/publish-test-results.md) and [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) tasks in your build pipeline to publish test results along with code coverage results using istanbul.

---

## Task runners

It is common to use **gulp**, **grunt**, or **maven** as a task runner to build and test a JavaScript app.

### Gulp

# [YAML](#tab/yaml)

::: moniker range="vsts"

Gulp is pre-installed on Microsoft-hosted agents. To run the gulp command in the YAML file:

```yaml
- script: gulp                       # include any additional options that are needed
```

If the steps in your gulpfile require authentication with a npm registry:

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>

- script: gulp                       # include any additional options that are needed
```

Add the [Publish Test Results](../tasks/test/publish-test-results.md) task to publish JUnit or xUnit test results to the server.

```yaml
- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/TEST-RESULTS.xml'
    testRunTitle: 'Test results for JavaScript using gulp'
```

Add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results to the server. Coverage metrics can be seen in the build summary and HTML reports can be downloaded for further analysis. 

```yaml
- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

The simplest way to create a build pipeline if your app uses gulp is to use the **NodeJS with Gulp** build template when creating the pipeline. This will automatically add various tasks to invoke gulp commands and to publish artifacts. In the task, select **Enable Code Coverage** to enable Code Coverage using istanbul.

---

### Grunt

# [YAML](#tab/yaml)
::: moniker range="vsts"

Grunt is pre-installed on Microsoft-hosted agents. To run the grunt command in the YAML file:

```yaml
- script: grunt                      # include any additional options that are needed
```

If the steps in your `Gruntfile` require authentication with a npm registry:

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>

- script: grunt                      # include any additional options that are needed
```
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

The simplest way to create a build pipeline if your app uses gulp is to use the **NodeJS with Grunt** build template when creating the pipeline. This will automatically add various tasks to invoke gulp commands and to publish artifacts. In the task, select **Publish to TFS/Team Services** option to publish test results and **Enable Code Coverage** to enable Code Coverage using istanbul.

---

## Package and deliver your code

Once you have built and tested your app, you can upload the build output to Azure Pipelines or TFS, create and publish a npm or maven package,
or package the build output into a zip file to be deployed to a web application.

# [YAML](#tab/yaml)

::: moniker range="vsts"

### Publish artifacts to Azure Pipelines

To simply upload the entire working directory of files, add the following to your `azure-pipelines.yml` file.

```yaml
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(System.DefaultWorkingDirectory)'
```

To upload a subset of files, first copy the necessary files from the working directory to a staging directory, and then use the **PublishBuildArtifacts** task.

```yaml
- task: CopyFiles@2
  inputs:
    SourceFolder: '$(System.DefaultWorkingDirectory)'
    Contents: |
      **\*.js
      package.json
    TargetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
```

### Publish to a npm registry

To create and publish a npm package, add the following snippet:

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishEndpoint: '<copy and paste the name of the service connection here>'
```

For more information about versioning and publishing npm packages, see [publish npm packages](../targets/npm.md).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, add the following snippet:

```yaml
- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(System.DefaultWorkingDirectory)'
    includeRootFolder: false
```

To publish this archive to a web app, see [Azure Web App deployment](../targets/webapp.md).
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

### Publish artifacts to Azure Pipelines

Use the [Publish build artifacts task](../tasks/utility/publish-build-artifacts.md) to publish files from your build to Azure Pipelines or TFS.

### Publish to a npm registry

To create and publish a npm package, use the [npm task](../tasks/package/npm.md). For more information about versioning and publishing npm packages, see [publish npm packages](../targets/npm.md).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, use the [Archive files task](../tasks/utility/archive-files.md). To publish this archive to a web app, see [Azure Web App deployment](../targets/webapp.md).

---

## Build a container

You can build a Docker container image after you build your project. For more information, see [Docker](docker.md).

<a name="troubleshooting"></a>
## Troubleshooting

If you are able to build your project on your development machine, but are having trouble building it on Azure Pipelines or TFS, explore the following potential causes and corrective actions:

* Check that the versions of **node** and task runner on your development machine match those on the agent.
  You can include command line scripts such as `node --version` in your build pipeline to check what is installed on the agent.
  Either use the **.Node Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
  or run `npm install` commands to update the tools to desired versions.

* If your builds fail intermittently while restoring packages, either npm registry is having issues or there are
  networking problems between the Azure data center and the registry. These are not under our control, and you may
  need to explore whether using Azure Artifacts with npm registry as an upstream source improves the reliability
  of your builds.

## Q&A

### Where can I learn more about Azure Artifacts and the TFS Package Management service?

[Package Management in Azure Artifacts and TFS](../../artifacts/index.md)

### Where can I learn more about tasks?

[Build, release and test tasks](../tasks/index.md)
