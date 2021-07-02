---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 07/29/2020
---

#### I do not want users to override the list of branches for triggers when they update the YAML file. How can I do this?

Users with permissions to contribute code can update the YAML file and include/exclude additional branches. As a result, users can include their own feature or user branch in their YAML file and push that update to a feature or user branch. This may cause the pipeline to be triggered for all updates to that branch. If you want to prevent this behavior, then you can:

  1. Edit the pipeline in the Azure Pipelines UI.
  2. Navigate to the **Triggers** menu.
  3. Select **Override the YAML continuous Integration trigger from here**.
  4. Specify the branches to include or exclude for the trigger.

When you follow these steps, any CI triggers specified in the YAML file are ignored.
