---
title: Customize JavaScript for Azure Pipelines
description: Learn about ways to customize pipelines to support building, testing, and running JavaScript apps.
ms.topic: conceptual
ms.custom: devx-track-js, freshness-fy22q2
ms.date: 09/09/2025
monikerRange: '<= azure-devops'
---

# Customize JavaScript pipelines

This article explains how Azure Pipelines works with JavaScript apps. [Microsoft-hosted agents](../agents/hosted.md) preinstall common JavaScript build, test, and deployment tools like npm, Node, Yarn, and Gulp without requiring you to set up your own infrastructure. You can also add options or preconfigure [self-hosted agents](../agents/agents.md).

To quickly create a pipeline for JavaScript, see the [JavaScript quickstart](javascript.md).

<a name="use-a-specific-version-of-nodejs"></a>
## Node tool installer tasks

To install Node.js and npm versions that aren't preinstalled, or install on self-hosted agents:

- For npm, run the `npm i -g npm@version-number` command in your pipeline.
- For Node.js, add the [Use Node.js ecosystem v1 (UseNode@1)](/azure/devops/pipelines/tasks/reference/use-node-v1) task to your pipeline.

::: moniker range=">=azure-devops"

To install a specific Node.js version, add the following code to your *azure-pipelines.yml* file:

```yaml
- task: UseNode@1
  inputs:
    version: '16.x' # replace this value with the version that you need for your project
```

> [!NOTE]
> Microsoft-hosted agents are regularly updated, and this task can require significant time updating to a newer minor version every time the pipeline runs. Use this task only to install specific Node versions that aren't preinstalled. To find out what Node.js and npm versions are preinstalled on Microsoft-hosted agents, see [Software](../agents/hosted.md#software).

::: moniker-end

::: moniker range="< azure-devops"

To install a specific Node.js version:

1. On the **Tasks** tab of your pipeline, select the job that runs your build tasks, and then select **+** to add a new task.
1. In the task catalog, find and add the **Node.js tool installer** task.
1. Under **Version Spec** in the task configuration screen, specify the version of the Node.js runtime that you want to install.

::: moniker-end

### Use multiple node versions

::: moniker range=">=azure-devops"

