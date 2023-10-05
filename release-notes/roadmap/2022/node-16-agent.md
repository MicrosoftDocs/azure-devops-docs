---
title: Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)
hide_comments: true
---

# Ship a Node 16 only agent in addition to the one that has all three versions (6, 10, 16)

Once we have all built-in Node tasks converted to work on the Node 16 runner, we will ship an agent with only the Node 16 runner (no end-of-life versions) for our security-conscious customers. Various customers have asked us to ship such an agent sooner since their security scans flag the Azure Pipelines agent as using an unsupported or end-of-life version of Node. Using the Node 16 only agent will also protect you from any vulnerabilities that are found in older versions of Node.

We will be shipping this agent package *in addition* to the one that has all three Node runners - 6, 10, and 16. If you wish to set up a self-hosted agent pool, you will then have a choice of using either the Node 16 only agent or the one with all three Node runners. In general, you will choose the Node 16 agent only if you are sure that all your custom tasks and those that you use from Marketplace will run on the new Node 16 task runner.