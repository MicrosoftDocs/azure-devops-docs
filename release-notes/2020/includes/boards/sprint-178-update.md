---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 11/12/2020
ms.topic: include
---

### Removed items on the Work Items page

The [Work Items page](/azure/devops/boards/work-items/view-add-work-items) is a great place to quickly find items you created or that are assigned to you, amongst other things. It provides several personalized pivots and filters. One of the top complaints for the "Assigned to me" pivot is that it displays Removed work items (that is, work items in the Removed state). And we agree! Removed items are work that is no longer of value and thus has been removed from the backlog, so including it in this view is not helpful.

In this sprint, we are now hiding all Removed items from the Assigned to me pivot on the Work Items page.

### Delivery Plans (Preview)

Azure Boards is an extremely capable product for planning and managing work at the team level. Many larger organizations would like to see a roadmap and timeline of work being done across multiple teams and projects, however, and Azure Boards is not as capable at this. Over the years we have attempted to solve this problem with a variety of third-party plugins and extensions, including the [Delivery Plans extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans). Unfortunately, these attempts have not fit the bill for many customers, and we continue to hear that they need better capabilities. 

Today we are happy to announce a public preview for Delivery Plans 2.0. We are taking the best concepts from the Delivery Plans extension and expanding them to provide a first-class roadmap and timeline solution natively in Azure Boards. The initial preview will include these features:

- Bringing Delivery Plans into the core product, rather than requiring an extension to be installed.
- Enabling work items to span iteration boundaries.
- Enabling drag and drop borders to show when a work item starts and ends.
- Enabling stakeholders to view plans.

<img src="../../media/178-boards-0-0.png" width="500" alt="delivery plans">

Although this is a good start, we have more to do. There are several other features currently in-progress that will enhance Delivery Plans 2.0 and make it a delightful road-mapping experience. These features will get released over the span of the next few sprints. We hope to have them completed by the end of 2020. These features include:

- Viewing rollup information to track the progress of child work items.
- Tracking and visualizing work item dependencies across teams and projects.
- Supporting more than 10 team backlogs on a plan.