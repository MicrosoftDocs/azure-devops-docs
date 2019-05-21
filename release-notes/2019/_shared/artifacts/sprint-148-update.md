---
ms.topic: include
---

### All Artifacts package types supported in releases

Until now, only NuGet packages have been supported in the [Azure Artifacts artifact type](https://docs.microsoft.com/azure/devops/pipelines/release/artifacts?view=azure-devops#nuget) in Pipelines releases. With this update, all Azure Artifacts package types - Maven, npm, Python, and Universal - are supported.

### Artifacts views supported in releases

Previously, the Azure Artifacts artifact type could only trigger when new package versions were published to the feed. Now, we've also added support for views, so you can trigger releases when packages already in the feed are promoted to a view.

### Retention policies can skip packages downloaded recently

Until now, Azure Artifacts feeds have offered basic retention policies that would start deleting old package versions when a "maximum number of versions per package" was reached. With this update, we've added the ability to skip recently-downloaded packages when doing this clean-up. To enable, edit your feed and check the **Skip packages downloaded recently** checkbox.