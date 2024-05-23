---
title: Configure agent pool security in Azure Pipelines
ms.topic: how-to
description: Configure agent pool security in Azure Pipelines.
ms.author: v-catherbund
author: cebundy
ms.date: 05/15/2024
monikerRange: '<= azure-devops'
---

# Configure agent pool security in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to manage agent pool security in Azure Pipelines.

Agent pools are a collection of agents that you use to run build and release jobs. 

::: moniker range="azure-devops"

You can create agent pools with either organization scope or project scope. Organization-scoped agent pools are accessible to all existing or new projects in the organization, and by default, each organization has two agent pools: **Azure Pipelines** and **Default**. These default pools are accessible by all projects in the organization.

Project-scoped agent pools are created at the project level and are accessible only to that project.

From the organization settings, you can manage the organization-level security settings for all agent pools in the organization, and for individual agent pools. Both organization- and project-level security roles can be managed from the project settings.

::: moniker-end

::: moniker range="<= azure-devops-2022"

You can create agent pools with either collection scope or project scope. Collection scoped agent pools are accessible to all existing or new projects in the collection, and by default, each collection has two agent pools: **Azure Pipelines** and **Default**. These default pools are accessible by all projects in the collection.

Project-scoped agent pools are created at the project level and are accessible only to that project.

From the collection settings, you can manage the collection-level security settings for all agent pools in the collection, and for individual agent pools. Both collection- and project-level security roles can be managed at the object level from the project settings.

::: moniker-end

