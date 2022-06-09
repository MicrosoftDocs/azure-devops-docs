---
title: Build and test PHP apps
description: Build and test PHP apps with Azure Pipelines.
ms.topic: quickstart
ms.assetid: f8510914-9716-4a76-92be-333133fbd97b
ms.author: vijayma
ms.reviewer: dastahel
ms.custom: seodec18, freshness-fy22q2
ms.date: 12/22/2021
monikerRange: azure-devops
author: vijayma
---

# Build and test PHP apps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can create a pipeline that continuously builds, deploys, and tests your PHP projects. 

To get instructions for deploying to Azure App Service on Linux with a pipeline, see [Build and deploy to a PHP web app](php-webapp.md).

## Create a pipeline

1. Fork this GitHub repo: https://github.com/Azure-Samples/basic-php-composer.

2. Sign in to your Azure DevOps organization and go to your project.

3. Select **PHP** in the **Configure** tab.

4. Examine your new pipeline. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

5. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. Select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

When you want to make changes to your pipeline, select your pipeline on the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

Read further to learn some of the more common ways to customize your pipeline.

## Build environment

Use Azure Pipelines to build your PHP projects without requiring setup of infrastructure. PHP is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines, along with many common libraries per PHP version. You can use Linux, macOS, or Windows agents to run your builds.

For more information and the exact versions of PHP that get preinstalled, see [Microsoft-hosted agents](../agents/hosted.md#software).

### Use a specific PHP version

On the Microsoft-hosted Ubuntu agent, multiple versions of PHP are installed. A symlink at `/usr/bin/php` points to the currently set PHP version, so that when you run `php`, the set version executes. 

To use a PHP version other than the default, the symlink can be pointed to that version using the `update-alternatives` tool. Set the PHP version that you want by adding the following snippet to your `azure-pipelines.yml` file and change the value of the **phpVersion** variable.

```yaml
pool:
  vmImage: 'ubuntu-latest'

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

## Next steps

For your PHP app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
