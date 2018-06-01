---
title: Overview of Build and Release | VSTS & TFS
description: Build and deploy your app using Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B1233296-C583-4F2E-981C-82D6A39CFEE4
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/04/2016
ms.topic: overview
monikerRange: '>= tfs-2015'
---


# Build and Release in VSTS and TFS

Visual Studio Team Services (VSTS) is a collection of hosted DevOps services for application developers. Team Foundation Server (TFS) is the on-premises version of VSTS that you can install and manage on your own servers. Build and Release are two of the DevOps services in VSTS and TFS that help you manage continuous integration and delivery of your applications.

Continuous Integration (CI) is the practice used by development teams to automate the merging and testing of code.  Implementing CI helps to catch bugs early in the development cycle, which makes them less expensive to fix.  Automated tests execute as part of the CI process to ensure quality.  Artifacts are produced from CI systems and fed to release pipelines to drive frequent deployments. The Build service in VSTS and TFS helps you set up and manage CI for your applications.

Continuous Delivery (CD) is a process by which code is built, tested, and deployed to one or more test and production environments.  Deploying and testing in multiple environments drives quality.  CI systems produce the deployable artifacts including infrastructure and apps.  Automated release pipelines consume these artifacts to release new versions and fixes to existing systems.  Monitoring and alerting systems run continually to drive visibility into the entire CD process. The Release service in VSTS and TFS helps you set up and manage CD for your applications.

Continuous Testing (CT) on-premises or in the cloud is the use of automated build-deploy-test workflows, with a choice of technologies and frameworks, that test your changes continuously in a fast, scalable, and efficient manner.

## Version control systems

The starting point for configuring CI and CD for your applications is to have your source code in a version control system. VSTS and TFS support two forms of version control - Git and Team Foundation Version Control. The Build service integrates with both of these version control systems. Once you have configured CI, any changes you push to your version control repository will be automatically built and validated. You can also manage your source code in Subversion, Bitbucket, GitHub, or any other Git repository. The Build service integrates with all of these version control systems.

## Application types

To configure CI, you create a build definition. A build definition is a representation of the automation process that you want to run to build and test your application. The automation process is defined as a collection of tasks. VSTS and TFS have a number of tasks to build and test your application. For example, tasks exist to build .Net, Java, Node, Android, Xcode, and C++ applications. Similarly, there are tasks to run tests using a number of testing frameworks and services. You can also run command line, PowerShell, or Shell scripts in your automation.

## Deployment targets

Once you have continuous integration in place, the next step is to create a release definition to automate the deployment of your application to one or more environments. This automation process is again defined as a collection of tasks. VSTS and TFS support deploying your application to virtual machines, containers, on-premises and cloud platforms, or PaaS services. You can also publish your mobile application to a store.

## Package formats

If your goal is to produce packages that can be consumed by others, VSTS has a built-in package management repository. You can package and publish your application bits as NuGet, NPM, or Maven packages into the built-in repository or into any other package management repository of your choice.

In the various topics covered in this documentation, you will explore how to configure CI for the version control repository and development language of your choice, configure CD to the deployment target of your choice, and how to publish packages in the packaging format of your choice.
