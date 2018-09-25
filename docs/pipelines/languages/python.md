---
title: Python
description: CI and CD for Python projects.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 08/31/2018
monikerRange: '> tfs-2018'
---

# Python

This guidance explains how to build Python apps.

## Example

For a working example of how to build a Python app with Django, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-python-django
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the project.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample project.

## Build environment

You can use Azure Pipelines to build your Python projects without needing to set up any infrastructure of your own. Python is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Python that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md). To install a specific version of Python on Microsoft hosted agents, add the [Use Python Version](../tasks/tool/use-python-version.md) task to the beginning of your pipeline.

### Use a specific Python version

Add the [Use Python Version](../tasks/tool/use-python-version.md) task to set the version of Python used in your pipeline. This snippet sets subsequent pipeline tasks to use Python 3.6.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/python
pool:
  vmImage: 'Ubuntu-16.04' # other options: 'macOS-10.13', 'VS2017-Win2016'

steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.6'
    architecture: 'x64'
```

### Use multiple Python versions

To run a pipeline with multiple Python versions, such as to test your project using different versions, define a job with a matrix of Python version values. Then set the [Use Python Version](../tasks/tool/use-python-version.md) task to reference the matrix variable for its Python version. Increase the **parallel** value to simultaneously run the job for all versions in the matrix, depending on how many parallel jobs are available.

```yaml
# https://aka.ms/yaml
jobs:
- job: 'Test'
  pool:
    vmImage: 'Ubuntu-16.04' # other options: 'macOS-10.13', 'VS2017-Win2016'
  strategy:
    matrix:
      Python27:
        python.version: '2.7'
      Python35:
        python.version: '3.5'
      Python36:
        python.version: '3.6'
    maxParallel: 3

  steps:
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '$(python.version)'
      architecture: 'x64'

  # Add additional tasks to run using each Python version in the matrix above
```

### Activate an Anaconda environment

As an alternative to the **Use Python Version** task, create and activate a conda environment and Python version using the [Conda Environment](../tasks/package/conda-environment.md) task. Add the following YAML to activate an environment named `myEnvironment` with the Python 3 package.

```yaml
- task: CondaEnvironment@0
  inputs:
    environmentName: 'myEnvironment'
    packageSpecs: 'python=3'
```

## Run a Python script

If you have a Python script checked into the repo, you can run it using **script**.
Add the following YAML to run a Python file named `example.py`.

```yaml
- script: python src/example.py
```

If you want to write a Python script inline in the YAML file, use the [Python Script](../tasks/utility/python-script.md) task.
Set the **targetType** to `inline` and put your code in the **script** section.

```yaml
- task: PythonScript@0
  inputs:
    targetType: 'inline'
    script: |
      print('Hello world 1')
      print('Hello world 2')
```

## Install dependencies

### Install specific PyPI packages with pip

Add the following YAML to install or upgrade `pip` and two specific packages: `setuptools` and `wheel`.

```yaml
- script: python -m pip install --upgrade pip setuptools wheel
  displayName: 'Install tools'
```

### Install requirements with pip

After updating `pip` and friends, a typical next step is to install from `requirements.txt`.

```yaml
- script: pip install -r requirements.txt
  displayName: 'Install requirements'
```

### Install Anaconda packages with conda

Add the following YAML to install the `scipy` package in the conda environment named `myEnvironment`. See [Activate an Anaconda environment](#activate-an-anaconda-environment) above.

```yaml
- script: conda install -n myEnvironment scipy
  displayName: 'Install conda libraries'
```

## Test

### Run lint tests with Flake8

Add the following YAML to install or upgrade `flake8` and use it to run lint tests.

```yaml

- script: |
    python -m pip install flake8
    flake8 .
  displayName: 'Run lint tests'
```

### Test with pytest and collect coverage metrics with pytest-cov

Add the following YAML to install `pytest` and `pytest-cov`, run tests, output test results in JUnit format, and output code coverage results in Cobertura XML format.

```yaml
- script: |
    pip install pytest
    pip install pytest-cov
    pytest tests --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
  displayName: 'Test with pytest'
```

### Publish test results

Add the [Publish Test Results](../tasks/test/publish-test-results.md) task to publish JUnit or xUnit test results to the server.

```yaml
- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Publish test results for Python $(python.version)'
```

### Publish code coverage results

Add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results to the server. When you do this, coverage metrics can be seen in the build summary and HTML reports can be downloaded for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/htmlcov'
```

## Package and deliver your code

### Retain artifacts with the build record

First, build an sdist of your package.

```yaml
- script: 'python setup.py sdist'
  displayName: 'Build sdist'
```

Then, add the [Publish Build Artifacts](../tasks/utility/publish-build-artifacts.md) task to store your build output with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../build/artifacts.md).

```yaml
- task: PublishBuildArtifacts@1
  displayName: 'Publish artifact: dist'
  inputs:
    pathtoPublish: 'dist'
    artifactName: 'dist'
```

### Deploy to a PyPI-compatible index

Add the [PyPI Publisher](../tasks/package/pypi-publisher.md) task to package and publish to a PyPI-compatible index.

```yaml
- task: PyPIPublisher@0
  inputs:
    pypiConnection: ''
    packageDirectory: '$(build.sourcesDirectory)'
    alsoPublishWheel: false
```

## Build a container image

You can also build and publish a Docker container image for your app. For more information, see [Docker](docker.md).

## Related extensions

- [Python Build Tools (for Windows)](https://marketplace.visualstudio.com/items?itemName=stevedower.python) (Steve Dower)  
- [PyLint Checker](https://marketplace.visualstudio.com/items?itemName=dazfuller.pylint-task) (Darren Fuller)  
- [Python Test](https://marketplace.visualstudio.com/items?itemName=dazfuller.pyunittest-task) (Darren Fuller)  
- [Azure Pipelines Plugin for PyCharm (IntelliJ)](http://plugins.jetbrains.com/plugin/7981) (Microsoft)  
- [Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python) (Microsoft)  
