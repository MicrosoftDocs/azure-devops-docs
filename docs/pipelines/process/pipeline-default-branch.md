---
title: Pipeline default branch
description: See how to configure a pipeline's default branch in Azure Pipelines.
ms.topic: conceptual
ms.author: sandrica
author: silviuandrica
ms.date: 08/01/2024
monikerRange: 'azure-devops || >= azure-devops-2020'
---

# Pipeline default branch

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article describes how to view and edit a pipeline's default branch. A pipeline's default branch defines the pipeline version used for manual builds, scheduled builds, retention policies, and in pipeline resource triggers. By default, a pipeline's default branch is the default branch of the repository.

## View and update the default branch

To view and update the **Default branch for manual and scheduled builds** setting:

1. In your Azure DevOps project, select your pipeline from the **Pipelines** list.
1. On the pipeline page, select **Edit**.

   :::image type="content" source="media/pipeline-triggers/pipeline-edit.png" alt-text="Screenshot that shows selecting Edit for a pipeline."::: 

1. In the **More actions** menu, select **Triggers**.

   :::image type="content" source="media/pipeline-triggers/edit-triggers.png" alt-text="Screenshot that shows selecting Triggers for edit."::: 

1. Select **YAML** > **Get sources**, and view the **Default branch for manual and scheduled builds** setting.

1. To change the branch, select the **Browse** icon next to the branch name, select a different branch name, and select **Select**. Then select **Save** or **Save & queue** on the pipeline page.

   :::image type="content" source="media/pipeline-triggers/default-branch-setting.png" alt-text="Screenshot that shows the Default branch for manual and scheduled builds setting."::: 

> [!IMPORTANT]
> Azure Pipelines loads a maximum of 2,000 branches from a repository into the **Default branch for manual and scheduled builds** selector. If you don't see your desired branch in the list, enter the desired branch name manually.

## Related content
- [View and manage your pipelines](../create-first-pipeline.md#view-and-manage-your-pipelines)
- [Configure schedules for pipelines](scheduled-triggers.md)
- [Trigger pipelines](pipeline-triggers.md)
- [Set retention policies for builds, releases, and tests](../policies/retention.md)
