---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent_work\1\a`
<br/><br/>
A typical way to use this folder is to publish your build artifacts with the [Copy files](../../tasks/utility/copy-files.md) and [Publish build artifacts](../../tasks/utility/publish-build-artifacts.md) tasks.
<br/><br/>
Note: Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable. This directory is purged before each new build, so you don't have to clean it up yourself.
<br/><br/> 
See [Artifacts in Azure Pipelines](../../artifacts/artifacts-overview.md).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.