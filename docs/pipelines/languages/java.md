---
title: Build Java apps
description: Automatically building Java apps with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 604822a1-a46b-49d3-ad30-8152e9420758
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.topic: quickstart
ms.custom: seodec18
ms.date: 08/31/2018
monikerRange: '>= tfs-2017'
---

# Build Java apps

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

::: moniker range="<= tfs-2018"
> [!NOTE]
> 
> This guidance uses YAML-based pipelines available in Azure Pipelines. For TFS, use tasks that correspond to those used in the YAML below.
::: moniker-end

This guidance explains how to automatically build Java projects. (If you're working on an Android project, see [Build, test, and deploy Android apps](android.md).)

## Get started

Follow these instructions to set up a pipeline for a sample .NET Core app.

::: moniker range="azure-devops"

1. The code in the following repository is a simple Java app. To get started, fork this repo to your GitHub account.

    ```
    https://github.com/MicrosoftDocs/pipelines-java
    ```

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select your Java sample repository.

1. Azure Pipelines will analyze the code in your repository and recommend `Maven` template for your pipeline. Select that template.

1. Azure Pipelines will generate a YAML file for your pipeline. Select **Save and run**, then select **Commit directly to the master branch**, and then choose **Save and run** again.

1. A new run is started. Wait for the run to finish.

When you're done, you'll have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

> [!TIP]
> To make changes to the YAML file as described in this topic, select the pipeline in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

::: moniker-end

::: moniker range="< azure-devops"

1. The code in the following repository is a simple Java app. To get started, fork this repo to your GitHub account.

    ```
    https://github.com/MicrosoftDocs/pipelines-java
    ```

1. After you have the sample code in your own repository, create a pipeline by using the instructions in [Create your first pipeline](../create-first-pipeline.md) and select the **Maven** template. This selection automatically adds the tasks required to build the code in the sample repository.

1. Save the pipeline and queue a build to see it in action.

Read through the rest of this topic to learn some of the common ways to customize your Java pipeline.

::: moniker-end

## Build environment

::: moniker range="azure-devops"

You can use Azure Pipelines to build Java apps without needing to set up any infrastructure of your own. You can build on Windows, Linux, or MacOS images. The Microsoft-hosted agents in Azure Pipelines have modern JDKs and other tools for Java pre-installed. To know which versions of Java are installed, see [Microsoft-hosted agents](../agents/hosted.md).

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-16.04' # other options: 'macOS-10.13', 'vs2017-win2016'
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images.

As an alternative to using Microsoft-hosted agents, you can set up [self-hosted agents](../agents/agents.md#install) with Java installed. You can also use self-hosted agents to save additional time if you have a large repository or you run incremental builds.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../agents/agents.md#install). Make sure that you have Java installed on the agent.

::: moniker-end

## Build your code

### Maven

To build with Maven, add the following snippet to your `azure-pipelines.yml` file. Change values, such as the path to your `pom.xml` file, to match your project configuration. See the [Maven](../tasks/build/maven.md) task for more about these options.

```yaml
steps:
- task: Maven@3
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.11'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
    goals: 'package'
```

#### Customize the build path

Adjust the `mavenPomFile` value if your `pom.xml` file isn't in the root of the repository. The file path value should be relative to the root of the repository, such as `IdentityService/pom.xml` or `$(system.defaultWorkingDirectory)/IdentityService/pom.xml`.

#### Customize Maven goals

Set the **goals** value to a space-separated list of goals for Maven to execute, such as `clean package`.

For details about common Java phases and goals, see [Apache's Maven documentation](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html).

### Gradle

To build with Gradle, add the following snippet to your `azure-pipelines.yml` file. See the [Gradle](../tasks/build/gradle.md) task for more about these options.

```yaml
steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.11'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'build'
```

#### Choose the version of Gradle

The version of Gradle installed on the agent machine will be used unless your repository's `gradle/wrapper/gradle-wrapper.properties` file has a `distributionUrl` property that specifies a different Gradle version to download and use during the build.

#### Adjust the build path

Adjust the `workingDirectory` value if your `gradlew` file isn't in the root of the repository.
The directory value should be relative to the root of the repository, such as `IdentityService` or `$(system.defaultWorkingDirectory)/IdentityService`.

Adjust the `gradleWrapperFile` value if your `gradlew` file isn't in the root of the repository. The file path value should be relative to the root of the repository, such as `IdentityService/gradlew` or `$(system.defaultWorkingDirectory)/IdentityService/gradlew`.

#### Adjust Gradle tasks

Adjust the **tasks** value for the tasks that Gradle should execute, such as `build` or `check`.

For details about common Java Plugin tasks for Gradle, see [Gradle's documentation](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_tasks).

### Ant

To build with Ant, add the following snippet to your `azure-pipelines.yml` file. Change values, such as the path to your `build.xml` file, to match your project configuration. See the [Ant](../tasks/build/ant.md) task for more about these options.

```yaml
steps:
- task: Ant@1
  inputs:
    workingDirectory: ''
    buildFile: 'build.xml'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.11'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
```

### Script

To build with a command line or script, add one of the following snippets to your `azure-pipelines.yml` file.

#### Inline script

The `script:` step runs an inline script using Bash on Linux and macOS and Command Prompt on Windows. For details, see the [Bash](../tasks/utility/bash.md) or [Command line](../tasks/utility/powershell.md) task.

```yaml
steps:
- script: |
    echo Starting the build
    mvn package
  displayName: 'Build with Maven'
```

#### Script file

This snippet runs a script file that is in your repository. For details, see the [Shell Script](../tasks/utility/shell-script.md), [Batch script](../tasks/utility/batch-script.md), or [PowerShell](../tasks/utility/powershell.md) task.

```YAML
steps:
- task: ShellScript@2
  inputs:
    scriptPath: 'build.sh'
```

<!--
### Specify Gradle or Maven versions

### Specify JDK versions

### Which JDKs and Docker container image versions to use with Azure

## Dependency management

### Consume or publish artifacts using an external repository

### Consume or publish artifacts using a Maven repository in Azure Artifacts

### Improve build performance

#### Locally cache dependencies, upstream package management feature

### Reproduce builds

#### Store package repository settings in version control so dev local builds use the same artifacts as CI builds

## Build your project

### Run Maven and Gradle build targets

## Testing

### Run unit tests

#### Mocking considerations on the build system for multi-service or REST API dependent applications

### Publish test results

## Code coverage

### Produce code coverage data in your test runs

### Publish code coverage results

## Static code analysis

### CheckStyle

### FindBugs

### PMD

### SonarCloud

### SonarQube

## Packaging

### Build Docker container images

### Standalone executable JARs / dependency hell dangers

### Library artifacts used as dependencies for other projects in the organization

## Deploy

### Deploy as a Docker container to a Docker compute runtime host (VM, Kubernetes cluster, etc.)

### Deploy updated artifacts to a Maven repository (private or public)

### Deploy a executable standalone JAR file to a compute target (VM, App Service, etc.)

### Deploy a WAR to container target (Tomcat, etc.)
-->
