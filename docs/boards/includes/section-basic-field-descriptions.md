---
ms.technology: devops-agile
ms.prod: devops
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/21/2020
---


---
:::row:::
   :::column span="":::
      **Field**
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Title](/azure/devops/boards/queries/titles-ids-descriptions)
   :::column-end:::
   :::column span="3":::
      Enter a description of 255 characters or less. You can always modify the title later.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Assigned To](/azure/devops/boards/queries/query-by-workflow-changes)
   :::column-end:::
   :::column span="3":::
      Assign the work item to the team member responsible for performing the work. Depending on the context you are working in, the drop-down menu lists only team members or contributors to the project.
      > [!NOTE]  
      > You can only assign work to a single user. If you need to assign work to more than one user, add a work item for each user and distinguish the work to be done by title and description. The Assigned To field only accepts user accounts that have been [added to a project or team](/azure/devops/organizations/security/add-users-team-project). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [State](/azure/devops/boards/queries/query-by-workflow-changes)
   :::column-end:::
   :::column span="3":::
      When the work item is created, the State defaults to the first state in the workflow. As work progresses, update it to reflect the current status. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Reason](/azure/devops/boards/queries/query-by-workflow-changes)
   :::column-end:::
   :::column span="3":::
      Use the default first. Update it when you change state as need. Each State is associated with a default reason. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Area (Path)](/azure/devops/boards/queries/query-by-area-iteration-path)
   :::column-end:::
   :::column span="3":::
      Choose the area path associated with the product or team, or leave blank until assigned during a planning meeting. To change the dropdown list of areas, see [Define area paths and assign to a team](/azure/devops/organizations/settings/set-area-paths).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Iteration (Path)](/azure/devops/boards/queries/query-by-workflow-changes)
   :::column-end:::
   :::column span="3":::
      Choose the sprint or iteration in which the work is to be completed, or leave it blank and assign it later during a planning meeting. To change the drop-down list of iterations, see [Define iteration paths and configure team iterations](/azure/devops/organizations/settings/set-iteration-paths-sprints).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Description](/azure/devops/boards/queries/titles-ids-descriptions)
   :::column-end:::
   :::column span="3":::
      Provide enough detail to create shared understanding of scope and support estimation efforts. Focus on the user, what they want to accomplish, and why. Don't describe how to develop the product. Do provide sufficient details so that your team can write tasks and test cases to implement the item.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Acceptance Criteria](/azure/devops/boards/queries/titles-ids-descriptions)
   :::column-end:::
   :::column span="3":::
      Provide the criteria to be met before the work item can be closed. Define what "Done" means by describing the criteria for the team to use to verify whether the backlog item or bug fix is fully implemented. 
      Before work begins, describe the [criteria for customer acceptance](/azure/devops/boards/backlogs/best-practices-product-backlog#acceptance) as clearly as possible. Have conversations between the team and customers to determine the acceptance criteria. These criteria help ensure a common understanding within the team to meet customers' expectations. Also, this information provides the basis for acceptance testing.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Priority](/azure/devops/boards/queries/planning-ranking-priorities)
   :::column-end:::
   :::column span="3":::
      A subjective rating of the issue or task it relates to the business. You can specify the following values:  
      - **1**: Product cannot ship without the successful resolution of the work item, and it should be addressed as soon as possible.  
      - **2**: Product cannot ship without the successful resolution of the work item, but it does not need to be addressed immediately.  
      - **3**: Resolution of the work item is optional based on resources, time, and risk.  
      - **4**: Resolution of the work item is not required. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Value Area](/azure/devops/boards/queries/planning-ranking-priorities)
   :::column-end:::
   :::column span="3":::
      A subjective rating of the issue or task it relates to the business. You can specify the following values:  
      - **Architectural**: Technical services to implement business features that deliver solution .  
      - **Business**: Services that fulfill customers or stakeholder needs that directly deliver customer value to support the business (Default).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Effort, Story Points, Size](/azure/devops/boards/queries/query-numeric)
   :::column-end:::
   :::column span="3":::
      Provide a relative estimate of the amount of work required to complete an issue. Most Agile methods recommend that you set estimates for backlog items based on relative size of work. Such methods include powers of 2 (1, 2, 4, 8) and the Fibonacci sequence (1, 2, 3, 5, 8, etc.). Use any numeric unit of measurement your team prefers.  
      The estimates you set are used to calculate [team velocity](/azure/devops/report/dashboards/team-velocity) and [forecast sprints](/azure/devops/boards/sprints/forecast).
   :::column-end:::
:::row-end:::
---