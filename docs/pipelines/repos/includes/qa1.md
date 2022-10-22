---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 07/07/2020
---

### A wrong version of the YAML file is being used in the pipeline. Why is that?

* For CI triggers, the YAML file that is in the branch you are pushing is evaluated to see if a CI build should be run.
* For PR triggers, the YAML file resulting from merging the source and target branches of the PR is evaluated to see if a PR build should be run.