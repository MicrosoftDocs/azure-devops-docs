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

For a working example of how to build a Node.js app, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

The sample code in this repo is a Node server implemented with Express JS framework that echoes "Hello world". Tests for the app are written using mocha framework.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The sample code includes an `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample app.

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

::: moniker range="< vsts"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure Pipelines account. Then change the selector in the upper-left corner of this page from Team Foundation Server to **Azure DevOps**.
::: moniker-end

* After you have the sample code in your own repository, create a build pipeline using the instructions in [Your first build and release](../get-started-designer.md) and select the **Empty process** template.

* Select **Process** under the **Tasks** tab in the build pipeline editor and change the properties as follows:
  * **Agent queue:** `Hosted Ubuntu 1604`

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
Tools that you commonly use to build, test, and run JavaScript apps - npm, node, yarn, gulp, etc. - are pre-installed on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can either use Windows or Linux agents to run your builds.

For the exact version of Node.js and npm pre-installed, refer to [Microsoft-hosted agents](../agents/hosted.md). To install a specific version of these tools on Microsoft hosted agents, add the **Node Tool Installer** task to the beginning of your process.

::: moniker-end

### Use specific version of Node.js

# [YAML](#tab/yaml)

::: moniker range="vsts"
If you need a version of Node.js and npm that is not already installed on the Microsoft-hosted agent, add the following snippet to your `azure-pipelines.yml` file.

> [!NOTE]
> The hosted agents are regularly updated, and setting this task up will result in spending significant time updating to a newer minor version every time the pipeline is run. Only use this task only when you need a specific Node version in your pipeline.

```yaml
- task: NodeTool@0
  inputs:
    versionSpec: '8.x' # replace this value with the version that you need for your project
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

### Use multiple node versions

You can build and test your app on multiple versions of Node.

# [YAML](#tab/yaml)

::: moniker range="vsts"
```yaml
pool:
  vmImage: 'Ubuntu 16.04'
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

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

See [multi-configuration execution](../process/phases.md#parallelexec).

---

## Install tools on your build agent

# [YAML](#tab/yaml)

::: moniker range="vsts"

If you have defined tools needed for your build as development dependencies in your project `package.json` or `package-lock.json`, install these tools along with the rest of your project dependencies through npm. This will install the exact version of the tools defined in the project, isolated from other versions that exist on the build agent.

```yaml
- script: npm install --only=dev
```

Run tools installed this way using npm's `npx` package runner, which will first look for tools installed this way in its path resolution. The following example calls the `mocha` test runner but will look for the version installed as a dev dependnecy first before using a globally installed ( through `npm install -g`) version.

```yaml
- script: npx mocha
```

To install tools needed by your project but not set as dev dependencies in your `package.json`, just call `npm install -g` from a script stage in your pipeline.

The following example installs the latest version of the [Angular CLI](https://cli.angular.io/) using `npm`. The rest of the pipeline can then use the `ng` tool from other `script` stages.

```yaml
- script: npm install -g @angular/cli
```

These tasks will be run every time your pipeline executes, so be mindful of the impact installing tools has on build times. Consider configuring [self-hosted agents](../agents/agents.md#install) configured with the version of the tools you need if overhead becomes a serious impact to your build performance.

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end


# [Designer](#tab/designer)

Use the [npm](../tasks/package/npm.md) or [command line](../tasks/utility/command-line.md) tasks in your build pipeline to install tools onto your build agent.

---

## Dependency management

As part of your build, you can download packages from the public npm registry, a private npm registry that you specify in .npmrc file, using [yarn](https://yarnpkg.com) or from Azure Artifacts/TFS.

### npm

There are many ways you can download packages for use in your build using npm.

* Directly run `npm install` in your build pipeline. This is the simplest way to download packages from a registry that does not need any authentication. If your build doesn't need development dependencies on the agent to run, you can speed up build times with the `--only=prod` option to `npm install`.
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

###  yarn

# [YAML](#tab/yaml)

::: moniker range="vsts"

Use a simple script stage to invoke [yarn](https://yarnpkg.com) to restore dependencies.  Yarn is available preinstalled on some [Microsoft-hosted agents](../agents/hosted.md) and can be installed and configured on self-hosted agents like any other tool.

```yaml
- script: yarn install
```

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Use the [cli](../tasks/utility/command-line.md) or [bash](../tasks/utility/bash.md) task in your pipeline to invoke [yarn](https://yarnpkg.com).

---

## Run Javascript compilers

# [YAML](#tab/yaml)

::: moniker range="vsts"

Use compilers such as [Babel](https://babeljs.io/) and the [TypeScript](https://www.typescriptlang.org/) `tsc` compiler to covert your source code into versions that are usable by the Node.js runtime or in web browsers.

If you have a [script object](https://docs.npmjs.com/misc/scripts) set up in your project's `package.json` that runs your compiler, invoke it in your pipeline using a script task. 

```yaml
- script: npm run compile
```

You can call compilers directly from the pipeline using the script task. These commands will run from root of the cloned source code repository.

```yaml
- script: tsc --target ES6 --strict true --project tsconfigs/production.json
```

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Use the [npm](../tasks/package/npm.md) task in your pipeline if you have a compile script defined in your project's package.json to build the code. Use the [bash](../tasks/utility/bash.md) task to compile your code if you do not have a separate script defined in your project configuration.

---

## Run unit tests

# [YAML](#tab/yaml)

::: moniker range="vsts"

Configure your pipelines to run your JavaScript tests so that they produce results formatted in the JUnit XML format. You can then publish the results to VSTS easily using the built-in [Publish Test Results](../tasks/test/publish-test-results.md) task.

If your testing framework doesn't support JUnit output out of the box, you'll need to add support through a third party reporting module, such as [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter). You can either update your testing script to use the JUnit reporter, or if the reporter supports command line options you can pass those into the task definintion.

This example uses the [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `mocha test` directly using a script task. This produces the JUnit XML output at the default location of `./test-results.xml`. 

```yaml
- script: mocha test --reporter mocha-junit-reporter
```

If you have defined a `test` script in your package.json, you can invoke it using `npm test` just as you would from the command line.

```yaml
- script: npm test
```

### Publish test results

To publish the results, use the [Publish Test Results](../tasks/test/publish-test-results.md) task.

```yaml
- task: PublishTestResults@2
  inputs:
    testRunner: JUnit
    testResultsFile: ./test-results.xml
