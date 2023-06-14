---
title: Add protection to a repository resource
description: Add checks and pipeline protection to a repository
ms.custom: pipelinesresourcesrefresh
ms.reviewer: vijayma
ms.date: 09/15/2022
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
---

# Protect a repository resource

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can add protection to your [repository resource](resources.md#define-a-repositories-resource) with checks and pipeline permissions. When you add protection, you're better able to restrict repository ownership and editing privileges.

## Prerequisites

You must be a member of the [**Project Administrators** group](../../organizations/security/change-project-level-permissions.md) or have your **Manage permissions** set to **Allow** for Git repositories.

## Add a repository resource check

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and choose your project.

2. Select **Project settings** > **Repos**.

    :::image type="content" source="media/project-settings-repository.png" alt-text="Go to Repositories.":::

3. Choose the repository that you want to modify.

4. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Approvals and checks**.

    :::image type="content" source="../../organizations/settings/work/media/process/repository-approval.png" alt-text="Select Approvals & Checks.":::

5. Choose a check to set how your repository resource can be used, and then select **Next**. In the following example, we choose to add Approvals, so a manual approver for each time a pipeline requests the repository. For more information, see [Approvals and checks](approvals.md).

   :::image type="content" source="media/add-check-repository.png" alt-text="Screenshot of checks that you can add.":::

6. Configure the check in the resulting screen, and then select **Create**.

   :::image type="content" source="media/create-check-repository.png" alt-text="Screenshot of configured check and Create button.":::

Your repository has a resource check.

## Add pipeline permissions to a repository resource

You can also set a repository to only be used on specific YAML pipelines. Restricting a repository to specific pipelines prevents an unauthorized YAML pipeline in your project from using your repository. This setting only applies to YAML pipelines.

> [!IMPORTANT]
> Access to all pipelines is turned *off* for [protected resources](../security/resources.md#protected-resources) by default. To grant access to all pipelines, enter a check in the security box next to "Grant access permission to all pipelines" for the resource. You can do so when you're creating or editing a resource. You'll need to be a repository administrator to have this option available. 

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and choose your project.

2. Select **Project settings** > **Repositories**.

    :::image type="content" source="media/project-settings-repository.png" alt-text="Go to Repositories.":::

3. Choose the repository that you want to modify.

4. Select **Security**.

    :::image type="content" source="media/security-tab-settings.png" alt-text="Select the Security tab. ":::

5. Go to **Pipeline permissions**.

    :::image type="content" source="media/pipeline-repository-permission.png" alt-text="Add a pipeline repository restriction.":::

6. Select :::image type="icon" source="../../media/icons/add-light-icon.png" border="false":::.

7. Choose the repository to add.

You can see the added repository listed.

## Next steps

> [!div class="nextstepaction"]
> [Add and use variable groups](../library/variable-groups.md)

## Related articles

- [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md)
- [Git repository settings and policies](../../repos/git/repository-settings.md)
- [Azure Pipelines resources in YAML](resources.md)
