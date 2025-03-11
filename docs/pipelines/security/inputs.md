---
title: Securely use variables and parameters in a pipeline
description: Find out how to safely accept input from pipeline users.
ms.assetid: ada3e166-c606-48b3-8e5e-7d83b1c1c962
ms.reviewer: vijayma
ms.date: 06/10/2024
monikerRange: '>= azure-devops-2020'
---

# Securely use variables and parameters in your pipeline

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Learn how to securely utilize variables and parameters to collect input from pipeline users. For more information, see the following articles:

* [Define variables](../process/variables.md)
* [Set secret variables](../process/set-secret-variables.md)
* [Use predefined variables](../build/variables.md)
* [Use runtime parameters](../process/runtime-parameters.md)
* [Use template types](../process/templates.md)

Exercise caution with secret variables. The recommended methods for setting secret variables include using UI, creating a variable group, or utilizing a variable group sourced from Azure Key Vault. For more information, see [set secret variables](../process/set-secret-variables.md).

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Variables

Variables serve as a convenient method to gather user input upfront and facilitate data transfer between pipeline steps. However, exercise caution when working with variables. By default, newly created variables, whether defined in YAML or scripted, are read-write. Downstream steps can modify variable values unexpectedly.

For example, consider the following script snippet:

```batch
msbuild.exe myproj.proj -property:Configuration=$(MyConfig)
```

If a preceding step sets `MyConfig` to `Debug & deltree /y c:`, it could lead to unintended consequences. While this example merely deletes the contents of your build agent, it highlights the potential danger of such settings.

You can make variables read-only.
System variables like `Build.SourcesDirectory`, task output variables, and queue-time variables are always read-only.
Variables that are created in YAML or created at run time by a script can be designated as read-only.
When a script or task creates a new variable, it can pass the `isReadonly=true` flag in its logging command to make the variable read-only.

In YAML, you can specify read-only variables by using the following specific key:
```yaml
variables:
- name: myReadOnlyVar
  value: myValue
  readonly: true
```

### Queue-time variables

When defining a variable in the Pipelines UI editor, you can allow users to override its value during pipeline execution. These variables are referred to as queue-time variables and are always defined within the Pipelines UI editor. 

:::image type="content" source="media/define-variables-yaml-pipeline.png" alt-text="Screenshot of defining a queue-time variable.":::

Queue-time variables are exposed to the end user when they manually run a pipeline, and they can change their values.
:::image type="content" source="media/update-queue-time-variable.png" alt-text="Screenshot of updating the value of a queue-time variable.":::

::: moniker range="azure-devops"

Users need [Edit queue build configuration](/azure/devops/pipelines/policies/permissions#pipeline-permissions-reference) permission on the pipeline to specify variables set at queue time.

### Limit variables that can be set at queue time

The UI and REST API used to run a pipeline provide means for users to define new variables at queue time.

:::image type="content" source="media/add-variables-at-queue-time.png" alt-text="Screenshot of adding a queue-time variable just before running the pipeline.":::

In the early days of Azure Pipelines, this functionality had the following issues:
- It allowed users to define new variables not already defined by the pipeline author in the definition.
- It allowed users to override system variables.

To address these issues, we defined a setting to *limit variables that can be set at queue time.* With this setting turned on, only those variables explicitly marked as "Settable at queue time" can be set. In other words, you can set any variables at queue time unless this setting is turned on. 

The setting is designed to work at organization and project levels.
- **Organization level:** 
  - When the setting is on, it enforces that only variables explicitly marked as "Settable at queue time" can be modified for all pipelines across all projects within the organization.
  - Project Collection Administrators can enable or disable this setting.
  - Access this setting under **Organization settings** > **Pipelines** > **Settings**.
  :::image type="content" source="media/org-level-settings.png" alt-text="Screenshot of limiting variables that can be set at queue time at organization level.":::
- **Project level:** 
  - Similar to the organization level, enabling this setting ensures that only variables marked as "Settable at queue time" can be modified for all pipelines within the specific project.
  - If the organization-level setting is enabled, it applies to all projects and can't be turned off.
  - Project Administrators can enable or disable this setting.
  - Access this setting under **Project settings** > **Pipelines** > **Settings**.
  :::image type="content" source="media/project-level-settings.png" alt-text="Screenshot of limiting variables that can be set at queue time at project level.":::

The following example shows the setting is on and your pipeline defines a variable named `my_variable` that isn't settable at queue time.
:::image type="content" source="media/define-variables-classic-pipeline.png" alt-text="Screenshot of defining a variable in a classic pipeline.":::

Next, assume you wish to run the pipeline. The _Variables_ panel doesn't show any variables, and the _Add variable_ button is missing.

:::image type="content" source="media/add-variables-at-queue-time-setting-on.png" alt-text="Screenshot of variables panel with setting on.":::

Using the [Builds - Queue](/rest/api/azure/devops/build/builds/queue) and the [Runs - Run Pipeline](/rest/api/azure/devops/pipelines/runs/run-pipeline) REST API calls to queue a pipeline run and set the value of `my_variable` or of a new variable fails with an error similar to the following.
 
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

Unlike variables, a running pipeline can't modify pipeline parameters.
Parameters have data types such as `number` and `string`, and they can be restricted to specific value subsets. This restriction is valuable when a user-configurable aspect of the pipeline should only accept values from a predefined list, ensuring that the pipeline doesn't accept arbitrary data.

<a name="shellTasksValidation"></a> 

### Enable shell tasks arguments parameter validation

Pipelines can reference tasks executed within the pipeline. Some tasks include an `arguments` parameter that allows you to specify more options for the task.

When the setting *Enable shell tasks arguments parameter validation* is enabled, the arguments parameter undergoes review to ensure that the shell correctly executes characters like semi-colons, quotes, and parentheses.
Similar to the *Limit variables that can be set at queue time* option,  you can configure *Enable shell tasks arguments parameter validation* at the organization or project level under **Settings** > **Pipelines** > **Settings**.

When this feature is turned on, any validation issues related to the `arguments` parameter trigger an error message like the following one: 

``Detected characters in arguments that may not be executed correctly by the shell. Please escape special characters using backtick (`).``

To resolve this issue, adjust the arguments by escaping special characters as indicated in the error message. This validation applies to the `arguments` parameter in the following specific tasks:

- PowerShell 
- BatchScript
- Bash 
- Ssh
- AzureFileCopy
- WindowsMachineFileCopy

## Next steps

> [!div class="nextstepaction"]
> Secure your [shared infrastructure](misc.md#protect-shared-infrastructure)
