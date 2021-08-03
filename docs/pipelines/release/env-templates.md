---
title: Use stage templates in release pipelines
ms.custom: seodec18
description: How to use stage templates in Azure Pipelines
ms.assetid: BE9E2883-5CEB-4A91-A038-CB45B728A0C4
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 08/03/2021
monikerRange: '>= tfs-2015'
"recommendations": "true"
---

# Stage templates

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2015**

Azure Pipelines provide a list of stage templates you can choose from when creating a new release pipeline or adding a stage to your existing one. The templates are pre-defined with the appropriate tasks and settings to help you save time and effort when creating your release pipeline.

Aside from the pre-defined templates, you can also create your own custom stage templates based on your specific needs.

When a stage is created from a template, the tasks in the template are copied over to the stage. Any further updates to the template have no impact on existing stages. If you are trying to add multiple stages to your release pipeline and update them all in one operation, you should use [task groups](../library/task-groups.md) instead.

> [!NOTE]
> Templates cannot be restrict to specific users or groups. All templates, pre-defined or custom, are available to all users who have the permission to create release pipelines.

## Save a stage template

You can save a stage template from within your classic release pipeline. 

1. Select your release pipeline, and then select **Edit**. 

1. Select the stage you want to export. 

1. Select the three dots button, and then select **Save as template**.

    :::image type="content" source="media/stage-templates/save-stage-template.png" alt-text="Select the three dots and save as template.":::

1. Name your template, and then select **Ok** when you are done.
  
    :::image type="content" source="media/stage-templates/name-stage-template.png" alt-text="Add a name for your stage template.":::

## Use a stage template

1. From within your release pipeline definition, select **Add** to add a stage. 

1. Select **New stage**.

    :::image type="content" source="media/use-stage-template.png" alt-text="Screenshot showing how to add a stage template":::

1. Use the search bar to search for your custom template. Select **Add** to use your custom template.

    :::image type="content" source="media/load-custom-stage-template.png" alt-text="Screenshot showing how to load a custom stage template":::

## FAQs

### Q: Can I export templates or share them with other subscriptions, enterprises, or projects?

Custom templates are scoped to the project that hosts them. Templates cannot be exported or shared with other projects, collections, servers, or organizations.
You can, however, export a release pipeline into another project, collection, server, or subscription and then re-create the template and use it in that new location.

### Q: How do I delete a custom stage template?

Existing custom templates can be deleted from the *Select a Template* window panel. From within your release pipeline definition, select **Add** > **New Stage** to access the list of templates.

    :::image type="content" source="media/delete-custom-template.png" alt-text="Screenshot showing how to delete a custom stage template":::

### Q: How do I update a custom stage template?

To update a stage template, delete the existing one from the list of templates, and then save the new one with the same name.

## Related articles

- [Deploy pull request Artifacts ](deploy-pull-request-builds.md).
- [Deploy from multiple branches](deploy-multiple-branches.md).
- [View release progress and test summary](visualize-release-test-progress.md).
