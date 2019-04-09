---
title: Build and test Ruby apps
description: Automatically build and test Ruby apps with Azure Pipelines, Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 61052605-ec85-45ca-b57e-8664cd41c0ea
ms.manager: alewis
ms.author: dastahel
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 08/31/2018
monikerRange: 'azure-devops'
---

# Build and test Ruby apps

**Azure Pipelines**

This guidance explains how to automatically build Ruby projects.

## Example

For a working example of how to build a Ruby project, import into Azure Repos or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-ruby
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository.
You can use this file to build the project.

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a build pipeline for the sample project.

## Build environment

You can use Azure Pipelines to build your Ruby projects without needing to set up any infrastructure of your own. Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Ruby that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of Ruby on Microsoft-hosted agents, add the [Use Ruby Version](../tasks/tool/use-ruby-version.md) task to the beginning of your pipeline.

### Use a specific Ruby version

Add the [Use Ruby Version](../tasks/tool/use-ruby-version.md) task to set the version of Ruby used in your pipeline. This snippet adds Ruby 2.4 or later to the path and sets subsequent pipeline tasks to use it.

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/ruby
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

## Build a container image

You can also build and publish a Docker container image for your Ruby app. For more information, see [Docker](docker.md).
