---
title: Explore work items when exploratory testing
description: Test tools - Manual and exploratory testing - explore work items from the Kanban board or by using the Microsoft Test & Feedback extension
ms.assetid: AFD66FBF-5DEC-4457-8867-A47FFB8EF407
ms.technology: devops-test
ms.topic: conceptual
ms.author: sdanie
author: steved0x 
monikerRange: '>= tfs-2015'
ms.date: 09/14/2021
---

# Explore work items with the Test & Feedback extension

[!INCLUDE [version-header](includes/version-header.md)]

Use the Test & Feedback extension to explore existing work items and 
associate them with a new or an in-progress exploratory session. 
After a work item is associated with a session, all new bugs, tasks and test cases created 
in the current session are automatically linked to that work item.
This enables end-to-end traceability, and simplifies tracking
and management of issues.

You can explore:

* Work items belonging to a requirement category, a feature category, or an epic category
* Requirements-based test suites and test cases.

You can explore a work item from the [Kanban board](#kanban) or from the [extension](#extension).
You can also explore [multiple work items in the same session](#multipleitems).

[!INCLUDE [prerequisites-define](includes/prerequisites-stakeholder.md)] 

<a name="kanban"></a>

## Explore work items from the Kanban board

1. In the Kanban board, open the shortcut menu of the work item
   you want to explore, and choose **Do exploratory testing**.

   ![Opening the Do exploratory testing menu item](media/explore-workitems-exploratory-testing/explore-workitems-01.png)
   
1. A banner in the Work hub shows which work item is associated with your session.

   ![The banner shows the work item for your session](media/explore-workitems-exploratory-testing/explore-workitems-02.png)

1. Launch the Test &amp; Feedback extension. 
   If there are acceptance criteria for the work item, these are shown.

   ![Launching the Test &amp; Feedback extension](media/explore-workitems-exploratory-testing/explore-workitems-03.png)
 
   If you have not already started a session, start one now. 
   The work item is automatically associated with the current or new session. 

1. All bugs, tasks, and test cases you create will automatically be 
   linked to the current work item.

   ![Viewing the current work item](media/explore-workitems-exploratory-testing/explore-workitems-04.png)

<a name="extension"></a>
## Explore work items from the Test &amp; Feedback extension

1. Open the **Explore work item** page in the extension and search for 
   the work item you want to explore.
 
   ![Searching for a workitem](media/explore-workitems-exploratory-testing/explore-workitems-05.png)

   You can search using the work item identifier or keywords in the work item title.
  
1. Select the work item in the search results and choose **Explore selected work item**.

   ![Selecting the work item in the search results](media/explore-workitems-exploratory-testing/explore-workitems-06.png)
 
1. The work item is now associated with the in-progress session. 
   If there are acceptance criteria, these are shown.

   ![Viewing any acceptance criteria](media/explore-workitems-exploratory-testing/explore-workitems-07.png)
 
1. All bugs, tasks, and test cases you create will automatically be 
   linked to the current work item.

   ![Viewing the current work item](media/explore-workitems-exploratory-testing/explore-workitems-04.png)
 
<a name="multipleitems"></a>
## Explore multiple work items in the same session

To explore another work item, you must first dissociate the current work item from the in-progress session.

1. Open the **Explore work item** page and choose **Change**. 

   ![Changing the work item you are exploring](media/explore-workitems-exploratory-testing/explore-workitems-09.png)

2. Associate the new work item with the in-progress session as [described above](#extension).

## See your exploratory session results 

After you file bugs, create tasks, or create test cases, all these show up in the "Recent exploratory sessions" page in Azure Test Plans or TFS.

* See how you can [view your sessions and get insights](insights-exploratory-testing.md).

## See Also

* [FAQs for manual testing](reference-qa.md#tandfext)
* [Use the Test &amp; Feedback extension in Connected mode](connected-mode-exploratory-testing.md)
* [Add findings to existing bugs with exploratory testing](add-to-bugs-exploratory-testing.md)
* [Get insights across your exploratory testing sessions](insights-exploratory-testing.md)
* [Use the Test &amp; Feedback extension in Standalone mode](standalone-mode-exploratory-testing.md)
* [Exploratory testing with Microsoft Test Manager](/previous-versions/azure/devops/test/mtm/exploratory-testing-using-microsoft-test-manager)
* [Overview of manual and exploratory testing](index.yml)

 
