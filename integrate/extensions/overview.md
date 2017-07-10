---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Developing extensions for Visual Studio Team Services and Team Foundation Server
description: Overview of creating extensions for Visual Studio Team Services
ms.assetid: c9b97ad7-ffd8-4657-8322-74f764eec5c9
ms.manager: douge
ms.author: elbatk
ms.date: 08/23/2016
---

# Overview of integrating with Visual Studio Team Services

>[!NOTE]
> This section covers developing custom extensions and service-hooks, to find information on installing extensions from the Marketplace, or buying Visual Studio Subscriptions, 
> visit the [Marketplace documentation](../../docs/marketplace/extend-overview.md).


## Ways to integrate with Team Services

<div name="row">
    <div class ="col-sm-6 col-md-4 col-lg-4" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px; min-height:220px;">
            <h4>Integrate with custom apps</h4>
            <div style="padding-top: 10px; padding-left:6px">
                <div style="padding:5px">
                    Use our REST APIs to interact with Team Services directly in their custom app or service.
                </div>
                <div class="row" style="padding-top:10px; text-align:center">
                    <a role="button" style="text-align: center; background-color: #e6e6e6; min-height: 40px; padding: 9px 20px 9px 20px; display: inline-block; margin-top: 3px; color: black;" href="#customApps">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div class ="col-sm-6 col-md-4 col-lg-4" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px; min-height:220px;">
            <h4>Create custom extensions</h4>
            <div style="padding-top: 10px; padding-left:6px">
                <div style="padding:5px">
                    Create custom extensions to transform your Team Services look and experience.
                </div>
                <div class="row" style="padding-top:10px; text-align:center">
                    <a role="button" style="text-align: center; background-color: #e6e6e6; min-height: 40px; padding: 9px 20px 9px 20px; display: inline-block; margin-top: 3px; color: black;" href="#extensions">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div class ="col-sm-6 col-md-4 col-lg-4" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px; min-height:220px;">
            <h4>Integrate with other services</h4>
                        <div style="padding-top: 10px; padding-left:6px">
                <div style="padding:5px">
                    Integrate your Team Services with popular services like Slack or Jenkins.
                </div>
                <div class="row" style="padding-top:10px; text-align:center">
                    <a role="button" style="text-align: center; background-color: #e6e6e6; min-height: 40px; padding: 9px 20px 9px 20px; display: inline-block; margin-top: 3px; color: black;" href="#thirdParty">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>

<a name ="customApps"/>

## Integrating with custom apps

### REST APIs

You can leverage our REST APIs to interact with all areas of Team Services or TFS, including: 

<div name="row">
    <div class ="col-sm-1 col-md-1 col-lg-1" style="padding:10px;">
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px; min-height:85px;">
            <div class="index-button" style="padding:5px; text-align:center">
                <a href="../api/shared/overview.md">
                    <h5>Accounts and Profiles</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:85px;">
            <div class="index-button" style="padding-top:15px; text-align:center">
                <a href="../api/build/overview.md">
                    <h5>Builds</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:85px;">
            <div class="index-button" style="padding-top:15px; text-align:center">
                <a href="../api/git/overview.md">
                    <h5>Git</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:85px;">
            <div class="index-button" style="padding:5px; text-align:center">
                <a href="../api/tfs/overview.md">
                    <h5>Projects and Teams</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-2 col-lg-2" style="padding:10px;">
        <div style="background-color: #f6f6f6; border: solid 1px #E6E6E6; padding:10px;min-height:85px;">
            <div class="index-button" style="padding-top:15px; text-align:center">
                <a href="../api/wit/overview.md">
                    <h5>Work Items</h5>
                </a>
            </div>
        </div>
    </div>
    <div class ="col-sm-3 col-md-1 col-lg-1" style="padding:10px;">
    </div>
</div>

<div style="clear:both"></div>

You can check out the [REST API overview page](../api/overview.md) to see all of the APIs, how to use them, and samples.

### .NET client libraries

There are .NET client libraries available for .NET developers building Windows apps and services that integrate with Team Services. 

Explore the [.NET client library overview](../get-started/client-libraries/dotnet.md) for the different packages and samples.

<a name ="extensions"/>

## Create custom extensions


### What are extensions?

