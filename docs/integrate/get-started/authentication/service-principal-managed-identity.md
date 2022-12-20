---
title: Use service principals
titleSuffix: Azure DevOps
ms.custom: 
description: Learn how to add and manage service principals and managed identities in your Azure DevOps organizations.
ms.subservice: azure-devops-security
ms.assetid: 
ms.topic: how-to
ms.author: wonga
author: wonga
ms.date: 12/15/2022
monikerRange: '<= azure-devops'
---

# Use Azure AD service principals & managed identities

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can add Azure Active Directory (Azure AD) service principals and managed identities to your Azure DevOps organizations and grant them access to specific organization resources through group permissions. They are commonly used to perform actions in applications that power automation workflows for your company. 

## About Service Principals and Managed Identities

> [!NOTE]
> Service principal and managed identities support is currently in public preview. They are only available to Azure AD-backed organizations.

For those developing applications on top of Azure AD, let these applications access your organization's Azure DevOps resources by adding their service principals as members of your organization. [Service principals](/azure/active-directory/fundamentals/service-accounts-principal) are security objects within an Azure AD application that define who can access an application and what they can access for a given tenant. They can be setup in the Azure portal during the application registration process and configured to access specific Azure resources, including Azure DevOps. By adding these service principals into your organization and setting up permissions on top of them, we can determine whether a service principal is authorized to access resources and which ones.

[Managed identities](/azure/active-directory/fundamentals/service-accounts-managed-identities) are another Azure AD concept that act similarly to the application service principals described above. These objects provide identities for Azure resources and allow an easy way for services that support Azure AD authentication to share credentials. They are an appealing option because Azure AD takes care of credential management, rotation, and protection required. While setup and configuration of a managed identity may look different in the Azure portal, Azure DevOps treats both security objects similarly as a new identity that can be added into our Users Hub and further configured to limit permissions. Throughout the rest of this documentation, we will refer to managed identites and service principals interchangeably, unless distinctly specified.

Below, we describe the steps needed to authenticate with these identities that perform actions on behalf of themselves, as opposed to for a given user. 

## Step-by-step Configuration

Your own implementation may vary, but at a high-level, the following steps are needed to start using service principals in your workflow.

### 1. Create a new managed identity and service principal

The very first step is to create an application and/or a managed identity, which must be done in the Azure portal. The Azure AD documentation provides a wealth of information on how to get started here. Some helpful links are highlighted below:

* [Manage user-assigned managed identities (for user-assigned managed identities)](/azure/active-directory/managed-identities-azure-resources/how-manage-user-assigned-managed-identities)
* [Configure managed identities for Azure resources on a VM using the Azure portal (for user-assigned and system-assigned managed identities)](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm)
* [Use the portal to create an Azure AD application and service principal that can access resources (for application service principals)](/azure/active-directory/develop/howto-create-service-principal-portal)


### 2. Configure Azure DevOps OAuth application roles

#### Assign application roles and grant admin consent

[App-only roles](/azure/active-directory/develop/custom-rbac-for-developers) can be set up in Azure AD for service principals to authorize which permissions it will be allowed. (We treat roles slightly different than described in the Azure AD documentation. Rather than a role being a combination of permissions, each role is aligned to a single Azure DevOps permission.) All of the roles to choose from can be found on this list of [Azure DevOps scopes](../../integrate/get-started/authentication/oauth?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops#scopes).

To [assign these Azure AD app roles](/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#assign-app-roles-to-applications) to an app registration, you can do this in the Azure portal or programmatically by using [Microsoft Graph](https://learn.microsoft.com/graph/api/user-post-approleassignments?view=graph-rest-1.0&tabs=http). Since these are application permissions, each tenant admin must [grant consent](/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#grant-admin-consent) on behalf of all the users to allow the application to use these application permission. For managed identities, assigning an Azure AD role can only be done programmatically, like the following code snippet. When run by an admin, consent will be granted for the tenant.

// Insert a code snippet here akin to https://techcommunity.microsoft.com/t5/integrations-on-azure-blog/grant-graph-api-permission-to-managed-identity-object/ba-p/2792127

#### Add service principal to Azure DevOps organization

Once you have completed configuring the service principal in the Azure AD portal, they can be treated similarly to users. They can be added through the [Users page](./add-organization-users) or with the [ServicePrincipalEntitlements APIs](//api-reference-links). 

Only administrators can add service principals to an organization. As service principals do not have emails, you cannot invite them via email. They also cannot login or interact with the site and can only access Azure Devops resources programmatically.

   > [!div class="mx-imgBorder"]  
   >![Web portal, organization admin context, Add new users dialog box](media/add-organization-users-from-user-hub/add-new-users-dialog.png)

To add the service principal to the organization, you will need to enter the application or managed identity display name. A service principal will count as a license for each organization it is added to, even if [multi-organization billing](../billing/buy-basic-access-add-users?view=azure-devops#pay-for-a-user-once-across-multiple-organizations) is selected. They can be assigned to all access levels except for **Visual Studio Subscriber**, as service principals are unable to sign up for a Visual Studio subscription.

#### Manage the service principal in Azure DevOps

Once added to the organization, you can also manage access through [permissions and security groups](../security/permissions) in the same way as you do for users. A few notable differences have been outlined below:
* At this time, service principals do not display in the list of Azure AD group members on Azure DevOps. However, so long as the service principal has been explicitly added to the organization, any permissions set on the Azure AD group will also apply to the service principals in the group.
* [Group rules](./assign-access-levels-by-group-membership) do not apply to service principals. In order to set access levels or project memberships on top of service principals, you can [directly set them](../security/change-access-levels).
* Service principals may not be available in all user dropdowns throughout the product yet.

#### Call Azure DevOps REST APIs with service principal token

Acquiring an access token for a managed identity can be done by following along with the Azure AD documentation, for [service principals](/azure/databricks/dev-tools/api/latest/aad/service-prin-aad-token) and [managed identities](/azure/active-directory/managed-identities-azure-resources/how-to-use-vm-token). The returned access token is a JWT with the defined roles, which can be used to access organization resources using the token as *Bearer*.

## Prohibited Service Principal Actions

* Service principals cannot be Organization Owners or create organizations.
* As service principals do not have emails, the following functionality is unavailable:
  * Service principals cannot be invited to any organzation, group, or project via email.
  * Service principals will not receive any Notifications.
* Service principals cannot create tokens, like [personal access tokens (PATs)](./use-personal-access-tokens-to-authenticate) or [SSH Keys](../../repos/git/use-ssh-keys-to-authenticate). Since they can generate their own Azure AD tokens, these can be used to call Azure DevOps REST APIs.
* We will not be supporting [Azure DevOps OAuth](../../integrate/get-started/authentication/oauth?view=azure-devops) for service principals.
* The [Azure CLI](/azure/devops/cli/) does not support service principals.

## FAQs

### Q: Why should I use a service principal or a managed identitiy instead of a PAT?
Service principals and managed identities allow an application to act on behalf of itself. Previously, when this option was not available, PATs were a popular option for authentication of application, but such bearer tokens are considered a less secure method that requires the application to perform actions on behalf of the owner of the PAT. In the case of an application performing automated functions, the PAT owner may not adequately reflect who is actually performing these actions on Azure DevOps.

::: moniker-end
