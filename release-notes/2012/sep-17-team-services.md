---
title: Team Foundation Service updates - Sep 17
description: VSTS release notes for September 27 2012
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 8b7d5798-e6f4-4757-b743-0e9ea276fa1c
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Sep 17

Another three weeks and another set of updates to the Team Foundation Service. The long Labor Day weekend shortened our sprint a bit; nonetheless, we’ve got a few new capabilities to share.

##Drag & drop sprint planning

We made an update to our sprint planning page to make assigning work easier. Previously, you were required to open each work item and manually update the Assigned To field or Activity field. This worked, but was a bit cumbersome when trying to load balance work across the team. Now, assigning work is as simple as dragging and dropping a task on a team member or activity type. In the screenshot below you can see that I’m dragging the “Build the find logic” task to Brian…

![Assigning a to do item by dragging it onto a team member in the capacity pane](_img/9_17_01.png)

And in the next screen, you can see that the task is now assigned to Brian and the capacity bars have been updated.

![To do item assigned](_img/9_17_02.png)

##Expand & collapse the left panel

Another useful update in this sprint is ability to collapse the left panel on individual pages. Clicking the small chevron on the left panel will collapse the panel and give you back a bit of screen real estate. For convenience, the panel remembers its state from screen to screen.

![Backlog page with the left panel expanded](_img/9_17_03.png)

![Backlog page with the left panel collapsed](_img/9_17_04.png)

##Continued UX updates

Earlier this summer we pushed a fairly [big update](http://blogs.msdn.com/b/bharry/archive/2012/07/16/team-foundation-service-updates-7-16.aspx) to the navigation of the site. As we continue to update the service we’ll be refining the UI to ensure it’s easy to use and visually appealing. In this update we removed the more traditional tabs from the UI and replaced them with a colored hyperlink. It’s subtle, but another step towards reducing chrome in the UI and making it easier to focus on your data.

##Process templates

We made a small change to both the Agile and Scrum process templates and updated the version numbers for both to 6.1 and 2.1 respectively. The change was to relax the workflow for items on the product backlog by allowing you to transition from any state to any other state. The driving force behind this update was feedback from the community. Many of you asked us for a less restrictive workflow on these work items. Our [recent addition of the kanban board](aug-13-team-services.md) highlighted just how restrictive the work flow was. For example, if you were using the Scrum process template and you moved a PBI or Bug from "New" to "Approved", you couldn't move back again! This has now been fixed. The CMMI template remains unchanged.

##Build verbosity

In a move to reduce our storage footprint, we’ve removed diagnostic information from the build summary report. If you’re interested in diagnostic information, it’s now only available in the build diagnostic logs included with the drop. In a future update, we’ll be adding the ability to view your diagnostic logs directly through the web UI.

##Xcode with Git-tf

If you’re using Xcode in your environment, we published a [new article](/azure/devops/git/share-your-code-in-git-xcode?view=azure-devops) describing how to use Git and Xcode with Team Foundation Service.

##News RSS feed

Finally, as [promised](http://blogs.msdn.com/b/bharry/archive/2012/08/27/team-foundation-service-updates-8-27.aspx) we’ve enabled an [RSS feed](https://visualstudio.microsoft.com/team-services/release-notes-feed/?feed=release-notes-feed) on our news section so you can more easily keep track of what we’re doing.

That’s the list for sprint 36. We’ll have another update for you in 3 more weeks. Remember to visit our [User Voice](https://visualstudio.uservoice.com/forums/330519-vso) site to give us feedback on our priorities and investments.

Thanks,

Aaron Bjork