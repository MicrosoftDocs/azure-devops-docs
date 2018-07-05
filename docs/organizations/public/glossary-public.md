---
title: Glossary for public projects
titleSuffix: VSTS Public Project
description: Description of key concepts and terms 
ms.technology: devops-public-projects
ms.prod: devops-alm
ms.assetid: 
ms.reviewer:
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 07/02/2018
monikerRange: 'vsts'
---


# Public projects glossary

[!INCLUDE [temp](_shared/version-public-projects.md)]  

This glossary describes terms used when working with public projects in Visual Studio Team Services (VSTS). See also: 
- [Agile glossary](../../work/work-items/agile-glossary.md) 
- [Security glossary](../security/security-glossary.md)  


## Anonymous user	

An unauthenticated user of a project. The user is visiting a project and has not signed in to VSTS. 

## Basic user	

An authenticated user of a project who was granted the Basic access level to a project. To learn more, see [Default roles & access for public projects](default-roles-access-public.md).

## Contributor

A person who has read and write access to most functions and features of a project. A contributor is an authenticated user of a project who was granted the Basic access level and belongs to the Contributors security group. Contributors can add and modify code, add and modify work items, define and edit build and release pipelines, and more. To learn more, see [Default permissions and access](../security/permissions-access.md).

## Dashboards 

User-configurable interactive signboards that provide real-time information. Dashboards are associated with a team and display configurable widgets to display information. Learn more: [Add and manage dashboards](../../report/dashboards/dashboards.md). 


## Git repository

A Git repository supports a distributed version control system for tracking changes, reviewing contributions to the code, and more. Each developer has a copy of the source repository on their dev machine. You can add multiple Git repositories to a project. Learn more: [Git Repositories](../../git/index.md).  

> [!NOTE]   
> Git in Visual Studio and VSTS is standard Git. You can use Visual Studio with third-party Git services, and you can also use third-party Git clients with VSTS.

## Non-member user

Either a [public user](#public-user) or an [anonymous user](#anonymous-user).
Many of the controls in place for public projects apply equally to public and anonymous users. To learn more, see [Default roles & access for public projects](default-roles-access-public.md).



## Open source

Open source software refers to freely available software that you can download, use, modify, and share. To explore Microsoft Open Source projects, see [Open Source at Microsoft](https://opensource.microsoft.com/). Learn more: [What is open source?](https://opensource.com/resources/what-open-source). 
 

## Organization 

The VSTS platform associated with a URL (for example, `name.visualstudio.com`) that supports adding both private and public projects. Owners and administrators can manage user access to their organization's data through security groups, access levels, and other administrative options. 

<!---
## Organizational User	

An authenticated user of a project who is a member of a VSTS organization   (Azure Active Directory (AAD) tenant) but not a member of VSTS.

Signed in. Member or guest of the AAD tenant. 

-->

<!---
Org Project	Projects that are visible to everyone in the Organization (AAD tenant).
	Everyone in the Organization can discover them and perform limited operations.
	Admins control who gets to fully contribute.
-->

## Pipeline 

Pipelines are artifacts that you define to run concurrent builds or deploy concurrent releases. Two types of pipelines are supported, private and hosted. To learn more, see [CI/CD concurrent jobs](../../pipelines/licensing/concurrent-jobs-vsts.md). 

![Pipeline concept end-to-end](/vsts/pipelines/_img/pipeline-concept-end-to-end.png)


## Private project	
A project created within an organization that is visible only to members of the organization hosting the project. Only organizational members can discover them.  Administrators can control who gets to fully contribute. Administrators can switch a project from private to public, and vice-versa, as described in [Change the project visibility](make-project-public.md). 


## Project
A project provides a repository for source code and a place for a group of people to plan, track progress, and collaborate on building software solutions. A project is defined for a VSTS organization. It provides support for focusing on those objects defined within the project. Learn more: [Create a project](create-public-project.md).


## Public project	

A project created within a VSTS organization that is visible to the whole world. Everyone in the world can discover them and perform limited operations. Administrators can control who gets to fully contribute. Administrators can switch a project from private to public, and vice-versa, as described in [Change the project visibility](make-project-public.md). 


## Public user	
An authenticated user of a project who is not a member of the project. 
<!---Signed in. Neither member nor guest of the AAD tenant. Not a member of the account.-->


## Stakeholder	

An authenticated user of a project who was granted Stakeholder access. An unlimited number of users can be granted membership as Stakeholders for free. Stakeholders can add and modify work items, approve releases, view dashboards and wikis. Learn more: [Get started as a Stakeholder](../security/get-started-stakeholder.md). 


<!---
## Team Foundation Version Control (TFVC) repository 

A TFVC repository supports a centralized version control system for tracking changes, reviewing contributions to the code, and more. Historical data of the code base is maintained on a centralized server. Branches are path-based and created on the server. You can add only one TFVC repository to a project. TFVC repositories aren't viewable by anonymous users of a public project. Learn more: [TFVC](../../tfvc/index.md).  

-->

## Team 

A team corresponds to a selected set of project members. With teams, organizations can sub-categorize work to better focus on all the work they're tracking within a project. Each team gets access to a suite of Agile tools. These tools provide teams the ability to work autonomously and collaborate with other teams across the enterprise. Each team can configure and customize each tool to meet their work requirements. Learn more: [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md). 

 

## Widget 
Widgets display information and charts on dashboards. Many of them are configurable and display information available from one or more data stores or charts created by the system. Learn more: [Widget catalog](../../report/widget-catalog.md).

<!---
Branch 
Clone
Commit
Contributor
Dashboard (not personal) 
Diff
Fetch
Fork
Issue
Markdown
Merge
Open source
Private repository
Pull 
Pull request
Push
Remote
Repository
Status
Team
Upstream
User 
-->