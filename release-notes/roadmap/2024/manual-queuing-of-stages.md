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
When you deploy to Production, this execution strategy isn't always the right choice.
For example, you don't want that _every_ pipeline run deploys to Production.
Today, you can simulate manual queuing of stages by making use of environments and approvals & checks or the `ManualValidation` task, but doing so is tedious.
We plan to give you the ability to define which stages run manually and to trigger such stages on demand.
