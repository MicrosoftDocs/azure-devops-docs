---
title: Build, test, and deploy JavaScript and Node.js apps
description: Automatically build JavaScript and Node.js apps with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 5BB4D9FA-DCCF-4661-B52B-0C42006A2AE5
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.reviewer: vijayma
ms.topic: quickstart
ms.custom: seodec18
ms.date: 10/12/2018
monikerRange: '>= tfs-2017'
---

# Build, test, and deploy JavaScript and Node.js apps

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

This guidance explains how to automatically build JavaScript and Node.js apps.

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to Team Foundation Server (TFS) version 2017.3 and newer.

::: moniker-end

## Example

For a working example of how to build a Node.js app, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

The sample code in this repo is a Node server implemented with the Express.js framework that echoes "Hello world." Tests for the app are written through the Mocha framework.

::: moniker range="azure-devops"

The sample code includes an `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a build pipeline for the sample app.

::: moniker-end

::: moniker range="< azure-devops"

1. After you have the sample code in your own repository, create a build pipeline by using the instructions in [Create your first pipeline](../create-first-pipeline.md) and select the **Empty process** template.

1. Select **Process** under the **Tasks** tab in the build pipeline editor and change the properties as follows:
   * **Agent queue:** `Hosted Ubuntu 1604`

1. Add the following tasks to the pipeline in the specified order:
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

1. Save the pipeline and queue a build to see it in action.

::: moniker-end

Read through the rest of this topic to learn some of the common ways to customize your JavaScript build process.

## Build environment

::: moniker range="azure-devops"

You can use Azure Pipelines to build your JavaScript apps without needing to set up any infrastructure of your own.
Tools that you commonly use to build, test, and run JavaScript apps - like npm, Node, Yarn, and Gulp - are preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use either Windows or Linux agents to run your builds.

For the exact version of Node.js and npm that is preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of these tools on Microsoft-hosted agents, add the **Node Tool Installer** task to the beginning of your process.

::: moniker-end

### Use a specific version of Node.js

::: moniker range="azure-devops"

If you need a version of Node.js and npm that is not already installed on the Microsoft-hosted agent, add the following snippet to your `azure-pipelines.yml` file.

> [!NOTE]
> The hosted agents are regularly updated, and setting up this task will result in spending significant time updating to a newer minor version every time the pipeline is run. Use this task only when you need a specific Node version in your pipeline.

```yaml
- task: NodeTool@0 
  inputs:
    versionSpec: '8.x' # replace this value with the version that you need for your project
```

::: moniker-end

::: moniker range="< azure-devops"

If you need a version of Node.js/npm that is not already installed on the Microsoft-hosted agent:

1. In the build pipeline, select **Tasks**, choose the phase that runs your build tasks, and then select **+** to add a new task to that phase.

1. In the task catalog, find and add the **Node Tool Installer** task.

1. Select the task and specify the version of the Node.js runtime that you want to install.

::: moniker-end

To update just the npm tool, run the `npm i -g npm@version-number` command in your build process.

### Use multiple node versions

You can build and test your app on multiple versions of Node.

::: moniker range="azure-devops"

```yaml
pool:
  vmImage: 'ubuntu-16.04'
strategy:
  matrix:
    node_8_x:
      node_version: 8.x
    node_9_x:
      node_version: 9.x

steps:
- task: NodeTool@0 
  inputs:
    versionSpec: $(node_version)

