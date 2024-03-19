---
title: Quickstart - Use Azure Pipelines to build and publish a Python app
description: Automatically build and test Python apps with Azure Pipelines.
ms.topic: quickstart
ms.assetid: 141149f8-d1a9-49fa-be98-ee9a825a951a
monikerRange: '>=azure-devops-2019'
ms.custom: devx-track-python, freshness-fy22q2
---

# Build Python apps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can use Azure Pipelines to build, test, and deploy Python apps and scripts as part of your CI/CD system. 

In this quickstart, you learn how to create a pipeline to build a Python app.

::: moniker range=">=azure-devops"

You don't have to set up anything for Azure Pipelines to build Python projects. Python is preinstalled on [Microsoft-hosted build agents](../agents/hosted.md) for Linux, macOS, or Windows. To see which Python versions are preinstalled, see [Use a Microsoft-hosted agent](../agents/hosted.md#software). 

::: moniker-end

## Prerequisites

::: moniker range=">=azure-devops"

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps organization[Create one for free](../get-started/pipelines-sign-up.md). 
* An Azure DevOps project. Create one using the [Azure DevOps Project Creation Wizard](../../organizations/projects/create-project).
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 

::: moniker-end

::: moniker range="< azure-devops"

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps Server.
* An Azure DevOps project. Create one using the [Azure DevOps Server Project Creation Wizard](../../organizations/projects/create-project). 
* A self-hosted agent. To create one, see [Self-hosted agents](../agents/agents.md#self-hosted-agents).
* Python versions installed on your self-hosted agent. To learn how to install Python on your agent, see [UsePythonVersion](/azure/devops/pipelines/tasks/reference/use-python-version-v0#how-can-i-configure-a-self-hosted-agent-to-use-this-task).

::: moniker-end

## 1. Fork the sample code

::: moniker range="azure-devops-2019"

Import this repo into your Git repo in Azure DevOps Server 2019.

::: moniker-end

::: moniker range=">=azure-devops-2020"

Fork the following sample Python Flask tutorial to your GitHub account.

::: moniker-end

```html

https://github.com/Microsoft/python-sample-vscode-flask-tutorial

```

## 2. Create your pipeline

::: moniker range=">=azure-devops"

1. Sign in to [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines) and select **Start free**. Your browser goes to `https://dev.azure.com/<your-organization-name>`.

1. Go to your project and select **Pipelines** > **Create pipeline**.

1. Select **GitHub** as the location of your source code.

1. If you're redirected to GitHub to sign in, enter your GitHub credentials.

1. When the list of repositories appears, select your Python sample repository.

1. Azure Pipelines analyzes the code in your repository and recommends the `Python package` template for your pipeline. Select that template.

1. Azure Pipelines generates a YAML file for your pipeline. 

::: moniker-end

::: moniker range="< azure-devops"

1. In a browser, go to your DevOps Server collection.

1. Go to your project and select **Pipelines** > **Create a new pipeline**.

1. Select **GitHub** as the location of your source code.

1. If you're redirected to GitHub to sign in, enter your GitHub credentials.

1. When the list of repositories appears, select your Python sample repository.

1. Azure Pipelines analyzes the code in your repository and recommends the `Python package` template for your pipeline. Select that template.

1. Azure Pipelines generates a YAML file for your pipeline. 

::: moniker-end

## 3. Customize your pipeline

::: moniker range=">=azure-devops"

Update the Python versions.

```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest
strategy:
  matrix:
    Python310:
      python.version: '3.10'
    Python311:
      python.version: '3.11'
    Python312:
      python.version: '3.12'

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

::: moniker range="> azure-devops-2019 < azure-devops"

Customize the `azure-pipelines.yml` to match your project configuration. 

1. If you have a different agent pool, change the pool `name` parameter.
1. Change the Python versions to match the versions installed on your self-hosted agent.  

    ```yaml
    trigger:
    - main
    
    pool:
      name: default
    strategy:
      matrix:
        Python310:
          python.version: '3.10'
        Python311:
          python.version: '3.11'
        Python312:
          python.version: '3.12'
    
    
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

    If there's only a single version of Python on your agent, remove the matrix strategy and specify a single version of Python. For example:
  
    ```yaml
      trigger:
      - main
      
      pool: 
        name: '<your-pool-name or default>'
      
      steps:
      - task: UsePythonVersion@0
        inputs:
          versionSpec: '3.11'
        displayName: 'Use Python 3.11'
      
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

Edit the `azure-pipelines.yml` to match your project configuration.  

1. Change the trigger branch to `main`.
1. If you have a different agent pool, change the `pool:` keyword value to your pool name.
1. Update the Python version references to the versions installed on your self-hosted agent.  

    ```yaml
    trigger:
    - main
    
    pool: 'Default'
    strategy:
      matrix:
        Python310:
          python.version: '3.10'
        Python311:
          python.version: '3.11'
        Python312:
          python.version: '3.12'
    
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

    If there's only a single version of Python on your agent, remove the matrix strategy and specify a single version of Python. For example:
  
    ```yaml
      trigger:
      - main
      
      pool: 
        name: '<your-pool-name or default>'
      
      steps:
      - task: UsePythonVersion@0
        inputs:
          versionSpec: '3.11'
        displayName: 'Use Python 3.11'
      
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

## 4. Run your pipeline

Save and run your pipeline. 

1. Select **Save and run**.
1. In the **Save and run** dialog, select **Save and run**.
1. From the **Summary** tab, you can see the status of your pipeline run.
1. Verify that the build jobs ran successfully. 
  
:::image type="content" source="media/python-successful-jobs.png" alt-text="Screenshot of complete Python jobs.":::

## Clean up
  
When you're done with your quickstart, you can delete the project you created in Azure DevOps.

1. Select the **Project settings** gear icon in the lower left corner of the page.
1. At the bottom of the **Project overview** page, select **Delete**.
1. Enter the project name and select **Delete**.

Congratulations, you successfully completed this quickstart! 

## Next steps

* [Configure Python](customize-python.md)
* [Use CI/CD to deploy a Python web app to Azure App Service](python-webapp.md).
