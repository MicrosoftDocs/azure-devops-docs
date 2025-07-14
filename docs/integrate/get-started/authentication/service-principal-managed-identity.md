---
title: Use service principals & managed identities
titleSuffix: Azure DevOps
description: Learn how to add and manage service principals and managed identities in your Azure DevOps organizations.
ms.subservice: azure-devops-security
ms.assetid: 
ms.topic: how-to
ms.author: wonga
author: wonga
ms.date: 07/14/2025
monikerRange: 'azure-devops'
---

# Use service principals & managed identities in Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Service principals and managed identities provide secure, scalable authentication for Azure DevOps automation workflows. These [Microsoft Entra](entra.md) identity types offer enhanced security over traditional personal access tokens (PATs) with automatic credential management, shorter token lifespans, and enterprise-grade access controls.

## Benefits of service principals and managed identities

**Enhanced security**
- **Short-lived tokens**: Microsoft Entra tokens expire every hour, reducing exposure risk compared to PATs (which can last up to one year)
- **Automatic rotation**: Managed identities handle credential rotation automatically
- **No stored secrets**: Eliminates the need to store long-lived credentials in code or configuration

**Operational excellence**
- **Centralized management**: Control access through Microsoft Entra ID policies and Azure DevOps permissions
- **Audit capabilities**: Track authentication and access patterns through comprehensive logging
- **Scale efficiently**: Support enterprise automation scenarios without individual user dependencies

**Modern Authentication**
- **Standards-based**: Uses OAuth 2.0 and OpenID Connect protocols
- **Multi-factor authentication support**: Inherits organizational security policies
- **Conditional access**: Apply advanced security policies based on context

## Understanding service principals and managed identities

### Service principals
[Service principals](/entra/identity-platform/app-objects-and-service-principals) are Microsoft Entra objects that represent applications within a tenant. They define what an application can do, which resources it can access, and who can use it. Service principals are created automatically when you register an application in Microsoft Entra ID and provide a secure way for applications to authenticate and access resources.

**Key characteristics:**
- Created through application registration in Microsoft Entra ID
- Support multitenant scenarios
- Require explicit credential management (certificates or client secrets)
- Ideal for applications that need to authenticate across different environments

### Managed identities
[Managed identities](/entra/identity/managed-identities-azure-resources/overview) are a special type of service principal that Azure manages automatically. They eliminate the need for developers to manage credentials by providing an automatically managed identity in Microsoft Entra ID for Azure resources.

**Types of managed identities:**

**System-assigned managed identity**
- Automatically created and tied to a specific Azure resource
- Lifecycle managed by Azure (deleted when the resource is deleted)
- One-to-one relationship with the Azure resource
- Best for applications deployed on a single Azure resource

**User-assigned managed identity**
- Created as a standalone Azure resource
- Can be assigned to multiple Azure resources
- Lifecycle managed independently of associated resources
- Best for applications that run on multiple resources or need shared identity

> [!TIP]
> **When to use each type:**
> - **Service principals**: Cross-cloud deployments, CI/CD pipelines, applications outside Azure
> - **System-assigned managed identities**: Single Azure resource applications (Azure Functions, App Service)
> - **User-assigned managed identities**: Multi-resource applications, shared identity scenarios

## Implementation guide

Follow these steps to implement service principals or managed identities for Azure DevOps authentication. For complete code examples, see our [sample applications](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples).

### Step 1: Create your identity

Choose the appropriate identity type based on your deployment scenario:

#### Option A: Create a service principal (application registration)

Service principals work well for CI/CD pipelines, cross-cloud scenarios, and applications that need flexible deployment options.

1. Register an application in the [Microsoft Entra admin center](https://entra.microsoft.com)
2. Go to **App registrations** > **New registration**.
3. Configure the application:
   - Name: Descriptive name for your application
   - Account types: Select appropriate tenant support
   - Redirect URI: Leave blank for service-to-service scenarios
4. Create authentication credentials:
   - Recommended: Upload a certificate for enhanced security
   - Alternative: Create a client secret (requires regular rotation)

> [!IMPORTANT]
> When you register an application, Azure creates both an application object and a service principal object. Use the **service principal's object ID** (found in Enterprise Applications) when you add to Azure DevOps, not the application's object ID.

For more detailed information, see the following articles:
- [Application and service principal objects in Microsoft Entra ID](/entra/identity-platform/app-objects-and-service-principals)
- [How to create a service principal](/entra/identity-platform/howto-create-service-principal-portal)

#### Option B: Create a managed identity

Managed identities provide the simplest authentication experience for Azure-hosted applications.

**For system-assigned managed identity:**
1. Go to your Azure resource (App Service, Function App, and so on).
2. Go to **Identity** > **System assigned**.
3. Toggle Status to **On**.
4. **Save** the configuration.

**For user-assigned managed identity:**
1. Create the managed identity in the Azure portal.
2. Go to **Create a resource** > **Managed Identity**.
3. Configure basic settings and create the resource.
4. Assign to resources as needed.

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=b9cf4e49-db98-4247-8770-b8707b043f17]