```

### Publish code coverage results

If your testing scripts run a code coverage tool such as [Instanbul](https://istanbul.js.org/), add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results along with your test results. When you do this, coverage metrics can be seen in the build summary and HTML reports can be downloaded for further analysis. The task expects Cobertura reporting output , so ensure that your code coverage tool runs with the necessary options (for example, Instanbul needs `--report cobertura`) to generate the right output.

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

Use the [Publish Test Results](../tasks/test/publish-test-results.md) and [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) tasks in your build pipeline to publish test results along with code coverage results using Istanbul.

---

## End to end browser testing 

Run tests in headless browsers as part of your pipeline with tools like [Protractor](https://www.protractortest.org) or [Karma](http://karma-runner.github.io/2.0/index.html), then publish the results for the build to VSTS with these steps: 

1. Install a headless browser testing driver such as headless Chrome or Firefox, or a browser mocking tool such as PhantomJS on the build agent. 
2. Configure your testing framework to use the headless browser/driver option of your choice according to the tool documentation.
3. Configure your testing framework (usually with a reporter plugin or configuration) to output JUnit formatted test results.
4. Set up a script task to run any CLI commands needed to start the headless browser instances.
5. Run the end to end tests in the pipeline stages along with your unit tests.
6. Publish the results using the same [Publish Test Results](../tasks/test/publish-test-results.md) task alongside your unit tests.

## Package web apps

# [YAML](#tab/yaml)

::: moniker range="vsts"

Package applications to bundle all your application modules with intermediate outputs and dependencies into static assets ready for deployment. Add a pipeline stage after your compilation and tests to run a tool like [Webpack](https://webpack.js.org/) or [ng build](https://github.com/angular/angular-cli/wiki/build) using the Angular CLI.

The first example calls `webpack`. To have this work, you'll need to make sure that `webpack` is configuired as a development dependency in your package.json project file. This will run `webpack` with default configuration unless you have a `webpack.config.js` file in the root folder of your project. 

```yaml
- script: webpack
```

The next example uses the [npm](../tasks/package/npm.md) task to call `npm run build` to call the `build` script object defined in the project package.json. Using script objects in your project moves the logic for the build into the source code and out of the of the pipeline.  

```yaml
- script: npm run build
```

::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Use the [cli](../tasks/utility/command-line.md) or [bash](../tasks/utility/bash.md) task in your pipeline to invoke your packaging tool, such as `webpack` or  AngularJS' `ng build`.

---

## JavaScript frameworks

### AngularJS

For AngularJS apps, you can include Angular-specific commands such as **ng test**, **ng build**, and **ng e2e**. To use AngularJS CLI commands in your build pipeline, you need to install the [angular/cli npm package](https://www.npmjs.com/package/@angular/cli) on the build agent.

# [YAML](#tab/yaml)

::: moniker range="vsts"
```yaml
- script: |
    npm install -g @angular/cli
    npm install
    ng build --prod
```
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Add the following tasks to your build pipeline:

* **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g @angular/cli`

* **npm**
  * **Command:** `install`

* **bash**
  * **Type:** `inline`
  * **Script:** `ng build --prod`

---

For tests in your build pipeline that require a browser to run (such as the **ng test** command in the starter app, which runs karma), you need to use a headless browser instead of a standard browser. In the AngularJS starter app, an easy way to do this is to:

1. Change the  `browsers` entry in your *karma.conf.js* project file from `browsers: ['Chrome']` to `browsers: ['ChromeHeadless']`.

1. Change the `singleRun` entry in your *karma.conf.js* project file from a value of `false` to `true`. This helps make sure that the karma process exits after running.

### Webpack

