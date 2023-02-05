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

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

You can now add Azure Active Directory (Azure AD) service principals and managed identities to your Azure DevOps organizations to grant them access to your organization resources. For many teams, this is a viable and preferred alternative to [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) when authenticating applications that power automation workflows for your company. 

## About Service Principals and Managed Identities

> [!NOTE]
> Service principal and managed identities support is currently in public preview. They are only available to Azure AD-backed organizations.

For those developing applications on top of Azure AD, let these applications access your organization's Azure DevOps resources by adding their service principals as members of your organization. [Service principals](/azure/active-directory/fundamentals/service-accounts-principal) are security objects within an Azure AD application that define what an application can do and access in a given tenant. They can be setup in the Azure portal during the application registration process and configured to access Azure resources, including Azure DevOps. By adding these service principals into your organization and setting up permissions on top of them, we can determine whether a service principal is authorized to access resources and which ones.

[Managed identities](/azure/active-directory/fundamentals/service-accounts-managed-identities) are another Azure AD feature that act similarly to the application service principals described above. These objects provide identities for Azure resources and allow an easy way for services that support Azure AD authentication to share credentials. They are an appealing option because Azure AD takes care of credential management and rotation. While setup and configuration of a managed identity may look different in the Azure portal, Azure DevOps treats both security objects similarly as a new identity that can be added into our Users Hub and further configured to limit permissions. Throughout the rest of this documentation, we will refer to managed identites and service principals interchangeably as service principal, unless specified.

Below, we describe the steps needed to authenticate these identities to Azure DevOps to allow them to perform actions on behalf of themselves.

## Step-by-step Configuration

Your own implementation may vary, but at a high-level, the following steps are needed to start using service principals in your workflow.

### 1. Create a new managed identity and service principal

The very first step is to create an application and/or a managed identity, which must be done in the Azure portal. 

#### Managed Identity
A **Managed Identity (MI)** is a service principal of a special type that can only be used with Azure resources. There are two types of managed identities:

* **System-assigned.** Some Azure services allow you to enable a managed identity directly on a service instance. When you enable a system-assigned managed identity, an identity is created in Azure AD. The identity is tied to the lifecycle of that service instance. When the resource is deleted, Azure automatically deletes the identity for you. By design, only that Azure resource can use this identity to request tokens from Azure AD.
* **User-assigned.** You may also create a managed identity as a standalone Azure resource by creating a user-assigned managed identity and assign it to one or more instances of an Azure service. For user-assigned managed identities, the identity is managed separately from the resources that use it.

Some helpful links are highlighted below:
* [What are managed identities for Azure resources?](/azure/active-directory/managed-identities-azure-resources/overview)
* [Manage user-assigned managed identities](/azure/active-directory/managed-identities-azure-resources/how-manage-user-assigned-managed-identities)
* [Configure managed identities for Azure resources on a VM using the Azure portal](/azure/active-directory/managed-identities-azure-resources/qs-configure-portal-windows-vm)

