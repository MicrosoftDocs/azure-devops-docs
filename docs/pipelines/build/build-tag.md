---
title: Add, remove, and use build tags
description: Learn how to add, remove, and use build tags. 
ms.topic: how-to 
ms.date: 05/12/2025
ms.custom: template-how-to-pattern
ai-usage: ai-assisted
ms.author: jukullam
author: juliakm
monikerRange: '>= azure-devops-2020'
---

# Add, remove, and use build tags

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Build tags in Azure DevOps help you categorize and organize your builds, making it easier to filter and locate specific builds. This guide walks you through adding, removing, and using build tags as part of your build management process.  

## Prerequisites

An Azure DevOps organization and access to a project where you're a member of the **Contributors** group.

## Add a build tag to a completed build

#### [Azure Pipelines UI](#azure-pipelines-ui)

To add a tag to a completed build:

1. Open your Azure DevOps project and go to **Pipelines**.
1. Select the pipeline where you want to add a tag.

    :::image type="content" source="media/tags/select-pipeline.png" alt-text="Screenshot of selecting the pipeline to add a tag. ":::

1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and choose **Add tags** to add your first tag or **Edit tags** if you have an existing tag. 

    :::image type="content" source="media/tags/add-tag-more-actions.png" alt-text="Screenshot of select option to add tag.":::

1. Enter a tag name (for example, contoso).

    :::image type="content" source="media/tags/add-tag-name.png" alt-text="Screenshot of adding a new build tag.":::

1. Press **Enter**  to save the tag.

#### [Azure DevOps CLI](#azure-devops-cli)

To create a build tag, use the [az pipelines build tag add](/cli/azure/pipelines/build/tag#az-pipelines-build-tag-add) command.

For example, the following command creates a build tag named `prod` in the `contoso` organization and `webapp` project for the build `1234`.

```azurecli
az pipelines build tag add --build-id 1234
                           --tags prod
                           --org https://dev.azure.com/Contoso/
                           --project contoso
```
Output:

```json
[
  "prod"
]
```

---


## Remove a build tag

#### [Azure Pipelines UI](#tab/azure-pipelines-ui)

To remove build tags from your builds in Azure DevOps, follow these steps:

1. Open your Azure DevOps project and go to **Pipelines**.
1. Select the pipeline where you want to remove a tag.
1. Select **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: and choose **Edit tags**. 
1. Select the **X** next to the tag name to remove your tag.

    :::image type="content" source="media/tags/remove-build-tag.png" alt-text="Screenshot of removing build tag.":::

1. Press **Save** to save the changes.

#### [Azure DevOps CLI](#tab/azure-devops-cli)

To remove a build tag, use the [az pipelines build tag delete](/cli/azure/pipelines/build/tag#az-pipelines-build-tag-delete) command.

For example, the following command removes a build tag named `prod` in the `contoso` organization and `webapp` project for the build `1234`.

```azurecli
az pipelines build tag delete --build-id 1234
                           --tag prod
                           --org https://dev.azure.com/Contoso/
                           --project contoso
```

Output:

```json
[
]
```

---

## Add a build tag to a future build

To automatically add a build tag to a future build in a YAML pipeline, use the [`addbuildtag` logging command](../scripts/logging-commands.md#addbuildtag-add-a-tag-to-the-build). 

In the following example a new tag is added in a script task with a variable that includes the current date.

```yaml
steps:
- script: |
    last_scanned="last_scanned-$(date +%Y%m%d)"
    echo "##vso[build.addbuildtag]$last_scanned"
  displayName: 'Apply last scanned tag'
```
---

## Filter with a build tag

Once you have added build tags to your builds, you can use them to filter and search for specific builds. To use build tags in Azure DevOps, follow these steps:

1. Open your Azure DevOps project and go to **Pipelines**.
1. Select **Runs** tab.
1. In the filter bar, select the tag you want to filter by.

    :::image type="content" source="media/tags/filter-tag.png" alt-text="Screenshot of selecting tag to filter by.":::

1. Azure DevOps filters the builds based on the specified tag, letting you find the runs you need.

