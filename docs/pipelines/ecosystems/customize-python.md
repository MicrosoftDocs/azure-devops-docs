---
title: Customize Python for Azure Pipelines
description:  Customize how you use Python with Azure Pipelines
ms.topic: conceptual
ms.custom: contperf-fy22q4, devx-track-python
ms.date: 12/14/2022
monikerRange: '<= azure-devops'
---

# Customize Python for Azure Pipelines

You can use Azure Pipelines to build your Python apps without having to set up any infrastructure of your own. Tools that you commonly use to build, test, and run Python apps - like pip - get pre-installed on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. 

To create your first pipeline with Python, see the [Python quickstart](python.md).

### Use a specific Python version

To use a specific version of Python in your pipeline, add the [Use Python Version task](/azure/devops/pipelines/tasks/reference/use-python-version-v0) to *azure-pipelines.yml*. This snippet sets the pipeline to use Python 3.11:

```yaml
steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.11'
```

### Use multiple Python versions

To run a pipeline with multiple Python versions, for example to test a package against those versions, define a `job` with a `matrix` of Python versions. Then set the `UsePythonVersion` task to reference the `matrix` variable.

```yaml
jobs:
- job: 'Test'
  pool:
    vmImage: 'ubuntu-latest' # other options: 'macOS-latest', 'windows-latest'
  strategy:
    matrix:
      Python38:
        python.version: '3.8'
      Python39:
        python.version: '3.9'
      Python310:
        python.version: '3.10'

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

You can also run inline Python scripts with the [Python Script task](/azure/devops/pipelines/tasks/reference/python-script-v0):

```yaml
- task: PythonScript@0
  inputs:
    scriptSource: 'inline'
    script: |
      print('Hello world 1')
      print('Hello world 2')
```

To parameterize script execution, use the `PythonScript` task with `arguments` values to pass arguments into the executing process. You can use `sys.argv` or the more sophisticated `argparse` library to parse the arguments.

```yaml
- task: PythonScript@0
  inputs:
    scriptSource: inline
    script: |
      import sys
      print ('Executing script file is:', str(sys.argv[0]))
      print ('The arguments are:', str(sys.argv))
      import argparse
      parser = argparse.ArgumentParser()
      parser.add_argument("--world", help="Provide the name of the world to greet.")
      args = parser.parse_args()
      print ('Hello ', args.world)
    arguments: --world Venus
```

### Install dependencies

You can use scripts to install specific PyPI packages with `pip`. For example, this YAML installs or upgrades `pip` and the `setuptools` and `wheel` packages.

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

Use scripts to install and run various tests in your pipeline.

### Run lint tests with flake8

To install or upgrade `flake8` and use it to run lint tests, use this YAML:

```yaml
- script: |
    python -m pip install flake8
    flake8 .
  displayName: 'Run lint tests'
```

### Test with pytest and collect coverage metrics with pytest-cov

Use this YAML to install `pytest` and `pytest-cov`, run tests, output test results in JUnit format, and output code coverage results in Cobertura XML format:

```yaml
- script: |
    pip install pytest pytest-azurepipelines
    pip install pytest-cov
    pytest --doctest-modules --junitxml=junit/test-results.xml --cov=. --cov-report=xml
  displayName: 'pytest'
```
::: moniker range=">=azure-devops-2020"
### Run tests with Tox

Azure Pipelines can run parallel Tox test jobs to split up the work. On a development computer, you have to run your test environments in series. This sample uses `tox -e py` to run whichever version of Python is active for the current job.

```yaml
- job:

  pool:
    vmImage: 'ubuntu-latest'
  strategy:
    matrix:
      Python38:
        python.version: '3.8'
      Python39:
        python.version: '3.9'
      Python310:
        python.version: '3.10'

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

Add the [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) to publish JUnit or xUnit test results to the server:

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Publish test results for Python $(python.version)'
```

### Publish code coverage results

Add the [Publish Code Coverage Results task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) to publish code coverage results to the server. You can see coverage metrics in the build summary and download HTML reports for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
```

## Package and deliver code

To authenticate with `twine`, use the [Twine Authenticate task](/azure/devops/pipelines/tasks/reference/twine-authenticate-v1) to store authentication credentials in the `PYPIRC_PATH` environment variable.

```yaml
- task: TwineAuthenticate@0
  inputs:
    artifactFeed: '<Azure Artifacts feed name>'
    pythonUploadServiceConnection: '<twine service connection from external organization>'
```

Then, add a custom [script](/azure/devops/pipelines/yaml-schema/steps-script) that uses `twine` to publish your packages.

```yaml
- script: |
   twine upload -r "<feed or service connection name>" --config-file $(PYPIRC_PATH) <package path/files>
```

You can also use Azure Pipelines to [build an image](containers/build-image.md) for your Python app and [push it to a container registry](containers/push-image.md).

::: moniker-end

## Related extensions

- [Azure DevOps plugin for PyCharm (IntelliJ)](https://plugins.jetbrains.com/plugin/7981) (Microsoft)  
- [Python in Visual Studio Code](https://code.visualstudio.com/docs/python) (Microsoft)  
