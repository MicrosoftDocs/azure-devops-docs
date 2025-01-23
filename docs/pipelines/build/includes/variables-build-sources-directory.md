---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 01/22/2025
---

The local path on the agent where your source code files are downloaded. For example: `c:\agent_work\1\s` For more information about the agent directory structure, see [Agent directory structure](../../agents/agents.md#agent-directory-structure).<br /><br />On self-hosted agents, new build pipelines update only the changed files by default. You can modify how files are downloaded on the [Repository tab](../../repos/index.md).<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.