---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Slack with Azure DevOps Services
description: Use Slack with your Azure DevOps Services organization
ms.assetid: ea948249-1053-4971-99b9-ffa820c03803
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Slack with Azure DevOps Services

Post messages to [Slack](https://slack.com/) in response to events in your Azure DevOps Services organization,
like completed builds, code changes, pull requests, releases, work items changes, and more.

## Create the Slack integration

1. From any page on your team's Slack (```https://[team].slack.com/...```), click your account name in the left window pane
to open up the menu, and find **Apps and integrations**:
<img alt="Integrations link on the account home page" src="./_img/slack/slack-integrations.png" style="border: 1px solid #CCCCCC; width:35%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Search for and click the Azure DevOps Services integration:
<img alt="Azure DevOps Services link" src="./_img/slack/vso.png" style="border: 1px solid #CCCCCC; width:65%; height:auto; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. On the Azure DevOps Services integration page, click **Install**.
1. Choose a channel to have notifications posted to from the dropdown and click **Add Visual Studio Integration**. 
1. Scroll down the page and copy the web hook URL to use when you create the service hook subscription in your organization.
<img alt="Web hook URL in the integration settings section" src="./_img/slack/webhook-url.png" style="border: 1px solid #CCCCCC; width:70%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

## Create a service hook subscription in your organization

0. Go to your Azure DevOps Services project service hooks page: `https://dev.azure.com/{orgName}/{project_name}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Project administration page](./_img/add-service-hook.png)

	Click **Create Subscription**.
    
1. Choose the types of events you want to appear in your Slack channel.
> You can filter each of the triggers in specific ways.
> For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
> the target branch it applies to, and the team members that are required or invited to review the request.

1. Paste the web hook URL from the Slack integration that you created and click Finish.
<img alt="Action dialog box with the web hook URL" src="./_img/slack/action.png" style="border: 1px solid #CCCCCC; width:60%; height:auto; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Now, when the event you configured happens in your project, a notification will appear in your team's Slack channel.
<img alt="General channel with a real pull request notification" src="./_img/slack/completed-build-in-slack.png" style="border: 1px solid #CCCCCC; width:70%; height:auto; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

## Pricing
Azure DevOps Services doesn't charge for the framework for integrating with external services. Check out the specific service's site
for pricing related to their services. 

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

####Q: Why don't I have the pull request events as an option when I configure my trigger?

A: Pull requests are only available with projects that use Git.
If your project uses TFVC, pull event triggers aren't available,
and your code event is called "Code checked in" instead of "Code pushed".

####Q: How can I get multiple events to show up in my Slack channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Slack channel,
create two additional subscriptions.



<!-- ENDSECTION -->
