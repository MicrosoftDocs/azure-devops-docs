---
title: Build Java apps
description: Automatically build Java apps with Azure Pipelines.
ms.assetid: 604822a1-a46b-49d3-ad30-8152e9420758
ms.custom: freshness-fy22q2, devdivchpfy22, devx-track-extended-java
ms.topic: quickstart
ms.date: 02/08/2024
monikerRange: "<=azure-devops"
---

# Build Java apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can use a pipeline to automatically:

* Build your project using [Maven](https://maven.apache.org/), [Gradle](https://gradle.org/), or [Ant](https://ant.apache.org/).
* Run tests and code analysis tools.
* Publish your app to your pipeline and Azure Artifacts.
* Deploy your app to [Azure App Service](java-webapp.md), [Azure Functions](java-function.md), or [Azure Kubernetes Service](kubernetes/aks-template.md).

If you're working on an Android project, see [Build, test, and deploy Android apps](android.md).

## Prerequisites

To run the following example, you must have:

::: moniker range=">= azure-devops"

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure DevOps organization. [Create one for free](../get-started/pipelines-sign-up.md).
* An Azure DevOps project. If you don't have one, [Create a project](../../organizations/projects/create-project.md) now. 

::: moniker-end

::: moniker range="< azure-devops"

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* Access to an Azure DevOps Server collection.
* The ability to run Azure Pipelines on Azure DevOps self-hosted agents. 
* An Azure DevOps project. If you don't have one, [Create a project](../../organizations/projects/create-project.md) now.

::: moniker-end

## Create a GitHub repository

Fork the following repo to your GitHub account:

```text
https://github.com/MicrosoftDocs/pipelines-java
```

## Create a pipeline

::: moniker range=">= azure-devops"

1. Sign in to your Azure DevOps organization and go to your project.

1. Go to **Pipelines**, and then select **New pipeline** or **Create pipeline** if creating the first pipeline in the project.

1. Perform the steps of the wizard by first selecting **GitHub** as the location of your source code. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. Select your repo. You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve & install**.

1. When you see the **Configure your pipeline** tab, select **Maven**, **Gradle**, or **Ant** depending on how you want to [build your code](#build-your-code).

1. A `azure-pipelines.yml` file containing your pipeline definition is created in your repo and opened in the YAML editor. You can customize the pipeline by adding more tasks or modifying the existing tasks. For more information about the build tasks, see [Build your code](#build-your-code).

1. When you're finished editing the `azure-pipelines.yml`, select **Save and run**.

1. To commit the `azure-pipelines.yml` file to your repo, select **Save and run** again.

 Select **Job** to watch  your pipeline in action. 

::: moniker-end

::: moniker range="< azure-devops"

1. Go to your collection and select your project.

1. Select **Pipelines**, and then select **New pipeline** or **Create pipeline** if creating the first pipeline in the project.

1. Perform the steps of the wizard by first selecting **GitHub Enterprise Server** as the location of your source code.

1. Use an existing GitHub service connection or create a new one.

    To create a service connection:

    1. Select **Connect to GitHub Enterprise Server**.
    1. Enter your GitHub Enterprise Server URL.
    1. Enter your GitHub Enterprise Server personal access token. If you don't have a personal access token, you can create one in your GitHub Enterprise Server account. For more information, see [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

1. Select your repository. You might be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve & install**.

1. When you see the **Configure your pipeline** tab, select **Maven**, **Gradle**, or **Ant** depending on how you want to [build your code](#build-your-code).

1. An `azure-pipelines-yml` file containing your pipeline definition is created in your repo and opened in the YAML editor. You can customize the pipeline by adding more tasks or modifying the existing tasks. For more information about the build tasks, see [Build your code](#build-your-code).

1. When you're finished editing the `azure-pipelines.yml`, select **Save and run**.

1. To commit the `azure-pipelines.yml` file to your repo, select **Save and run** again.

  You can select **Job** to watch your pipeline in action.

::: moniker-end

You now have a working YAML pipeline (`azure-pipelines.yml`) in your repo that's ready for you to customize! To make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

## Build environment

::: moniker range=">= azure-devops"

You can use Azure Pipelines to build Java apps without needing to set up any infrastructure of your own. You can build on Windows, Linux, or macOS images. The Microsoft-hosted agents in Azure Pipelines have modern JDKs and other tools for Java preinstalled. To know which versions of Java are installed, see [Microsoft-hosted agents](../agents/hosted.md).

To select the appropriate image, update the following snippet in your `azure-pipelines.yml` file.

```yaml
pool:
  vmImage: 'ubuntu-latest' # other options: 'macOS-latest', 'windows-latest'
```

See [Microsoft-hosted agents](../agents/hosted.md) for a complete list of images.

As an alternative to using Microsoft-hosted agents, you can set up [self-hosted agents](../agents/agents.md#install) with Java installed. You can also use self-hosted agents to save more time if you have a large repo or you run incremental builds.

::: moniker-end

::: moniker range="< azure-devops"

Your builds run on a [self-hosted agent](../agents/agents.md#install). Make sure that you have Java and the tools necessary to build with your chosen method installed on the agent's host.

You can select your agent pool and the agent capabilities in the **Agent pool** and **Agent Specification** sections of the **Options** tab in the pipeline editor.

For example to specify the agent pool and an agent with the Maven capability, add the following snippet to your `azure-pipelines.yml` file.

```yaml
pool: 
  name: MyPool
  demands: maven
```

::: moniker-end

## Build your code

You can build your Java app with Maven, Gradle, Ant, or a script. The following sections show you how to add a build step to your pipeline for each method.

### Maven

With your Maven build, the following tasks are added to your `azure-pipelines.yml` file. Replace the values to match your project. For more information about the task options, see the [Maven task](/azure/devops/pipelines/tasks/reference/maven-v3).

```yaml
steps:
- task: Maven@4
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: 'default'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/TEST-*.xml'
    goals: 'package'
```

For [Spring Boot](https://spring.io/projects/spring-boot), you can use the [Maven](/azure/devops/pipelines/tasks/reference/maven-v3) task as well. Make sure that your `mavenPomFile` value reflects the path to your `pom.xml` file. For example, if you're using the [Spring Boot sample repo](https://github.com/spring-guides/gs-spring-boot), your path is `complete/pom.xml`.

#### Customize the build path

Adjust the `mavenPomFile` value if your `pom.xml` file isn't in the root of the repo. The file path value should be relative to the root of the repo, such as `IdentityService/pom.xml` or `$(system.defaultWorkingDirectory)/IdentityService/pom.xml`.

#### Customize Maven goals

Set the **goals** value to a space-separated list of goals for Maven to execute, such as `clean package`. For details about common Java phases and goals, see [Apache's Maven documentation](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html).

### Gradle

With the Gradle build, the following task is added to your `azure-pipelines.yml` file. For more information about these options, see the [Gradle](/azure/devops/pipelines/tasks/reference/gradle-v3) task.

```yaml
steps:
- task: Gradle@2
  inputs:
    workingDirectory: ''
    gradleWrapperFile: 'gradlew'
    gradleOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: 'default'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/TEST-*.xml'
    tasks: 'build'
```

#### Gradle wrapper

You need to have a `gradlew` file in your repo. If you don't have one, you can generate it by running `gradle wrapper` in your project's root directory. For information about creating a Gradle wrapper, see the [Gradle](/azure/devops/pipelines/tasks/reference/gradle-v3#how-do-i-generate-a-wrapper-from-my-gradle-project).

#### Choose the version of Gradle

The version of Gradle installed on the agent machine is used unless your repo's `gradle/wrapper/gradle-wrapper.properties` file has a `distributionUrl` property that specifies a different Gradle version to download and use during the build.

#### Adjust the build path

Adjust the `workingDirectory` value if your `gradlew` file isn't in the root of the repo.
The directory value should be relative to the root of the repo, such as `IdentityService` or `$(system.defaultWorkingDirectory)/IdentityService`.

Adjust the `gradleWrapperFile` value if your `gradlew` file isn't in the root of the repo. The file path value should be relative to the root of the repo, such as `IdentityService/gradlew` or `$(system.defaultWorkingDirectory)/IdentityService/gradlew`.

#### Adjust Gradle tasks

Adjust the **tasks** value for the tasks that Gradle should execute, such as `build` or `check`. For more information about common Java Plugin tasks for Gradle, see [Gradle's documentation](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_tasks).

### Ant

With Ant build, add the following task to your `azure-pipelines.yml` file. Change values, such as the path to your `build.xml` file, to match your project configuration. For more information about these options, see the [Ant](/azure/devops/pipelines/tasks/reference/ant-v1) task. If using the sample repo, you need to provide a `build.xml` file in your repo.

```yaml
steps:
- task: Ant@1
  inputs:
    workingDirectory: ''
    buildFile: 'build.xml'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: 'default'
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

This task runs a script file that is in your repo. For details, see the [Shell Script](/azure/devops/pipelines/tasks/reference/shell-script-v2), [Batch script](/azure/devops/pipelines/tasks/reference/batch-script-v1), or [PowerShell](/azure/devops/pipelines/tasks/reference/powershell-v2) task.

```YAML
steps:
- task: ShellScript@2
  inputs:
    scriptPath: 'build.sh'
```

## Next steps

You can publish your build output to your pipeline. You can package and publish your app in a Maven package or a _.war/jar_ file to be deployed to a web application.

::: moniker range=">=azure-devops-2020"

Learn more about creating a CI/CD pipeline for your deployment target:

- [Azure App Service](java-webapp.md)
- [Azure Functions](java-function.md)
- [Azure Kubernetes service](kubernetes/aks-template.md)

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
