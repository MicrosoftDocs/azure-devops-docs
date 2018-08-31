---
title: Ruby
description: CI and CD for Ruby projects.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 61052605-ec85-45ca-b57e-8664cd41c0ea
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 08/31/2018
monikerRange: '> tfs-2018'
---

# PHP

This guidance explains how to build Ruby projects.

## Example

For a working example of how to build a Ruby project, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-python-django
```

The sample code includes a `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the project.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample project.

## Build environment

You can use Azure Pipelines to build your Ruby projects without needing to set up any infrastructure of your own. Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Ruby that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md). To install a specific version of Ruby on Microsoft-hosted agents, add the [Use Ruby Version](../tasks/tool/use-ruby-version.md) task to the beginning of your pipeline.

### Use a specific Ruby version

Add the [Use Ruby Version](../tasks/tool/use-ruby-version.md) task to set the version of Ruby used in your pipeline. This snippet adds Ruby 2.4 or later to the path and sets subsequent pipeline tasks to use it.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/ruby
pool:
  vmImage: 'Ubuntu 16.04' # other options: 'macOS 10.13', 'VS2017-Win2016'

steps:
- task: UseRubyVersion@0
  inputs:
    versionSpec: '>= 2.4'
    addToPath: true
```

### Install Rails

To install Rails, add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: gem install rails && rails -v
  displayName: 'gem install rails'
```

### Install dependencies

To use Bundler to install dependencies, add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: |
    gem install bundler
    bundle install --retry=3 --jobs=4
  displayName: 'bundle install'
```

### Run Rake

To execute Rake in the context of the current bundle (as defined in your Gemfile), add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: bundle exec rake
  displayName: 'bundle exec rake'
```

## Build a container image

You can also build and publish a Docker container image for your Ruby app. For more information, see [Docker](docker.md).
