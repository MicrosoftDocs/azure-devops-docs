---
title: Troubleshoot Azure Resource Manager service connections
ms.custom: devx-track-arm-template, arm2024, copilot-scenario-highlight
description: How to troubleshoot Azure Resource Manager service connections in Azure Pipelines
ms.assetid: B43E78DE-5D73-4303-981F-FB86D46F0CAE
ms.topic: troubleshooting
ms.author: jukullam
author: juliakm
ms.date: 02/23/2026
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Troubleshoot Azure Resource Manager service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article presents common troubleshooting scenarios to help you resolve issues you might encounter when creating an Azure Resource Manager (ARM) service connection. See [Manage service connections](../library/service-endpoints.md) to learn how to create, edit, and secure service connections. See [Troubleshoot an Azure Resource Manager workload identity service connection](troubleshoot-workload-identity.md) to learn how to fix workload-identity related issues. 

This article uses the terms "tenant" and "directory" in ways that might overlap. A tenant is a dedicated, isolated instance of Microsoft Entra ID that your organization receives and manages all identities and access control for your cloud services. A directory is a container within that tenant that holds objects like users, groups, and applications used to manage access to resources. 

> [!TIP]
> You can ask [Copilot](/copilot/) for help troubleshooting error messages. To learn more, see [Use AI to troubleshoot an Azure DevOps service connection error](#use-ai-to-troubleshoot-an-azure-devops-service-connection-error).

## What happens when you create an Azure Resource Manager service connection

You have multiple authentication options for [connecting to Azure with an Azure Resource Manager service connection](../library/connect-to-azure.md). We recommend using [workload identity federation](/azure/active-directory/workload-identities/workload-identity-federation) with either an [app registration](../library/connect-to-azure.md#create-an-app-registration-with-workload-identity-federation-automatic) or [managed identity](../library/connect-to-azure.md#create-a-service-connection-for-an-existing-user-assigned-managed-identity). 

When the service connection creation process succeeds, Azure DevOps automatically performs these steps in your Microsoft Entra tenant. If you encounter errors during this process, see the [troubleshooting scenarios below](#the-user-has-only-guest-permission-in-the-directory).

When you save your new Azure Resource Manager service connection, Azure DevOps takes the following actions:

1. Connects to the Microsoft Entra tenant for the selected subscription.
1. Creates an application in Entra ID on behalf of the user.
1. Assigns the application as a contributor to the selected subscription.
1. Creates an Azure Resource Manager service connection by using this application's details.

> [!NOTE]
> To create service connections, you need to be assigned the Creator or Administrator role for the Endpoint Creator group in your project settings: **Project settings** > **Service connections** > **More Actions** > **Security**. Project Contributors are added to this group by default.

## The user has only guest permission in the directory

This error occurs during the automatic service connection creation process when Azure DevOps attempts to create an application and assign permissions in Microsoft Entra ID (steps 2-3 in [What happens when you create an Azure Resource Manager service connection](#what-happens-when-you-create-an-azure-resource-manager-service-connection)). It happens when a user with only guest permissions in a Microsoft Entra ID directory tries to create an Azure Resource Manager service connection in Azure DevOps but has insufficient permissions.

To resolve this issue:

1. Sign in to the Azure portal with an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner) or [user account administrator](/azure/role-based-access-control/built-in-roles#user-access-administrator).

1. Select **Microsoft Entra ID** in the left navigation bar.

1. Make sure you're editing the appropriate directory that corresponds to the user subscription. If not, select **Switch directory** and sign in with the appropriate credentials if necessary.

1. Select **Users** from the **Manage** section.

1. Select **User settings**.

1. Select **Manage external collaboration settings** from the **External users** section.

1. Change the **Guest user permissions are limited** option  to **No**.

Alternatively, if you're ready to give the user administrator-level permissions, you can make the user a member of an administrator role. Complete the following steps:

> [!WARNING]
> Assigning users to the Global Administrator role allows them to read and modify every administrative setting in your Microsoft Entra organization. As a best practice, assign this role to fewer than five people in your organization. 

1. Sign in to the Azure portal with an administrator account. The account should be an [owner](/azure/role-based-access-control/built-in-roles#owner) or [user account administrator](/azure/role-based-access-control/built-in-roles#user-access-administrator).

1. Select **Microsoft Entra ID** from the left navigation pane.

1. Make sure you're editing the appropriate directory that corresponds to the user subscription. If not, select **Switch directory** and sign in with the appropriate credentials if necessary.

1. Select **Users** from the **Manage** section.
   
1. Use the search box to find the user you want to manage.

1. Select **Directory role** from the **Manage** section, and then change the role. Select **Save** when you're done.

It typically takes 15 to 20 minutes to apply the changes globally. The user can then try recreating the service connection.

## The user isn't authorized to add applications in the directory

This error occurs during the automatic service connection creation process when Azure DevOps attempts to create an application in Microsoft Entra ID on your behalf (step 2 in [What happens when you create an Azure Resource Manager service connection](#what-happens-when-you-create-an-azure-resource-manager-service-connection)). You don't have permission to add integrated applications in the directory. The directory administrator has permissions to change this setting. 

To resolve this issue:

1. Select **Microsoft Entra ID** in the left navigation pane.

1. Make sure you're editing the appropriate directory that corresponds to the user subscription. If not, select **Switch directory** and sign in with the appropriate credentials if necessary.

1. Select **Users**, then select **User settings**.

1. Under **App registrations**, change the **Users can register applications** option to **Yes**.

::: moniker range="=azure-devops-2022"

You can also create the service principal with an existing user who already has the required permissions in Entra ID. For more information, see [Create an Azure Resource Manager service connection with an existing service principal](../library/connect-to-azure.md#create-a-service-connection-that-uses-an-existing-service-principal).

::: moniker-end

## Failed to obtain an access token or a valid refresh token wasn't found

These errors typically occur when your session expires. 

To resolve these issues:

1. Sign out of Azure DevOps.

1. Open an InPrivate or incognito browser window and go to [Azure DevOps](https://azure.microsoft.com/services/devops/).

1. Sign in with the appropriate credentials.

1. Select your organization and your project.

1. Try to create your service connection again. For detailed steps, see [Manage service connections](../library/service-endpoints.md).

## You don't appear to have an active Azure subscription when attempting to edit or create a new service connection

This error typically occurs when you're part of multiple Entra ID tenants. 

To resolve this issue:

1. Go to [VS profile](https://app.vsaex.visualstudio.com/).

1. Check whether you have multiple tenants.

1. Select each tenant, then reauthenticate.

1. Try to create a service connection, then check whether the subscription loads.

<a name="contributorrole"></a>

## Failed to assign Contributor role

This error occurs during the automatic service connection creation process when Azure DevOps attempts to assign the application as a contributor to your subscription (step 3 in [What happens when you create an Azure Resource Manager service connection](#what-happens-when-you-create-an-azure-resource-manager-service-connection)). This error typically happens when you don't have **Write** permission for the selected Azure subscription.

To resolve this issue, ask the subscription administrator to [assign you the appropriate role](/azure/active-directory/fundamentals/active-directory-users-assign-role-azure-portal) in Microsoft Entra ID.

## Subscription isn't listed when creating a service connection

There are multiple possible causes of this problem. 

- **Exceeded maximum of 50 Azure subscriptions listed in the various Azure subscription drop-down menus** (billing, service connection, and so on): If you're setting up a service connection and you have more than 50 Azure subscriptions, some of your subscriptions aren't listed. In this scenario, complete the following steps:

  1. Create a new, native Microsoft Entra user in the Microsoft Entra instance of your Azure subscription. 
  
  1. Set up the Microsoft Entra user so that it has the proper permissions to set up billing or create service connections. For more information, see [Add a user who can set up billing for Azure DevOps](../../organizations/billing/set-up-billing-for-your-organization-vs.md#give-a-user-access-to-manage-billing). 
  
  1. Add the Microsoft Entra user to the Azure DevOps org with a **Stakeholder** access level, and then add it to the **Project Collection Administrators** group (for billing), or ensure that the user has sufficient permissions in the Team Project to create service connections.
  
  1. Sign in to Azure DevOps with the new user credentials, and set up billing. You only see one Azure subscription in the list.

- **Old user token cached in Azure DevOps Services:** If your Azure subscription doesn't appear when you create an Azure Resource Manager (ARM) service connection, it might be due to an old user token cached in Azure DevOps Services. This scenario isn't immediately obvious as the list screen of Azure subscriptions doesn't display any errors or warning messages indicating that the user token is outdated. To resolve this issue, manually update the cached user token in Azure DevOps Services by doing the following steps:

  1. Sign out of Azure DevOps Services and sign back in. This action can refresh the user token.
  1. Clear your browser cache and cookies to ensure that any old tokens are removed.
  1. From the Azure DevOps portal, go to the service connections, and reauthorize the connection to Azure. This step prompts Azure DevOps to use a new token.

- **Incorrect support account types settings:** Fix this issue by changing the **supported account types** settings and defining who can use your application. Follow these steps:

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

## Service principal or secret expired

Service principals or secrets that Azure DevOps automatically creates expire and require renewal. If you encounter issues refreshing the token, see [Failed to obtain an access token or a valid refresh token wasn't found](#failed-to-obtain-an-access-token-or-a-valid-refresh-token-wasnt-found). To avoid needing to renew secrets, [use workload identity federation with Azure Resource Manager](../library/connect-to-azure.md#create-an-app-registration-with-workload-identity-federation-automatic). 

If your token expires, you might see one of these error messages:

* `AADSTS7000215: Invalid client secret is provided`
* `AADSTS7000222: The provided client secret keys for app '***' are expired`
* `Invalid client id or client secret`

To renew the access token for an automatically created service principal or secret:

1. Go to **Project settings** > **Service connections**, and then select the service connection you want to refresh.

1. Select **Rotate secret**.

     :::image type="content" source="media/azure-rm-endpoint/rotate-secret.png" alt-text="Screenshot of option to rotate an ARM secret. ":::

The token for your service principal or secret is now renewed for three more months.

   > [!NOTE]
   > This operation is available even if the service principal's token hasn't expired.
   > Make sure that the user performing the operation has proper permissions on the subscription and Microsoft Entra ID, because it updates the secret for the app registered for the service principal. For more information, see [Create an app registration with a secret](../library/azure-resource-manager-alternate-approaches.md#create-an-app-registration-with-a-secret-automatic) and [What happens when you create a Resource Manager service connection?](/azure/devops/pipelines/release/azure-rm-endpoint#what-happens-when-you-create-an-azure-resource-manager-service-connection)

## Failed to obtain the JWT by using the service principal client ID

This issue occurs when you try to save a service connection that has an expired secret or other issues at the Microsoft Entra ID level.

A service connection in this state might also not appear in pipeline task dropdowns (such as Azure App Service Deploy or Azure PowerShell), even though it's visible under **Project settings** > **Service connections**.
This happens when the underlying service principal was deleted or the `isReady` status of the connection is `false`.

To resolve this issue:

1. Go to **Project settings** > **Service connections**, and then select the service connection you want to modify.
1. Select **Edit**, and then select **Verify** to check the connection status.
1. If verification fails with an `AADSTS700016` error ("Application with identifier was not found in the directory"), the service principal was deleted. Create a new service connection, or for manual connections, update the connection with new service principal details.
1. If verification succeeds, select **Save** to save the service connection.

> [!NOTE]
> If you get an error like `Failed to obtain the Json Web Token(JWT) using service principal client ID. Exception message: AADSTS7000112: Application is disabled.`, work with your Microsoft Entra ID team to confirm that the option [Enabled for users to sign-in](/troubleshoot/entra/entra-id/app-integration/error-code-aadsts7000112-application-is-disabled) in the enterprise application linked with your service principal isn't disabled.

## Azure subscription isn't passed from the previous task output

When you set your Azure subscription dynamically for your release pipeline and want to consume the output variable from a preceding task, you might encounter this issue. 

To resolve the issue, ensure that the values are defined within the variables section of your pipeline. You can then pass this variable between your pipeline's tasks.

## What authentication mechanisms are supported? How do managed identities work?

::: moniker range="=azure-devops-2022"

An Azure Resource Manager service connection can connect to an Azure subscription by using Service Principal Authentication (SPA) or managed identity authentication.

::: moniker-end

::: moniker range="azure-devops"

The Azure Resource Manager service connection can connect to an Azure subscription, management group, or machine learning workspace by using:

- App registration (recommended): Authenticate the connection by using a Workload identity federation or a secret.
- Managed identity: Managed identities for Azure resources provide Azure services with an automatically managed identity in Microsoft Entra ID. You can also use an agent-assigned managed identity.

> When you set up the service connection with a managed identity as the authentication method, the process doesn't create a new managed identity. It simply establishes the service connection. For this authentication method to function correctly, certain conditions must be met. Specifically, because managed identity is the chosen authentication method, the virtual machine you're using should have a system-assigned identity. Additionally, this virtual machine needs to act as a self-hosted agent within the pipelines for the workflow to fully execute, allowing the pipeline to deploy changes through the service connection. The system-assigned identity on the VM identifies that the same VM is serving as the agent in the pipeline, enabling authentication. This setup allows you to leverage the existing managed identity.

To learn about managed identities for virtual machines, see [Assigning roles](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm).  

> [!NOTE]
> Microsoft-hosted agents don't support managed identities. In this scenario, you must [set up a self-hosted agent](../agents/agents.md#install) on an Azure VM and configure a managed identity for that VM.

## AuthorizationFailed error when running pipeline tasks

When a pipeline task runs against an Azure resource, you might see the following error:

```
AuthorizationFailed: The client '<ClientName>' with object id '<ObjectId>' does not have authorization 
to perform action '<ActionName>' over scope '/subscriptions/<SubscriptionId>/...'
```

The client and object ID in the error message refer to the service principal that backs your service connection.

To resolve this issue:

1. In the Azure portal, go to the resource or resource group referenced in the error's scope.
2. Select **Access control (IAM)** > **Role assignments**.
3. Verify that the service principal listed in the error has a role that includes the required action (for example, **Contributor** or a custom role).
4. If the role assignment is missing, select **Add** > **Add role assignment** and assign the appropriate role to the service principal.
5. Wait a few minutes for the role assignment to propagate, then retry the pipeline.

For more information about Azure RBAC, see [Azure built-in roles](/azure/role-based-access-control/built-in-roles).

## Service connection not authorized for pipeline

When a pipeline runs, you might see the following error:

```
Resource not authorized. You need to authorize the resource before it can be used.
```

This error occurs when the service connection hasn't been granted permission to the pipeline that's trying to use it.

To resolve this issue:

1. Go to **Project settings** > **Service connections**.
2. Select the service connection that the pipeline uses.
3. Select **More actions** (**...**) > **Security**.
4. Under **Pipeline permissions**, select **+** and add the pipeline that needs access.

Alternatively, you can grant access to all pipelines. This is not recommended. To grant access to all pipelines:

On the service connection's security page, select **More actions** > **Open access**.

> [!NOTE]
> Open access allows any pipeline in the project to use the service connection. For tighter control, grant access to specific pipelines only.

For more information, see [Service connection security](../library/service-endpoints.md).

## Create a service principal without Azure subscription permissions

If you don't have the required permissions on the Azure subscription or Microsoft Entra ID to create a service connection through the automatic method, ask an administrator to create the service principal manually.
You can then enter the service principal details in Azure DevOps to create the service connection.

1. Ask a user who has the required Azure subscription and Microsoft Entra ID permissions to [create a service principal in Microsoft Entra ID](/azure/active-directory/develop/howto-create-service-principal-portal) and assign it the appropriate role on the subscription.
2. Get the following details from the administrator: **Application (client) ID**, **Directory (tenant) ID**, **Subscription ID**, and a **client secret** or **certificate**.
3. In Azure DevOps, go to **Project settings** > **Service connections** > **New service connection** > **Azure Resource Manager** > **Service principal (manual)**.
4. Enter the details provided by the administrator and save the connection.

For more information, see [Create an Azure Resource Manager service connection with an existing service principal](../library/connect-to-azure.md#create-a-service-connection-that-uses-an-existing-service-principal).

## Unable to delete a service connection

When you try to delete an Azure Resource Manager service connection, you might receive an error such as "Failed to remove Azure permission" or "Failed to remove the service principal from Microsoft Entra ID." In some cases, the connection remains in the list even though no error is displayed.

To resolve this issue:

1. Select the service connection and select **Delete**. Even if error messages appear about Azure permissions or the service principal, the connection should still be removed from Azure DevOps.
2. If deletion fails, use the [Service Endpoint REST API](/rest/api/azure/devops/serviceendpoint/endpoints/delete) to delete it directly. Set the `deep` parameter to `false` to skip the underlying service principal cleanup:

   ```
   DELETE https://dev.azure.com/{organization}/{project}/_apis/serviceendpoint/endpoints/{endpointId}?deep=false&api-version=7.1
   ```

3. After deleting the connection, manually remove or update the associated service principal from [App registrations](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) in the Azure portal.

## Use AI to troubleshoot an Azure DevOps service connection error

This example prompt for Copilot Chat helps Copilot troubleshoot your error code and message. Copy and paste this prompt into Copilot Chat, replacing the placeholder with your specific error message. 

```copilot-prompt
I'm getting this Azure DevOps service connection error: [PASTE YOUR ERROR MESSAGE HERE]

Can you help me troubleshoot this issue? Please provide step-by-step instructions to:
1. Identify the root cause
2. Fix the configuration in Azure or Entra ID
3. Verify the solution works

Context: This is for an Azure Resource Manager service connection in Azure DevOps.
```

::: moniker-end

## Related articles

- [Troubleshoot an Azure Resource Manager workload identity service connection](troubleshoot-workload-identity.md)
- [Troubleshoot pipeline runs](../troubleshooting/troubleshooting.md)
- [Review logs to diagnose pipeline issues](../troubleshooting/review-logs.md)
