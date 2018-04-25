---
title: Source control 
titleSuffix: VSTS & TFS 
description: What is source control or version control in Visual Studio Team Services & Team Foundation Server  
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 7E769466-2165-4223-96FA-80A687287EFC
ms.manager: douge
ms.author: kaelli
ms.topic: conceptual
ms.date: 08/15/2017
monikerRange: '>= tfs-2015'
---


# Source control

**VSTS| TFS 2018 | TFS 2017 | TFS 2015**

Source control, also referred to as version control, systems allow developers to collaborate on code and track changes made to the code base. Source control is an essential tool for multi-developer projects.  

Our systems support two types of source control: Git (distributed) or Team Foundation Version Control (TFVC), a centralized, client-server system. Both systems enable you to check-in files and organize files within folders, branches, and repositories. 

You manage your repos, branches, and other code development operations from the **Code** hub.   


<img src="_img/services/code-git-hub.png" alt="Code hub, Git, files page" style="border: 2px solid #C3C3C3;" />


With Git, each developer has a copy on their dev machine of the source repository including all branch and history information. Each developer works directly with his or her own local repository, and changes are shared between repositories as a separate step.

Developers can commit each set of changes and perform version control operations such as history and compare without a network connection. Branches are lightweight. When developers need to switch contexts, they create a private local branch. Developers can quickly switch from one branch to another to pivot among different variations of the codebase. Later, they can merge, publish, or dispose of the branch.

>[!NOTE]
>Git in Visual Studio, VSTS and TFS is standard Git. You can use Visual Studio with third-party Git services, and you can also use third-party Git clients with TFS.

With TFVC, developers have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server. 

 
## Try this next  

Start sharing your code or getting your code under source control.  

> [!div class="nextstepaction"]
> [Code with Git](code-with-git.md)
