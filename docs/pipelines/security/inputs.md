---
title: Recommendations to secure variables and parameters in a pipeline
description: Find out how to safely accept input from pipeline users.
ms.assetid: ada3e166-c606-48b3-8e5e-7d83b1c1c962
ms.reviewer: vijayma
ms.date: 03/24/2021
monikerRange: '> azure-devops-2019'
---

# How to securely use variables and parameters in your pipeline

This article discusses how to securely use variables and parameters to gather input from pipeline users.

## Variables

Variables can be a convenient way to collect information from the user up front. 
You can also use variables to pass data from step to step within a pipeline.

But use variables with caution.
Newly created variables, whether they're defined in YAML or written by a script, are read-write by default.
A downstream step can change the value of a variable in a way that you don't expect.

For instance, imagine your script reads:
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

Queue-time variables are exposed to the end user who manually runs a pipeline.
As originally designed, this concept was only for the UI. 
The underlying API would accept user overrides of any variable, even variables that weren't designated as queue-time variables.
This arrangement was confusing and insecure. 
So we've added a setting that makes the API accept only variables that can be set at queue time.
We recommend that you turn on this setting. 

## Parameters

Unlike variables, pipeline parameters can't be changed by a pipeline while it's running.
Parameters have data types such as `number` and `string`, and they can be restricted to a subset of values.
Restricting the parameters is useful when a user-configurable part of the pipeline should take a value only from a constrained list. The setup ensures that the pipeline won't take arbitrary data. 

## Next steps

After you secure your inputs, you also need to secure your [shared infrastructure](infrastructure.md).
