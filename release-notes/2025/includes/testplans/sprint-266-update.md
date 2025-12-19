---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 12/19/2025
ms.topic: include
---

### Support for data-driven tests with VSTest task

We implemented support for data driven (parameterized tests) containing static inputs, for MSTest, NUnit and XUnit frameworks.
Below is a snapshot of a pipeline run, that shows the few attempts to execute the same test.

> [!div class="mx-imgBorder"]
> [![Screenshot of a pipeline run showing attempts to execute the same test.](../../media/266-testplans-01.png "Screenshot of a pipeline run showing attempts to execute the same test.")](../../media/266-testplans-01.png#lightbox)

Read more about this feature [here](/azure/devops/pipelines/tasks/reference/vstest-v3?view=azure-pipelines&preserve-view=true).

### Associate test cases from work item is now generally available

We’re excited to announce that the association flow introduced in our earlier blog post, empowering users to link automated tests written in different languages and frameworks, is now even more flexible.
You can now achieve the same association directly from the test case itself, making the process simpler and more intuitive.

> [!div class="mx-imgBorder"]
> [![Screenshot showing associate test from pipeline run.](../../media/266-testplans-02.png "Screenshot showing associate test from pipeline run.")](../../media/266-testplans-02.png#lightbox)

### Bug fixes and accessibility improvements

**Bug fixes**

   * Improved “Search for existing bug” ID search logic to make it easier to relate existing bugs during test runs.
   * Fixed the developer community–reported bugs: 10556292 and 10655819.

**Accessibility improvements**

   * Narrator now announces the correct number of rows and columns in the grid within the “New test case” pane.
   * Added visual label “Description” to the "description" textbox in the “New task” pane for better screen reader support.