---
title: Troubleshoot Azure Resource Manager service connections
ms.custom: devx-track-arm-template, arm2024
description: How to troubleshoot Azure Resource Manager service connections in Azure Pipelines
ms.assetid: B43E78DE-5D73-4303-981F-FB86D46F0CAE
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 09/05/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Troubleshoot Azure Resource Manager service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article presents the common troubleshooting scenarios to help you resolve issues you might encounter when creating an Azure Resource Manager service connection. See [Manage service connections](../library/service-endpoints.md) to learn how to create, edit, and secure service connections.

<a name="what-happens"></a>

## What happens when you create an Azure Resource Manager service connection?

If you don't have a service connection, you can create one as follows:

1. From within your project, select **Project settings**, and then select **Service connections**.

    :::image type="content" source="media/service-connections.png" alt-text="Screenshot showing how to access service connections from project settings":::

1. Select **New service connection** to add a new service connection, and then select **Azure Resource Manager**. Select **Next** when you're done.

    :::image type="content" source="media/arm-service-connection.png" alt-text="Screenshot showing the service connections types.":::

1. Select **Service principal (automatic)**, and then select **Next**.

1. Select **Subscription**, and then select your subscription from the drop-down list. Fill out the form and then select **Save** when you're done.

    :::image type="content" source="media/new-arm-service-connection.png" alt-text="Screenshot showing the new Azure Resource Manager service connection form.":::

When you save your new Azure Resource Manager service connection, Azure DevOps does the following actions:

1. Connects to the Microsoft Entra tenant for to the selected subscription.
1. Creates an application in Microsoft Entra ID on behalf of the user.
1. Assigns the application as a contributor to the selected subscription.
1. Creates an Azure Resource Manager service connection using this application's details.

> [!NOTE]
> To create service connections, get added to the Endpoint Creator group in your project settings: **Project settings** > **Service connections** > **Security**. Contributors are added to this group by default.

<a name="troubleshoot"></a>

## Troubleshooting scenarios

The following issues might occur when you create service connections:

