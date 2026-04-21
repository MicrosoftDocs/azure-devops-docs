---
author: gloridelmorales
ms.author: glmorale
ms.date: 3/31/2026
ms.topic: include
---

### Improved continuous deployment visibility in YAML pipelines

Previously it was difficult to determine which artifacts were deployed in a give run while using YAML based Azure Pipelines for continuous deployment (CD) scenarios. In this sprint, we’ve improved artifact visibility across pipeline runs.

On the pipeline runs overview page, you can now see the artifact used by each run, making it easier to understand what was deployed at a glance.

> [!div class="mx-imgBorder"]
> ![Screenshot showing artifact on runs overview page.](../../media/271-pipelines-01.png "Screenshot showing artifact on runs overview page.")

When viewing an individual run, Azure Pipelines now surfaces the artifacts used by that run at the top of the run details page.

> [!div class="mx-imgBorder"]
> ![Screenshot showing artifact on single run page.](../../media/271-pipelines-02.png "Screenshot showing artifact on single run page.")

This functionality works with pipeline artifacts defined as pipeline resources. If multiple artifacts are defined, Azure Pipelines displays the first artifact listed.

### Deployment history for stages


When deploying the same service to multiple instances, it can be difficult to understand which version of the system is currently deployed to each instance.

With this sprint, we’re introducing a new **Stages** experience in Azure Pipelines that provides clear deployment visibility at the pipeline level. The Stages view shows the most recent pipeline run that is currently deployed, or in the process of deploying to each stage in your pipeline.

For example, consider the following YAML pipeline with multiple deployment stages grouped by region:

```yaml
stages:
- stage: deploy_WUS
  group: US Deployment
  displayName: Deploy to WUS
  jobs:
  - job:
    steps:
    - script: ./deploy.sh WUS
- stage: deploy_CUS
  group: US Deployment
  displayName: Deploy to CUS
  jobs:
  - job:
    steps:
    - script: ./deploy.sh CUS
- stage: deploy_WEU
  group: EU Deployment
  displayName: Deploy to WEU
  jobs:
  - job:
    steps:
    - script: ./deploy.sh WEU
- stage: deploy_CEU
  group: EU Deployment
  displayName: Deploy to CEU
  jobs:
  - job:
    steps:
    - script: ./deploy.sh CEU
```

After you run your pipeline a couple of times, and you come to the *Stages* tab, this is what you see.

> [!div class="mx-imgBorder"]
> ![Screenshot showing stages deployment view.](../../media/271-pipelines-03.png "Screenshot showing stages deployment view.")

You can see that the latest run that touched the stage named **Deploy to WUS** was **#20260317** that deployed the system version 20260316.1. For a stage, you see successful or in progress pipeline runs that run that stage.

If you click on the stage name, for example, **Deploy to WUS**, you will get to the stage's logs. If you click on **#20260317 • Deploying build version 20260316.1**, you will get to that pipeline run.

If you click on the row of a stage, you get its deployment history. The history contains completed and in-progress runs that reference the stage.

> [!div class="mx-imgBorder"]
> ![Screenshot showing stages deployment history.](../../media/271-pipelines-04.png "Screenshot showing stages deployment history.")

Deployment pipelines can have hundreds of stages organized in various groups, for example, in a ring structure. We're adding support for specifying a stage's `group`. In the previous screenshot, you can see two groups, **US Deployment** and **EU Deployment**.

The `group` stage property supports multiple levels of nesting. That is, you can have a group whose name reads `EU Deployment\Italy`, like in the following case.

```yaml
- stage: deploy_IT
  group: EU Deployment\Italy
  displayName: Deploy to Italy
  jobs:
  - job:
    steps:
    - script: echo ./deploy.sh IT
```

When you run this stage, the *Stages* view gets updated like in the following screenshot.


> [!div class="mx-imgBorder"]
> ![Screenshot showing stages with multi-level groups.](../../media/271-pipelines-05.png "Screenshot showing stages with multi-level groups.")

Stages are shown as long as there is a run that references them.

A stage needs to have a name to show up in the *Stages* tab. That is, `- stage: deploy_WUS` will show up, while `- stage:` will not.