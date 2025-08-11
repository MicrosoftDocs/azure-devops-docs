---
title: Key Azure Pipelines concepts
description: Learn the key concepts of how Azure Pipelines works with your code and tools to automate build and deployment.
ms.topic: overview
ms.date: 08/08/2025
monikerRange: 'azure-devops'
#customer intent: As a new Azure Pipelines user, I want to understand the key concepts and components that make up Azure Pipelines so I can more effectively build, test, and deploy my code.
---

# Key Azure Pipelines concepts

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article presents the key concepts and components that make up Azure Pipelines. Understanding the basic terms and parts of a pipeline can help you more effectively build, test, and deploy your code.

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=20e737aa-cadc-4603-9685-3816085087e9]

## Key concepts overview

The following graphic shows the main components and actions of a pipeline.

![Diagram that shows the key concepts of a pipeline.](media/key-concepts-overview.svg)

*Dave Jarvis contributed to this graphic.*

- A manual, scheduled, or automated [trigger](#triggers) causes a [pipeline](#pipelines) to start.
- A [pipeline](#pipelines) can contain one or more [stages](#stages) and deploy to one or more [environments](#environments).
- [Stages](#stages) are a way to organize pipelines, and each contains one or more [jobs](#jobs).
- [Jobs](#jobs) run on [agents](#agents), or can be agentless.
- Each [job](#jobs) contains one or more [steps](#steps).
- A [step](#steps) is the smallest element of a pipeline and can be a [task](#tasks) or a [script](#scripts).
- A [task](#tasks) is a prepackaged script that performs an action, such as invoking a REST API or publishing a build artifact.
- A pipeline [run](#runs) produces [artifacts](#artifacts) such as files or packages.

## Azure Pipelines terms

The following terms define key Azure Pipelines components and processes.

### Agents

An agent is computing infrastructure with installed agent software that runs one pipeline [job](#jobs) at a time. For example, a job could run on a Microsoft-hosted Ubuntu agent. For more information about different types of agents and how to use them, see [Azure Pipelines agents](../agents/agents.md).

A limited number of task steps can run without using an agent. For more information, see [Agentless jobs supported tasks](../process/phases.md#agentless-jobs-supported-tasks).

### Approvals and checks

[Approvals and checks](../process/approvals.md) define a set of validations required before a pipeline or stage runs. Manual approval is a common check for controlling deployments to production environments. If an environment has checks and approvals configured, pipeline runs pause until all checks and approvals complete successfully.

### Artifacts

Artifacts are collections of files or packages published by a [run](#runs) and made available to subsequent pipeline tasks like distribution or deployment. [Artifacts](../artifacts/artifacts-overview.md) in Azure Pipelines are different from [Azure Artifacts](../../artifacts/start-using-azure-artifacts.md), the part of Azure DevOps that lets you store, manage, and share packages with a single feed.

### Continuous delivery

Continuous delivery (CD) is a process for building, testing, and deploying code to one or more test and production environments. Deploying and testing in multiple [stages](#stages) helps drive quality by catching errors early and often.

Automated CD release pipelines can consume [artifacts](#artifacts) from [continuous integration (CI)](#continuous-integration) pipelines to release new versions and fixes. Constant monitoring and alerting provide visibility into the CD process.

### Continuous integration

Continuous integration (CI) is a process that runs automated tests and builds on a schedule, whenever code is pushed, or both. CI simplifies testing and building code, and helps catch problems early in the development cycle when they're easier and faster to fix. CI pipelines produce [artifacts](#artifacts) that [CD](#continuous-delivery) pipelines can use for automatic deployments.

### Deployment

For YAML pipelines, a deployment job is a collection of steps that run sequentially against an environment. Deployment jobs can use strategies like `runOnce`, `rolling`, and `canary`. For more information, see [Deployment jobs](../process/deployment-jobs.md).

In Classic pipelines, deployment runs the tasks for the deployment stage, which can include running automated tests, deploying build artifacts, and other specified actions.

### Deployment groups

In Azure Pipelines Classic release pipelines, a [deployment group](../release/deployment-groups/index.md) is a logical group of deployment target machines. Every target server in the deployment group requires a deployment agent installed. For more information, see [Provision agents for deployment groups](../release/deployment-groups/howto-provision-deployment-group-agents.md).

### Environments

An [environment](../process/environments.md) is a collection of resources like virtual machines, containers, web apps, or services where you deploy your application. Pipelines can deploy to one or more environments after completing a build and running tests.

### Jobs

A job represents an execution boundary of a set of steps that run sequentially on the same [agent](#agents). Pipeline [stages](#stages) can include one or more jobs. Jobs don't always run sequentially in stages by default.

Jobs are useful for running a series of steps in different environments. For example, your build stage could contain one job for building an `x86` configuration and another job for building an `x64` configuration.

Each job runs on an agent that runs all the steps in that job. A limited number of task steps support agentless jobs that run without an agent. For more information, see [Agentless jobs supported tasks](../process/phases.md#agentless-jobs-supported-tasks).

### Library

The Azure Pipelines [Library](../library/index.md) includes *secure files* and *variable groups*. [Secure files](../library/secure-files.md) are a way to store files and share them across pipelines. [Variable groups](../library/variable-groups.md) store values and secrets that you can pass into a YAML pipeline or make available across multiple pipelines.

### Pipelines

An Azure Pipelines pipeline defines a workflow for build, test, and deployment tasks, from running a batch file to automating the CI/CD process for an app. A pipeline consists of one or more stages that contain jobs and steps.

You can define pipelines by using [YAML-based](yaml-pipeline-editor.md) or [Classic](../release/define-multistage-release-process.md) editors. For more information, see [YAML vs Classic pipelines](pipelines-get-started.md).

### Releases

A [release](../release/releases.md) is a versioned set of artifacts specified in a Classic pipeline. The release includes a snapshot of all the information needed to run the release pipeline, such as stages, tasks, triggers, approval policies, and deployment options. You can create a release manually, with a deployment trigger, or with the REST API.

In YAML pipelines, the build and release stages are all included in the [multistage pipeline definition](multi-stage-pipelines-experience.md).

### Runs

A run represents one execution of a pipeline. During a run, Azure Pipelines first processes the pipeline and then sends the run to one or more agents to run the jobs. The run collects the logs from running the steps and the results of running tests. For more information, see [Pipeline runs](../process/runs.md).  

### Scripts

A script runs command line, PowerShell, or Bash code as a step in your pipeline. You can write [cross-platform scripts](../scripts/cross-platform-scripting.md) for macOS, Linux, and Windows. Unlike a prepackaged [task](#tasks), a script is custom code that's specific to your pipeline.

### Stages

A [stage](../process/stages.md) is a logical boundary in a pipeline that can mark separation of concerns, for example build, test, and production. Each stage contains one or more jobs. Multiple stages in a pipeline run one after another by default. You can specify other conditions for when a stage runs.

Defining stages in a pipeline is useful when:
- Separate groups manage different parts of the pipeline. For example, if different managers manage testing and deployment jobs, it makes sense to have separate testing and production stages.
- A set of [approvals](../process/approvals.md) is connected to a specific job or set of jobs. You can put these jobs into separate stages for approval.
- The pipeline has jobs that need to run a long time. You can put such jobs in their own stages.

### Steps

A step is the smallest building block of a pipeline. By default, steps run one after another in a [job](#jobs). A step can either be a [script](#scripts) or a [task](#tasks).

### Tasks

A [task](../process/tasks.md) is a prepackaged script or procedure abstracted with a set of inputs to define automation in a pipeline. For available tasks, see the [Azure Pipelines task reference](../tasks/index.md). For information on creating custom tasks, see [Add a custom pipelines task extension](../../extend/develop/add-build-task.md).

### Triggers

A trigger is an event that causes a pipeline to run. You can trigger a pipeline manually or to run on a set schedule. You can also trigger a pipeline to run automatically upon a push to a repository, upon the completion of another build, or under other conditions. For more information, see [Specify events that trigger pipelines](../build/triggers.md) and [Classic release triggers](../release/triggers.md).

## Related content

- [Approvals and checks](../process/approvals.md)
- [Azure Pipelines agents](../agents/agents.md)
- [Azure Pipelines task reference](../tasks/index.md)
- [Events that trigger pipelines](../build/triggers.md)
- [YAML vs Classic pipelines](pipelines-get-started.md)
