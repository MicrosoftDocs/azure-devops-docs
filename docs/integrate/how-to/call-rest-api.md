---
title: Get started with the REST APIs for Azure DevOps Services and Team Foundation Server
description: Learn the basic patterns for using the REST APIs for Azure DevOps Services and Team Foundation Server.
ms.assetid: 14ac2881-2aaf-4291-8dfe-3f7e3f591861
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Get started with the REST APIs

Integrate your app with Azure DevOps Services and Team Foundation Server (TFS) using these REST APIs.

These APIs follow a common pattern: 

```no-highlight
VERB https://{instance}[/{collection}[/{team-project}]/_apis[/{area}]/{resource}?api-version={version}
```

> Tip: To avoid having your app or service broken as APIs evolve, specify an [API version](#versions) on every request.

## Azure DevOps Services

For Azure DevOps Services, `instance` is `dev.azure.com/{organization}` and `collection` is `DefaultCollection`,
so the pattern looks like this:

```no-highlight
VERB https://dev.azure.com/{organization}/_apis[/{area}]/{resource}?api-version={version}
```
<br />
For example, here's how to get a list of projects in an organization.

```dos
curl -u {username}[:{personalaccesstoken}] https://dev.azure.com/{organization}/_apis/projects?api-version=2.0
```
<br />
If you wish to provide the personal access token through an HTTP header, you must first convert it to a Base64 string (the following example shows how to convert to Base64 using C#).  The resulting string can then be provided as an HTTP header in the format:

```
Authorization: Basic BASE64PATSTRING
``` 
<br />
Here it is in C# using the [HttpClient class](http://msdn.microsoft.com/library/system.net.http.httpclient.aspx).

```cs
public static async void GetProjects()
{
	try
	{
		var personalaccesstoken = "PAT_FROM_WEBSITE";

		using (HttpClient client = new HttpClient())
		{
			client.DefaultRequestHeaders.Accept.Add(
				new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

			client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
				Convert.ToBase64String(
					System.Text.ASCIIEncoding.ASCII.GetBytes(
						string.Format("{0}:{1}", "", personalaccesstoken))));

			using (HttpResponseMessage response = client.GetAsync(
						"https://dev.azure.com/{organization}/_apis/projects").Result)
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
<br />
If you don't have an organization,
you can [set one up for free](https://visualstudio.microsoft.com/docs/setup-admin/team-services/sign-up-for-visual-studio-team-services). 

Most samples on this site use Personal Access Tokens as they're a compact example for authenticating with the service.  However, there are a variety of authentication mechanisms available for Azure DevOps Services including ADAL, OAuth and Session Tokens.  Refer to the [Authentication](../get-started/authentication/authentication-guidance.md) section for guidance on which one is best suited for your scenario.

## TFS

For TFS, `instance` is `{server:port}` and by default the port is 8080.
The default collection is `DefaultCollection`, but can be any collection.

Here's how to get a list of projects from TFS using the default port and collection.

```dos
curl -u {username}[:{personalaccesstoken}] https://{server}:8080/DefaultCollection/_apis/projects?api-version=2.0
```

The examples above use personal access tokens, which requires that you [create a personal access token](../get-started/Authentication/PATs.md).


## Responses
You should get a response like this.

```json
{
    "value": [
        {
            "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "name": "Fabrikam-Fiber-TFVC",
            "url": "https: //dev.azure.com/fabrikam-fiber-inc/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "description": "TeamFoundationVersionControlprojects",
            "collection": {
                "id": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "name": "DefaultCollection",
                "url": "https: //dev.azure.com/fabrikam-fiber-inc/_apis/projectCollections/d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "collectionUrl": "https: //dev.azure.com/fabrikam-fiber-inc"
            },
            "defaultTeam": {
                "id": "66df9be7-3586-467b-9c5f-425b29afedfd",
                "name": "Fabrikam-Fiber-TFVCTeam",
                "url": "https: //dev.azure.com/fabrikam-fiber-inc/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/66df9be7-3586-467b-9c5f-425b29afedfd"
            }
        },
        {
            "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "name": "Fabrikam-Fiber-Git",
            "url": "https: //dev.azure.com/fabrikam-fiber-inc/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "description": "Gitprojects",
            "collection": {
                "id": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "name": "DefaultCollection",
                "url": "https: //dev.azure.com/fabrikam-fiber-inc/_apis/projectCollections/d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "collectionUrl": "https: //dev.azure.com/fabrikam-fiber-inc"
            },
            "defaultTeam": {
                "id": "8bd35c5e-30bb-4834-a0c4-d576ce1b8df7",
                "name": "Fabrikam-Fiber-GitTeam",
                "url": "https: //dev.azure.com/fabrikam-fiber-inc/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/teams/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7"
            }
        }
    ],
    "count": 2
}
```

The response is [JSON](http://json.org/).
That's generally what you'll get back from the REST APIs,
although there are a few exceptions,
like [Git blobs](https://visualstudio.microsoft.com/docs/integrate/api/repos/git/blobs).

Now you should be able to look around the specific
[API areas](https://visualstudio.microsoft.com/docs/integrate/api/repos/git/overview) like [work item tracking](https://visualstudio.microsoft.com/docs/integrate/api/wit/overview)
or [Git](https://visualstudio.microsoft.com/docs/integrate/api/repos/git/overview) and get to the resources that you need.
Keep reading to learn more about the general patterns that are used in these APIs.

## HTTP verbs

Verb   | Used for...
:------|:-----------------------------------
GET    | Get a resource or list of resources
POST   | Create a resource<br/>Get a list of resources using a more advanced query
PUT    | Create a resource if it doesn't exist or, if it does, update it
PATCH  | Update a resource
DELETE | Delete a resource

### Request headers and request content

When you provide request body (usually with the POST, PUT and PATCH verbs), include request headers that describe the body. For example,

```no-highlight
POST https://dev.azure.com/fabrikam-fiber-inc/_apis/build-release/requests
```
```http
Content-Type: application/json
```
```json
{
   "definition": {
      "id": 3
   },
   "reason": "Manual",
   "priority": "Normal"
}
```

### HTTP method override

Some web proxies may only support the HTTP verbs GET and POST, but not more modern HTTP verbs like PATCH and DELETE.
If your calls may pass through one of these proxies, you can send the actual verb using a POST method, with a header to override the method.
For example, you may want to [update a work item](https://visualstudio.microsoft.com/docs/integrate/api/wit/work-items#updateworkitems) (`PATCH _apis/wit/workitems/3`), but you may have to go through a proxy that only allows GET or POST.
You can pass the proper verb (PATCH in this case) as an HTTP request header parameter and use POST as the actual HTTP method.


```no-highlight
POST https://dev.azure.com/fabrikam-fiber-inc/_apis/wit/workitems/3
```
```http
X-HTTP-Method-Override: PATCH
```
```json
{
   (PATCH request body)
}
```

## Response codes

Response | Notes
:--------|:----------------------------------------
200      | Success, and there is a response body.
201      | Success, when creating resources. Some APIs return 200 when successfully creating a resource. Look at the docs for the API you're using to be sure.
204      | Success, and there is no response body. For example, you'll get this when you delete a resource.
400      | The parameters in the URL or in the request body aren't valid.
401      | Authentication has failed.  Often this is due to a missing or malformed Authorization header.
403      | The authenticated user doesn't have permission to perform the operation.
404      | The resource doesn't exist, or the authenticated user doesn't have permission to see that it exists.
409      | There's a conflict between the request and the state of the data on the server. For example, if you attempt to submit a pull request and there is already a pull request for the commits, the response code is 409.

## Cross-origin resource sharing (CORS)

Azure DevOps Services supports CORS. This enables JavaScript code served from a domain other than `dev.azure.com/*` to make Ajax requests to Azure DevOps Services REST APIs. For this to work, each request must provide credentials (personal access tokens and OAuth access tokens are both supported options). Example:

```js
    $( document ).ready(function() {
        $.ajax({
            url: 'https://dev.azure.com/fabrikam/_apis/projects?api-version=1.0',
            dataType: 'json',
            headers: {
                'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
            }
        }).done(function( results ) {
            console.log( results.value[0].id + " " + results.value[0].name );
        });
    });
```

(replace `myPatToken` with a personal access token) 

<a name="versions"></a>
## Versioning

Azure DevOps Services and Team Foundation Server REST APIs are versioned to ensure applications and services continue to work as APIs evolve.

### Guidelines

* API version **must** be specified with every request.
* API versions are in the format {major}.{minor}[-{stage}[.{resource-version}]] - For example, ```1.0```, ```1.1```, ```1.2-preview```, ```2.0```.
* While an API is in preview, you can specify a precise version of a particular revision of the API when needed (for example, ```1.0-preview.1```, ```1.0-preview.2```)
* Once an API is released (1.0, for example), its preview version (1.0-preview) is deprecated and can be deactivated after 12 weeks.
* During this time you should upgrade to the released version of the API. Once a preview API is deactivated, requests that specify a ```-preview``` version will be rejected.

### Usage

API version can be specified either in the header of the HTTP request or as a URL query parameter:

HTTP request header:
```http
Accept: application/json;api-version=1.0
```

Query parameter:
```no-highlight
GET https://dev.azure.com/{organization}/_apis/{area}/{resource}?api-version=1.0
```

### Supported versions

| Product                     | 1.0    | 2.0    | 3.0    |
|:----------------------------|:------:|:------:|:------:|
| Azure DevOps Services | X      | X      | X      | 
| Team Foundation Server 2017 | X      | X      | X      |
| Team Foundation Server 2015 | X      | X      | -      |

Major API version releases align with Team Foundation Server RTM releases. For example, the `3.0` API set was introduced with Team Foundation Server 2017.

A small number of undocumented version 1.0 APIs existed in Team Foundation Server 2013, but are not supported.