---
title: Customize JavaScript for Azure Pipelines
description:  Customize how you use JavaScript with Azure Pipelines
ms.topic: conceptual
ms.custom: seodec18, seo-javascript-september2019, contperf-fy20q4, devx-track-js, freshness-fy22q2, contperf-fy22q2
ms.date: 06/20/2022
monikerRange: '<= azure-devops'
---


# Customize JavaScript for Azure Pipelines

You can use Azure Pipelines to build your JavaScript apps without having to set up any infrastructure of your own. Tools that you commonly use to build, test, and run JavaScript apps - like npm, Node, Yarn, and Gulp - get pre-installed on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. 

For the version of Node.js and npm that is preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of these tools on Microsoft-hosted agents, add the **Node Tool Installer** task to the beginning of your process. You can also use a [self-hosted](../agents/agents.md) agent.

To create your first pipeline with JavaScript, see the [JavaScript quickstart](javascript.md).

### Use a specific version of Node.js

::: moniker range=">=azure-devops-2020"

If you need a version of Node.js and npm that isn't already installed on the Microsoft-hosted agent, use the [Node tool installer task](/azure/devops/pipelines/tasks/reference/node-tool-v0). Add the following snippet to your `azure-pipelines.yml` file.

> [!NOTE]
> The hosted agents are regularly updated, and setting up this task results in spending significant time updating to a newer minor version every time the pipeline is run. Use this task only when you need a specific Node version in your pipeline.

```yaml
- task: NodeTool@0 
  inputs:
    versionSpec: '16.x' # replace this value with the version that you need for your project
```

::: moniker-end

::: moniker range="< azure-devops"

If you need a version of Node.js/npm that isn't already installed on the agent:

1. In the pipeline, select **Tasks**, choose the phase that runs your build tasks, and then select **+** to add a new task to that phase.

2. In the task catalog, find and add the **Node Tool Installer** task.

3. Select the task and specify the version of the Node.js runtime that you want to install.

::: moniker-end

To update just the npm tool, run the `npm i -g npm@version-number` command in your build process.

### Use multiple node versions

You can build and test your app on multiple versions of Node with the [Node tool installer task](/azure/devops/pipelines/tasks/reference/node-tool-v0).

::: moniker range=">=azure-devops-2020"

```yaml
pool:
  vmImage: 'ubuntu-latest'
strategy:
  matrix:
    node_16_x:
      node_version: 16.x
    node_13_x:
      node_version: 18.x

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

::: moniker range=">=azure-devops-2020"

If you have tools that are development dependencies in your project `package.json` or `package-lock.json` file, install your tools and dependencies through npm. The exact version of the tools gets defined in the project, isolated from other versions that exist on the build agent.

Use a [script](../scripts/cross-platform-scripting.md) or the [npm task](/azure/devops/pipelines/tasks/reference/npm-v1). 

### Use a script to install with package.json

```yaml
- script: npm install --only=dev
```

### Use the npm task to install with package.json

```yaml
- task: Npm@1
  inputs:
     command: 'install'
