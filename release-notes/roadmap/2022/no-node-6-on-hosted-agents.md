---
title: Remove Node 6 and Node 10 runners from Microsoft-hosted agents
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Remove Node 6 and Node 10 runners from Microsoft-hosted agents
hide_comments: true
---

# Remove Node 6 and Node 10 runners from Microsoft-hosted agents

After a series of changes described on the roadmap, we will finally remove the end-of-life versions of Node from Microsoft-hosted agents. Once we make this change, tasks that target Node 6 or Node 10 will fail on Microsoft-hosted agents. To reduce the impact this may have on you, we will:

- Give ample notice in blog posts and release notes.
- Expose warnings in pipeline logs in the months before removal when tasks target Node 6 or 10.
- Conduct brownouts (where using tasks that target Node 6 or 10 generates errors) to catch your attention and fix problematic pipelines before the final removal.
- Introduce a feature to [re-target a pipeline's Node 6 or Node 10 tasks to Node 16](pick-next-runner.md) (at your own risk).