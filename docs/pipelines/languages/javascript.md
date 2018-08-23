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

This guide explains creating build and release pipelines for JavaScript projects. If you've never worked with pipelines before, review the [YAML quickstart](../get-started-yaml.md) befor continuing.

> [!NOTE]
> To use YAML you must have the **Build YAML definitions** [preview feature](../../project/navigation/preview-features.md) enabled on your organization.

## Define your pipeline

You can build JavaScript projects using [Microsoft-hosted agents](../agents/hosted.md) that include tools for JavaScript projects. You can extend these agents by setting up your pipeline to install the tools every time the pipeline is run. 

You can also use [self-hosted agents](../agents/agents.md#install) with specific tools you need.

After deciding on an agent, create a file named **.vsts-ci.yml** in the root of your source code repository. Then, add applicable phases and tasks to the YAML file as described below.

## Use a specific Python version

Add the [Use Python Version](../tasks/tool/use-python-version.md) task to set the version of Python used in your pipeline. This sample sets subsequent pipeline tasks to use Python 3.6.

```yaml
# https://aka.ms/yaml
queue: 'Hosted Linux Preview'
steps:

- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.6'
    architecture: 'x64'
```

## Use multiple Python versions

To run a pipeline with multiple Python versions, such as to test your project using different versions, define a phase with a matrix of Python version values. Then set the [Use Python Version](../tasks/tool/use-python-version.md) task to reference the matrix variable for its Python version. Increase the **parallel** value to simultaneously run the phase for all versions in the matrix, depending on how many concurrent jobs are available.

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
