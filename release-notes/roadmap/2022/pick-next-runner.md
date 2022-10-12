---
title: Ability to run tasks on next available Node version, if targeted version is not available
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Ability to run tasks on next available Node version, if targeted version is not available
hide_comments: true
---

# Ability to run tasks on next available Node version, if targeted version is not available

If you wish to run non-upgraded tasks from the [Marketplace](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Pipelines&sortBy=Installs) on the new agent, we will give you the flexibility to [separately install old runners](https://review.learn.microsoft.com/azure/devops/release-notes/roadmap/2023/install-old-runner) on self-hosted agents. Another mechanism that we will provide is for you to configure your pipeline to automatically pick the next available (newer) version of the runner. For example, let us say that you have a task from the Marketplace that still targets Node 6. When you run a pipeline with this task on Microsoft-hosted agents, it will fail (after 2023 Q1). But, you can attempt to run the task on Node 16 runner instead. This of course means you are explicitly opting to take the risk of running the task on a newer version of Node without the author of the task signing off on that. However, given that we were able to update a large number of built-in tasks simply by updating the task.json and without updating any of the code gives us the confidence that this is a viable option, at least for some tasks. You should thoroughly test this path before employing it in production.
