---
title: Key concepts for working with both VSTS & TFS
description: Understand the key concepts for Visual Studio Team Services & Team Foundation Server  
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 76ED7BD4-BD95-450F-BA33-649B80C23BE5
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 08/04/2017
monikerRange: '>= tfs-2015'
---


# Key concepts for working with VSTS and TFS

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

The set of platforms, services, and tools you have access to through Visual Studio Team Services (VSTS) can be overwhelming. Before you start using our products, you'll want to become familiar with how they fit together. You'll gain that understanding here as well as pointers to additional topics and tutorials to gain confidence in using our products to develop your software.   

<!---
###Video overview
 (Video ala Robert's 1.5 min Commit)
-->

## Collaborative, integrated software development

VSTS, our hosted cloud offering, and Team Foundation Server (TFS), our on-premises platform, provide small teams as well as enterprises the services and tools to support developing and continuously deploying software. Even sole developers can use our platforms to manage their software and deploy their apps. 

The three main areas that support software development include:

- Source control to manage versioning of software files
- Tracking tools to support planning and tracking work, code defects, issues and more
- DevOps tools to support building, testing, and continuous release of software apps. 

### Source control

Source or version control systems allow developers to collaborate on code and track changes made to the code base. Source control is an essential tool for multi-developer projects.  

Our systems support two types of source control: Git (distributed) or Team Foundation Version Control (TFVC), a centralized, client-server system. Both systems enable you to check-in files and organize files within folders, branches, and repositories. 

With Git, each developer has a copy on their dev machine of the source repository including all branch and history information. Each developer works directly with his or her own local repository, and changes are shared between repositories as a separate step.

Developers can commit each set of changes and perform version control operations such as history and compare without a network connection. Branches are lightweight. When devs need to switch contexts, they create a private local branch. Devs can quickly switch from one branch to another to pivot among different variations of the codebase. Later, they can merge, publish, or dispose of the branch.

>[!NOTE]
>Git in VSTS and TFS is standard Git. You can use Visual Studio with third-party Git services, and you can also use third-party Git clients with TFS.

With TFVC, devs have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server. 


### Work tracking and Agile tools

Software development projects require ways to easily share information and track the status of work, tasks, issues, or code defects. In the past, you might have planned and track work using one or more tools such as Microsoft Excel, Microsoft Project, a bug tracking system, or a combination of tools. Now, many teams have adopted Agile methods and practices to support planning and development. 

Our systems provide several types of work items which you use to track features, requirements, user stories, tasks, bugs, and issues. Each work item is associated with a work item type and a set of fields that team members update as information becomes available and progress is made. 

For planning purposes, you have access to several types of backlogs and boards to support the main Agile methods&mdash;Scrum, Kanban, or Scrumban. 

- Product backlog, used to create and prioritize stories or requirements  
- Kanban, used to visualize and manage the flow of work as it moves from inception to in progress to done 
- Sprint backlogs, used to plan work to complete during a sprint cycle, a regular 2 to 4 week cadence teams use when implementing Scrum 
- Task board, used during daily Scrum meetings to review work completed, remaining, or blocked 
 
Project managers and developers share information by tracking work items  on the backlogs and boards. Useful charts and dashboards round out the picture helping teams monitor progress and trends. 

### DevOps and continuous integration

Rapid and reliable release of software comes from automating as many processes as possible. Our systems support build, test, and release automation. 

- You can define builds to automatically run whenever a team member checks in code changes 
- Your build definitions can include instructions to run tests after the build runs 
- Release definitions support managing deployment of your software builds to staging or production environments 

![Multiple platform continuous integration](../_img/multi-platform.png) 

## Scaling

Both VSTS and TFS are enterprise-ready, supporting teams of any size, from tens to thousands. VSTS provides a scalable, reliable, and globally available hosted service. It is backed by a 99.9% SLA, monitored by our 24x7 operations team, and available in local data centers around the world.

You can scale the system in the following ways:

- Within a team project, you can add teams 
- Within a project collection, you can add team projects  
- Within source control, you can add repositories and branches 
- To manage a large number of users, you can manage access through Azure Active Directory (cloud) or Active Directory (on-premises) 

### Software projects versus team projects

To build and deploy a software application, you begin by defining a software project. Software projects differ from team projects. 

A team project defines a process and data storage in which you manage your software projects from planning to deployment. When you connect to VSTS or an on-premises TFS, you connect to an account or team project collection. Within that collection, one or more team projects may be defined. At a minimum, at least one team project must be created in order to use the system. 

When you create your team project, a team of the same name is automatically created. For small teams, this is sufficient. However, for enterprise-level organizations, it may be necessary to scale up, to create additional teams and/or team projects. These can be created within the single account or collection. 

<table width="100%">
<tbody valign="top">
<tr>
<td width="40%">
**Single team project, team defined within an account/collection**  
![Single collection-project-team conceptual image](_img/web-portal-account-project-team-concept.png)  
</td>
	
<td width="60%">
**Multiple team projects and teams defined within an account/collection**   
![Scaled collection-project-team conceptual image](_img/web-portal-account-project-team-scale-concept.png)  
</td>
</tr>
</tbody>
</table>

The collection-project-team structure provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.

### Scaling Agile across the enterprise

To learn how Microsoft transitioned from waterfall to Agile, review the stories and short videos available here: [Scaling Agile Across the Enterprise](https://stories.visualstudio.com/scaling-agile-across-the-enterprise/).


## Customization

You can configure and customize most elements to support your business needs or the way your team works. 

- Source control: You can apply branch policies, define branch permissions, and set up continuous integration 
- Work tracking: You can customize work item types, add custom fields, and set permissions to control who can modify what 
- Build & Release: You can fully customize your build and release definitions, defining build steps, release environments, and deployment   
- Test: You can define and configure your test plans, test suites, and test cases as well as configure test environments; additionally you can add test steps within your build definitions
- Dashboard: Each team can configure their set of dashboards to share information and monitor their progress 
 
## Extensibility

In addition to all the pre-built functionality available to you, you can add to it in the following  ways: 

- [Visual Studio Marketplace](https://marketplace.visualstudio.com) : Provides extensions that you can install either on your account, server, or Visual Studio client 
- [Service hooks](../service-hooks/index.md): Enable you to perform tasks on other services when events happen within your team project hosted on VSTS or TFS 
- [REST APIs](https://visualstudio.com/integrate/api/overview.md): Provide the ability to create custom extensions that plug into VSTS or TFS
- [Visual Studio SDK](https://msdn.microsoft.com/library/bb166441.aspx): Helps you extend Visual Studio features or integrate new features into Visual Studio. You can distribute your extensions to other users, as well as to the Visual Studio Marketplace. 


## Resources

- [Pricing](https://www.visualstudio.com/team-services/pricing/)

