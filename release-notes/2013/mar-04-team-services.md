---
title: Team Foundation Service updates - Mar 4
description: VSTS release notes for March 4 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: d95cc29e-4ccf-4c6d-a661-96eed05ad7c5
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Mar 4

Before we get to the new capabilities in today’s update, I want to announce some planned downtime for the service.

**Saturday March 23rd we’ll be taking the service offline for 15 minutes sometime between 11:00 AM EST and 2:00 PM EST.**

As we get closer to the event, we’ll be posting updates on our [service blog](http://blogs.msdn.com/b/tfservice/) with additional details. Please plan accordingly, and we apologize in advance for any inconvenience this causes.

Now, let’s talk about some of the improvements in today's update…

##Customizable Kanban Swim Lanes

When we first introduced our kanban board [back in August of last year](https://visualstudio.microsoft.com/articles/news/2012/aug-13-team-services), we knew a few key features were missing from the experience; most noticeably, the ability to customize the swim lanes on the board. Today we’re happy to announce that customizable swim lanes are here!

How does it work? Navigate to your board from the backlog hub. Click the new **Customize Columns** option from the toolbar. Now you can configure the swim lanes (columns) for your board.

![Configure swim lanes](_img/3_4_01.png)

The swim lanes on a board are unique to each team, but they map directly to the shared work item states in your project. This allows you to give each team the autonomy to manage their workflow as needed. However, you still retain the ability to make sense of all the work by querying across teams on state.

As you add new swim lanes, pick the appropriate work item state to map it to. As before, each swim lane supports a visual WIP (work in process) limit. You can use the arrows to re-order, or just click and drag a swim lane to move it around. In this example, I’ve added two new states named “Grooming” and “Groomed” and I’ve assigned them to the New and Approved states respectively.

![Add and map swim lanes](_img/3_4_02.png)

When I click **OK**, my kanban board is refreshed with the new customized swim lanes. I can now move backlog items through these swim lanes, letting the board automatically update the work item states for me. Additionally, the cumulative flow diagram above the board adjusts automatically to reflect the customized swim lanes.

![Customized swim lanes](_img/3_4_03.png)

##Edit Test Steps When You Run Tests

In this sprint, you can now make changes to test steps inline when you run a test.

When you run a test case, you sometimes find issues with the test itself that need to be fixed. The issue could be that new functionality has been added or removed, missing context in the steps, or something as simple as a spelling mistake. You want to make those corrections to the step immediately without having to change context.

For example, in the below screenshot, the word “features” in step #2 is misspelled.

![Issue with test case](_img/3_4_04.png)

To fix this, you can now just double-click the step and correct the misspelling. After you click **Save**, the changes are persisted and you can continue to run the test – all without having to interrupt your context or workflow.

![Edit test case to fix it](_img/3_4_05.png)

**Note:** Currently, if the test step contains any parameters (either in the action or expected result) then you cannot edit the step inline. You will see a warning message about this.

In future sprints, we will enable adding and deleting existing test steps and modifying the order of steps when you run a test.

##Annotate/Blame

In this sprint we added the annotate view on source files. We’re quite proud of this implementation so let us know what you think. This works for files in both TFVC and Git repositories. Simply browse to a file in your project and click the new annotate icon in the toolbar.

![Annotate source file](_img/3_4_06.png)

A margin slides out next to the file showing you who made changes to the file, when those changes were made and a link to the details of each revision. Now you can compare this with the changeset or commit previous.

The blocks in the margin have a subtle color gradation to help you visually identify the age of the changes. The latest change is always the darkest and the oldest change is the lightest. All in all it’s a very nice, clean blame experience that we hope both users of Git and TFVC will find useful.

##Scheduled Builds for Git Based Team Projects

Finally, this sprint we enabled support for scheduled builds with Git repositories. You can now build your Git repos using a build definition that is triggered on a daily schedule.

**Note:** To enable CI for Git builds you need [CTP3 of Visual Studio 2012 Update 2](/visualstudio/releasenotes/vs2012-update2-vs).

That’s our list for sprint 44. There are of course lots of bug fixes, performance improvements and minor tweaks as well based on your feedback. Keep the feedback coming on [User Voice](https://visualstudio.uservoice.com/forums/330519-vso), the [MSDN Forums](http://social.msdn.microsoft.com/Forums/TFService/threads), and [Twitter](http://twitter.com/search?q=%23tfservice).

Thanks,