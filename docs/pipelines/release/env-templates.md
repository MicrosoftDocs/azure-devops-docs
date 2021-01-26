---
title: Use stage templates in deployments
ms.custom: seodec18
description: DevOps CI CD - Understand stage templates in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: BE9E2883-5CEB-4A91-A038-CB45B728A0C4
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 12/18/2020
monikerRange: '>= tfs-2015'
---

# Stage templates in Azure Pipelines

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

When you start a new release pipeline, or when you add a stage to an existing release pipeline, you can choose from a list of templates for each stage. These templates pre-populate the stage with the appropriate tasks and settings, which can considerably reduce the time and effort required to create a release pipeline for your DevOps CI/CD processes.

A set of pre-defined stage templates is available in Azure Pipelines and in each version of TFS. You can use these templates when you create a new release pipeline or add a new stage to a pipeline. You can also create your own custom stage templates from a stage you have populated and configured.

> [!NOTE]
> Templates do not have any additional security capability. There is no way to restrict the use of a template to specific users. All templates, pre-defined and custom, are available for use by all users who have permission to create release pipelines.

When a stage is created from a template, the tasks in the template are copied over to the stage. Any further updates to the template have no impact on existing stages. If you want a way to easily insert a number of stages into release pipelines (perhaps to keep the definitions consistent) and to enable these stages to all be updated in one operation, use [task groups](../library/task-groups.md) instead of stage templates.

## Save a template

You can save a stage template from within a classic release pipeline. 

1. Open and edit your release pipeline. 

1. Open the stage you want to export. 

1. Select the three dots and choose **Save as template**.

    :::image type="content" source="media/stage-templates/save-stage-template.png" alt-text="Select the three dots and save as template.":::

1. Name and save your template.
  
    :::image type="content" source="media/stage-templates/name-stage-template.png" alt-text="Add a name for your stage template.":::

## Use a template

1. From the release pipeline, select **Add** to add a stage. 

1. Choose **New stage**.

1. Scroll to the end of the **Select a template** window to see your custom templates. 

1. Select **Apply** to use your custom template.  

    :::image type="content" source="media/stage-templates/use-custom-stage-template.png" alt-text="Select a custom stage template to use. ":::

## FAQ

- **Can I export templates or share them with other subscriptions, enterprises, or projects?**

Custom templates that you create are scoped to the project that you created them in.
Templates cannot be exported or shared with another project, collection, server, or organization.
You can, however, export a release pipeline and import it into another project, collection, server, or subscription.
Then you can re-create the template for use in that location.

- **How do I delete a custom stage template?**

You can delete an existing custom template from the list of templates that is displayed when you add a new stage to our pipeline.

> [!div class="mx-imgBorder"]
> ![Delete custom template](media/delete-custom-template.png)

- **How do I update a custom stage template?**

To update a stage template, delete the existing template in a release pipeline and then save the stage as a template with the same name.

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
