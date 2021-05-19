---
ms.topic: include
---

### Runtime parameters

With this update, we're adding runtime parameters. Runtime parameters let you have more control over what values can be passed to a pipeline. Unlike variables, runtime parameters have data types and don't automatically become environment variables. With runtime parameters you can:

* Supply different values to scripts and tasks at runtime
* Control parameter types, ranges allowed, and defaults
* Dynamically select jobs and stages with template expression

To learn more about runtime parameters, see the documentation [here](/azure/devops/pipelines/process/runtime-parameters?view=azure-devops&preserve-view=true).

### Agent diagnostics

We've added diagnostics for many common agent related problems such as many networking issues and common causes of upgrade failures. To get started with diagnostics, use **run.sh --diagnostics** or **run.cmd --diagnostics** on Windows.