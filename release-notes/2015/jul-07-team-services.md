---
title: Card colors and personal access tokens – Jul 7
description: VSTS release notes for July 7 2015
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 66780d76-a567-492d-b0ef-eccf20b89633
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

# Card colors and personal access tokens – Jul 7

## Card coloring on Kanban board

I’m excited to let you know that our update this week brings the ability to change the color of cards on your boards – finally! You can now configure boards to include custom formatting based on any value on your work items. Setting this up is very easy… just click the gear icon on the top of your board, select **Card styles**, and create a rule for the color you’d like to add. You can see in the example below that my board has two rules configured. The first rule colors all Bugs with a red background. The second rule colors all work items tagged with the value “Taskboard” a yellow color. 

![Card coloring](_img/7_7_01.png)

![Card coloring rules](_img/7_7_02.png)

This feature is initially only available on Kanban board, but we’re enabling it on the Taskboard with our next deployment… stay tuned. 

## Personal access tokens

Personal access tokens have been a request from customers looking for a more secure option to alternate authentication credentials. With this week’s update you can now create personal access tokens that limit the lifetime, account, and scope of activities the token is authorized to access. You can see in the example below that I’ve created a token named “Code Read” that provides only read access to Code assets in my personal account, for 90 days. With this new capability you now have much finer grained control over access to assets inside your projects.

![Personal Access Tokens](_img/7_7_03.png)

To setup a personal access token click your name in the top right and select **My Profile**. From there choose **Security > Personal access tokens**.

## Adding work directly to a sprint

We also made a small change this sprint to allow you to add new backlog items directly to your sprint backlogs. Previously, the only way to add new work to requirements or bugs to a sprint was to add them to the product backlog, and then drag each item one at a time to the correct sprint.

![Adding work directly to a sprint](_img/7_7_04.png)

That’s it for our sprint 84 deployment. If you have questions, feel free to reach out on [Twitter](https://twitter.com/AzureDevOps). If you have ideas on what you’d like to see use do next, head over to [UserVoice](http://visualstudio.uservoice.com/forums/330519-vso) to add your idea or vote for an existing one.

Thanks,

Aaron Bjork