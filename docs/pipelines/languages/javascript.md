---
title: JavaScript Pipeline guide
description: CI and CD for JavaScript and Node.js projects.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 08/03/2018
monikerRange: '> tfs-2018'
---

# JavaScript Pipeline guide

This guide explains creating build and release pipelines for JavaScript projects. If you've never worked with pipelines before, review the [YAML pipeline quickstart](../get-started-yaml.md) before continuing.

> [!NOTE]
> To use YAML you must have the **Build YAML definitions** [preview feature](../../project/navigation/preview-features.md) enabled on your organization.

## Choose a build agent

You can use VSTS to build JavaScript projects without needing to set up any infrastructure of your own using [Microsoft-hosted agents](../agents/hosted.md) . These build agents are configured with popular tools such as a Node.js LTS release, npm, webpack, and yarn, and run on Linux, macOS, or Windows. Configure the pipeline to use a hosted agent with the following YAML:

```yaml
queue: 'Hosted Linux Preview' # other options - 'Hosted VS2017', 'Hosted macOS Preview'
```

You can also use [self-hosted agents](../agents/agents.md#install) configured with specific tools or tool versions needed to build your project.

## Use a specific Node.js version

Add the [Node tool installer](../tasks/tool/node-js.md) task to set the version of Node.js used in your pipeline. This sets subsequent pipeline tasks to use the specificed Node.js release and the version of the `npm` tool tied to that version. 

> [!NOTE]
> If you're using [Microsoft-hosted agents](../agents/hosted.md) and just want the latest LTS release, you avoid this task unless you have a good reason for needing a specific version. The hosted agents are regularly updated, and setting this task up will result in spending a lot of time updating to a newer minor version every time the pipeline is run.

```yaml
# Node Tool Installer
# Finds or Downloads and caches specified version spec of Node and adds it to the PATH.
- task: NodeTool@0
  displayName: Set Node.js version
  inputs:
    versionSpec: '>=8.11.x'
    checkLatest: false # Optional
```

## Install tools on your build agent

If you have defined tools needed for your build as development dependencies in your project `package.json` or `package-lock.json`, install these tools along with the rest of your project dependencies using the [npm](../tasks/tool/npm.md) task:

```yaml
- task: Npm@1
  inputs: 
    command: install
```

To install tools needed by your build but not set as dev dependencies in your project's `package.json`, you can use the [npm](../tasks/tool/npm.md) or [cli](../tasks/tool/command-line.md) task, depending on the install method your tool needs.

The following example installs the latest version of the [Angular CLI](https://cli.angular.io/) using the `npm` task. Once installed, later stages of the build pipeline can use invoke the tool using the [cli](../tasks/utility/command-line.md) or [bash](../tasks/utility/bash.md) task.

```yaml
- task: Npm@1
  inputs:
    command: custom
    customCommand: install -g @angular/cli
```

These tasks will be run every time your pipeline executes, so be mindful of the impact installing tools has on build times. Consider configuring [self-hosted agents](../agents/agents.md#install) already configured with the tools if tool install overhead becomes a serious impact to your build performance.

## Install dependencies from other sources

Pull dependencies from a custom npm registry by configuring your source repo with a [.npmrc](https://docs.npmjs.com/files/npmrc) and the `npm` task:

```yaml
- task: Npm@1
  inputs:
    command: install
    customRegistry: useNpmrc
```

To install dependencies from [VSTS packaging management](/vsts/package/overview) , use the `npm` task. Consider using a VSTS package management feed with upstream support to cache remote dependencies and centralize internal and external dependencies into a single source of truth registry.

This example installs packages from a VSTS package management feed:

```yaml
- task: Npm@1
  inputs:
    command: install
    customRegistry: useFeed
    customFeed: yourFeedName
```

## Install dependencies using yarn

Use the [cli](../tasks/tool/command-line.md) or [bash](../tasks/utility/bash.md) task to invoke [yarn](https://yarnpkg.com) to restore dependencies.  Yarn is available preinstalled on some [Microsoft-hosted agents](../agents/hosted.md) and can be configured on self-hosted agents like any other tool.

```yaml
- task: Bash@3
   inputs:
      script: 'yarn install'
```

## Compiling your project 

Use compilers such as [Babel](https://babeljs.io/) and the [TypeScript](https://www.typescriptlang.org/) to covert your source code into versions that are usable by the Node.js runtime or web browsers.

If you have a [script object](https://docs.npmjs.com/misc/scripts) set up in your project's `package.json` that runs your compiler, invoke it in your pipeline using the [npm](../tasks/tool/npm.md) task. The following example 

```yaml
- task: Npm@1
  inputs:
     command: run-script
     options: compile
```

You can call compilers directly from the pipeline using the [cli](../tasks/tool/command-line.md) or [bash](../tasks/utility/bash.md) task. These commands will run from the current directory of the root of the cloned source code repository.

```yaml
- task: Bash@3
  inputs:
     script: 'tsc --target ES6 --strict true --project tsconfigs/production.json'
```

## Run tests and publish results

Configure your pipelines to run your JavaScript tests so that they produce results formatted in the JUnit XML format. You can then publish the results to VSTS easily using the built-in [Publish Test Results](../tasks/test/publish-test-results) task.

If your testing framework doesn't support JUnit output out of the box, you'll need to add support through a third party reporting module, such as [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter). You can either update your testing script to use the JUnit reporter, or if the reporter supports command line options you can pass those into the task definintion.

This example uses the [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `mocha test` directly using the [bash](../tasks/utility/bash.md) task. This produces the JUnit XML output at the default location of `./test-results.xml`. 

```yaml
- task: Bash@3
  inputs: 
    script: 'mocha test --reporter mocha-junit-reporter'
```

To publish the results, use the [Publish Test Results](../tasks/test/publish-test-results) task.

```yaml
- task: PublishTestResults@2
  inputs:
    testRunner: JUnit
    testResultsFile: ./test-results.xml
```

### End to end browser testing 

Run tests in headless browsers as part of your pipeline with tools like [Protractor](https://www.protractortest.org) or [Karma](http://karma-runner.github.io/2.0/index.html), then publish the results for the build to VSTS with these steps: 

1. Install a headless browser testing driver such as headless Chrome or Firefox, or a browser mocking tool such as [PhantomJS] on the build agent. 
2. Configure your testing framework to use the headless browser/driver option of your choice according to the tool documentation.
3. Configure your testing framework (usually with a reporter plugin or configuration) to output JUnit formatted test results.
4. Set up a [cli](../tasks/tool/command-line.md) or [bash](../tasks/utility/bash.md) task to run any CLI commands needed to start the headless browser instances.
4. Publish the results using the same  [Publish Test Results](../tasks/test/publish-test-results) task alongside your unit tests.

## Package the app

Package applications to bundle all your application modules with intermediate outputs and dependencies into static assets ready for deployment. Add a pipeline stage after your compilation and tests to run a tool like [Webpack](https://webpack.js.org/) or [ng build](https://github.com/angular/angular-cli/wiki/build) using the Angular CLI.

The first example calls `webpack` using a [bash](../tasks/utility/bash.md) task. To have this work, you'll need to make sure that `webpack` is configuired as a development dependency in your package.json project file. This will run `webpack` with default configuration unless you have a webpack.config.js file in the root folder of your project. 

```yaml
- task: Bash@3
  inputs: 
    script: 'webpack'
```

The next example uses the [npm](../tasks/tool/npm.md) task to call `npm run build` to call the `build` script object defined in the package.json. Configuring your project in this way moves the logic for the build out of the VSTS task definition into the project configuration where it can be run locally in the exact same configuration.

```yaml
- task: Npm@1
  inputs:
     command: run
     options: build
```

## Publish a module

If your project's output is a npm module for use by other projects and not a web application, use the `npm` task to publish the module to a local or to the public npm registry. You must provide a unique name and version combination each time you publish, so keep this in mind when configuring publish steps as part of a release or development pipeline. 

The first example assumes you manage version information (such as through [npm version](https://docs.npmjs.com/cli/version) ) through your changes to your `package.json` file in version control and uses the  [npm](../tasks/tool/npm.md) task to publish to the public registry.

```yaml
- task: Npm@1
  inputs:
     command: publish
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

## Publish Docker images

After packaging your application, you can configure your pipeline to build a Docker image and deploy that image to a registry. Your source code repo will need to have a `Dockerfile` defined for each of the containers you want to build and publish to your registry.

If your application doesn't require orchestration with other containers, use the [Docker](/vsts/pipelines/tasks/build/docker?view=vsts) task to build a container with your packaged application code and push it to your Docker registry.

This example builds a Docker image . The `Dockerfile` for the image is located in the root of the source code repo, but can be configured using the `dockerFile` input.
The image is not pushed to a Docker registry once it's built.

```yaml
- task: Docker@1
  inputs:
     command: build An Image
     dockerFile: '**/Dockerfile'
     imageName: contoso/myjavasriptcontainer:v1.0.0
     includeLatestTag: false
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

## Deploy to Azure

If you're application is packaged static files (such as through `webpack`), the easiest solution is to deploy to [App Service on Linux](https://docs.microsoft.com/en-us/azure/app-service/containers/) using the [Azure App Service deploy](/vsts/pipelines/tasks/deploy/azure-rm-web-app-deployment?view=vsts) task. 

The `azureSubscription` value can be found either through the `az account` Azure CLI command or through the Azure Portal.

```yaml
- task: AzureRmWebAppDeployment@4
  inputs: 
    connectionType: AzureRM
    azureSubscription: <your-subscription-id>
    appType: webAppLinux
    webAppName: myjavascriptapp
    Package: $(System.DefaultWorkingDirectory)/dist
```

If you've packaged your application into a Docker image, you can deploy from the pushed container to Azure App Service.

```yaml
- task: AzureRmWebAppDeployment@4
  inputs: 
    connectionType: AzureRM
    azureSubscription: <your-subscription-id>
    dockerNamespace: registry.contoso.org
    dockerRepository: myjavasriptcontainer
```

Run multiple versions of your application and set up blue/green deploys with deployment slots using the `deployToSlotOrASE` and `slotName` parameters.

```yaml
- task: AzureRmWebAppDeployment@4
  inputs: 
    connectionType: AzureRM
    deployToSlotOrASE: true
    slotName: smoketest
    azureSubscription: <your-subscription-id>
    dockerNamespace: registry.contoso.org
    dockerRepository: myjavasriptcontainer
```
  


## Related extensions

[Azure extension pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-azureextensionpack) (Microsoft)  
[VSTS extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team) (Microsoft)  