- script: npm install
```

::: moniker-end

::: moniker range="< azure-devops"

See [multi-configuration execution](../process/phases.md#parallelexec).

::: moniker-end

## Install tools on your build agent

::: moniker range="azure-devops"

If you have defined tools needed for your build as development dependencies in your project's `package.json` or `package-lock.json` file, install these tools along with the rest of your project dependencies through npm. This will install the exact version of the tools defined in the project, isolated from other versions that exist on the build agent.

```yaml
- script: npm install --only=dev
```

Run tools installed this way by using npm's `npx` package runner, which will first look for tools installed this way in its path resolution. The following example calls the `mocha` test runner but will look for the version installed as a dev dependency before using a globally installed (through `npm install -g`) version.

```yaml
- script: npx mocha
```

To install tools that your project needs but that are not set as dev dependencies in `package.json`, call `npm install -g` from a script stage in your pipeline.

The following example installs the latest version of the [Angular CLI](https://cli.angular.io/) by using `npm`. The rest of the pipeline can then use the `ng` tool from other `script` stages.

> [!NOTE]
> On Microsoft-hosted Linux agents, preface the command with `sudo`, like `sudo npm install -g`.

```yaml
- script: npm install -g @angular/cli
```

These tasks will run every time your pipeline runs, so be mindful of the impact that installing tools has on build times. Consider configuring [self-hosted agents](../agents/agents.md#install) with the version of the tools you need if overhead becomes a serious impact to your build performance.

::: moniker-end

::: moniker range="< azure-devops"

Use the [npm](../tasks/package/npm.md) or [command line](../tasks/utility/command-line.md) tasks in your build pipeline to install tools on your build agent.

::: moniker-end

## Dependency management

In your build, use [Yarn](https://yarnpkg.com) or Azure Artifacts/TFS to download packages from the public npm registry, which is a type of private npm registry that you specify in the .npmrc file. 

### npm

You can use NPM in a few ways to download packages for your build:

* Directly run `npm install` in your build pipeline. This is the simplest way to download packages from a registry that does not need any authentication. If your build doesn't need development dependencies on the agent to run, you can speed up build times with the `--only=prod` option to `npm install`.
* Use an [npm task](../tasks/package/npm.md). This is useful when you're using an authenticated registry.
* Use an [npm Authenticate task](../tasks/package/npm-authenticate.md). This is useful when you run `npm install` from inside your task runners - Gulp, Grunt, or Maven.

If you want to specify an npm registry, put the URLs in an `.npmrc` file in your repository.
If your feed is authenticated, manage its credentials by creating an npm service connection on the **Services** tab under **Project Settings**.

::: moniker range="azure-devops"

To install npm packages by using a script in your build pipeline, add the following snippet to `azure-pipelines.yml`.

```yaml
- script: npm install
```

To use a private registry specified in your `.npmrc` file, add the following snippet to `azure-pipelines.yml`.

```yaml
- task: Npm@1
  inputs:
    customEndpoint: <Name of npm service connection>
