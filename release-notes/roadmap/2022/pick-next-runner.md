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

If you wish to run non-upgraded tasks from the [Marketplace](https://marketplace.visualstudio.com/search?target=AzureDevOps&category=Azure%20Pipelines&sortBy=Installs) on agents without end-of-life Node runners installed, we will give you the flexibility to [separately install old runners](../2023/install-old-runner.md) on self-hosted agents. We will also enable you to configure your pipeline to automatically pick the next available (newer) version of the runner for non-upgraded tasks. For example, a task from the Marketplace that still targets Node 6 will normally fail on agents without the Node 6 runner installed. This features will allow you to run the task with the Node 16 runner instead. This of course means you are explicitly opting to take the risk of running the task on a newer version of Node without the author of the task signing off on that. For many tasks, this should work just fine, since upgrading Node versions often does not require any changes to Task code. You should thoroughly test this path before employing it in production, however.