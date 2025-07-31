---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 07/31/2025
---

The following table highlights the key differences between parameters and variables in Azure Pipelines.

| Feature              | Parameters         |  [Variables](variables.md)         |
|----------------------|----------------------------|-----------------------------|
| **Evaluation Time**  | Template parsing (queue)   | Evaluation is syntax-dependent. Variables defined with macro syntax (`$(var)`) evaluate at runtime before a task runs and used in scripts and tasks. Variables defined with runtime expressions (`$[variables.var]`) evaluate before a job or stage runs and are used in conditions or dynamic variable assignment.  |
| **Mutability**       | Immutable after queue      | User-defined, environment, and output variables can be updated dynamically during pipeline execution |
| **UI exposure during run**  | Shown in Run Pipeline UI and can be set before a run | Exposed during run if set in Pipeline UI as overridable |
| **Secret values**      | No support for secret values | Can be [set as secrets](set-secret-variables.md) |
