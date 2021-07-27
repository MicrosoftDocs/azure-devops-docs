---
title: Add protection to a repository resource
description: Add checks and pipeline protection to a repository
ms.reviewer: vijayma
ms.date: 07/21/2021
monikerRange: '> azure-devops-2019'
---

# Protect a repository resource

[!INCLUDE [version-vsts-plus-azdevserver-2019](../../includes/version-vsts-plus-azdevserver-2019.md)]

You can add protection to your [repository resource](resources.md#resources-repositories) with checks and pipeline permissions. When you add protection, you're better able to restrict repository ownership and editing privileges.

## Prerequisites

You must be a member of the [Project Administrators Group](../../organizations/security/set-project-collection-level-permissions.md) or have your **Manage permissions** set to **Allow** for Git repositories.

## Add a repository resource check

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and choose your project.

1. Select **Project settings** > **Repositories**.

    :::image type="content" source="media/project-settings-repository.png" alt-text="Go to Repositories.":::

1. Choose the repository that you want to modify.

1. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Approvals and checks**.

    :::image type="content" source="../../organizations/settings/work/media/process/repository-approval.png" alt-text="Select Approvals & Checks.":::

1. Choose a check to set how your repository resource can be used, and then select **Next**. In the following example, we choose to add Approvals, so a manual approver for each time a pipeline requests the repository. For more information, see [Approvals and checks](approvals.md).

   :::image type="content" source="media/add-check-repository.png" alt-text="Screenshot of checks that you can add.":::

1. Configure the check in the resulting screen, and then select **Create**.

   :::image type="content" source="media/create-check-repository.png" alt-text="Screenshot of configured check and Create button.":::

Your repository has a resource check.
## Add pipeline permissions to a repository resource

You can also set a repository to only be used on specific pipelines. Restricting a repository to specific pipelines prevents an unauthorized pipeline in your project from using your repository.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and choose your project.

1. Select **Project settings** > **Repositories**.

    :::image type="content" source="media/project-settings-repository.png" alt-text="Go to Repositories.":::

1. Choose the repository that you want to modify.

1. Select **Security**.

    :::image type="content" source="media/security-tab-settings.png" alt-text="Select the Security tab. ":::

1. Go to **Pipeline permissions**.

    :::image type="content" source="media/pipeline-repository-permission.png" alt-text="Add a pipeline repository restriction.":::

1. Select :::image type="icon" source="../../media/icons/add-light-icon.png" border="false":::.

1. Choose the repository to add.

You can see the added repository listed.

## Next steps

> [!div class="nextstepaction"]
> [Add and use variable groups](../library/variable-groups.md)

## Related articles

- [Set Git repository permissions](/azure/devops/repos/git/set-git-repository-permissions)
- [Git repository settings and policies](../../repos/git/repository-settings.md)
- [Azure Pipelines resources in YAML](resources.md)
