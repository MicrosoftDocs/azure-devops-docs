---
title: TFS/TestManagement/Contracts TestRunState API | Extensions for Azure DevOps Services
description: Data representation of a test run state.
ms.assetid: a94ee7d8-f00c-8930-8e1e-519ee67e5e7f
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: mijacobs
author: chcomley
ms.topic: article
ms.author: chcomley
ms.date: 08/04/2016
---

# TestRunState

Module path: `TFS/TestManagement/Contracts`

### Values

* `Unspecified` Only used during an update to preserve the existing value.
* `NotStarted` The run is still being created.  No tests have started yet.
* `InProgress` Tests are running.
* `Completed` All tests have completed or been skipped.
* `Aborted` Run is stopped and remaining tests have been aborted
* `Waiting` Run is currently initializing This is a legacy state and should not be used any more
* `NeedsInvestigation` Run requires investigation because of a test point failure This is a legacy state and should not be used any more
