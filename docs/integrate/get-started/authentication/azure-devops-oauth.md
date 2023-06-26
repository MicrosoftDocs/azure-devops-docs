---
ms.topic: how-to
title: Use our OAuth 2.0 implementation
description: Using the Azure DevOps OAuth 2.0 implementation for your app
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/26/2023
---

# Use Azure DevOps OAuth 2.0 to create a web app

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

> [!NOTE]
> The following information remains available for all existing Azure DevOps OAuth apps. We recommend new app developers look into the Microsoft Identity Platform to create an Azure AD OAuth app instead, which is being continuously worked on..

Azure DevOps is an identity provider for OAuth 2.0 apps as well. Our implementation of OAuth 2.0 allows developers to authorize their app for users and get access tokens to access Azure DevOps resources.

## Getting Started with Azure DevOps OAuth

### 1. Register your app

1. Go to `https://app.vsaex.visualstudio.com/app/register` to register your app.

2. Select the [scopes](./oauth.md#oauth-scopes) that your application needs, and then use the same scopes when you [authorize your app](#2-authorize-your-app). If you registered your app using the preview APIs, re-register because the scopes that you used are now deprecated.

3. Select **Create application**.

   The application settings page displays.

   :::image type="content" source="media/app-settings.png" alt-text="Screenshot showing Applications settings for your app.":::

   - When Azure DevOps Services presents the authorization approval page to your user, it uses your company name, app name, and descriptions. It also uses the URLs for your company web site, app website, and terms of service and privacy statements.

     :::image type="content" source="media/grant-access.png" alt-text="Screenshot showing Visual Studio Codespaces authorization page with your company and app information.":::

   - When Azure DevOps Services asks for a user's authorization, and the user grants it, the user's browser gets redirected to your authorization callback URL with the authorization code.
   The callback URL must be a secure connection (https) to transfer the code back to the app and exactly match the URL registered in your app. If it doesn't, a 400 error page is displayed instead of a page asking the user to grant authorization to your app.

4. Call the authorization URL and pass your app ID and authorized scopes when you want to have a user authorize your app to access their organization.
Call the access token URL when you want to get an access token to call an Azure DevOps Services REST API.

The settings for each app that you register are available from your profile `https://app.vssps.visualstudio.com/profile/view`.

### 2. Authorize your app

1. If your user hasn't yet authorized your app to access their organization, call the authorization URL. It calls you back with an authorization code, if the user approves the authorization.

```no-highlight
https://app.vssps.visualstudio.com/oauth2/authorize
        ?client_id={app ID}
        &response_type={Assertion}
        &state={state}
        &scope={scope}
        &redirect_uri={callback URL}
```

Parameter     | Type   | Notes
--------------|--------|----------------------------
client_id     | GUID   | The ID assigned to your app when it was registered.
response_type | string | `Assertion`
state         | string | Can be any value. Typically a generated string value that correlates the callback with its associated authorization request.
scope         | string | Scopes registered with the app. Space separated. See [available scopes](#scopes).
redirect_uri  | URL    | Callback URL for your app. **Must exactly match the URL registered with the app**.

2. Add a link or button to your site that takes the user to the Azure DevOps Services authorization endpoint:

```no-highlight
https://app.vssps.visualstudio.com/oauth2/authorize
        ?client_id=88e2dd5f-4e34-45c6-a75d-524eb2a0399e
        &response_type=Assertion
        &state=User1
        &scope=vso.work%20vso.code_write
        &redirect_uri=https://fabrikam.azurewebsites.net/myapp/oauth-callback
```

Azure DevOps Services asks the user to authorize your app.

Assuming the user accepts, Azure DevOps Services redirects the user's browser to your callback URL, including a short-lived authorization code and the state value provided in the authorization URL:

```no-highlight
https://fabrikam.azurewebsites.net/myapp/oauth-callback
        ?code={authorization code}
        &state=User1
```

### 3. Get an access and refresh token for the user

Use the authorization code to request an access token (and refresh token) for the user. Your service must make a service-to-service HTTP request to Azure DevOps Services.

#### URL - authorize app

```no-highlight
POST https://app.vssps.visualstudio.com/oauth2/token
```

#### HTTP request headers - authorize app

|  Header           | Value
|-------------------|------------------------------------------------------------------
| Content-Type      | `application/x-www-form-urlencoded`

```no-highlight
Content-Type: application/x-www-form-urlencoded
```

#### HTTP request body - authorize app

```no-highlight
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion={1}&redirect_uri={2}
```

Replace the placeholder values in the previous sample request body:

* **{0}**: URL encoded client secret acquired when the app was registered
* **{1}**: URL encoded "code" provided via the `code` query parameter to your callback URL
* **{2}**: callback URL registered with the app

#### C# example to form the request body - authorize app

```no-highlight
public string GenerateRequestPostData(string appSecret, string authCode, string callbackUrl)
{
   return String.Format("client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion={1}&redirect_uri={2}",
               HttpUtility.UrlEncode(appSecret),
               HttpUtility.UrlEncode(authCode),
               callbackUrl
        );
}
```

#### Response - authorize app

```json
{
    "access_token": { access token for the user },
    "token_type": { type of token },
    "expires_in": { time in seconds that the token remains valid },
    "refresh_token": { refresh token to use to acquire a new access token }
}
```

> [!IMPORTANT]
> Securely persist the **refresh_token** so your app doesn't need to prompt the user to authorize again. Access tokens expire quickly and shouldn't be persisted.

### 4. Use the access token

To use an access token, include it as a bearer token in the Authorization header of your HTTP request:

```
Authorization: Bearer {access_token}
```

For example, the HTTP request to [get recent builds](https://visualstudio.com/api/build-release/builds.md#getalistofbuilds) for a project:

```no-highlight
GET https://dev.azure.com/myaccount/myproject/_apis/build-release/builds?api-version=3.0
Authorization: Bearer {access_token}
```

### 5. Refresh an expired access token

If a user's access token expires, you can use the refresh token that they acquired in the authorization flow to get a new access token. It's like the original process for exchanging the authorization code for an access and refresh token.

#### URL - refresh token

```no-highlight
POST https://app.vssps.visualstudio.com/oauth2/token
```

#### HTTP request headers - refresh token

|  Header           | Value
|-------------------|------------------------------------------------------------------
| Content-Type      | `application/x-www-form-urlencoded`
| Content-Length    | Calculated string length of the request body (see the following example)

```no-highlight
Content-Type: application/x-www-form-urlencoded
Content-Length: 1654
```

#### HTTP request body - refresh token

```no-highlight
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=refresh_token&assertion={1}&redirect_uri={2}

```

Replace the placeholder values in the previous sample request body:

* **{0}**: URL encoded client secret acquired when the app was registered
* **{1}**: URL encoded refresh token for the user
* **{2}**: callback URL registered with the app

#### Response - refresh token

```json
{
    "access_token": { access token for this user },
    "token_type": { type of token },
    "expires_in": { time in seconds that the token remains valid },
    "refresh_token": { new refresh token to use when the token has timed out }
}
```

> [!IMPORTANT]
> A new refresh token gets issued for the user. Persist this new token and use it the next time you need to acquire a new access token for the user.

<a name="scopes"></a>

### Samples

You can find a C# sample that implements OAuth to call Azure DevOps Services REST APIs in our [C# OAuth GitHub Sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample).

## Frequently asked questions (FAQs)

<!-- BEGINSECTION class="md-qanda" -->

### Q: Can I use OAuth with my mobile phone app?

A: No. Azure DevOps Services only supports the web server flow, so there's no way to implement OAuth, as you can't securely store the app secret.

### Q: What errors or special conditions do I need to handle in my code?

A: Make sure that you handle the following conditions:
* If your user denies your app access, no authorization code gets returned. Don't use the authorization code without checking for denial.
* If your user revokes your app's authorization, the access token is no longer valid. When your app uses the token to access data, a 401 error returns. Request authorization again.

### Q: I want to debug my web app locally. Can I use localhost for the callback URL when I register my app?

A: Yes. Azure DevOps Services now allows localhost in your callback URL. Ensure you use `https://localhost` as the beginning of your callback URL when you register your app.

### Q: I get an HTTP 400 error when I try to get an access token. What might be wrong?

A: Check that you set the content type to application/x-www-form-urlencoded in your request header.

### Q: I get an HTTP 401 error when I use an OAuth-based access token, but a PAT with the same scope works fine. Why?

A: Verify that **Third-party application access via OAuth** hasn't been disabled by your organization's admin at `https://dev.azure.com/{your-org-name}/_settings/organizationPolicy`.
In this scenario, the flow to authorize an app and generate an access token works, but all REST APIs return only an error, such as `TF400813: The user "<GUID>" is not authorized to access this resource.`

### Q: Can I use OAuth with the SOAP endpoints and REST APIs?

A: No. OAuth is only supported in the REST APIs at this point.

### Q: How can I get attachments detail for my work item using Azure DevOps REST APIs?

A: First, get the work item details with [Work items - Get work item](/rest/api/azure/devops/wit/work-items?preserve-view=true&view=azure-devops-rest-6.1) REST API:

```REST
GET https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/{id}
```

To get the attachments details, you need to add the following parameter to the URL:

```REST
$expand=all
```

With the results, you get the relations property. There you can find the attachments URL, and within the URL you can find the ID. For example:

```REST API
$url = https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/434?$expand=all&api-version=5.0

$workItem = Invoke-RestMethod -Uri $url -Method Get -ContentType application/json

$split = ($workitem.relations.url).Split('/')

$attachmentId = $split[$split.count - 1]

# Result: 1244nhsfs-ff3f-25gg-j64t-fahs23vfs
```

<!-- ENDSECTION -->

## Related articles

* [Choosing the right authentication method](authentication-guidance.md)
* [Understand the OAuth models](oauth.md)
* [Default permissions and access for Azure DevOps](../../../organizations/security/permissions-access.md)
* [Manage authorizations](../../../organizations/settings/manage-authorizations.md)
