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

After a series of changes described on the roadmap, we will finally remove the deprecated EOL versions of Node from Microsoft-hosted agents. Once we make this change, you will no longer be able to run tasks that target Node 6 or Node 10 on Microsoft-hosted agents. Such pipelines would fail. To reduce the impact this may have on you, we will:

- Introduce a feature to [re-target a pipeline's Node 6 or Node 10 tasks to Node 16](pick-next-runner.md) (at your own risk).
- Expose warnings in pipeline logs if it runs tasks that target Node 6 or 10.
- Conduct brownouts to catch your attention and fix problematic pipelines.
- Give ample notice in blog posts and release notes.
