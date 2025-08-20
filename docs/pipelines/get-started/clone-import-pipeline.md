---
title: Clone or import a pipeline
description: Learn about creating a pipeline by cloning or importing an existing pipeline in Azure Pipelines.
ms.topic: how-to
ms.date: 08/20/2025
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
#customer intent: As an Azure Pipelines user, I want to know how to clone and import pipelines so I can use existing pipelines as starting points for new ones.
---

# Clone or import a pipeline

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In Azure Pipelines, you can create a pipeline by using an existing pipeline as a starting point. For YAML pipelines, you can simply copy a YAML pipeline file or code from one pipeline to another. Cloning a YAML pipeline copies only the YAML code. You need to reconfigure any other settings, such as variables, triggers, options, and security.

For Classic pipelines, if the pipeline to copy is in the same project as your new pipeline, you can clone it. If it's in a different project, you can export it from that project and import it into your project. Cloning a Classic pipeline also clones its settings, except for security.

:::moniker range="azure-devops"

To migrate a Classic build pipeline to a YAML pipeline by using **Export to YAML**, see [Migrate from Classic pipelines](../migrate/from-classic-pipelines.md).

:::moniker-end

## Prerequisites

- An Azure DevOps project where you have permission to create and edit pipelines.
- An existing Azure Pipelines pipeline to base a new pipeline on.

## Clone or copy a pipeline

#### [YAML](#tab/yaml/)

For YAML pipelines, you copy the YAML from the pipeline you want to clone to your new pipeline. Only the YAML is copied. You need to reconfigure any other settings defined outside the YAML, such as variables, triggers, security, and other options.

:::moniker range="> azure-devops-2020"

If your source pipeline and new pipeline use the same source code repository, you can copy the source YAML pipeline definition file to the new pipeline. If the two pipelines are in different repositories or you want to start with a new file, you can copy the YAML code from the source pipeline into the new one.

To clone an existing pipeline definition YAML file in the repo:

1. Create a **New pipeline** in your Azure DevOps project.
1. On the **Configure your pipeline** page, select **Existing Azure Pipelines YAML file**, enter the path and filename for the existing source file, and select **Continue**.
1. Name and [customize](../customize-pipeline.md) the new pipeline as desired, and then select **Save and run**.

To copy YAML code from a source pipeline into a new pipeline:

1. Select the pipeline you want to clone from the list on the **Pipelines** page.
1. On the pipeline page, select **Edit** at upper right.

   :::image type="content" source="media/pipeline-edit.png" alt-text="Screenshot that shows Edit pipeline selected.":::

1. Copy the pipeline YAML from the editor.
1. Create a **New pipeline** in your Azure DevOps project.
1. On the **Configure your pipeline** page, select **Starter pipeline**.
1. On your new pipeline page, replace the contents of the starter file with the copied pipeline YAML.
1. Name and [customize](../customize-pipeline.md) the new pipeline as desired, and then select **Save and run**.

:::moniker-end

#### [Classic](#tab/classic/)

If the pipeline you want to clone is in the same project as your new pipeline, use the following procedure. If the pipeline to clone is in a different project, use [Export and Import](#export-and-import-a-pipeline).

1. Select the pipeline you want to clone from the list on the **Pipelines** page.
1. On the pipeline page, select the **More actions** icon at upper right, and then select **Clone**. The **Clone** item is available only for Classic pipelines.

   :::image type="content" source="../media/get-started-designer/clone-pipeline.png" alt-text="Screenshot that shows Clone on the pipeline More actions menu.":::

1. The pipeline is cloned with **-clone** appended to the name. Rename and configure the pipeline as desired, and then select **Save** or **Save & queue** to save the cloned pipeline.

> [!IMPORTANT]
> Variables, triggers, and options are cloned, but security settings aren't cloned. You must reconfigure security settings for the cloned pipeline.

---

> [!NOTE]
> To copy from a Classic source pipeline to a new YAML pipeline, select **View YAML** in the Classic pipeline agent job, and then select **Copy to clipboard**. Paste the YAML code into your new pipeline. Repeat these actions for each agent job in the pipeline.

## Export and import a Classic pipeline

You can create a new Classic pipeline by exporting an existing Classic pipeline and importing it into the new pipeline. Use this process when the source pipeline and new pipeline are in different projects.

:::moniker range="azure-devops"

### Build pipeline

You can export an existing build definition from a project, and then import it into another project.

1. Select the pipeline you want to clone from the list on the **Pipelines** page.
1. On the pipeline page, select the **More actions** icon at upper right, and then select **Export to JSON**. **Export to JSON** is available only for Classic pipelines.

   :::image type="content" source="media/export-classic-pipeline.png" alt-text="Screenshot that shows Export build pipeline.":::

1. The JSON file downloads to the download directory of your local machine per your browser settings.

1. Select **Pipelines** on the project page for your new pipeline, select the **More actions** icon at upper right on the **Pipelines** page, and select **Import a pipeline**.

1. Browse to and select the exported JSON file in your download directory, and then select **Import**.

1. The new pipeline opens with **-import** appended to the name. Rename and configure the pipeline as desired, and then select **Save** or **Save & queue** to save the imported pipeline.

> [!IMPORTANT]
> Exporting a pipeline strips any project specific data like agent pools and service connections. You have to configure these details for the new imported pipeline.

### Release pipeline

The procedure for exporting and importing Classic release pipelines is similar to the Classic build pipeline procedure, but the menus and UI are slightly different.

1. To export a Classic release pipeline, navigate to **Releases**, choose the **More actions** icon, and select **Export**. The **Export** item is available only for Classic pipelines.

   :::image type="content" source="media/classic-export-definition.png" alt-text="Screenshot that shows Export release pipeline.":::

1. To import a Classic release pipeline, navigate to **Releases**, choose **New**, and select **Import release pipeline**.

   :::image type="content" source="media/classic-import-pipeline.png" alt-text="Screenshot that shows Import release pipeline.":::

:::moniker-end

:::moniker range="=azure-devops-2020"

1. Select the pipeline you want to clone from the list on the **Pipelines** page.
1. On the pipeline page, select the **More actions** icon at upper right, and then select **Export**. **Export** is available only for Classic pipelines.

   :::image type="content" source="media/classic-export-definition.png" alt-text="Screenshot that shows Export release pipeline.":::

1. The JSON file downloads to the download directory of your local machine per your browser settings.

1. To import the pipeline, navigate to the **Builds** or **Releases** page in the project for your new pipeline. Select **New** and select the corresponding import pipeline option.

   :::image type="content" source="media/classic-import-pipeline.png" alt-text="Screenshot that shows Import release pipeline.":::

1. The new pipeline opens with **-import** appended to the name. Rename and configure the pipeline as desired, and then select **Save** or **Save & queue** to save the imported pipeline.

> [!IMPORTANT]
> Exporting a pipeline strips any project specific data like agent pools and service connections. You have to configure these details for the new imported pipeline.

:::moniker-end

## Related content

- [Customize a pipeline](../customize-pipeline.md)
