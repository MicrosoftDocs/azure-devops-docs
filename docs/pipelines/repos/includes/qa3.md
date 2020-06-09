---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

### My CI or PR runs have been working fine. But, they stopped working suddenly. Updates to the code no longer start new runs.

* If you use YAML pipelines, ensure that your CI or PR trigger isn't being [overridden by pipeline settings in the UI](../../troubleshooting/troubleshooting.md#overridden-yaml-trigger-setting). Open the editor for the pipeline and select **Triggers**. Verify that the triggers are not overridden.

* Ensure that your pipeline is not paused or disabled. If you have a YAML pipeline, then open the editor for the pipeline, and then select **Settings** to check. If you have a classic build pipeline, then open the editor for the pipeline, and then select **Options**.

* Have you changed anything in the pipeline? If you have a YAML pipeline, check the history of changes on the YAML file. If you have a classic pipeline, then open the editor for the pipeline, and view **History**.

* Have you excluded the paths to which you pushed your changes? Test by pushing a change to an included path in an included branch.

* Is this issue happening with a specific pipeline or with all pipelines. If all of your pipelines stopped working, we might be experiencing delays in processing the update events. Check if we are experiencing a service outage on our [status page](https://status.dev.azure.com/). If the status page shows an issue, then our team must have already started working on it. Check the page frequently for updates on the issue.

