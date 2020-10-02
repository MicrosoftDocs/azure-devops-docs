---
title: Troubleshoot Azure Resource Manager service connections
ms.custom: seodec18
description: DevOps CI CD - Troubleshoot Azure Resource Manager service connections in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: B43E78DE-5D73-4303-981F-FB86D46F0CAE
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 09/09/2020
monikerRange: '>= tfs-2015'
---

# Troubleshoot Azure Resource Manager service connections

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../includes/concept-rename-note.md)]

::: moniker-end

This topic will help you resolve issues you may encounter when creating a connection to Microsoft Azure using an Azure Resource Manager [ARM service connection](../library/service-endpoints.md) for your Azure DevOps CI/CD processes.

<a name="whathappens"></a>

## What happens when you create a Resource Manager service connection?

1. In Azure DevOps, open the Service connections page from the [project settings page](/azure/devops/project/navigation/go-to-service-page#open-project-settings). In TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Choose **+ New service connection** and select the type of service connection you need.

1. In the **Add Azure Resource Manager service connection** dialog, provide a connection name, and select a subscription from drop-down list of your subscriptions.  

> [!div class="mx-imgBorder"]
> ![The Add Azure Resource Manager service connection dialog](media/azure-rm-endpoint/endpoint-01.png)

When you select **OK**, the system:

1. Connects to the Azure Active Directory (Azure AD) tenant for to the selected subscription.
1. Creates an application in Azure AD on behalf of the user.
1. After the application has been successfully created, assigns the application as a contributor to the selected subscription.
1. Creates an Azure Resource Manager service connection using this application's details.

<a name="troubleshoot"></a>

## How to troubleshoot errors that may occur while creating a connection?

Errors that may occur when the system attempts to create the service connection include:

* [Insufficient privileges to complete the operation](#privileges)
* [Failed to obtain an access token](#sessionexpired)
* [A valid refresh token was not found](#sessionexpired)
* [Failed to assign contributor role](#contributorrole)
* [Some subscriptions are missing from the subscription drop down menu](#missingSubscriptions)

<a name="privileges"></a>

### Insufficient privileges to complete the operation

This typically occurs when the system attempts to create an
application in Azure AD on your behalf.

This is a permission issue that may be due to the following causes:

* [The user has only guest permission in the directory](#guestonly)
* [The user is not authorized to add applications in the directory](#notauthtoadd)

<a name="guestonly"></a>

#### The user has only guest permission in the directory

The best approach to resolve this issue, while granting only the minimum additional permissions to the user, is to increase the Guest user permissions as follows.

1. Sign in to the Azure portal using an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner), [global administrator](/azure/active-directory/active-directory-assign-admin-roles-azure-portal#global-administrator--company-administrator), or [user account administrator](/azure/active-directory/active-directory-assign-admin-roles-azure-portal#user-administrator-permissions).

1. Select **Azure Active Directory** in the left navigation bar.

1. Ensure you are editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and log in using the appropriate credentials if required.

1. In the **MANAGE** section select **Users**.

1. Select **User settings**.

1. In the **External users** section, select **Manage external collaboration settings**.

1. The **External collaboration settings** blade opens.

1. Change **Guest user permissions are limited** to **No**.

Alternatively, if you are prepared to give the user additional permissions (administrator-level), you can make the user a member of the **Global administrator** role. To do so follow the steps below:

> [!WARNING]
> Users who are assigned to the Global administrator role can read and modify every administrative setting in your Azure AD organization. As a best practice, we recommend that you assign this role to fewer than five people in your organization. 

1. Sign in to the Azure portal using an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner), [global administrator](/azure/active-directory/active-directory-assign-admin-roles-azure-portal#global-administrator--company-administrator), or [user account administrator](/azure/active-directory/active-directory-assign-admin-roles-azure-portal#user-administrator-permissions).

1. Select **Azure Active Directory** in the left navigation bar.

1. Ensure you are editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and log in using the appropriate credentials if required.

1. In the **MANAGE** section select **Users**.
   
1. Use the search box to filter the list and then select the user you want to manage.

1. In the **MANAGE** section select **Directory role** and change the role to **Global administrator**.

1. Save the change.

It typically takes 15 to 20 minutes to apply the changes globally. After this period has elapsed, the user can retry creating the service connection.

<a name="notauthtoadd"></a>

#### The user is not authorized to add applications in the directory

You must have permissions to add integrated applications in the directory. The directory administrator has permissions to change this setting.

1. Select **Azure Active Directory** in the left navigation bar.

1. Ensure you are editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and log in using the appropriate credentials if required.

1. In the **MANAGE** section select **Users**.

1. Select **User settings**.

1. In the **App registrations** section, change **Users can register applications** to **Yes**.

#### Create the service principal manually with the user already having required permissions in Azure Active Directory

You can also create the service principal with an existing user who already has the required permissions in Azure Active Directory. For more information, see [Create an Azure Resource Manager service connection with an existing service principal](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-with-an-existing-service-principal).

<a name="sessionexpired"></a>

### Failed to obtain an access token or a valid refresh token was not found

These errors typically occur when your session has expired.

To resolve these issues:

1. Sign out of Azure Pipelines or TFS.
1. Open an InPrivate or incognito browser window and navigate to [https://visualstudio.microsoft.com/team-services/](https://visualstudio.microsoft.com/team-services/).
1. If you are prompted to sign out, do so.
1. Sign in using the appropriate credentials.
1. Choose the organization you want to use from the list.
1. Select the project you want to add the service connection to.
1. Create the service connection you need by opening the **Settings** page. Then, select **Services** > **New service connection** > **Azure Resource Manager**.

<a name="contributorrole"></a>

### Failed to assign Contributor role

This error typically occurs when you do not have **Write** permission for the selected Azure subscription when the system attempts to assign the **Contributor** role.

To resolve this issue, ask the subscription administrator to [assign you the appropriate role](/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal).

<a name="missingSubscriptions"></a>

### Some subscriptions are missing from the list of subscriptions

To fix this issue you will need to modify the supported account types and who can use your application. To do so, follow the steps below:

1. Sign in to the Azure portal.

1. If you have access to multiple tenants, use the **Directory + subscription** filter in the top menu to select the tenant in which you want to register an application.

1. Search for and select **Azure Active Directory**.

1. Under **Manage**, select **App registrations**.

1. Select you application from the list of registered applications.

1. Under **Essentials**, select **Supported account types**.

1. Under **Supported account types**, _Who can use this application or access this API?_ select **Accounts in any organizational directory**.

1. Select **Save**.

## What authentication mechanisms are supported? How do Managed Identities work?

Azure Resource Manager service connection can connect to a Microsoft Azure subscription using Service Principal Authentication (SPA) or Managed Identity Authentication.
Managed identities for Azure resources provides Azure services with an automatically managed identity in Azure Active Directory. You can use this identity to authenticate to any service that supports Azure AD authentication, without persisting credentials in code or in the service connection.
See [Assigning roles](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm) to learn about managed identities for virtual machines.  

> [!NOTE]
> Managed identities are not supported in Microsoft Hosted Agents. You will have to [set-up a self hosted agent](/azure/devops/pipelines/agents/agents#install) on an Azure VM and configure managed identity for the virtual machine.

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
