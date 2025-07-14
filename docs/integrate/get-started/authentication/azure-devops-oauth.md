---
ms.topic: how-to
title: Use Azure DevOps OAuth 2.0
description: Learn how to manage existing Azure DevOps OAuth 2.0 applications and plan migration to Microsoft Entra ID OAuth.
ms.subservice: azure-devops-security
ai-usage: ai-assisted
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# Use Azure DevOps OAuth 2.0

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> **Azure DevOps OAuth is deprecated and scheduled for removal in 2026.** This documentation is for existing Azure DevOps OAuth apps only. New app registrations are no longer accepted as of April 2025.
> 
> **For new applications**: Use [Microsoft Entra ID OAuth](entra-oauth.md) to integrate with Azure DevOps.
> 
> **For existing apps**: Plan your [migration to Microsoft Entra ID OAuth](entra-oauth.md) before 2026.
> 
> [Learn more about this deprecation](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/).

This article explains how Azure DevOps OAuth 2.0 works for existing applications and provides guidance for maintaining and migrating your apps.

## Overview

Azure DevOps OAuth 2.0 allows applications to access Azure DevOps resources on behalf of users. While this service is deprecated, existing applications continue to function until 2026.

**Migration recommendation**: Start planning your migration to [Microsoft Entra ID OAuth](entra-oauth.md) to ensure continued service and access to enhanced security features.

## Prerequisites

Before working with Azure DevOps OAuth applications:

| Requirement | Description |
|-------------|-------------|
| **Existing app registration** | An existing Azure DevOps OAuth app (new registrations stopped April 2025) |
| **Azure DevOps organization** | Access to an Azure DevOps Services organization |
| **HTTPS callback URL** | Secure callback URL for your application |
| **Migration plan** | Strategy for migrating to Microsoft Entra ID OAuth before 2026 |

## Working with existing Azure DevOps OAuth apps

### 1. Manage your existing app registration

> [!NOTE]
> New app registrations are no longer accepted. This section applies only to existing registered applications.

For existing applications, you can view and manage your app settings:

