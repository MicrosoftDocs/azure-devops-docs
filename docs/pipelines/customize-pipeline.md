---
title: Customize your pipeline
ms.custom: seodec18
description: Step-by-step tutorial to customize a pipeline
ms.topic: quickstart
ms.assetid: b3a9043e-aa64-4824-9999-afb2be72f141
ms.manager: jepling
ms.author: vijayma
author: vijayma
ms.date: 07/21/2021
monikerRange: ">= azure-devops-2019"
---

# Customize your pipeline

[!INCLUDE [version-server-2019-rtm](includes/version-server-2019-rtm.md)]

This is a step-by-step guide on common ways to customize your pipeline.

## Prerequisite

Follow instructions in [Create your first pipeline](create-first-pipeline.md) to create a working pipeline.

## Understand the `azure-pipelines.yml` file

A pipeline is defined using a YAML file in your repo. Usually, this file is named `azure-pipelines.yml` and is located at the root of your repo.

* Navigate to the **Pipelines** page in Azure Pipelines and select the pipeline you created.
* Select **Edit** in the context menu of the pipeline to open the YAML editor for the pipeline. Examine the contents of the YAML file.

   ```yaml
    trigger:
    - main

    pool:
      vmImage: 'Ubuntu-latest'

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
    
This pipeline runs whenever your team pushes a change to the main branch of your repo. It runs on a Microsoft-hosted Linux machine. The pipeline process has a single step, which is to run the Maven task.

## Change the platform to build on

You can build your project on [Microsoft-hosted agents](../pipelines/agents/hosted.md) that already include SDKs and tools for various development languages. Or, you can use [self-hosted agents](../pipelines/agents/agents.md#install) with specific tools that you need.

* Navigate to the editor for your pipeline by selecting **Edit pipeline** action on the build, or by selecting **Edit** from the pipeline's main page.

* Currently the pipeline runs on a Linux agent:

    ```yaml
    pool:
      vmImage: "ubuntu-latest"
    ```

* To choose a different platform like Windows or Mac, change the `vmImage` value:

    ```yaml
    pool:
      vmImage: "windows-latest"
    ```

    ```yaml
    pool:
      vmImage: "macos-latest"
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
      vmImage: "ubuntu-latest"
    ```

    with the following content:

    ```yaml
    strategy:
      matrix:
        linux:
          imageName: "ubuntu-latest"
        mac:
          imageName: "macOS-latest"
        windows:
          imageName: "windows-latest"
      maxParallel: 3

    pool:
      vmImage: $(imageName)
    ```

* Select **Save** and then confirm the changes to see your build run up to three jobs on three different platforms.

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
    - main

    strategy:
      matrix:
        jdk10_linux:
          imageName: "ubuntu-latest"
          jdk_version: "1.10"
        jdk11_windows:
          imageName: "windows-latest"
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

* Select **Save** and then confirm the changes to see your build run two jobs on two different platforms and SDKs.

## Customize CI triggers

You can use a `trigger:` to specify the events when you want to run the pipeline. YAML pipelines are configured by default with a CI trigger on your default branch (which is usually main). You can set up triggers for specific branches or for pull request validation. For a pull request validation trigger just replace the `trigger:` step with `pr:` as shown in the two examples below.

* If you'd like to set up triggers, add either of the following snippets at the beginning of your `azure-pipelines.yml` file.

    ```yaml
    trigger:
      - main
      - releases/*
    ```

    ```yaml
    pr:
      - main
      - releases/*
    ```

    You can specify the full name of the branch (for example, `main`) or a prefix-matching wildcard (for example, `releases/*`).

## Pipeline settings

There are some pipeline settings that you don't manage in your YAML file, such as the YAML file path and enabled status of your pipeline. To configure these settings, navigate to the [pipeline details page](get-started/multi-stage-pipelines-experience.md#view-pipeline-details) and choose **More actions**, **settings**. For more information on navigating and browsing your pipelines, see [Navigating pipelines](get-started/multi-stage-pipelines-experience.md).

:::image type="content" source="media/customize-pipeline/pipeline-settings.png" alt-text="Pipeline settings.":::

From the **Pipeline settings** pane you can configure the following settings.

* **Processing of new run requests** - Sometimes you'll want to prevent new runs from starting on your pipeline. 
  * By default, the processing of new run requests is **Enabled**. This setting allows standard processing of all trigger types, including manual runs.
  * **Paused** pipelines allow run requests to be processed, but those requests are queued without actually starting. When new request processing is enabled, run processing resumes starting with the first request in the queue.
  * **Disabled** pipelines prevent users from starting new runs. All triggers are also disabled while this setting is applied. 
* **YAML file path** - If you ever need to direct your pipeline to use a different YAML file, you can specify the path to that file. This setting can also be useful if you need to move/rename your YAML file.
* **Automatically link work items included in this run** - The changes associated with a given pipeline run may have work items associated with them. Select this option to link those work items to the run. When **Automatically link work items included in this run** is selected, you must specify a either a specific branch, or `*` for all branches, which is the default. If you specify a branch, work items are only associated with runs of that branch. If you specify `*`, work items are associated for all runs. 

  :::image type="content" source="media/customize-pipeline/link-work-items.png" alt-text="Automatically link work items included in this run.":::

  * To get notifications when your runs fail, see how to [Manage notifications for a team](../notifications/manage-team-group-global-organization-notifications.md)

### Create work item on failure

YAML pipelines don't have a [Create work item on failure](build/options.md#create-a-work-item-on-failure) setting like classic build pipelines. Classic build pipelines are single stage, and **Create work item on failure** applies to the whole pipeline. YAML pipelines can be multi-stage, and a pipeline level setting may not be appropriate. To implement **Create work item on failure** in a YAML pipeline, you can use methods such as the [Work Items - Create](/rest/api/azure/devops/wit/work%20items/create?view=azure-devops-rest-6.1&preserve-view=true) REST API call or the Azure DevOps CLI [az boards work-item create](/cli/azure/boards/work-item#az_boards_work_item_create) command at the desired point in your pipeline. 

The following example has two jobs. The first job represents the work of the pipeline, but if it fails, the second job runs, and creates a bug in the same project as the pipeline.

```yml
# When manually running the pipeline, you can select whether it
# succeeds or fails.
parameters:
- name: succeed
  displayName: Succeed or fail
  type: boolean
  default: false

trigger:
- main

pool:
  vmImage: ubuntu-latest

jobs:
- job: Work
  steps:
  - script: echo Hello, world!
    displayName: 'Run a one-line script'

  # This malformed command causes the job to fail
  # Only run this command if the succeed variable is set to false
  - script: git clone malformed input
    condition: eq(${{ parameters.succeed }}, false)

# This job creates a work item, and only runs if the previous job failed
- job: ErrorHandler
  dependsOn: Work
  condition: failed()
  steps: 
  - bash: |
      az boards work-item create \
        --title "Build $(build.buildNumber) failed" \
        --type bug \
        --org $(System.TeamFoundationCollectionUri) \
        --project $(System.TeamProject)
    env: 
      AZURE_DEVOPS_EXT_PAT: $(System.AccessToken)
    displayName: 'Create work item on failure'
```

> [!NOTE] 
> Azure Boards allows you to configure your work item tracking using several different processes, such as Agile or Basic. Each process has different work item types, and not every work item type is available in each process. For a list of work item types supported by each process, see [Work item types (WITs)](../boards/work-items/about-work-items.md#work-item-types-wits).

The previous example uses [Runtime paramaters](process/runtime-parameters.md) to configure whether the pipeline succeeds or fails. When manually running the pipeline, you can set the value of the `succeed` parameter. The `script` step in the first job of the pipeline evaluates the `succeed` parameter and only runs when `succeed` is set to false.

The second job in the pipeline has a dependency on the first pipeline, and only runs if the first job fails. The second job uses the Azure DevOps CLI [az boards work-item create](/cli/azure/boards/work-item#az_boards_work_item_create) command to create a bug. For more information on running Azure DevOps CLI commands from a pipeline, see [Run commands in a YAML pipeline](../cli/azure-devops-cli-in-yaml.md).

This example uses two jobs, but this same approach could be used across [multiple stages](process/stages.md).

## Next steps

You've just learned the basics of customizing your pipeline. Next we recommend that you learn more about customizing a pipeline for the language you use:

* [.NET Core](ecosystems/dotnet-core.md)
* [Containers](ecosystems/containers/build-image.md)
* [Go](ecosystems/go.md)
* [Java](ecosystems/java.md)
* [Node.js](ecosystems/javascript.md)
* [Python](ecosystems/python.md)

Or, to grow your CI pipeline to a CI/CD pipeline, include a [deployment job](../pipelines/process/deployment-jobs.md) with steps to deploy your app to an [environment](../pipelines/process/environments.md).

To learn more about the topics in this guide see [Jobs](../pipelines/process/phases.md), [Tasks](../pipelines/process/tasks.md), [Catalog of Tasks](../pipelines/tasks/index.md), [Variables](../pipelines/process/variables.md), [Triggers](../pipelines/build/triggers.md), or [Troubleshooting](../pipelines/troubleshooting/troubleshooting.md).

To learn what else you can do in YAML pipelines, see [YAML schema reference](yaml-schema.md).
