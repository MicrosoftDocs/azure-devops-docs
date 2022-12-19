---
title: Quickstart - Use Azure Pipelines to build and publish a Python app
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

This quickstart walks through how to create a simple Flask app with three pages that use a common base template and deploy it with Azure DevOps. 

If you want a more complex example, see [Use CI/CD to deploy a Python web app to Azure App Service on Linux](python-webapp.md).

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

