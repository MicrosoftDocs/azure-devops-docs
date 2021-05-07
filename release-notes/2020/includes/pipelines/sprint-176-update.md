---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 10/01/2020
ms.topic: include
---

### Configure draft PR validation for GitHub repositories

Customers have varied processes for their pull requests. In some cases, they want to run validation builds on their _draft PRs_. In others, they do not want draft PRs to consume and waste their parallel jobs.

This feature adds `drafts` to the `pr` trigger YAML syntax for GitHub draft pull requests. This feature allows a customer to choose if they would like their draft PRs to queue a build. The default option is true (a build will be queued) like it currently is for GitHub PRs. This change works for both OAuth and GitHubApp connections.

Schema:

```yml
pr:
  autoCancel: boolean # indicates whether additional pushes to a PR should cancel in-progress runs for the same PR. Defaults to true
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
  drafts: boolean # whether to build draft PRs
```

This feature only applies to PRs in GitHub. There is no change in behavior for Azure Repos, where PR validation is configured through branch policies. Draft PRs in Azure Repos are not validated by Azure Pipelines.