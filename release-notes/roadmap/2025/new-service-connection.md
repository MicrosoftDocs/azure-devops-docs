---
title: New service connection type for pipelines to authenticate with Azure DevOps
author: gloridelmorales
ms.author: glmorale
ms.date: 01/20/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: New service connection type for pipelines to authenticate with Azure DevOps
hide_comments: true
---

# New service connection type for pipelines to authenticate with Azure DevOps

Tasks in a pipeline access resources in Azure DevOps using a [job access token](/azure/devops/pipelines/process/access-tokens?view=azure-devops&tabs=yaml), available via the built-in variable [System.AccessToken](/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml#systemaccesstoken). For instance, a “checkout” task uses this token to authenticate to the repository. Similarly, a PowerShell script can use this token to access Azure DevOps REST APIs. However, the permissions of this token are based on the Project Build Service identity, meaning all job access tokens in a project have identical permissions. This grants excessive access across all pipelines within the project. 

To address this, a new service connection type called “Azure DevOps Service Connection” is being introduced. It uses an Azure service principal that can be added as a user in Azure DevOps with specific permissions. This allows you to authenticate to resources from a pipeline task using this service connection and restrict access to specific pipelines. 

We will first introduce the new connection type and a few tasks that work with it. We will gradually expand the list of tasks that can use the connection type over time.