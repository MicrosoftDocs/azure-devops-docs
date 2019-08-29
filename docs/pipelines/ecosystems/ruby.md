---
title: Build and test Ruby apps
description: Automatically build and test Ruby apps with Azure Pipelines, Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 61052605-ec85-45ca-b57e-8664cd41c0ea
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 08/31/2018
monikerRange: 'azure-devops'
---

# Build and test Ruby apps

**Azure Pipelines**

This guidance explains how to automatically build Ruby projects.

## Get started

Follow these instructions to set up a pipeline for a Ruby app.

1. The code in the following repository is a simple Ruby app. To get started, fork this repo to your GitHub account.

    ```
    https://github.com/MicrosoftDocs/pipelines-ruby
    ```

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select your Ruby sample repository.

1. Azure Pipelines will analyze the code in your repository and recommend `Ruby` template for your pipeline. Select that template.

1. Azure Pipelines will generate a YAML file for your pipeline. Select **Save and run**, then select **Commit directly to the master branch**, and then choose **Save and run** again.

1. A new run is started. Wait for the run to finish.

When you're done, you'll have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

> [!TIP]
> To make changes to the YAML file as described in this topic, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

## Build environment

You can use Azure Pipelines to build your Ruby projects without needing to set up any infrastructure of your own. Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Ruby that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of Ruby on Microsoft-hosted agents, add the [Use Ruby Version](../tasks/tool/use-ruby-version.md) task to the beginning of your pipeline.

### Use a specific Ruby version

Add the [Use Ruby Version](../tasks/tool/use-ruby-version.md) task to set the version of Ruby used in your pipeline. This snippet adds Ruby 2.4 or later to the path and sets subsequent pipeline tasks to use it.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/ecosystems/ruby
pool:
  vmImage: 'ubuntu-16.04' # other options: 'macOS-10.13', 'vs2017-win2016'

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

The sample code includes unit tests written using [RSpec](http://rspec.info/). When Rake is run by the previous step, it runs the RSpec tests. The RSpec RakeTask in the Rakefile has been configured to produce JUnit style results using the RspecJUnitFormatter. 

Add the [Publish Test Results](../tasks/test/publish-test-results.md) task to publish JUnit style test results to the server. When you do this, you get a rich test reporting experience that can be used for easily troubleshooting any failed tests and for test timing analysis.

```yaml
- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Ruby tests'
```

### Publish code coverage results

The sample code uses [SimpleCov](https://github.com/colszowka/simplecov) to collect code coverage data when unit tests are run. SimpleCov is configured to use Cobertura and HTML report formatters. 

Add the [Publish Code Coverage Results](../tasks/test/publish-code-coverage-results.md) task to publish code coverage results to the server. When you do this, coverage metrics can be seen in the build summary and HTML reports can be downloaded for further analysis.

```yaml
- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
```

## Build an image and push to container registry

For your Ruby app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