```

To pass registry credentials to npm commands via task runners such as Gulp, add the following task to `azure-pipelines.yml` before you call the task runner.

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [npm](../tasks/package/npm.md) or [npm Authenticate](../tasks/package/npm-authenticate.md) task in your build pipeline to download and install packages.

::: moniker-end

::: moniker range=">= tfs-2018"

If your builds occasionally fail because of connection issues when you're restoring packages from the npm registry,
you can use Azure Artifacts in conjunction with [upstream sources](../../artifacts/concepts/upstream-sources.md),
and cache the packages. The credentials of the build pipeline are automatically used when you're connecting
to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service**
account.

::: moniker-end

::: moniker range="azure-devops"

If you're using Microsoft-hosted agents, you get a new machine every time you run a build - which means restoring the dependencies every time.
This can take a significant amount of time. To mitigate this, you can use Azure Artifacts or a self-hosted agent. You'll then get the benefit of using the package cache.

::: moniker-end

###  Yarn

::: moniker range="azure-devops"

Use a simple script stage to invoke [Yarn](https://yarnpkg.com) to restore dependencies.  Yarn is available preinstalled on some [Microsoft-hosted agents](../agents/hosted.md). You can install and configure it on self-hosted agents like any other tool.

```yaml
- script: yarn install
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [CLI](../tasks/utility/command-line.md) or [Bash](../tasks/utility/bash.md) task in your pipeline to invoke [Yarn](https://yarnpkg.com).

::: moniker-end

## Run JavaScript compilers

::: moniker range="azure-devops"

Use compilers such as [Babel](https://babeljs.io/) and the [TypeScript](https://www.typescriptlang.org/) `tsc` compiler to convert your source code into versions that are usable by the Node.js runtime or in web browsers.

If you have a [script object](https://docs.npmjs.com/misc/scripts) set up in your project's `package.json` file that runs your compiler, invoke it in your pipeline by using a script task. 

```yaml
- script: npm run compile
```

You can call compilers directly from the pipeline by using the script task. These commands will run from the root of the cloned source-code repository.

```yaml
- script: tsc --target ES6 --strict true --project tsconfigs/production.json
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [npm](../tasks/package/npm.md) task in your pipeline if you have a compile script defined in your project's package.json to build the code. Use the [Bash](../tasks/utility/bash.md) task to compile your code if you don't have a separate script defined in your project configuration.

::: moniker-end

## Run unit tests

::: moniker range="azure-devops"

Configure your pipelines to run your JavaScript tests so that they produce results formatted in the JUnit XML format. You can then publish the results to VSTS easily by using the built-in [Publish Test Results](../tasks/test/publish-test-results.md) task.

If your test framework doesn't support JUnit output out of the box, you'll need to add support through a partner reporting module, such as [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter). You can either update your test script to use the JUnit reporter, or if the reporter supports command-line options, pass those into the task definition.

The following table lists the most commonly used test runners and the reporters that can be used to produce XML results:

| Test runner | Reporters to produce XML reports |
|:---:|:---:|
| mocha | [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter)<br />[mocha-multi-reporters](https://www.npmjs.com/package/mocha-multi-reporters) |
| jasmine | [jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters) |
| jest | [jest-junit](https://www.npmjs.com/package/jest-junit)<br />[jest-junit-reporter](https://www.npmjs.com/package/jest-junit-reporter) |
| karma | [karma-junit-reporter](https://www.npmjs.com/package/karma-junit-reporter) |
| Ava | [tap-xunit](https://github.com/aghassemi/tap-xunit) |

This example uses the [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `mocha test` directly by using a script task. This produces the JUnit XML output at the default location of `./test-results.xml`. 

```yaml
- script: mocha test --reporter mocha-junit-reporter
```

If you have defined a `test` script in your project's package.json file, you can invoke it by using `npm test` just as you would from the command line.

```yaml
- script: npm test
```

### Publish test results

To publish the results, use the [Publish Test Results](../tasks/test/publish-test-results.md) task.

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testRunner: JUnit
    testResultsFiles: '**/TEST-RESULTS.xml'
```

### Publish code coverage results

If your test scripts run a code coverage tool such as [Istanbul](https://istanbul.js.org/), add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results along with your test results. When you do this, you can find coverage metrics in the build summary and download HTML reports for further analysis. The task expects Cobertura reporting output, so ensure that your code coverage tool runs with the necessary options to generate the right output. (For example, Istanbul needs `--report cobertura`.)

```yaml
- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [Publish Test Results](../tasks/test/publish-test-results.md) and [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) tasks in your build pipeline to publish test results along with code coverage results by using Istanbul.
Set the Control Options for the Publish Test Results task to run the task even if a previous task has failed, unless the deployment was canceled.

::: moniker-end

## End-to-end browser testing 

Run tests in headless browsers as part of your pipeline with tools like [Protractor](https://www.protractortest.org) or [Karma](http://karma-runner.github.io/2.0/index.html). Then publish the results for the build to VSTS with these steps: 

1. Install a headless browser testing driver such as headless Chrome or Firefox, or a browser mocking tool such as PhantomJS, on the build agent. 
1. Configure your test framework to use the headless browser/driver option of your choice according to the tool's documentation.
1. Configure your test framework (usually with a reporter plug-in or configuration) to output JUnit-formatted test results.
1. Set up a script task to run any CLI commands needed to start the headless browser instances.
1. Run the end-to-end tests in the pipeline stages along with your unit tests.
1. Publish the results by using the same [Publish Test Results](../tasks/test/publish-test-results.md) task alongside your unit tests.

## Package web apps

::: moniker range="azure-devops"

Package applications to bundle all your application modules with intermediate outputs and dependencies into static assets ready for deployment. Add a pipeline stage after your compilation and tests to run a tool like [Webpack](https://webpack.js.org/) or [ng build](https://github.com/angular/angular-cli/wiki/build) by using the Angular CLI.

The first example calls `webpack`. To have this work, make sure that `webpack` is configured as a development dependency in your package.json project file. This will run `webpack` with the default configuration unless you have a `webpack.config.js` file in the root folder of your project. 

```yaml
- script: webpack
```

The next example uses the [npm](../tasks/package/npm.md) task to call `npm run build` to call the `build` script object defined in the project package.json. Using script objects in your project moves the logic for the build into the source code and out of the of the pipeline.  

```yaml
- script: npm run build
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [CLI](../tasks/utility/command-line.md) or [Bash](../tasks/utility/bash.md) task in your pipeline to invoke your packaging tool, such as `webpack` or  Angular's `ng build`.

::: moniker-end

## JavaScript frameworks

### Angular

For Angular apps, you can include Angular-specific commands such as **ng test**, **ng build**, and **ng e2e**. To use Angular CLI commands in your build pipeline, you need to install the [angular/cli npm package](https://www.npmjs.com/package/@angular/cli) on the build agent.

::: moniker range="azure-devops"

> [!NOTE]
> On Microsoft-hosted Linux agents, preface the command with `sudo`, like `sudo npm install -g`.

```yaml
- script: |
    npm install -g @angular/cli
    npm install
    ng build --prod
```

::: moniker-end

::: moniker range="< azure-devops"

Add the following tasks to your build pipeline:

* **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g @angular/cli`

* **npm**
  * **Command:** `install`

* **bash**
  * **Type:** `inline`
  * **Script:** `ng build --prod`

::: moniker-end

For tests in your build pipeline that require a browser to run (such as the **ng test** command in the starter app, which runs Karma), you need to use a headless browser instead of a standard browser. In the Angular starter app, an easy way to do this is to:

1. Change the  `browsers` entry in your *karma.conf.js* project file from `browsers: ['Chrome']` to `browsers: ['ChromeHeadless']`.

1. Change the `singleRun` entry in your *karma.conf.js* project file from a value of `false` to `true`. This helps make sure that the Karma process stops after it runs.

### Webpack

You can use a webpack configuration file to specify a compiler (such as Babel or TypeScript) to transpile JSX or TypeScript to plain JavaScript, and to bundle your app.

::: moniker range="azure-devops"

```yaml
- script: |
    npm install webpack webpack-cli --save-dev
    npx webpack --config webpack.config.js
```

::: moniker-end

::: moniker range="< azure-devops"

Add the following tasks to your build pipeline:

* **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g webpack webpack-cli --save-dev`

* **bash**
  * **Type:** `inline`
  * **Script:** `npx webpack --config webpack.config.js`

::: moniker-end


### React

All the dependencies for your React app are captured in your *package.json* file. The steps outlined in the earlier example section should work for building and testing a React app.

### Vue

All the dependencies for your Vue app are captured in your *package.json* file. The steps outlined in the earlier example section should work for building and testing a Vue app.


## Build task runners

It's common to use [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/) as a task runner to build and test a JavaScript app.

### Gulp

::: moniker range="azure-devops"

Gulp is preinstalled on Microsoft-hosted agents. To run the `gulp` command in the YAML file:

```yaml
- script: gulp                       # include any additional options that are needed
```

If the steps in your gulpfile.js file require authentication with an npm registry:

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

Add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results to the server. You can find coverage metrics in the build summary, and you can download HTML reports for further analysis. 

```yaml
- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

::: moniker-end

::: moniker range="< azure-devops"

The simplest way to create a build pipeline if your app uses Gulp is to use the **Node.js with gulp** build template when creating the pipeline.
This will automatically add various tasks to invoke Gulp commands and to publish artifacts.
In the task, select **Enable Code Coverage** to enable code coverage by using Istanbul.

::: moniker-end

### Grunt

::: moniker range="azure-devops"

Grunt is preinstalled on Microsoft-hosted agents. To run the grunt command in the YAML file:

```yaml
- script: grunt                      # include any additional options that are needed
```

If the steps in your `Gruntfile.js` file require authentication with a npm registry:

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>

- script: grunt                      # include any additional options that are needed
```

::: moniker-end

::: moniker range="< azure-devops"

The simplest way to create a build pipeline if your app uses Grunt is to use the **Node.js with Grunt** build template when creating the pipeline. This will automatically add various tasks to invoke Gulp commands and to publish artifacts. In the task, select the **Publish to TFS/Team Services** option to publish test results, and select **Enable Code Coverage** to enable code coverage by using Istanbul.

::: moniker-end

## Package and deliver your code

After you have built and tested your app, you can upload the build output to Azure Pipelines or TFS, create and publish an npm or Maven package,
or package the build output into a .zip file to be deployed to a web application.

::: moniker range="azure-devops"

### Publish files to Azure Pipelines

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

### Publish a module to a npm registry

If your project's output is an `npm` module for use by other projects and not a web application, use the `npm` task to publish the module to a local registry or to the public npm registry. You must provide a unique name/version combination each time you publish, so keep this in mind when configuring publishing steps as part of a release or development pipeline. 

The first example assumes that you manage version information (such as through an [npm version](https://docs.npmjs.com/cli/version)) through changes to your `package.json` file in version control. This example uses the script task to publish to the public registry.

```yaml
- script: npm publish
```

The next example publishes to a custom registry defined in your repo's `.npmrc` file. You'll need to set up an [npm service connection](/vsts/pipelines/library/service-endpoints?view=azure-devops#sep-npm) to inject authentication credentials into the connection as the build runs.

```yaml
- task: Npm@1
  inputs:
     command: publish
     publishRegistry: useExternalRegistry
     publishEndpoint: https://my.npmregistry.com
```

The final example publishes the module to an Azure DevOps Services package management feed. 

```yaml
- task: Npm@1
  inputs:
     command: publish
     publishRegistry: useFeed
     publishFeed: https://my.npmregistry.com
```

For more information about versioning and publishing npm packages, see [Publish npm packages](../artifacts/npm.md).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, add the following snippet:

```yaml
- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(System.DefaultWorkingDirectory)'
    includeRootFolder: false
```

To publish this archive to a web app, see [Azure web app deployment](../targets/webapp.md).

::: moniker-end

::: moniker range="< azure-devops"

### Publish artifacts to Azure Pipelines

Use the [Publish Build Artifacts task](../tasks/utility/publish-build-artifacts.md) to publish files from your build to Azure Pipelines or TFS.

### Publish to an npm registry

To create and publish an npm package, use the [npm task](../tasks/package/npm.md). For more information about versioning and publishing npm packages, see [Publish npm packages](../artifacts/npm.md).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, use the [Archive Files task](../tasks/utility/archive-files.md). To publish this archive to a web app, see [Azure Web App deployment](../targets/webapp.md).

::: moniker-end

::: moniker range="azure-devops"

## Build a container

You can build a Docker image and push it to a container registry after you build your project. 

If your application doesn't require orchestration with other containers, use the [Docker](../tasks/build/docker.md) task to build a container with your packaged application code and push it to your Docker registry.

This example builds a Docker image. The `Dockerfile` for the image is located in the root of the source code repo, but you can configure it by using the `dockerFile` input.
The image is not pushed to a Docker registry after it's built.

```yaml
- script: docker build -f Dockerfile -t contoso/myjavascriptapp:$(Build.BuildId)
```

After the Docker image is built, push it to a container registry by using the [Docker](../tasks/build/docker.md) task but with `command` set to `push An Image`. This example pushes to any container registry, including Docker Hub. 

```yaml
- task: Docker@1
  inputs:
     command: push An Image
     containerregistrytype: container Registry
     dockerRegistryEndpoint: registry.contoso.org
     imageName: contoso/myjavasriptcontainer:v1.0.0
```

For more information, see the [Docker pipeline guide](docker.md).

::: moniker-end

<a name="troubleshooting"></a>
## Troubleshooting

If you can build your project on your development machine but are having trouble building it on Azure Pipelines or TFS, explore the following potential causes and corrective actions:

* Check that the versions of **Node.js** and the task runner on your development machine match those on the agent.
  You can include command-line scripts such as `node --version` in your build pipeline to check what is installed on the agent.
  Either use the **Node Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
  or run `npm install` commands to update the tools to desired versions.

* If your builds fail intermittently while you're restoring packages, either the npm registry is having issues or there are
  networking problems between the Azure datacenter and the registry. These factors are not under our control, and you might
  need to explore whether using Azure Artifacts with an npm registry as an upstream source improves the reliability
  of your builds.

## Q&A

### Where can I learn more about Azure Artifacts and the TFS Package Management service?

[Package Management in Azure Artifacts and TFS](../../artifacts/index.md)

### Where can I learn more about tasks?

[Build, release, and test tasks](../tasks/index.md)
