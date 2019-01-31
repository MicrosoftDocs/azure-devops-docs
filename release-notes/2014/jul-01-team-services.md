---
title: Visual Studio Online Updates - Jul 1
description: VSTS release notes for July 1 2014
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: eba4333e-0b1c-4f8a-9465-842eecb18210
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Visual Studio Online updates – Jul 1

We’re back this week with a few usability improvements for backlogs and a shiny new REST API and service hook for pull requests.

##Hiding work in progress on the backlog

Last year we made a change to the product backlog functionality so that work in progress would remain on the backlog until finished. The change was in response to customer feedback, but unfortunately our fix created a brand-new issue for teams that don’t want to see work in progress. Today’s update gets it right by making the view configurable through a simple switch at the top of the backlog that toggles the display of work in progress on and off. The backlog will persist your last setting, so you can set the configuration that works for you and be done.

![Hiding work in progress on the backlog](_img/7_1_01.png)

##full Screen on the backlog and boards

We’ve heard from many of you that the ability to hide all the chrome in the UI and have full-screen views of the backlog and boards is helpful, especially in scenarios where you’re running a daily standup or viewing large backlogs. Today’s update includes a toggle to enter “full screen mode” for all the pages under the Backlogs hub. Enjoy the screen real estate!

![Full screen view on the backlog](_img/7_1_02.png)

##Move to position on the backlog

And, we’ve implemented a handy new context menu feature that lets you move an item on your backlog directly to the top or to a specific position on the backlog. This is especially nice when dealing with longer backlogs where drag-and-drop isn’t as convenient. Click the small arrow on a selected item in your backlog, or right-click with your mouse to access the new functionality. Along with this change, we removed from the work item forms the actual number that’s used for backlog ordering.

![Move to position on the backlog](_img/7_1_03.png)

##REST APIs and service hook support for pull requests

Finally, you can now create, update, delete, query, and manage reviewers and votes for Pull Requests programmatically using the new [Pull Requests REST APIs](/azure/devops/integrate/). With the addition of service hook event support for pull requests, your applications and services can get notified when pull requests are created or updated. For example, if your team is using a third-party collaboration service like Kato, HipChat, Flowdock, or Campfire, you can configure service hook subscriptions to post important events to that service (such as when a Pull Request is opened against your team’s repository). To learn more about enabling integration between your Visual Studio Online projects and custom and third-party services, see [Integrate with other services](/azure/devops/service-hooks/index?view=azure-devops).

That’s it for this sprint. Let us know how we’re doing on [Twitter](https://twitter.com/VisualStudio) and [UserVoice](https://visualstudio.uservoice.com/forums/330519-vso).

Thanks,

Aaron Bjork






