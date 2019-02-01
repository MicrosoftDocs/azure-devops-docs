---
title: Team Foundation Service updates - Aug 13
description: VSTS release notes for August 13 2012
ms.assetid: e9fe612f-7435-4cf5-b476-666952ef9139
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Aug 13

While our existing support for Scrum remains very popular, we’ve been watching closely the growing interest in kanban. Today, we’re announcing and releasing a new kanban board for Team Foundation Service. Now you can manage your project with Scrum, with kanban or you can combine them to get the best of both by using kanban visualize the flow of your Scrum backlog items. Scrum and kanban are both work management strategies that involve breaking down a problem and then visually transitioning work through a series of states. In general, you tend to use more states with kanban than Scrum and you use limits on states called Work In Progress (or WIP) limits to control how much work can be in each state. While Scrum uses the burn down chart to visualize and manage work through an iteration, kanban uses the Cumulative Flow Diagram to visualize work across your entire backlog. Visualizing the backlog in this manner helps you identify bottlenecks in your process.

A full philosophical debate about the differences between [Scrum](http://en.wikipedia.org/wiki/Scrum_(development)) and [kanban](http://en.wikipedia.org/wiki/Kanban_(development)) would fill volumes so I won’t try to cover it here. If you want to learn more I recommend you start checking out the Wikipedia articles on Scrum and kanban. Regardless of the approach you prefer, we want the decision to be yours.

The centerpiece of our new kanban support is a new kanban board associated with your product backlog. Below you can see my Scrum project with 4 states: New, Approved, Committed and Done. Each user story is a card and the column represents the state. The cards are colored based on their state – grey for work that hasn’t started, blue for in progress and green for completed work. You’ll also notice some numbers at the top of the columns (like 4/4). This is your work in progress tally. That’s saying that you have 4 user stories in progress and a Work In Progress limit is 4 – so all is good. More on this in a minute.

![Kanban board](_img/8_13_01.png)

You’ll also notice, in the upper right hand corner a cumulative flow diagram that can be zoomed by clicking on it to provide a full view of the flow of your work.

![Cumulative flow chart](_img/8_13_02.png)

If you put more work in a state than your work in progress limits allow, then we’ll flag it for you – notice the APPROVED header and the associated WIP count is now red.

![Work in progress limits](_img/8_13_03.png)

Of course, you get to decide what your work in progress limits are. Just click on the numbers and set it to what ever you want it to be.

![Setting the WIP limit](_img/8_13_04.png)

This is just the beginning of our kanban support. We’re practicing build-measure-learn by getting this out to you early. There are a few things that I already know you’ll notice and miss. Probably the biggest one is in the inability to add/remove/change the states. Right now you have to use the states defined by the process template you created your project with. We’re in the process of adding support for customizable states so look for it in an upcoming sprint. There are a handful of other things that we’re already working on, including -

1.Edits directly on the card (like in our Agile task board.
2.Dragging a card back from Approved to New. Today, the work around is open the card, change the state to Removed and save (without closing), then change the state back to New and Save & Close. We’ll fix this quickly.
3.and more...

But more importantly than that, in the spirit of Build-Measure-Learn, we want to know what enhancements you want to see. Get started using kanban on your project today.

We’re committed to continuing to bring great tools to Agile development teams. Team Foundation Service will continue to be the easiest way to get started and move fast with the latest in software development and collaboration tools. You can learn more about our kanban board [here in our learn section](/azure/devops/work/kanban/index?view=azure-devops). Please try it out ([sign-up](http://go.microsoft.com/fwlink/?LinkId=307137) for a new account; existing users can [sign-in](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=11&ct=1366668045&rver=6.0.5276.0&wp=MCLBI&wlcxt=VisualStudio%24VisualStudio%24VisualStudio&wreply=https%3a%2f%2ftfs.visualstudio.com%2faccount%2ftfs-subscriptions%3fauth_redirect%3d1&lc=1033&id=290275&mkt=en-US)) and let us know what you think.

Thanks,

Brian Harry