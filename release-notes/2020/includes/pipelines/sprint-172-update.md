---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 07/09/2020
ms.topic: include
---

### Do not deploy more than one run at the same time

With this update, you can ensure that only a single run deploys to an environment at a time. By choosing the &quot;Exclusive lock&quot; check on an environment, only one run will proceed. Future runs which want to deploy to that environment will be paused. Once the run with the exclusive lock completes, the latest run will proceed. Any intermediate runs will be canceled.

![img](../../media/172-pipelines-0-0.png)<br></div>

    