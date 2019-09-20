---
title: Authenticate with personal access tokens
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Use personal access tokens (PATs) as alternate passwords to authenticate access to Azure DevOps.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: d980d58e-4240-47c7-977c-baaa7028a1d8
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 09/12/2019
monikerRange: '>= tfs-2017'
---

# Authenticate access with personal access tokens

[!INCLUDE [version-tfs-2017-through-vsts](../../_shared/version-tfs-2017-through-vsts.md)]

Personal access tokens (PATs) are alternate passwords that you can use to authenticate into Azure DevOps. In this article, learn how to create or revoke PATs.

If you're working on a larger application or project, we recommend you review our [authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md) to help you choose the correct authentication mechanism. For smaller projects that require a less robust solution, personal access tokens are a simple alternative. Be aware that unless your users are using a credential manager, they'll have to enter their credentials each time.

Azure DevOps uses enterprise-grade authentication to help protect and secure your data. Clients like Visual Studio and Eclipse (with the Team Explorer Everywhere plug-in) also support Microsoft account and Azure AD authentication. Since PATs are an alternate form of user authentication, using a PAT gives you the same access level. If you create a PAT with a narrower [scope](../../integrate/get-started/authentication/oauth.md#scopes), your access is limited to that scope.

For non-Microsoft tools that integrate into Azure DevOps but don't support Microsoft account or Azure AD authentication, you must use PATs. Examples include Git, NuGet, or Xcode. To set up PATs for non-Microsoft tools, use [Git credential managers](../../repos/git/set-up-credential-managers.md) or create them manually.

[!INCLUDE [personal-access-tokens](../../repos/git/_shared/personal-access-tokens.md)]

## Related articles

- For more information about how security and identity are managed, see [About security and identity](../security/about-security-identity.md).
- For more information about permissions and access levels for common user tasks, see [Default permissions and access for Azure DevOps](../security/permissions-access.md).
- For more information about how administrators can revoke organization user PATs, see [Revoke other users' personal access tokens](admin-revoke-user-pats.md).

## Frequently asked questions (FAQs) 

### Q: What is my Azure DevOps Services URL?

A: https://dev.azure.com/{yourorganization}

### Q: Can I regenerate a PAT?

A: No, but you can extend a PAT or modify its scope.

## Q: Is there a way to renew a PAT via rest API?
A: No, we don’t have a rest API to renew a PAT. It has to be done within the user interface (UI).

### Q: Where can I learn more about how to use PATs?

A: For examples of how to use PATs, see [Git credential managers](../../repos/git/set-up-credential-managers.md), [REST APIs](../../integrate/get-started/rest/basics.md), [NuGet on a Mac](../../artifacts/nuget/consume.md#mac-os), and [Reporting clients](../../report/powerbi/client-authentication-options.md#enter-credentials-within-a-client).

### Q: What notifications will I get about my PAT?

A: Users receive two notifications during the lifetime of a PAT, one at creation and the other seven days before the expiration.

The following notification is sent at PAT creation:

![PAT creation notification](_img/use-personal-access-tokens-to-authenticate/PAT-creation.png)

The following notification is sent - a PAT is near expiration:

![PAT near expiration notification](_img/use-personal-access-tokens-to-authenticate/PAT-expiration.png)

### Q: What does "Full Access" mean?

A: The user has all access.

### Q: What do I do if I get an unexpected PAT notification?

A: An administrator or a tool might have created a PAT on your behalf. See the following examples:

- When you connect to an Azure DevOps Services Git repo through git.exe. it creates a token with a display name like "git: https://MyOrganization.visualstudio.com/ on MyMachine."
- When you or an admin sets up an Azure App Service web app deployment, it creates a token with a display name like "Service Hooks :: Azure App Service :: Deploy web app."
- When you or an admin sets up web load testing as part of a pipeline, it creates a token with a display name like "WebAppLoadTestCDIntToken".
- When a Microsoft Teams Integration Messaging Extension is set up, it creates a token with a display name like "Microsoft Teams Integration".

If you still believe that a PAT exists in error, we suggest that you [revoke the PAT](admin-revoke-user-pats.md#revoke-pats). Next, change your password. As an Azure Active Directory user, check with your administrator to see if your organization was used from an unknown source or location.

## Q: How can I use a PAT in my code?

A: See the following sample that gets a list of builds using curl.
<br/>
```
curl -u username[:{personalaccesstoken}] https://dev.azure.com/{organization}/_apis/build-release/builds
```
<br/>
If you wish to provide the PAT through an HTTP header, you must first convert it to a Base64 string (the following example shows how to convert to Base64 using C#). The resulting string can then be provided as an HTTP header in the format:
<br/>
<code>Authorization: Basic BASE64USERNAME:PATSTRING</code> 
<br/>
Here it is in C# using the <a href="/previous-versions/visualstudio/hh193681(v=vs.118)" data-raw-source="[HttpClient class](/previous-versions/visualstudio/hh193681(v=vs.118))">HttpClient class</a>.
<br/>

```cs
public static async void GetBuilds()
{
    try
    {
        var personalaccesstoken = "PATFROMWEB";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Accept.Add(
                new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
                Convert.ToBase64String(
                    System.Text.ASCIIEncoding.ASCII.GetBytes(
                        string.Format("{0}:{1}", "", personalaccesstoken))));

            using (HttpResponseMessage response = client.GetAsync(
                        "https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=5.0").Result)
            {
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseBody);
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
}
```
<br/>
When your code is working, it's a good time to switch from basic auth to <a href="../../integrate/get-started/authentication/oauth.md" data-raw-source="[OAuth](../../integrate/get-started/authentication/oauth.md)">OAuth</a>.

Enabling IIS Basic Authentication invalidates using PATs for TFS. Learn more about [using IIS Basic Authentication with TFS on-premises](../../integrate/get-started/authentication/iis-basic-auth.md).

### Q: Can I use basic auth with all of Azure DevOps REST APIs?

A: No. You can use basic auth with most of them, but [organizations and profiles](https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-5.1) only support [OAuth](../../integrate/get-started/authentication/oauth.md).

