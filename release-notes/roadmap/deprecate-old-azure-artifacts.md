---
title: Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks
hide_comments: true
---

# Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks

We get a lot of support requests and feedback from our current Azure Artifacts tasks in Azure Pipelines (NuGet, npm, Maven, etc.). Having these large, bulky tasks with built-in versions of command-line tools can create a lot of problems:
1. When something fails, it's hard to know if it's the command-line tools, the authentication, the restore/publish, etc.
2. It's hard to keep the tasks updated with the latest and greatest releases of command line tools, so we miss out on new functionality (like skipping duplicates in NuGet/Maven)
The solution we landed on was to create auth-only tasks that users can set up at the beginning of their pipelines. After successfully authenticated, users can use custom scripts to publish/restore packages. 

We now have the following lightweight, auth-only tasks in GA that we recommend customers to use. The plan is to deprecate the old unreliable tasks in the future. 
1. Maven Authenticate 
2. NuGet Authenticate
3. Python Pip Authenticate
4. Python Twine Upload Authenticate