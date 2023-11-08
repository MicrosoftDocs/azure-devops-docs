---
title: Stage traceability
author: silviuandrica
ms.author: sandrica
ms.date: 11/8/2023
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Stage traceability
hide_comments: true 
---

# Stage traceability

In YAML pipelines, it's hard to tell what is the state of your system.
For example, you can't easily see what is the latest pipeline run that executed a particular stage.
This limitation makes debugging the system more difficult.
In YAML pipelines, it's also difficult to reason what changes are going to be deployed in a particular stage.
We plan to give you the ability to see a stage-focused view of all the runs of a pipeline, so you can say that pipeline run `#123` was the last one to run in stage `Deploy WUS1`.
