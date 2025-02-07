---
author: ckanyika
ms.author: ckanyika
ms.date: 2/10/2025
ms.topic: include
---
### GitHub Advanced tracks default branch changes across experiences 

GitHub Advanced Security now automatically detects default branch changes and updates the security overview and repository-level alert view to reflect the latest configuration.

We received feedback that default branches are frequently updated in repositories, while Advanced Security continued displaying results for the previous selection. This update ensures your security insights stay accurate and aligned.


### CodeQL installation for self-hosted agents supports proxy configurations

Automatic CodeQL installation now supports network proxy configurations. Previously, the `enableAutomaticCodeQLInstall` setting could fail when downloading the CodeQL tool cache to self-hosted agents. We've introduced handling for network proxies so that automatic installation will run successfully.

### Alerts branch picker returns all branches with successful scan  

The branch picker in Advanced Security has been updated to display all branches with a successful scan, even if no vulnerabilities are detected. Previously, only branches with alerts were shown, making it difficult to confirm whether a scan had completed successfully

Both the repository-level alerts UX and the [Analysis - List API](https://learn.microsoft.com/rest/api/azure/devops/advancedsecurity/analysis/list?view=azure-devops-rest-7.2) now return branches with a successful SARIF submission for dependency and code scanning, improving scan visibility.

### Pull request annotations experience improvements

With this release, we improved the pull request annotation experience in Advanced Security in a few places: 
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