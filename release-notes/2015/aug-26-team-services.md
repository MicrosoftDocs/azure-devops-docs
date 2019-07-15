---
title: Sprint planning improvements and SonarQube analysis build tasks – Aug 26
description: VSTS release notes for August 26 2015
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: a08691ea-e68d-4846-a306-adb0e30b28b4
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

# Sprint planning improvements and SonarQube analysis build tasks – Aug 26

**Renaming columns in place

You can now rename columns on your Kanban board in place, without having to jump into the configuration dialog. Over time, we’ll be adding more functionality inline, including adding, deleting, and reordering columns.

![Renaming in place](_img/8_26_01.png)

## Choosing users for capacity planning

This sprint we tweaked the capacity planning experience to give you complete control over who participates. You now have two new buttons on the toolbar that allow you to add any member to your sprint plan (including those outside your team), as well as adding any missing team members. As you can see in the screenshot below, I’m searching for Noah and adding him directly into my plan for Sprint 87.

![Adding a team member directly to a sprint plan](_img/8_26_02.png)

## Burndown with available capacity

The burndown chart now has a line showing available capacity during a sprint, in addition to the existing ideal trend line. This view provides you and your team with a better idea of whether you're on track to finish all your work during the sprint. This line is built on the capacity data described above, including individual and team days off. We’ve marked [this suggestion](http://visualstudio.uservoice.com/forums/121579-visual-studio/suggestions/4381480-burndown-chart-should-use-the-capacity-of-the-team) on UserVoice as completed.

![Burndown chart showing available capacity](_img/8_26_03.png)

## SonarQube analysis build tasks

Finally, you can now execute a SonarQube analysis in conjunction with MSBuild. Before your build steps that execute the actual MsBuild, insert a **SonarQube for MSBuild - Begin Analysis** task to specify the SonarQube project parameters, the connection to the SonarQube server, and (until SonarQube 5.2 ships) the connection to the SonarQube database. After the build and any test tasks, simply append a **SonarQube for MSBuild - End Analysis** task to complete the analysis and send the data off to SonarQube. You can learn more about SonarQube analysis in this [blog post](http://blogs.msdn.com/b/visualstudioalm/archive/2015/08/24/build-tasks-for-sonarqube-analysis.aspx).

![SonarQube build analysis settings](_img/8_26_04.png)

That’s a wrap for our deployment this week. As always, please reach out on [Twitter](https://twitter.com/AzureDevOps). If you have ideas on what you’d like to see us do next, head over to [UserVoice](http://visualstudio.uservoice.com/forums/330519-vso) to add your idea or vote for an existing one.

Thanks,

Aaron Bjork