---
title: Authenticate with personal access tokens 
titleSuffix: Azure DevOps
description: Use personal access tokens to get started with the REST APIs for Azure DevOps Services.
ms.assetid: 255E1E2B-9CB2-4FC3-8495-12DB4149A449
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: chcomley
author: chcomley
ms.date: 06/12/2019
---

# Authenticate with personal access tokens

[!INCLUDE [temp](../../../_shared/version-ts-tfs-2015-2016.md)]

If you are working on a larger application or project we recommend you review our [authentication guidance](authentication-guidance.md) to help you choose the correct authentication mechanism. For smaller projects that require a less robust solution, personal access tokens are a simple alternative. Be aware that unless your users are using a credential manager (hyper link to below), they will have to enter their credentials each time.

These APIs support [OAuth](oauth.md) for authorization and you should plan to use that. With Oauth your users 
don't have to provide their Azure DevOps Services credentials to use when the APIs are called.
To get started on your app, though, you can authenticate using personal access tokens.

[!INCLUDE [personal-access-tokens-procedure](../../../repos/git/_shared/personal-access-tokens.md)]

Here's a sample that gets a list of builds using curl.
<br/>
```
curl -u username[:{personalaccesstoken}] https://dev.azure.com/{organization}/_apis/build-release/builds
```
<br/>
If you wish to provide the personal access token through an HTTP header, you must first convert it to a Base64 string (the following example shows how to convert to Base64 using C#).  The resulting string can then be provided as an HTTP header in the format:
<br/>
<code>Authorization: Basic BASE64PATSTRING</code> 
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
When your code is working, it&#39;s a good time to switch from basic auth to <a href="oauth.md" data-raw-source="[OAuth](oauth.md)">OAuth</a>.


## Enabling IIS Basic Authentication invalidates using PATs for TFS

Learn more about [using IIS Basic Authentication with TFS on-premises](iis-basic-auth.md).


## Q & A

### Q: Can I use basic auth with all of Azure DevOps REST APIs?

**A:** No. You can use basic auth with most of them, but [organizations and profiles](/rest/api/azure/devops) only support [OAuth](oauth.md).

