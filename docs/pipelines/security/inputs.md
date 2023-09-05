---
title: Recommendations to secure variables and parameters in a pipeline
description: Find out how to safely accept input from pipeline users.
ms.assetid: ada3e166-c606-48b3-8e5e-7d83b1c1c962
ms.reviewer: vijayma
ms.date: 01/09/2023
monikerRange: '> azure-devops-2019'
---

# How to securely use variables and parameters in your pipeline

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article discusses how to securely use variables and parameters to gather input from pipeline users. If you'd like to learn more about using variables and parameters, see:

* [Define variables](../process/variables.md)
* [Use predefined variables](../build/variables.md)
* [Use runtime parameters](../process/runtime-parameters.md)
* [Template types & usage](../process/templates.md)

## Variables

Variables can be a convenient way to collect information from the user up front. 
You can also use variables to pass data from step to step within a pipeline.

But use variables with caution. Newly created variables, whether they're defined in YAML or written by a script, are read-write by default. A downstream step can change the value of a variable in a way that you don't expect.

For instance, your script reads:

```batch
msbuild.exe myproj.proj -property:Configuration=$(MyConfig)
```

A preceding step could set `MyConfig` to `Debug & deltree /y c:`.
Although this example would only delete the contents of your build agent, you can imagine how this setting could easily become far more dangerous.

You can make variables read-only.
System variables like `Build.SourcesDirectory`, task output variables, and queue-time variables are always read-only.
Variables that are created in YAML or created at run time by a script can be designated as read-only.
When a script or task creates a new variable, it can pass the `isReadonly=true` flag in its logging command to make the variable read-only.

In YAML, you can specify read-only variables by using a specific key:
```yaml
variables:
- name: myReadOnlyVar
  value: myValue
  readonly: true
```

### Queue-time variables

When defining a variable in the Pipelines UI editor, you can choose to let users override its value when running the pipeline. We call such a variable a queue-time variable. Queue-time variables are always defined in the Pipelines UI editor. 

:::image type="content" source="media/define-variables-yaml-pipeline.png" alt-text="Screenshot of defining a queue-time variable.":::

Queue-time variables are exposed to the end user when they manually run a pipeline, and they can change their values.
:::image type="content" source="media/update-queue-time-variable.png" alt-text="Screenshot of updating the value of a queue-time variable.":::

::: moniker range="azure-devops"

### Limit variables that can be set at queue time

The UI and REST API used to run a pipeline provide means for users to define new variables at queue time.

:::image type="content" source="media/add-variables-at-queue-time.png" alt-text="Screenshot of adding a queue-time variable just before running the pipeline.":::

In the early days of Azure Pipelines, this functionality had some issues:
- It allowed users to define new variables that aren't explicitly defined by the pipeline author in the definition.
- It allowed users to override system variables.

To correct these issues, we defined a setting to limit variables that can be set at queue time. With this setting enabled, only those variables that are explicitly marked as "Settable at queue time" can be set. In other words, you can set any variables at queue time unless this setting is enabled. 

The setting is designed to work at organization level and at project level.
1. Organization level. When the setting is on, it enforces that, for all pipelines in all projects in the organization, only those variables that are explicitly marked as "Settable at queue time" can be set. When the setting is off, each project can choose whether to restrict variables set at queue time or not. The setting is a toggle under Organization Settings -> Pipelines -> Settings. Only Project Collection Administrators can enable or disable it.
  :::image type="content" source="media/org-level-settings.png" alt-text="Screenshot of limiting variables that can be set at queue time at organization level.":::
1. Project level. When the setting is on, it enforces that, for all pipelines in the project, only those variables that are explicitly marked as "Settable at queue time" can be set. If the setting is on at the organization level, then it is on for all projects and can't be turned off. The setting is a toggle under Project Settings -> Pipelines -> Settings. Only Project Administrators can enable or disable it.
  :::image type="content" source="media/project-level-settings.png" alt-text="Screenshot of limiting variables that can be set at queue time at project level.":::

Lets look at an example. Say the setting is on and your pipeline defines a variable named `my_variable` that isn't settable at queue time.
:::image type="content" source="media/define-variables-classic-pipeline.png" alt-text="Screenshot of defining a variable in a classic pipeline.":::

Next, assume you wish to run the pipeline. The _Variables_ panel doesn't show any variables, and the _Add variable_ button is missing.

:::image type="content" source="media/add-variables-at-queue-time-setting-on.png" alt-text="Screenshot of variables panel with setting on.":::

Using the [Builds - Queue](/rest/api/azure/devops/build/builds/queue) and the [Runs - Run Pipeline](/rest/api/azure/devops/pipelines/runs/run-pipeline) REST API calls to queue a pipeline run and set the value of `my_variable` or of a new variable will fail with an error similar to the following.
 
```json
{
  "$id": "1",
  "innerException": null,
  "message": "You can't set the following variables (my_variable). If you want to be able to set these variables, then edit the pipeline and select Settable at queue time on the variables tab of the pipeline editor.",
  "typeName": "Microsoft.Azure.Pipelines.WebApi.PipelineValidationException, Microsoft.Azure.Pipelines.WebApi",
  "typeKey": "PipelineValidationException",
  "errorCode": 0,
  "eventId": 3000
}
```

::: moniker-end

## Parameters

Unlike variables, pipeline parameters can't be changed by a pipeline while it's running.
Parameters have data types such as `number` and `string`, and they can be restricted to a subset of values.
Restricting the parameters is useful when a user-configurable part of the pipeline should take a value only from a constrained list. The setup ensures that the pipeline won't take arbitrary data. 

<a name="shellTasksValidation"></a> 

### Enable shell tasks Arguments parameter validation

Pipelines can reference tasks that are executed in the pipeline. Several tasks included in Azure Devops have an Arguments parameter that enables you to specify additional options for the task.

When the setting 'Enable shell tasks arguments Parameter validation' is enabled, the Arguments parameter is checked for any characters that may not be executed correctly by the shell, such as semi-colons, quotes, or parentheses.

Similar to 'Limit variables that can be set at queue time',  'Enable shell tasks arguments Parameter validation' may be configured at the Organization under Organization Settings -> Pipelines -> Settings or Project level under Project Settings -> Pipelines -> Settings.

When enabled, if validation detects an issue, an error message like the following is logged:

```
Detected characters in arguments that may not be executed correctly by the shell. Please escape special characters using backtick (`). 
```

To resolve the issue, adjust the arguments by escaping special characters as indicated in the error message.

When 'Enable shell tasks argument validation is enabled', validation is applied to the Arguments parameter in the following tasks.

- PowerShell 
- BatchScript
- Bash 
- Ssh
- AzureFileCopy
- WindowsMachineFileCopy

## Next steps

After you secure your inputs, you also need to secure your [shared infrastructure](infrastructure.md).
