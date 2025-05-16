---
title: PAT-less authentication from pipeline tasks to Azure DevOps APIs
author: gloridelmorales
ms.author: glmorale
ms.date: 04/21/2025
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: PAT-less authentication from pipeline tasks to Azure DevOps APIs
hide_comments: true
---

# PAT-less authentication from pipeline tasks to Azure DevOps APIs

Tasks in a pipeline use either a [job access token](/azure/devops/pipelines/process/access-tokens?view=azure-devops&tabs=yaml), available via the built-in variable [System.AccessToken](/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml#systemaccesstoken), or a PAT to access Azure DevOps resources. For instance, a “checkout” task uses this token to authenticate to the repository. Similarly, a PowerShell script can use this token to access Azure DevOps REST APIs. However, the permissions of this token are based on the Project Build Service identity, meaning all job access tokens in a project have identical permissions. This grants excessive access across all pipelines within the project.

Using PATs to access Azure DevOps resources is common, particularly when a task needs to access those resources across organization boundaries. For instance, a Nuget Authenticate task uses a PAT token to authenticate to a feed in another organization. PATs are an anti-pattern for security as they tend to be created with broad permissions and are held for a long time thereby increasing the risk of exfiltration.

To improve the security in these scenarios, a new service connection type called “Azure DevOps Service Connection” is being introduced. It uses an Azure service principal that can be added as a user in Azure DevOps with specific permissions. This allows you to authenticate to resources from a pipeline task using this service connection and restrict access to specific pipelines.
We will first introduce the new connection type and a few tasks that work with it. We will gradually expand the list of tasks that can use the connection type over time.