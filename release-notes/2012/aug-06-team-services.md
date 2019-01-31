---
title: Team Foundation Service updates - Aug 6
description: VSTS release notes for August 6 2012
ms.assetid: 23fc5dd7-6fc3-4e95-b518-9ae63ec8fbcd
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Aug 6

Welcome to our Team Foundation Service news feed. Bookmark this page because it’s going to be a great way to learn about happenings on the service. Every sprint (every 3 weeks) and sometimes more often we’ll update this page with information on the latest service updates – including important bug fixes and new features.

As you’ve probably [seen](http://blogs.msdn.com/b/jasonz/archive/2012/08/01/final-build-for-vs-2012-availability-and-launch-dates-ahead.aspx), we’ve just recently released VS/TFS 2012 and .NET 4.5 to manufacturing. We’re pretty excited to be done and handing it off to production. Over the past few months, we’ve turned more and more of our attention to advancing our service as our work on TFS 2012 has wound down. The arrival rate of new online features will continue to accelerate over the next couple of months. This sprint (sprint 34) we have a few nice improvements to share (including this new “News” section) but we’ve got a few goodies we’re saving up too. Stay tuned to see some super cool stuff become available.

The “big” improvement in this update is a highly requested new feature on the task board. For a while now, people have been asking to be able to use the task board drag and drop to be able to move tasks between people and user stories. Today we deployed that capability. In the screenshot below I am dragging the “Add color to the UI” task from abjork to bharry_msft. At the same time I am dragging it from To Do to In Progress. This one drag operation will both assign the task to me and change its state to In Progress. The same drag operations work if you are pivoted by user story rather than team member. It’s a handy productivity enhancement for stand-ups.

![Drag and assign a task in one step](_img/8_6_01.png)

We’ve also improved the Azure Continuous Deployment feature we released in June. You now get a good summary of your app deployment steps in the build report. This makes it easier to get a holistic view of the state of your build/deployment. This summary is for a cloud app. You get less detail for a web site but you’ll still get something.

![Build report with deployment summary](_img/8_6_02.png)

We’ve also made a variety of updates to the welcome site content – a new [article on Code Review](/azure/devops/tfvc/get-code-reviewed-vs?view=azure-devops) and updates to all the screen shots to reflect some of the styling changes we’ve made in the past couple of months.

Lastly, we’ve updated our service status page to contain more information about expected maintenance windows, service interruptions, etc. You can still go to the service blog if you like but this brings it all to the main site and saves you the click to the blog.

![Service status page](_img/8_6_03.png)

As I said at the beginning a few simple improvements that just make the experience better. Stay tuned for news on some more significant enhancements coming soon.

Thanks,

Brian Harry