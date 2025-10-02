---
title: Build and test PHP apps
description: Learn how to build and test PHP apps with Azure Pipelines.
ms.topic: conceptual
ms.assetid: f8510914-9716-4a76-92be-333133fbd97b
ms.author: jukullam
ms.custom: freshness-fy22q2
ms.date: 10/02/2025
monikerRange: "<=azure-devops"
---

# Build and test PHP apps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article shows how to create an Azure Pipelines PHP pipeline that deploys a sample PHP project to Azure App Service. The pipeline uses continuous integration and continuous delivery (CI/CD) to build, test, and deploy the PHP app. You can also use the pipeline to configure your environment.

## Prerequisites

- Your own fork of the sample GitHub PHP project at [https://github.com/Azure-Samples/basic-php-composer](https://github.com/Azure-Samples/basic-php-composer).
- A PHP web app created for the project in Azure App Service. To quickly create a sample PHP web app, see [Create a PHP web app in Azure App Service](/azure/app-service/quickstart-php). Alternatively, you can use your own PHP project and web app.

You also need the following prerequisites:

[!INCLUDE [ecosystems-prerequisites](includes/ecosystems-prerequisites.md)]

>[!NOTE]
>[GitHub](https://github.com) might require authentication, authorization, or sign in to GitHub organizations or specific repositories. Follow instructions to complete the required processes. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Create the pipeline

1. In your Azure DevOps project, select **Pipelines** from the left navigation menu, and then select **New pipeline** or **Create pipeline** if this pipeline is the first in the project.
1. On the **Where is your code** page, select **GitHub**.
1. On the **Select a repository** page, select your forked **basic-php-composer** repository.
1. Azure Pipelines recognizes the code as a PHP app, and suggests several pipeline [templates](../process/templates.md) on the **Configure your pipeline** page. Select **PHP as Linux Web App on Azure**.
1. On the next screen, select your Azure subscription and select **Continue**. This action creates a service connection to your Azure resources.
1. On the next screen, select your Azure web app and select **Validate and configure**. Azure Pipelines creates an *azure-pipelines.yml* file and displays it in the YAML pipeline editor.
1. On the **Review your pipeline YAML** screen, review the code for your pipeline.

   The pipeline takes the following actions:
1. Ensure the PHP version is 8.3.
1. Examine your new pipeline. When you're ready, select **Save and run**.

[Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

1. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. Select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   You now have a working YAML pipeline (_azure-pipelines.yml_) in your repository that's ready for you to customize!

When you want to make changes to your pipeline, select your pipeline on the **Pipelines** page, and then **Edit** the _azure-pipelines.yml_ file.

Read further to learn some of the more common ways to customize your pipeline.

## Deploy to App Service

Use a pipeline to build a PHP web app and deploy to Azure App Service. Azure App Service is an HTTP-based service for hosting web applications, REST APIs, and mobile back ends.

You can use tasks to archive your files, publish a build artifact, and then use the [Azure Web App task](/azure/devops/pipelines/tasks/reference/azure-web-app-v1) to deploy to Azure App Service. 

This pipeline has two stages: Build and Deploy. In the Build stage, PHP 8.3 is installed with composer. The app files are archived and uploaded into a package named `drop`. During the Deploy phase, the `drop` package gets deployed to Azure App Service as a web app.  

```yaml

trigger:
- main

variables:
  # Azure Resource Manager connection created during pipeline creation
  azureSubscription: 'subscription-id'
  # Web app name
  webAppName: 'web-app-name'
  # Agent VM image name
  vmImageName: 'ubuntu-22.04'
  # Environment name
  environmentName: 'environment-name'
  # Root folder under which your composer.json file is available.
  rootFolder: $(System.DefaultWorkingDirectory)

stages:
- stage: Build
  displayName: Build stage
  variables:
    phpVersion: '8.3'
  jobs:
  - job: BuildJob
    pool:
      vmImage: $(vmImageName)
    steps:
    - script: |
        sudo update-alternatives --set php /usr/bin/php$(phpVersion)
        sudo update-alternatives --set phar /usr/bin/phar$(phpVersion)
        sudo update-alternatives --set phpdbg /usr/bin/phpdbg$(phpVersion)
        sudo update-alternatives --set php-cgi /usr/bin/php-cgi$(phpVersion)
        sudo update-alternatives --set phar.phar /usr/bin/phar.phar$(phpVersion)
        php -version
      workingDirectory: $(rootFolder)
      displayName: 'Use PHP version $(phpVersion)'

    - script: composer install --no-interaction --prefer-dist
      workingDirectory: $(rootFolder)
      displayName: 'Composer install'

    - task: ArchiveFiles@2
      displayName: 'Archive files'
      inputs:
        rootFolderOrFile: '$(rootFolder)'
        includeRootFolder: false
        archiveType: zip
        archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
        replaceExistingArchive: true

    - upload: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
      displayName: 'Upload package'
      artifact: drop

- stage: Deploy
  displayName: 'Deploy Web App'
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: DeploymentJob
    pool:
      vmImage: $(vmImageName)
    environment: $(environmentName)
    strategy:
      runOnce:
        deploy:
          steps:
          - task: AzureWebApp@1
            displayName: 'Deploy Azure Web App'
            inputs:
              azureSubscription: $(azureSubscription)
              appName: $(webAppName)
              package: $(Pipeline.Workspace)/drop/$(Build.BuildId).zip
```

## Configure build environment

Use Azure Pipelines to build your PHP projects without setting up infrastructure.

### Use a specific PHP version

 PHP is preinstalled on [Microsoft-hosted agents](../agents/hosted.md), along with many common libraries per PHP version. You can use Linux, macOS, or Windows agents to run your builds. For more information and the exact versions of PHP that get preinstalled, see [Microsoft-hosted agents](../agents/hosted.md#software).

On the Microsoft-hosted Ubuntu agent, multiple versions of PHP are installed. A symlink at `/usr/bin/php` points to the currently set PHP version, so that when you run `php`, the set version executes. 

To use a PHP version other than the default, the symlink can be pointed to that version using the `update-alternatives` tool. Set the PHP version that you want by adding the following snippet to your `azure-pipelines.yml` file and change the value of the **phpVersion** variable.

```yaml
pool:
  vmImage: 'ubuntu-22.04'

variables:
  phpVersion: 8.2

steps:
- script: |
    sudo update-alternatives --set php /usr/bin/php$(phpVersion)
    sudo update-alternatives --set phar /usr/bin/phar$(phpVersion)
    sudo update-alternatives --set phpdbg /usr/bin/phpdbg$(phpVersion)
    sudo update-alternatives --set php-cgi /usr/bin/php-cgi$(phpVersion)
    sudo update-alternatives --set phar.phar /usr/bin/phar.phar$(phpVersion)
    php -version
  displayName: 'Use PHP version $(phpVersion)'
```

### Install dependencies

To use Composer to install dependencies, add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: composer install --no-interaction --prefer-dist
  displayName: 'composer install'
```

### Test with phpunit

To run tests with phpunit, add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: ./phpunit
  displayName: 'Run tests with phpunit'
```

### Retain the PHP app with the build record

To save the artifacts of this build with the build record, add the following snippet to your `azure-pipelines.yml` file.
Optionally, customize the value of **rootFolderOrFile** to alter what is included in the archive.

```yaml
- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(system.defaultWorkingDirectory)'
    includeRootFolder: false
- task: PublishBuildArtifacts@1
```

### Using a custom composer location

If your composer.json is in a subfolder instead of the root directory, you can use the ```--working-dir``` argument to tell composer what directory to use. For example, if your composer.json is inside the subfolder ```pkgs```

```composer install --no-interaction --working-dir=pkgs```

You can also specify the absolute path, using the built-in system variables:

```composer install --no-interaction --working-dir='$(system.defaultWorkingDirectory)/pkgs'```