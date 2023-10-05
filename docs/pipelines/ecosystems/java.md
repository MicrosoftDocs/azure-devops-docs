---
title: Build Java apps
description: Automatically build Java apps with Azure Pipelines.
ms.assetid: 604822a1-a46b-49d3-ad30-8152e9420758
ms.reviewer: dastahel
ms.custom: freshness-fy22q2, devdivchpfy22, devx-track-extended-java
ms.topic: quickstart
ms.date: 10/03/2022
monikerRange: '<= azure-devops'
---

# Build Java apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"
> [!NOTE]
> The following guidance uses YAML-based pipelines available in Azure Pipelines. Use tasks that correspond to those used in the following YAML.
::: moniker-end

You can use a pipeline to automatically build and test your Java projects. After you build and test your app, you can deploy your app to [Azure App Service](java-webapp.md), [Azure Functions](java-function.md), or [Azure Kubernetes Service](kubernetes/aks-template.md). If you're working on an Android project, see [Build, test, and deploy Android apps](android.md).

## Prerequisites

You must have the following items in Azure DevOps:

- A project. If you don't have one, [Create a project](../../organizations/projects/create-project.md) now.
- A pipeline. If you don't have one, [Create a pipeline](#build-your-code) now.

### Create a pipeline

::: moniker range="> azure-devops-2019"

1. Fork the following repo at GitHub:

   ```
   https://github.com/MicrosoftDocs/pipelines-java
   ```

1. Sign in to your Azure DevOps organization and go to your project.

1. Go to **Pipelines**, and then select **New pipeline**.

1. Perform the steps of the wizard by first selecting **GitHub** as the location of your source code. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. Select your repo. You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve & install**.