For more information, see the following articles:
- [Managed identities overview](/entra/identity/managed-identities-azure-resources/overview)
- [How to manage user-assigned managed identities](/entra/identity/managed-identities-azure-resources/how-manage-user-assigned-managed-identities)

### Step 2: Add the identity to Azure DevOps

After creating your identity in Microsoft Entra ID, add it to your Azure DevOps organization to grant access to resources.

**Prerequisites:**
- **Project Collection Administrator** (PCA) role, OR
- **Project Administrator** or **Team Administrator** role when the [invite policy](/azure/devops/organizations/security/restrict-invitations) allows team admins to add users

**Add through the Azure DevOps portal:**
1. Go to **Organization settings** > **Users**.
2. Select **Add user**.
3. Enter the display name of your service principal or managed identity.
4. Select the appropriate access level and project access.
5. Send the invitation.

**Add programmatically:**
Use the [ServicePrincipalEntitlements REST API](/rest/api/azure/devops/memberentitlementmanagement/service-principal-entitlements?view=azure-devops-rest-7.1&preserve-view=true) to automate the process.

> [!TIP]
> **Finding the correct ID:** Use the service principal's object ID from the Enterprise Applications page in Microsoft Entra admin center, not the application registration's object ID.

![Screenshot of service principals and managed identities in the Users Hub.](./media/users-hub-sps.png)

> [!NOTE]
> **Tenant restrictions:** You can only add identities from the same tenant that your Azure DevOps organization is connected to. For cross-tenant scenarios, see the [FAQ workaround](#q-can-i-add-a-managed-identity-from-a-different-tenant-to-my-organization).

### Step 3: Configure permissions

Configure granular permissions for your service principal or managed identity within Azure DevOps. Unlike other Azure services, Azure DevOps uses its own permission model rather than Microsoft Entra application permissions.

**Permission options:**
- **Direct assignment**: Assign permissions directly to the identity
- **Group membership**: Add to Azure DevOps or Microsoft Entra security groups
- **Access levels**: Assign appropriate license level (Basic, Basic + Test Plans, Visual Studio subscriber)

**Best practices:**
- **Apply least privilege**: Grant only the minimum permissions needed
- **Use groups**: Manage permissions through groups for easier maintenance
- **Regular reviews**: Audit permissions periodically

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=e8ee6f58-3939-4170-b112-0ca1b39b0298]

**Permission management options:**
- **Azure DevOps portal**: Organization settings > Permissions
- **REST APIs**: Use [Service Principal Graph APIs](/rest/api/azure/devops/graph/service-principals?view=azure-devops-rest-7.1&preserve-view=true) for programmatic management

> [!IMPORTANT]
> **Azure DevOps vs. Microsoft Entra permissions:** Azure DevOps doesn't use Microsoft Entra ID application permissions. All access control is managed through Azure DevOps' own permission system, allowing for granular project and resource-level permissions.

### Step 4: Get Microsoft Entra ID tokens

Get access tokens to authenticate your applications with Azure DevOps APIs and services.

#### For service principals

**Using client credentials flow:**

```http
POST https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token
Content-Type: application/x-www-form-urlencoded

client_id={client-id}
&scope=https://app.vssps.visualstudio.com/.default
&client_secret={client-secret}
&grant_type=client_credentials
```

**Using certificate authentication (recommended):**

```csharp
using Microsoft.Identity.Client;

var app = ConfidentialClientApplicationBuilder
    .Create(clientId)
    .WithCertificate(certificate)
    .WithAuthority(new Uri($"https://login.microsoftonline.com/{tenantId}"))
    .Build();

var result = await app
    .AcquireTokenForClient(new[] { "https://app.vssps.visualstudio.com/.default" })
    .ExecuteAsync();

string accessToken = result.AccessToken;
```

#### For managed identities

**From Azure resources:**

