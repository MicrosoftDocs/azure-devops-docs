---
title: Customize your pipeline
ms.custom: seodec18
description: Step-by-step tutorial to customize a pipeline
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: b3a9043e-aa64-4824-9999-afb2be72f141
ms.manager: jepling
ms.author: vijayma
author: vijayma
ms.date: 4/24/2019
monikerRange: "azure-devops"
---

# Customize your pipeline

**Azure Pipelines**

This is a step-by-step guide on common ways to customize your pipeline.

## Prerequisite

Follow instructions in [Create your first pipeline](create-first-pipeline.md) to create a working pipeline.

## Understand the `azure-pipelines.yml` file

A pipeline is defined using a YAML file in your repo. Usually, this file is named `azure-pipelines.yml` and is located at the root of your repo.

* Navigate to the **Pipelines** page in Azure Pipelines and select the pipeline you created.
* Select **Edit** in the context menu of the pipeline to open the YAML editor for the pipeline. Examine the contents of the YAML file.

   ```yaml
    trigger:
    - master

    pool:
      vmImage: 'Ubuntu-16.04'

    steps:
      - task: Maven@3
        inputs:
          mavenPomFile: 'pom.xml'
          mavenOptions: '-Xmx3072m'
          javaHomeOption: 'JDKVersion'
          jdkVersionOption: '1.8'
          jdkArchitectureOption: 'x64'
          publishJUnitResults: false
          testResultsFiles: '**/surefire-reports/TEST-*.xml'
          goals: 'package'
   ```

   > [!Note]
   > The contents of your YAML file may be different depending on the sample repo you started with, or upgrades made in Azure Pipelines.
    
This pipeline runs whenever your team pushes a change to the master branch of your repo. It runs on a Microsoft-hosted Linux machine. The pipeline process has a single step, which is to run the Maven task.

## Change the platform to build on

