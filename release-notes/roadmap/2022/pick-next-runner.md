---
title: Install old Node runners
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Install old Node runners
hide_comments: true
---

# Install old Node runners

If you wish to run non-upgraded tasks from Marketplace on the new agent, we will give you the flexibility to [separately install old runners](install-old-runner.md) on self-hosted agents. Another mechanism that we will provide is for you to configure your pipeline to automatically pick the next available (newer) version of the runner. For example, let us say that you have a task from the Marketplace that still targets Node 6. When you run a pipeline with this task on Microsoft-hosted agents, it will fail (after 2023 Q1). But, you can attempt to run the task on Node 16 runner instead. This ofcourse means you are explicitly opting to take the risk of running the task on a newer version of Node without the author of the task signing off on that. However, given that we were able to update a large number of built-in tasks simply by updating the task.json and without updating any of the code gives us the confidence that this is a viable option, at least for some of the tasks. You should thoroughly test this path before employing it in production.
