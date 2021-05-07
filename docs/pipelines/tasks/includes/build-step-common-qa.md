---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 01/05/2021
ms.prod: devops
ms.technology: devops-cicd-tasks
---

#### Q: I'm having issues with publishing my artifacts. How can I view the detailed logs?

To enable detailed logs for your pipeline:

1. Edit your pipeline and select **Variables**
1. Add a new variable with the name `System.Debug` and value `true`
1. **Save** 

#### Q: Which variables are available to me? 

A: `$(Build.SourcesDirectory)` and `$(Agent.BuildDirectory)` are just few of the variables you can use in your pipeline. Variables are available as [expressions](../../process/expressions.md) or scripts.

See [Define variables](../../process/variables.md), [predefined variables](../../build/variables.md), and [Classic release and artifacts variables](../../release/variables.md)  to learn about the different types of variables.