1. Go to your [Visual Studio profile](https://app.vssps.visualstudio.com/profile/view) to access your app registrations.

2. Review your [configured scopes](./oauth.md#available-scopes) and ensure they match your application's needs.

3. Verify your callback URL configuration and update if necessary.

   :::image type="content" source="media/app-page.png" alt-text="Screenshot showing Application settings for your existing app.":::

4. Plan your migration timeline to Microsoft Entra ID OAuth before the 2026 deprecation deadline.

### 2. Authorize your app

The authorization flow remains the same for existing Azure DevOps OAuth apps:

1. Direct users to the authorization URL with your app parameters:

    ```url
    https://app.vssps.visualstudio.com/oauth2/authorize
            ?client_id={app ID}
            &response_type=Assertion
            &state={state}
            &scope={scope}
            &redirect_uri={callback URL}
    ```

    | Parameter | Type | Description |
    |-----------|------|-------------|
    | `client_id` | GUID | The ID assigned to your app when it was registered |
    | `response_type` | string | Must be `Assertion` |
    | `state` | string | A generated string value that correlates the callback with its authorization request |
    | `scope` | string | Space-separated scopes registered with the app. See [available scopes](oauth.md#available-scopes) |
    | `redirect_uri` | URL | Callback URL for your app. **Must exactly match the URL registered with the app** |

   Example authorization URL:

    ```url
    https://app.vssps.visualstudio.com/oauth2/authorize
            ?client_id=00001111-aaaa-2222-bbbb-3333cccc4444
            &response_type=Assertion
            &state=User1
            &scope=vso.work%20vso.code_write
            &redirect_uri=https://fabrikam.azurewebsites.net/myapp/oauth-callback
    ```

   After user authorization, Azure DevOps redirects to your callback URL with the authorization code:
    
    ```url
    https://fabrikam.azurewebsites.net/myapp/oauth-callback
            ?code={authorization code}
            &state=User1
    ```

### 3. Exchange authorization code for access token

Use the authorization code to request an access token and refresh token:

#### Request details

**URL**
```http
POST https://app.vssps.visualstudio.com/oauth2/token
```

**Headers**
```http
Content-Type: application/x-www-form-urlencoded
```

**Request body**
```http
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion={1}&redirect_uri={2}
```

**Parameter substitution:**
- `{0}`: URL-encoded client secret from app registration
- `{1}`: URL-encoded authorization code from callback
- `{2}`: Callback URL registered with the app

#### C# implementation example

```csharp
public string GenerateRequestPostData(string appSecret, string authCode, string callbackUrl)
{
   return String.Format("client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion={1}&redirect_uri={2}",
               HttpUtility.UrlEncode(appSecret),
               HttpUtility.UrlEncode(authCode),
               callbackUrl
        );
}
```

#### Response

```json
{
    "access_token": "{ access token for the user }",
    "token_type": "{ type of token }",
    "expires_in": "{ time in seconds that the token remains valid }",
    "refresh_token": "{ refresh token to use to acquire a new access token }"
}
```

> [!IMPORTANT]
> **Securely store the refresh token** - Access tokens expire quickly, but refresh tokens allow you to get new access tokens without requiring user reauthorization.

### 4. Use the access token

Include the access token as a Bearer token in your API requests:

**Authorization header format:**
```http
Authorization: Bearer {access_token}
```

**Example API request:**
```http
GET https://dev.azure.com/myaccount/myproject/_apis/build-release/builds?api-version=3.0
Authorization: Bearer {access_token}
```

### 5. Refresh expired access tokens

When access tokens expire, use the refresh token to get a new access token:

**Request:**
```http
POST https://app.vssps.visualstudio.com/oauth2/token
Content-Type: application/x-www-form-urlencoded
Content-Length: 1654

client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=refresh_token&assertion={1}&redirect_uri={2}
```

**Parameter substitution:**
- `{0}`: URL-encoded client secret
- `{1}`: URL-encoded refresh token
- `{2}`: Callback URL registered with the app

**Response:**
```json
{
    "access_token": "{ new access token }",
    "token_type": "{ type of token }",
    "expires_in": "{ time in seconds that the token remains valid }",
    "refresh_token": "{ new refresh token }"
}
```

> [!IMPORTANT]
> **Update your refresh token** - A new refresh token is issued with each refresh. Store the new token and use it for future refresh operations.

## Code samples

You can find working examples in our [Azure DevOps authentication samples repository](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample).

## Managing app secrets

> [!IMPORTANT]  
> **Secret rotation is critical for security.** Application secrets expire every 60 days and must be rotated to maintain access.

Azure DevOps OAuth apps support dual secrets to enable zero-downtime rotation:

### Rotate secrets

1. **Generate a new secret** in your [Visual Studio profile](https://aex.dev.azure.com/me) or via the [Registration Secret APIs](/rest/api/azure/devops/delegatedauth/registration-secret).

   :::image type="content" source="media/app-page-new-secret.png" alt-text="Screenshot of app page with secondary secret generated.":::

2. **Confirm the action** in the modal dialog.

   :::image type="content" source="media/secret-regeneration-modal.png" alt-text="Screenshot confirming secret regeneration.":::

3. **Update your application** to use the new secret before the old one expires.

4. **Test the new secret** thoroughly before the old secret expires.

5. **Repeat the process** when the new secret approaches expiration.

### Emergency secret revocation

If a secret is compromised:

1. **Immediately regenerate** the secret in your profile.
2. **Update your application** with the new secret.
3. **Monitor for unauthorized access** in your application logs.

> [!WARNING]
> Regenerating a secret immediately invalidates the previous secret and all tokens created with it.

## Delete your app

> [!WARNING]
> Deleting an app registration immediately breaks all applications using it and invalidates all associated tokens.

To delete an Azure DevOps OAuth app:

1. Go to your [Visual Studio profile](https://app.vssps.visualstudio.com/profile/view).
2. Select the correct tenant from the dropdown menu.
3. Find your app under **Applications and services**.
4. Select **Delete** on the application registration page.

   :::image type="content" source="media/azdo-oauth-app-delete.png" alt-text="Screenshot of app metadata page with delete button highlighted":::

5. Confirm the deletion in the modal dialog.

After deletion, the app and all its tokens immediately stop working.

## Migration planning

> [!IMPORTANT]
> **Start planning your migration now.** Azure DevOps OAuth is slated for removal in 2026.

### Migration checklist

- [ ] **Review [Microsoft Entra ID OAuth documentation](entra-oauth.md)** 
- [ ] **Identify all apps using Azure DevOps OAuth** in your organization
- [ ] **Plan migration timeline** allowing adequate testing time
- [ ] **Update application architecture** to support Microsoft Entra ID OAuth
- [ ] **Test migration** in a nonproduction environment  
- [ ] **Communicate changes** to users and stakeholders
- [ ] **Complete migration** before 2026 deadline

### Migration benefits

**Enhanced security features:**
- Multifactor authentication support
- Conditional Access policies 
- Advanced threat protection
- Enterprise identity integration

**Better developer experience:**
- Modern authentication libraries (MSAL)
- Consistent identity platform across Microsoft services
- Better token management and caching

**Long-term support:**
- Continued investment and feature development
- Enterprise compliance and governance features

## Frequently asked questions

### Q: Can I still create new Azure DevOps OAuth apps?

A: No. New app registrations stopped in April 2025. Use [Microsoft Entra ID OAuth](entra-oauth.md) for new applications.

### Q: When will my existing Azure DevOps OAuth app stop working?

A: Existing apps continue to function until Azure DevOps OAuth is fully deprecated in 2026. Plan your migration well before this deadline.

### Q: Can I use OAuth with mobile applications?

A: Azure DevOps OAuth only supports the web server flow and requires secure storage of client secrets, making it unsuitable for mobile apps. Microsoft Entra ID OAuth provides better mobile app support.

### Q: What should I do if I get an HTTP 400 error when requesting tokens?

A: Common causes include:
- Incorrect `Content-Type` header (should be `application/x-www-form-urlencoded`)
- Malformed request body parameters
- Invalid or expired authorization code
- Mismatched callback URL

### Q: Why do I get HTTP 401 errors with OAuth tokens but not with PATs?

A: Check if your organization administrator disabled **Third-party application access via OAuth** at:
`https://dev.azure.com/{your-org-name}/_settings/organizationPolicy`

When disabled, OAuth authorization flows work, but API calls return `TF400813: The user "<GUID>" is not authorized to access this resource.`

### Q: Can I use localhost for testing?

A: Yes. Azure DevOps OAuth supports `https://localhost` callback URLs for local development and testing.

### Q: How do I handle authorization denials and revocations?

A: Implement proper error handling for:
- **Authorization denial**: No authorization code is returned in the callback
- **Revoked authorization**: API calls return 401 errors; re-request authorization from the user

### Q: What's the difference between Azure DevOps OAuth and Microsoft Entra ID OAuth?

A: 
- **Azure DevOps OAuth**: Deprecated, Azure DevOps-specific, limited security features
- **Microsoft Entra ID OAuth**: Modern, enterprise-grade, enhanced security, long-term support

## Next steps

**For existing applications:**
> [!div class="nextstepaction"]
> [Plan migration to Microsoft Entra ID OAuth](entra-oauth.md)

**For new applications:**
> [!div class="nextstepaction"]
> [Get started with Microsoft Entra ID OAuth](entra-oauth.md)

## Related articles

- [Choose your authentication method](authentication-guidance.md)
- [Migrate to Microsoft Entra ID OAuth](entra-oauth.md)
- [Review OAuth 2.0 scopes for Azure DevOps](oauth.md#available-scopes)
- [Manage app authorizations](../../../organizations/settings/manage-authorizations.md)
- [Explore Azure DevOps REST API reference](/rest/api/azure/devops)
- [Learn about security and identity in Azure DevOps](../../../organizations/security/about-security-identity.md)
