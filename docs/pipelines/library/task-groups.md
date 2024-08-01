---
title: Task groups in Classic pipelines
description: Understand, create, and manage task groups in Classic pipelines for Azure Pipelines.
ms.assetid: 0FEAE814-2AF8-441B-A099-E77B1008D2F0
ms.topic: how-to
ms.author: ronai
author: RoopeshNair
ms.date: 08/01/2024
monikerRange: '<= azure-devops'
---

# Task groups in Classic pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains the concept of *task groups* in Classic pipelines, and describes how to create, manage, and version task groups.

> [!NOTE]
> Task groups aren't supported in YAML pipelines. Instead, you can use templates. For more information, see [Templates](../process/templates.md).

In Classic pipelines, a task group encapsulates a sequence of tasks that are already defined in a pipeline into a single reusable task. The new task group is automatically added to the task catalog, and can be added to pipelines in the project just like other tasks. Task groups are stored at the project level, and aren't accessible outside the project scope.

Task groups are a way to standardize and centrally manage deployment steps for all your applications. When you make a change centrally to a task group, the change is automatically reflected in all the pipeline definitions that use the task group. You don't need to change each definition individually.

## Prerequisites

- An Azure DevOps organization and project where you have permission to create pipelines.
- A Classic release pipeline created in the project.

## Extract task parameters as variables

When you create a task group, you can choose to extract the parameters from the encapsulated tasks as configuration variables, and abstract the rest of the task information. Variables used in the tasks are automatically extracted and converted into parameters for the task group, and values of these configuration variables are converted into default values for the task group.

You can also change the default values for the parameters when you save the new task group. When you queue a pipeline or release, the encapsulated tasks are extracted and the values you entered for the task group parameters are applied to the tasks.

Before you create a task group, make sure to define any parameters that you want to be able to configure in pipeline runs as variables, such as **$(MyVariable)**. Any task parameters that have no values or have specified values instead of variables become fixed parameters and aren't exposed to the task group as configurable parameters.

You can also configure task conditions in a task group, such as **Run this task only when a previous task has failed** for a **PowerShell Script** task, and these conditions are persisted with the task group.

## Create a task group

When you save a new task group, you provide a name and description and select a category for the task group in the task catalog.

1. Open the release pipeline where you want to create a new task group.

1. To ensure that none of the tasks you intend to include contain any linked parameters, select **Unlink all** in the pipeline settings panel, and then select **Confirm**.

   :::image type="content" source="media/unlink-task-group.png" alt-text="Screenshot that shows unlinking parameters for all tasks.":::

1. Select a sequence of pipeline tasks that you want to turn into a task group, right-click to open the context menu, and then choose **Create task group**.

   :::image type="content" source="media/create-task-group.png" alt-text="Screenshot that shows creating a task group from a release pipeline list of tasks.":::

1. Specify a name and description for the new task group, and the category in the **Add tasks** pane you want to add it to.

1. Select **Create**. The new task group is created and replaces the selected tasks in your pipeline.

1. All the `'$(vars)'` from the underlying tasks, except [predefined variables](../build/variables.md), surface as the mandatory parameters for the newly created task group, and you can edit the values if necessary.

   For example, if you had a task input `foobar` that you didn't intend to parameterize, the task input is converted into the task group parameter `'foobar'`. You can provide the default value for the task group parameter `'foobar'` as `$(foobar)` to ensure that at runtime, the expanded task gets the input you intend.

1. Save your updated pipeline.

## Manage task groups

All the task groups in the current project are listed in the **Task groups** page under **Pipelines**.

:::image type="content" source="media/list-task-group.png" alt-text="Screenshot that shows listing task groups.":::

At the top of the **Task groups** page, you can select **Import** to import previously saved task group definitions. You can use this feature to transfer task groups between projects and enterprises, or replicate and save copies of your task groups.

You can also select **Security** at the top of the page to define who can use, edit, delete, or set permissions for all task groups in the project.

To manage a task group, right-click or select the **More actions** icon for the group, and select one of the following options from the context menu:

- Select **Delete** to delete the task group, and then select **Delete** again on the confirmation screen.
- Select **Export** to save a copy of the task group as a JSON pipeline.
- Select **Security** to define who can use, edit, delete, or set permissions for the task group.

