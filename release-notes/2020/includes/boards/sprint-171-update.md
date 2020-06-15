---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 06/18/2020
ms.topic: include
---

### State transition restriction rules (private preview)

We continue to close the feature parity gaps between Hosted XML and the Inherited process model. Starting this sprint, there is a private preview available for customers who want to restrict state transitions in an inherited process. This new work item type rule allows you to restrict work items from being moved from one state to another. For example, you can restrict Bugs from going from New to Resolved. Instead, they must go from New –&gt; Active -&gt; Resolved

![img](../../media/171-boards-0-0.png)

You can also create a rule to restrict state transitions by group membership. For example, only users in the “Approvers” group can move user stories from New -&gt; Approved.

If you are interested in participating in the private preview, please email&nbsp;</span><a href="mailto:dahellem@microsoft.com" style="color:rgb(0, 93, 166);">us directly</a> with your organization name.
