---
ms.subservice: azure-devops-ecosystem
title: Authenticate and Secure | Extensions for Azure DevOps 
description: Learn how to authenticate requests to your service and call REST APIs from your Azure DevOps extension.
ms.assetid: c1704b14-66d2-4950-8633-a63fc8f88508
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/10/2024
---

# Authenticate and secure web extensions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article pertains only to authentication and security for _web extensions_, and not Pipelines task extensions or service endpoint extensions. For those tasks, you can use the [Publish to Azure Service Bus Task](/azure/devops/pipelines/tasks/reference/publish-to-azure-service-bus-v1).

## Call REST APIs from your extension

Most extensions need to call Azure DevOps REST APIs on behalf of the current user. 
* If you're using the provided `JavaScript REST clients`, authentication is automatically handled for you. These clients request an access token from the core SDK and set it in the Authorization header of the request.
* If you're not using the provided clients, you need to request a token from the `Core SDK` and set it in the Authorization header of your request:

    ```javascript
    import * as SDK from "azure-devops-extension-sdk";
    import { getAccessToken } from "azure-devops-extension-sdk";
    
    SDK.init();
    
    getAccessToken().then((token) => {
        // Format the auth header
        const authHeader = `Bearer ${token}`;
        
        // Add token as an Authorization header to your request
        console.log(authHeader);
    });
    ```

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Authenticate requests to your service

A common scenario is making calls to a back-end service from an extension. To verify these calls are coming from your extension running in Azure DevOps and to authenticate the current user, and other context information, a special type of token is provided to your extension. This token contains information about the caller and a signature that you can validate to ensure the request originated from your extension.

### Get your extension's key

Your extension's unique key, generated when the extension is published, can be used to verify the authenticity of requests made from your extension.

To obtain this key, go to the [extension management portal](https://aka.ms/vsmarketplace-manage), right-click on a [published extension](../publish/overview.md), and then select **Certificate**.

![key](./media/get-extension-key.png)

> [!WARNING]
> Scope changes in an extension cause the certificate to change. If you make changes to the scope, you need a new extension key.

### Generate a token to provide to your service

1. The Core SDK `getAppToken` method returns a promise that, when resolved, contains a token signed with your extension's certificate.

    ```javascript
    import * as SDK from "azure-devops-extension-sdk";
    import { getAppToken } from "azure-devops-extension-sdk";

    SDK.init();

    getAppToken().then((token) => {
    // Add token to your request
    console.log(token);
    });
    ```

2. Pass this token to your service as a query parameter or request header.

### Parse and validate the token

Here is a sample of parsing the token. First, download and store the secret for your extension from your publisher page. This secret must be available to your application.

#### .NET Framework

Do the following task to add one reference to get the sample to compile.

Open the NuGet Package Manager and add a reference to `System.IdentityModel.Tokens.Jwt`. This sample was built with version 6.8.0 of this package.

```csharp
using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

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
                IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(secret)),
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
            
            // Use the principal object as needed
            Console.WriteLine(principal.Identity.Name);
        }
    }
}
```

#### .NET Core - WebAPI

Do the following task to add one reference to get this sample to compile.

Open the NuGet Package Manager and add a reference to `System.IdentityModel.Tokens.Jwt`. This sample was built with version 5.1.4 of this package.

**Startup.cs**

```csharp
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace TokenSample.Core.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            string _secret = "ey9asfasdmax..<the secret key downloaded from the Azure DevOps Services publisher page>.9faf7eh";
        
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer((o) =>
                    {
                        o.TokenValidationParameters = new TokenValidationParameters()
                        {
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secret)),
                            ValidateIssuer = false,
                            ValidateAudience = false,
                            ValidateActor = false,
                            RequireSignedTokens = true,
                            RequireExpirationTime = true,
                            ValidateLifetime = true
                        };    
                    });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseRouting();
            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
```

**Your API Controllers:**

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[Authorize]
public class SampleLogicController : ControllerBase
{
   // ...
}
```
