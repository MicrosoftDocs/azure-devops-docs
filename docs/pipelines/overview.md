---
title: Start using Build and Release
titleSuffix: TFS
description: Build and deploy your app using Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B1233296-C583-4F2E-981C-82D6A39CFEE4
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/31/2018
ms.topic: overview
monikerRange: '>= tfs-2015 < azure-devops'
---

# Start using Build and Release

[!INCLUDE [version-tfs-only-2015](_shared/version-tfs-only-2015.md)]

Team Foundation Server (TFS) is the on-premises Azure DevOps offering. TFS includes Build and Release and can be installed and managed on your own servers.

![A typical CI and CD process for web applications](./_img/pipeline-concept-end-to-end.png)

Continuous Integration (CI) is the practice used by development teams to automate the merging and testing of code.  Implementing CI helps to catch bugs early in the development cycle, which makes them less expensive to fix.  Automated tests execute as part of the CI process to ensure quality.  Artifacts are produced from CI systems and fed to release processes to drive frequent deployments. The Build service in TFS helps you set up and manage CI for your applications.

Continuous Delivery (CD) is a process by which code is built, tested, and deployed to one or more test and production environments.  Deploying and testing in multiple environments drives quality.  CI systems produce the deployable artifacts including infrastructure and apps.  Automated release processes consume these artifacts to release new versions and fixes to existing systems.  Monitoring and alerting systems run continually to drive visibility into the entire CD process. The Release service in TFS helps you set up and manage CD for your applications.

Continuous Testing (CT) on-premises or in the cloud is the use of automated build-deploy-test workflows, with a choice of technologies and frameworks, that test your changes continuously in a fast, scalable, and efficient manner.

## Version control systems

The starting point for configuring CI and CD for your applications is to have your source code in a version control system. TFS supports two forms of version control - Git and Team Foundation Version Control. The Build service integrates with both of these version control systems. Once you have configured CI, any changes you push to your version control repository will be automatically built and validated. You can also manage your source code in Subversion, Bitbucket Cloud, GitHub, or any other Git repository. The Build service integrates with all of these version control systems.

## Application types

To configure CI, you create a build definition. A build definition is a representation of the automation process that you want to run to build and test your application. The automation process is defined as a collection of tasks. TFS has a number of tasks to build and test your application. For example, tasks exist to build .Net, Java, Node, Android, Xcode, and C++ applications. Similarly, there are tasks to run tests using a number of testing frameworks and services. You can also run command line, PowerShell, or Shell scripts in your automation.

## Deployment targets

Once you have continuous integration in place, the next step is to create a release definition to automate the deployment of your application to one or more environments. This automation process is again defined as a collection of tasks. TFS supports deploying your application to virtual machines, containers, on-premises and cloud platforms, or PaaS services. You can also publish your mobile application to a store.

## Continuous testing

Whether your app is on-premises or in the cloud, you can automate build-deploy-test workflows and choose the technologies and frameworks, then [test your changes continuously](languages/dotnet-core.md#run-your-tests) in a fast, scalable, and efficient manner. 

* Maintain quality and find problems as you develop. Continuous testing with TFS ensures your app still works after every check-in and build, enabling you to find problems earlier by running tests automatically with each build.
* Any test type and any test framework. Choose the test technologies and frameworks you prefer to use.
* Rich analytics and reporting. When your build is done, review your test results to start resolving the problems you find. Rich and actionable build-on-build reports 
let you instantly see if your builds are getting healthier. But it's not just about speed - detailed and customizable test results measure the quality of your app.

Now that you understand the basics, follow the quickstart to [create your first pipeline](create-first-pipeline.md).
