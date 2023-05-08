---
author: ckanyika
ms.author: ckanyika
ms.date: 5/8/2023
ms.topic: include
---

### Swimlane rules is generally available

We are excited to announce that swimlane rules, which were first introduced in our [March 31st release notes](/azure/devops/release-notes/2023/sprint-219-update#swimlane-rules-private-preview), have now progressed from the private preview stage to being generally available. Over the past few sprints, we have worked diligently to fix bugs and incorporate your valuable feedback into the feature. 

Swimlane rules are similar to style rules, but instead, they allow you to setup conditions on your Kanban board to automatically move work items into specific lanes. Here are some example scenarios for using swimlane rules:

* Lanes to track the feature (parent) of your user stories and bugs.
* Lanes to track priority. **Priority=1 bugs** to be placed in the **"High Priority"** lane and **Priority=2 bugs** into the **"Medium Priority"** lane.
* Setup a lane for each person on your team. When you assign the work item, it will be placed into that lane (screenshot below).

> [!div class="mx-imgBorder"]
> ![Gif to demo editing of shareable picklist fields.](../../media/221-boards-01.gif "gif to demo editing of shareable picklist fields")

This highly anticipated feature has remained on our backlog for an extended period and has consistently garnered one of the highest number of votes in the work item space. If you have any questions, [please send us an email](mailto:%20dahellem@microsoft.com).

[Community suggestion ticket](https://developercommunity.visualstudio.com/t/swimlanes-rules/365710)

> [!NOTE]
> This feature will only be available with the [**New Boards Hubs** preview](https://devblogs.microsoft.com/devops/new-boards-hub-public-preview/).