```csharp
using Azure.Identity;
using Azure.Core;

var credential = new ManagedIdentityCredential();
var tokenRequest = new TokenRequestContext(new[] { "https://app.vssps.visualstudio.com/.default" });
var token = await credential.GetTokenAsync(tokenRequest);

string accessToken = token.Token;
```

**Using Azure Instance Metadata Service (IMDS):**

```http
GET http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=https://app.vssps.visualstudio.com/
Metadata: true
```

#### Azure CLI for ad-hoc operations

For one-time operations or testing, use the Azure CLI:

```bash
# For service principal
az login --service-principal --username {client-id} --password {client-secret} --tenant {tenant-id}
az account get-access-token --resource https://app.vssps.visualstudio.com/

# For managed identity (from Azure resource)
az login --identity
az account get-access-token --resource https://app.vssps.visualstudio.com/
```

For detailed guidance, see [Acquiring Microsoft Entra tokens](../../../cli/entra-tokens.md#acquiring-a-token-for-a-service-principal).

### Step 5: Use tokens with Azure DevOps

Use your acquired tokens to authenticate REST API calls and other Azure DevOps operations.

**Making authenticated API calls:**

```csharp
using System.Net.Http;
using System.Net.Http.Headers;

var client = new HttpClient();
client.DefaultRequestHeaders.Authorization = 
    new AuthenticationHeaderValue("Bearer", accessToken);

var response = await client.GetAsync(
    "https://dev.azure.com/{organization}/_apis/projects?api-version=7.1");
```

**Video examples:**

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=8397f848-b946-4c30-8d0c-78aa4784a549]

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=f4a20e00-c2df-49cc-9b86-7454bd84b9ce]

**Common integration scenarios:**
- **NuGet feeds**: Connect with [NuGet.exe](../../../artifacts/nuget/nuget-exe.md) or [dotnet CLI](../../../artifacts/nuget/dotnet-setup.md)
- **Marketplace publishing**: [Publish extensions via command line](../../../extend/publish/command-line.md)
- **Azure Pipelines**: Create [service connections](../../../pipelines/library/connect-to-azure.md) backed by managed identities
- **Git operations**: [Clone repositories with Git Credential Manager](../../../repos/git/set-up-credential-managers.md)

For complete code examples, see our [sample applications](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples).

## Management considerations

Service principals and managed identities have different management characteristics compared to user accounts:

