---
title: Build and test Ruby apps
description: Learn how to use Azure Pipelines and scripts to build and test your Ruby projects.
ms.topic: quickstart
ms.assetid: 61052605-ec85-45ca-b57e-8664cd41c0ea
ms.author: vijayma
author: vijayma
ms.reviewer: dastahel
ms.custom: seodec18, freshness-fy22q2, kr2b-contr-experiment
ms.date: 01/20/2022
monikerRange: azure-devops
---

# Build and test Ruby apps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article explains how to automatically build Ruby projects.

## Create the Azure Pipelines

Do the following steps to set up a pipeline for a Ruby app.

1. Sign in to your Azure DevOps organization and go to your project.

1. Select **Pipelines** > **New pipeline**.

1. Select **GitHub** as the location of your source code.

   You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. Select your Ruby sample repository.

1. Select the `Ruby` template for your pipeline.

1. A YAML file gets generated. Select **Save and run** > **Commit directly to the main branch**, and then choose **Save and run** again.

1. Wait for the run to finish.

You have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

> [!TIP]
> To make changes to the YAML file as described in this article, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

## Build environment

You can use Azure Pipelines to build your Ruby projects without needing to set up any infrastructure of your own. Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Ruby that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of Ruby on Microsoft-hosted agents, add the [Use Ruby Version](/azure/devops/pipelines/tasks/reference/use-ruby-version-v0) task to the beginning of your pipeline.

### Use a specific Ruby version

Add the [Use Ruby Version](/azure/devops/pipelines/tasks/reference/use-ruby-version-v0) task to set the version of Ruby used in your pipeline. This snippet adds Ruby 2.4 or later to the path and sets subsequent pipeline tasks to use it.

```yaml
# https://learn.microsoft.com/azure/devops/pipelines/ecosystems/ruby
pool:
  vmImage: 'ubuntu-latest' # other options: 'macOS-latest', 'windows-latest'

steps:
- task: UseRubyVersion@0
  inputs:
    versionSpec: '>= 2.5'
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
    CALL gem install bundler
    bundle install --retry=3 --jobs=4
  displayName: 'bundle install'
```

### Run Rake

To execute Rake in the context of the current bundle (as defined in your Gemfile), add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: bundle exec rake
  displayName: 'bundle exec rake'
```

### Publish test results

The sample code includes unit tests written using [RSpec](https://rspec.info/). When Rake is run by the previous step, it runs the RSpec tests. The RSpec RakeTask in the Rakefile has been configured to produce JUnit style results using the RspecJUnitFormatter. 

Add the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task to publish JUnit style test results to the server. You get a rich test reporting experience that you can use for troubleshooting any failed tests and for test timing analysis.

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Ruby tests'
```
### Publish code coverage results

The sample code uses [SimpleCov](https://github.com/colszowka/simplecov) to collect code coverage data when unit tests get run. SimpleCov is configured to use Cobertura and HTML report formatters. 

Add the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v1) task to publish code coverage results to the server. When you do so, coverage metrics can be seen in the build summary and HTML reports can be downloaded for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

## Build an image and push to container registry

For your Ruby app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
