---
title: Team Foundation Service updates - July 10
description: VSTS release notes for July 10 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: fb442da5-ffd1-4c26-9864-78fa94c32735
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - July 10

A few updates were pushed to the service this morning that you’ll want to take note of. 

##Backlog Mapping

First, the Agile Portfolio Management feature announced back on [June 3rd](jun-03-team-services.md) has an improved backlog linking experience. The new mapping panel allows you to quickly link items on your team’s product backlog directly to a “higher level” features backlog. When turned on, you can simply drag an item from your product backlog onto an item in the feature backlog to create the link.  In the screenshot below, notice the two items at the bottom of the backlog that are un-parented.  These are items that have been added to my product backlog but aren’t yet linked to a feature.

![Backlog with unmapped items](_img/7_10_01.png)

Next, you can see that I’ve turned on the mapping panel and I’m now viewing both my product backlog and feature backlog side by side. I’m dragging the “Deleting a ticket” backlog item to the “Ticket administration” feature and in doing so, creating a [parent-child link](https://msdn.microsoft.com/library/dd286633.aspx) between the two.

![Dropping a backlog item on a feature in the mapping pane](_img/7_10_02.png)

Finally, the “Ticket administration” feature is now pulled into my view as it’s now a parent to the “Delete a ticket” item.  Give it a shot and let us know what you think.  If you’ve got specific feedback you’d like to share, send it my way on [twitter](https://twitter.com/aaronbjork).

![The backlog item mapped to it's parent feature](_img/7_10_03.png)

##Team Permissions

We also made a change today to “who can do what” at the team level. Before today’s changes, all team members could perform the following actions:

- Editing team areas (the area path where the team backlog is stored)
- Editing team iterations (the iterations the team is participating in)
- Editing Kanban columns including WIP limits

With today’s change, we’ve restricted these permissions to only team administrators. To add new team administrators, you’ll need to go to the administration page for your team. There you can select users you’d like to grant these permissions to.

![Team permissions](_img/7_10_04.png)

That’s it for sprint 50. As always let us know how we're doing on [User Voice](https://visualstudio.uservoice.com/forums/330519-vso), the [MSDN Forums](http://social.msdn.microsoft.com/Forums/TFService/threads), and [Twitter](http://twitter.com/search?q=%23tfservice)

Thanks,

Aaron Bjork
