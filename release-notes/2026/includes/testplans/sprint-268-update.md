---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 1/26/2026
ms.topic: include
---

### New Test Case import 
The new and improved Test Case Import Wizard to boost your productivity is now available. It comes with advanced auto-mapping capabilities, mapping templates to share with your team, and more. Check the public documentation for more information [here](/azure/devops/test/bulk-import-export-test-cases?view=azure-devops#import-test-cases).

### Focused test point history panel

So far, you had no easy way to see point-specific history from the Test Plan page, making it hard to differentiate among test points in result history:

> [!div class="mx-imgBorder"]
> [![Screenshot showing test points execution history.](../../media/268-testplans-01.png "Screenshot showing test points execution history.")](../../media/268-testplans-01.png#lightbox)

Now you can view execution history for individual test points directly from the Test Plan page:

> [!div class="mx-imgBorder"]
> [![Screenshot showing view execution history for individual test points.](../../media/268-testplans-02.png "Screenshot showing view execution history for individual test points.")](../../media/268-testplans-02.png#lightbox)

And when needed click on the view all history, to review the full execution history of the test case too.

### Recent test result in user story

Get real-time updates on test progress directly within the user story work item. You can now see a snippet of the most recent test case result in the Related Work section, showing key details like the outcome and completion time without needing extra navigation. This update brings consistency between the Boards view and user stories, making it faster and easier to track test progress at a glance. These improvements aim to enhance traceability and streamline your workflow, helping you stay focused on what matters most.

### New Test Run Hub

* The new Test Run Hub is gradually going generally available for each Azure DevOps org.
* You can now select and copy information from any page within the Test Run Hub user interface.
* For automated test runs, the stack trace component has been enhanced to provide you improved readability of the full stack trace.
* Images captured during test execution can now be previewed inline on each test result page.
* Search functionality logic for runs using the “Run Title” now matches run titles that start with your search term.
* Run Summary page usability and readability have been improved with updated minimum and default column width configurations.
* You can now link work items to test runs across different projects.
* You can now go directly from a pipeline logs to the specific run summary, saving you time and eliminating extra navigation steps.
* For automated runs, all sub result attachments are now visible on each test result page, making it easier for you to review detailed outcomes.
* Time and date values are now displayed according to your selected "Time and Locale" format.
* Added “Run Title” as a default column for better readability of test runs.
* Search by Run ID within a project, independent of other filters.
* Copy text from any screen in the new Test Run Hub for easier sharing and productivity boost.
* Optimized column widths in the test results table for improved readability.
* Enhanced stack trace preview for automated runs to make analysis straight forward.
* Search test runs across a 90-day timeframe from any point in time.
* Added test “Owner” and "Last Updated" columns for better tracking.
* All attachments of automated sub-runs are now appearing in the UI as expected.
* Enabled linking a Test Run to any work item from any project in the organization.

### Test & Feedback Extension

Fixed linkage of Test Cases created during exploratory sessions to their original Test Case as expected.

### Resuming Paused Test Cases is the Default Action

With the enhanced "Resume Paused Test Case" capability, you’ll now see "Resume" as the default action for all paused manual test case flows, making it easier to pick up where you left off. If you try to take any other action, you’ll get a clear warning, helping you avoid accidental progress loss that ensures a smoother testing experience.