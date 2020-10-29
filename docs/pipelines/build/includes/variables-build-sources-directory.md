---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s`<br /><br />By default, new build pipelines update only the changed files. You can modify how files are downloaded on the [Repository tab](../../repos/index.md).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.