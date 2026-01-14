---
title: Workload identity federation using Entra-issued tokens
author: gloridelmorales
ms.author: glmorale
ms.date: 01/20/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Workload identity federation using Entra-issued tokens
hide_comments: true
---

# Workload identity federation using Entra-issued tokens

[Workload identity federation (WIF)](https://devblogs.microsoft.com/devops/workload-identity-federation-for-azure-deployments-is-now-generally-available/) enables deployment from Azure Pipelines to Azure without using secrets. The current implementation of WIF relies on an ID token issued by Azure DevOps, which is then exchanged for an Entra-issued access token. In the new revision, the ID token is also issued by Entra instead of Azure DevOps. This change will enhance security by leveraging all the mechanisms available in Entra to protect the ID tokens. This feature has rolled out, all newly created service connections use Entra-issued ID tokens. 
