---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sandrica
author: silviu.andrica
ms.date: 07/07/2020
---

#### My CI or PR triggers have been working fine. But, they stopped working now.

First, go through the troubleshooting steps in the previous question, then follow these additional steps:

* Do you have merge conflicts in your PR? For a PR that didn't trigger a pipeline, open it and check whether it has a merge conflict. Resolve the merge conflict.

* Are you experiencing a delay in the processing of push or PR events? You can usually verify a delay by seeing if the issue is specific to a single pipeline or is common to all pipelines or repos in your project. If a push or a PR update to any of the repos exhibits this symptom, we might be experiencing delays in processing the update events. Here are some reasons why a delay may be happening:
  * We are experiencing a service outage on our [status page](https://status.dev.azure.com/). If the status page shows an issue, then our team must have already started working on it. Check the page frequently for updates on the issue.
  * Your repository contains too many YAML pipelines. For best performance, we recommend a maximum of 50 pipelines in a single repository. For acceptable performance, we recommend a maximum of 100 pipelines in a single repository. The more pipelines there are, the slower the processing of a push to that repository. Whenever there is push to a repository, Azure Pipelines needs to load all YAML pipelines in that repository, to figure out if any of them need to run, and each new pipeline incurs a performance penalty.
