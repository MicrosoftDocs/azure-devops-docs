---
author: ckanyika
ms.author: ckanyika
ms.date: 2/19/2025
ms.topic: include
---


### ubuntu-latest now runs Ubuntu 24.04



### Show warnings for Ubuntu-24.04 jobs that use certain tasks



### Migrate Agent CDN URL from Edgio endpoint to a custom URL


### Upgrade Gradle task


### Informational runs

[Informational runs] tell you Azure Pipelines failed to determine if a pipeline should run or not, because it couldn't process the pipeline's YAML file. Examples of such failures are failures to retrieve the YAML source code or errors in it. 

Starting with this sprint, we're adding support for informational runs for pipelines hosted in Azure Repos. You can see an example below.

> [!div class="mx-imgBorder"]
> [![Screenshot of informational runs.](../../media/252-pipelines-01.png "Screenshot of informational runs")](../../media/252-ghazdo-01.png#lightbox)

The pipeline run error tells you the YAML file is incorrect, and this prevents Azure Pipelines from evaluating its trigger conditions.

### Ability to disable release pipelines