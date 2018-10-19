---
title: Practical DevOps
titleSuffix: Azure DevOps Services & TFS
description: Process comes first, then you can apply tooling and automation
ms.prod: devops
ms.technology: devops-dev-manager
ms.article: get-started-article
ms.assetid: acd0935a-8875-4adc-9f31-f8c170d968e8
ms.manager: douge
ms.author: kraigb
author: kraigb
ms.topic: reference
ms.date: 10/15/2018
monikerRange: '>= tfs-2013'
---

# Process first, then tooling and automation

It's very natural at this point to want to enthusiastically jump into the DevOps fray and start finding tools that can automate different activities. Then you can tell your executives that you're "doing DevOps"! Yeah! (And many vendors, of course, are eager to sell you products and services.)

But at the risk of putting the kaibash on your enthusiasm, you must understanding something very important: DevOps neither starts with tooling, nor with automating anything. DevOps starts, instead, with **process**:

_**The foundation of DevOps is being clear about the processes and policies that define how your apps and services move from the hands of your developers into the hands of your customers.**_

It's really that simple; so simple, in fact, that you can certainly define an entire release pipeline by writing down the necessary steps on the proverbial napkin and performing each one manually.

In fact, writing down the process with old-fashioned pencil and paper is a great place to start, because it's highly likely that the understanding of that process is presently scattered around. 

Within a team environment, especially a young team that's trying to move rapidly, a release pipeline can easily consist of a bunch of steps that have evolved ad hoc, steps that individual team members "just remember" to do. Here are some examples:

- Run a build
- Run some tests
- Check that the right non-code artifacts are in place
- Collect feedback from test users
- Deploy the app to a web site or app store.
- Deploy service code to the appropriate server (dev, staging, production and so on)
- Change an API key from dev to production
- Tweet availability
- Update the product page on your web site

With short development iterations, all of these activities can easily become so enmeshed in the team's day-to-day routine that nobody realizes that none of it is actually written down anywhere&mdash;until, of course, someone goes on vacation, gets sick or leaves the company! What's more, if all your release processes and policies exist only in people's minds, it's difficult to apply them consistently. They invariably get intertwined with hundreds of other unrelated yet important tasks. And although you can get by with such a state of affairs for a time, much peril surely awaits, especially in environments in which a single oversight can be disastrous.

By taking the time to clearly identify all the steps involved, you define a process that has several important qualities:

- **Predictable**: Everyone understands what steps happen in what order, and how those steps change when necessary.
- **Repeatable**: Every step in the process is performed the same way with any release or iteration; there are no surprises or unexpected variations.
- **Auditable**: When changes occur, it's easy to know who made those changes, when they were made, and why they were made. Such accountability makes it much easier to quickly revert breaking changes instead of wasting precious time passing blame around.
- **Transparent**: Having the process all spelled out in a place that's accessible to everyone makes the process easy to review and modify because all the interdependencies are visible.

These qualities are then the foundation upon which you can intelligently apply tooling and automation. That is, when you have a clear process that is predictable, repeatable, auditable, and transparent, you can select the tools for each activity in your DevOps pipeline that you *know* add value to your goal of continuously validating performance. Otherwise, trying to apply tooling and automation without clarity is like setting up a bunch of industrial machinery to build widgets without knowing what it is you're actually trying to build in the first place.

## Reducing costs through automation

Let's be very clear about something. If you've articulated and understand your release process such that it can be written on paper as a checklist, then automation is not actually essential in any release pipeline&mdash;every step can be done manually if needed. This includes even trivial but time-consuming matters like sending notification emails.

A simple benefit of having such a manual backup is that if some automated step fails, everyone still knows exactly what needs to be done. There's no magic hidden in the toolchain.

At the same time, it should be obvious that manual processes have some serious drawbacks:

- They are often tedious (and therefore somewhat boring to humans) to perform.
- They are prone to human error.
- They put every step at risk of competing for the attention of your human employees with all their other work.
- They are expensive to scale.

Computers, on the other hand, are very adept at endlessly repetitive and mindlessly trivial tasks without getting bored or negligent. When properly configured, computers flawlessly repeat tasks the same way every time, and usually do so much faster than human beings. Furthermore, unless computers are told otherwise through new configurations, they keep themselves completely focused on their original instructions. And it's much simpler to adjust the computing power you dedicate to the processes as demands change, than it is to hire (and fire) qualified people.

_**The purpose of automation, then, is to simultaneously lower your costs and increase the frequency and quality of your processes as they're defined, separate from the tooling.**_

That is, when your processes and policies are in place, you can then *incrementally* find tools and services to automate specific parts of the process. Each time you automate a step, it make that step more repeatable, more predictable, more auditable, and more transparent. With this approach, you should clearly see how any bit of automation reduces your overall costs and improves the quality of the process. If you can't see those relationships, then you have to honestly question the value of the tool or service under consideration.

As you incrementally adopt DevOps activities, you free your human employees to concentrate on those areas that aren't readily handled by computers, such as reviewing and interpreting user feedback, designing telemetry layers, determining the most effective forms of testing, and continuously improving the quality of DevOps activities that are already in place. (Of course, there are always some activities that cannot be automated: manual testing, for example, is inherently manual!)

Accordingly, your first efforts at automation should focus on those areas that have the greatest impact. Where are your team members spending the greatest amount of their time with each release? What are their biggest pain points? Avoid the temptation to start with the flashy, showy, or otherwise glamorous tools you saw in some slick marketing demo. Source control, for example, seems to utterly pedestrian that many people miss the fact that it's a very important type of automation that has one of the highest and most immediate returns on investment. (Source control is the subject of the next article in this series.)

Similarly, automating the processing of turning DevOps output into work items in your backlog is another less-than-glamorous form of automation, but also has a high return because it applies across your entire pipeline and frees people from tedious work like reviewing and processing emails from customers or scanning log files. What's more, you can consolidate review activities into your process of managing technical debt, rather than having it spread throughout all the other activities.

As you gain proficiency at identifying processes that can be automated, and evaluating their impact, you'll find that adopting DevOps activities becomes a natural and rewarding way to again lower your costs, improve the value you deliver to customers, and likely increase your teams morale!

> [!div class="nextstepaction"]
> [Source control as automation](azure-devops-guide-for-managers-06-source-control.md)
