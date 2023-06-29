---
title: Quickstart - Use Azure Pipelines to build and publish a Python app
description: Automatically build and test Python apps with Azure Pipelines
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
ms.date: 12/20/2022
monikerRange: '>=azure-devops-2019'
ms.custom: devx-track-python, freshness-fy22q2
---

# Build Python apps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your CI/CD system. This article focuses on creating a basic pipeline. This quickstart walks through how to create a simple Flask app with three pages that use a common base template and deploy it with Azure DevOps. 

You don't have to set up anything for Azure Pipelines to build Python projects. Python is preinstalled on [Microsoft-hosted build agents](../agents/hosted.md) for Linux, macOS, or Windows. To see which Python versions are preinstalled, see [Use a Microsoft-hosted agent](../agents/hosted.md#software). 

To learn about configuring Python in pipelines, see [Customize Python](customize-python.md).

If you want a more complex example, see [Use CI/CD to deploy a Python web app to Azure App Service on Linux](python-webapp.md).

## Prerequisites

You must have the following items in Azure DevOps:

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 


## 1 - Fork the sample code

::: moniker range="azure-devops-2019"

Import this repo into your Git repo in Azure DevOps Server 2019:

::: moniker-end

::: moniker range=">=azure-devops-2020"

For the following sample Python Flask tutorial:

::: moniker-end

```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial
```

## 2 - Create your pipeline

::: moniker range=">=azure-devops-2020"

1. Sign in to [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines). Your browser will go to `https://dev.azure.com/my-organization-name` and display your Azure DevOps dashboard.

1. Go to your project and select **Pipelines** > **Create a new pipeline**.

1. Select **GitHub** as the location of your source code.

1. If you're redirected to GitHub to sign in, enter your GitHub credentials.

1. When the list of repositories appears, select your Python sample repository.

1. Azure Pipelines analyzes the code in your repository and recommends the `Python package` template for your pipeline. Select that template.

1. Azure Pipelines generates a YAML file for your pipeline. Select **Save and run** > **Commit directly to the main branch**, and then choose **Save and run** again.

1. A new run starts. Wait for the run to finish.

When you're done, you have a YAML file *azure-pipelines.yml* in your repository that's ready for you to customize.

### Customize your pipeline

1. Edit the `azure-pipelines.yml` file in your repository and update the Python version references.   

```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest
strategy:
  matrix:
    Python37:
      python.version: '3.7'
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
  displayName: 'Use Python $(python.version)'

- script: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
  displayName: 'Install dependencies'

- script: |
    pip install pytest pytest-azurepipelines
    pytest
  displayName: 'pytest'
```

::: moniker-end


::: moniker range="azure-devops-2019"

1. Add an `azure-pipelines.yml` file in your repository. Customize this snippet for your build. 

``` yaml
trigger:
- main

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

::: moniker-end


## 3 - Run your pipeline

Save and run your pipeline. After your pipeline runs, verify that the jobs ran successfully. 
    
:::image type="content" source="media/python-successful-jobs.png" alt-text="Screenshot of complete Python jobs.":::

## Next steps

Congratulations, you've successfully completed this quickstart! To run Python scripts or run specific versions of Python, see [Configure Python](customize-python.md).

> [!div class="nextstepaction"]
> [Configure Python](customize-python.md)
