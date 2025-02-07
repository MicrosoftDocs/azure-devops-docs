---
author: ckanyika
ms.author: ckanyika
ms.date: 2/6/2025
ms.topic: include
---
### GitHub Advanced Security Now Tracks Default Branch Changes

The repository-level alert UX now displays alerts for the current default branch, and the security overview reflects only the latest default branch selection. We've received feedback that some users often change the default branch for their repositories while the Advanced Security experiences continued showing results for their old default branch selection. 

With this update, Advanced Security automatically updates the security overview and repository-level views shortly after a new default branch is assigned.


### CodeQL installation for self-hosted agents supports proxy configurations

If you have a network proxy configured, the enableAutomaticCodeQLInstall setting may have previously failed when downloading the CodeQL tool cache to your self-hosted agent. We've introduced handling for network proxies, ensuring that automatic installation completes successfully.

### Alerts branch picker returns all branches with successful scan  

Previously, it was difficult to know if your Advanced Security scan was successful if your branch had no vulnerabilities detected as the branch picker would only display branches with alerts present. 

Both the repository-level alerts UX and the [Analysis - List API](https://learn.microsoft.com/rest/api/azure/devops/advancedsecurity/analysis/list?view=azure-devops-rest-7.2) now return branches with a successful SARIF submission for dependency and code scanning, even if no alerts are detected.

### Pull request annotations experience improvements

In this release, we've improved the pull request annotation experience in Advanced Security in a few places: 
* Increased dependency scanning annotations: Advanced Security will display pull request annotations even when Advanced Security cannot determine physical file location.
* Auto-closure: pull request comments will be automatically resolved if the associated alert is dismissed. 
We've also introduced performance improvements and batch handling for pull request events for a smoother experience.

### Get Alerts API enhancements and additional properties 

There are a number of improvements for the Advanced Security Get Alerts API:
* Minimal API expand option: fetch a minimal version of the Alerts API using the parameter `expand=minimal` in your payload. E.g.: `https://advsec.dev.azure.com/{organization}/{project}/_apis/Alert/repositories/{repository}/Alerts?expand=minimal`. 

> [!div class="mx-imgBorder"]
> [![Screenshot of security overview.](../../media/251-ghazdo-01.png "Screenshot of security overview")](../../media/251-ghazdo-01.png#lightbox)

* New metadata for alerts: the Alerts API now returns specific `AdditionalProperties` such as CVE ID or advisory ID for dependency alerts and tags for code scanning alerts. 
* Batched Alert API calls: use `criteria.alertIds={alertId1},{alertId2}` with the Alerts API to receive details for a comma separated list of alert IDs. E.g.:   `https://advsec.dev.azure.com/{organization}/{project}/_apis/Alert/repositories/{repository}/Alerts?criteria.alertIds=100,200,130`.