You can use a webpack configuration file to specify a compiler (such as Babel or TypeScript) to transpile JSX or TypeScript to plain JavaScript, and to bundle your app.

# [YAML](#tab/yaml)

::: moniker range="vsts"
```yaml
- script: |
    npm install webpack webpack-cli --save-dev
    npx webpack --config webpack.config.js
```
::: moniker-end

::: moniker range="< vsts"
YAML builds are not yet available on TFS.
::: moniker-end

# [Designer](#tab/designer)

Add the following tasks to your build pipeline:

* **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g webpack webpack-cli --save-dev`

* **bash**
  * **Type:** `inline`
  * **Script:** `npx webpacj --config webpack.config.js`

---

### React

All the dependencies for your React app are captured in your *package.json* file, and hence the steps outlined in the example section above should suffice for building and testing a React app.

### Vue

All the dependencies for your Vue app are captured in your *package.json* file, and hence the steps outlined in the example section above should suffice for building and testing a Vue app.


## Build task runners

It is common to use [gulp](https://gulpjs.com/) or [grunt](https://gruntjs.com/) as a task runner to build and test a JavaScript app.

### Gulp

# [YAML](#tab/yaml)

::: moniker range="vsts"

Gulp is pre-installed on Microsoft-hosted agents. To run the gulp command in the YAML file:

```yaml
- script: gulp                       # include any additional options that are needed
```

If the steps in your gulpfile.js require authentication with a npm registry:

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

The simplest way to create a build pipeline if your app uses gulp is to use the **Node.js with gulp** build template when creating the pipeline.
This will automatically add various tasks to invoke gulp commands and to publish artifacts.
In the task, select **Enable Code Coverage** to enable code coverage using istanbul.

---

### Grunt

# [YAML](#tab/yaml)
::: moniker range="vsts"

Grunt is pre-installed on Microsoft-hosted agents. To run the grunt command in the YAML file:

```yaml
- script: grunt                      # include any additional options that are needed
```

If the steps in your `Gruntfile.js` require authentication with a npm registry:

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

The simplest way to create a build pipeline if your app uses gulp is to use the **Node.js with Grunt** build template when creating the pipeline. This will automatically add various tasks to invoke gulp commands and to publish artifacts. In the task, select **Publish to TFS/Team Services** option to publish test results and **Enable Code Coverage** to enable Code Coverage using istanbul.

---

## Package and deliver your code

Once you have built and tested your app, you can upload the build output to Azure Pipelines or TFS, create and publish a npm or Maven package,
or package the build output into a zip file to be deployed to a web application.

# [YAML](#tab/yaml)

::: moniker range="vsts"

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

If your project's output is a `npm` module for use by other projects and not a web application, use the `npm` task to publish the module to a local or to the public npm registry. You must provide a unique name and version combination each time you publish, so keep this in mind when configuring publish steps as part of a release or development pipeline. 

The first example assumes you manage version information (such as through [npm version](https://docs.npmjs.com/cli/version) ) through changes to your `package.json` file in version control and uses the script task to publish to the public registry.

```yaml
- script: npm publish
```

The next example publishes to a custom registry defined in your repo's `.npmrc` file. You'll need to set up a [npm service connection](/vsts/pipelines/library/service-endpoints?view=vsts#sep-npm) to inject authentication credentials into the connection as the build runs.

```yaml
- task: Npm@1
  inputs:
     command: publish
     publishRegistry: useExternalRegistry
     publishEndpoint: https://my.npmregistry.com
```

The final example publishes the module to a VSTS package management feed. 

```yaml
- task: Npm@1
  inputs:
     command: publish
     publishRegistry: useFeed
     publishFeed: https://my.npmregistry.com
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

You can build a Docker image and push it to a container registry after you build your project. 


If your application doesn't require orchestration with other containers, use the [Docker](/vsts/pipelines/tasks/build/docker?view=vsts) task to build a container with your packaged application code and push it to your Docker registry.

This example builds a Docker image . The `Dockerfile` for the image is located in the root of the source code repo, but can be configured using the `dockerFile` input.
The image is not pushed to a Docker registry once it's built.

```yaml
- script: docker build -f Dockerfile -t contoso/myjavascriptapp:$(Build.BuildId)
```

Once built, push the Docker image to a container registry by using the [Docker](/vsts/pipelines/tasks/build/docker?view=vsts) task but with `command` set to `push An Image`. This example pushes to any container registry, including Docker Hub. 

```yaml
- task: Docker@1
  inputs:
     command: push An Image
     containerregistrytype: container Registry
     dockerRegistryEndpoint: registry.contoso.org
     imageName: contoso/myjavasriptcontainer:v1.0.0
```

For more information, see the [Docker pipeline guide](docker.md).

<a name="troubleshooting"></a>
## Troubleshooting

If you are able to build your project on your development machine, but are having trouble building it on Azure Pipelines or TFS, explore the following potential causes and corrective actions:

* Check that the versions of **Node.js** and task runner on your development machine match those on the agent.
  You can include command line scripts such as `node --version` in your build pipeline to check what is installed on the agent.
  Either use the **Node Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
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

