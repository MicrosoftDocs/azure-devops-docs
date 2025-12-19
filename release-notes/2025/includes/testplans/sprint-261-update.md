---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 09/04/2025
ms.topic: include
---

### Associate automated tests to test cases

Previously, support was introduced for [associating automated tests](https://devblogs.microsoft.com/devops/introducing-java-javascript-and-python-support-in-azuredevops-test-plans/) written in various languages with test cases directly from pipelines. This capability has now been extended to allow initiating the association directly from within the test case itself. 

> [!div class="mx-imgBorder"]
> [![Screenshot of associate test from pipeline run.](../../media/261-testplans-01.png "Screenshot of associate test from pipeline run.")](../../media/261-testplans-01.png#lightbox)

### Fixed missing link cleanup when deleting shared steps

Resolved a defect that prevented the Related Work link from being removed when a shared step was deleted from a test case.