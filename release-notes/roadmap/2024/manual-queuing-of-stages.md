---
title: Manual queuing of stages
author: silviuandrica
ms.author: sandrica
ms.date: 11/8/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Manual queuing of stages
hide_comments: true 
---

# Manual queuing of stages

In YAML pipelines, a stage starts running as soon as its dependencies are satisfied.
When deploying to Production, such a run strategy is not always the right choice.
For example, you may not wish that _every_ pipeline run deploys to Production.
Today, you can achieve this by artificially making use of environments and approvals & checks or the `ManualValidation` task, but this is tedious.
We plan to give you the ability to define which stages should run manually and to trigger suchs stages on demand.
