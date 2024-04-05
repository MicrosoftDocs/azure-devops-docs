---
author: ckanyika
ms.author: ckanyika
ms.date: 4/9/2024
ms.topic: include
---

### Upgrade AzDO owned tasks to Node 20

Azure Artifacts support for Rust Crates will enter General Availability starting from 2/16/2024. Billing meters will be turned, following the same pricing model applicable to the rest of the supported protocols.


### TFX validates whether a task is using an EOL Node runner

Task authors use [TFX](https://learn.microsoft.com/en-us/azure/devops/extend/publish/command-line?view=azure-devops) to publish extensions. TFX has been updated to perform validations on additional Node runner versions.

Extensions that contain tasks using a Node runner version that is end-of-live (up to and including Node 16) will see this warning:

```
Task <TaskName> is dependent on a task runner that is end-of-life and will be removed in the future. Authors should review Node upgrade guidance: https://aka.ms/node-runner-guidance.
```

### Auditable Shell task argument validation

A number of tasks have enhanced argument validation, see [enable shell tasks arguments parameter validation](https://learn.microsoft.com/azure/devops/pipelines/security/inputs?view=azure-devops#enable-shell-tasks-arguments-parameter-validation).

We now allow you to audit the impact of argument validation before enabling the feature. Go to Organization Settings > Settings > Task restrictions or Project Settings > General to enable auditing:

> [!div class="mx-imgBorder"]
> ![Screenshot of Enable shell tasks arguments validation.](../../media/237-pipelines-01.png "Screenshot of Enable shell tasks arguments validation")


This allows organizations and teams to make an informed decision before enforcing argument validation.

### Edit queue build configuration permission

To help you improve the security posture of your pipelines, we are adding a new pipeline permission named _Edit queue build configuration_ that controls who can define the values of variables settable at queue time and of free-text runtime parameters.

> [!div class="mx-imgBorder"]
> ![Screenshot of permissions.](../../media/237-pipelines-02.png "Screenshot of permissions")

Variables settable at queue time and parameters allow you to write configurable YAML pipelines. Alas, they also introduce the possibility of user input to be executed. The new permission mitigates this risk.

Users who have only _Queue build_ permission will be able to queue builds and edit the values of runtime parameters that have a predefined set of values. That is, they are able to choose values for parameters that are of type `boolean`, `number` or they have the `values` property set.

If a parameter can contain free text, for example, is of type `object`, then only those users who have the _Edit queue build configuration_ permission will be able to set it.

Imagine there is a pipeline with the following parameters defined:
```yaml
parameters:
- name: Configuration
  type: string
  values:
  - release
  - debug
  default: debug
- name: UseNewDeploymentMethod
  type: boolean
  default: false
- name: AzureSKU
  type: object
  default:
    WUS1: Standard D2lds v5
    WUS2: Standard D2lds v5
    WUS3: Standard D2lds v5
```   

Say the user queueing a run has only the _Queue build_ permission. When they queue the pipeline, they will be able to only specify the values of the `Configuration` and `UseNewDeploymentMethod` parameters. They wont be able to specify the value for the `AzureSKU` parameter.

> [!div class="mx-imgBorder"]
> ![Screenshot of run pipeline.](../../media/237-pipelines-03.png "Screenshot of run pipeline")

Changing variables marked as settable at queue time also requires the  _Edit queue build configuration_ permission. Otherwise, one cannot change the variable value.

> [!div class="mx-imgBorder"]
> ![Screenshot of variables.](../../media/237-pipelines-04.png "Screenshot of variables")

To make sure the new permission doesn't interfere with your day-to-day workloads, everyone who has _Queue build_ permission will receive the _Edit queue build configuration_ permission. Afterward, you can remove this permission as you see fit.