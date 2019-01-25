---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: Authorization using OAuth 2.0 | Azure DevOps Services REST APIs
description: Use OAuth 2.0 authentication to get started with the REST APIs for Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Authorize access to REST APIs with OAuth 2.0

Authenticate your web app's users to access the REST APIs so that your app doesn't have to keep asking for their usernames and passwords.
Azure DevOps Services uses the [OAuth 2.0 protocol](http://oauth.net/2/) to authorize your app for a user and generate an access token.
Use this token when you call the REST APIs from your app.

First, you'll register your web app and get an app ID from Azure DevOps Services.
Using that app ID, you'll send your users to Azure DevOps Services to authorize your app to access their organizations there.
Once they've done that, you'll use that authorization to get an access token for that user.
When you call Azure DevOps Services APIs on behalf of that user, you'll use that user's access token.
Access tokens expire, so you'll also need to refresh the access token if it's expired.

![Process to get authorization](./_img/oauth-overview.png)

For a C# example of the overall flow, see [vsts-auth-samples](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample)

## Register your app

Go to (https://app.vsaex.visualstudio.com/app/register) to register your app.

Make sure you select the [scopes](#scopes) that your application needs,
and then use the exact same scopes when you [authorize your app](#authorize-your-app).
If you registered your app using the preview APIs, you'll want to re-register because the scopes that you used are now deprecated.

When Azure DevOps Services presents the authorization approval page to your user,
it will use your company name, and app name and descriptions,
along with the URLs for your company's web site, your app's website, and your terms of service and privacy statements, like this.

<img alt="Visual Studio Online authorization page with your company and app information" src="./_img/grant-access.png" style="border: 1px solid #CCCCCC" />

When you call Azure DevOps Services to ask for a user's authorization, and the user grants it,
Azure DevOps Services will redirect the user's browser to your authorization callback URL with the authorization code for that authorization.
The callback URL must be a secure connection (https) to transfer the code back to the app. It must exactly match the URL registered in your app.
If it doesn't, a 400 error page is displayed instead of a page asking the user to grant authorization to your app.

When your register your app, the application settings page is displayed.

<img alt="Application settings for your app" src="./_img/app-settings.png" style="border: 1px solid #CCCCCC" />

You'll call the authorization URL and pass your app ID and authorized scopes
when you want to have a user authorize your app to access their organization.
You'll call the access token URL when you want to get an access token to call an Azure DevOps Services REST API.

The settings for each app that you register are available from your profile (https://app.vssps.visualstudio.com/profile/view).

## Authorize your app

If your user hasn't yet authorized your app to access their organization,
call the authorization URL. 

```no-highlight
https://app.vssps.visualstudio.com/oauth2/authorize
        ?client_id={app ID}
        &response_type=Assertion
        &state={state}
        &scope={scope}
        &redirect_uri={callback URL}
```

Parameter     | Type   | Notes
--------------|--------|----------------------------
client_id     | GUID   | The ID assigned to your app when it was registered
response_type | string | `Assertion`
state         | string | Can be any value. Typically a generated string value that correlates the callback with its associated authorization request.
scope         | string | Scopes registered with the app. Space separated. See [available scopes](#scopes).
redirect_uri  | URL    | Callback URL for your app. **This must exactly match the URL registered with the app**

Azure DevOps Services will ask your user to authorize your app.
It will handle authentication and then call you back with an authorization code, if the user approves the authorization.

Add a link or button to your site that navigates the user to the Azure DevOps Services authorization endpoint:

```no-highlight
https://app.vssps.visualstudio.com/oauth2/authorize
        ?client_id=88e2dd5f-4e34-45c6-a75d-524eb2a0399e
        &response_type=Assertion
        &state=User1
        &scope=vso.work%20vso.code_write
        &redirect_uri=https://fabrikam.azurewebsites.net/myapp/oauth-callback
```
<br>
Azure DevOps Services will ask the user to authorize your app.

Assuming the user accepts, Azure DevOps Services will redirect the user's browser to your callback URL, including a short-lived authorization code and the state value provided in the authorization URL:

```no-highlight
https://fabrikam.azurewebsites.net/myapp/oauth-callback
        ?code={authorization code}
        &state=User1
```

## Get an access and refresh token for the user

Now use the authorization code to request an access token (and refresh token) for the user. This requires your service making a service-to-service HTTP request to Azure DevOps Services.

### URL
```no-highlight
POST https://app.vssps.visualstudio.com/oauth2/token
```

### HTTP request headers

|  Header           | Value 
|-------------------|------------------------------------------------------------------
| Content-Type      | `application/x-www-form-urlencoded`
| Content-Length    | Calculated string length of the request body (see below)

```no-highlight
Content-Type: application/x-www-form-urlencoded
Content-Length: 1322
```

### HTTP request body
```no-highlight
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion={1}&redirect_uri={2}
```
<br>
Replace the placeholder values in the sample request body above:

* **{0}**: URL encoded client secret acquired when the app was registered
* **{1}**: URL encoded "code" provided via the `code` query parameter to your callback URL
* **{2}**: callback URL registered with the app

#### C# example to form the request body

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

### Response
```json
{
	"access_token": { access token for the user },
	"token_type": { type of token },
	"expires_in": { time in seconds that the token remains valid },
	"refresh_token": { refresh token to use to acquire a new access token }
}
```
<br>
**Important:** securely persist the *refresh_token* so your app does not need to prompt the user authorize again. *Access tokens* expire relatively quickly and should not be persisted.

## Use the access token

To use an access token, include it as a bearer token in the Authorization header of your HTTP request:

```
Authorization: Bearer {access_token}
```

For example, the HTTP request to [get recent builds](https://visualstudio.com/api/build-release/builds.md#getalistofbuilds) for a project:

```no-highlight
GET https://dev.azure.com/myaccount/myproject/_apis/build-release/builds?api-version=3.0
Authorization: Bearer {access_token}
```

## Refresh an expired access token

If a user's access token expires, you can use the refresh token acquired in the authorization flow to get a new access token. This process is similar to the original process for exchanging the authorization code for an access token and refresh token.

### URL
```no-highlight
POST https://app.vssps.visualstudio.com/oauth2/token
```

### HTTP request headers

|  Header           | Value 
|-------------------|------------------------------------------------------------------
| Content-Type      | `application/x-www-form-urlencoded`
| Content-Length    | Calculated string length of the request body (see below)

```no-highlight
Content-Type: application/x-www-form-urlencoded
Content-Length: 1654
```

### HTTP request body
```no-highlight
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion={0}&grant_type=refresh_token&assertion={1}&redirect_uri={2}
```
<br>
Replace the placeholder values in the sample request body above:

* **{0}**: URL encoded client secret acquired when the app was registered
* **{1}**: URL encoded refresh token for the user
* **{2}**: callback URL registered with the app


### Response
```json
{
	"access_token": { access token for this user },
	"token_type": { type of token },
	"expires_in": { time in seconds that the token remains valid },
	"refresh_token": { new refresh token to use when the token has timed out }
}
```
<br>
**Important**: a new refresh token will be issued for the user. Persist this new token and use it the next time you need to acquire a new access token for the user.

<a name="scopes"></a>

## Scopes

> IMPORTANT: Scopes only enable access to REST APIs and select Git endpoints. SOAP API access is not supported.  

[!INCLUDE [scopes table](../../_shared/scopes.md)]

When you [register your app](#register-your-app),
you'll use scopes to indicate which permissions in Azure DevOps Services your app will require.
When your users authorize your app to access their organization,
they'll authorize it for those scopes.
When you call to [request that authorization](#authorize-your-app),
you'll pass the same scopes that you registered.

## Samples

You can find a C# sample that implements OAuth to call Azure DevOps Services REST APIs in our [C# OAuth GitHub Sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample).

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Can I use OAuth with my phone app?

A: No. Right now, Azure DevOps Services only support the web server flow,
so there's no supported way to implement OAuth for Azure DevOps Services from an app like a phone app,
since there's no way to securely store the app secret.

#### Q: What errors or special conditions do I need to handle in my code?

A: Make sure that you handle these conditions:

1. If your user denies your app access, no authorization code is returned. Don't use the authorization code without checking for that.
2. If your user revokes your app's authorization, the access token is no longer valid. When your app uses the token to access data, a 401 error is returned. You'll have to request authorization again.

#### Q: I want to debug my web app locally. Can I use localhost for the callback URL when I register my app?

A: Azure DevOps Services does not allow localhost to be the hostname in your callback URL. You can edit the hosts file on your 
local computer to map a hostname to 127.0.0.1. Then use this hostname when you register your app. Or, you can deploy your 
app when testing to a Microsoft Azure website to be able to debug and use HTTPS for the callback URL.

#### Q: I get an HTTP 400 error when I try to get an access token. What might be wrong?

A: Check that you set the content type to application/x-www-form-urlencoded in your request header.

#### Q: Can I use OAuth with the SOAP endpoints as well as the REST APIs?

A: No. OAuth is only supported in the REST APIs at this point.

<!-- ENDSECTION --> 

