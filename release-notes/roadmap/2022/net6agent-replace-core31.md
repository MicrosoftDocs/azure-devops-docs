---
title: .NET 6 agent to replace .NET Core 3.1 agent
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: .NET 6 agent to replace .NET Core 3.1 agent
hide_comments: true
---

# .NET 6 agent to replace .NET Core 3.1 agent

As .NET Core 3.1 reaches its end-of-life in 2022, we will upgrade the pipeline agent to run on .NET 6. This update will be seamless to most customers. However, it will impact you if you are running the agent on an older operating system that is no longer supported by .NET 6. More specifically, you won't be able to upgrade the agent anymore if you run it on the following operating systems: CentOS 6, Fedora 29-33, Linux Mint 17-18, and Red Hat Enterprise Linux 6.