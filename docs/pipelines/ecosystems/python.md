---
title: Build and test Python apps
description: Automatically build and test Python apps with Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
ms.manager: jillfra
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 10/03/2019
monikerRange: 'azure-devops'
---

# Build Python apps

**Azure Pipelines**

This article describes how to customize the Azure Pipelines *azure-pipelines.yml* file to build, test, and deploy Python apps or scripts.

If you're new to pipelines, or want an end-to-end walkthrough, see [Use CI/CD to deploy a Python web app to Azure App Service on Linux](python-webapp.md).

To create and activate an Anaconda environment and install Anaconda packages with `conda`, see [Run pipelines with Anaconda environments](./anaconda.md).

## Configure build environment

You don't have to set up anything for Azure Pipelines to build Python projects. Python is preinstalled on [Microsoft-hosted build agents](../agents/hosted.md) for Linux, macOS, or Windows. To see which Python versions are preinstalled, see [Use a Microsoft-hosted agent](../agents/hosted.md#software). 

### Use a specific Python version

To use a specific version of Python in your pipeline, add the [Use Python Version task](../tasks/tool/use-python-version.md) to *azure-pipelines.yml*. The following snippet sets the pipeline to use Python 3.6:

```yaml
steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.6'
```

### Use multiple Python versions

To run a pipeline with multiple Python versions, for example to test a package against those versions, define a `job` with a `matrix` of Python versions. Then set the `UsePythonVersion` task to reference the `matrix` variable.

```yaml
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

```
You can add tasks to run using each Python version in the matrix.

## Run Python scripts

To run Python scripts in your repository, use a `script` element and specify a filename. For example:

```yaml
- script: python src/example.py
```

You can also run inline Python scripts with the [Python Script task](../tasks/utility/python-script.md):

```yaml
- task: PythonScript@0
  inputs:
    targetType: 'inline'
    script: |
      print('Hello world 1')
      print('Hello world 2')
```

### Install dependencies

You can use a script to install specific PyPI packages with `pip`. For example, the following YAML installs or upgrades `pip` and the `setuptools` and `wheel` packages.

```yaml
- script: python -m pip install --upgrade pip setuptools wheel
  displayName: 'Install tools'
```

### Install requirements

After you update `pip` and friends, a typical next step is to install dependencies from *requirements.txt*:

```yaml
- script: pip install -r requirements.txt
  displayName: 'Install requirements'
```

<a name="test"></a>
## Run tests

You can use scripts to install and run various tests in your pipeline.

### Run lint tests with flake8

To install or upgrade `flake8` and use it to run lint tests, use the following YAML:

```yaml
- script: |
    python -m pip install flake8
    flake8 .
  displayName: 'Run lint tests'
```

### Test with pytest and collect coverage metrics with pytest-cov

Use the following YAML to install `pytest` and `pytest-cov`, run tests, output test results in JUnit format, and output code coverage results in Cobertura XML format:

```yaml
- script: |
    pip install pytest
    pip install pytest-cov
    pytest tests --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
  displayName: 'Test with pytest'
```

### Run tests with Tox

Azure Pipelines can run parallel Tox test jobs to split up the work. On a development computer, you have to run your test environments in series. The following sample uses `tox -e py` to run whichever version of Python is active for the current job.

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

### Publish test results

Add the [Publish Test Results task](../tasks/test/publish-test-results.md) to publish JUnit or xUnit test results to the server:

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Publish test results for Python $(python.version)'
```

### Publish code coverage results

Add the [Publish Code Coverage Results task](../tasks/test/publish-code-coverage-results.md) to publish code coverage results to the server. You can see coverage metrics in the build summary, and download HTML reports for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/htmlcov'
```

## Package and deliver code

To authenticate with `twine`, use the [Twine Authenticate task](../tasks/package/twine-authenticate.md) to store authentication credentials in the `PYPIRC_PATH` environment variable.

```yaml
- task: TwineAuthenticate@0
  inputs:
    artifactFeed: '<Azure Artifacts feed name>'
    pythonUploadServiceConnection: '<twine service connection from external organization>'
```

Then, add a custom [script](../yaml-schema.md#script) that uses `twine` to publish your packages.

```yaml
- script: |
   twine upload -r "<feed or service connection name>" --config-file $(PYPIRC_PATH) <package path/files>
```

You can also use Azure Pipelines to [build an image](containers/build-image.md) for your Python app and [push it to a container registry](containers/push-image.md).

## Related extensions

- [PyLint Checker](https://marketplace.visualstudio.com/items?itemName=dazfuller.pylint-task) (Darren Fuller)  
- [Python Test](https://marketplace.visualstudio.com/items?itemName=dazfuller.pyunittest-task) (Darren Fuller)
- [Azure DevOps plugin for PyCharm (IntelliJ)](http://plugins.jetbrains.com/plugin/7981) (Microsoft)  
- [Python in Visual Studio Code](https://code.visualstudio.com/docs/python) (Microsoft)  
