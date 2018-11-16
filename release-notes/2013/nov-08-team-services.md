---
title: Team Foundation Service updates - Nov 8
description: VSTS release notes for November 08 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 16f98008-1ba7-4b07-ae6b-07490f37822b
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Nov 8

You might be wondering why we’re updating the service today instead of on Monday (our normal deployment). Well, we’ve got some big events happening next week – [https://visualstudio.microsoft.com/](https://visualstudio.microsoft.com/). Because of those events we moved our normal Monday deployment up a few days. On to the good stuff…

##Chart Pinning

This morning we enabled the ability to pin [work item charts](../2013/sep-09-team-services.md) to your team & project home pages. We’re expecting this to be a fan favorite as it allows you a very easy way to provide visibility to key data in your projects. With this change we also took the opportunity to decouple the action of “pinning” something from the concept of a “team favorite”. Pinning is now a completely separate action from adding to team favorites. This change applies to work item queries, source folders, and build definitions. Your home page is now based on pinned items only (don't worry, we migrated all team favorites to pinned items).

![Charts pinned to the team project home page](_img/11_08_01.png)

One thing to note is that we updated our security model so that only team admins can pin and un-pin items.

##Load Test Improvements

If you’re a user of our load test service you’ll be pleased to learn we made an update so that the key performance counters graph is now available for completed runs – instead of only for in progress or active runs. Before today’s change you had to download the load test run report for completed runs and view the graph separately.

![Load test chart](_img/11_08_02.png)

We also updated our service configuration to support load tests with up to 20 agents. Learn how to modify the number of agents for your runs here.

That’s it for today’s update. We’ll have more to talk about next week so don’t forget to check back on Wednesday, Nov 13. As always let us know what you think on [User Voice](https://visualstudio.uservoice.com/forums/330519-vso), the [MSDN Forums](http://social.msdn.microsoft.com/Forums/TFService/threads) and Twitter.

Thanks,

Aaron Bjork

