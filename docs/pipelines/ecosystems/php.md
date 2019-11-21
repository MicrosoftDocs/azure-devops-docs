---
title: Build and test PHP apps
description: Build and test PHP apps with Azure Pipelines, Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: f8510914-9716-4a76-92be-333133fbd97b
ms.manager: mijacobs
ms.author: dastahel
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 08/31/2018
monikerRange: 'azure-devops'
---

# Build and test PHP apps

**Azure Pipelines**

This guidance explains how to automatically build and test PHP projects.

## Example

For a working example of how to build a PHP project, import (into Azure Repos) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-php
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the project.

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a build pipeline for the sample project.

## Build environment

You can use Azure Pipelines to build your PHP projects without needing to set up any infrastructure of your own. PHP is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines, along with many common libraries per PHP version. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of PHP that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

### Use a specific PHP version

On the Microsoft-hosted Ubuntu agent, multiple versions of PHP are installed. A symlink at `/usr/bin/php` points to the currently set PHP version, so that when you run `php`, the set version executes. To use a PHP version other than the default, the symlink can be pointed to that version using the `update-alternatives` tool. Set the PHP version that you prefer by adding the following snippet to your `azure-pipelines.yml` file and changing the value of the **phpVersion** variable accordingly.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/ecosystems/php
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
- script: phpunit
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

If your composer.json is in a subfolder instead of the root directory, you can leverage the ```--working-dir``` argument to tell composer what directory to use. For example, if your composer.json is inside the subfolder ```pkgs```

```composer install --no-interaction --working-dir=pkgs```

You can also specify the absolute path, using the built-in system variables:

```composer install --no-interaction --working-dir='$(system.defaultWorkingDirectory)/pkgs'```

## Build image and push to container registry

For your PHP app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
