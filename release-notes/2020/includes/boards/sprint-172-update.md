---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 07/09/2020
ms.topic: include
---

### State transition restriction rules

After several sprints of private preview, state transition restriction rules is now generally available for all customers. This new work item type rule allows you to restrict work items from being moved from one state to another. For example, you can restrict Bugs from going from New to Resolved. Instead, they must go from New –> Active -> Resolved

![Image state restriction rules](../../media/172-boards-3-0.png)

You can also create a rule to restrict state transitions by group membership. For example, only users in the “Approvers” group can move user stories from New -> Approved.

### Copy work item to copy children

One of the top requested features for Azure Boards is the ability to copy a work item that also copies the child work items. In this sprint, we added a new option to &quot;Include child work items&quot; to the copy work item dialog. When selected, this option will copy the work item and copy all child work items (up too 100).

![img](../../media/172-boards-2-0.png)

### Improved rules for activated and resolved fields

Up until now, the rules for Activated By, Activated Date, Resolved By, and Resolved Date have been a mystery. They are only set for system work item types and are specific to the state value of "Active" and "Resolved". In sprint 172 we changed the logic so that these rules are no longer for a specific state. Instead they are triggered by the category (state category) the state resides in. For example, lets say you have two custom state values of "Needs Testing" and "Validation" in the Resolved category. When the work item changes from "Active" to "Needs Testing", the resolved by and resolved date rules are triggered.

This allows customers to create any custom state values and still generate the Activated By, Activated Date, Resolved By, and Resolved By fields without the need to use custom rules.
    
### System work item types on backlogs and boards (private preview)

Ever since the inception of the inheritance process model, there have been a series of work item types that were excluded from being added to boards and backlogs. They were only accessible from queries. Work item types include...

| Process         | Work Item Type  | 
| :------------- | :------------------| 
| Agile             | Issue |
| Scrum           | Impediment |
| CMMI           | Change Request |
|                      | Issue |
|                      | Review |
|                      | Risk | 

Starting in sprint 172, we are enabling a private preview for those customers who want to enable these system work items types to be viewed on a backlog level. This will allow them to be available on your team's board and backlog. They can be added to any backlog level.

![img](../../media/172-boards-1-0.png)

If you are interested in trying out this feature please <a href="mailto: dahellem@microsoft.com">email us</a> with your org name and we can give you access.