![VIDEO https://msit.microsoftstream.com/video/40e30840-98dc-ba75-3491-f1ed9cd7c336]

#### Application Registration

When you create a new application registration, an application object is created in Azure AD. The **application service principal** is then a representation of this application object for a given tenant. When you register an application as a multi-tenant application, there will be a unique service principal object that represents the application object in every tenant it is added to.

Further information:
* [Application and service principal objects in Azure Active Directory](/azure/active-directory/develop/app-objects-and-service-principals)
* [Securing service principals](/azure/active-directory/fundamentals/service-accounts-principal)
* [Use the portal to create an Azure AD application and service principal that can access resources](/azure/active-directory/develop/howto-create-service-principal-portal)

![VIDEO https://msit.microsoftstream.com/video/5fd10840-98dc-ba75-cfbe-f1ed9cd5786b]

### 2. Configure Azure DevOps OAuth application roles

#### Assign application roles and grant admin consent

[App-only roles](/azure/active-directory/develop/custom-rbac-for-developers) can be set up in Azure AD for service principals to authorize which permissions it will be allowed. (We treat roles slightly different than described in the Azure AD documentation. Rather than a role being a combination of permissions, each role is aligned to a single Azure DevOps scope.) All of the roles to choose from can be found on this list of [Azure DevOps scopes](./oauth.md#scopes).

// Insert screenshot of app roles available in Azure Portal

To [assign these Azure AD app roles](/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#assign-app-roles-to-applications) to an app registration, you can do this in the Azure portal or programmatically by using [Microsoft Graph](https://learn.microsoft.com/graph/api/user-post-approleassignments?view=graph-rest-1.0&tabs=http). Since these are application permissions, each tenant admin must [grant consent](/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps#grant-admin-consent) on behalf of all the users to allow the application to use these application permission. For managed identities, assigning an Azure AD role can only be done programmatically, like the following code snippet. When run by an admin, consent will be granted for the tenant.

// Insert a code snippet here akin to https://techcommunity.microsoft.com/t5/integrations-on-azure-blog/grant-graph-api-permission-to-managed-identity-object/ba-p/2792127

// Insert video on granular scopes app-only

#### Add and manage service principal in a Azure DevOps organization

Once you have completed configuring the service principal in the Azure AD portal, you must do the same in Azure DevOps by adding the service principal to your organization. They can be added through the [Users page](../../../organizations/accounts/add-organization-users.md) or with the [ServicePrincipalEntitlements APIs](//api-reference-links). Since they cannot login interactively, these actions must be done by a user account instead, specifically  a **Project Collection Administrator**. Only PCAs can add and manage service principals in an organization. When being added, you can also grant it access to specific projects and assign it a license.

> [!TIP] 
> To add the service principal to the organization, you will need to enter the application or managed identity's display name. If you choose to add a service principal programmatically through the [ServicePrincipalEntitlements API], make sure to pass in the service principal's object id and not the application's object id. 

![Service principals and managed identities in the Users Hub](./media/users-hub-sps.png)

After they are added to the organization, they can be treated similarly to standard user accounts. You can directly assign permissions to the service principal, add and remove it from security groups and teams, and remove it from the organization.

![VIDEO https://msit.microsoftstream.com/video/fde00840-98dc-ba75-467b-f1ed9dc0f489]

Management of service principals does differ from user accounts in a few key ways:
* Service principals do not have emails and as such, they cannot be invited to an organization via email.
* Group rules for licensing currently do not apply to service principals. If you want to assign an access level to a service principal, it is best to do so directly. 
* While service principals can be added to Azure AD groups (in the Azure portal), we have a current technical limitation preventing us from being able to display them in a list of Azure AD group members. This only applies to Azure AD groups, not Azure DevOps groups. That being said, a service principal will still inherit any group permissions set on top of an Azure AD group they belong to. 
* Not all users in an Azure AD group are immediately part of an Azure DevOps organization just because an admin creates a group and adds an AAD group to it. We have a process called materialization that happens once a user from an Azure AD group signs in to the organization for the first time. This allows us to determine which users should be granted a license. Since this is not possible for service principals, they must be explicitly added to an organization by an admin as described above. 
* You cannot modify a service principal’s display name or avatar on Azure DevOps.
* A service principal will count as a license for each organization it is added to, even if [multi-organization billing](../../../organizations/billing/buy-basic-access-add-users.md?#pay-for-a-user-once-across-multiple-organizations) is selected.

#### Call Azure DevOps REST APIs with service principal token

Acquiring an access token for a managed identity can be done by following along with the Azure AD documentation. See these examples for [service principals](/azure/databricks/dev-tools/api/latest/aad/service-prin-aad-token) and [managed identities](/azure/active-directory/managed-identities-azure-resources/how-to-use-vm-token). 

The returned access token is a JWT with the defined roles, which can be used to access organization resources using the token as *Bearer*.

In the following video example, follow along with this [sample application](https://dev.azure.com/mseng/AzureDevOps/_git/Tools.Identity?path=/ServicePrincipalsSamples/1-ConsoleApp-AppRegistration) where we move from authenticating with a PAT to using a token from a service principal. We start by using a client secret for authentication, then move to using a client certificate.
![VIDEO https://msit.microsoftstream.com/video/84cb0840-98dc-ba75-f946-f1ed9d29b901]

Another example below demonstrates how to connect to Azure DevOps using a User Assigned Managed Identity.
![VIDEO https://msit.microsoftstream.com/video/5fd10840-98dc-ba75-cfbf-f1ed9cd5786b]

Service principals can be used to call Azure DevOps REST APIs and do most actions, but it is limited from the following:
* Service principals cannot be Organization Owners or create organizations.
* Service principals cannot create tokens, like [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) or [SSH Keys](../../../repos/git/use-ssh-keys-to-authenticate.md). Since they can generate their own Azure AD tokens, these can be used to call Azure DevOps REST APIs.
* We will not be supporting [Azure DevOps OAuth](./oauth.md) for service principals.

## FAQs

### Q: Why should I use a service principal or a managed identity instead of a PAT?

Many of our customers seek out a service principal or managed identity to replace an existing PAT (personal access token) often belonging to a service account (shared team user account) that they are using to authenticate an application with Azure DevOps resources. Such PATs must be laboriously rotated every so often (minimum 180 days). As PATs are simply bearer tokens (token strings that represent a user’s username and password), they are incredibly risky to use as they are easy to leak and fall into the wrong person’s hands. Azure AD tokens expire every hour and must be regenerated with a refresh token to get a new access token, which limits the overall risk factor when leaked.

### Q: Can I use a service principal to do git operations, like clone a repo?
Pass the Azure AD token instead of the PAT. See the following example on how we have done this in a Powershell script.

```powershell
$ServicePrincipalAadAccessToken = 'Azure AD access token of a service principal'
git -c http.extraheader="AUTHORIZATION: bearer $ServicePrincipalAadAccessToken" clone https://dev.azure.com/{yourOrgName}/{yourProjectName}/_git/{yourRepoName}
```

To keep your token more secure, use credential managers so you don't have to enter your credentials every time. We recommend [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager), which can accept [Azure AD tokens (i.e. Microsoft Identity OAuth tokens)](https://github.com/GitCredentialManager/git-credential-manager/blob/main/docs/environment.md#GCM_AZREPOS_CREDENTIALTYPE) instead of PATs.

### Q: Can I use a service principal with Azure CLI?
??

### Q: What are the rate limits on service principals and managed identities?
At this time, service principals and managed identities have the same [rate limits](../../concepts/rate-limit) as users.

### Q: Can I add a managed identity from a different tenant to my organization?
??

## Potential Errors and How to Resolve Them

### Failed to create service principal with object ID '{`provided objectId`}'

This error will appear because there is no service principal with the `provided objectId` in the tenant connected to your organization.
One common reason why this might happen is that you are passing in the object id of the app registration, instead of the object id of its service principal. Remember, a service principal is an object that represents the application for a given tenant, it is not the application itself.
The `service principal object id` can be found in your tenant's "Enterprise Applications" page. Search for the application's name and click on the "Enterprise Application" result that returns. This is the page of the service principal / enterprise application and you can use the Object Id found on this page to create a service principal in Azure DevOps.

### Access Denied: {`id of the caller identity`} needs the following permission(s) on the resource Users to perform this action: Add Users

This error usually happens for a number of reasons, some listed below:
* You are not the owner of the organization, project collection administrator, or a project or team administrator.
* You are a project or team administrator trying to add a user, but the policy ['Allow team and project administrators to invite new users'](../../organizations/security/restrict-invitations?view=azure-devops) has not been enabled.
