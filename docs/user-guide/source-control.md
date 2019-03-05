---
title: Understand source control
titleSuffix: Azure DevOps
ms.custom: seodec18
description: What is source control or version control in Azure DevOps Services & Team Foundation Server?  
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 7E769466-2165-4223-96FA-80A687287EFC
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/07/2018
monikerRange: '>= tfs-2013'
---

# What is source control?

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

A source control system, also called a *version control* system, allows developers to collaborate on code and track changes. Source control is an essential tool for multi-developer projects.  

Our systems support two types of source control: Git (distributed) and Team Foundation Version Control (TFVC). TFVC is a centralized, client-server system. In both Git and TFVC, you can check in files and organize files in folders, branches, and repositories.

Manage your repos, branches, and other code development operations from **Azure Repos**.

![Repos, code GitHub](_img/code-git-hub.png)

With Git, each developer has a copy of the source repository, including all branch and history information, on their dev machine. Each developer works directly with their own local repository. Changes are shared between repositories as a separate step.

Developers can commit each set of changes and perform version control operations, such as history and compare without a network connection. Branches are lightweight. When developers need to switch contexts, they create a private local branch. Developers can quickly switch from one branch to another to pivot among different variations of the code base. Later, developers can merge, publish, or dispose of the branch.

> [!NOTE]
> Git in Visual Studio and Azure DevOps is standard Git. You can use Visual Studio with third-party Git services. You can also use third-party Git clients with TFS.

With TFVC, developers have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and are created on the server.

## Try next  

Start sharing your code or get your code by using source control.  

> [!div class="nextstepaction"]
> [Code with Git](code-with-git.md)

## Related articles

* [Azure Repos documentation](../repos/index.md)
* [Git repositories documentation](../repos/git/index.md)
