---
title: Share your code in TFVC using Eclipse | VSTS
description: Share code in TFVC using Eclipse
ms.assetid: 181CB50F-44D3-4BA4-8E89-ADB9CB87DEB6
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Share your code in TFVC using Eclipse

#### VSTS | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Share your code with your team with VSTS and Eclipse.

[!INCLUDE [include](_shared/connect-eclipse-to-vso.md)]

If your team project uses TFVC in your VSTS account, read on. However, if your team project uses Git in your VSTS account,then read [Share your code in Git using Eclipse](../git/share-your-code-in-git-eclipse.md)

<a name="tfvc"></a>
## Share using TFVC

1. If you haven't yet, [Connect to VSTS using Eclipse](../user-guide/connect-team-projects.md).

2. In Package Explorer, right-click the project and choose Team, Share Project.

 ![In the Package Explorer, the project's context menu, Team, Share Project](./_shared/_img/share-project.png)

3. Make sure you share it to Team Foundation Server.

 ![Share Project dialog box with tfvc selected](./_img/share-your-code-in-tfvc-eclipse/share-project-tfvc.png)

4. Select the server and team project.

 ![Select Team Project](../_shared/_img/add-existing-team-project.png)

5. Check in the files.

 ![Check in pending changes](./_img/share-your-code-in-tfvc-eclipse/checkin-changes-tfvc.png)

Your code is in TFVC, so now your teammates can contribute.

## Next steps

> [!div class="nextstepaction"]
> [Build your Eclipse projects](../pipelines/apps/java/build-maven.md)