You can build your project on [Microsoft-hosted agents](../pipelines/agents/hosted.md) that already include SDKs and tools for various development languages. Or, you can use [self-hosted agents](../pipelines/agents/agents.md#install) with specific tools that you need.

* Navigate to the editor for your pipeline by selecting **Edit pipeline** action on the build, or by selecting **Edit** from the pipeline's main page.

* Currently the pipeline runs on a Linux agent:

    ```yaml
    pool:
      vmImage: "ubuntu-16.04"
    ```

* To choose a different platform like Windows or Mac, change the `vmImage` value:

    ```yaml
    pool:
      vmImage: "vs2017-win2016"
    ```

    ```yaml
    pool:
      vmImage: "macos-10.13"
    ```
    
* Select **Save** and then confirm the changes to see your pipeline run on a different platform.

## Add steps

You can add additional **scripts** or **tasks** as steps to your pipeline. A task is a pre-packaged script. You can use tasks for building, testing, publishing, or deploying your app. For Java, the Maven task we used handles testing and publishing results, however, you can use a task to publish code coverage results too.

* Open the YAML editor for your pipeline.

* Add the following snippet to the end of your YAML file.

    ```yaml
    - task: PublishCodeCoverageResults@1
      inputs:
        codeCoverageTool: "JaCoCo"
        summaryFileLocation: "$(System.DefaultWorkingDirectory)/**/site/jacoco/jacoco.xml"
        reportDirectory: "$(System.DefaultWorkingDirectory)/**/site/jacoco"
        failIfCoverageEmpty: true
    ```
    
* Select **Save** and then confirm the changes.

* You can view your test and code coverage results by selecting your build and going to the **Test** and **Coverage** tabs.

## Build across multiple platforms

You can build and test your project on multiple platforms. One way to do it is with `strategy` and `matrix`. You can use variables to conveniently put data into various parts of a pipeline. For this example, we'll use a variable to pass in the name of the image we want to use.

* In your `azure-pipelines.yml` file, replace this content:

    ```yaml
    pool:
      vmImage: "ubuntu-16.04"
    ```

    with the following content:

    ```yaml
    strategy:
      matrix:
        linux:
          imageName: "ubuntu-16.04"
        mac:
          imageName: "macos-10.13"
        windows:
          imageName: "vs2017-win2016"
      maxParallel: 3

    pool:
      vmImage: $(imageName)
    ```

* Select **Save** and then confirm the changes to see your build run three jobs on three different platforms.

> Each agent can run only one job at a time. To run multiple jobs in parallel you must configure multiple agents. You also need sufficient [parallel jobs](../pipelines/licensing/concurrent-jobs.md).

## Build using multiple versions

To build a project using different versions of that language, you can use a `matrix` of versions and a variable. In this step you can either build the Java project with two different versions of Java on a single platform or run different versions of Java on different platforms.

* If you want to build on a single platform and multiple versions, add the following matrix to your `azure-pipelines.yml` file before the Maven task and after the vmImage.

    ```yaml
    strategy:
      matrix:
        jdk10:
          jdk_version: "1.10"
        jdk11:
          jdk_version: "1.11"
      maxParallel: 2
    ```

* Then replace this line in your maven task:

    ```yaml
    jdkVersionOption: "1.11"
    ```

    with this line:

    ```yaml
    jdkVersionOption: $(jdk_version)
    ```

* Make sure to change the `$(imageName)` variable back to the platform of your choice.

* If you want to build on multiple platforms and versions, replace the entire content in your `azure-pipelines.yml` file before the publishing task with the following snippet:

    ```yaml
    trigger:
    - master

    strategy:
      matrix:
        jdk10_linux:
          imageName: "ubuntu-16.04"
          jdk_version: "1.10"
        jdk11_windows:
          imageName: "vs2017-win2016"
          jdk_version: "1.11"
      maxParallel: 2

    pool:
      vmImage: $(imageName)

    steps:
      - task: Maven@3
        inputs:
          mavenPomFile: "pom.xml"
          mavenOptions: "-Xmx3072m"
          javaHomeOption: "JDKVersion"
          jdkVersionOption: $(jdk_version)
          jdkArchitectureOption: "x64"
          publishJUnitResults: true
          testResultsFiles: "**/TEST-*.xml"
          goals: "package"
    ```

* Select **Save** and then confirm the changes to see your build run three jobs on three different platforms and SDKs.

## Customize CI triggers

You can use a `trigger:` to specify the events when you want to run the pipeline. YAML pipelines are configured by default with a CI trigger on your default branch (which is usually master). You can set up triggers for specific branches or for pull request validation. For a pull request validation trigger just replace the `trigger:` step with `pr:` as shown in the two examples below.

* If you'd like to set up triggers, add either of the following snippets at the beginning of your `azure-pipelines.yml` file.

    ```yaml
    trigger:
      - master
      - releases/*
    ```

    ```yaml
    pr:
      - master
      - releases/*
    ```

    You can specify the full name of the branch (for example, `master`) or a prefix-matching wildcard (for example, `releases/*`).

## Next Steps

You've just learned the basics of customizing your pipeline. Next we recommend that you learn more about customizing a pipeline for the language you use:

* [.NET Core](languages/dotnet-core.md)
* [Docker](languages/docker.md)
* [Go](languages/go.md)
* [Java](languages/java.md)
* [Node.js](languages/javascript.md)
* [Python](languages/python.md)

Or, to grow your CI pipeline to a CI/CD pipeline, include a [deployment job](../pipelines/process/deployment-jobs.md) with steps to deploy your app to an [environment](../pipelines/process/environments.md).

To learn more about the topics in this guide see [Jobs](../pipelines/process/phases.md), [Tasks](../pipelines/process/tasks.md), [Catalog of Tasks](../pipelines/tasks/index.md), [Variables](../pipelines/process/variables.md), [Triggers](../pipelines/build/triggers.md), or [Troubleshooting](../pipelines/troubleshooting.md).

To learn what else you can do in YAML pipelines, see [YAML schema reference](yaml-schema.md).