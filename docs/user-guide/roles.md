---
title: Sofware development roles supported by VSTS & TFS
description: Understand how our tools and services support the various roles supported in software development when using Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-overview 
ms.prod: vs-devops-alm
ms.assetid: 4600B0D9-3799-4902-814B-F6EC9098C4CE
ms.manager: douge
ms.author: kaelli
ms.date: 12/07/2016
---

#Software development roles supported by VSTS and TFS 

<b>VSTS | TFS 2018 | TFS 2017 | TFS 2015</b>  

If you are a sole developer, or work on a small team, chances are that you participate in many activites&mdash;performing tasks associated with issue tracking, feature planning, coding, testing, build, and deployment.  

However, if you work within a large organization, you're probably more focused on a specific set of tasks that are traditionally aligned with one or two specific roles, such as software development, project management, and DevOps.    

This topic provides a roadmap to support you in quickly coming up to speed on the features and tasks available to you based on the role you perform.  

##Contributor roles  

Team members are contributors who have access to the code base, work item tracking, Agile tools, build definitions, test tools, and more. If you need to lock down specific areas to a select set of contributors, you can do that through the [permission management](../security/permissions.md).   

### Software developers 
Developers use Visual Studio or other [tools](tools.md) to develop their applications. They then check in their changes to a Git or TFVC repository hosted in VSTS or TFS. From the web portal or supported IDE, they can view repositories, check history, and more. 

- To get started using Git, see one of these resources: 
	- [Share your code with Git and Visual Studio](../git/share-your-code-in-git-vs.md).
	- [Share your code in Git using Eclipses](../git/share-your-code-in-git-eclipse.md).
	- [Share your code in Git using Xcode](../git/share-your-code-in-git-xcode.md).
	- [Share your code in Git using IntelliJ](http://java.visualstudio.com/docs/tools/intellij).
	- [Get Started with Git and VSTS](../git/gitquickstart.md).
- To get started using TFVC, see one of the following resources: 
	- [Develop and share your code in TFVC using Visual Studio](../tfvc/share-your-code-in-tfvc-vs.md)
	- [Share your code in TFVC using Eclipse](../tfvc/share-your-code-in-tfvc-eclipse.md)
	- [Share your code in TFVC using Xcode](../tfvc/share-your-code-in-tfvc-xcode.md)

### Project managers

The role of project manager typically encompasses planning the feature set to deliver, setting priorities, and tracking the status of work, code defects, and customer issues. The suite of web-based Agile tools provide PMs with the views and features they need to perform these tasks. All work is captured within a work item. Each work item represents a specific type such as a user story, task, or bug. 

- Use the product backlog to quickly define and prioritize user stories, features, and other work items 
- Use the sprint backlog and task board to implement Scrum practices 
- Use the Kanban board to work with Kanban methods 
- Use queries to list and update work items, create status and trend charts, and post charts to dashboards 
- Use dashboards to share information, status, and trends with your team or organization
  
To get started, see [Get started with Agile tools to plan and track work](../work/backlogs/overview.md).  

If you are used to using Excel or Project to plan and track your work, you can still use these tools and integrate with VSTS and TFS. See [Bulk modify using Excel](../work/backlogs/office/bulk-add-modify-work-items-excel.md) and [Create your backlog and tasks using Project](../work/backlogs/office/create-your-backlog-tasks-using-project.md). 

### DevOps: builders, testers, and release managers  

One of the main advantages to working with VSTS or TFS is the suite of tools and integrated functionality that supports build, testing, and deploying software applications. Here are the main DevOps associated tasks supported by VSTS and TFS: 
- Define builds
- Unit test your code 
- Run tests with your builds 
- Performance test your apps
- Perform exploratory tests
- Define, manage, track, and approve releases 
- Deploy applications to Azure, a virtual machine, Docker containers, and more  

To get started, see the overviews provided here: [Build &amp; Release](../build-release/overview.md) and [Test](../manual-test/index.md). 

### Stakeholders 
With stakeholder access, anyone within your organization can check project status and provide feedback. Stakeholders can track project priorities and provide direction, feature ideas, and business alignment to a team. They can contribute to plans by adding and modifying work items. They can't, however, contribute to the code base or exercise test tools. 

Stakeholder access essentially provides free access to a limited set of feature to project sponsors and supporters. To learn more, see [Work as a Stakeholder](../security/get-started-stakeholder.md). 

<a id="admin-roles">  </a>
## Administrator roles  
A distinct advantage to working in VSTS is the reduced overhead of server maintenance. That said, there are still several administrative tasks required to support a collaborative, integrated software development environment

The main tasks are grouped here by membership within a security group or role: 

###Team administrators
Responsible for configuring team settings which include: 
- Backlog and board settings
- Team area(s) and iterations (sprints)
- Team members
- Team dashboards
- Team work item templates
- Team alerts

To get started, see [Manage team assets](../work/scale/manage-team-assets.md). 

###Project administrators
Responsible for project level settings, including: 
- [Area paths](../work/customize/set-area-paths.md) and [Iteration paths](../work/customize/set-iteration-paths-sprints.md)
- [Project permissions and repository security](../security/permissions.md)
- [Customize work tracking objects (TFS only)](../work/customize/customize-work.md) 
- [Build agents, pools, and service endpoints](../build-release/overview.md) 
- [Test](../manual-test/getting-started/how-long-to-keep-test-results.md) and [release](../build-release/concepts/policies/retention.md) retention policies 
 

### Project collection administrators
Responsible for account or collection-level settings. These include: 
- Manage billing  
- Add and manage team projects    
- Manage collection-level settings and permissions 
- Customize work tracking processes  
- Install and manage extensions (install custom or [Marketplace extensions](https://marketplace.visualstudio.com/)) 

To get started, see [Account Management](../accounts/account-management.md). 

 
###TFS administrators
Responsible for installing, upgrading, and maintaining an on-premises TFS deployment. Tasks include: 
- Install TFS 
- Update servers running TFS 
- Manage database backups 
- Server administrative settings and permissions 
- Build retention policies
- Add and manage team project collections     
  
To get started, see [Server Administration (TFS)](../tfs-server/index.md). 


## Related notes 
- [Key concepts](concepts.md)
- [Essential services](services.md)
 
