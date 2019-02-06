---
title: Add findings to existing bugs
description: Manual and exploratory testing - add findings to  existing bugs existing bugs when using the Test &amp; Feedback extension
ms.assetid: 0C61F157-452E-4DE5-8998-8DDBD9D44969
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Add findings to existing bugs with exploratory testing

[!INCLUDE [version-header](_shared/version-header.md)] 
 
To help avoid duplication, the Test &amp; Feedback extension automatically 
searches for and displays existing bugs, based on the keywords in the title,
as you file a new bug. You can choose to continue creating a new bug or add
your findings to an existing bug.

[!INCLUDE [feature-availability](_shared/feature-availability.md)] 

1. As you type the title for a new bug, in the background the extension 
   searches for similar bugs that might be related to the issue you've found
   and displays a link to the results. Choose this link to see the results that have 
   similar title keywords.

   ![The link to view similar bugs](_img/add-to-bugs-exploratory-testing/add-to-existing-bugs-01.png)
 
   The form displays **0 Similar** if it does not find any matching bugs.
   In this case, or if you don't see a "similar" link, you can create a
   new bug containing your screenshots, notes, and videos
   as described in [this topic](connected-mode-exploratory-testing.md).
 
1. If you see a bug you want to update, instead of creating a new one:

   - Select it in the list and choose **Edit**.
 
     ![Editing a similar bug](_img/add-to-bugs-exploratory-testing/add-to-existing-bugs-02.png)

   - The extension appends all your screenshots, notes, and videos to 
     the existing bug. 

   - Save the updated bug.

     ![Saving the updated bug](_img/add-to-bugs-exploratory-testing/add-to-existing-bugs-03.png)

1. If, instead, you decide not to update an existing bug, ignore the "similar" link and:

   - Choose the **New bug** link to return to the bug details form.

     ![Returning to the bug details form](_img/add-to-bugs-exploratory-testing/add-to-existing-bugs-04.png)

   - Enter the details for the new bug and save it
     as described in [this topic](connected-mode-exploratory-testing.md).<p />
   
1. Continue exploring your app, filing bugs and tasks, and creating test cases. 

## See your exploratory session results 

After you file bugs, create tasks, or create test cases, all these show up in the "Recent exploratory sessions" page in Azure Test Plans or TFS.

* See how you can [view your sessions and get insights](insights-exploratory-testing.md).

## See Also

* [Use the Test &amp; Feedback extension in Connected mode](connected-mode-exploratory-testing.md)
* [Explore work items with exploratory testing](explore-workitems-exploratory-testing.md)
* [Get insights across your exploratory testing sessions](insights-exploratory-testing.md)
* [Use the Test &amp; Feedback extension in Standalone mode](standalone-mode-exploratory-testing.md)
* [Exploratory testing with Microsoft Test Manager](mtm/exploratory-testing-using-microsoft-test-manager.md)
* [Overview of manual and exploratory testing](index.md)

[!INCLUDE [help-and-support-footer](_shared/help-and-support-footer.md)] 
