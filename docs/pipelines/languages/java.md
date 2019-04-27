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

## Example

To get started using a sample Java project, fork this repository in GitHub, or import it into Azure Repos or TFS:

```
https://github.com/MicrosoftDocs/pipelines-java
```

Follow instructions in [Create your first pipeline](../create-first-pipeline.md) to create a build pipeline for the sample project.

The rest of this topic describes ways to customize your Java build pipeline.

## Choose an agent

You can use Azure Pipelines to build your Java projects on [Microsoft-hosted agents](../agents/hosted.md) that include modern JDKs and other tools for Java. Or, you can use [self-hosted agents](../agents/agents.md#install) with specific tools that you need.

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
# https://docs.microsoft.com/azure/devops/pipelines/languages/java
pool:
  vmImage: 'ubuntu-16.04' # Other options: 'macOS-10.13', 'vs2017-win2016'
```

## Build your code with Maven

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

### Customize Maven

#### Customize the build path

Adjust the `mavenPomFile` value if your `pom.xml` file isn't in the root of the repository. The file path value should be relative to the root of the repository, such as `IdentityService/pom.xml` or `$(system.defaultWorkingDirectory)/IdentityService/pom.xml`.

#### Customize Maven goals

Set the **goals** value to a space-separated list of goals for Maven to execute, such as `clean package`.

For details about common Java phases and goals, see [Apache's Maven documentation](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html).

## Build your code with Gradle

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

### Customize Gradle

#### Choose the version of Gradle

The version of Gradle installed on the agent machine will be used unless your repository's `gradle/wrapper/gradle-wrapper.properties` file has a `distributionUrl` property that specifies a different Gradle version to download and use during the build.

#### Adjust the build path

Adjust the `workingDirectory` value if your `gradlew` file isn't in the root of the repository.
The directory value should be relative to the root of the repository, such as `IdentityService` or `$(system.defaultWorkingDirectory)/IdentityService`.

Adjust the `gradleWrapperFile` value if your `gradlew` file isn't in the root of the repository. The file path value should be relative to the root of the repository, such as `IdentityService/gradlew` or `$(system.defaultWorkingDirectory)/IdentityService/gradlew`.

#### Adjust Gradle tasks

Adjust the **tasks** value for the tasks that Gradle should execute, such as `build` or `check`.

For details about common Java Plugin tasks for Gradle, see [Gradle's documentation](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_tasks).

## Build your code with Ant

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

## Build your code using a command line or script

To build with a command line or script, add one of the following snippets to your `azure-pipelines.yml` file.

### Inline script

The `script:` step runs an inline script using Bash on Linux and macOS and Command Prompt on Windows. For details, see the [Bash](../tasks/utility/bash.md) or [Command line](../tasks/utility/powershell.md) task.

```yaml
steps:
- script: |
    echo Starting the build
    mvn package
  displayName: 'Build with Maven'
```

### Script file

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
