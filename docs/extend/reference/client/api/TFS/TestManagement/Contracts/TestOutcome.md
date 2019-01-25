---
title: TFS/TestManagement/Contracts TestOutcome API | Extensions for Azure DevOps Services
ms.assetid: a2a15ae6-687e-a316-0278-64f117011a86
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TestOutcome

Module path: `TFS/TestManagement/Contracts`

### Values

* `Unspecified` Only used during an update to preserve the existing value.
* `None` Test has not been completed, or the test type does not report pass/failure.
* `Passed` Test was executed w/o any issues.
* `Failed` Test was executed, but there were issues. Issues may involve exceptions or failed assertions.
* `Inconclusive` Test has completed, but we can&#x27;t say if it passed or failed. May be used for aborted tests...
* `Timeout` The test timed out
* `Aborted` Test was aborted. This was not caused by a user gesture, but rather by a framework decision.
* `Blocked` Test had it chance for been executed but was not, as ITestElement.IsRunnable == false.
* `NotExecuted` Test was not executed. This was caused by a user gesture - e.g. user hit stop button.
* `Warning` To be used by Run level results. This is not a failure.
* `Error` There was a system error while we were trying to execute a test.
* `NotApplicable` Test is Not Applicable for execution.
* `Paused` Test is paused.
* `InProgress` Test is currently executing. Added this for TCM charts
* `MaxValue` 
