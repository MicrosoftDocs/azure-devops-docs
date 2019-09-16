---
title: Team Foundation Service updates - May 28
description: VSTS release notes for May 28 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: jillfra
ms.assetid: 07422a87-fd33-4a13-a201-5fe9b7bc694f
ms.date: 06/01/2016
ms.author: glmorale
author: yukom
---

# Team Foundation Service updates - May 28

## Build IaaS

Over the past few months, we’ve been working hard on our build service. You haven’t seen much from it yet but the benefits really come to life with today’s deployment. We’ve been working on porting our build pool from the older Azure VM Roles to the new Azure IaaS VMs. There are a number of benefits that come from this:

- You have more disk space to work with on the build machine. IaaS VMs allow for much more disk space than VM Roles did.
- You can build Windows Store apps. This is because we can now run Windows Server 2012 VM images rather than Windows 2008 R2.
- The build service is less expensive and time consuming to manage. While you won’t see that directly, you will see some indirect benefits in our ability to keep the build image more up to date with new SDK releases.

While we were working on this, Azure released the new 2.0 SDK and we have now updated the build service to support it.

As I write this, we are currently in the middle of a switch over from the old pool to the new pool. We are currently running 10% of our builds on the new pool and by the time this news article is published we should be running at least 50% of our build load on the new pool. Within a week 100% should be on the new pool.

There’s no easy way to tell, in this transition period, whether or not your account is configured to run on the old pool or the new pool. The easiest way to do it would be to create a simple Windows Store app, check it in and submit a build for it. If it succeeds, you are on the new pool.

## Git Alerts

Today we turned on email alerts for Git projects. You can now create email alerts that are triggered when commits are pushed to the service. Push alerts may be filtered by author, committer, pusher, comment, project, and/or repository. If you've never used alerts before, click your name in the page header and select **My Alerts**. From this dialog you can configure which alerts you want to subscribe to and where you want the alerts sent.

![Git alerts for Team Foundation Service](_img/5_28_01.png)

## Backlogs 

Finally, we made a few small changes to how your product backlog works.  First, the hub has been renamed to just "Backlogs", and your actual product backlog has been named according to the process template you're using (Agile = "Stories", Scrum = "Backlog Items", CMMI = "Requirements").  We also updated the logic of the product backlog to now __show all items until they reach the completed/done state__. Previously, when an item on your backlog was assigned to a sprint and moved to an in progress state, it would disappear from the backlog.  This has been changed so that items only disappear from the backlog after being marked as completed/done.

**Note:** This could result in some items re-appearing on your backlog that were never marked as completed/done.  

![Backlog with in progress items](_img/5_28_02.png)

That’s it for now. We should have a whole bunch of new stuff next sprint. Stay tuned.

Thanks, 
Brian
