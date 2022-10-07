---
title: Deprecate Node 10 from agent and tasks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Deprecate Node 10 from agent and tasks
hide_comments: true
---

### Deprecate Node 10 from agent and tasks

The Azure Pipelines agent and a number of its tasks use either Node 6 or Node 10 as the runtime. Given the end of life for Node 10, we need to move to a newer version of Node. This is also required for us to support the next version of macOS. There is one important consequence of moving to a newer version of Node. The agent will no longer work on RHEL 6. Stay tuned for more updates here and in our release notes.