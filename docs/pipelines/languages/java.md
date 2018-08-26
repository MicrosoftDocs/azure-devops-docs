---
title: Java
description: Building Java projects using Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 604822a1-a46b-49d3-ad30-8152e9420758
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 08/31/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# Java

This guidance explains how to build Java projects.

## Example

This example shows how to build a Java project. To start, fork this repository into GitHub, or import it into Azure Repos or TFS:

```
https://github.com/adventworks/java-sample
```

The sample code includes an `azure-pipelines.yml` file at the root of the repository. You can use this file to build the app.

Follow all the instructions in [Create your first pipeline](../get-started-yaml.md) to create a build pipeline for the sample app.

Read through the rest of this topic to learn some of the common ways to customize your Java build pipeline.

## Build environment

### Choose an agent

You can use Azure Pipelines to build your Java projects on [Microsoft-hosted agents](../agents/hosted.md) that include tools for Java. Or, you can use [self-hosted agents](../agents/agents.md#install) with specific tools that you need.

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
pool: 'Hosted Linux Preview' # other options: 'Hosted macOS Preview', 'Hosted VS2017'
```

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
