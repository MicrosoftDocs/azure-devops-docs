---
title: Set TFVC repository permissions
titleSuffix: Azure Repos
description: Follow steps to manage access to a Team Foundation Version Control (TFVC) repository feature or function.
ms.assetid:  
ms.service: azure-devops-repos
ms.topic: quickstart
ms.author: vijayma
author: vijayma
monikerRange: '<= azure-devops'
ms.date: 11/30/2022
ms.subservice: azure-devops-repos-git
---


# Set TFVC repository permissions 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can manage access to a Team Foundation Version Control (TFVC) repository to lock down who can contribute to your source code. There's only one TFVC repository per project. For guidance on who to give greater permission levels, see [Manage access using permissions](../../organizations/security/restrict-access.md).

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Project access** | Member of the Azure DevOps project where the TFVC repository is located. |
| **Permissions** | Member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md) or **Manage permissions** set to **Allow** for the TFVC repository.|
|**Access levels**| To contribute to source code: At least **Basic** access. **Stakeholder** access for private projects provides no access to source code. **Stakeholder** access for public projects provides the same access as **Contributors** and **Basic**. For more information, see [About access levels](../../organizations/security/access-levels.md).|

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
| **Project access** | Member of the Azure DevOps project where the TFVC repository is located. |
| **Permissions** | Member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md) or **Manage permissions** set to **Allow** for the TFVC repository.|
|**Access levels**| To contribute to source code: At least **Basic** access. **Stakeholder** access for private projects provides no access to source code. For more information, see [About access levels](../../organizations/security/access-levels.md).|

::: moniker-end 

## Default repository permissions  

By default, members of the project **Contributors** group have permissions to contribute to a repository. For a description of each security group and permission level, see [Security groups, service accounts, and permissions in Azure DevOps](../../organizations/security/permissions.md).

[!INCLUDE [temp](../../organizations/security/includes/code-tfvc.md)]

<a id="tfvc-repository">  </a>

## Set TFVC repository security permissions

To set permissions for a custom security group, ensure that the group is already defined. For more information, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) for more information.
::: moniker range="azure-devops"

1. In the Azure DevOps web portal for the project where you want to set permissions, select **Project settings**. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Select **Repositories**.

3. Select the TFVC repository labeled with the name of the project.

   ![Image that shows choosing a TFVC repository.](media/tfvc-permissions/open-tfvc-repositories-security-s185.png)

4. Choose the user or security group you want to change permissions for. 

   To set permissions for a specific user or group, enter their name in the identity box and select their identity. 

   ![Image that shows adding a user or group.](media/tfvc-permissions/add-user-group.png)  

5. Make the changes to the permission set. 

   ![Image that shows setting the permissions for a user or group.](media/tfvc-permissions/set-tfvc-permissions.png)  

6. When you're done, navigate away from the page. The permission changes are automatically saved for the selected user or group.

   If you add a user or group and don't change any of their permissions, the user or group you added no longer appears after you refresh the permissions page.

   [!INCLUDE [temp](../../includes/ability-to-find-user-once-added.md)]

::: moniker-end    


::: moniker range=">= azure-devops-2019 < azure-devops"

To set the permissions for the TFVC repository for a project:

1. In the Azure DevOps web portal for the project where you want to set permissions, select **Project Settings**.

1. Select **Repositories**.

1. Select the TFVC repository.

1. Choose the security group whose permissions you want to manage, in this case the **Contributors** group. 

1. Select the permission for **Manage branch**.

   [!INCLUDE [temp](../../includes/lightbox-image.md)] 

   [![Screenshot that shows Project security settings for a TFVC repository.](media/tfvc-permissions/open-tfvc-repository-security-vert.png)](media/tfvc-permissions/open-tfvc-repository-security-vert.png#lightbox) 

   [!INCLUDE [temp](../../includes/ability-to-find-user-once-added.md)]

   If you add a user or group and don't change any of their permissions, the user or group you added no longer appears after you refresh the permissions page.

1. Save your changes.  

::: moniker-end    



## Related articles

- [Manage access using permissions](../../organizations/security/restrict-access.md)
- [Default permissions and access](../../organizations/security/permissions-access.md) 
- [Permissions and groups reference](../../organizations/security/permissions.md)  
- [Permission command](permission-command.md)
- [Security REST API commands](/rest/api/azure/devops/security)

