---
title: Visual Studio Online Updates - May 12
description: VSTS release notes for May 12 2014
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: c2b37732-0483-4345-9832-b0cda35b8c5e
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Visual Studio Online updates – May 12

##Integrate with Visual Studio Online

Today we are releasing a preview of a new way to extend and integrate with Visual Studio Online using REST, OAuth, and service hooks. With this deployment you can:

-Integrate with many of the most popular cloud services; such as Trello, Campfire, GitHub, UserVoice, Zendesk and many more
-Develop custom apps and services that extend the power of Visual Studio Online

You can find more information about the types of scenarios now possible at our [Visual Studio Online Integration](https://visualstudio.microsoft.com/integrate/explore/explore-vso-vsi) hub.

###REST APIs

Our JSON REST APIs enable a lightweight way to work with Visual Studio Online from virtually any device, platform, or technology stack, including Android, iOS, Node.js, .NET, and others. You can create and query work items, queue a build, get recent team room messages, access source code, and accomplish almost any team or code management task.

[Learn the basics](/rest/api/vsts/?view=vsts-rest-4.1)

[Explore the APIs](/azure/devops/integrate/)

###Authorization

With OAuth 2.0 support in Visual Studio Online, now you can safely access information and perform operations on Visual Studio Online on behalf of a user. OAuth enables users to safely grant your app or service access to their resources.

[Authorizing with OAuth](/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops)

[Registering your app](https://app.vssps.visualstudio.com/app/register?_ga=1.9631093.1191187031.1470846728)

###Service Hooks

Service hooks let your app or service get notified instantly when an event happens in Visual Studio Online. With service hooks your app or service can avoid continuously polling to check for changes, such as completed builds, commits/checkins, or work item changes. This enables powerful integration scenarios where Visual Studio online can inform another service of a change, enabling the use of both services together.

There are three options for receiving events:

1.Use a generic web hook.
2.Use one of the service hooks built for a specific service. An initial set are provided as part of this release. More will be added over time and we will be enabling third-party service hook submission in the future.
3.Use [Zapier](http://www.zapier.com/) to link a Visual Studio Online service hook to another service that Zapier supports. Look for Visual Studio Online in Zapier’s service list.
Services hooks can be found as a new hub in project administration.

![Selecting a target service](_img/5_12_01.png)

[Learn more](https://visualstudio.microsoft.com/get-started/integrate/integrating-with-service-hooks-vs)

[Creating subscriptions programmatically](/azure/devops/integrate/)

[Supported events](/azure/devops/service-hooks/events?view=azure-devops)

###Extensibility Preview

re anxious to get your feedback and officially release them. While in preview, the REST APIs may change. You can protect yourself by ensuring you pass the appropriate version as part of your requests. As these features evolve in preview, you will have time to migrate forward. For more information, see [Get started with the REST APIs](https://msdn.microsoft.com/library/bb165336.aspx).

Give it a try. We can’t wait to see what you come up with.

##Service Migration with OpsHub

Since we launched Visual Studio Online, many of our on-premises Team Foundation Server customers who have loved used TFS have wanted to start using Visual Studio Online. One of the things customers have asked us to help them with for that transition is to be able to migrate their work items, test cases, test results, and source code files in version control repositories. Today, we’re happy to announce a free migration utility that we have partnered with OpsHub to create that will help you with a one-way migration of the most commonly requested artifacts in TFS to bring them to your Visual Studio Online account. You can now find it on the [Visual Studio Gallery](https://aka.ms/OpsHubVSOMigrationUtility):

![Service Migration Utility](_img/5_12_02.png)

The migration utility will take you through a step-by-step process for mapping your team projects in Team Foundation Server on-premises to Visual Studio Online team projects. Team projects using standard process templates from TFS 2010, TFS 2012, and TFS 2013 are supported with this free migration utility, and you do not need to have upgraded the process templates used by the team projects or upgrade to the latest version of TFS 2013 to use the utility. Once you are finished migrating to Visual Studio Online, you’ll be on our latest version, able to take advantage of all of the latest features automatically!

We suggest you test out your migration before having your team come on board. You’ll want to get a sense of how long your migration will take, see whether you run into any issues to be addressed, and give yourself a chance to inspect the test migration after it is finished. You can always [delete the team project](http://blogs.msdn.com/b/buckh/archive/2013/09/13/how-to-delete-a-team-project-from-team-foundation-service.aspx) in Visual Studio Online and run the migration utility as many times as you need to until you are satisfied with your migration plan.

For those with more advanced scenarios, such as integrating or synchronizing TFS and Visual Studio Online with other devops tools (HP devops/Quality Center, IBM Rational, Atlassian Jira, etc.) and enable customized business rules during the migration with customized process templates, OpsHub also has a commercially available offering to help: the [OpsHub Integration Platform](https://aka.ms/OpsHub). Also, keep in mind some data will ultimately not be migrated with this free utility, such as builds, team room history, lab management environments, team and personal favorites, work item queries, alerts, security and permissions, team settings, and other types of data. You’ll want to keep backup copies of your Team Foundation Server databases around in case you need data that isn’t migrated.

If you have any additional questions, the OpsHub team will be monitoring for questions marked with the OpsHub and visual-studio-online tags on [StackOverflow](http://stackoverflow.com/questions/tagged/visual-studio-online)!

Thanks,

Will Smythe










