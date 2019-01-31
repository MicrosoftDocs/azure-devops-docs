---
title: Glossary for public projects in Azure DevOps
titleSuffix: Azure DevOps Services Public Project
description: Description of key concepts and terms 
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid: 
ms.reviewer:
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/04/2018
monikerRange: 'azure-devops'
---


# Public projects glossary

[!INCLUDE [temp](_shared/version-public-projects.md)]  

This glossary describes terms used when working with public projects in Azure DevOps Services. See also: 
- [Agile glossary](../../boards/work-items/agile-glossary.md) 
- [Project management and navigation glossary](../../project/navigation/glossary.md)  
- [Security glossary](../security/security-glossary.md)  

## Anonymous user	

An unauthenticated user of a project. The user is visiting a project and has not signed in to Azure DevOps. 

## Basic user	

An authenticated user of a project who was granted the Basic access level to a project. To learn more, see [Default roles & access for public projects](default-roles-access-public.md).

## Contributor

A person who has read and write access to most functions and features of a project. A contributor is an authenticated user of a project who was granted the Basic access level and belongs to the Contributors security group. Contributors can add and modify code, add and modify work items, define and edit build and release pipelines, and more. To learn more, see [Default permissions and access](../security/permissions-access.md).

## Dashboards 

User-configurable interactive signboards that provide real-time information. Dashboards are associated with a team and display configurable widgets to display information. Learn more: [Add and manage dashboards](../../report/dashboards/dashboards.md). 


## Git repository

A Git repository supports a distributed version control system for tracking changes, reviewing contributions to the code, and more. Each developer has a copy of the source repository on their dev machine. You can add multiple Git repositories to a project. Learn more: [Git Repositories](../../repos/git/index.md).  

> [!NOTE]   
> Git in Visual Studio and Azure DevOps is standard Git. You can use Visual Studio with third-party Git services, and you can also use third-party Git clients with Azure DevOps.

## Non-member user

Either a [public user](#public-user) or an [anonymous user](#anonymous-user).
Many of the controls in place for public projects apply equally to public and anonymous users. To learn more, see [Default roles & access for public projects](default-roles-access-public.md).



## Open source

Open source software refers to freely available software that you can download, use, modify, and share. To explore Microsoft Open Source projects, see [Open Source at Microsoft](https://opensource.microsoft.com/). Learn more: [What is open source?](https://opensource.com/resources/what-open-source). 
 

## Organization 

The Azure DevOps platform associated with a URL (for example, `https://dev.azure.com/OrganizationName/ProjectName/`) that supports adding both private and public projects. Owners and administrators can manage user access to their organization's data through security groups, access levels, and other administrative options. 

<!---
## Organizational User	

An authenticated user of a project who is a member of an Azure DevOps organization   (Azure Active Directory (Azure AD) tenant) but not a member of Azure DevOps.

Signed in. Member or guest of the Azure AD tenant. 

-->

<!---
Org Project	Projects that are visible to everyone in the Organization (Azure AD tenant).
	Everyone in the Organization can discover them and perform limited operations.
	Admins control who gets to fully contribute.
-->

## Pipeline 

Pipelines are artifacts that you define to run concurrent builds or deploy concurrent releases. Two types of pipelines are supported, private and hosted. To learn more, see [CI/CD concurrent jobs](../../pipelines/licensing/concurrent-jobs.md). 

![Pipeline concept end-to-end](/../../pipelines/_img/pipeline-concept-end-to-end.png)


## Private project	
A project created within an organization that is visible only to members of the organization hosting the project. Only organizational members can discover them.  Administrators can control who gets to fully contribute. Administrators can switch a project from private to public, and vice-versa, as described in [Change the project visibility](make-project-public.md). 


[!INCLUDE [temp](../../_shared/glossary-terms/projects.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/public-projects.md)] 

## Public user	
An authenticated user of a project who is not a member of the project. 

## Stakeholder	

An authenticated user of a project who was granted Stakeholder access. An unlimited number of users can be granted membership as Stakeholders for free. Stakeholders can add and modify work items, approve releases, view dashboards and wikis. Learn more: [Access levels, Stakeholder access](../security/access-levels.md#stakeholder-access). 

[!INCLUDE [temp](../../_shared/glossary-terms/teams.md)] 

[!INCLUDE [temp](../../_shared/glossary-terms/widgets.md)] 



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