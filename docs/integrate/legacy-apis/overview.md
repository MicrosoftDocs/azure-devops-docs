---
title: REST API Overview for Visual Studio Team Services and Team Foundation Server
description: Overview of REST APIs and their references for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 5C49CA02-A8C1-4B8D-AE52-B955FAFC7B06
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# REST API Overview for Visual Studio Team Services and Team Foundation Server

The Visual Studio Team Services and Team Foundation Server APIs are based on REST, OAuth, Json and service hooks -
all standard web technologies broadly supported in the industry.

If you're new to REST APIs, take a look at the information on [getting started](../get-started/rest/basics.md) with these APIs,
if you haven't already seen it. 

## Common REST APIs and Usage

<table class="table table-striped">
<thead class="thead-inverse">
    <tr>
        <th>What's your goal?</th>
        <th>APIs to use:</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <ul><li>Access user accounts or profiles</li></ul>
        </td>
        <td>[Accounts and Profiles](./shared/overview.md)</td>
    </tr>
    <tr>
        <td>
            <ul><li>Automatically kick off a build</li>
            <li>Get details from a completed build</li>
            <li>Add a tag to a build</li></ul>
        </td>
        <td>[Build (2.0)](./build/overview.md)</td>
    </tr>
    <tr>
        <td>
        <ul><li>Add a widget to a dashboard</li></ul>
        </td>
        <td>[Widgets](./dashboard/widgets.md)</td>
    </tr>
    <tr>
        <td>
            <ul><li>Get Git repositories</li>
            <li>Add status to a commit</li>
            <li>Get details/status for a pull request</li>
            <li>Create a file (push)</li></ul>
        </td>
        <td>[Git](./git/overview.md)</td>
    </tr>
    <tr>
        <td>
            <ul><li>Create a project</li>
            <li>Get a list of projects</li></ul>
        </td>
        <td>[Projects and Teams](./tfs/overview.md)</td>
    </tr>
    <tr>
        <td>
            <ul><li>Get a list of work items</li>
            <li>Create a work item</li>
            <li>Update a work item</li>
            <li>Add a link to a work item</li></ul>
        </td>
        <td>[Work Item Tracking (WIT)](./wit/overview.md)</td>
    </tr>
</tbody>
</table>

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
<td>[Accounts and profiles](./shared/overview.md)</td>
<td>Each person using Visual Studio Team Services has a profile and access to one or more accounts. 
This API gives the developer access to these profiles and accounts.</td>
<td>
<ul><li>Get the authenticated user's profile</li>
<li>Get the list of accounts the user has access to</li></ul> 
</td>
</tr>
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
Whether you're kicking a build off, retreiving a build, or just adding a tag, you'll find what you need here.</td>
<td>
<ul><li>Start a build</li>
<li>Get a build</li>
<li>Tag a build</li></ul>
</td>
</tr>
<tr>
<td>[Cloud load test](./load-test/overview.md)</td>
<td>The Cloud Load Test API provides access to test infrastructure in the cloud to execute web load tests at high scale and reliability.</td>
<td>
<ul><li>Start a test run</li>
<li>Monitor run progress</li></ul>
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
*Feeds* contain packages and enforce *permissions* about who can access the packages. This API gives you accesss to feeds, packages, and permissions.</td>
<td>
<ul><li>Get a list of feeds</li>
<li>Create a feed</li></ul>
</td>
</tr>
<tr>
<td>[Projects and teams](./tfs/overview.md)</td>
<td>Team Services accounts host projects, and each project has one or more teams that contibute to it. Get access to both with the Projects and Teams API.</td>
<td>
<ul><li>Get a list of team projects</li>
<li>Get a project's source control provider</li>
<li>Get the teams in a team project</li>
<li>Create a team project</li></ul>
</td>
</tr>
<tr>
<td>[Queues](./queues/overview.md)</td>
<td>An agent queue provides access to a pool of agents. When you create a build or release definition, you specify which queue it uses. 
Queues are scoped to your team project collection, so you can share them across build and release definitions in multiple team projects.</td>
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
With the Service Endpoints API, you can access these endpoints along with their permissions.</td>
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


