1. When you see the **Configure** tab, select **Maven** or **Gradle** or **Ant** depending on how you want to [build your code](#build-your-code).

1. When you're ready, select **Save and run**.

1. Commit a new _azure-pipelines.yml_ file to your repo. Select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   You just created and ran a pipeline, because your code appeared to be a good match for the [Maven](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/maven.yml) template that we automatically created for you.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repo that's ready for you to customize!

1. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Import the following repo into your Git repo in Azure DevOps Server 2019:

   ```
   https://github.com/MicrosoftDocs/pipelines-java
   ```

1. Save the pipeline and queue a build. When the ```Build #nnnnnnnn.n has been queued``` message appears, select the number link to see your pipeline in action. You now have a working pipeline that's ready for you to customize anytime!
::: moniker-end

::: moniker range="< azure-devops-2019"

1. Import the following repo into your Git repo in TFS:

   ```
   https://github.com/MicrosoftDocs/pipelines-java
   ```

      This template automatically adds the tasks you need to build the code in the sample repo.

1. Save the pipeline and queue a build. When the ```Build #nnnnnnnn.n has been queued``` message appears, select the number link to see your pipeline in action. You now have a working pipeline that's ready for you to customize anytime!

::: moniker-end

Read further to learn some of the more common ways to customize your pipeline.

## Build environment

::: moniker range=">=azure-devops-2020"

You can use Azure Pipelines to build Java apps without needing to set up any infrastructure of your own. You can build on Windows, Linux, or macOS images. The Microsoft-hosted agents in Azure Pipelines have modern JDKs and other tools for Java pre-installed. To know which versions of Java are installed, see [Microsoft-hosted agents](../agents/hosted.md).

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-latest' # other options: 'macOS-latest', 'windows-latest'
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images.

As an alternative to using Microsoft-hosted agents, you can set up [self-hosted agents](../agents/agents.md#install) with Java installed. You can also use self-hosted agents to save more time if you have a large repo or you can run incremental builds.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../agents/agents.md#install). Make sure that you have Java installed on the agent.

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Build your code

### Maven

With your Maven build, the following snippet gets added to your `azure-pipelines.yml` file. You can change values, such as the path to your `pom.xml` file, to match your project configuration. See the [Maven](/azure/devops/pipelines/tasks/reference/maven-v3) task for more information about these options.

```yaml
steps:
- task: Maven@4
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/TEST-*.xml'
    goals: 'package'
```

For [Spring Boot](https://spring.io/projects/spring-boot), you can use the [Maven](/azure/devops/pipelines/tasks/reference/maven-v3) task as well. Make sure that your `mavenPomFile` value reflects the path to your `pom.xml` file. For example, if you're using the [Spring Boot sample repo](https://github.com/spring-guides/gs-spring-boot), your path will be `complete/pom.xml`.

#### Customize the build path

Adjust the `mavenPomFile` value if your `pom.xml` file isn't in the root of the repo. The file path value should be relative to the root of the repo, such as `IdentityService/pom.xml` or `$(system.defaultWorkingDirectory)/IdentityService/pom.xml`.

#### Customize Maven goals

Set the **goals** value to a space-separated list of goals for Maven to execute, such as `clean package`.

For details about common Java phases and goals, see [Apache's Maven documentation](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html).

### Gradle

With the Gradle build, the following snippet gets added to your `azure-pipelines.yml` file. For more information about these options, see the [Gradle](/azure/devops/pipelines/tasks/reference/gradle-v3) task.

```yaml
steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'build'
```

#### Choose the version of Gradle

The version of Gradle installed on the agent machine will be used unless your repo's `gradle/wrapper/gradle-wrapper.properties` file has a `distributionUrl` property that specifies a different Gradle version to download and use during the build.

#### Adjust the build path

Adjust the `workingDirectory` value if your `gradlew` file isn't in the root of the repo.
The directory value should be relative to the root of the repo, such as `IdentityService` or `$(system.defaultWorkingDirectory)/IdentityService`.

Adjust the `gradleWrapperFile` value if your `gradlew` file isn't in the root of the repo. The file path value should be relative to the root of the repo, such as `IdentityService/gradlew` or `$(system.defaultWorkingDirectory)/IdentityService/gradlew`.

#### Adjust Gradle tasks

Adjust the **tasks** value for the tasks that Gradle should execute, such as `build` or `check`.

For more information about common Java Plugin tasks for Gradle, see [Gradle's documentation](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_tasks).

### Ant

With Ant build, the following snippet is added to your `azure-pipelines.yml` file. Change values, such as the path to your `build.xml` file to match your project configuration. For more information about these options, see the [Ant](/azure/devops/pipelines/tasks/reference/ant-v1) task.

```yaml
steps:
- task: Ant@1
  inputs:
    workingDirectory: ''
    buildFile: 'build.xml'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: false
    testResultsFiles: '**/TEST-*.xml'
```

### Script

To build with a command line or script, add one of the following snippets to your `azure-pipelines.yml` file.

#### Inline script

The `script:` step runs an inline script using Bash on Linux and macOS and Command Prompt on Windows. For details, see the [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) or [Command line](/azure/devops/pipelines/tasks/reference/cmd-line-v2) task.

```yaml
steps:
- script: |
    echo Starting the build
    mvn package
  displayName: 'Build with Maven'
```

#### Script file

This snippet runs a script file that is in your repo. For details, see the [Shell Script](/azure/devops/pipelines/tasks/reference/shell-script-v2), [Batch script](/azure/devops/pipelines/tasks/reference/batch-script-v1), or [PowerShell](/azure/devops/pipelines/tasks/reference/powershell-v2) task.

```YAML
steps:
- task: ShellScript@2
  inputs:
    scriptPath: 'build.sh'
```

## Next steps

After you've built and tested your app, you can upload the build output to Azure Pipelines, create and publish a Maven package, or package the build output into a _.war/jar_ file to be deployed to a web application.

::: moniker-end

::: moniker range=">=azure-devops-2020"

Learn more about creating a CI/CD pipeline for your deployment target:

- [Build and deploy to a Java web app](java-webapp.md)
- [Build and deploy Java to Azure Functions](java-function.md)
- [Build and deploy Java to Azure Kubernetes service](kubernetes/aks-template.md)

::: moniker-end

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
