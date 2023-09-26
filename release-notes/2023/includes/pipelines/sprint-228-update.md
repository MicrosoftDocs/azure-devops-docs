---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/27/2023
ms.topic: include
---
### Pipeline logs now contain resource utilization

Azure pipeline logs can now capture resource utilization metrics such as memory, CPU usage and available disk space. The logs also include resources used by the pipeline agent and child processes including tasks run in a job.

> [!div class="mx-imgBorder"]
> ![Screenshot of logs including resources used by the pipeline.](../../media/228-pipelines-01.png " Screenshot of logs including resources used by the pipeline.")

If you suspect your pipeline job may run into resource constraints, enable [verbose logs](https://learn.microsoft.com/azure/devops/pipelines/troubleshooting/review-logs?view=azure-devops#configure-verbose-logs) to have resource utilization information injected into pipeline logs. This works on any agent, independent from hosting model.