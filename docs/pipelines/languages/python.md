---
title: Build and test Python apps
description: Build and test Python apps in Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 08/31/2018
monikerRange: '> tfs-2018'
---

# Build Python apps in Azure Pipelines

**Azure Pipelines**

This guidance explains how to use Azure Pipelines to automatically build, test, and deploy Python apps or scripts with CI/CD pipelines. 

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

For the exact versions of Python that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of Python on Microsoft hosted agents, add the [Use Python Version](../tasks/tool/use-python-version.md) task to the beginning of your pipeline.

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
    architecture: 'x64'
```

### Use multiple Python versions

To run a pipeline with multiple Python versions, such as to test your project using different versions, define a job with a matrix of Python version values. Then set the [Use Python Version](../tasks/tool/use-python-version.md) task to reference the matrix variable for its Python version. Increase the **parallel** value to simultaneously run the job for all versions in the matrix, depending on how many parallel jobs are available.

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
    maxParallel: 3

  steps:
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '$(python.version)'
      architecture: 'x64'

  # Add additional tasks to run using each Python version in the matrix above
```

### Create and activate an Anaconda environment

As an alternative to the **Use Python Version** task, create and activate an Anaconda environment with a specified version of Python. The following YAML uses the same `python.version` variable defined in the job matrix above.

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: echo "##vso[task.prependpath]/usr/share/miniconda/bin"
  displayName: Add conda to PATH

- bash: conda create --yes --quiet --name myEnvironment python=$PYTHON_VERSION # [other packages ...]
  displayName: Create Anaconda environment
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH

- bash: conda create --yes --quiet --name myEnvironment python=$PYTHON_VERSION # [other packages ...]
  displayName: Create Anaconda environment
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- powershell: Write-Host "##vso[task.prependpath]$env:CONDA\Scripts"
  displayName: Add conda to PATH

- script: conda create --yes --quiet --name myEnvironment python=%PYTHON_VERSION% # [other packages ...]
  displayName: Create Anaconda environment
```

---

If you have an [`environment.yml`](https://conda.io/docs/user-guide/tasks/manage-environments.html#creating-an-environment-from-an-environment-yml-file) defined for your Anaconda environment, you can also use that to create your environment:

```yaml
- script: conda env create --quiet --file environment.yml
  displayName: Create Anaconda environment
```

> [!NOTE]
> When you activate an Anaconda environment, it changes the current environment by doing things like editing `$PATH`.
> However, because each build step runs in its own process, these changes won't be persisted in subsequent steps.

When you run a script in a later step after creating an Anaconda environment, you need to activate the environment for each step:

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: |
    source activate myEnvironment
    pytest -m unit --junitxml=junit/unit-test.xml
  displayName: 'Unit tests'

- bash: |
    source activate myEnvironment
    pytest -m integration --junitxml=junit/integration-test.xml
  displayName: 'Integration tests'
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: |
    source activate myEnvironment
    pytest -m unit --junitxml=junit/unit-test.xml
  displayName: 'Unit tests'

- bash: |
    source activate myEnvironment
    pytest -m integration --junitxml=junit/integration-test.xml
  displayName: 'Integration tests'
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- script: |
    call activate myEnvironment
    pytest -m unit --junitxml=junit/unit-test.xml
  displayName: 'Unit tests'

- script: |
    call activate myEnvironment
    pytest -m integration --junitxml=junit/integration-test.xml
  displayName: 'Integration tests'
```

---

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

Add the following YAML to install the `scipy` package in the conda environment named `myEnvironment`.

# [Hosted Ubuntu 16.04](#tab/ubuntu-16-04)

```yaml
- bash: |
    source activate myEnvironment
    conda install -n myEnvironment scipy
  displayName: 'Install conda libraries'
```

# [Hosted macOS](#tab/macos)

```yaml
- bash: |
    source activate myEnvironment
    conda install -n myEnvironment scipy
  displayName: 'Install conda libraries'
```

# [Hosted VS2017](#tab/vs2017)

```yaml
- script: |
    call activate myEnvironment
    conda install -n myEnvironment scipy
  displayName: 'Install conda libraries'
```

---

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

- [Python Build Tools (for Windows)](https://marketplace.visualstudio.com/items?itemName=stevedower.python) (Steve Dower)  
- [PyLint Checker](https://marketplace.visualstudio.com/items?itemName=dazfuller.pylint-task) (Darren Fuller)  
- [Python Test](https://marketplace.visualstudio.com/items?itemName=dazfuller.pyunittest-task) (Darren Fuller)  
- [Azure Pipelines Plugin for PyCharm (IntelliJ)](http://plugins.jetbrains.com/plugin/7981) (Microsoft)  
- [Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python) (Microsoft)  
