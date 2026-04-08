---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 04/07/2026
---

For the report to generate useful data, set up the following configurations.

| Report data | Required setup |
|---|---|
| All | Define requirement work items and assign them to your [area paths](../../../organizations/settings/set-area-paths.md) and [iteration paths](../../../organizations/settings/set-iteration-paths-sprints.md). |
| Hours completion % | Fill in the [Complete Work](../../../boards/queries/query-numeric.md#completed-work) and [Remaining Work](../../../boards/queries/query-numeric.md#remaining-work) fields on tasks or bugs linked to requirements by using the **Child** link type. |
| Test execution status | Create *requirement-based test suites* in Test Plans for those requirements. Inline tests added through the board satisfy this requirement, but requirements linked to tests don't. For more information, see [Create test plans and test suites](../../../test/create-a-test-plan.md). |
| Bug status | Create and link bugs to requirements by using the **Child** link type. |