Use predefined security roles to configure [security for agent pools](../agents/pools-queues.md#security).

The security roles for agent pools are:

| Role | Purpose |
|------------------------------------|---------|
| Reader | Can view agent pools. |
| User | Can use agent pools in classic and YAML build and release pipelines. |
| Creator | Can create agent pools in the project. This role is a project-level role only.|
| Service Account | Can view agents, create sessions, and listen for jobs from the agent pool. This role is set at the organization/collection level only. |
| Administrator | Can manage and use agent pools and manage roles for other users and groups. |


The default project and object security roles for agent pools are:

| Group | Role |
|-|-|
| [*project name*]\Project Administrators | Administrator |
| [*project name*]\Build Administrators | Administrator |
| [*project name*]\Project Valid Users | Reader |
| [*project name*]\Release Administrators | Administrator |
| The user who created the agent pool | Administrator |

## Prerequisites

- To manage agent pool security at the organization or collection level, you must be a member of the **Project Collection Administrators** group or have the **Administrator** role for Agent pools.
- To manage agent pool security at the project level, you must be a member of the **Project Administrators** group or have the **Administrator** role for agent pools.
- To manage agent pool security at the object level, you must have the **Administrator** role for the agent pool.

::: moniker range="azure-devops"

## Configure organization security for agent pools

You can manage collection-level users and groups for all agent pools in the organization or for individual project-scoped agent pools. The security roles for agent pools are **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the organization level.

### Set organization security for all agent pools

By default, no users or groups have explicit roles for all pools at the organization level. You can add organization-level users and groups and configure security roles for all agent pools in the organization.

To configure security roles for all agent pools in the organization:

1. Go to **Organization settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **Security**. 

   :::image type="content" source="media\agent-pools-organization-security-selection.png" alt-text="Screenshot of organization-level security selection for all agent pools.":::

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add** 

        :::image type="content" source="media\agent-pool-add-user.png" alt-text="Screenshot of organization-level add user for all agent pools.":::

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 

1. To change a security role, select the user or group and select the role from the dropdown list.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pool-organization-security-dialog.png" alt-text="Screenshot of organization-level security dialog for all agent pools.":::

1. Close the dialog.

### Set organization security for individual agent pools

Individual agent pools inherit the organization-level security assignments. The **Default** and **Azure Pipelines** agent pools include the **Project Valid Users** group for each project in the organization.  

Agent pools that are created at the project-level are automatically assigned the **[\<project name\>]\Project Valid Users** group and the creator of the agent pool. The creator can't be deleted or modified. Any organization-level users and groups that are added from the project settings are listed here.  

You can add and remove organization-level users and groups and set security roles for an individual agent pool. The security roles at this level are **Reader**, **Service Account**, and **Administrator**.

To configure security roles for all agent pools in the collection:

1. Go to **Organization settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select an agent pool.

1. Select **Security**. 

    :::image type="content" source="media\agent-pools-organization-level-security-dialog.png" alt-text="Screenshot of organization-level security dialog for all agent pools.":::

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of organization-level add user for an agent pool.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. To change a security role, select the user or group and select the role from the dropdown list.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pools-organization-level-security-for-individual-pool.png" alt-text="Screenshot of organization-level security dialog for an individual agent pool.":::

1. Close the dialog.

::: moniker-end

::: moniker range=">= azure-devops-2020 <= azure-devops-2022"

## Configure collection security for agent pools

You can manage collection-level users and groups for all agent pools in the collection or at the object-level for project-scoped agent pools. The security roles for agent pools are, **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the collection level.

### Set collection security for all agent pools

By default, no users or groups have explicit roles for all pools in the collection. You can add collection-level users and groups and configure security roles for all agent pools in the collection.

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **Security**. 

   :::image type="content" source="media/agent-pools-organization-security-selection.png" alt-text="Screenshot of collection-level security selection for all agent pools.":::

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**. 
    
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog for all agent pools.":::

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inheritance must be turned off or the user or group must not be inherited from the project-level security settings.

1. To change a security role, select the user or group and select the role from the dropdown list.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
    
    :::image type="content" source="media/agent-pools-collection-level-security-dialog.png" alt-text="Screenshot of collection-level security dialog for all agent pools.":::

1. Close the dialog.

### Set collection security for individual agent pools

Individual agent pools inherit the collection-level security assignments. The **Default** and **Azure Pipelines** agent pools include the **Project Valid Users** group for each project in the collection.  

Agent pools that are created at the project-level are automatically assigned the **[\<project name\>]\Project Valid Users** group and the creator of the agent pool. The creator can't be deleted or modified. Any collection-level users and groups that are added from the project settings are listed here.  

You can add and remove collection-level users and groups and set security roles for an individual agent pool. The security roles at this level are **Reader**, **Service Account**, and **Administrator**. To lower the privilege level of an inherited role, inheritance must be disabled.

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select an agent pool.
1. Select **Security**. 
1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
     
        
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. To change a security role, select the user or group and select the role from the dropdown list.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

    :::image type="content" source="media\agent-pools-organization-level-security-for-individual-pool.png" alt-text="Screenshot of collection-level security dialog for an individual agent pool.":::

1. Close the dialog.

::: moniker-end

::: moniker range="azure-devops-2019"

## Configure collection security for agent pools

You can manage collection-level users and groups for all agent pools in the collection or at the object level, specifically for project-scoped agent pools. The security roles for agent pools are **Reader**, **Service Account**, and **Administrator**. The **User** and **Creator** roles aren't available at the collection level.

### Set collection security for all agent pools

By default, no users or groups have explicit roles for all pools in the collection. You can add collection-level users and groups and configure security roles for all agent pools in the collection.

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.
1. Select **All agent pools**. 

1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
        
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog.":::

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 

1. To change a security role, select the user or group and select the role from the dropdown list.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

### Set collection security for individual agent pools

Individual agent pools inherit their user and group roles from the collection-level assignments by default.

You can add and remove users and groups and set security roles for an individual agent pool. To remove an inherited user or group, or to lower the privilege level of an inherited role, you must disable inheritance.

The security roles at this level are **Reader**, **Service Account**, and **Administrator**.  

To configure security roles for all agent pools in the collection:

1. Go to **Collection settings** ::::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.

1. Select an agent pool.

1. Select the **Roles** tab. 
1. To add users and groups:
    1. Select **Add**
    1. Enter a user or group and select it from the search results.
    1. Repeat the previous step to add more users and groups.
    1. Select a role and select **Add**.
    
        :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of collection-level add user dialog."::: 

1. To remove a user or group from the list, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. 
1. To change a security role, select the user or group and select the role from the dropdown list.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

::: moniker-end

## Set project-level agent pool security

Follow these steps to set project-level security roles for all agent pools:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**. 
1. Select **Security**. 

   :::image type="content" source="media/agent-pool-security.png" alt-text="Screenshot of security selection for all agent pools."::: 

1. Select a user or group and set the role to **Reader**, **User**, **Creator**, or **Administrator**.

    :::image type="content" source="media/agent-pool-project-level-permissions.png" alt-text="Screenshot of security dialog for all agent pools.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::.

1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.
1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.
    
    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

## Set object-level agent pool security

You can override project-level user and group role assignments, and set pipeline permissions for an individual agent pool. To remove an inherited user or group, or lower the privilege level of an inherited role, you must disable inheritance.

::: moniker range=">= azure-devops-2022"

To open the security dialog:

1. From your project, select **Project settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: and select **Agent pools**.

1. Select an agent pool.
1. Select **Security**.

### Set pipeline permissions for an individual agent pool

To set pipeline permissions for an individual agent pool:

1. Select **Restrict permission**. This option is only available if the pool isn't restricted to specific pipelines.

   :::image type="content" source="media/agent-pool-restrict-permissions.png" alt-text="Screenshot of pipeline permissions dialog for an individual agent pool.":::

1. Select the **Add pipeline** button:::image type="icon" source="../../media/icons/add-dark-icon.png" border="false":::.

    :::image type="content" source="media/agent-pool-add-pipeline.png" alt-text="Screenshot of the button to add a pipeline.":::

1. Select the pipeline you want to add to the agent pool from the dropdown menu.

To open access to all pipelines, select  **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false":::, then select **Open access**.

   :::image type="content" source="media/agent-pool-open-access.png" alt-text="Screenshot of agent pool open access for all pipelines selection.":::

### Set object-level agent pool user permissions

From the **User permissions** section of the security dialog:

1. Select a user or group and set the role to **Reader**, **User**, or **Administrator**.

   :::image type="content" source="media/agent-pool-individual-pool-user-permissions.png" alt-text="Screenshot of user permissions dialog for an individual agent pool.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
  
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.
 
When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.

1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

::: moniker-end

::: moniker range="<= azure-devops-2020"

You can set pipeline and user security roles and pipeline permissions for an individual agent pool. 

1. Go to your agent pool and select **Security**.

1. Use the **Grant access permissions to all pipelines** switch to enable or disable permissions to all pipelines in the project:

   :::image type="content" source="media/agent-pool-grant-permissions.png" alt-text="Screenshot of agent Grant access permissions to all pipelines switch.":::

To set object-level user and group roles for an agent pool:

1. From the **User permissions** section of the security dialog:

1. Select a user or group and set the role to **Reader**, **User**, or **Administrator**.

   :::image type="content" source="media/agent-pool-individual-pool-user-permissions.png" alt-text="Screenshot of object-level user permissions dialog for an agent pool.":::

1. To remove a user or group, select the user or group and select the delete button:::image type="icon" source="../../media/icons/delete-icon.png" border="false":::. Inherited users and groups can't be removed unless inheritance is disabled.
1. Select the **Save changes** button:::image type="icon" source="media/save-icon.png" border="false"::: to save your changes or the **Reset changes** button:::image type="icon" source="media/reset-icon.png" border="false"::: to revert unsaved changes.

When you explicitly set a role, the inheritance for that user or group is turned off. To disable inheritance for all users and groups, turn off the **Inheritance** setting. When you re-enable inheritance, the roles for all users and groups revert to their project-level assignments.

To add project users or groups that aren't listed in the security dialog:

1. Select the **Add** button.

1. Enter the user or group in the search bar, then select the user or group from the search result. You can add multiple users and groups.
1. Select the **Role**.
1. Select **Add** to save the changes.

    :::image type="content" source="media/agent-pool-add-user.png" alt-text="Screenshot of add user dialog.":::

::: moniker-end

## Related articles

- [Create and manage agent pools](../../pipelines/agents/pools-queues.md)
- [Pipeline security roles](../../organizations/security/about-security-roles.md)