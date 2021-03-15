---
title: Build and test PHP apps
description: Build and test PHP apps with Azure Pipelines, Azure DevOps
ms.topic: quickstart
ms.assetid: f8510914-9716-4a76-92be-333133fbd97b
ms.author: vijayma
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 11/05/2020
monikerRange: azure-devops
author: vijayma
---

# Build and test PHP apps

**Azure Pipelines**

Create a pipeline that continuously builds, deploys, and tests your PHP projects. 

For an end-to-end walkthrough of deploying to Azure App Service with a pipeline, see [Build and deploy to a PHP web app](php-webapp.md).


## Create your first pipeline

> Are you new to Azure Pipelines? If so, then we recommend you try this section before moving on to other sections.

### Get the code

[!INCLUDE [include](includes/get-code-before-sample-repo.md)]

```
https://github.com/MicrosoftDocs/pipelines-php
```

### Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

> When the **Configure** tab appears, select **PHP**.

1. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

2. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

3. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

4. See the sections below to learn some of the more common ways to customize your pipeline.

## Build environment

You can use Azure Pipelines to build your PHP projects without needing to set up any infrastructure of your own. PHP is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines, along with many common libraries per PHP version. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of PHP that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

### Use a specific PHP version

On the Microsoft-hosted Ubuntu agent, multiple versions of PHP are installed. A symlink at `/usr/bin/php` points to the currently set PHP version, so that when you run `php`, the set version executes. 

To use a PHP version other than the default, the symlink can be pointed to that version using the `update-alternatives` tool. Set the PHP version that you prefer by adding the following snippet to your `azure-pipelines.yml` file and changing the value of the **phpVersion** variable accordingly.

```yaml
pool:
  vmImage: 'ubuntu-16.04'

variables:
  phpVersion: 7.2

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

## Build image and push to container registry

For your PHP app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