You can use the [Use Node.js ecosystem v1](/azure/devops/pipelines/tasks/reference/use-node-v1) task with a `matrix` strategy to build and test your app on multiple versions of Node.js. For more information, see [Multi-job configuration](../process/phases.md?tabs=yaml#multi-job-configuration).

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
- task: UseNode@1
  inputs:
    version: $(node_version)

- script: npm install
```

::: moniker-end

::: moniker range="< azure-devops"

To build and test your app on multiple versions of Node.js, see [Multi-job configuration](../process/phases.md?tabs=classic#multi-job-configuration).

::: moniker-end

## Dependency tool installation

If you have development dependency tools in your project *package.json* or *package-lock.json* file, install the tools and dependencies through npm. The project file defines the exact version of the tools, independent of other versions that exist on the build agent.

To install these tools on your build agent, use a [script](../scripts/cross-platform-scripting.md), the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) task, or a [command-line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task in your pipeline.

To use a script:

```yaml
- script: npm install --only=dev
```

To use the npm task:

```yaml
- task: Npm@1
  inputs:
     command: 'install'
```

Run tools you install this way use the npm `npx` package runner, which detects the tools in its PATH resolution. The following example calls the `mocha` test runner, and uses the version installed as a development dependency rather than the version installed globally through `npm install -g`.

```yaml
- script: npx mocha
```

To install tools that your project needs that aren't set as development dependencies in *package.json*, call `npm install -g` from a script in your pipeline. The following example installs the latest version of the [Angular CLI](https://cli.angular.io/) by using `npm`. Other scripts in the rest pipeline can then use the `ng` tool.

> [!NOTE]
> On Microsoft-hosted Linux agents, preface the command with `sudo`, like `sudo npm install -g`.

```yaml
- script: npm install -g @angular/cli
```

> [!NOTE]
> These tool installation tasks run every time the pipeline runs, so be mindful of their impact on build times. If the overhead seriously impacts build performance, consider using [self-hosted agents](../agents/agents.md#install) preconfigured with the versions of the tools you need.

## Dependency package downloads

You can use [Yarn](https://yarnpkg.com) or Azure Artifacts to download packages from the public npm registry, a type of private npm registry that you specify in an *\*.npmrc* file. To specify an npm registry, add the URL to the *\*.npmrc* file in your repository.

### Use npm

You can use npm to download build packages in your pipeline in the following ways:

- For the simplest way to download packages without authentication, directly run `npm install`.
- To use an authenticated registry, add the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) task.
- To run `npm install` from inside task runners Gulp, Grunt, or Maven, use the [npm Authenticate](/azure/devops/pipelines/tasks/reference/npm-authenticate-v0) task.

>[!NOTE]
>If your feed uses authentication, you must create an npm service connection on the **Services** tab in Azure DevOps **Project settings** to manage its credentials.

To install npm packages directly, use the following script in *azure-pipelines.yml*. If your build agent doesn't need development dependencies, you can speed up build times with the `--only=prod` option to `npm install`.

```yaml
- script: npm install --only=prod
```

To use a private registry specified in your *\*.npmrc* file, add the following snippet to *azure-pipelines.yml*.

```yaml
- task: Npm@1
  inputs:
    customEndpoint: <Name of npm service connection>
```

To pass registry credentials to npm commands via task runners such as Gulp, add the following task to *azure-pipelines.yml* before you call the task runner.

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>
```

::: moniker range=">=azure-devops"

>[!NOTE]
>[Microsoft-hosted agents](../agents/hosted.md) use a new machine with every build. Restoring dependencies can take a significant amount of time. To mitigate the issue, you can use Azure Artifacts or a self-hosted agent to use the package cache.
>
>If your builds occasionally fail because of connection issues when you restore packages from the npm registry, you can use Azure Artifacts with [upstream sources](../../artifacts/concepts/upstream-sources.md) to cache the packages. Azure Artifacts automatically uses the credentials of the pipeline, which are usually derived from the **Project Collection Build Service** account.

::: moniker-end

### Use Yarn

Use a script to invoke [Yarn](https://yarnpkg.com) to restore dependencies. Yarn is preinstalled on some [Microsoft-hosted agents](../agents/hosted.md). You can install and configure Yarn on self-hosted agents like any other tool.

```yaml
- script: yarn install
```

You can also use the [CLI](/azure/devops/pipelines/tasks/reference/cmd-line-v2) or [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task in your pipeline to invoke Yarn.

## JavaScript compilers

JavaScript apps use compilers such as [Babel](https://babeljs.io/) and the [TypeScript](https://www.typescriptlang.org/) `tsc` compiler to convert source code into versions usable by the Node.js runtime or in web browsers. If you have a [script object](https://docs.npmjs.com/misc/scripts) set up in your project *package.json* file to run your compiler, you can invoke it in your pipeline.

```yaml
- script: npm run compile
```

You can also call compilers directly from the pipeline by using a script. These commands run from the root of the cloned source code repository.

```yaml
- script: tsc --target ES6 --strict true --project tsconfigs/production.json
```

You can use the [npm](/azure/devops/pipelines/tasks/reference/npm-v1) task to build the code if you have a compile script defined in your project *package.json*, or use the [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task to compile your code if you don't define a compile script.

<a name="run-unit-tests></a>
## Unit testing

You can configure your pipelines to run your JavaScript tests so they produce results formatted in the JUnit XML format. You can then publish the results using the [Publish test results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task.

If your test framework doesn't support JUnit output, add support through a partner reporting module such as [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter). You can either update your test script to use the JUnit reporter, or pass those options into the task definition if the reporter supports command-line options.

The following table lists the most commonly used test runners and the reporters you can use to produce XML results:

| Test runner | Reporters for XML reports |
|---|---|
| mocha | [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter)<br />[cypress-multi-reporters](https://www.npmjs.com/package/cypress-multi-reporters) |
| jasmine | [jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters) |
| jest | [jest-junit](https://www.npmjs.com/package/jest-junit)<br />[jest-junit-reporter](https://www.npmjs.com/package/jest-junit-reporter) |
| karma | [karma-junit-reporter](https://karma-runner.github.io) |
| Ava | [tap-xunit](https://github.com/aghassemi/tap-xunit) |

The following example uses the [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `mocha test` directly by using a script. This script produces the JUnit XML output at the default location of *./test-results.xml*. 

```yaml
- script: mocha test --reporter mocha-junit-reporter
```

If you defined a `test` script in your project *package.json* file, you can invoke it by using `npm test`.

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

If your test scripts run a code coverage tool, such as [Istanbul](https://github.com/istanbuljs), add the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) task. You can then find coverage metrics in the build summary and download HTML reports for further analysis.

The task expects Cobertura or JaCoCo reporting output. Ensure that your code coverage tool runs with the necessary options to generate the right output, for example `--report cobertura`.

The following example uses the Istanbul command-line interface [nyc](https://github.com/istanbuljs/nyc) along with [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter), and invokes `npm test`.

```yaml
- script: |
    nyc --reporter=cobertura --reporter=html \
    npm test -- --reporter mocha-junit-reporter --reporter-options mochaFile=./test-results.xml
  displayName: 'Build code coverage report'

- task: PublishCodeCoverageResults@2
  inputs: 
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'
```

::: moniker range="< azure-devops"

Set the **Control Options** for the **Publish Test Results** task to run the task even if a previous task has failed, unless the deployment was canceled.

::: moniker-end

## End-to-end browser testing

Your pipeline can use tools like [Protractor](https://www.protractortest.org) or [Karma](https://karma-runner.github.io/2.0/index.html) to run tests in headless browsers, and then publish the results for the build to Azure DevOps. To configure browser testing and results publishing, follow these steps:

1. Install a headless browser testing driver such as headless Chrome or Firefox, or a browser-mocking tool such as PhantomJS, on the build agent.
1. Configure your test framework to use your headless browser or driver option according to the tool's documentation.
1. Configure your test framework to output JUnit-formatted test results, usually with a reporter plug-in or configuration.
1. Add a script or CLI task to start the headless browser instances.
1. Run the end-to-end tests in the pipeline stages along with your unit tests.
1. Publish the results by using the same [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task as your unit tests.

## Web app packaging

Package applications to bundle all your application modules with intermediate outputs and dependencies into static assets ready for deployment. Add a pipeline stage after compilation and testing to run a tool like [webpack](https://webpack.js.org/) or the Angular CLI [ng build](https://github.com/angular/angular-cli/wiki/build).

The following example calls `webpack`. For this process to work, make sure `webpack` is configured as a development dependency in your *package.json* project file. This script runs `webpack` with the default configuration unless you have a *webpack.config.js* file in the root folder of your project.

```yaml
- script: webpack
```

The following example uses `npm run build` to call the `build` script object defined in the project *package.json* file. Using the script object in your project moves the build logic into the source code and out of the pipeline.

```yaml
- script: npm run build
```

You can also use the [CLI](/azure/devops/pipelines/tasks/reference/cmd-line-v2) or [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) task in your pipeline to invoke your packaging tool, such as `webpack` or  Angular's `ng build`.

## Packaging and delivery

After you build and test your app, you can upload the build output to Azure Pipelines, create and publish an npm or Maven package, or package the build output into a ZIP file for deployment to a web application.

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

The first example assumes that you manage version information (such as through an [npm version](https://docs.npmjs.com/cli/version)) through changes to your `package.json` file in version control. The following example uses the script to publish to the public registry.

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


## JavaScript frameworks

You can install packages in your pipeline to support various JavaScript frameworks.

### Angular

For Angular apps, you can include Angular-specific commands such as `ng test`, `ng build`, and `ng e2e`. To use Angular CLI commands in your pipeline, install the [angular/cli npm package](https://www.npmjs.com/package/@angular/cli) on the build agent.

> [!NOTE]
> On Microsoft-hosted Linux agents, preface the command with `sudo`, like `sudo npm install -g`.

```yaml
- script: |
    npm install -g @angular/cli
    npm install
    ng build --prod
```

::: moniker range="< azure-devops"

Add the following tasks to your pipeline:

- **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g @angular/cli`

- **npm**
  * **Command:** `install`

- **bash**
  * **Type:** `inline`
  * **Script:** `ng build --prod`

::: moniker-end

For tests in your pipeline that require a browser to run, such as running Karma in the the `ng test` command, use a headless browser instead of a standard browser. In the Angular starter app:

- Change the  `browsers` entry in your *karma.conf.js* project file from `browsers: ['Chrome']` to `browsers: ['ChromeHeadless']`.
- Change the `singleRun` entry in your *karma.conf.js* project file from a value of `false` to `true`. This change helps ensure that the Karma process stops after it runs.

### React and Vue

All the dependencies for React and Vue apps are captured in your *package.json* file. Your *azure-pipelines.yml* file contains the standard `npm` scripts.

```yaml
- script: |
    npm install
  displayName: 'npm install'

- script: |
    npm run build
  displayName: 'npm build'
```

The build files are in a new folder, *dist* for Vue or *build* for React. The following example builds an artifact, `www`, that's ready for release. The pipeline uses the [Use Node.js](/azure/devops/pipelines/tasks/reference/use-node-v1), [Copy File](/azure/devops/pipelines/tasks/reference/copy-files-v2), and [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks.

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

- script: npm install
  displayName: 'npm install'

- script: npm run build
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

To release the app, point your release task to the `dist` or `build` artifact and use the [Azure Web App Deploy task](../targets/webapp.md).

### Webpack

You can use a webpack configuration file to specify a compiler, such as Babel or TypeScript, to transpile JSX or TypeScript to plain JavaScript, and to bundle your app.

```yaml
- script: |
    npm install webpack webpack-cli --save-dev
    npx webpack --config webpack.config.js
```

::: moniker range="< azure-devops"

Add the following tasks to your pipeline:

` **npm**
  * **Command:** `custom`
  * **Command and arguments:** `install -g webpack webpack-cli --save-dev`

` **bash**
  * **Type:** `inline`
  * **Script:** `npx webpack --config webpack.config.js`

::: moniker-end

### Build task runners

It's common to use [Gulp](https://gulpjs.com/) or [Grunt](https://gruntjs.com/) as task runners to build and test JavaScript apps.

#### Gulp

::: moniker range=">=azure-devops"

Gulp is preinstalled on Microsoft-hosted agents. You can run the `gulp` command in the YAML file.

```yaml
- script: gulp # add any needed options
```

If the steps in your *gulpfile.js* file require authentication with an npm registry, add the `npmAuthenticate` task.

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>

- script: gulp
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

The simplest way to create a pipeline if your app uses Gulp is to use the **Node.js with gulp** build template when you create the pipeline. This template automatically adds various tasks to invoke Gulp commands and publish artifacts. In the task, select **Enable Code Coverage** to enable code coverage by using Istanbul.

::: moniker-end

#### Grunt

::: moniker range=">=azure-devops"

Grunt is preinstalled on Microsoft-hosted agents. You can run the `grunt` command in the YAML file.

```yaml
- script: grunt # add any needed options
```

If the steps in your *Gruntfile.js* file require authentication with an npm registry, add the `npmAuthenticate` task.

```yaml
- task: npmAuthenticate@0
  inputs:
    customEndpoint: <Name of npm service connection>

- script: grunt
```

::: moniker-end

::: moniker range="< azure-devops"

The simplest way to create a pipeline if your app uses Grunt is to use the **Node.js with Grunt** build template when you create the pipeline. This template automatically adds various tasks to invoke Gulp commands and to publish artifacts. In the task, select the **Publish to TFS/Team Services** option to publish test results, and select **Enable Code Coverage** to enable code coverage by using Istanbul.

::: moniker-end

## Troubleshooting

If you can build your project on your development machine but can't build it in Azure Pipelines, explore the following potential causes and corrective actions:

- Check that the versions of **Node.js** and the task runner on your development machine match those on the agent.
  You can include command-line scripts such as `node --version` in your pipeline to check what is installed on the agent.
  Either use the **Node Tool Installer** (as explained in this guidance) to deploy the same version on the agent,
  or run `npm install` commands to update the tools to wanted versions.

- If your builds fail intermittently while you restore packages, either the npm registry has issues or there are
  networking problems between the Azure data center and the registry. We can't control these factors. Explore whether using Azure Artifacts with an npm registry as an upstream source improves the reliability of your builds.

- If you're using [`nvm`](https://github.com/nvm-sh/nvm) to manage different versions of Node.js, consider switching to the [**Node Tool Installer**](#use-a-specific-version-of-nodejs) task instead. (`nvm` is installed for historical reasons on the macOS image.) `nvm` manages multiple Node.js versions by adding shell aliases and altering `PATH`, which interacts poorly with the way [Azure Pipelines runs each task in a new process](../process/runs.md).

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

### How do I fix a pipeline failure with the message 'FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory'?

This failure type occurs when the Node.js package exceeds the memory usage limit. To resolve the issue, add a variable like `NODE_OPTIONS` and assign it a value of `--max_old_space_size=16384`.

<a name="q-how-can-i-version-my-npm-packages-as-part-of-the-build-process"></a>
### How can I version my npm packages as part of the build process?

One option is to use a combination of version control and [npm version](https://docs.npmjs.com/cli/version). At the end of a pipeline run, you can update your repo with the new version. The following YAML pipeline has a GitHub repo, and the package deploys to npmjs. The build fails if there's a mismatch between the package version on npmjs and the *package.json* file. 

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
    
- task: UseNode@1
  inputs:
    version: '16.x'
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
## Related content

- For more information about Azure Artifacts and the Package Management service, see [Package Management in Azure Artifacts](../../artifacts/index.yml).
- For more information about tasks, see [Build, release, and test tasks](../tasks/index.md).

