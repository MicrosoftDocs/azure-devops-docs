---
title: Variables and parameters
description: Safely accepting input from pipeline users.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: ada3e166-c606-48b3-8e5e-7d83b1c1c962
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 2/04/2020
monikerRange: '> azure-devops-2019'
---

# Variables and parameters

Variables can be a convenient way to collect information from the user up front or to pass data along from step to step within a pipeline.
Use with caution, however.
Some variables are read-write by default, meaning that a step can change the value of a variable in a way you don't expect.

Variables can be made read-only.
System variables, task output variables, and queue-time variables are always read-only.
Variables created in YAML or created at runtime by a script can be designated read-only.
When a script or task creates a new variable, it can pass the `isReadonly=true` flag in its logging command to make the variable read-only.

Queue-time variables are exposed to the end user who is manually running a pipeline.
As originally designed, this was a UI-only concept and the underlying API would accept user overrides of any variable, even those not designated queue-time.
This was confusing and insecure, so we have added a setting which allows you to enforce the "queue-time settable" flag on the API as well.
We recommend you turn this setting on. 

Unlike variables, pipeline parameters cannot be changed by a pipeline while it's running.
Parameters have data types such as `number` and `string`, and they can be restricted to a subset of values.
This is useful when a user-configurable part of the pipeline should only take a value from a constrained list, ensuring it won't take arbitrary data. 

After you've secured your inputs, you also need to secure your [shared infrastructure](infrastructure.md).
