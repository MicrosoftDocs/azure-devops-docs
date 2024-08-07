---
author: ckanyika
ms.author: ckanyika
ms.date: 7/25/2024
ms.topic: include
---

### Azure Pipelines tasks use Node 20

Most Pipeline tasks use Node as a runner. Azure Pipelines task that use NodeJS as a runner now all use NodeJS 20. Authors of task extensions should update their tasks to use Node 20, see https://aka.ms/node-runner-guidance for upgrade guidance.

### Create build pipeline permission

To increase pipeline security, we are introducing a new permission, _Create build pipeline_, at Pipelines level. 

> [!div class="mx-imgBorder"]
> [![Screenshot of create build pipeline permission.](../../media/243-pipelines-01.png "Screenshot of create build pipeline permission")](../../media/243-pipelines-01.png#lightbox)

Previously, users required the _Edit build pipeline_ permission to either create a pipeline or edit a pipeline. This posed a security concern, because it meant that all users who should be able to create a pipeline could also edit pipelines they didn't create by default. Preventing this was tedious.

To prevent negatively impacting your pipeline experience, all users and groups who have _Edit build pipeline_ permission will get the _Create build pipeline_ permission. 

When a pipeline is created, its creator gets the _Edit build pipeline_ permission. 

You may choose to remove the _Edit build pipeline_ permission from user groups such as _Contributors_ and _Readers_, to improve your pipelines' security. This means that, by default, only a pipeline's creator is able to edit the pipeline.

Note: The _Edit build pipeline_ permission does not protect a YAML pipeline from being edited by those who dont have this permission. It protects the pipeline from having its properties edited.

Note: For new projects, users and group who have the _Edit build pipeline_ permission also get the _Create build pipeline_ permission. This is subject to change in the future.