---
title: Build and test Ruby apps
description: Learn how to use Azure Pipelines and scripts to build and test your Ruby projects.
ms.topic: quickstart
ms.assetid: 61052605-ec85-45ca-b57e-8664cd41c0ea
ms.author: vijayma
author: vijayma
ms.reviewer: dastahel
ms.custom: freshness-fy22q2, kr2b-contr-experiment
ms.date: 06/09/2025
monikerRange: azure-devops
---

# Build and test Ruby apps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to use Azure Pipelines to to build, test, and deploy your Ruby application. 

## Create the Azure Pipelines

Follow these steps to set up a pipeline for a Ruby app.

1. Sign in to your Azure DevOps organization and go to your project.

1. Go to **Pipelines** > **New pipeline**.

1. Select **GitHub** as the location of your source code.

   You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. Select your Ruby sample repository.

1. Select the `Ruby` template for your pipeline.

1. A YAML file is generated. Select **Save and run** > **Commit directly to the main branch**, and then select **Save and run** again.

1. Wait for the run to finish.

You have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

> [!TIP]
> To make changes to the YAML file described in this article, select the pipeline on the **Pipelines** page, and then select **Edit** for the `azure-pipelines.yml` file.

## Build environment

You can use Azure Pipelines to build your Ruby projects without needing to set up any infrastructure of your own. Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Ruby that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of Ruby on Microsoft-hosted agents, add the [Use Ruby Version](/azure/devops/pipelines/tasks/reference/use-ruby-version-v0) task to the beginning of your pipeline.

### Use a specific Ruby version

Add the [Use Ruby Version](/azure/devops/pipelines/tasks/reference/use-ruby-version-v1) task to set the Ruby version in your pipeline. This snippet adds Ruby 3.4 or later to the path and sets subsequent pipeline tasks to use it.

```yaml
pool:
  vmImage: 'ubuntu-latest' 

steps:
- task: UseRubyVersion@1 
  inputs:
    versionSpec: '>= 3.4' 
    addToPath: true
  displayName: 'Set Ruby version'
```

### Install Rails

To install Rails, add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: gem install rails && rails -v
  displayName: 'Install Rails'
```

### Install dependencies

Use Bundler to install dependencies by adding the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: |
    gem install bundler
    bundle install --retry=3 --jobs=4
  displayName: 'Install dependencies with Bundler'
```

### Run Rake

To execute Rake in the context of the current bundle (as defined in your Gemfile), add the following snippet to your `azure-pipelines.yml` file.

```yaml
- script: bundle exec rake
  displayName: 'bundle exec rake'
```

### Publish test results

The sample code includes unit tests written with [RSpec](https://rspec.info/). When Rake runs in the previous step, it executes the RSpec tests. The RSpec RakeTask in the Rakefile is configured to produce JUnit-style results using the RspecJUnitFormatter. 

Add the [Publish Test Results](/azure/devops/pipelines/tasks/reference/publish-test-results-v2) task to publish JUnit-style test results to the server. 

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Ruby tests'
```
### Publish code coverage results

The sample code uses [SimpleCov](https://github.com/colszowka/simplecov) to collect code coverage data when unit tests get run. SimpleCov is configured to use Cobertura and HTML report formatters. 

Add the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) task to publish code coverage results to the server. This lets you view coverage metrics in the build summary and download HTML reports for further analysis.

```yaml
- task: PublishCodeCoverageResults@2
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
    failIfCoverageEmpty: true 
```

## Build an image and push to container registry

For your Ruby app, you can [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
