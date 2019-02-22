---
title: REST API documentation for Team Foundation Server 2015, 2017, 2018 (RTW and Update 1)
description: Overview of REST APIs and their references for Team Foundation Server.
ms.assetid: 5C49CA02-A8C1-4B8D-AE52-B955FAFC7B06
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# REST API Overview for TFS 2015, 2017, and 2018 (RTW and Update 1)

The Team Foundation Server APIs are based on REST, JSON and service hooks - all standard web technologies broadly supported in the industry.

> [!NOTE]
> The REST APIs documented here are for older versions of the APIs (TFS 2015 up to TFS 2018 Update 1). The newest versions can be found in the [Azure DevOps Services REST API documentation](/rest/api/vsts). 

This article walks you through:

- The basic components of a REST API request/response pair.
- Overviews of creating and sending a REST request, and handling the response.

## Components of a REST API request/response pair

A REST API request/response pair can be separated into five components:

1. The **request URI**, in the following form: `VERB https://{server:port}/tfs[/{collection}[/{team-project}]/_apis[/{area}]/{resource}?api-version={version}`
    * *collection*: The name of the collection, like `DefaultCollection`.
    * *resource path*: The collection should be followed by `_apis/{area}/{resource}`. For example, `_apis/wit/workitems`.
    * *api-version*: Every API request should include an api-version to avoid having your app or service break as APIs evolve. api-versions are in the following format: `{major}.{minor}[-{stage}[.{resource-version}]]`, for example:
        * `api-version=1.0`
        * `api-version=1.2-preview`
        * `api-version=2.0-preview.1`

    > Note: *area* and *team-project* are optional, depending on the API request. Check out the [TFS to REST API version mapping matrix](#api-and-tfs-version-mapping) below to find which REST API versions apply to your version of TFS.

2. HTTP **request message header** fields:
    * A required [HTTP method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html) (also known as an operation or verb), which tells the service what type of operation you are requesting. Azure REST APIs support GET, HEAD, PUT, POST, and PATCH methods.
    * Optional additional header fields, as required by the specified URI and HTTP method. For example, an Authorization header that provides a bearer token containing client authorization information for the request.
3. Optional HTTP **request message body** fields, to support the URI and HTTP operation. For example, POST operations contain MIME-encoded objects that are passed as complex parameters. 
    * For POST or PUT operations, the MIME-encoding type for the body should be specified in the Content-type request header as well. Some services require you to use a specific MIME type, such as `application/json`.
4. HTTP **response message header** fields:
    * An [HTTP status code](https://www.w3.org/Protocols/HTTP/HTRESP.html), ranging from 2xx success codes to 4xx or 5xx error codes. Alternatively, a service-defined status code may be returned, as indicated in the API documentation.
    * Optional additional header fields, as required to support the request's response, such as a `Content-type` response header.
5. Optional HTTP **response message body** fields:
    * MIME-encoded response objects may be returned in the HTTP response body, such as a response from a GET method that is returning data. Typically, these objects are returned in a structured format such as JSON or XML, as indicated by the `Content-type` response header. For example, when you request an access token from Azure AD, it will be returned in the response body as the `access_token` element, one of several name/value paired objects in a data collection. In this example, a response header of `Content-Type: application/json` is also included.


## Create the request

### Authenticate 

There are many ways to authenticate your application or service with Team Services or TFS. The following table is an excellent way to decide which method is the best for you:

| Type of application | Description | example |Authentication mechanism | Code samples |
|---------------------|-------------|---------|-------------------------|--------|
| Interactive client-side  | GUI based client side application | Windows app enumerating bugs for a user | [Active Directory authentication library (ADAL)](https://docs.microsoft.com/azure/active-directory/develop/active-directory-authentication-libraries) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ManagedClientConsoleAppSample) |
| Interactive Javascript | GUI based Javascript application | AngularJS single page app displaying work items for a user | [ADAL](https://docs.microsoft.com/azure/active-directory/develop/active-directory-authentication-libraries) | sample (coming soon) |
| Non-interactive client-side | Headless text only client side application | Console app displaying all bugs assigned to a user | [Device Profile](https://azure.microsoft.com/resources/samples/active-directory-dotnet-deviceprofile/?v=17.23h) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/DeviceProfileSample) |
| Interactive web | GUI based web application | Custom Web dashboard displaying build summaries |[OAuth](https://docs.microsoft.com/azure/devops/integrate/get-started/authentication/oauth) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/OAuthWebSample) |
| TFS application | TFS app using the Client OM library | TFS extension displaying team bug dashboards | [Client Libraries](https://docs.microsoft.com/azure/devops/integrate/concepts/dotnet-client-libraries) | [sample](https://github.com/Microsoft/vsts-auth-samples/tree/master/ClientLibraryConsoleAppSample) |
| [TFS Extension](https://www.visualstudio.com/docs/integrate/extensions/get-started/node#files) | TFS extension | [Agile Cards](https://marketplace.visualstudio.com/items?itemName=spartez.agile-cards) | [VSS Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk) | [sample walkthrough](https://www.visualstudio.com/docs/integrate/extensions/develop/add-dashboard-widget) |

> **Note:** You can find more information on authentication on our [authentication guidance page](https://docs.microsoft.com/azure/devops/integrate/get-started/authentication/authentication-guidance).

### Assemble the request

For TFS, `instance` is `{server:port}/tfs` and by default the port is 8080. The default collection is `DefaultCollection`, but can be any collection.

Here's how to get a list of team projects from TFS using the default port and collection.

```dos
curl -u {username}[:{personalaccesstoken}] https://{server}:8080/tfs/DefaultCollection/_apis/projects?api-version=2.0
```

The examples above use personal access tokens, which requires that you [create a personal access token](https://docs.microsoft.com/azure/devops/integrate/get-started/authentication/pats).

## Process the response

You should get a response like this.

```json
{
    "value": [
        {
            "id": "eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "name": "Fabrikam-Fiber-TFVC",
            "url": "https: //fabrikam-fiber-inc:8080/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1",
            "description": "TeamFoundationVersionControlprojects",
            "collection": {
                "id": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "name": "DefaultCollection",
                "url": "https: //fabrikam-fiber-inc:8080/_apis/projectCollections/d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "collectionUrl": "https: //fabrikam-fiber-inc:8080/DefaultCollection"
            },
            "defaultTeam": {
                "id": "66df9be7-3586-467b-9c5f-425b29afedfd",
                "name": "Fabrikam-Fiber-TFVCTeam",
                "url": "https: //fabrikam-fiber-inc:8080/DefaultCollection/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/66df9be7-3586-467b-9c5f-425b29afedfd"
            }
        },
        {
            "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "name": "Fabrikam-Fiber-Git",
            "url": "https: //fabrikam-fiber-inc:8080/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
            "description": "Gitprojects",
            "collection": {
                "id": "d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "name": "DefaultCollection",
                "url": "https: //fabrikam-fiber-inc:8080/_apis/projectCollections/d81542e4-cdfa-4333-b082-1ae2d6c3ad16",
                "collectionUrl": "https: //fabrikam-fiber-inc:8080/DefaultCollection"
            },
            "defaultTeam": {
                "id": "8bd35c5e-30bb-4834-a0c4-d576ce1b8df7",
                "name": "Fabrikam-Fiber-GitTeam",
                "url": "https: //fabrikam-fiber-inc:8080/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/teams/8bd35c5e-30bb-4834-a0c4-d576ce1b8df7"
            }
        }
    ],
    "count": 2
}
```

The response is [JSON](http://json.org/). That's generally what you'll get back from the REST APIs although there are a few exceptions,
like [Git blobs](git/blobs.md).

Now you should be able to look around the specific API areas like [work item tracking](wit/overview.md) or [Git](git/overview.md) and get to the resources that you need. Keep reading to learn more about the general patterns that are used in these APIs.

## API and TFS version mapping

Below you'll find a quick mapping of REST API versions and their corresponding TFS releases. All API versions will work on the server version mentioned as well as later versions.

| TFS Version           | REST API Version  |
|-----------------------|-------------------|
| TFS 2017 Update 2     | 3.2               |
| TFS 2017 Update 1     | 3.1               |
| TFS 2017 RTW          | 3.0               |
| TFS 2015 Update 3     | 2.3               |
| TFS 2015 Update 2     | 2.2               |
| TFS 2015 Update 1     | 2.1               |
| TFS 2015 RTW          | 2.0               |


## Full list of REST APIs
If you didn't find what you were looking for in the table above, or if you're just doing some research, below is the full list of APIs:

<table class="table table-striped table-bordered">
<thead class="thead-inverse">
<tr>
<th class="col-md-2">API</th>
<th class="col-md-6">Description</th>
<th class="col-md-5">Common Uses</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Build (1.0)](./xamlbuild/overview.md)</td>
<td>In Team Services and TFS, a build request uses a build definition to add a new build to a build queue, and completed builds are assigned a build
quality. With the Build (1.0) API, you can access each of these components. --NOTE:-- Build (2.0) is the updated and preferred API for these capabilities.</td>
<td>
<ul><li>Start a build</li>
<li>Get a build</li>
<li>Set build quality</li></ul>
</td>
</tr>
<tr>
<td>[Build (2.0)](./build/overview.md) </td>
<td>The Build (2.0) APIs provide numerous ways to utilize builds from Team Services or TFS in your extensions. 
Whether you're kicking a build off, retrieving a build, or just adding a tag, you'll find what you need here.</td>
<td>
<ul><li>Start a build</li>
<li>Get a build</li>
<li>Tag a build</li></ul>
</td>
</tr>
<tr>
<td>[Code policy](./policy/overview.md)</td>
<td>Team Services and TFS offer code policy functionality to automatically ensure steps are being taken before pull requests are completed. This API gives
you access to define policies for your projects.</td>
<td>
<ul><li>Get a list of policy configurations</li></ul>
</td>
</tr>
<tr>
<td>[Dashboards and widgets](./dashboard/overview.md)</td>
<td>You can utilize the Dashboards and Widgets API to add a widget or access a widget on a dashboard. This is helpful if your extension or integration could benefit
from having a physical representation.</td>
<td>
<ul><li>Create a new dashboard</li>
<li>Add a widget to a dashboard</li></ul>
</td>
</tr>
<tr>
<td>[Git](./git/overview.md)</td>
<td>With the Git API, you have access to commits, pull requests, repositories, etc.</td>
<td>
<ul><li>Get, add, or delete team repositories</li>
<li>Get recent changes</li>
<li>See who pushed commits to a team repository</li></ul>
</td>
</tr>
<tr>
<td>[Packaging](./packaging/overview.md)</td>
<td>*Packages* are bundles of DLLs, resources, and other software components combined with metadata. Common package formats include: NuGet, npm, and Maven.
*Feeds* contain packages and enforce *permissions* about who can access the packages. This API gives you access to feeds, packages, and permissions.</td>
<td>
<ul><li>Get a list of feeds</li>
<li>Create a feed</li></ul>
</td>
</tr>
<tr>
<td>[Projects and teams](./tfs/overview.md)</td>
<td>Team Services accounts host projects, and each project has one or more teams that contribute to it. Get access to both with the Projects and Teams API.</td>
<td>
<ul><li>Get a list of projects</li>
<li>Get a project's source control provider</li>
<li>Get the teams in a project</li>
<li>Create a project</li></ul>
</td>
</tr>
<tr>
<td>[Queues](./queues/overview.md)</td>
<td>An agent queue provides access to a pool of agents. When you create a build or release definition, you specify which queue it uses. 
Queues are scoped to your project collection, so you can share them across Azure Pipelines definitions in multiple projects.</td>
<td>
<ul><li>Get a list of queues</li>
<li>Get a single queue</li></ul>
</td>
</tr>
<tr>
<td>[Release (preview)](./rm/overview.md)</td>
<td>Releases reference release definitions to deploy an application compromising of one or more artifacts. Access releases, release definitions, and approvals with 
the Release API.</td>
<td>
<ul><li>Create a release definition</li>
<li>Start a release</li>
<li>Get release details</li></ul>
</td>
</tr>
<tr>
<td>[Security](./security/overview.md)</td>
<td>Use the Security API to set, revoke and evaluate permissions. </td>
<td>
<ul><li>Get a list of security namespaces</li>
<li>Get, add, or delete access control lists (ACLs)</li>
<li>Update access control entries (ACEs)</li>
<li>Evaluate permissions</li></ul>
</td>
</tr>
<tr>
<td>[Service endpoints](./endpoints/overview.md)</td>
<td>Service endpoints are a way for Team Services to connect to external systems or services. They are a bundle of properties securely stored by Team Services.
With the service endpoints API, you can access these endpoints along with their permissions.</td>
<td>
<ul><li>Get a list of service endpoints</li>
<li>Get a single service endpoint</li>
<li>Create a service endpoint</li></ul>
</td>
</tr>
<tr>
<td>[Service hooks](./hooks/overview.md)</td>
<td>Utilize service hooks to create subscriptions to events, and take actions based on those events.</td>
<td>
<ul><li>Set up a subscription</li>
<li>Get a list of publishers</li></ul>
</td>
</tr>
<tr>
<td>[Team rooms](./chat/overview.md)</td>
<td>This API gives you access to team rooms. Team rooms are effectively chat rooms where users can post messages to one another.</td>
<td>
<ul><li>Get a list of team rooms</li>
<li>Create a room</li>
<li>Join a room</li>
<li>Post a message to a room</li></ul>
</td>
</tr>
<tr>
<td>[Test management](./test/overview.md)</td>
<td>Get access to your test cases, test suites, and test plans. Also get results from a test run.</td>
<td>
<ul><li>Create a test plan</li>
<li>Create a test suite with test cases</li>
<li>Get results from a test run</li></ul>
</td>
</tr>
<tr>
<td>[Version control](./tfvc/overview.md)</td>
<td>This API is straight-forward and gives you access to the items and types related to version control within Team Services and TFS.</td>
<td>
<ul><li>Get recent changes</li>
<li>Download a file</li>
<li>Get item metadata</li></ul>
</td>
</tr>
<tr>
<td>[Work (Agile)](./work/overview.md)</td>
<td>Use the Work API to access all sort of different fields and items related to agile development.</td>
<td>
<ul><li>Add a column to a board</li>
<li>Update board row settings</li>
<li>Update team settings</li></ul>
</td>
</tr>
<tr>
<td>[Work item tracking](./wit/overview.md)</td>
<td>Work item tracking and management is a large part of a successful DevOps platform. with the Work Item Tracking (WIT) API, you have full access to the work 
items that your team uses every day.</td>
<td>
<ul><li>Get work items using a query</li>
<li>Update work items' fields</li>
<li>Link two work items</li>
<li>Attach a file to a work item</li></ul>
</td>
</tr>
</tbody>
</table>

## Related Content

* Check out the [Integrate documentation](https://docs.microsoft.com/azure/devops/integrate/) for REST API samples and use cases.
    * [Authentication guidance](https://docs.microsoft.com/azure/devops/integrate/get-started/authentication/authentication-guidance)
    * [Samples](https://docs.microsoft.com/azure/devops/integrate/get-started/client-libraries/samples)

## Client Libraries
* Discover the client libraries for these REST APIs.
    * [.Net](https://docs.microsoft.com/azure/devops/integrate/concepts/dotnet-client-libraries)
    * [Node.js](https://github.com/Microsoft/vsts-node-api)
    * [Python](https://github.com/Microsoft/vsts-python-api)
    * [Swagger 2.0](https://github.com/MicrosoftDocs/vsts-rest-api-specs)
    * [Web Extensions SDK](https://github.com/Microsoft/vss-web-extension-sdk)





























