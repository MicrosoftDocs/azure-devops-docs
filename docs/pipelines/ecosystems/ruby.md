---
title: Build and test Ruby apps
description: Learn how to use Azure Pipelines and scripts to build and test your Ruby projects.
ms.topic: how-to
ms.assetid: 61052605-ec85-45ca-b57e-8664cd41c0ea
ms.custom: freshness-fy22q2, kr2b-contr-experiment
ms.date: 11/04/2025
monikerRange: "<=azure-devops"
# Customer intent: As a Ruby developer, I want to set up a CI/CD pipeline so that I can automate building, testing, and deploying my Ruby applications.
---

# Build and test Ruby apps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to use Azure Pipelines to automatically build, test, and deploy your Ruby applications. 

This guide covers:
- Setting up a basic Ruby pipeline
- Configuring different Ruby versions
- Installing dependencies with Bundler
- Running tests and publishing results
- Collecting code coverage metrics

## Prerequisites

::: moniker range=">=azure-devops"

Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) for Linux, macOS, and Windows. You don't have to set up anything more to build Ruby projects. To see which Ruby versions are preinstalled, see [Software](../agents/hosted.md#software).

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier.  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp; - To create a pipeline: you must be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Project Administrators group](../../organizations/security/permissions.md) can manage pipelines. <br> &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md).
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../library/service-endpoints.md) to authorize Azure Pipelines.|

::: moniker-end

::: moniker range="< azure-devops"

| **Product** | **Requirements**   |
|---|---|
| **Azure DevOps** | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br>   - A self-hosted agent with Ruby installed. To create one, see [Self-hosted agents](../agents/agents.md#self-hosted-agents).  <br> - Basic knowledge of YAML and Azure Pipelines. For more information, see [Create your first pipeline](../create-first-pipeline.md). <br> - **Permissions:**<br>      &nbsp;&nbsp;&nbsp;&nbsp;- To create a pipeline: you must be in the **Contributors** group and the group needs to have *Create build pipeline* permission set to Allow. Members of the [Project Administrators group](../../organizations/security/permissions.md) can manage pipelines. <br> &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections: You must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md).
| **GitHub** | - A [GitHub](https://github.com) account. <br>   - A [GitHub service connection](../library/service-endpoints.md) to authorize Azure Pipelines.|

::: moniker-end


## Create the Azure Pipelines

Follow these steps to set up a pipeline for a Ruby app.

1. Sign in to your Azure DevOps organization and go to your project.

1. Go to **Pipelines** > **New pipeline**.

1. Select **GitHub** as the location of your source code.

   You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. Select your Ruby sample repository.

1. Select the `Ruby` template for your pipeline.

1. A YAML file is generated. Select **Save and run** > **Commit directly to the main branch**, and then select **Save and run** again.

1. Wait for the pipeline run to complete. This typically takes 2-5 minutes for a basic Ruby project. 

You now have a working YAML file (`azure-pipelines.yml`) in your repository that automatically runs when you push code changes. This file can be customized to meet your project's specific needs.

> [!TIP]
> To make changes to the YAML file described in this article, select the pipeline on the **Pipelines** page, and then select **Edit** for the `azure-pipelines.yml` file.

## Build environment

You can use Azure Pipelines to build your Ruby projects without needing to set up any infrastructure of your own. Ruby is preinstalled on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. You can use Linux, macOS, or Windows agents to run your builds.

For the exact versions of Ruby that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software). To install a specific version of Ruby on Microsoft-hosted agents, add the [Use Ruby Version](/azure/devops/pipelines/tasks/reference/use-ruby-version-v0) task to the beginning of your pipeline.

### Use a specific Ruby version

Add the [Use Ruby Version](/azure/devops/pipelines/tasks/reference/use-ruby-version-v0) task to set the Ruby version in your pipeline. This snippet adds Ruby 3.4 or later to the path and sets subsequent pipeline tasks to use it. To see which Ruby versions are preinstalled on Microsoft-hosted agents, see [Software](../agents/hosted.md#software).

```yaml
pool:
  vmImage: 'ubuntu-latest' 

steps:
- task: UseRubyVersion@0 
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

Use Bundler to install your project's gem dependencies. Bundler reads your `Gemfile` and `Gemfile.lock` to ensure the same gem versions are installed in the pipeline as in your development environment.

```yaml
- script: |
    gem install bundler
    bundle install --retry=3 --jobs=4
  displayName: 'Install dependencies with Bundler'
```
The `--retry=3` flag retries failed installations up to 3 times, and `--jobs=4`å allows parallel installation of gems for faster builds.



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

The sample code uses [SimpleCov](https://github.com/colszowka/simplecov) to collect code coverage data when unit tests run. SimpleCov is configured to use Cobertura and HTML report formatters. 

Add the [Publish Code Coverage Results](/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) task to publish code coverage results to the server. This lets you view coverage metrics in the build summary and download HTML reports for further analysis.

```yaml
- task: PublishCodeCoverageResults@2
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
    failIfCoverageEmpty: true 
```

## Complete example pipeline

Here's a complete `azure-pipelines.yml` file that demonstrates all the concepts covered in this article. This pipeline:

- Triggers on changes to the main branch
- Uses Ubuntu as the build environment
- Sets up the specified Ruby version
- Installs project dependencies
- Runs tests using Rake
- Publishes test results and code coverage metrics

```yaml
# Ruby pipeline example
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

variables:
  rubyVersion: '3.4.7'

steps:
- task: UseRubyVersion@0
  inputs:
    versionSpec: '$(rubyVersion)'
    addToPath: true
  displayName: 'Set Ruby version to $(rubyVersion)'

- script: |
    gem install bundler
    bundle install --retry=3 --jobs=4
  displayName: 'Install dependencies'

- script: bundle exec rake
  displayName: 'Run tests with Rake'

- task: PublishTestResults@2
  condition: succeededOrFailed()
  inputs:
    testResultsFiles: '**/test-*.xml'
    testRunTitle: 'Ruby tests'
  displayName: 'Publish test results'

- task: PublishCodeCoverageResults@2
  inputs:
    codeCoverageTool: Cobertura
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
    reportDirectory: '$(System.DefaultWorkingDirectory)/**/coverage'
    failIfCoverageEmpty: true
  displayName: 'Publish code coverage'
```


## Build an image and push to container registry

For your Ruby app, you can [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).
