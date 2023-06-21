---
title: Pipeline default branch
description: Configure a pipeline's default branch
ms.topic: conceptual
ms.author: sandrica
author: silviuandrica
ms.date: 02/01/2022
monikerRange: 'azure-devops || >= azure-devops-2020'
---

# The pipeline default branch

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

A pipeline's default branch defines the pipeline version used for manual builds, [scheduled builds](scheduled-triggers.md),  [retention policies](../policies/retention.md), and in [pipeline resource triggers](pipeline-triggers.md).

By default, a pipeline's default branch is the default branch of the repository.

To view and update the **Default branch for manual and scheduled builds** setting:

1. [Go to the pipeline details](../create-first-pipeline.md#view-and-manage-your-pipelines) for your pipeline, and choose **Edit**.

    :::image type="content" source="media/pipeline-triggers/pipeline-edit.png" alt-text="Edit pipeline."::: 

2. Choose **...** and select **Triggers**.

    :::image type="content" source="media/pipeline-triggers/edit-triggers.png" alt-text="Edit triggers."::: 

3. Select **YAML**, **Get sources**, and view the **Default branch for manual and scheduled builds** setting. If you change it, choose **Save** or **Save & queue** to save the change.

    :::image type="content" source="media/pipeline-triggers/default-branch-setting.png" alt-text="Default branch for manual and scheduled builds setting."::: 
