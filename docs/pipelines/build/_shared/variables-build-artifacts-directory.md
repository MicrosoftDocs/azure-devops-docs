---
ms.topic: include
---

The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent\_work\1\a`

A typical way to use this folder is to publish your build artifacts with the [Copy files](../../tasks/utility/copy-files.md) and [Publish build artifacts](../../tasks/utility/publish-build-artifacts.md) tasks.

> [!NOTE]
>
> Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don't have to clean it up yourself.
> 
> See [Artifacts in Team Build](../artifacts.md).
