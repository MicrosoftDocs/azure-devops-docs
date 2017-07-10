---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Auth and Security | Extensions for Visual Studio Team Services
description: Auth and secuirty for Visual Studio Team Services Extensions
ms.assetid: c1704b14-66d2-4950-8633-a63fc8f88508
ms.manager: douge
ms.author: elbatk
ms.date: 08/29/2016
---

# Auth and security

## Calling REST APIs from your extension

Most extensions have a need to call Visual Studio Team Services REST APIs on behalf of the current user. 
* If you are using the provided [JavaScript REST clients](../reference/client/rest-clients.md), authentication is automatically handled for you. These clients automatically request an access token from the core SDK and set it in the Authorization header of the request.
* If you are not using the provided clients, you need to request a token from the [Core SDK](../reference/client/core-sdk.md) and set it in the Authorization header of your request:

    ```
    VSS.require(["VSS/Authentication/Services"],
        function (VSS_Auth_Service) {
            VSS.getAccessToken().then(function(token){
                // Format the auth header
                var authHeader = VSS_Auth_Service.authTokenManager.getAuthorizationHeader(token);
                
                // Add token as an Authorization header to your request
            });
        });
    ```

## Authenticating requests to your service

A common scenario is to make calls to a back-end service from an extension. To verify these calls are coming from your extension running in Visual Studio Team Services and to verify the authenticity of the current user (and other context information), a special type of token is made available to your extension. This token contains information about who is making the call and also a signature that you can validate to know that the request came from your extension. 

### Get your extension's key

Your extnesion's unique key (which is generated when the extension is published) can be used to verify the authenticity of requests made from your extension.

To get this key, right-click a [published extension](../publish/overview.md) and select **Certificate**.

![key](./_img/get-extension-key.png)

### Generate a token to provide to your service

1. The Core SDK `getAppToken` method return a promise that, when resolved, contains a token signed with your extension's certificate.

    ```
    VSS.getAppToken().then(function(token){
        // Add token to your request
    });
    ```

2. Pass this token to your service as a query parameter or request header.

### Parse and validate the token

Here is a sample of parsing the token.  First download and store the secret for your extension.  You can get this from your publisher page.  This secret will need to be available to your application.
You will need add 2 references to get this sample to compile.  
1. Open the nuget package manager and add a reference to System.IdentityModel.Tokens.Jwt.  This sample was built with version 4.0.2.206221351 of this package.
2. Right click on the references in your project and select "Add reference".  Check System.IdentityModel and then click Ok.

```
	using System.Collections.Generic;
	using System.IdentityModel.Tokens;
	using System.ServiceModel.Security.Tokens;

	namespace TokenSample
	{
		class Program
		{
			static void Main(string[] args)
			{
				string secret = ""; // Load your extension's secret
				string issuedToken = ""; // Token you are validating
				
				var validationParameters = new TokenValidationParameters()
				{
					IssuerSigningTokens = new List<BinarySecretSecurityToken>()
					{
						new BinarySecretSecurityToken (System.Text.UTF8Encoding.UTF8.GetBytes(secret))
					},
					ValidateIssuer = false,
					RequireSignedTokens = true,
					RequireExpirationTime = true,
					ValidateLifetime = true,
					ValidateAudience = false,
					ValidateActor = false
				};

				SecurityToken token = null;
				var tokenHandler = new JwtSecurityTokenHandler();
				var principal = tokenHandler.ValidateToken(issuedToken, validationParameters, out token);
			}
		}
	}
```