To open the task group details page for editing, select the task group name on the **Task groups** page.

:::image type="content" source="media/manage-task-group.png" alt-text="Screenshot that shows managing a task group.":::

- On the **Tasks** tab, you can edit the tasks that make up the task group. For each encapsulated task you can change the parameter values for the nonvariable parameters, edit the existing parameter variables, or convert parameter values to and from variables. When you save the changes, all definitions that use the task group pick up the changes.
  
  All the variable parameters of the task group appear as mandatory parameters in the pipeline definition. You can also set the default values for the task group parameters.

- On the **History** tab, you can see the history of changes to the group.

- On the **References** tab, you can see lists of all the build and release pipelines and other task groups that reference this task group. This listing helps you ensure that changes don't have unexpected effects on other processes.

## Create preview and updated versions of task groups

All built-in Azure Pipelines tasks are [versioned](../process/tasks.md#task-versions). Versioning allows pipelines to continue using the existing version of a task while new versions are developed, tested, and released. You can version your custom task groups the same way to provide the same advantages.

1. To version a task group, after you finish editing it, select **Save as draft** instead of **Save**.

   :::image type="content" source="media/save-draft-task-group.png" alt-text="Screenshot that shows saving a draft update to a task group.":::

1. The string **-test** is appended to the task group version number. When you're happy with the changes, choose **Publish draft**. On the **Publish draft task group** screen, select **Publish as preview** if you want to publish the new version as a preview, and then select **Publish**.

   :::image type="content" source="media/publish-preview-task-group.png" alt-text="Screenshot that shows publishing a draft version of a task group.":::
 
1. You can now use the updated task group in your release processes. You can either change the version number in pipelines that already use the task group, or choose the versioned task group from the **Add tasks** pane. As with built-in tasks, the default when you add a task group is the highest non-preview version.

   :::image type="content" source="media/use-preview-task-group.png" alt-text="Screenshot that shows using a draft version of a task group.":::

1. After you finish testing the updated task group, choose **Publish preview**, and then select **Publish**. The **Preview** string is removed from the version number, and the version now appears in definitions as a production-ready version.

   :::image type="content" source="media/publish-version-task-group.png" alt-text="Screenshot that shows publishing a preview version of a task group.":::

1. You can now select the new production-ready version in a pipeline that already contains the task group. When you add the task group from the **Add tasks** panel, it automatically selects the new production-ready version. You can edit the pipeline to use an earlier version.

   :::image type="content" source="media/use-version-task-group.png" alt-text="Screenshot that shows using an updated version of a task group.":::

## Work with task group versions

Task group updates can be minor or major version updates.

### Create a minor version update

To create a minor version update, you directly save the task group after editing it instead of saving it as a draft.

The version number doesn't change, and the latest changes show up in the pipeline definition automatically. For example, if your task group is version `1`, you can have any number of minor version updates such as `1.1`, `1.2`, and `1.3`. In your pipeline, the task group version shows as `1.*`.

Use minor version updates for small changes in the task group, when you expect pipelines to use the new change without editing the version in the pipeline definition.

### Create a major version update

To create a new major version, you save the task group updates as draft and create a preview, validate the changes, and then publish the preview.

This process bumps up the task group to a new version. If you had a task group with version `1.*`, new versions are published as `2.*`, `3.*`, `4.*`, and so on.

A notification about new version availability appears in all the pipeline definitions that use the task group. Users must explicitly update to the new task group version if they want to use it in their pipelines.

When you make substantial changes that might break existing pipelines, you can test and roll out the changes as a new major version. Users can choose to upgrade to new version or stay on the current version. This functionality is the same as a regular task version update.

### Test a minor version update

If your task group update isn't a breaking change, but you want to test first and then force all pipelines to use the latest changes, follow these steps:

1. Save the task group changes as a draft. A new draft task group named **\<Taskgroupname> (Draft)** is created with your changes.
1. Add this draft task group directly to your test pipeline.
1. Validate the changes in your test pipeline. Once you're confident in the changes, go back to your main task group, do the same changes, and save them directly. The changes are saved as a minor version update.
1. The new changes now show up in all the pipelines that use this task group. Now you can delete your draft task group.

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]

## Related content

* [Tasks](../process/tasks.md)
* [Task jobs](../process/phases.md)

