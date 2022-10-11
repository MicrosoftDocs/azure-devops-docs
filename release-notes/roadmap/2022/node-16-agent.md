---
title: Ship Node 16 only agent
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Ship Node 16 only agent
hide_comments: true
---

# Ship Node 16 only agent

Once we have all the built-in Node tasks converted to work on Node 16 runner, we will ship a Node 16 only agent for our security-conscious customers. Various customers have asked us to ship such an agent sooner since their security scans flag the Azure Pipelines agent as using an unsupported or EOL version of Node. Using the Node 16 only agent will also protect you from any vulnerabilities that are found in the older versions of Node.

This agent package will be in addition to our agent which will have all the three Node runners - 6, 10, and 16. If you wish to set up a self-hosted agent pool, you will then have a choice of either using the Node 16 only agent or the one with all the three Node runners. In general, you will choose the Node 16 agent only if you are sure that all of your custom tasks and those that you use from Marketplace will run on the new Node 16 task runner.