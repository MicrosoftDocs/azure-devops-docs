---
title: Troubleshoot Azure Resource Manager service connections
ms.custom: devx-track-arm-template, arm2024
description: How to troubleshoot Azure Resource Manager service connections in Azure Pipelines
ms.assetid: B43E78DE-5D73-4303-981F-FB86D46F0CAE
ms.topic: troubleshooting
ms.author: jukullam
author: juliakm
ms.date: 11/05/2024
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Troubleshoot Azure Resource Manager service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article presents the common troubleshooting scenarios to help you resolve issues you might encounter when creating an Azure Resource Manager service connection. See [Manage service connections](../library/service-endpoints.md) to learn how to create, edit, and secure service connections.


## What happens when you create an Azure Resource Manager service connection

If you don't have a service connection, you can create one as follows:

1. From within your project, select **Project settings**, and then select **Service connections**.

    :::image type="content" source="media/service-connections.png" alt-text="Screenshot showing how to access service connections from project settings":::

1. Select **New service connection** to add a new service connection, and then select **Azure Resource Manager**. Select **Next** when you're done.

    :::image type="content" source="media/arm-service-connection.png" alt-text="Screenshot showing the service connections types.":::

1. Select **App registration (automatic)** as the Identity type and **Workload identity federation** as the credential.

1. Select **Subscription**, and then select your subscription from the drop-down list. Fill out the rest of the form and then select **Save** when you're done.

When you save your new Azure Resource Manager service connection, Azure DevOps does the following actions:

1. Connects to the Microsoft Entra tenant for to the selected subscription.
1. Creates an application in Microsoft Entra ID on behalf of the user.
1. Assigns the application as a contributor to the selected subscription.
1. Creates an Azure Resource Manager service connection using this application's details.

> [!NOTE]
> To create service connections, you need to be assigned the Creator or Administrator role for the Endpoint Creator group in your project settings: **Project settings** > **Service connections** > **More Actions** > **Security**. Project Contributors are added to this group by default.

## Troubleshooting scenarios

The following issues might occur when you create service connections:

