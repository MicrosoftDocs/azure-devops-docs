---
title: Understand Source Control
titleSuffix: Azure DevOps
description: Understand what is source control or version control in Azure DevOps, including Git and Team Foundation Version Control (TFVC).
ms.subservice: azure-devops-new-user
ms.assetid: 7E769466-2165-4223-96FA-80A687287EFC
ms.author: chcomley
author: chcomley
ms.topic: overview
ms.date: 04/24/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to use source or version control in Azure DevOps, so I can support collaboration on code and track changes.
---

# What is source control?

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

A source control system (also called a *version control* system) allows developers to collaborate on code and track changes. Source control is an essential tool for multi-developer projects.

Azure DevOps supports two types of source control: Git (distributed) and Team Foundation Version Control (TFVC). TFVC is a centralized, client-server system. In both Git and TFVC, you can check in files and organize files in folders, branches, and repositories. You can manage your repositories, branches, and other code development operations from **Azure Repos**.

:::image type="content" source="media/code-git-hub.png" border="false" alt-text="Screenshot that shows Azure Repos in Azure DevOps with code files stored in Git for version control." lightbox="media/code-git-hub.png":::

## Compare Git and TFVC

With Git, each developer has a copy of the source repository on their development machine. The source repo includes all branch and history information. Each developer works directly with their local repo and changes are shared between repos as a separate step.

Developers can commit each set of changes and perform version control operations, such as history and compare without a network connection. Branches are lightweight. When developers need to switch contexts, they create a private local branch. Developers can quickly switch from one branch to another to pivot among different variations of the code base. Later, developers can merge, publish, or dispose of the branch.

With TFVC, developers have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and are created on the server.

## Get started with Git for source control 

Start sharing your code or get your code by using [source control with Git](code-with-git.md).

> [!NOTE]
> Git in Visual Studio and Azure DevOps is standard Git. You can use Visual Studio with third-party Git services. You can also use third-party Git clients with Azure DevOps Server.

## Related content

* [Azure Repos documentation](../repos/index.yml)
* [Git repositories documentation](../repos/git/index.yml)
