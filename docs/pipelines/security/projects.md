---
title: Project structure
description: Using project structure to improve pipeline security.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 90fb461a-2315-4b60-a662-f022c9c770e2
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 2/04/2020
monikerRange: '> azure-devops-2019'
---

# Project structure

The first question that you face is about how to organize your team projects in Azure DevOps.
For that, it is important to understand what resources your pipeline has default access to.
[Resources](resources.md) are covered in another topic.

For now, it's enough to know that a pipeline can access two types of resources:
1. **Protected resources**.
Your pipelines often have access to secrets.
For instance, in order to sign your build, you need a signing certificate.
In order to deploy to a production environment, you need a credential to that environment.
In Azure Pipelines, service connections, variable groups, secure files, agent pools, and environments are all considered *protected* resources.
What makes them protected is that:
  a. They can be made accessible to specific users and specific pipelines within the project.
  They cannot be accessed by users and pipelines outside of a project.
  b. You can run additional manual or automated checks every time a pipeline uses one of these resources.
2. **Open resources**.
All the other resources in a project - repositories, artifacts, pipelines, test plans, work items, etc. - are considered *open* resources.
Every job in your pipeline has an auto-generated access token which has permissions to read open resources, and in some cases, to make updates to them.
In other words, while your user account may not have access to some of these open resources, scripts and tasks running in your pipeline do.
The security model in Azure DevOps also allows access to these resources from other projects in the organization.
If you choose to shut off pipeline access to some of these resources, you will only be able to do so for all pipelines in a project.
You cannot selectively grant access for an open resource to a specific pipeline.

Given the nature of open resources, you should consider managing each product and team in a separate project.
This ensures that a pipeline from one product cannot access open resources from another product, thereby preventing lateral exposure.
When multiple teams or products share a project, their resources cannot be granularly isolated from one another.
This is a good example of a tradeoff between security and sharing.

If your Azure DevOps organization was created prior to August 2019, the access token generated for each run may be able to access open resources in all projects of your organization.
Your organization administrator must review a key security setting in Azure Pipelines that turns off this access and enables project isolation for pipelines.
This setting can be found in **Azure DevOps** / **Organization settings** / **Pipelines** / **Settings**.

![Screenshot of job authorization scope UI](media/job-auth-scope.png)

Once you have the right project structure in place, the next area to consider is how your [repositories](repos.md) provide protection.
