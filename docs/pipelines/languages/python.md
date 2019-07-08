---
title: Build and test Python apps
description: Automatically build and test Python apps with Azure Pipelines, Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
ms.manager: jillfra
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 04/17/2019
monikerRange: 'azure-devops'
---

# Build Python apps

**Azure Pipelines**

This guidance explains different aspects of an Azure Pipeline to build, test, and deploy Python apps or scripts.

> [!Tip]
> Are you new to pipelines or looking for an end-to-end walkthrough? If so, see [Deploy a Python web app using CI/CD to Azure App Service on Linux](python-webapp.md).

## Build environment

You can use Azure Pipelines to build your Python projects without needing to set up any infrastructure of your own. Python is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Python that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To select a specific version of Python installed on Microsoft-hosted agents, add the [Use Python Version](../tasks/tool/use-python-version.md) task to the beginning of your job.

### Use a specific Python version

Add the [Use Python Version](../tasks/tool/use-python-version.md) task to set the version of Python used in your pipeline. This snippet sets subsequent pipeline tasks to use Python 3.6.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/python
pool:
  vmImage: 'ubuntu-16.04' # other options: 'macOS-10.13', 'vs2017-win2016'

steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.6'
```

### Use multiple Python versions

To run a pipeline with multiple Python versions, perhaps to test a package against those versions, define a *job* with a matrix of Python version values. Then set the [Use Python Version](../tasks/tool/use-python-version.md) task to reference the matrix variable for its Python version.

```yaml
# https://aka.ms/yaml
jobs:
- job: 'Test'
  pool:
    vmImage: 'ubuntu-16.04' # other options: 'macOS-10.13', 'vs2017-win2016'
  strategy:
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

  # Add additional tasks to run using each Python version in the matrix above
```

### Create and activate an Anaconda environment

See [Run pipelines with Anaconda environments](./anaconda.md).

## Run a Python script

To run other Python script in your repository, use a `script` element and specify the filename:

```yaml
- script: python src/example.py
```

You can also run inline Python scripts with the [Python Script](../tasks/utility/python-script.md) task:

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

See [Run pipelines with Anaconda environments](./anaconda.md).

<a name="test"></a>

## Run tests

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
  condition: succeededOrFailed()
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

### Run tests with Tox

When running tests with Tox, you can run parallel jobs to split up the work. This is somewhat different from how you would run Tox on your development machine, where you would run all of your test environments in series. In the sample below, note the use of `tox -e py` to run whichever version of Python is active for the current job.

```yaml
- job:

  pool:
    vmImage: 'ubuntu-16.04'
  strategy:
    matrix:
      Python27:
        python.version: '2.7'
      Python35:
        python.version: '3.5'
      Python36:
        python.version: '3.6'
      Python37:
        python.version: '3.7'

  steps:
  - task: UsePythonVersion@0
    displayName: 'Use Python $(python.version)'
    inputs:
      versionSpec: '$(python.version)'

  - script: pip install tox
    displayName: 'Install Tox'

  - script: tox -e py
    displayName: 'Run Tox'
```

## Package and deliver your code

### Authenticate with twine

The [Twine Authenticate task](../tasks/package/twine-authenticate.md) stores authentication credentials for twine in the `PYPIRC_PATH` environment variable.

```yaml
- task: TwineAuthenticate@0
  inputs:
    artifactFeeds: 'feed_name1, feed_name2'
    externalFeeds: 'feed_name1, feed_name2'
```

### Publish with twine

Then, add a [custom script task](../yaml-schema.md#script) to use `twine` to publish your packages.

```yaml
- script: 'twine -r {feedName/EndpointName} --config-file $(PYPIRC_PATH) {package path to publish}'
```

## Build a container image

You can also build and publish a Docker container image for your app. For more information, see [Docker](docker.md).

## Related extensions

- [PyLint Checker](https://marketplace.visualstudio.com/items?itemName=dazfuller.pylint-task) (Darren Fuller)  
- [Python Test](https://marketplace.visualstudio.com/items?itemName=dazfuller.pyunittest-task) (Darren Fuller)
- [Azure Pipelines Plugin for PyCharm (IntelliJ)](http://plugins.jetbrains.com/plugin/7981) (Microsoft)  
- [Python in Visual Studio Code](https://code.visualstudio.com/docs/python) (Microsoft)  
