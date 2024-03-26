---
title: Add users to Azure Pipelines
description: Add users to Azure Pipelines and set permissions.
ms.assetid: DCEDB5E6-B6FB-4814-B3B9-F688094EA88B
ms.topic: conceptual
ms.date: 06/03/2021
monikerRange: '<= azure-devops'
---

# Add users to Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Permissions for build and release pipelines are primarily set at the object-level for a specific build or release, or for select tasks, at the collection level.

You can manage security for different types of resources such as variable groups, secure files, and deployment groups by adding users or groups to that role. Project administrator can grant or restrict access to project resources. If you want to allow a team member to edit pipelines, you must be a project administrator in order to do so.

::: moniker range="<=azure-devops"

## Add users to your project

1. Navigate to your project's summary page: `https://dev.azure.com/{your-organization}/{your-project}`

1. Select the **Invite** button to add a user to your project, and then fill out the required fields. Select **Add** when you are done.

    :::image type="content" source="media/project-invite-button.png" alt-text="Invite button":::

    :::image type="content" source="media/project-invite-dialog-box.png" alt-text="Add users to your project":::

1. The new user must accept the invitation before they can start creating or modifying pipelines.

## Verify permissions for contributors

> [!NOTE]
> A security best practice is to only grant permissions to required users or groups. The **Contributors** group may be too broad in a given project.  

To verify the permissions for your project's contributors, make sure you are a member of the **Build Administrators** group or the **Project Administrators** group. See [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) for more details.

1. From within your project, select **Pipelines** > **Pipelines**. Select the **All** tab, and then select the more actions menu then **Manage security**.

    :::image type="content" source="media/security-menu-item.png" alt-text="Manage pipeline security":::

1. On the permissions dialog box, make sure the following **Contributors** permissions are set to Allow.

    :::image type="content" source="media/builds-permissions-dialog-box.png" alt-text="Set up the contributors permissions":::

::: moniker-end













## Related articles 

- [Grant version control permissions to the build service](../scripts/git-commands.md)
- [Set pipelines permissions](../policies/permissions.md)
- [Set retention policies for builds, releases, and tests](./retention.md)
- [Default permissions and access](../../organizations/security/permissions-access.md) 
- [Permissions and groups reference](../../organizations/security/permissions.md) 
