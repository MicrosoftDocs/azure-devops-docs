---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 07/07/2020
---

#### My CI or PR triggers have been working fine. But, they stopped working now.

First go through the troubleshooting steps in the previous question. Then, follow these additional steps:

* Do you have merge conflicts in your PR? For a PR that did not trigger a pipeline, open it and check whether it has a merge conflict. Resolve the merge conflict.

* Are you experiencing a delay in the processing of push or PR events? You can usually verify this by seeing if the issue is specific to a single pipeline or is common to all pipelines or repos in your project. If a push or a PR update to any of the repos exhibits this symptom, we might be experiencing delays in processing the update events. Check if we are experiencing a service outage on our [status page](https://status.dev.azure.com/). If the status page shows an issue, then our team must have already started working on it. Check the page frequently for updates on the issue.

