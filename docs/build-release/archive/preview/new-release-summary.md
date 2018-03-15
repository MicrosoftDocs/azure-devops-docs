---
title: New release progress views
description: A preview of a new user experience for release progress on VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 35CC58CC-0FB2-4C02-87C8-9C78459A84F4
ms.manager: douge
ms.author: ahomer
ms.date: 02/01/2018
---
[//]: # (monikerRange: "vsts")

# New release progress views

A new and fully redesigned user experience is available for release progress in VSTS.
To use this page, you simply need to switch it on using one of the on-screen prompts,
or from the [user profile **Previews** panel](../../../collaborate/preview-features.md#enable-features-for-your-use).

Open the new pipeline view using the link in the toolbar.

![Opening the Pipeline view](_img/new-release-summary/pipeline-link.png)

The view shows information about the release and the deployment results. 

![Opening the Pipeline view](_img/new-release-summary/pipeline-view.png)

Use the links in the pipeline view to see more details.

## Pipeline, artifacts, and environments

| Feature | Details |
| --- | --- | 
| ![Release object](_img/new-release-summary/artifacts.png) | See your triggers, artifacts, tags, and who requested the release. |
| ![Environments](_img/new-release-summary/environment.png) | See your environments with details of deployment progress, outcome, test status, and more. |
| ![Deployment conditions](_img/new-release-summary/pre-post-deployment.png) | See details of the pre- and post-deployment conditions you defined. |
| ![Deployment status](_img/new-release-summary/in-progress.png) | See the status and details of the deployment to each environment. |

## Pre- and post-deployment gates and approvals

The deployment conditions links open the information panels for pre- and post-deployment conditions.

![Pre- and post-deployment conditions panels](_img/new-release-summary/pre-post-panel.png)

## Commits and workitems

Choose the environment in the pipeline to see a summary of commits and workitems related to this release.

![Commits and workitems panel](_img/new-release-summary/commits.png)

## In-progress deployments and logs

Choose the progress indicator for an environment to see the live deployment logs.

![Logs panel](_img/new-release-summary/logs.png)

## Test results and extensions

Choose the test results indicator for an environment to see a summary of test results.

![Test results](_img/new-release-summary/tests.png)

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
