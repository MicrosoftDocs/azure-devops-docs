---
title: Download Secure File
description: Download a secure file to a temporary location on the build or release agent
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 2a6ca863-f2ce-4f4d-8bcb-15e64608ec4b
ms.manager: douge
ms.author: alewis
ms.reviewer: dastahel
ms.date: 01/19/2018
---

# Utility: Download Secure File

**VSTS**

![](../utility/_img/secure-file.png) Download a secure file to a temporary location on the build or release agent

Use this task to download a [secure file](../../concepts/library/secure-files.md) from the server during a build or release.

## Arguments

| Argument | Description |
| -------- | ----------- |
| Secure File | Select the secure file to download to a temporary location on the agent. The file will be cleaned up after the build or release. |
