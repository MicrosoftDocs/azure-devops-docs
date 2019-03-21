---
title: Understand key concepts and features
titleSuffix:  Azure DevOps
ms.custom: seodec18
description: Before you start to use our products, you'll want to become familiar with how the set of platforms, services, and tools fit together
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 76ED7BD4-BD95-450F-BA33-649B80C23BE5
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 03/07/2019
---

# What are the key concepts for working with Azure DevOps?

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The set of platforms, services, and tools you have access to through Azure DevOps can be overwhelming. Before you start to use our products, become familiar with how they fit together. Gain that understanding here, along with pointers to additional articles and tutorials to gain confidence in using our products to develop your software.

## Collaborative and integrated software development

Azure DevOps Services is our hosted cloud offering and Azure DevOps Server is our on-premises platform. They provide small teams and large enterprises with the services and tools to support developing and continuously deploying software. Even sole developers can use our platforms to manage their software and deploy their apps.

The three main areas that support software development include:

- Source control to manage versioning of software files.
- Tracking tools to support planning and tracking work, code defects, issues and more.
- DevOps tools to support building, testing, and continuous release of software apps.

## Source control

Source or version control systems allow developers to collaborate on code and track changes made to the code base. Source control is an essential tool for multi-developer projects.  

Our systems support two types of source control: Git (distributed) or Team Foundation Version Control (TFVC), a centralized, client-server system. Both systems enable you to check in files and organize files within folders, branches, and repositories.

With Git, each developer has a copy on their dev machine of the source repository, including all branch and history information. Each developer works directly with their own local repository and changes are shared between repositories as a separate step.

Developers commit each set of changes and do version control operations like history and compare without a network connection. Branches are lightweight. When developers need to switch contexts, they create a private local branch and can switch from one branch to another to pivot among different variations of the codebase. Later, they merge, publish, or dispose of the branch.

>[!NOTE]
>Git in Azure DevOps is standard Git. You can use Visual Studio with third-party Git services. You can also use third-party Git clients with Azure DevOps Server.

With TFVC, developers have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server.


## Work tracking and Agile tools

Software development projects require ways to easily share information and track the status of work, tasks, issues, or code defects. In the past, perhaps you used one or more tools, such as Microsoft Excel, Microsoft Project, a bug tracking system, or a combination of tools. Now, many teams have adopted Agile methods and practices to support planning and development.

Our systems provide several types of work items that you use to track features, requirements, user stories, tasks, bugs, and issues. Each work item is associated with a work item type and a set of fields that can be updated, as progress is made.

For planning purposes, you have access to several types of backlogs and boards to support the main Agile methods&mdash;Scrum, Kanban, or Scrumban.

- Product backlog: Used to create and rank stories or requirements.  
- Kanban: Used to visualize and manage the flow of work as it moves from beginning, to in-progress, to done.
- Sprint backlogs: Used to plan work to complete during a sprint cycle, a regular two to four-week cadence that teams use when implementing Scrum.
- Task board: Used during daily Scrum meetings to review work that's completed, remaining, or blocked.

Project managers and developers share information by tracking work items on the backlogs and boards. Useful charts and dashboards complete the picture and help teams monitor progress and trends.

## Continuous integration

The rapid and reliable release of software comes from automating as many processes as possible. Our systems support build, test, and release automation.

- You can define builds to automatically run whenever a team member checks in code changes.
- Your build pipelines can include instructions to run tests after the build runs.
- Release pipelines support managing deployment of your software builds to staging or production environments.

![Multiple platform continuous integrations](../_img/multi-platform.png)

## Scaling

Both Azure DevOps Services and Azure DevOps Server are enterprise-ready, supporting teams of any size, from tens to thousands. Azure DevOps Services provides a scalable, reliable, and globally available hosted service. It's backed by a 99.9% SLA, monitored by our 24x7 operations team, and available in local data centers around the world.

To learn more, see [About projects and scaling your organization](../organizations/projects/about-projects.md). Also, for stories and short videos on how Microsoft transitioned from waterfall to Agile, see [Scaling Agile across the enterprise](https://stories.visualstudio.com/scaling-agile-across-the-enterprise/).

## Customization and configuration of resources

You can configure and customize most services and applications to support your business needs or the way your teams work. For a comprehensive view of what resources can be configured, see [About team, project, and organizational-level settings](../organizations/settings/about-settings.md).

::: moniker range="azure-devops"

- **Dashboards**: Each team can [configure their set of dashboards](../report/dashboards/dashboards.md) to share information and monitor their progress. 
- **Source control**: For each [Git repository](../repos/git/index.md), you can apply branch policies and define branch permissions. For TFVC repositories, you can [set check-in policies](../repos/tfvc/add-check-policies.md).
- **Work tracking**: You can add fields, change the workflow, add custom rules, and add custom pages to the work item form of most work item types. You can also add custom work item types. For details, see [Customize an inheritance process](../organizations/settings/work/inheritance-process-model.md). 
- **Build and release**: You can fully customize your build and release pipelines, define build steps, release environments, and deployment schedule. For details, see [Azure Pipelines](../pipelines/index.md).  
- **Test**: You can define and configure test plans, test suites, test cases, and test environments. You can also add test steps within your build pipelines. For details, see [Exploratory & Manual Testing](../test/index.md) and [continuous testing for your builds](../pipelines/languages/dotnet-core.md#run-your-tests).

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

- **Dashboards**: Each team can [configure their set of dashboards](../report/dashboards/dashboards.md) to share information and monitor their progress.
- **Source control**: For each [Git repository](../repos/git/index.md), you can apply branch policies and define branch permissions. For TFVC repositories, you can [set check-in policies](../repos/tfvc/add-check-policies.md).
- **Work tracking**: You can add fields, change the workflow, add custom rules, and add custom pages to the work item form of most work item types. You can also add custom work item types. For details, see [Customize the on-premises XML process model](../reference/on-premises-xml-process-model.md).
- **Build and release**: You can fully customize your build and release pipelines, and define build steps, release environments, and the deployment schedule. For details, see [Azure Pipelines](../pipelines/index.md).  
- **Test**: You can define and configure test plans, test suites, test cases, and test environments. You can also add test steps within your build pipelines. For details, see [Exploratory & Manual Testing](../test/index.md) and [continuous testing for your builds](../pipelines/languages/dotnet-core.md#run-your-tests).

::: moniker-end

## Extensibility

In addition to the pre-built functionality that's available to you, you can add to it in the following ways:

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab: Provides extensions that you can install either on your organization, server, or Visual Studio client.
- [Service hooks](../service-hooks/index.md): Enable you to complete tasks on other services when events happen within your project that's hosted on Azure DevOps.
- [REST APIs](/rest/api/vsts/): Provide the ability to create custom extensions that plug into Azure DevOps.
- [Visual Studio SDK](https://msdn.microsoft.com/library/bb166441.aspx): Helps you extend Visual Studio features or integrate new features into Visual Studio. You can distribute your extensions to other users and to the Visual Studio Marketplace.

## Resources

- [Pricing](https://visualstudio.microsoft.com/team-services/pricing/)
- [Azure DevOps data protection overview](../organizations/security/data-protection.md)
