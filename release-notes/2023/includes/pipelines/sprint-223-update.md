---
author: gloridelmorales
ms.author: glmorale
ms.date: 6/6/2023
ms.topic: include
---

### Checks user experience improvements

We are making reading check logs easier. Checks are critical sources of information for your deployment's success. They can tell you if you forgot to close a work item ticket, or that you need to update a ticket in ServiceNow. Alas, knowing that a check provided such critical information is hard today.

The pipeline run details page shows the latest check log _only_ for checks that follow our [recommended usage](https://learn.microsoft.com/azure/devops/pipelines/process/invoke-checks).

> [!div class="mx-imgBorder"]
> ![Image showing latest check log.](../../media/223-pipelines-01.png "showing latest check log")

To prevent mistakenly approved _Approvals_, Azure DevOps shows the _Instructions to approvers_ in the _Approvals and checks_ side panel in a pipeline run's detail page.

> [!div class="mx-imgBorder"]
> ![Waiting for pipeline review image.](../../media/223-pipelines-02.png "image showing waiting for pipeline")


### Scalable Invoke Azure Function and REST API checks changes

[Approvals and Checks](https://learn.microsoft.com/azure/devops/pipelines/process/approvals) allow you to control if a pipeline run is allowed to access a resource. This is a runtime check that provides increased security to your YAML pipelines.

We noticed that when an organization makes extensive use of the Invoke Azure Function & REST API checks, they do not scale. That is, a modest increase in the number of running checks leads to abnormally large delays in checks execution time, negatively impacting deployment experience.

Our solution to scale Invoke Azure Function and REST API checks is to enforce checks' functionality to match [recommended usage](https://learn.microsoft.com/azure/devops/pipelines/process/invoke-checks). If you followed our guidelines, your checks are compliant and need no further changes.

[Read more about the upcoming changes](https://devblogs.microsoft.com/devops/updates-to-approvals-and-checks/).

### Disable a check 

We are making debugging checks less tedious. Sometimes, an Invoke Azure Function or Invoke REST API check doesn't work correctly, and you need to fix it. Previously, you had to delete such checks, to prevent them from erroneously blocking a deployment. Once you fixed the check, you had to add it back, and configure it correctly, making sure all the required headers are set or the query parameters are correct. This is tedious.

Now, you can just disable a check.

> [!div class="mx-imgBorder"]
> ![Disable a check image.](../../media/223-pipelines-03.png "image showing disable check for pipeline")


And once you fix it, you can just enable it.

> [!div class="mx-imgBorder"]
> ![Enable a check image.](../../media/223-pipelines-04.png "image showing enable check for pipeline")
>
### Instructions for manual pre-installation of Node 6 on Pipeline agents

Customers that use the [`pipeline-` agent feed](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/node6.md) do not have Node 6 included in the agent. In some cases, where a Marketplace task is still dependent on Node 6 and the agent is not able to use the [NodeTaskRunnerInstaller task](https://learn.microsoft.com/azure/devops/release-notes/2023/pipelines/sprint-218-update#node-runner-download-task) (e.g. due to connectivity restrictions), users need to pre-install Node 6 independently. We provided an [instruction](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/noderunner.md) on how to do that.

### Pipeline task changelog

We now publish changes to Pipeline tasks to this [changelog](https://github.com/microsoft/azure-pipelines-tasks/releases). This contains the complete list of changes made to [built-in Pipeline tasks](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/?view=azure-pipelines). We have retroactively published prior changes, so the changelog provides a historical record of task updates.
