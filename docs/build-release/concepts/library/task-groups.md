---
title: Task Groups in VSTS and Team Foundation Server
description: Understand Task Groups in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: 0FEAE814-2AF8-441B-A099-E77B1008D2F0
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Task Groups

**VSTS | TFS 2018 | TFS 2017**

A *task group* lets you to encapsulate a sequence of tasks already defined
in a build or a release definition into a single reusable task that can be
added to a build or release definition, just like any other task. You can
choose to extract the parameters from the encapsulated tasks as configuration
variables, and abstract the rest of the task information.

The new task group is automatically added to the task catalogue, ready to add
to other release and build definitions. Task groups are stored at project level,
and are not accessible outside the project scope.

Task groups are a way to standardize and centrally manage deployment steps for all your applications. 
When you include a task group in your definitions, and then make a change centrally to the task group,
the change is automatically reflected in all the definitions that use the task group. There is no need
to change each one individually.

To create a task group, selecting a sequence of tasks in a build or release definition 
(when using a mouse, click on the checkmarks of each one). Then open the shortcut menu
and choose **Create task group**. Specify a name and description, and the category (tab)
you want to add it to in the Add tasks dialog.

![Creating a task group from a release definition list of tasks](_img/create-task-group.png)

However, before you do that, consider the following
pointers to help you achieve the desired behavior:

* Ensure that all of the tasks you want to include in a task group have
  their parameters defined as variables,
  such as **$(MyVariable)**, where you want to be able to configure these parameters
  when you use the task group. Variables used in the tasks are automatically extracted and converted into parameters for the task group.
  Values of these configuration variables will be converted into default values for the task group.

* If you specify a value (instead of a variable) for a parameter, that
  value becomes a fixed parameter value and cannot be exposed as a parameter to the task group.
  
* Parameters of the encapsulated tasks for which
  you specified a value (instead of a variable), or you didn't provide
  a value for, are not configurable in the task group when added to a build
  or release definition.

* Task conditions (such as "Run this task only when a previous task has failed" for a
  **PowerShell Script** task) can be configured in a task group and these settings are persisted with the task group.

* When you save the task group, you can provide a name and a description for the
  new task group, and select a category where you want it to appear in the
  **Task catalog** dialog. You can also change the default values for each of the parameters.

* When you queue a build or a deployment, the encapsulated tasks
  are extracted and the values you entered for the task group parameters are applied to the tasks.
  
* Changes you make to a task group are reflected in every instance of the task group.

All the task groups you create in the current project are listed in
the **Task groups** tab of the **Build and Release** hub.

![Managing a task group](_img/manage-task-group.png)

* In the **Properties** page you can edit details of the task group, and change
  the default values and descriptions for the parameters.

* In the **Tasks** page you can edit the tasks that make up the task group.
  For each encapsulated task you can change the parameter values for the
  non-variable parameters, edit the existing parameter variables,
  or convert parameter values to and from variables.

* In the **History** tab you can see the history of changes to the group.

* In the **References** tab you can expand lists of all the release definitions,
  build definitions, and other task groups that use (reference) this task group.
  This is useful to ensure changes do not have unexpected effects on other processes.

  ![References to a task group](_img/task-group-references.png)

You can import and export a task group as a JSON file.

![Import or export a task group](_img/import-export-task-group.png)

## Related topics

* [Tasks](../process/tasks.md)
* [Task phases](../process/phases.md)

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
