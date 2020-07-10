---
ms.technology: devops-agile
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 02/21/2020
---


<a id="milestone" /> 
  

### Q: How to mark a task or work item as a milestone task?

**A:** Milestone markers aren't used in Azure Boards work tracking, except for Delivery Plans. Delivery Plans provide a calendar view and allow you to define a milestone marker. For more information, see [Review team Delivery Plans](/azure/devops/boards/plans/review-team-plans).  

However, you can use one or more of the following options to mark a work item as a milestone: 
- Simply prepend or append the word **Milestone** in the title of your work item
- [Add a work item tag](/azure/devops/boards/queries/add-tags-to-work-items) labeled **Milestone**   
- [Add a custom field](/azure/devops/organizations/settings/work/customize-process-field) labeled **Milestone** and populate it with a pick list of milestones  
- [Link work items](/azure/devops/boards/backlogs/add-link) using the Predecessor/Successor or Related link type to a milestone work item 
- [Assign the milestone work item to the sprint](/azure/devops/boards/sprints/assign-work-sprint) in which it's targeted for completion. 

