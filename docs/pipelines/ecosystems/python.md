---
title: Build and test Python apps
description: Automatically build and test Python apps with Azure Pipelines
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
ms.date: 10/11/2022
monikerRange: '>=azure-devops-2019'
ms.custom: devx-track-python, freshness-fy22q2
---

# Build Python apps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your CI/CD system. This article focuses on creating a basic pipeline. 

If you want an end-to-end tutorial, see [Use CI/CD to deploy a Python web app to Azure App Service on Linux](python-webapp.md).

To create and activate an Anaconda environment and install Anaconda packages with `conda`, see [Run pipelines with Anaconda environments](./anaconda.md).

## Create your first pipeline

::: moniker range=">=azure-devops-2020"

New to Azure Pipelines? If so, then we recommend you try this section before moving on to other sections.

::: moniker-end

### Get the code
::: moniker range="azure-devops-2019"

Import this repo into your Git repo in Azure DevOps Server 2019:

::: moniker-end

::: moniker range=">=azure-devops-2020"

Import this repo into your Git repo:

::: moniker-end


```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial
```

::: moniker range=">=azure-devops-2020"

## Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

::: moniker-end

### Create the pipeline

::: moniker range=">=azure-devops-2020"

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **Python package** to create a Python package to test on multiple Python versions.

1. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

2. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   You just ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Python package](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/python-package.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

3. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

Read further to learn some of the more common ways to customize your pipeline.

::: moniker-end

::: moniker range="azure-devops-2019"

### YAML
1. Add an `azure-pipelines.yml` file in your repository. Customize this snippet for your build. 

``` yaml
trigger:
- master

pool: Default

steps:
- script: python -m pip install --upgrade pip
  displayName: 'Install dependencies'

- script: pip install -r requirements.txt
  displayName: 'Install requirements'
```

2. Create a pipeline (if you don't know how, see [Create your first pipeline](../create-first-pipeline.md)), and for the template select **YAML**.

3. Set the **Agent pool** and **YAML file path** for your pipeline. 

4. Save the pipeline and queue a build. When the **Build #nnnnnnnn.n has been queued** message appears, select the number link to see your pipeline in action.

5. When you're ready to make changes to your pipeline, **Edit** it.

Read further to learn some of the more common ways to customize your pipeline.

::: moniker-end

::: moniker range=">=azure-devops-2020"

## Build environment

You don't have to set up anything for Azure Pipelines to build Python projects. Python is preinstalled on [Microsoft-hosted build agents](../agents/hosted.md) for Linux, macOS, or Windows. To see which Python versions are preinstalled, see [Use a Microsoft-hosted agent](../agents/hosted.md#software). 

### Use a specific Python version

To use a specific version of Python in your pipeline, add the [Use Python Version task](../tasks/tool/use-python-version.md) to *azure-pipelines.yml*. This snippet sets the pipeline to use Python 3.6:

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

::: moniker-end

## Run Python scripts

To run Python scripts in your repository, use a `script` element and specify a filename. For example:

```yaml
- script: python src/example.py
```

You can also run inline Python scripts with the [Python Script task](../tasks/utility/python-script.md):

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

Add the [Publish Test Results task](../tasks/test/publish-test-results.md) to publish JUnit or xUnit test results to the server:

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Publish test results for Python $(python.version)'
```

### Publish code coverage results

Add the [Publish Code Coverage Results task](../tasks/test/publish-code-coverage-results.md) to publish code coverage results to the server. You can see coverage metrics in the build summary and download HTML reports for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
```

## Package and deliver code

To authenticate with `twine`, use the [Twine Authenticate task](../tasks/package/twine-authenticate.md) to store authentication credentials in the `PYPIRC_PATH` environment variable.

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