Extensions are simple add-ons that can be used to customize and extend your DevOps experience with Team Services. 
They are written with standard technologies - HTML, JavaScript, CSS - and can be developed using your preferred dev tools.
They utilize our [RESTful API Library](../api/overview.md) in order to easily interact with Team Services and applications/services.
The [Visual Studio Marketplace](https://marketplace.visualstudio.com/VSTS) is where extensions are published, 
where they can be kept privately for you and your team or shared with the millions of developers currently using Team Services. 

### What makes up an extension?
<div align="center" style="padding-top:15px">
<img src="./_img/extension-components.png" style="padding-bottom:20px">
</div>

- A [JSON manifest file](./develop/manifest.md) contains basic info about the extension.
- Discovery assets - the markdown and images that make up your extension's overview and aesthetics in the marketplace. 
- Static files that contain the logic of your extension, including HTML, JS, and CSS files. Static files are only applicable to contribution-based extensions.

All of these are bundled up to make a Team Extensions Service Package (.vsix file) that is published to the marketplace. From the marketplace,
extensions can be installed directly by Team Services users.


### What can you do with extensions?

There are dozens of places where you can add to the Team Services user interface, and we're adding more every sprint. Learn about all of the places where you can add a hub in the [contributions reference](./reference/targets/overview.md).

- [Provide new build and release tasks](./develop/add-build-task.md) that teams can use in their builds.
- Use [dashboard widgets](./develop/add-dashboard-widget.md) to get custom views within Team Services. 
- Extend the [work item form](./develop/add-workitem-extension.md) with new tabs, sections, and actions.
- Create [your own hub](./develop/add-hub.md) to embed new capabilities within our Agile, code, build, and test experiences. 
- Develop [actions](./develop/add-action.md) that can be run on hubs, whether they're ours or ones you've created. 

<div name="row" style="padding-top:15px">
    <div style="vertical-align:top;display:inline-block;float:left;width:33%">
        <div class="index-button" align="center" style="padding-right:2px">
        <a href="./get-started/node.md"><button style="background-color:#f6f6f6;border:solid 2px #E6E6E6;padding:15px;font-size:16px;margin:4px;cursor:pointer;border-radius:8px;">Build your first extension</button></a>
        </div>
    </div>
    <div style="vertical-align:top;display:inline-block;float:left;width:33%">
        <div class="index-button" align="center" style="padding-left:2px;padding-right:2px">
        <a href="./get-started/tutorials.md"><button style="background-color:#f6f6f6;border:solid 2px #E6E6E6;padding:15px;font-size:16px;margin:4px;cursor:pointer;border-radius:8px;">Find extension tutorials</button></a>
        </div>
    </div>
    <div style="vertical-align:top;display:inline-block;float:left;width:33%">
        <div class="index-button" align="center" style="padding-left:2px">
        <a href="./develop/samples-overview.md"><button style="background-color:#f6f6f6;border:solid 2px #E6E6E6;padding:15px;font-size:16px;margin:4px;cursor:pointer;border-radius:8px;">Browse sample extensions</button></a>
        </div>
    </div>
</div>

<div style="clear:both"></div>

<a name ="thirdParty"/>

## Integrate with third party services

Integrating with many third party services such as Slack, Trello, and Jenkins is done with **service hooks** and is configured in two easy steps:

1. Create a subscription in Team Services
2. Set up the integration with your external service of choice

### Available services

<div name="row">
<div class ="col-sm-2 col-md-2 col-lg-2">
</div>
<div class ="col-sm-8 col-md-8 col-lg-8">
<table class="table table-striped" style="margin-left:auto;margin-right:auto">
<thead class="thead-inverse">
    <tr>
        <th>Build and release</th>
        <th>Collaborate</th>
		<th>Customer support</th>
		<th>Plan and track</th>
		<th>Integrate</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>[AppVeyor](../../docs/marketplace/integrate/service-hooks/services/appveyor.md)</td>
        <td>[Campfire](../../docs/marketplace/integrate/service-hooks/services/campfire.md)</td>
		<td>[UserVoice](../../docs/marketplace/integrate/service-hooks/services/uservoice.md)</td>
		<td>[Trello](../../docs/marketplace/integrate/service-hooks/services/trello.md)</td>
		<td>[Azure Service Bus](../../docs/marketplace/integrate/service-hooks/services/azure-service-bus.md)</td>
    </tr>
	<tr>
		<td>[Bamboo](../../docs/marketplace/integrate/service-hooks/services/bamboo.md)</td>
		<td>[Flowdock](../../docs/marketplace/integrate/service-hooks/services/flowdock.md)</td>
		<td>[Zendesk](../../docs/marketplace/integrate/service-hooks/services/zendesk.md) </td>
		<td></td>
		<td>[Azure Storage](../../docs/marketplace/integrate/service-hooks/services/azure-storage.md)</td>
	</tr>
	<tr>
		<td>[Jenkins](../../docs/marketplace/integrate/service-hooks/services/jenkins.md)</td>
		<td>[HipChat](../../docs/marketplace/integrate/service-hooks/services/hipchat.md)</td>
		<td></td>
		<td></td>
		<td>[Web Hooks](../../docs/marketplace/integrate/service-hooks/services/webhooks.md)</td>
	</tr>
	<tr>
		<td>[MyGet](../../docs/marketplace/integrate/service-hooks/services/myget.md)</td>
		<td>[Hubot](../../docs/marketplace/integrate/service-hooks/services/hubot.md)</td>
		<td></td>
		<td></td>
		<td>[Zapier](../../docs/marketplace/integrate/service-hooks/services/zapier.md)</td>
	</tr>
	<tr>
		<td></td>
		<td>[Slack](../../docs/marketplace/integrate/service-hooks/services/slack.md)</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</tbody>
</table>
</div>
<div class ="col-sm-2 col-md-2 col-lg-2">
</div>
</div>

<div style="clear:both"></div>

Find out more about integrating with third party services on our [service hooks documentation page](../../docs/marketplace/integrate/service-hooks/get-started.md).

