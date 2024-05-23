---
title: Configure deployment group security in Azure Pipelines
ms.topic: how-to
description: Configure security for the deployment groups in Azure Pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure Deployment group security in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to manage security for deployment groups in Azure Pipelines. 
A deployment group is a pool of physical or virtual target machines that have agents installed. Deployment groups are only available with classic release pipelines.

Deployment groups are created in three ways:

- When dependent deployment groups are provisioned for projects from organization deployment pools 
- When a deployment group is created at the project level
- When a project shares a deployment group, dependent deployment groups are created in the recipient projects

Individual deployment groups inherit the security roles from the project-level assignments. You can override the project-level assignments for a user or group. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

When a deployment group is shared with another project, a separate deployment group, which inherits its security roles, is created in the other project. If sharing is disabled, the deployment group is removed from the other project.

The security roles for deployment groups are:

| Role | Description |
|------|---------|
| **Reader** | Can only view deployment groups.   |
| **Creator** | Can create deployment groups. This role is a project-level role only.  |
| **User** | Can view and use deployment groups. |
| **Service Account** | Can view agents, create sessions, and listen for jobs. This role is a collection- or organization-level role only.  |
| **Administrator** | Can administer, manage, view, and use deployment groups.  |


The default user and group role assignments are:

| Group | Role |
|-|-|
| [*project name*]\Contributors | Creator (project-level), Reader (object-level) |
| [*project name*]\Deployment Group Administrators | Administrator |
| [*project name*]\Project Administrators | Administrator |
| [*project name*]\Release Administrators | Administrator |

## Prerequisites

- You must be a member of an administrator group or be assigned an administrator role to manage project-level deployment group security.
- You must be assigned an administrator role to manage security for individual deployment groups.

## Set project-level deployment group security roles

To set project-level security roles for all deployment groups:

1. From your project, select **Deployment groups** under **Pipelines**.
1. Select **Security**.

    :::image type="content" source="media/deployment-group-security-selection.png" alt-text="Screenshot of security selection for all deployment groups.":::

1. Set roles for users and groups.

    :::image type="content" source="media/deployment-group-project-level-security-dialog.png" alt-text="Screenshot of security dialog for all deployment groups.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.
1. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

## Set object-level deployment group security roles

To set security roles for an individual deployment group:

1. From your project, select **Deployment groups** under **Pipelines**.
1. Select a deployment group under **Groups**.
1. Select **Security**.

    :::image type="content" source="media/deployment-group-single-group-security-selection.png" alt-text="Screenshot of security selection for an individual deployment group.":::

1. Set roles for users and groups. To lower the privilege level of an inherited role, inheritance must be disabled.

    :::image type="content" source="media/deployment-groups-single-group-security-dialog.png" alt-text="Screenshot of object-level deployment group security dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.

1. Select **Save changes** :::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or **Reset changes** :::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

## Related articles

- [Provision deployment groups](../../pipelines/release/deployment-groups/index.md)
- [Pipeline security roles](../../organizations/security/about-security-roles.md)