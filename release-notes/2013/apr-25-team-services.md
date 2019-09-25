---
title: Team Foundation Service updates - Apr 25
description: VSTS release notes for April 25 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: jillfra
ms.assetid: 7696bc78-b73a-40ba-b1db-8c13ff4aa111
ms.date: 06/01/2016
ms.author: glmorale
author: yukom
---

# Team Foundation Service updates - Apr 25

You may have noticed April 15th came and went with no mention of any Team Foundation Service update. If everything had been “normal” April 15th would have been the date for our Sprint 46 deployment. Unfortunately, nothing has been normal.

In our March 22nd deployment we made some pretty significant architectural rearrangements to the service. I [mentioned it a couple of times on my blog](http://blogs.msdn.com/b/bharry/archive/2013/03/22/team-foundation-service-update-mar-22.aspx). Sadly, things did not go well with that update or the weeks that followed. Some of it was our own fault and should have been preventable. Some of it was bad luck - getting affected by a few issues around us. Regardless, the last month has not been a particularly good one for the service. The issues really started on Tue, March 26th with a variety of service performance and availability issues. In the weeks that followed, we diagnosed and patched quite a few issues with bug fixes and mitigations rolling out almost every day. The service was never really completely down but we had issues during the peak usage windows daily. Within about a week, the worst of those issues were resolved but problems causing slow and failed builds on the build service persisted for a few weeks.

Today, the service is almost back to “normal”. Builds are still a little slower than they should be. We understand the problem and are working to address the final issue.

We apologize for any and all interruptions and lost work time this caused. We knew it was a big change and did a lot of work to prep for it. We learned a number of things and believe we can do better. You can read more [details on my blog](http://blogs.msdn.com/b/bharry/archive/2013/04/23/sprint-45-service-issues.aspx) to learn about some of the issues we hit.

Today we deployed our Sprint 46 build – a week and a half late. However, due to the intense effort we put into addressing the service health, we didn’t really get any new visible features in this update. Service stability was really an “all hands on deck” effort. We’ve got a bunch of new capabilities under development and we’re expecting them to show up over the next couple of sprints.

Sprint 47 is expected to complete and deploy on schedule and we’re working hard to ensure it goes much more smoothly and is more like most of our updates have been over the past year. I just can’t apologize enough for the issues of the past few weeks and I am looking forward to a long run of very uneventful and compelling updates.

Thanks,

Brian
