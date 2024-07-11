---
title: Customize Python pipelines
description:  See how to use Azure Pipelines to customize, build, test, package, and deliver Python apps and code.
ms.topic: conceptual
ms.custom: devx-track-python
ms.date: 07/09/2024
monikerRange: '<= azure-devops'
---

# Customize Python pipelines

This article describes how to customize building, testing, packaging, and delivering Python apps and code in Azure Pipelines. To create your first pipeline with Python, see the [Python quickstart](python.md).

::: moniker range=">=azure-devops"
With [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines, you can build your Python apps without having to set up your own infrastructure. Tools that you commonly use to build, test, and run Python apps, including `pip`, are preinstalled.

You might need to [request the free grant of parallel jobs](https://aka.ms/azpipelines-parallelism-request) or purchase a [parallel job](../licensing/concurrent-jobs.md) to run your pipelines.
::: moniker-end

::: moniker range="< azure-devops"
To build Python apps with Azure Pipelines, you need a [self-hosted agent](../agents/agents.md#self-hosted-agents) with Python installed. To install Python on your agent, see [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0#how-can-i-configure-a-self-hosted-agent-to-use-this-task).
::: moniker-end

### Use a specific Python version

To use a specific version of Python in your pipeline, add the [Use Python version task](/azure/devops/pipelines/tasks/reference/use-python-version-v0) to *azure-pipelines.yml*. The following example YAML pipeline definition sets the pipeline to use Python 3.11.

```yaml
steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.11'
```

### Use multiple Python versions

To run a pipeline with multiple Python versions, for example to test a package against those versions, define a `job` with a `matrix` of Python versions. Then set the `UsePythonVersion` task to reference the `matrix` variable. For example:

```yaml
jobs:
- job: 'Test'
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
    inputs:
      versionSpec: '$(python.version)'

```
You can add tasks that use each Python version in the matrix.

## Run Python scripts

To run Python scripts from your repository, use a `script` element and specify a filename. For example:

```yaml
- script: python src/example.py
```

You can also use the [Python script task](/azure/devops/pipelines/tasks/reference/python-script-v0) to run inline Python scripts.

```yaml
- task: PythonScript@0
  inputs:
    scriptSource: 'inline'
    script: |
      print('Hello world 1')
      print('Hello world 2')
```

To parameterize script execution, use the `PythonScript` task with `arguments` values to pass arguments into the running process. You can use `sys.argv` or the more sophisticated `argparse` library to parse the arguments.

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

You can use scripts to install specific PyPI packages with `pip`. The following example installs or upgrades `pip` and the `setuptools` and `wheel` packages.

```yaml
- script: python -m pip install --upgrade pip setuptools wheel
  displayName: 'Install tools'
```

### Install requirements

After you update `pip` and friends, a typical next step is to install dependencies from *requirements.txt*.

```yaml
- script: pip install -r requirements.txt
  displayName: 'Install requirements'
```

<a name="test"></a>
## Run tests

You can use scripts to install and run various tests in your pipeline.

### Run lint tests with flake8

The following YAML code installs or upgrades `flake8` and uses it to run lint tests.

```yaml
- script: |
    python -m pip install flake8
    flake8 .
  displayName: 'Run lint tests'
```

### Test with pytest and collect coverage metrics with pytest-cov

The following YAML code installs `pytest` and `pytest-cov` and runs tests, outputting test results in JUnit format and outputting code coverage results in Cobertura XML format.

```yaml
- script: |
    pip install pytest pytest-azurepipelines
    pip install pytest-cov
    pytest --doctest-modules --junitxml=junit/test-results.xml --cov=. --cov-report=xml
  displayName: 'pytest'
```
::: moniker range=">=azure-devops-2020"
### Run tests with Tox

Azure Pipelines can run parallel Tox test jobs to split up the work. On a development computer, you have to run your test environments in series. The following example uses `tox -e py` to run whichever version of Python is active for the current job.

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

Add the [Publish Test Results task](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) to publish JUnit or xUnit test results to the server.

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Publish test results for Python $(python.version)'
```

### Publish code coverage results

Add the [Publish code coverage results task](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) to publish code coverage results to the server. You can see coverage metrics in the build summary, and download HTML reports for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
```

## Package and deliver code

To authenticate with `twine`, use the [Python twine upload authenticate task](/azure/devops/pipelines/tasks/reference/twine-authenticate-v1) to store authentication credentials in the `PYPIRC_PATH` environment variable.

```yaml
- task: TwineAuthenticate@0
  inputs:
    artifactFeed: '<Azure Artifacts feed name>'
    pythonUploadServiceConnection: '<twine service connection from external organization>'
```

Then add a custom [script](/azure/devops/pipelines/yaml-schema/steps-script) that uses `twine` to publish your packages.

```yaml
- script: |
   twine upload -r "<feed or service connection name>" --config-file $(PYPIRC_PATH) <package path/files>
```

You can also use Azure Pipelines to [build an image](containers/build-image.md) for your Python app and [push it to a container registry](containers/push-image.md).

::: moniker-end

## Related content

- [Azure DevOps plugin for PyCharm (IntelliJ)](https://plugins.jetbrains.com/plugin/7981)
- [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python)
- [Build and publish a Python app](python.md)
- [Azure Pipelines task reference](/azure/devops/pipelines/tasks/reference)
- [Azure Pipelines agents](../agents/agents.md)