---
title: Workload identity federation for Docker service connection
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Workload identity federation for Docker service connection
hide_comments: true
---

# Workload identity federation for Docker service connection

Workload identity federation for the Azure service connection is now [generally available](/azure/devops/release-notes/roadmap/2022/secret-free-azurerm-deployments). We will work on supporting Workload identity federation for Azure-based Docker service connections next. This will help you eliminate secrets in the following use cases: (a) Run on a container job using a container from a private registry (b) Use a container from a private registry as a resource in the pipeline (c) Build and publish container images to a private Docker registry.
