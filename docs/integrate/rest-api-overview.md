---
title: REST APIs for Azure DevOps
description: Find reference material and overviews of the basic patterns for using the REST APIs for Azure DevOps.
ms.assetid: bdddaf58-6849-4134-a295-2887dafeeea3
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.custom: 
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 03/24/2021
robots: NOINDEX, NOFOLLOW
---

# REST API reference

[!INCLUDE [version-all](../includes/version-all.md)]

Representational State Transfer (REST) APIs are service endpoints that support sets of HTTP operations (methods). These methods provide *create*, *retrieve*, *update*, or *delete* access to the service's resources. Learn the basic components of a REST API request and response pair, and see overviews of how to create and send a REST request, and handle the response.

> [!NOTE]
> Most REST APIs have a corresponding .NET Client Library that you can use to simplify your client code. For more information, see 
> [.NET Client Libraries documentation](./concepts/dotnet-client-libraries.md)


## Components of a REST API request and response pair

You can separate a REST API request and response pair into the following five components:

1. The **request URI**, in the following form: `VERB https://{instance}[/{collection}][/{team-project}]/_apis[/{area}]/{resource}?api-version={version}`
   * *instance*: The Azure DevOps organization or Azure DevOps Server you're sending the request to. They're structured as follows:
       * Azure DevOps: `dev.azure.com/{organization}`
       * Azure DevOps Server: `server:port` (the default port is 8080)
   * *collection*: The value for collection should be `DefaultCollection` for Azure DevOps.
   * *resource path*: The collection should be followed by `_apis/{area}/{resource}`. For example, `_apis/wit/workitems`.
   * *api-version*: Every API request should include an api-version to avoid having your app or service break as APIs evolve. api-versions are in the following format: `{major}.{minor}[-{stage}[.{resource-version}]], for example:
     * `api-version=1.0`
     * `api-version=1.2-preview`
     * `api-version=2.0-preview.1`

       *area* and *team-project* are optional, depending on the API request. 
    
2. HTTP **request message header** fields:
    * A required [HTTP method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) (also known as an operation or verb), which tells the service what type of operation you're requesting. Azure REST APIs support GET, HEAD, PUT, POST, and PATCH methods.
    * Optional additional header fields, as required by the specified URI and HTTP method. For example, an Authorization header that provides a bearer token containing client authorization information for the request.
3. Optional HTTP **request message body** fields, to support the URI and HTTP operation. For example, POST operations contain MIME-encoded objects that are passed as complex parameters. 
    * For POST or PUT operations, the MIME-encoding type for the body should be specified in the Content-type request header as well. Some services require you to use a specific MIME type, such as `application/json`.
4. HTTP **response message header** fields:
    * An [HTTP status code](https://www.w3.org/Protocols/HTTP/HTRESP.html), ranging from 2xx success codes to 4xx or 5xx error codes. Or, a service-defined status code may be returned, as indicated in the API documentation.
    * Optional additional header fields, as required to support the request's response, such as a `Content-type` response header.
5. Optional HTTP **response message body** fields:
    * MIME-encoded response objects may be returned in the HTTP response body, such as a response from a GET method that is returning data. Typically, these objects are returned in a structured format such as JSON or XML, as indicated by the `Content-type` response header. For example, when you request an access token from Azure AD, it gets returned in the response body as the `access_token` element, one of several name/value paired objects in a data collection. In this example, a response header of `Content-Type: application/json` is also included.


## Create the request

### Authenticate 

There are many ways to authenticate your application or service with Azure DevOps. The following table is an excellent way to decide which method is the best for you:

| Type of application | Description | Example |Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
| Interactive client-side  | GUI-based client-side application | Windows app enumerating bugs for a user | [Microsoft Authentication Library](/azure/active-directory/develop/active-directory-authentication-libraries) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive JavaScript | GUI-based JavaScript application | AngularJS single page app displaying work items for a user | [Microsoft Authentication Library](/azure/active-directory/develop/active-directory-authentication-libraries) | sample (coming soon) |
| Non-interactive client-side | Headless text only client-side application | Console app displaying all bugs assigned to a user | [Device Profile](/azure/active-directory/develop/v2-oauth2-device-code) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Interactive web | GUI-based web application | Custom Web dashboard displaying build summaries |[OAuth](./get-started/authentication/oauth.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample) |
| Azure DevOps Server application | Azure DevOps Server app using the Client OM library | Azure DevOps Server extension displaying team bug dashboards | [Client Libraries](./concepts/dotnet-client-libraries.md) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| [Azure DevOps Services extension](../extend/get-started/node.md) | Azure DevOps Services extension | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) | [VSS Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk) | [sample walk through](../extend/develop/add-dashboard-widget.md) |

> [!NOTE]
> You can find more information on authentication on our [authentication guidance page](./get-started/authentication/authentication-guidance.md)

### Assemble the request

::: moniker range="azure-devops"

For Azure DevOps Services, *instance* is `dev.azure.com/{organization}` and *collection* is `DefaultCollection`, so the pattern looks like the following example:

```
VERB https://dev.azure.com/{organization}/_apis[/{area}]/{resource}?api-version={version}
```

For example, here's how to get a list of projects in an organization.

```dos
curl -u {username}[:{personalaccesstoken}] https://dev.azure.com/{organization}/_apis/projects?api-version=2.0
```

If you wish to provide the personal access token through an HTTP header, you must first convert it to a Base64 string (the following example shows how to convert to Base64 using C#).  The resulting string can then be provided as an HTTP header in the format:

```http
Authorization: Basic BASE64PATSTRING
``` 

Here it is in C# using the [HttpClient class](/previous-versions/visualstudio/hh193681(v=vs.118)).

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


Most samples on this site use Personal Access Tokens (PATs), as they're a compact example for authenticating with the service. However, there are different kinds of authentication mechanisms available for Azure DevOps Services including Microsoft Authentication Library, OAuth, and Session Tokens.  Refer to the [Authentication](./get-started/authentication/authentication-guidance.md) section for guidance on which one is best suited for your scenario.

::: moniker-end


::: moniker range="< azure-devops"

For Azure DevOps Server, `instance` is `{server:port}` and by default the port is 8080.
The default collection is `DefaultCollection`, but can be any collection.

Here's how to get a list of projects:

```dos
curl -u {username}[:{personalaccesstoken}] https://{server}:8080/DefaultCollection/_apis/projects?api-version=2.0
```

The previously listed examples use personal access tokens, which requires that you [create a personal access token](../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

## Process the response

You should get a response like the following example.

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

The response is [JSON](https://json.org/). That's generally what you'll get back from the REST APIs, although there are a few exceptions,
like [Git blobs](/previous-versions/azure/devops/integrate/previous-apis/git/blobs).

::: moniker-end

Find the resources you need for [API areas](/previous-versions/azure/devops/integrate/previous-apis/overview), like [work item tracking](/previous-versions/azure/devops/integrate/previous-apis/wit/overview)
or [Git](/previous-versions/azure/devops/integrate/previous-apis/git/overview).

## Related content

* Check out the [Integrate documentation](./index.md) for REST API samples and use cases
    * [Authentication guidance](./get-started/authentication/authentication-guidance.md)
    * [Samples](./get-started/rest/samples.md)
* Discover the [.NET Client Libraries](./concepts/dotnet-client-libraries.md) for these REST APIs
    * [Samples](./get-started/client-libraries/samples.md)