- [Troubleshoot Azure Resource Manager service connections](#troubleshoot-azure-resource-manager-service-connections)
  - [What happens when you create an Azure Resource Manager service connection?](#what-happens)
  - [Troubleshooting scenarios](#troubleshooting-scenarios)
- [Troubleshoot Azure Resource Manager service connections](#troubleshoot-azure-resource-manager-service-connections)
  - [What happens when you create an Azure Resource Manager service connection?](#what-happens-when-you-create-an-azure-resource-manager-service-connection)
  - [Troubleshooting scenarios](#troubleshooting-scenarios)
      - [The user has only guest permission in the directory](#the-user-has-only-guest-permission-in-the-directory)
      - [The user isn't authorized to add applications in the directory](#the-user-isnt-authorized-to-add-applications-in-the-directory)
    - [Failed to obtain an access token or a valid refresh token wasn't found](#failed-to-obtain-an-access-token-or-a-valid-refresh-token-wasnt-found)
    - [Failed to assign Contributor role](#failed-to-assign-contributor-role)
    - [Subscription isn't listed when creating a service connection](#subscription-isnt-listed-when-creating-a-service-connection)
    - [Some subscriptions are missing from the list of subscriptions](#some-subscriptions-are-missing-from-the-list-of-subscriptions)
    - [Service principal's token expired](#service-principals-token-expired)
    - [Failed to obtain the JWT by using the service principal client ID](#failed-to-obtain-the-jwt-by-using-the-service-principal-client-id)
    - [Azure subscription isn't passed from the previous task output](#azure-subscription-isnt-passed-from-the-previous-task-output)
    - [What authentication mechanisms are supported? How do managed identities work?](#what-authentication-mechanisms-are-supported-how-do-managed-identities-work)
  - [Related articles](#related-articles)

* [The user has only guest permission in the directory](#guestonly)
* [The user isn't authorized to add applications in the directory](#notauthtoadd)

<a name="guestonly"></a>

#### The user has only guest permission in the directory

The best approach to resolve this issue, while granting only the minimum permissions to the user, is to increase the Guest user permissions as follows.

1. Sign in to the Azure portal using an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner) or [user account administrator](/azure/active-directory/active-directory-assign-admin-roles-azure-portal#user-administrator-permissions).

1. Select **Microsoft Entra ID** in the left navigation bar.

1. Ensure you're editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and sign in using the appropriate credentials if necessary.

1. Select **Users** from the **Manage** section.

1. Select **User settings**.

1. Select **Manage external collaboration settings** from the **External users** section.

1. Change the **Guest user permissions are limited** option  to **No**.

Alternatively, if you're prepared to give the user administrator-level permissions, you can make the user a member of an Administrator role. Do the following steps:

> [!WARNING]
> Assigning users to the Global Administrator role allows them to read and modify every administrative setting in your Microsoft Entra organization. As a best practice, assign this role to fewer than five people in your organization. 

1. Sign in to the Azure portal using an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner) or [user account administrator](/azure/active-directory/active-directory-assign-admin-roles-azure-portal#user-administrator-permissions).

2. Select **Microsoft Entra ID** from the left navigation pane.

3. Ensure you're editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and sign in using the appropriate credentials if necessary.

4. Select **Users** from the **Manage** section.
   
5. Use the search box to search for the user you want to manage.

6. Select **Directory role** from the **Manage** section, and then change the role. Select **Save** when you're done.

It typically takes 15 to 20 minutes to apply the changes globally. The user then can try recreating the service connection.

<a name="notauthtoadd"></a>

#### The user isn't authorized to add applications in the directory

You must have permissions to add integrated applications in the directory. The directory administrator has permissions to change this setting.

1. Select **Microsoft Entra ID** in the left navigation pane.

1. Ensure you're editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and sign in using the appropriate credentials if necessary.

1. Select **Users**, and then select **User settings**.

1. Under **App registrations**, and then change the **Users can register applications** option to **Yes**.

You can also create the service principal with an existing user who already has the required permissions in Microsoft Entra ID. For more information, see [Create an Azure Resource Manager service connection with an existing service principal](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-with-an-existing-service-principal).

<a name="sessionexpired"></a>

### Failed to obtain an access token or a valid refresh token wasn't found

These errors typically occur when your session is expired. To resolve these issues:

1. Sign out of Azure DevOps.
1. Open an InPrivate or incognito browser window and navigate to [Azure DevOps](https://azure.microsoft.com/services/devops/).
1. Sign in using the appropriate credentials.
1. Select your organization and your project.
1. [Create your service connection](../library/service-endpoints.md).

<a name="contributorrole"></a>

### Failed to assign Contributor role

This error typically occurs when you don't have **Write** permission for the selected Azure subscription.

To resolve this issue, ask the subscription administrator to [assign you the appropriate role](/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal) in Microsoft Entra ID.

<a name="subscription-isnt-listed-service-connection"></a>

### Subscription isn't listed when creating a service connection

A maximum of 50 Azure subscriptions are listed in the various Azure subscription drop-down menus (billing, service connection, etc.). If you're setting up a service connection and you have more than 50 Azure subscriptions, some of your subscriptions aren't listed. In this scenario, complete the following steps:

1. Create a new, native Microsoft Entra user in the Microsoft Entra instance of your Azure subscription. 

1. Set up the Microsoft Entra user so that it has the proper permissions to set up billing or create service connections. For more information, see [Add a user who can set up billing for Azure DevOps](../../organizations/billing/add-backup-billing-managers.md).
 
1. Add the Microsoft Entra user to the Azure DevOps org with a **Stakeholder** access level, and then add it to the **Project Collection Administrators** group (for billing), or ensure that the user has sufficient permissions in the Team Project to create service connections.

1. Sign in to Azure DevOps with the new user credentials, and set up a billing. You only see one Azure subscription in the list.

<a name="missingSubscriptions"></a>

### Some subscriptions are missing from the list of subscriptions

This issue can be fixed by changing the **supported account types** settings and defining who can use your application. To do so, follow the steps:

1. Sign in to the Azure portal.

1. If you have access to multiple tenants, use the **Directory + subscription** filter in the top menu to select the tenant in which you want to register an application.

    :::image type="content" source="media/directory-and-subscriptions.png" alt-text="Screenshot showing the directory and subscriptions icon in Azure portal.":::

1. Select **Microsoft Entra ID** from the left pane.

1. Select **App registrations**.

1. Select your application from the list of registered applications.

1. Under **Authentication**, select **Supported account types**.

1. Under **Supported account types**, _Who can use this application or access this API?_ select **Accounts in any organizational directory**.

    :::image type="content" source="media/supported-account-types.png" alt-text="Screenshot showing the supported account types.":::

1. Select **Save** when you're done.

<a name="autoCreatedSecretExpiration"></a>

### Service principal's token expired

An issue that often arises with service principals that are automatically created is that the service principal's token expires and needs to be renewed. However, if you have an issue with refreshing the token, see [valid refresh token wasn't found](#troubleshoot).

To renew the access token for an automatically created service principal:

1. Go to **Project settings** > **Service connections**, and then select the service connection you want to modify.

1. Select **Edit** in the upper-right corner, and the select **Verify**. 

1. Select **Save**.

Your service principal's token is now renewed for three more months.

   > [!NOTE]
   > This operation is available even if the service principal's token has not expired.

<a name="failedToObtainJWT"></a>

### Failed to obtain the JWT by using the service principal client ID

This issue occurs when you try to verify a service connection that has an expired secret.

To resolve this issue:

1. Go to **Project settings** > **Service connections**, and then select the service connection you want to modify.

1. Select **Edit** in the upper-right corner, and then make any change to your service connection. The easiest and recommended change is to add a description.

1. Select **Save** to save the service connection.

   > [!NOTE]
   > Select **Save**. Don't try to verify the service connection at this step.

1. Exit the service connection edit window, and then refresh the service connections page.

1. Select **Edit** in the upper-right corner, and now select **Verify**.

1. Select **Save** to save your service connection.

### Azure subscription isn't passed from the previous task output

When you set your Azure subscription dynamically for your release pipeline and want to consume the output variable from a preceding task, you might encounter this issue. 

To resolve the issue, ensure that the values are defined within the variables section of your pipeline. You can then pass this variable between your pipeline's tasks.

<a name="authentication-mechanisms"></a>

### What authentication mechanisms are supported? How do managed identities work?

An Azure Resource Manager service connection can connect to an Azure subscription by using a Service Principal Authentication (SPA) or managed identity authentication. Managed identities for Azure resources provide Azure services with an automatically managed identity in Microsoft Entra ID. You can use this identity to authenticate to any service that supports Microsoft Entra authentication without persisting credentials in code or in the service connection.

To learn about managed identities for virtual machines, see [Assigning roles](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm).  

> [!NOTE]
> Managed identities aren't supported in Microsoft-hosted agents. In this scenario, you must [set up a self-hosted agent](../agents/agents.md#install) on an Azure VM and configure a managed identity for that VM.

## Related articles

- [Troubleshoot pipeline runs](../troubleshooting/troubleshooting.md)
- [Review pipeline logs](../troubleshooting/review-logs.md)
- [Define variables](../process/variables.md)
- [Use classic release and artifacts variables](./variables.md)
