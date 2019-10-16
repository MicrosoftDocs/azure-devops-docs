---
title: Invite users to contribute to public project
titleSuffix: Azure DevOps Services Public Project  
description: Invite others to contribute to your public project  
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid: 
ms.reviewer:
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: quickstart
ms.date: 10/16/2019
monikerRange: 'azure-devops'
---

<a id="invite-others" />

# Quickstart: Invite users to your public project

[!INCLUDE [temp](_shared/version-public-projects.md)]  

In this quickstart, learn how to enable public users to contribute to your project.

> [!IMPORTANT]
> Before you add a member, review the notes provided in [private-to-public migration checklist](migration-checklist.md) as well as
> the [additional cross-project resources](../accounts/resources-granted-to-project-members.md) this grants.

## Prerequisites

You must have [Project Collection Administrator or organization Owner permissions](../../organizations/security/set-project-collection-level-permissions.md?toc=/azure/devops/organizations/accounts/toc.json&bc=/azure/devops/organizations/accounts/breadcrumb/toc.json).


## Add users

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Users**, and then select **Add users**.

   [:::image type="content" source="../../_shared/_img/add-new-users.png" alt-text="Select the Users tab, and then select Add users":::]

4. Complete the form based on the following guidance, and then select **Add**.

	- **Users**: Enter the email address for the user account. You can add several email addresses by separating them with a semicolon (;). Note that for Microsoft accounts (MSAs), the email addresses display in red.
	- **Access level**: You can add up to 5 users (total including your own user account) with *Basic* access. Otherwise, you can add an unlimited number of users with *Stakeholder* access. In public projects, both the Stakeholder and the Basic access level grant full access to **Code**, **Work**, and **Build and Release**, but Stakeholders only get partial access to **Test** and **Dashboards**.  To learn more, see [Default roles & access for public projects](default-roles-access-public.md).
	- **Add to projects**: Select each public project that you want to add the user to.  
	- **Azure DevOps Groups**: Leave this entry at Project Contributors, the default security group for people who contribute to your project. To learn more, see [Default permissions and access assignments](../security/permissions-access.md).
	- **Send email invites**: Check the box next to "Send email invites" to invite your new users via their email addresses.

    :::image type="content" source="_img/invite-users/add-new-users-dialog.png" alt-text="Complete the form and the select Add":::

5. Advise the external user to locate the email that they received from Azure DevOps and select the URL link. This final step adds the user to your project.

>[!Note]
>If you need to resend the invitation email, go to **Users**, select the user, and select **Resend invite**.

<!---
## Add members to your public project from your project page 

 Are admins able to add new users from this page, or only users who have been previously added to the organization?  

1. Add members from your project page.   
	> [!div class="mx-imgBorder"]  
	> ![Add members](_img/create-public-project/add-members.png)

1. Fill out the form. 
	> [!div class="mx-imgBorder"]  
	> ![Add members](_img/create-public-project/add-member-form.png)
-->

## Next steps

> [!div class="nextstepaction"]
> [Clone an existing Git repo](clone-git-repo-public.md)