```

Run tools installed this way by using the npm `npx` package runner, which detects tools installed this way in its path resolution. The following example calls the `mocha` test runner but looks for the version installed as a development dependency before using a globally installed (through `npm install -g`) version.

```yaml
- script: npx mocha
```

To install tools that your project needs but that aren't set as development dependencies in `package.json`, call `npm install -g` from a script stage in your pipeline.

The following example installs the latest version of the [Angular CLI](https://cli.angular.io/) by using `npm`. The rest of the pipeline can then use the `ng` tool from other `script` stages.

> [!NOTE]
> On Microsoft-hosted Linux agents, preface the command with `sudo`, like `sudo npm install -g`.

```yaml
- script: npm install -g @angular/cli
```

> [!TIP]
> These tasks run every time your pipeline runs, so be mindful of the impact that installing tools has on build times. Consider configuring [self-hosted agents](../agents/agents.md#install) with the version of the tools you need if overhead becomes a serious impact to your build performance.

::: moniker-end

::: moniker range="< azure-devops"

Use the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) or [command-line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) tasks in your pipeline to install tools on your build agent.

::: moniker-end

## Manage dependencies

In your build, use [Yarn](https://yarnpkg.com) or Azure Artifacts to download packages from the public npm registry. This registry is a type of private npm registry that you specify in the .npmrc file. 

### Use npm

You can use npm in the following ways to download packages for your build:

* Directly run `npm install` in your pipeline, as it's the simplest way to download packages from a registry without authentication. If your build doesn't need development dependencies on the agent to run, you can speed up build times with the `--only=prod` option to `npm install`.
* Use an [npm task](/azure/devops/pipelines/tasks/reference/npm-v1). This task is useful when you're using an authenticated registry.
* Use an [npm Authenticate task](/azure/devops/pipelines/tasks/reference/npm-authenticate-v0). This task is useful when you run `npm install` from inside your task runners - Gulp, Grunt, or Maven.

If you want to specify an npm registry, put the URLs in an `.npmrc` file in your repository.
If your feed gets authenticated, create an npm service connection on the **Services** tab in **Project settings** to manage its credentials.

::: moniker range=">=azure-devops-2020"

To install npm packages with a script in your pipeline, add the following snippet to `azure-pipelines.yml`.

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

Use the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) or [npm authenticate](/azure/devops/pipelines/tasks/reference/npm-authenticate-v0) task in your pipeline to download and install packages.

::: moniker-end

::: moniker range=">= tfs-2018"

If your builds occasionally fail because of connection issues when you restore packages from the npm registry,
you can use Azure Artifacts with [upstream sources](../../artifacts/concepts/upstream-sources.md),
and cache the packages. The credentials of the pipeline automatically get used when you connect
to Azure Artifacts. These credentials are typically derived from the **Project Collection Build Service**
account.

::: moniker-end

::: moniker range=">=azure-devops-2020"

If you're using [Microsoft-hosted agents](../agents/hosted.md), you get a new machine every time you run a build - which means restoring the dependencies every time, which can take a significant amount of time. To mitigate, you can use Azure Artifacts or a self-hosted agent - then you get the benefit of using the package cache.

::: moniker-end

###  Use Yarn

::: moniker range=">=azure-devops-2020"

Use a script stage to invoke [Yarn](https://yarnpkg.com) to restore dependencies.  Yarn gets preinstalled on some [Microsoft-hosted agents](../agents/hosted.md). You can install and configure it on self-hosted agents like any other tool.

```yaml
- script: yarn install
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [CLI](/azure/devops/pipelines/tasks/reference/cmd-line-v2) or [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task in your pipeline to invoke [Yarn](https://yarnpkg.com).

::: moniker-end

## Run JavaScript compilers

::: moniker range=">=azure-devops-2020"

Use compilers such as [Babel](https://babeljs.io/) and the [TypeScript](https://www.typescriptlang.org/) `tsc` compiler to convert your source code into versions usable by the Node.js runtime or in web browsers.

If you have a [script object](https://docs.npmjs.com/misc/scripts) set up in your project `package.json` file that runs your compiler, invoke it in your pipeline by using a script task. 

```yaml
- script: npm run compile
```

You can call compilers directly from the pipeline by using the script task. These commands run from the root of the cloned source-code repository.

```yaml
- script: tsc --target ES6 --strict true --project tsconfigs/production.json
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) task in your pipeline if you have a compile script defined in your project package.json to build the code. Use the [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task to compile your code if you don't have a separate script defined in your project configuration.

::: moniker-end

## Run unit tests

::: moniker range=">=azure-devops-2020"

Configure your pipelines to run your JavaScript tests so that they produce results formatted in the JUnit XML format. You can then publish the results using the built-in [publish test results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task.

If your test framework doesn't support JUnit output, add support through a partner reporting module, such as [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter). You can either update your test script to use the JUnit reporter, or if the reporter supports command-line options, pass those options into the task definition.

The following table lists the most commonly used test runners and the reporters that can be used to produce XML results:

| Test runner | Reporters to produce XML reports |
|:---:|:---:|
| mocha | [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter)<br />[cypress-multi-reporters](https://www.npmjs.com/package/cypress-multi-reporters) |
| jasmine | [jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters) |
| jest | [jest-junit](https://www.npmjs.com/package/jest-junit)<br />[jest-junit-reporter](https://www.npmjs.com/package/jest-junit-reporter) |
| karma | [karma-junit-reporter](https://karma-runner.github.io) |
| Ava | [tap-xunit](https://github.com/aghassemi/tap-xunit) |

The following example uses the [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `mocha test` directly by using a script. This script produces the JUnit XML output at the default location of `./test-results.xml`. 

```yaml
- script: mocha test --reporter mocha-junit-reporter
```

If you defined a `test` script in your project package.json file, you can invoke it by using `npm test`.

```yaml
- script: npm test
```

### Publish test results

To publish the results, use the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task.

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testRunner: JUnit
    testResultsFiles: '**/test-results.xml'
```

### Publish code coverage results

If your test scripts run a code coverage tool, such as [Istanbul](https://github.com/istanbuljs), add the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) task. When you do so, you can find coverage metrics in the build summary and download HTML reports for further analysis. The task expects Cobertura or JaCoCo reporting output, so ensure that your code coverage tool runs with the necessary options to generate the right output. For example, `--report cobertura`.

The following example uses [nyc](https://github.com/istanbuljs/nyc), the Istanbul command-line interface, along with [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `npm test` command.

```yaml
- script: |
    nyc --reporter=cobertura --reporter=html \
    npm test -- --reporter mocha-junit-reporter --reporter-options mochaFile=./test-results.xml
  displayName: 'Build code coverage report'

- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura # or JaCoCo
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) and [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) tasks in your pipeline to publish test results along with code coverage results by using Istanbul.

Set the Control Options for the Publish Test Results task to run the task even if a previous task has failed, unless the deployment was canceled.

::: moniker-end

## Test browser end-to-end 

Run tests in headless browsers as part of your pipeline with tools like [Protractor](https://www.protractortest.org) or [Karma](https://karma-runner.github.io/2.0/index.html). Then publish the results for the build to Azure DevOps with the following steps: 

1. Install a headless browser testing driver, such as headless Chrome or Firefox, or a browser-mocking tool such as PhantomJS, on the build agent. 
1. Configure your test framework to use the headless browser/driver option of your choice according to the tool's documentation.
1. Configure your test framework (usually with a reporter plug-in or configuration) to output JUnit-formatted test results.
1. Set up a script task to run any CLI commands needed to start the headless browser instances.
1. Run the end-to-end tests in the pipeline stages along with your unit tests.
1. Publish the results by using the same [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task alongside your unit tests.

## Package web apps

::: moniker range=">=azure-devops-2020"

Package applications to bundle all your application modules with intermediate outputs and dependencies into static assets ready for deployment. Add a pipeline stage after your compilation and tests to run a tool like [webpack](https://webpack.js.org/) or [ng build](https://github.com/angular/angular-cli/wiki/build) by using the Angular CLI.

The first example calls `webpack`. To have this work, make sure that `webpack` is configured as a development dependency in your package.json project file. This runs `webpack` with the default configuration unless you have a `webpack.config.js` file in the root folder of your project. 

```yaml
- script: webpack
```

The next example uses the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) task to call `npm run build` to call the `build` script object defined in the project package.json. Using script objects in your project moves the logic for the build into the source code and out of the pipeline.  

```yaml
- script: npm run build
```

::: moniker-end

::: moniker range="< azure-devops"

Use the [CLI](/azure/devops/pipelines/tasks/reference/cmd-line-v2) or [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task in your pipeline to invoke your packaging tool, such as `webpack` or  Angular's `ng build`.

::: moniker-end

## Implement JavaScript frameworks

### Angular

For Angular apps, you can include Angular-specific commands such as **ng test**, **ng build**, and **ng e2e**. To use Angular CLI commands in your pipeline, install the [angular/cli npm package](https://www.npmjs.com/package/@angular/cli) on the build agent.

::: moniker range=">=azure-devops-2020"

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

Add the following tasks to your pipeline:

* **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g @angular/cli`

* **npm**
  * **Command:** `install`

* **bash**
  * **Type:** `inline`
  * **Script:** `ng build --prod`

::: moniker-end

For tests in your pipeline that require a browser to run, such as the **ng test** command in the starter app, which runs Karma, use a headless browser instead of a standard browser. In the Angular starter app:

1. Change the  `browsers` entry in your *karma.conf.js* project file from `browsers: ['Chrome']` to `browsers: ['ChromeHeadless']`.

2. Change the `singleRun` entry in your *karma.conf.js* project file from a value of `false` to `true`. This change helps make sure that the Karma process stops after it runs.

### React and Vue

All the dependencies for your React and Vue apps are captured in your *package.json* file. Your *azure-pipelines.yml* file contains the standard Node.js script:

::: moniker range=">=azure-devops-2020"

```yaml
- script: |
    npm install
  displayName: 'npm install'

- script: |
    npm run build
  displayName: 'npm build'
```

::: moniker-end

The build files are in a new folder, `dist` (for Vue) or `build` (for React). This snippet builds an artifact, `www`, that is ready for release. It uses the [Node Installer](/azure/devops/pipelines/tasks/reference/node-tool-v0), [Copy File](/azure/devops/pipelines/tasks/reference/copy-files-v2)s, and [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks. 

::: moniker range=">=azure-devops-2020"

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

- task: CopyFiles@2
  inputs:
    Contents: 'build/**' # Pull the build directory (React)
    TargetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  inputs: 
    PathtoPublish: $(Build.ArtifactStagingDirectory) # dist or build files
    ArtifactName: 'www' # output artifact named www
```

::: moniker-end

To release, point your release task to the `dist` or `build` artifact and use the [Azure Web App Deploy task](../targets/webapp.md). 

### Webpack

You can use a webpack configuration file to specify a compiler, such as Babel or TypeScript, to transpile JSX or TypeScript to plain JavaScript, and to bundle your app.

::: moniker range=">=azure-devops-2020"

```yaml
- script: |
    npm install webpack webpack-cli --save-dev
    npx webpack --config webpack.config.js
```

::: moniker-end

::: moniker range="< azure-devops"

Add the following tasks to your pipeline:

* **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g webpack webpack-cli --save-dev`

* **bash**
  * **Type:** `inline`
  * **Script:** `npx webpack --config webpack.config.js`

::: moniker-end


## Build task runners

It's common to use [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/) as a task runner to build and test a JavaScript app.

### Gulp

::: moniker range=">=azure-devops-2020"

Gulp gets preinstalled on Microsoft-hosted agents. Run the `gulp` command in the YAML file:

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

Add the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task to publish JUnit or xUnit test results to the server.

```yaml
- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/TEST-RESULTS.xml'
    testRunTitle: 'Test results for JavaScript using gulp'
```

Add the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) task to publish code coverage results to the server. You can find coverage metrics in the build summary, and you can download HTML reports for further analysis. 

```yaml
- task: PublishCodeCoverageResults@1
  inputs: 
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

::: moniker-end

::: moniker range="< azure-devops"

The simplest way to create a pipeline if your app uses Gulp is to use the **Node.js with gulp** build template when you create the pipeline. This template automatically adds various tasks to invoke Gulp commands and to publish artifacts.
In the task, select **Enable Code Coverage** to enable code coverage by using Istanbul.

::: moniker-end

### Grunt

::: moniker range=">=azure-devops-2020"

Grunt gets preinstalled on Microsoft-hosted agents. To run the grunt command in the YAML file:

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

The simplest way to create a pipeline if your app uses Grunt is to use the **Node.js with Grunt** build template when you create the pipeline. This automatically adds various tasks to invoke Gulp commands and to publish artifacts. In the task, select the **Publish to TFS/Team Services** option to publish test results, and select **Enable Code Coverage** to enable code coverage by using Istanbul.

::: moniker-end

## Package and deliver your code

After you've built and tested your app, you can upload the build output to Azure Pipelines, create and publish an npm or Maven package, or package the build output into a .zip file for deployment to a web application.

::: moniker range=">=azure-devops-2020"

### Publish files to Azure Pipelines

To upload the entire working directory of files, use the [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) task and add the following to your `azure-pipelines.yml` file.

```yaml
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(System.DefaultWorkingDirectory)'
```

To upload a subset of files, first copy the necessary files from the working directory to a staging directory with the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) task, and then use the [Publish Build Artifacts task](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1).

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

### Publish a module to an npm registry

If your project's output is an `npm` module for use by other projects and not a web application, use the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) task to publish the module to a local registry or to the public npm registry. Provide a unique name/version combination each time you publish. 

#### Examples

The first example assumes that you manage version information (such as through an [npm version](https://docs.npmjs.com/cli/version)) through changes to your `package.json` file in version control. The following example uses the script task to publish to the public registry.

```yaml
- script: npm publish
```

The next example publishes to a custom registry defined in your repo's `.npmrc` file. Set up an [npm service connection](/azure/devops/pipelines/library/service-endpoints#npm-service-connection) to inject authentication credentials into the connection as the build runs.

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

For more information about versioning and publishing npm packages, see [Publish npm packages](../artifacts/npm.md) and [How can I version my npm packages as part of the build process?](#q-how-can-i-version-my-npm-packages-as-part-of-the-build-process).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, use the [Archive Files](/azure/devops/pipelines/tasks/reference/archive-files-v2) task:

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

Use the [Publish Build Artifacts task](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) to publish files from your build to Azure Pipelines.

### Publish to an npm registry

To create and publish an npm package, use the [npm task](/azure/devops/pipelines/tasks/reference/npm-v1). For more information about versioning and publishing npm packages, see [Publish npm packages](../artifacts/npm.md).

### Deploy a web app

To create a .zip file archive that is ready for publishing to a web app, use the [Archive Files task](/azure/devops/pipelines/tasks/reference/archive-files-v2). To publish this archive to a web app, see [Azure Web App deployment](../targets/webapp.md).

::: moniker-end

::: moniker range=">=azure-devops-2020"

## Build and push image to container registry

Once your source code builds successfully and your unit tests are in place and successful, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).

::: moniker-end

<a name="troubleshooting"></a>

## Troubleshoot

If you can build your project on your development machine but are having trouble building it on Azure Pipelines, explore the following potential causes and corrective actions:

* Check that the versions of **Node.js** and the task runner on your development machine match those on the agent.
  You can include command-line scripts such as `node --version` in your pipeline to check what is installed on the agent.
  Either use the **Node Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
  or run `npm install` commands to update the tools to wanted versions.

* If your builds fail intermittently while you restore packages, either the npm registry has issues or there are
  networking problems between the Azure data center and the registry. We can't control these factors. Explore whether using Azure Artifacts with an npm registry as an upstream source improves the reliability of your builds.

* If you're using [`nvm`](https://github.com/nvm-sh/nvm) to manage different versions of Node.js, consider switching to the [**Node Tool Installer**](#use-a-specific-version-of-nodejs) task instead. (`nvm` is installed for historical reasons on the macOS image.) `nvm` manages multiple Node.js versions by adding shell aliases and altering `PATH`, which interacts poorly with the way [Azure Pipelines runs each task in a new process](../process/runs.md).

  The **Node Tool Installer** task handles this model correctly. However, if your work requires the use of `nvm`, you can add the following script to the beginning of each pipeline:

  ```yaml
  steps:
  - bash: |
      NODE_VERSION=16  # or whatever your preferred version is
      npm config delete prefix  # avoid a warning
      . ${NVM_DIR}/nvm.sh
      nvm use ${NODE_VERSION}
      nvm alias default ${NODE_VERSION}
      VERSION_PATH="$(nvm_version_path ${NODE_VERSION})"
      echo "##vso[task.prependPath]$VERSION_PATH"
  ```

  Then, `node` and other command-line tools work for the rest of the pipeline job. In each step where you use the `nvm` command, start the script with the following code:

  ```yaml
  - bash: |
      . ${NVM_DIR}/nvm.sh
      nvm <command>
  ```

## FAQ

### Q: Where can I learn more about Azure Artifacts and the Package Management service?

A: [Package Management in Azure Artifacts](../../artifacts/index.yml)

### Q: Where can I learn more about tasks?

A: [Build, release, and test tasks](../tasks/index.md)

### Q: How do I fix a pipeline failure with the message 'FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory'?

A: This failure type happens when the Node.js package has exceeded the memory usage limit. To resolve the issue, add a variable like `NODE_OPTIONS` and assign it a value of ***--max_old_space_size=16384***.

### Q: How can I version my npm packages as part of the build process?

A: One option is to use a combination of version control and [npm version](https://docs.npmjs.com/cli/version). At the end of a pipeline run, you can update your repo with the new version. In this YAML, there's a GitHub repo and the package gets deployed to npmjs. Your build fails if there's a mismatch between your package version on npmjs and your `package.json` file. 


```yaml
variables:
    MAP_NPMTOKEN: $(NPMTOKEN) # Mapping secret var

trigger:
- none

pool:
  vmImage: 'ubuntu-latest'

steps: # Checking out connected repo
- checkout: self
  persistCredentials: true
  clean: true
    
- task: npmAuthenticate@0
  inputs:
    workingFile: .npmrc
    customEndpoint: 'my-npm-connection'
    
- task: NodeTool@0
  inputs:
    versionSpec: '16.x'
  displayName: 'Install Node.js'

- script: |
    npm install
  displayName: 'npm install'

- script: |
    npm pack
  displayName: 'Package for release'

- bash: | # Grab the package version
    v=`node -p "const p = require('./package.json'); p.version;"`
    echo "##vso[task.setvariable variable=packageVersion]$v"

- task: CopyFiles@2
  inputs:
      contents: '*.tgz'
      targetFolder: $(Build.ArtifactStagingDirectory)/npm
  displayName: 'Copy archives to artifacts staging directory'

- task: CopyFiles@2
  inputs:
    sourceFolder: '$(Build.SourcesDirectory)'
    contents: 'package.json' 
    targetFolder: $(Build.ArtifactStagingDirectory)/npm
  displayName: 'Copy package.json'

- task: PublishBuildArtifacts@1 
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)/npm'
    artifactName: npm
  displayName: 'Publish npm artifact'

- script: |  # Config can be set in .npmrc
    npm config set //registry.npmjs.org/:_authToken=$(MAP_NPMTOKEN) 
    npm config set scope "@myscope"
    # npm config list
    # npm --version
    npm version patch --force
    npm publish --access public

- task: CmdLine@2 # Push changes to GitHub (substitute your repo)
  inputs:
    script: |
      git config --global user.email "username@contoso.com"
      git config --global user.name "Azure Pipeline"
      git add package.json
      git commit -a -m "Test Commit from Azure DevOps"
      git push -u origin HEAD:main
```