**Licensing:**
- Each identity requires a license in every organization it joins
- [Multi-organization billing](../../../organizations/billing/buy-basic-access-add-users.md?#pay-for-a-user-once-across-multiple-organizations) doesn't apply to service principals
- Group-based licensing rules don't automatically apply—assign licenses directly

**Identity management:**
- No email addresses—can't be invited via email
- Can't modify display name or avatar in Azure DevOps
- Display names are inherited from Microsoft Entra ID

**Group membership:**
- Can be added to Microsoft Entra groups and Azure DevOps groups
- Technical limitation prevents displaying them in Microsoft Entra group member lists (UI limitation only)
- Still inherit permissions from Microsoft Entra groups they belong to

**Materialization:**
- Must be explicitly added to organizations (no automatic materialization like users)
- Required because service principals can't sign in interactively

## Key differences from user accounts

Service principals and managed identities have specific limitations compared to regular users:

**Capabilities:**
- ✅ Generate Microsoft Entra tokens for API access
- ✅ Access Azure DevOps resources with proper permissions
- ✅ Join security groups and teams
- ❌ Create personal access tokens (PATs) or SSH keys
- ❌ Sign in interactively or access web UI
- ❌ Create or own organizations
- ❌ Support [Azure DevOps OAuth](./oauth.md) flows

**Billing:**
- Counted as separate license in each organization (no multi-org discount)
- Must assign access level directly (group rules don't apply automatically)

## Frequently asked questions

#### Q: Why should I use a service principal or managed identity instead of a PAT?

A: Service principals and managed identities offer significant security advantages over personal access tokens:

**Security benefits:**
- **Shorter lifespan**: Microsoft Entra tokens expire hourly vs. PATs that can last up to a year
- **Automatic rotation**: Managed identities rotate credentials automatically
- **No shared secrets**: Eliminates the risk of storing or accidentally exposing long-lived tokens
- **Centralized control**: Managed through Microsoft Entra ID with enterprise security policies

**Operational benefits:**
- **Audit trail**: Complete logging of authentication and access patterns
- **Conditional access**: Apply policies based on location, device, and risk factors
- **No service accounts**: Eliminates dependency on individual user accounts for automation

For migration examples, see [Replace PATs with Microsoft Entra tokens](entra.md#replace-pats-with-microsoft-entra-tokens).

#### Q: What are the rate limits on service principals and managed identities?

A: Service principals and managed identities have the same [rate limits](../../concepts/rate-limits.md) as users.

#### Q: Will using this feature cost more?

A: Service principals and managed identities are priced like users based on access level. Key differences:

- **No multi-org billing discount**: Each identity counts as a separate license in every organization
- **License assignment**: Must assign access levels directly (group rules don't apply automatically)
- **Same pricing tiers**: Basic, Basic + Test Plans, Visual Studio subscriber rates apply

#### Q: Can I add a managed identity from a different tenant to my organization?

A: You can only directly add identities from your organization's connected tenant. For cross-tenant scenarios, use this workaround:

**Cross-tenant managed identity setup:**

1. Create user-assigned managed identity in the resource tenant
2. Assign to Azure resource (VM, Function App, etc.)
3. Create Key Vault** and generate certificate (non-PEM format)
4. Grant managed identity access to Key Vault with Get/List secret permissions
5. Download certificate in CER format (public key only)
6. Register application in target tenant
7. Upload certificate to application registration
8. Add service principal to Azure DevOps organization
9. Configure authentication using the certificate from Key Vault

```csharp
// Example: Acquire token using managed identity certificate
public static async Task<string> GetSecret(string keyVaultName, string secretName)
{
    var keyVaultUri = new Uri($"https://{keyVaultName}.vault.azure.net");
    var client = new SecretClient(keyVaultUri, new ManagedIdentityCredential());
    var keyVaultSecret = await client.GetSecretAsync(secretName);
    return keyVaultSecret.Value.Value;
}

private static async Task<AuthenticationResult> GetAppRegistrationAADAccessToken(
    string applicationClientID, string appTenantId)
{
    byte[] privateKeyBytes = Convert.FromBase64String(await GetSecret(keyVaultName, secretName));
    var certificate = new X509Certificate2(privateKeyBytes, (string)null, X509KeyStorageFlags.MachineKeySet);

    var app = ConfidentialClientApplicationBuilder.Create(applicationClientID)
        .WithCertificate(certificate)
        .WithAuthority(new Uri($"https://login.microsoftonline.com/{appTenantId}"))
        .Build();

    var result = await app.AcquireTokenForClient(
        new[] { "499b84ac-1321-427f-aa17-267ca6975798/.default" })
        .ExecuteAsync();

    return result;
}
```

> [!IMPORTANT]
> Regularly rotate certificates for security best practices.

## Common errors and solutions

### The Git repository with name or identifier doesn't exist or you don't have permissions

**Solution:** Ensure the service principal has at least a **Basic** license. **Stakeholder** licenses don't provide repository access.

### Failed to create service principal with object ID

**Solution:** Verify you're using the service principal's object ID from **Enterprise Applications**, not the application registration's object ID.

**Find the correct ID:**
1. Go to Microsoft Entra admin center > Enterprise applications
2. Search for your application name
3. Use the **Object ID** from the Enterprise Application page

### Access Denied: needs permissions to Add Users

**Possible causes and solutions:**
- **Insufficient role**: Must be Project Collection Administrator, or Project/Team Administrator with invite permissions enabled
- **Policy restriction**: Check if ["Allow team and project administrators to invite new users"](../../../organizations/security/restrict-invitations.md) policy is enabled
- **License assignment**: Project admins can't assign licenses during invitation—contact PCA for license changes

### Azure DevOps Graphs List API returns empty list

**Solution:** Use the `continuationToken` to iterate through all pages. Service principals might appear on later pages due to API pagination behavior.

### TF401444: Sign-in required error

**Solution:** Ensure the service principal is properly added to the organization with required permissions. This error indicates the identity isn't recognized in the organization.

## Related articles

- [Sample applications and code examples](https://github.com/microsoft/azure-devops-auth-samples/tree/master/ServicePrincipalsSamples)
- [Service Principal Entitlements API reference](/rest/api/azure/devops/memberentitlementmanagement/service-principal-entitlements?view=azure-devops-rest-7.1&preserve-view=true)
- [Service Principal Graph API reference](/rest/api/azure/devops/graph/service-principals?view=azure-devops-rest-7.1&preserve-view=true)
- [Microsoft Entra authentication options](entra.md)
- [Authentication guidance for Azure DevOps](authentication-guidance.md)
