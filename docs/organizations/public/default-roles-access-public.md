---
title: Default roles & access 
titleSuffix: Azure DevOps Services Public Project
description: Overview of public project user roles and access
ms.technology: devops-public-projects
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 07/02/2018
monikerRange: 'azure-devops'
---


# Default roles & access for public projects

[!INCLUDE [temp](includes/version-public-projects.md)]  

Public projects enable anyone to view its contents. Access is limited when the user isn't signed in. These users are also referred to as anonymous users or public users. Also, there are users, ones who are signed in to Azure DevOps, but aren't members of a project. Both of these types of users are granted limited, read-only access as indicated in the following table.  

To contribute to a public project, you must be added as a member of that project and assigned either Stakeholder, Basic, or Basic + Test Plans access. Access levels determine the user interfaces that you can access. The security group you're assigned to determines the features you can exercise. For more information, see [About access levels](../security/access-levels.md).

You [add project members](../accounts/add-organization-users.md) in the same way you do for private projects. Be sure you understand what it means to [invite an external user](../accounts/add-external-user.md) to have access to your project. If you created the project, you're automatically assigned to the Project Administrators group.

|Hub or Settings |Non-member access |Stakeholder access |Basic access|Readers |Contributors  |Project Administrators  |
|---------|---------|---------|---------|
|**Dashboards** | Read(1) | Partial  | Full | Read | Read-Write | Read-Write-Administer |
|**Wiki**     | Read   | Full | Full | Read | Read-Write | Read-Write-Administer        |
|**Boards (Work)** |  Read | Partial | Full | Read | Read-Write | Read-Write-Administer |
|**Repos (Code)**  | Read | Full | Full | Read | Read-Write |  Read-Write-Administer   |
|**Pipelines (Build and Release)**  | Read  | Full | Full | Read    | Read-Write | Read-Write-Administer |
|**Test Plans**  | No access | No access | Partial access (4) | Read  |Read-Write | Read-Write-Administer |
|**Notifications**  | No access | Full | Full | Read | Read-Write | Read-Write-Administer |
|**Search**   | Full| Full | Full | Full | Full | Full |
|**Settings**   | No access| Full | Full | Read | Read | Read-Write-Administer |

> [!NOTE]
>
> 1. Several widgets aren't available to non-members.
> 2. Stakeholders have full access to **Repos** or **Code** features in public projects, but they have no access in private projects.
> 3. Stakeholders have full access to **Boards** or **Work** in public projects, but they have partial access in private projects. For more information, see [Stakeholder access quick reference](../security/stakeholder-access.md).
> 4. Basic + Test Plans users can view and run tests from **Test Plans** or **Test**. Basic users need to upgrade their access level to Basic + Test Plans to get full access, which includes capability to create test plans and add test cases.

## Pipelines/Build and Release

From the web portal, you can set permissions for all or individual build pipelines, release pipelines, task groups, or variable groups. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 

> [!NOTE]
> When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all **Build** and **Release** features. This is indicated by :::image type="icon" source="../../media/icons/preview.png" border="false"::: **preview**, shown in the following table. Without this feature enabled, Stakeholders can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](../security/provide-stakeholder-pipeline-access.md).

[!INCLUDE [temp](../security/includes/pipelines-cloud.md)]

## Related articles

- [Private-to-public migration checklist](migration-checklist.md)
- [Get started with permissions, access, and security groups](../security/about-permissions.md) 
- [About security roles](../security/about-security-roles.md)  
- [About access levels](../security/access-levels.md)

 