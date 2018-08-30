---
title: PHP
description: CI and CD for PHP projects.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: f8510914-9716-4a76-92be-333133fbd97b
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 08/23/2018
monikerRange: '> tfs-2018'
---

# PHP

This guidance explains how to build PHP projects.

## Example

For a working example of how to build a PHP project, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-python-django
```

The sample code includes a `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the project.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample project.

## Build environment

You can use Azure Pipelines to build your PHP projects without needing to set up any infrastructure of your own. PHP is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines, along with many common libraries per PHP version. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of PHP that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md).

### Use a specific PHP version

```yaml
# /azure/devops/pipelines/languages/php
pool:
  vmImage: 'Ubuntu 16.04'

steps:
- script: ***************************************************************************
  displayName: 'Use PHP version 7.2'
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

```yaml
- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(system.defaultWorkingDirectory)'
    includeRootFolder: false
- task: PublishBuildArtifacts@1'
```

## Build a container image

You can also build and publish a Docker container image for your PHP app. For more information, see [Docker](docker.md).
