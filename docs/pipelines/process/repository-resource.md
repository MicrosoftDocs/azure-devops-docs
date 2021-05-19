---
title: Add protection to a repository resource
description: Add checks and pipeline protection to a repository
ms.reviewer: vijayma
ms.date: 05/18/2021
monikerRange: '> azure-devops-2019'
---

# Protect a repository resource

You can add protection to your [repository resource](resources.md#resources-repositories) with checks and pipeline permissions. When you add protection, you'll be better able to restrict repository ownership and editing privileges. 

## Add a repository resource check

Repository owners can control when a stage in a pipeline gets to use their repository with [checks and approvals](approvals.md). You can manage your checks and approvals for repositories from the **Project settings**. To set up a check:

1. Go to **Project settings** > **Repositories**.

    :::image type="content" source="media/project-settings-repository.png" alt-text="Go to Repositories.":::

1. Select the repository you want to modify. 
1. From :::image type="icon" source="../../media/icons/more-actions.png" border="false":::, select **Approvals and checks**.

    :::image type="content" source="../../organizations/settings/work/media/process/repository-approval.png" alt-text="Select Approvals & Checks.":::

1. Add a check to set how your repository resource can be used. For example, you can add a manual approver each time a pipeline requests the repository. Learn more about [approvals and checks](approvals.md). 


## Add pipeline permissions to a repository resource

You can also set a repository to only be used on specific pipelines. Restricting a repository to specific pipelines will prevent an unauthorized pipeline in your project from using your repository. To set up repository pipeline permissions:

1. Go to **Project settings** > **Repositories**.

    :::image type="content" source="media/project-settings-repository.png" alt-text="Go to Repositories.":::

1. Select the repository you want to modify. 
1. Open the **Security** tab.

    :::image type="content" source="media/security-tab-settings.png" alt-text="Select the Security tab. ":::
1. Go to **Pipeline permissions**.
    :::image type="content" source="media/pipeline-repository-permission.png" alt-text="Add a pipeline repository restriction.":::
1. Select :::image type="icon" source="../../media/icons/add-light-icon.png" border="false":::. 
1. Select your repository to add. You'll see the repository listed now. 
