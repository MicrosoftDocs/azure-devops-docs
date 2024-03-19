---
author: ckanyika
ms.author: ckanyika
ms.date: 3/20/2024
ms.topic: include
---

### Azure Service Connections convey when a secret has expired

You can now see whether an Azure service connection has an expired secret. If your tasks emit a message indicating a secret has expired (for example, including _AADSTS7000222_) visit the service connection details page. If you see the following message, the service connection's secret has expired:

> [!div class="mx-imgBorder"]
> ![Screenshot of secret has expired.](../../media/236-pipelines-02.png "Screenshot of secret has expired")

To fix the service connection, you can [convert](https://aka.ms/azdo-rm-workload-identity-conversion) it to use workload identity federation instead and eliminate the need to rotate secrets.

### The Pipelines agent shows resource utilization issues more prominently

[Last October](https://learn.microsoft.com/azure/devops/release-notes/2023/pipelines/sprint-228-update#pipeline-logs-now-contain-resource-utilization), we added the ability to track memory & disk space usage by the Pipelines agent.

To make customers aware, they may have resource constraints such as memory or disk space limitations on their agent, we have made resource constraints more visible:

> [!div class="mx-imgBorder"]
> ![Screenshot of Limited memory and disk space warning.](../../media/236-pipelines-01.png "Screenshot of Limited memory and disk space warning")

If you see any of the above messages, this may be caused by a task using more resources than the agent is dimensioned for which may result in the agent not being responsive and failing a pipeline job:

> "We stopped hearing from the agent"

In such cases, please enable [verbose logs](https://learn.microsoft.com/azure/devops/pipelines/troubleshooting/review-logs?view=azure-devops#configure-verbose-logs) to get more finer grained resource utilization messages and track where your agent ran out of resources. If you're using a Self-hosted agent, make sure your agent has adequate resources.


