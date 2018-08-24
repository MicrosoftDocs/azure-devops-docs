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

## Running tests and publishing results

Configure your pipelines to run your JavaScript tests so that they produce results formatted in the JUnit XML format. You can then publish the results to VSTS easily using the built-in [Publish Test Results](../tasks/test/publish-test-results) task.

If your testing framework doesn't support JUnit output out of the box, you'll need to add support through a third party reporting module, such as [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter). You can either update your testing script to use the JUnit reporter, or if the reporter supports command line options you can pass those into the task definintion.

The first example uses the [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter) and invokes `mocha test` directly using the [bash](../tasks/utility/bash.md) task. This produces the JUnit XML output at the default location of `./test-results.xml`. 

```yaml
- task: Bash@3
  inputs: 
    script: 'mocha test --reporter mocha-junit-reporter'
```






If you have a npm script defined for the compile task, you can 

To run a pipeline with multiple Python versions, such as to test your project using different versions, define a phase with a matrix of Python version values. Then set the [Use Python Version](../tasks/tool/npm.md) task to reference the matrix variable for its Python version. Increase the **parallel** value to simultaneously run the phase for all versions in the matrix, depending on how many concurrent jobs are available.

```yaml
# https://aka.ms/yaml
phases:
- phase: 'Test'
  queue:
    name: 'Hosted Linux Preview'
    parallel: 1
    matrix:
      Python27:
        python.version: '2.7'
      Python35:
        python.version: '3.5'
      Python36:
        python.version: '3.6'
  steps:

  - task: UsePythonVersion@0
    inputs:
      versionSpec: '$(python.version)'
      architecture: 'x64'

  # Add additional tasks to run using each Python version in the matrix above
```

## Activate an Anaconda environment

As an alternative to the **Use Python Version** task, create and activate a conda environment and Python version using the [Conda Environment](../tasks/package/conda-environment.md) task. Add the following YAML to activate an environment named `myEnvironment` with the Python 3 package.

```yaml
- task: CondaEnvironment@0
  inputs:
    environmentName: 'myEnvironment'
    packageSpecs: 'python=3'
```

## Run a Python script

Run a Python script in your pipeline by adding the [Python Script](../tasks/utility/python-script.md) task. The script can be defined in a file or in-line with the task.

Add the following YAML to run a Python script file named `myPythonScript.py`.

```yaml
- task: PythonScript@0
  inputs:
    targetType: 'filePath'
    filePath: 'src/myPythonScript.py'
    arguments: ''
```

Alternatively, set the **targetType** to `inline` to define the script in YAML.

```yaml
- task: PythonScript@0
  inputs:
    targetType: 'inline'
    script: |
      print('Hello world 1')
      print('Hello world 2')
    arguments: ''
```

## Install dependencies

### Install requirements with pip

Add the following YAML to install or upgrade `pip` and requirements specified in `requirements.txt`.

```yaml
- script: python -m pip install --upgrade pip && pip install -r requirements.txt
  displayName: 'Install requirements'
```

### Install specific PyPI packages with pip

Add the following YAML to install or upgrade `pip` and two specific packages: `setuptools` and `wheel`.

```yaml
- script: python -m pip install --upgrade pip setuptools wheel
  displayName: 'Install dependencies'
```

### Install Anaconda packages with conda

Add the following YAML to install the `scipy` package in the conda environment named `myEnvironment`. See [Activate an Anaconda environment](#activate-an-anaconda-environment) above.

```yaml
- script: conda install -n myEnvironment scipy
  displayName: 'Install conda libraries'
```

## Test

### Test with pytest

Add the following YAML to install `pytest`, run tests, and output results in JUnit format.

```yaml
- script: pip install pytest && pytest tests --doctest-modules --junitxml=junit/test-results.xml
  displayName: 'pytest'
```

### Publish test results

Add the [Publish Test Results](../tasks/test/publish-test-results.md) task to publish JUnit or xUnit test results to the server.

```yaml
- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Test results for Python $(python.version)'
```

## Deploy

### Deploy to a PyPI-compatible index

Add the [PyPI Publisher](../tasks/package/pypi-publisher.md) task to package and publish to a PyPI-compatible index.

```yaml
- task: PyPIPublisher@0
  inputs:
    pypiConnection: ''
    packageDirectory: '$(build.sourcesDirectory)'
    alsoPublishWheel: false
```

## Retain artifacts

Add the [Publish Build Artifacts](../tasks/utility/publish-build-artifacts.md) task to store your build output with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../build/artifacts.md).

```yaml
- task: PublishBuildArtifacts@1
  pathToPublish: 'dist'
```

## Related extensions

[Python Build Tools (for Windows)](https://marketplace.visualstudio.com/items?itemName=stevedower.python) (Steve Dower)  
[PyLint Checker](https://marketplace.visualstudio.com/items?itemName=dazfuller.pylint-task) (Darren Fuller)  
[Python Test](https://marketplace.visualstudio.com/items?itemName=dazfuller.pyunittest-task) (Darren Fuller)  
[VSTS Plugin for PyCharm (IntelliJ)](http://plugins.jetbrains.com/plugin/7981) (Microsoft)  
[Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python) (Microsoft)  
[VSTS extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team) (Microsoft)  
