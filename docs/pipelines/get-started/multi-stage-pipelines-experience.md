---
title: Multi-stage pipelines user experience
ms.custom: seodec18
description: Learn how to navigate using the multi-stage pipelines user interface
ms.topic: reference
ms.author: sdanie
author: steved0x
ms.date: 12/20/2022
monikerRange: '> azure-devops-2019'
---

# Multi-stage pipelines user experience

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

The multi-stage pipelines experience brings improvements and ease of use to the Pipelines portal UI. This article shows you how to view and manage your pipelines using this new experience.







### Runs

Select **Runs** to view the runs for that pipeline. You can optionally filter the displayed runs.

![Pipeline runs](media/pipeline-runs.png)

You can choose to **Retain** or **Delete** a run from the context menu. For more information on run retention, see [Build and release retention policies](../policies/retention.md).

![Pipeline run context menu](media/pipeline-run-context-menu.png)

### Branches

Select **Branches** to view the history or run for that branch. Hover over the **History** to view a summary for each run, and select a run to navigate to the details page for that run.

![Pipeline branches](media/pipeline-branches.png)

### Analytics

Select **Analytics** to view pipeline metrics such as pass rate and run duration. Choose **View full report** for more information on each metric.

![Pipeline analytics](media/pipeline-analytics.png)

## View pipeline run details

From the pipeline run summary you can view the status of your run, both while it is running and when it is complete.

![Pipeline run summary](media/pipeline-run-summary.png)

From the summary pane you can download artifacts, and navigate to linked commits, test results, and work items.

### Cancel and re-run a pipeline

If the pipeline is running, you can cancel it by choosing **Cancel**. If the run has completed, you can re-run the pipeline by choosing **Run new**.

![Cancel pipeline run](media/cancel-pipeline-run.png)

<a name="download-logs"></a>
### Pipeline run more actions menu

From the **More actions** :::image type="icon" source="../../media/icons/more-actions.png"::: menu you can download logs, add tags, edit the pipeline, delete the run, and configure [retention](../policies/retention.md) for the run.

![Pipeline run summary more actions menu](media/pipeline-run-summary-context-menu.png)

> [!NOTE]
> You can't delete a run if the run is retained. If you don't see **Delete**, choose **Stop retaining run**, and then delete the run. If you see both **Delete** and **View retention releases**, one or more configured retention policies still apply to your run. Choose **View retention releases**, delete the policies (only the policies for the selected run are removed), and then delete the run.


### Jobs and stages

The jobs pane displays an overview of the status of your stages and jobs. This pane may have multiple tabs depending on whether your pipeline has stages and jobs, or just jobs. In this example, the pipeline has two stages named **Build** and **Deploy**. You can drill down into the pipeline steps by choosing the job from either the **Stages** or **Jobs** pane.

![Pipeline jobs](media/pipeline-jobs-pane.png)

Choose a job to see the steps for that job.

![Pipeline tasks](media/pipeline-steps-list.png)

From the steps view, you can review the status and details of each step. From the **More actions** :::image type="icon" source="../../media/icons/more-actions.png"::: you can toggle timestamps or view a raw log of all steps in the pipeline.

![Pipeline tasks more actions menu](media/pipeline-steps-context-menu.png)



:::moniker range="azure-devops"

## Task insights for failed pipeline runs

Azure DevOps provides a **Task Insights for Failed Pipeline Runs** setting, that when enabled, provides pop-up notifications of build failures with a link to view a report.

:::image type="content" source="media/task-insights.png" alt-text="This task has failed pop-up.":::

To configure this setting, navigate to [Preview features](../../project/navigation/preview-features.md), find **Task Insights for Failed Pipeline Runs**, and choose the desired setting.

:::image type="content" source="media/task-insights-setting.png" alt-text="Task insights for failed pipeline runs setting.":::

:::moniker-end

## Next steps

Learn more about configuring pipelines in the language of your choice:

* [.NET Core](../ecosystems/dotnet-core.md)
* [Go](../ecosystems/go.md)
* [Java](../ecosystems/java.md)
* [Node.js](../ecosystems/javascript.md)
* [Python](../ecosystems/python.md)
* [Containers](../ecosystems/containers/build-image.md) and [Container jobs](../process/container-phases.md)

Learn more about building [Azure Repos](../repos/azure-repos-git.md) and [GitHub](../repos/github.md) repositories.

To learn what else you can do in YAML pipelines, see [Customize your pipeline](../customize-pipeline.md), and for a complete reference see [YAML schema reference](/azure/devops/pipelines/yaml-schema).