- [The user has only guest permission in the directory](#the-user-has-only-guest-permission-in-the-directory)
- [The user isn't authorized to add applications in the directory](#the-user-isnt-authorized-to-add-applications-in-the-directory)
- [Failed to obtain an access token or a valid refresh token wasn't found](#failed-to-obtain-an-access-token-or-a-valid-refresh-token-wasnt-found)
- [Failed to assign Contributor role](#failed-to-assign-contributor-role)
- [Subscription isn't listed when creating a service connection](#subscription-isnt-listed-when-creating-a-service-connection)
- [Some subscriptions are missing from the list of subscriptions](#some-subscriptions-are-missing-from-the-list-of-subscriptions)
- [Service principal's token expired](#service-principals-token-expired)
- [Failed to obtain the JSON web token (JWT) by using the service principal client ID](#failed-to-obtain-the-jwt-by-using-the-service-principal-client-id)
- [Azure subscription isn't passed from the previous task output](#azure-subscription-isnt-passed-from-the-previous-task-output)
- [What authentication mechanisms are supported? How do managed identities work?](#what-authentication-mechanisms-are-supported-how-do-managed-identities-work)

### The user has only guest permission in the directory

1. Sign in to the Azure portal using an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner) or [user account administrator](/azure/role-based-access-control/built-in-roles#user-access-administrator)

1. Select **Microsoft Entra ID** in the left navigation bar.

1. Ensure you're editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and sign in using the appropriate credentials if necessary.

1. Select **Users** from the **Manage** section.

1. Select **User settings**.

1. Select **Manage external collaboration settings** from the **External users** section.

1. Change the **Guest user permissions are limited** option  to **No**.

Alternatively, if you're prepared to give the user administrator-level permissions, you can make the user a member of an Administrator role. Do the following steps:

> [!WARNING]
> Assigning users to the Global Administrator role allows them to read and modify every administrative setting in your Microsoft Entra organization. As a best practice, assign this role to fewer than five people in your organization. 

1. Sign in to the Azure portal using an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner) or [user account administrator](/azure/role-based-access-control/built-in-roles#user-access-administrator).

1. Select **Microsoft Entra ID** from the left navigation pane.

1. Ensure you're editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and sign in using the appropriate credentials if necessary.

1. Select **Users** from the **Manage** section.
   
1. Use the search box to search for the user you want to manage.

1. Select **Directory role** from the **Manage** section, and then change the role. Select **Save** when you're done.

It typically takes 15 to 20 minutes to apply the changes globally. The user then can try recreating the service connection.


### The user isn't authorized to add applications in the directory

You must have permissions to add integrated applications in the directory. The directory administrator has permissions to change this setting.

1. Select **Microsoft Entra ID** in the left navigation pane.

1. Ensure you're editing the appropriate directory corresponding to the user subscription. If not, select **Switch directory** and sign in using the appropriate credentials if necessary.

1. Select **Users**, and then select **User settings**.

1. Under **App registrations**, and then change the **Users can register applications** option to **Yes**.

::: moniker range="<= azure-devops-2022"

You can also create the service principal with an existing user who already has the required permissions in Microsoft Entra ID. For more information, see [Create an Azure Resource Manager service connection with an existing service principal](../library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-an-existing-service-principal).

::: moniker-end

### Failed to obtain an access token or a valid refresh token wasn't found

These errors typically occur when your session is expired. To resolve these issues:

1. Sign out of Azure DevOps.
1. Open an InPrivate or incognito browser window and navigate to [Azure DevOps](https://azure.microsoft.com/services/devops/).
1. Sign in using the appropriate credentials.
1. Select your organization and your project.
1. [Create your service connection](../library/service-endpoints.md).

### Error: You don't appear to have an active Azure subscription when attempting to edit or create a new service connection

This error typically occur when you are part of multiple Entra ID.
Follow the below steps to resolve to verify and resolve the issue.

1. Navigate to [VS profile](https://app.vsaex.visualstudio.com/).

2. Check whether you have many tenants.

3. Select each tenant, and then reauthenticate.

4. Try to create a service connection, and then check whether the subscription loads.

<a name="contributorrole"></a>

### Failed to assign Contributor role

This error typically occurs when you don't have **Write** permission for the selected Azure subscription.

To resolve this issue, ask the subscription administrator to [assign you the appropriate role](/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal) in Microsoft Entra ID.

### Subscription isn't listed when creating a service connection

- **Maximum of 50 Azure subscriptions listed in the various Azure subscription drop-down menus** (billing, service connection, and so on): If you're setting up a service connection and you have more than 50 Azure subscriptions, some of your subscriptions aren't listed. In this scenario, complete the following steps:

  1. Create a new, native Microsoft Entra user in the Microsoft Entra instance of your Azure subscription. 
  1. Set up the Microsoft Entra user so that it has the proper permissions to set up billing or create service connections. For more information, see [Add a user who can set up billing for Azure DevOps](../../organizations/billing/set-up-billing-for-your-organization-vs.md#give-a-user-access-to-manage-billing). 
  1. Add the Microsoft Entra user to the Azure DevOps org with a **Stakeholder** access level, and then add it to the **Project Collection Administrators** group (for billing), or ensure that the user has sufficient permissions in the Team Project to create service connections.
  1. Sign in to Azure DevOps with the new user credentials, and set up billing. You only see one Azure subscription in the list.

- **Old user token cached in Azure DevOps Services:** If your Azure subscription isn't listed when you create an Azure Resource Manager (ARM) service connection, it might be due to an old user token cached in Azure DevOps Services. This scenario isn't immediately obvious as the list screen of Azure subscriptions doesn't display any errors or warning messages indicating that the user token is outdated. To resolve this issue, manually update the cached user token in Azure DevOps Services by doing the following steps:

  1. Sign out of Azure DevOps Services and sign back in. This action can refresh the user token.
  1. Clear your browser cache and cookies to ensure that any old tokens are removed.
  1. From the Azure DevOps portal, go to the service connections, and reauthorize the connection to Azure. This step prompts Azure DevOps to use a new token.

### Some subscriptions are missing from the list of subscriptions

- **Change support account types settings:** This issue can be fixed by changing the **supported account types** settings and defining who can use your application. Do the following steps:

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

- **Old user token cached in Azure DevOps Services:** If your Azure subscription isn't listed when you create an Azure Resource Manager (ARM) service connection, it might be due to an old user token cached in Azure DevOps Services. This scenario isn't immediately obvious as the list screen of Azure subscriptions doesn't display any errors or warning messages indicating that the user token is outdated. To resolve this issue, manually update the cached user token in Azure DevOps Services by doing the following steps:

  1. Sign out of Azure DevOps Services and sign back in. This action can refresh the user token.
  1. Clear your browser cache and cookies to ensure that any old tokens are removed.
  1. From the Azure DevOps portal, go to the service connections, and reauthorize the connection to Azure. This step prompts Azure DevOps to use a new token.

### Service principal's token expired

An issue that often arises with service principals or secrets that are automatically created is that the token expires and needs to be renewed. If you have an issue with refreshing the token, see [Failed to obtain an access token or a valid refresh token wasn't found](#failed-to-obtain-an-access-token-or-a-valid-refresh-token-wasnt-found).

If your token expired, you could see one of the error messages:

* `AADSTS7000215: Invalid client secret is provided`
* `AADSTS7000222: The provided client secret keys for app '***' are expired`
* `Invalid client id or client secret`

To renew the access token for an automatically created service principal or secret:

1. Go to **Project settings** > **Service connections**, and then select the service connection you want to modify.

1. Select **Edit** in the upper-right corner, and the select **Verify**. 

1. Select **Save**.

The token for your service principal or secret is now renewed for three more months.

   > [!NOTE]
   > This operation is available even if the service principal's token has not expired.
   > Make sure that the user performing the operation has proper permissions on the subscription and Microsoft Entra ID, because it will update the secret for the app registered for the service principal. For more information, see [Create an Azure Resource Manager service connection using automated security](/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-using-automated-security) and [What happens when you create a Resource Manager service connection?](/azure/devops/pipelines/release/azure-rm-endpoint#what-happens-when-you-create-an-azure-resource-manager-service-connection)

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

### What authentication mechanisms are supported? How do managed identities work?

::: moniker range="<= azure-devops-2022"

An Azure Resource Manager service connection can connect to an Azure subscription by using a Service Principal Authentication (SPA) or managed identity authentication.

::: moniker-end

::: moniker range="azure-devops"

The Azure Resource Manager service connection can connect to an Azure subscription, management group, or machine learning workspace using:

- App registration (recommended): You can authenticate the connection using a Workload identity federation or a secret.
- Managed identity: Managed identities for Azure resources provide Azure services with an automatically managed identity in Microsoft Entra ID. You can also use an agent-assigned managed identity.

> When setting up the service connection with a managed identity as the authentication method, the process doesn’t create a new managed identity; it simply establishes the service connection. For this to function correctly, certain conditions must be met. Specifically, because managed identity is the chosen authentication method, there should be a system-assigned identity on the virtual machine you're using. Additionally, this virtual machine needs to act as a self-hosted agent within the pipelines for the workflow to fully execute, allowing the pipeline to deploy changes through the service connection. The system-assigned identity on the VM identifies that the same VM is serving as the agent in the pipeline, enabling authentication. This allows you to leverage the existing managed identity setup.


To learn about managed identities for virtual machines, see [Assigning roles](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm).  

> [!NOTE]
> Managed identities aren't supported in Microsoft-hosted agents. In this scenario, you must [set up a self-hosted agent](../agents/agents.md#install) on an Azure VM and configure a managed identity for that VM.

::: moniker-end

## Related articles

- [Troubleshoot pipeline runs](../troubleshooting/troubleshooting.md)
- [Review pipeline logs](../troubleshooting/review-logs.md)
- [Define variables](../process/variables.md)
