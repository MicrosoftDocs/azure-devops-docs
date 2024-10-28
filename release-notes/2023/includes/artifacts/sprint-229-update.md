---
author: ckanyika
ms.author: ckanyika
ms.date: 10/26/2023
ms.topic: include
---

### Deprecation announcement for NuGet Restore v1 and NuGet Installer v0 pipeline tasks

If you're using the NuGet Restore v1 and NuGet Installer v0 pipeline tasks, promptly transition to the [NuGetCommand@2](/azure/devops/pipelines/tasks/reference/nuget-command-v2) pipeline task. You'll begin receiving alerts in your pipelines soon if the transition hasn't been made. If no action is taken, starting November 27, 2023, your builds will result in failure. For more information, see [Migrate from NuGetInstaller@0 or NuGetRestore@1](/azure/devops/pipelines/tasks/reference/nuget-command-v2#migrate-from-nugetinstaller0-or-nugetrestore1).