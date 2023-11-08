---
title: Stage concurrency
author: silviuandrica
ms.author: sandrica
ms.date: 11/8/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Stage concurrency
hide_comments: true 
---

# Stage concurrency

In YAML pipelines, runs of the same pipeline execute in parallel. 
The same is true of stages as well.
There are usage scenarios in which the parallel execution of the same stage isn't allowed.
For example, each stage of your pipeline kicks off an external deployment orchestration for a particular resource, 
and you must ensure that no two pipeline runs execute the same stage at the same time. 
Today, you can achieve mutual exclusion by making use of environments and the exclusive lock check, but doing so is tedious.
We plan to give you the ability to define stage-level locks, to ensure mutual exclusion of stages.
