---
title: Optimize permissions for performance
titleSuffix: Azure DevOps Services
description: Improve permission performance in large Azure DevOps Services organizations by reducing permission entries and balancing resource scope.
ms.subservice: azure-devops-security
ms.topic: overview
ms.author: chcomley
author: nechvatalp
monikerRange: 'azure-devops'
ai-usage: ai-assisted
ms.date: 07/16/2026
---

# Optimize permissions for performance

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Permission checks are part of many Azure DevOps Services operations. At large scale, many explicit permission assignments, resource-level exceptions, and group memberships can slow permission evaluation and updates. Large access control lists also require the service to retrieve and resolve more permission data and identities.

Use the recommendations in this article to reduce the amount of permission data that Azure DevOps Services processes.

[!INCLUDE [ai-assistance-callout](../../includes/ai-assistance-callout.md)]

## Soft performance limits

Use the following limits as planning targets for large organizations. Azure DevOps Services doesn't enforce these limits or block permission changes that exceed them. However, exceeding them increases the risk of slow permission queries, evaluations, and membership updates.

| Measure | Recommended maximum |
| --- | ---: |
| ACEs in one [security namespace](namespace-reference.md) | 1,000,000 |
| Members in one Microsoft Entra or Azure DevOps group | 10,000 |

An access control entry (ACE) stores the permissions assigned to one user or group. For nested groups, consider the total effective membership when using the group-size guideline.

## Recommended practices

| Practice | Performance benefit |
| --- | --- |
| Assign permissions to groups instead of individual users | Replaces many user access control entries (ACEs) with one group ACE. |
| Use the broadest matching scope and inheritance | Avoids repeating identical ACEs on child resources. |
| Use **Deny** only for exceptions | Limits explicit overrides and object-level ACEs. |
| Use right-sized identity groups | Reduces unnecessary group membership processing. |
| Balance resources across projects and organizations | Limits the number of resources evaluated within one boundary. |
| Apply permission changes incrementally | Reduces load from large or frequent access control updates. |

## Assign permissions to groups

Use built-in or custom [Azure DevOps security groups](about-permissions.md#security-groups-and-membership) to represent roles, teams, and access cohorts. Assigning a permission to a group creates one ACE. Assigning the same permission directly to many users creates an ACE for each user.

- Prefer built-in groups such as **Readers**, **Contributors**, and **Project Administrators** when their permissions match the required access.
- Create a custom group when a built-in group doesn't match the required access.
- Don't replace one group with hundreds or thousands of direct user assignments.

## Use the broadest matching scope and inheritance

Set a permission once at the highest supported scope that matches the access requirement. Let child resources inherit the permission, and keep inheritance enabled unless a child resource requires different access.

For example:

| Access requirement | Preferred scope |
| --- | --- |
| Perform an organization-level task | Organization level, when the permission is available at that level |
| Access all resources of a supported type in a project | Project level or the resource type's project-level parent |
| Access all Git repositories in a project | Top-level **Git repositories** entry |
| Access all branches in a repository | Repository level |
| Access one repository, branch, pipeline, area path, or other resource | Object level |

Avoid setting identical permissions separately on every repository, branch, pipeline, or other child resource. For Git repositories, [individual repositories inherit permissions from the top-level Git repositories entry](permissions.md#git-repository-object-level).

Disable inheritance only when a resource needs different access from its parent. Disabling inheritance across many resources usually requires more explicit assignments.

## Use Deny only for exceptions

Grant access through a group, and leave permissions as **Not set** for identities that shouldn't receive the grant. Instead of granting broad access and then adding many **Deny** entries, create a group with the exact permissions required.

Use **Deny** only when you must override an inherited **Allow** for a specific exception. A single **Deny** entry isn't inherently a performance problem. However, many exceptions add ACEs and often require more object-level permission assignments.

## Use right-sized identity groups

Use groups that align with access requirements, such as a business unit, project, product, or job function. Neither Entra groups nor Azure DevOps groups offer better performance. Apply the same size and nesting guidance to both group types.

- Avoid adding a tenant- or company-wide group, such as an **All Employees** group.
- Avoid deeply nested or frequently changing group structures when a simpler group provides the same access.
- Split a very large group into smaller access cohorts when its members don't all require the same access.
- If every member needs the same access, assign one group at an inherited parent scope instead of using individual assignments or duplicate groups.

Groups with more than 10,000 members are a performance risk. Nesting, frequent membership changes, and access to many permissioned resources can increase the impact. Reduce unnecessary membership and split the group into smaller access cohorts where practical.

## Balance resources across projects and organizations

Avoid concentrating thousands of repositories and most permission-protected resources in one project while other projects contain only a few. Operations that discover accessible resources might need to evaluate permissions across the entire set.

Distribute large sets of repositories and other resources across projects before too many resources accumulate in one project. Don't create one project per repository; project count also has [practical performance limits](../settings/work/object-limits.md#projects).

At extreme enterprise scale, multiple smaller organizations can perform better than one organization that contains most company resources and permission data. Split organizations along stable product or business boundaries to distribute resource and permission load. Use this approach only when the scale benefit outweighs the overhead of managing resources in separate organizations.

## Reduce permission automation churn

If you manage permissions through scripts, REST APIs, or configuration-as-code workflows:

- Apply only the changes required to reach the intended state. Don't clear and rebuild unchanged permission assignments on every run.
- Set permissions at a parent scope instead of generating equivalent entries for every child resource.
- Batch changes where supported and follow [Azure DevOps REST API best practices](../../integrate/concepts/integration-bestpractices.md).
- Avoid high-frequency permission reconciliation loops.
- Avoid routinely creating and deleting large numbers of projects or permissioned resources.
- Remove obsolete explicit assignments to reduce access control list (ACL) and ACE volume.

## See also

- [About permissions and security groups](about-permissions.md)
- [About projects and scaling your organization](../projects/about-projects.md)
- [Work tracking, process, and project limits](../settings/work/object-limits.md)
- [Azure DevOps REST API best practices](../../integrate/concepts/integration-bestpractices.md)
