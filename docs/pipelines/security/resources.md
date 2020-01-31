---
title: Protected resources
description: Best practices for permissions and approvals.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 9e635504-f56a-4d59-8629-ced0cbb03c77
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 1/31/2020
monikerRange: '> azure-devops-2019'
---

# Protected resources

Azure Pipelines offers security mechanisms beyond just protecting the YAML file and source code.
When pipelines run, access to protected resources goes through a system called [checks](TODO).
Checks can suspend or even fail a pipeline run in order to keep resources safe.
As a reminder, protected resources are [agent pools](TODO), [variable groups](TODO), [secure files](TODO), [service connections](TODO), and [environments](TODO).

## User permissions

The first line of defense for each of your protected resources is user permissions.
In general, ensure that you only give permissions to users that require it.
All the different types of protected resources have a similar security model.
Remember that a member of user role for one of these resources can:
- Remove approvers and checks configured on that resource
- Grant access to other users or pipelines to use that resource

![Screenshot of user permissions on pipelines](media/user-permissions.png)

## Pipeline permissions

When you use YAML pipelines, user permissions are not enough to secure your protected resources.
You can easily copy the name of a protected resource (e.g., a service connection for your production environment) and include that in a different pipeline.
This is where pipeline permissions come into play.
For each of the protected resources, ensure that you have disabled the option to grant access to "all pipelines".
Instead, explicitly granted access to specific pipelines that you trust.

![Screenshot of pipeline permissions](media/pipeline-permissions.png)

## Checks

A combination of user and pipeline permissions is still not enough to secure your protected resources.
If your pipeline already has permission to access one such resource, nothing prevents an adversary from creating another branch in your repository, injecting malicious code, and using the same pipeline to access that resource.
In order to prevent this, you need one or more of the following checks configured on your protected resource:
- **Manual approval check**.
Every run that uses a project protected resource is blocked for your manual approval before proceeding.
This gives you the opportunity to review the code and ensure that it is coming from the right branch.
- **Protected branch check**.
If you already have manual code review processes in place for some of your branches, and if you want to automate the deployment of code that has been merged into such protected branches, then configure a protected branch check on each of your resources.
This will automatically stop your pipeline from running on top of any user branches.
<!-- coming Q1 CY20
- **Azure function check**.
If you have some other logic to decide whether a run should be allowed to proceed, create an Azure function with your custom logic and configure that function to be a check on your protected resource.
For instance, your logic could ensure that the code has been reviewed by a certain number of reviewers, that it has been tested on a certain other environment, and that all the tests have passed.
-->

![Screenshot of configuring checks](media/configure-checks.png)

Runtime security can be enhanced through [template-based security](templates.md).
