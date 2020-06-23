---
ms.technology: devops-analytics
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 06/22/2020
---


<a id="prerequisites" />  




## Prerequisites

For the report to generate useful data, you need to have performed the following tasks: 

- You have define requirement work items and assigned them to the area and iteration paths of interest. For information about how to define area and iteration paths, see [Define area paths](/azure/devops/organizations/settings/set-area-paths) and [Define iteration paths](/azure/devops/organizations/settings/set-iteration-paths-sprints).
- To get the percentage of hours completion, you need to fill in the [Complete Work](/azure/devops/boards/queries/query-numeric#completed-work) and [Remaining Work](/azure/devops/boards/queries/query-numeric#remaining-work) fields of tasks or bugs linked to requirements with the **Child** link type. 
- To get the execution status of test cases, you will have created *requirement-based test suites* in Test Plans corresponding to those requirements. Inline tests you add through the Kanban board satisfy this prerequisite, however requirements that you link to tests don't. To learn more, see [Create test plans and test suites](/azure/devops/test/create-a-test-plan).
- To get the status of bugs, you will have created and linked bugs to requirements with the **Child** link type.

[!INCLUDE [temp](sample-required-reading.md)]