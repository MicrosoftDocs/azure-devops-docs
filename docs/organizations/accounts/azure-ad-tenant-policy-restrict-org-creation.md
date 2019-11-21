---
title: Restrict new organization creation, Azure Active Directory tenant policy
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to restrict users from creating new organizations via Azure Active Directory
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.date: 11/15/2019
monikerRange: 'azure-devops'
---

# Restrict organization creation via Azure AD tenant policy

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

In this article, learn how to turn on the Azure Active Directory (Azure AD) tenant policy. This policy restricts users from creating an organization in Azure DevOps and is turned off, by default.

## Prerequisites

You must be an Azure DevOps Administrator in Azure AD to manage this policy. 

For more information about the new built-in Azure AD roles, see [Administrator role permissions in Azure Active Directory](https://docs.microsoft.com/azure/active-directory/users-groups-roles/directory-assign-admin-roles).

If you don't see the policy section in Azure DevOps, you aren't an administrator. To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Azure Active Directory > Roles and administrators**. In case that you aren't an Azure DevOps administrator, talk to your administrator.

![Check Azure AD roles and administrators](_img/azure-ad-tenant-policy/azure-ad-roles-and-administrators.png)

You can also check your role using the Azure AD PowerShell module.
![Azure AD PowerShell to enable policy](_img/azure-ad-tenant-policy/azure-ad-powershell.png)

## Turn on the policy

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)
3. Select Azure Active Directory, and then switch the toggle to turn on the policy, restricting organization creation.
   
   ![Turn on Azure AD policy](_img/azure-ad-tenant-policy/azure-ad-turn-policy-on.png)

## Optional

### Create allow list

With the policy turned on, all users are restricted from creating new organizations. Grant an exception to users or groups with an allow list. Users on the allow list can create new organizations, but they can't manage the policy.

1. Select **Add AAD user or group**.

![Option, Create allow list and add Azure AD users or groups](_img/azure-ad-tenant-policy/add-azure-ad-user-group.png)
 
### Create error message

When administrators, who aren't on the allow list, try to create an organization they get an error similar to the following example. 
 
![Error message example](_img/azure-ad-tenant-policy/error-message.png)

Customize this error message in the policy settings in Azure DevOps.

1. Select **Edit display message**.

   ![Select Edit display message to customize](_img/azure-ad-tenant-policy/edit-display-message.png)
2. Enter your customized message, and then choose **Save**.
   
   ![Customize error message dialog](_img/azure-ad-tenant-policy/display-error-message-dialog.png)

The error message is customized.

![Customized error message](_img/azure-ad-tenant-policy/error-message-example-ui.png)
 
> [!NOTE]
> Administrators, who aren't on the allow list, can't connect their organization to the Azure AD tenant where the policy is turned on.
>
> ![Connection failed error](_img/azure-ad-tenant-policy/connection-failed-notification.png)

## Related articles

* [Connect your organization to Azure Active Directory](connect-organization-to-azure-ad.md)
* [Access with Azure AD](access-with-azure-ad.md)
