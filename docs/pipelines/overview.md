---
title: Overview of Azure Pipelines
titleSuffix: Azure Pipelines
description: Build and deploy your app using Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B1233296-C583-4F2E-981C-82D6A39CFEE4
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/31/2018
ms.topic: overview
monikerRange: 'vsts'
---

# Get started with Azure Pipelines

Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users. It works with just about any language or project type.

Pipelines combines both **Continuous Integration (CI)** and **Continuous Deployment (CD)** to constantly and consistently test and build your code and ship it to any target. 

## Does Azure Pipelines work with my language and tools?

### Languages

You can use practically any language with Azure Pipelines, including **Python, Java, PHP, Ruby, C#, and Go.**

### Version control systems

The starting point for using CI and CD practices for your applications is to have your source code in a version control system. Azure Pipelines integrates with **GitHub, Azure Repos, BitBucket,** and **Subversion**.

### Application types

You can use Azure Pipelines with most application types, including **Java, JavaScript, Python, .NET, PHP, Go, XCode, and C++**.

### Deployment targets

Azure Pipelines can be used to deploy your code to multiple targets, such as **container registries, virtual machines, Azure services, or to any on-premises or cloud target.**

### Package formats

If your goal is to produce packages that can be consumed by others, you can publish **NuGet, npm, or Maven packages** to the built-in package management repository in Azure Pipelines or any other package management repository of your choice.

## How to use Azure Pipelines

You can either use [YAML](get-started-yaml.md) to define your pipelines or use the [visual designer](get-started-designer.md) to do the same. 

When you use YAML, you define your pipeline mostly in code (a YAML file) alongside the rest of the code for your app. 
When you use the visual designer, you define a **build pipeline** to build and test your code, and then to publish artifacts. You also define a **release pipeline** to consume and deploy those artifacts to deployment targets.

### Use Azure Pipelines with YAML

You can configure your pipelines in a YAML file that exists alongside your code.

1. Configure Azure Pipelines to use your Git repo.
2. Edit your `azure-pipelines.yml` file to define your build.
3. Push your code to your version control repository, this will kick off the default trigger to build and deploy, and monitor the results.
4. Your code is now updated, built, tested, and packaged and can be deployed to any target.

![Pipelines YAML intro image ](_img/pipelines-image-yaml.png)

Benefits of using YAML:

* The pipeline is versioned with your code and follows the same branching structure as your code, so you get validation of your changes through code reviews in pull requests and branch build policies.
* Every branch you use can modify the build policy by modifying the `azure-pipelines.yml` file.
* If a change to the build process causes a break or results in an unexpected outcome, you can much more easily identify the issue because the change is in version control with the rest of your codebase.

If you think the YAML workflow is best for you, take the next step by [creating your first pipeline using YAML](get-started-yaml.md).

### Use Azure Pipelines in the visual designer

You can create and configure your build and release pipelines in the Azure DevOps web poral with the visual designer. 

1. Configure Azure Pipelines to use your Git repo.
2. Use the Azure Pipelines visual designer to create  and configure your build and release pipelines.
3. Push your code to your version control repository which triggers your pipeline, running any tasks such as building or testing code.
5. The build creates an artifact that is used by the rest of your pipeline, running any tasks such as deploying to staging or production.
6. Your code is now updated, built, tested, and packaged and can be deployed to any target.

![Pipelines designer intro image](_img/pipelines-image-designer.png)
    
Benefits of using the visual designer:

The visual designer is great for users that are new to the world of CI and CD.

* The visual representation of the pipelines makes it easier to get started. 
* The visual designer is located in the same section as the build results, making it easier to switch back and forth and make changes if needed.

If you think the designer workflow is best for you, take the next step by [creating your first pipeline using the visual designer](get-started-designer.md).

## Key Concepts for new users

Understanding the basic terms and parts of Pipelines will help you further explore how it can help you deliver better code more efficiently and reliably.

### Agent

When your build or deployment runs, the system begins one or more jobs. An **agent** is installable software that runs one build or deployment job at a time.

The [Build and Release Agents article](agents/agents.md) goes more in-depth about the different types of agents and how to use them.

### Artifact

A collection of files or packages published by a build and made available to subsequent tasks such as distribution or deployment.

### Build

A build represents one execution of a pipeline and it collects the logs associated with running the steps as well as the results of running tests.

### Deployment target

A virtual machine, container, web app, or any service that is used to host the application being developed. A pipeline may deploy the app to one or more deployment targets after build is completed and tests are run.

### Jobs

A build contains one or more **jobs**, each of which runs on an **agent**. A job represents an execution boundary of a set of steps, all of which run together on the same agent. For example, you may build two configurations - x86 and x64. In this case, you have one build and two jobs.

### Pipeline

A **pipeline** defines the continuous integration and deployment process for your app. It is made up of steps called **tasks** and can be thought of as a script that defines how your test, build, and deploy steps are run.

### Release

When you use the visual designer, you create a release pipeline in addition to a build pipeline. A **release** is the term used to describe one execution of a release pipeline. It is made up of deployments to multiple stages.

### Task

A **task** is the building block of a pipeline. For example, a build pipeline may consists of build tasks and test tasks, while a release pipeline will consist of deployment tasks. Each task runs a specific job in the **pipeline**.

### Triggers

A **trigger** is something that is set up to tell the pipeline when it should be run. You can configure a pipeline to be run upon a push to a repository, at a particular point of time, or upon the completion of another build. All of these are known as **triggers**.

## Next steps

Now that you understand the basics, follow the quickstart to [create your first pipeline](get-started-yaml.md).
