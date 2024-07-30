---
title: Use build tags
description: Learn how to add, remove, and use build tags. 
ms.topic: how-to 
ms.date: 06/18/2023
ms.custom: template-how-to-pattern
ai-usage: ai-assisted
monikerRange: '>= azure-devops-2020'
---

# How to add, remove, and use build tags

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Build tags in Azure DevOps let you categorize and organize your builds. Tags make it easier to filter and search for specific builds. In this article, learn how to add, remove, and use build tags in Azure DevOps.

See `az pipelines build tag` in [the Azure CLI guide](/cli/azure/pipelines/build/tag) to learn how to use tags with the azure-devops extension.

## Add a build tag to a completed build

To add a tag to a completed build:

1. Open your Azure DevOps project and go to **Pipelines**.
1. Select the pipeline where you want to add a tag.

    :::image type="content" source="media/tags/select-pipeline.png" alt-text="Screenshot of selecting the pipeline to add a tag. ":::

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and choose **Add tags** to add your first tag or **Edit tags** if you have an existing tag. 

    :::image type="content" source="media/tags/add-tag-more-actions.png" alt-text="Screenshot of select option to add tag.":::

1. Enter a tag name (example: contoso).

    :::image type="content" source="media/tags/add-tag-name.png" alt-text="Screenshot of adding a new build tag.":::

1. Press **Enter**  to save the tags.

## Add a build tag to a future build

To add a build tag to a build in a YAML pipeline, use the [`addbuildtag` logging command](../scripts/logging-commands.md#addbuildtag-add-a-tag-to-the-build). 

In the following example a new tag gets added in a script task with a variable that includes the current date.

```yaml
steps:
- script: |
    last_scanned="last_scanned-$(date +%Y%m%d)"
    echo "##vso[build.addbuildtag]$last_scanned"
  displayName: 'Apply last scanned tag'
```


## Remove a build tag

To remove build tags from your builds in Azure DevOps, follow these steps:

1. Open your Azure DevOps project and go to **Pipelines**.
1. Select the pipeline where you want to remove a tag.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and choose **Edit tags**. 
1. Select the **X** next to the tag name to remove your tag.

    :::image type="content" source="media/tags/remove-build-tag.png" alt-text="Screenshot of removing build tag.":::

1. Press **Save** to save the changes.

## Filter with a build tag

Once you have added build tags to your builds, you can use them to filter and search for specific builds. To use build tags in Azure DevOps, follow these steps:

1. Open your Azure DevOps project and go to **Pipelines**.
1. Select **Runs** tab.
1. In the filter bar, select the tag that you want to filter by.

    :::image type="content" source="media/tags/filter-tag.png" alt-text="Screenshot of selecting tag to filter by.":::

1. Azure DevOps will filter the builds based on the specified tag, allowing you to find the runs you need.

