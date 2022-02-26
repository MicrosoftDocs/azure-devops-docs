---
title: Get started as a project administrator 
titleSuffix:  Azure DevOps
ms.custom: seodec18
description: Learn how to structure a project, manage users, and more to support your software development teams in Azure DevOps.
ms.technology: devops-new-user 
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ms.date: 02/25/2022
---

# Manage your project 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]  

With most Azure DevOps Services, you can start using the service and configure resources as you go. No up-front work is required. Most settings define defaults. 

If you've created a project or been added to the **Project Administrators** group, you'll want to be familiar with the administrative tasks your charged with. there are a few tasks you might want to do to ensure a smooth operational experience. 

> [!NOTE]   
> This article provides an overview of tasks a member of the **Project Administrators** group should review and attend to. For information on tasks to be performed by members of the **Project Collection Administrators** group, see [Manage your organization or project collection](manage-organization-collection.md).



[!INCLUDE [add-users-project](../includes/get-started/add-users-project.md)]  

[!INCLUDE [add-project-administrators](../includes/get-started/add-project-administrators.md)]  

[!INCLUDE [share-project-vision](../includes/get-started/share-project-vision.md)]  


## Grant or restrict permissions  

Access to features and functions is controlled by access-level assignments, permissions, and security groups. To quickly understand the defaults configured for your project, see [Default permissions and access](../organizations/security/permissions-access.md). 

::: moniker range="azure-devops"  

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization, users added to the **Project-Scoped Users** group won't be able to access projects that they haven't been added to. To learn more, see [Manage your organization, Limit  user visibility for projects and more](manage-organization-collection.md#project-scoped-user-group).

::: moniker-end  

To delegate specific tasks to others, add them to a built-in or custom security group or add them to a specific role. To learn more, see the following articles.

- [Add or remove users or groups, manage security groups](../organizations/security/add-remove-manage-user-group-security-group.md)
- [Grant or restrict access to select features and functions](../organizations/security/restrict-access.md)   

To learn more about permissions and security, review the following articles:

- [About security and identity](../organizations/security/about-security-identity.md)  
- [About permissions and groups](../organizations/security/about-permissions.md)  
- [About security roles](../organizations/security/about-security-roles.md)  
- [About access levels](../organizations/security/access-levels.md)  


[!INCLUDE [enable-remove-services](../includes/get-started/enable-remove-services.md)]  

::: moniker range=">= tfs-2015"  

## Set DevOps policies 

Set policies to support collaboration across your teams and automatically remove obsolete files. To set policies that govern Azure Repos, Azure Pipelines, and Azure Test Plans, review the following articles: 

- [Manage branch policies](../repos/git/branch-policies.md)  
- [Add Team Foundation Version Control (TFVC) check-in policies](../repos/tfvc/add-check-policies.md)  
- [Set build and release pipeline retention policies](../pipelines/policies/retention.md) 
- [Set test retention policies](../test/how-long-to-keep-test-results.md) 

::: moniker-end  
 

[!INCLUDE [define-area-iteration-paths](../includes/get-started/define-area-iteration-paths.md)] 



## Customize work-tracking processes

::: moniker range=">= azure-devops-2019"
  
All work-tracking tools are available immediately after you create a project. Often, one or more users may want to customize the experience to meet one or more business needs. Processes are easily customized through the user interface. However, you may want to establish a methodology for who manages the updates and evaluates requests.

To learn more, see the following articles:

- [About process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md)  
- [Customize a project](../organizations/settings/work/customize-process.md)  
- [Add and manage processes](../organizations/settings/work/manage-process.md)

::: moniker-end  

::: moniker range="<= tfs-2018"

All work-tracking tools are available immediately after you create a project. Often, one or more users may want to customize the experience to meet one or more business needs. But, you may want to establish a methodology for who manages the updates and evaluates requests.

To learn more, see [On-premises XML process model](../reference/on-premises-xml-process-model.md).

::: moniker-end

[!INCLUDE [review-notifications](../includes/get-started/review-notifications.md)] 

 
## Integrate with other services 

TBD - Mention:
service Hooks
Slack
Microsoft Teams
GitHub integration 




[!INCLUDE [add-teams-to-scale](../includes/get-started/add-teams-to-scale.md)] 
 

## Next steps  

> [!div class="nextstepaction"]
> [Share your project vision](../organizations/projects/project-vision-status.md)

## Related articles

::: moniker range="azure-devops"  

- [Project and team quick reference](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)

::: moniker-end

::: moniker range="< azure-devops"  

- [Project and team quick reference](../organizations/projects/project-team-quick-reference.md)  
- [Security & identity](../organizations/security/about-security-identity.md)
- [Organization management](../organizations/accounts/organization-management.md)
- [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md)
- [TFS administration](/azure/devops/server/index)

::: moniker-end


<!--- 
What to tell their users?
- advantage for setting up teams for repos and pipelines 

-->