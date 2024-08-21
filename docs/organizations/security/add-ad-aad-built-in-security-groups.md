---
title: Add users or groups to security groups in Active Directory / Microsoft Entra 
titleSuffix: Azure DevOps
description: Efficiently manage large user groups by adding Active Directory / Microsoft Entra groups to built-in security groups.
ms.subservice: azure-devops-security
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 08/21/2024
--- 

# Add users or groups to built-in security groups in Active Directory and Microsoft Entra

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn how to manage large user groups by adding Active Directory / Microsoft Entra groups to built-in security groups. As outlined in [About security, authentication, and authorization](about-security-identity.md), there are two main types of built-in security groups: project-level and collection-level. Typically, you add users and groups to project-level groups like Contributors and Readers. For users who need to manage specific features and functions, add them or their associated groups to the Build Administrators or Project Administrators groups.

For more information, see [Default permissions and access](permissions-access.md).

The method for adding a user or group to a built-in security group is consistent, regardless of the level at which you add them.

::: moniker range="azure-devops"  

> [!IMPORTANT]  
> - If you're adding a user to Azure DevOps for the first time, see [Add users for Azure DevOps](../accounts/add-organization-users.md?toc=/azure/devops/organizations/security/toc.json). To manage Microsoft Entra group permissions in Azure DevOps, first add the group to a built-in security group. After that, you can manage the group's permissions throughout Azure DevOps.
> - Enabling the **[Limit user visibility and collaboration to specific projects](../../user-guide/manage-organization-collection.md#project-scoped-user-group)** preview feature prevents users in the **Project-Scoped Users** group from accessing projects they aren't added to.

[!INCLUDE [project-scoped-users-warning](../../includes/project-scoped-users-warning.md)]

::: moniker-end

<a name="add-users-team-project"></a>

::: moniker range="azure-devops"

<a name='add-azure-ad-user-or-group-to-a-built-in-security-group'></a>

## Add Microsoft Entra user or group to a built-in security group 

> [!NOTE]   
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).

2. Select **Project settings**, and then **Permissions**.

	![Screenshot shows selections, Project settings and Permissions.](media/permissions/choose-project-settings-permissions.png)

3. Open **Security** and under the **Groups** section and choose one of the following actions:
    - Select **Readers** to add users who require read-only access to the project.
    - Select **Contributors** to add users who need full contribution access or have been granted Stakeholder access.
    - Select **Project Administrators** for users who need to administrate the project.

4. Select **Members**.

    In the following example, we select the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot shows Contributors group, Membership page.](media/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and any additional teams you add to the project are included as members of the Contributors group. Therefore, you can [add a new user as a member of a team](add-users-team-project.md#add-team-members), and the user automatically inherits Contributor permissions.

5. Select :::image type="icon" source="../../media/icons/add-light-icon.png" border="false":::**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter multiple identities, separated by commas. The system automatically searches for matches. Select the matching identity or identities that meet your criteria.

	![Screenshot shows the Add users and group dialog.](media/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, you can't browse for it or check the friendly name. After adding the identity, you can enter the friendly name directly.

#### [Current page](#tab/current-page)

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).

2. Select **Project settings** > **Security**.

	[![Screenshot show selections, Project settings, Security page.](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

3. Open **Security** and under the **Groups** section, choose one of the following actions:
    - To add users who require read-only access to the project, choose **Readers**.
    - To add users who need to contribute fully to the project or who have been granted Stakeholder access, choose **Contributors**.
    - For users who need to administrate the project, choose **Project Administrators**.

4. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](media/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

5. Choose :::image type="icon" source="../../media/icons/add-light-icon.png" border="false":::**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](media/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just enter the friendly name.

::: moniker-end

---


::: moniker range="< azure-devops"

## Add an Active Directory user or group to a built-in security group 

::: moniker-end

::: moniker range="= azure-devops-2019 || azure-devops-2020" 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings**, and then **Security**.

	[![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox)  

3. Open **Security** and under the **Groups** section, choose one of the following actions:
    - To add users who require read-only access to the project, choose **Readers**.
    - To add users who need to contribute fully to the project or who have been granted Stakeholder access, choose **Contributors**.
    - For users who need to administrate the project, choose **Project Administrators**.

4. Next, choose the **Members** tab.

	Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Admin context, Security page, Contributors group, Membership page](media/add-users/add-members-to-contributors-group.png)  

	By default, the default team group and all other teams you add to the project are included as members of the Contributors group. So, you can choose to [add a new user as a member of a team](add-users-team-project.md#add-team-members) instead, and the user would automatically inherit Contributor permissions. 

5. Choose :::image type="icon" source="../../media/icons/add-light-icon.png" border="false":::**Add** to add a user or a user group.

6. Enter the name of the user into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice.

	![Add users and group dialog](media/project-level-permissions-add-a-user.png)  

	> [!NOTE]
	> The first time you add a user or group, 
	> you can't browse to it or check the friendly name.
	> After the identity has been added, you can just enter the friendly name.

::: moniker-end





## Next steps

> [!div class="nextstepaction"]
> [Request an increase in permission levels](request-changes-permissions.md)

## Related articles

- [Get started with permissions, access, and security groups](about-permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)
- [About security, authentication, and authorization](about-security-identity.md)
