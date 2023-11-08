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
This is true of stages as well.
There are usage scenarios in which the parallel execution of the same stage is not allowed.
For example, each stage of your pipeline kicks off an external deployment orchestration for a particular resource, 
and you must ensure that no two pipeline runs execute the same stage at the same time. 
Today, you can achieve this by artificially making use of environments and the execlusive lock check, but this is tedious.
We plan to give you the ability to define stage-level locks, to ensure mutual exclusion of stages.
