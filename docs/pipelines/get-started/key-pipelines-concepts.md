---
title: Azure Pipelines New User Guide - Key Concepts
titleSuffix: Azure DevOps Services
description: Learn how Azure Pipelines works with your code and tools to automate build and deploy, and the key concepts behind it.
ms.topic: overview
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: 'vsts'
---

# Key concepts for new Azure Pipelines users

**Azure Pipelines**

Learn about the key concepts and components that are used in Azure Pipelines. Understanding the basic terms and parts of Azure Pipelines will help you further explore how it can help you deliver better code more efficiently and reliably.

## Agent

When your build or deployment runs, the system begins one or more jobs. An **agent** is installable software that runs one build or deployment job at a time.

The [Build and Release Agents article](../agents/agents.md) goes more in-depth about the different types of agents and how to use them.

## Artifact

A collection of files or packages published by a build and made available to subsequent tasks such as distribution or deployment.

## Build

A build represents one execution of a pipeline and it collects the logs associated with running the steps as well as the results of running tests.

[//]: # (## Continuous delivery)

[//]: # (**Continuous Delivery &#40;CD&#41;** is a process by which code is built, tested, and deployed to one or more test and production stages. Deploying and testing in multiple stages helps drive quality. **Continuous Integration** systems produce the deployable artifacts, including infrastructure and apps, automated release pipelines consume these artifacts to release new versions and fixes to existing systems. Monitoring and alerting systems run constantly to drive visibility into the entire CD process and to ensure errors are caught often and early.)

[//]: # (## Continuous integration)

[//]: # (**Continuous Integration &#41;CI&#41;** is the practice used by development teams to simplify the testing and building of code. CI helps to catch bugs or problems early in the development cycle, which makes them easier and faster to fix. Automated tests and builds are run as part of the CI process, which can be run on a set schedule, whenever code is pushed, or both. Items known as "artifacts" are produced from CI systems and used by the **Continuous Delivery** release pipelines to drive automatic deployments.)

## Deployment target

A virtual machine, container, web app, or any service that is used to host the application being developed. A pipeline may deploy the app to one or more deployment targets after build is completed and tests are run.

## Jobs

A build contains one or more **jobs**, each of which runs on an **agent**. A job represents an execution boundary of a set of steps, all of which run together on the same agent. For example, you may build two configurations - x86 and x64. In this case, you have one build and two jobs.

## Pipeline

A **pipeline** defines the continuous integration and deployment process for your app. It is made up of steps called **tasks** and can be thought of as a script that defines how your test, build, and deploy steps are run.

## Release

When you use the visual designer, you create a release pipeline in addition to a build pipeline. A **release** is the term used to describe one execution of a release pipeline. It is made up of deployments to multiple stages.

## Task

A **task** is the building block of a pipeline. For example, a build pipeline may consist of build tasks and test tasks, while a release pipeline will consist of deployment tasks. Each task runs a specific job in the **pipeline**.

## Triggers

A **trigger** is something that is set up to tell the pipeline when it should be run. You can configure a pipeline to be run upon a push to a repository, at scheduled times, or upon the completion of another build. All of these are known as **triggers**.
