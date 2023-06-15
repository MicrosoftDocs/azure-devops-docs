---
title: Share your code in TFVC using Eclipse
titleSuffix: Azure Repos
description: Share code in TFVC using Eclipse
ms.assetid: 181CB50F-44D3-4BA4-8E89-ADB9CB87DEB6
ms.service: azure-devops-repos
ms.topic: quickstart
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Share your code in TFVC using Eclipse

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 


Share your code with your team with Azure DevOps Services and Eclipse.

[!INCLUDE [include](includes/connect-eclipse-to-vso.md)]

If your project uses TFVC in your Azure DevOps organization, read on. However, if your project uses Git in your Azure DevOps organization,then read [Share your code in Git using Eclipse](../../repos/git/share-your-code-in-git-eclipse.md)

<a name="tfvc"></a>
## Share using TFVC

1. If you haven't yet, [Connect to Azure DevOps Services using Eclipse](../../organizations/projects/connect-to-projects.md).

2. In Package Explorer, right-click the project and choose Team, Share Project.

   ![In the Package Explorer, the project's context menu, Team, Share Project](./media/share-project.png)

3. Make sure you share it to Team Foundation Server.

   ![Share Project dialog box with tfvc selected](./media/share-your-code-in-tfvc-eclipse/share-project-tfvc.png)

4. Select the server and project.

   ![Select Project](../../media/add-existing-team-project.png)

5. Check in the files.

   ![Check in pending changes](./media/share-your-code-in-tfvc-eclipse/checkin-changes-tfvc.png)

Your code is in TFVC, so now your teammates can contribute.

## Next steps

> [!div class="nextstepaction"]
> [Build your Eclipse projects](../../pipelines/ecosystems/java.md) 