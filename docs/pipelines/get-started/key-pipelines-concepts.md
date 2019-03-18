---
title: Azure Pipelines New User Guide - Key concepts
ms.custom: seodec18
description: Learn how Azure Pipelines works with your code and tools to automate build and deployment, and the key concepts behind it.
ms.topic: overview
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.manager: elbatk
ms.date: 01/16/2019
monikerRange: 'azure-devops'
---

# Key concepts for new Azure Pipelines users

**Azure Pipelines**

Learn about the key concepts and components that are used in Azure Pipelines. Understanding the basic terms and parts of Azure Pipelines helps you further explore how it can help you deliver better code more efficiently and reliably.

## Agent

When your build or deployment runs, the system begins one or more jobs. An agent is installable software that runs one build or deployment job at a time.

For more in-depth information about the different types of agents and how to use them, see [Build and release agents](../agents/agents.md).

## Artifact

An artifact is a collection of files or packages published by a build. Artifacts are made available to subsequent tasks, such as distribution or deployment. For more information, see [Artifacts in Azure Pipelines](../artifacts/artifacts-overview.md).

## Build

A build represents one execution of a pipeline. It collects the logs associated with running the steps and the results of running tests.

## Continuous delivery

Continuous delivery &#40;CD&#41; is a process by which code is built, tested, and deployed to one or more test and production stages. Deploying and testing in multiple stages helps drive quality. Continuous integration systems produce deployable artifacts, which includes infrastructure and apps. Automated release pipelines consume these artifacts to release new versions and fixes to existing systems. Monitoring and alerting systems run constantly to drive visibility into the entire CD process. This process ensures that  errors are caught often and early.

## Continuous integration

Continuous integration &#40;CI&#41; is the practice used by development teams to simplify the testing and building of code. CI helps to catch bugs or problems early in the development cycle, which makes them easier and faster to fix. Automated tests and builds are run as part of the CI process. The process can run on a set schedule, whenever code is pushed, or both. Items known as artifacts are produced from CI systems. They're used by the continuous delivery release pipelines to drive automatic deployments.

## Deployment target

A deployment target is a virtual machine, container, web app, or any service that's used to host the application being developed. A pipeline might deploy the app to one or more deployment targets after build is completed and tests are run.

## Job

A build contains one or more jobs. Each job runs on an agent. A job represents an execution boundary of a set of steps. All of the steps run together on the same agent. For example, you might build two configurations - x86 and x64. In this case, you have one build and two jobs.

## Pipeline

A pipeline defines the continuous integration and deployment process for your app. It's made up of steps called tasks. It can be thought of as a script that defines how your test, build, and deployment steps are run.

## Release

When you use the classic editor, you create a release pipeline in addition to a build pipeline. A release is the term used to describe one execution of a release pipeline. It's made up of deployments to multiple stages.

## Task

A task is the building block of a pipeline. For example, a build pipeline might consist of build tasks and test tasks. A release pipeline consists of deployment tasks. Each task runs a specific job in the pipeline. To view the available tasks, see the [Build and release tasks](../tasks/index.md) reference. For information on creating custom tasks, see [Create a custom task](../../extend/develop/add-build-task.md).

## Trigger

A trigger is something that's set up to tell the pipeline when to run. You can configure a pipeline to run upon a push to a repository, at scheduled times, or upon the completion of another build. All of these actions are known as triggers. For more information, see [build triggers](../build/triggers.md) and [release triggers](../release/triggers.md).
