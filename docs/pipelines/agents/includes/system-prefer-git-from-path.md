---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 05/12/2023
---

<!-- No header file, specify the desired level of header file in the enclosing article -->

By default, the Windows agent uses the version of Git that is bundled with the agent software, even if the agent machine has a different version installed in the path. Microsoft recommends using the version of Git that is bundled with the agent, but you have several options to override this default behavior.

* Set a pipeline variable named `System.PreferGitFromPath` to `true` in your pipelines.
* On self-hosted agents, you can create a file named **.env** in the agent root directory and add a `System.PreferGitFromPath=true` line to the file. For more information, see [How do I set different environment variables for each individual agent?](../windows-agent.md#how-do-i-set-different-environment-variables-for-each-individual-agent)

To see the version of Git used by a pipeline, you can look at the logs for a `checkout` step in your pipeline, as shown in the following example.

```
Syncing repository: PathFilter (Git)
Prepending Path environment variable with directory containing 'git.exe'.
git version
git version 2.26.2.windows.1
```
