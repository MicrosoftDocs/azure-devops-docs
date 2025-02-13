---
author: ckanyika
ms.author: ckanyika
ms.date: 2/12/2025
ms.topic: include
---
### GitHub Advanced Security updates for default branch changes 

Within GitHub Advanced Security, navigating to the advanced security tab shows the alert state for your default branch first, while the Security Overview view pulls alert information for your default branch only.

Now, Advanced Security detects changes to your default branch and updates both the Security Overview and repository-level alert view shortly after the default branch assignment is changed.


### CodeQL installation for self-hosted agents supports proxy configurations

If you have a network proxy configured and used the `enableAutomaticCodeQLInstall ` variable in the `AdvancedSecurity-CodeQL-Init` task, the task may have previously encountered the error message `[warning] Maximum number of redirects exceeded`  when downloading the CodeQL tool cache to your self-hosted agent. With this update, we introduce handling for network proxies so that automatic installation runs successfully.

### Alerts branch picker now displays all branches with a successful scan  

The branch picker in GitHub Advanced Security has been updated to display all branches with a successful scan, even if no vulnerabilities are detected. Previously, only branches with alerts were shown, making it difficult to confirm whether a scan completed successfully.

Both the repository-level alerts UX and the [Analysis - List API](https://learn.microsoft.com/rest/api/azure/devops/advancedsecurity/analysis/list?view=azure-devops-rest-7.2) now return branches with a successful SARIF submission for dependency and code scanning, improving scan visibility.

### Enhanced pull request annotations in GitHub Advanced Security

With this release, we've improved the pull request annotation experience in GitHub Advanced Security through:
 
* **Increased dependency scanning annotations:** Advanced Security displays pull request annotations even when Advanced Security can't determine physical file location.

* **Auto-closure:** pull request comments will be automatically resolved if the associated alert is dismissed. 
We've also introduced performance improvements and batch handling for pull request events for a smoother experience.

### Improvements for Get Alerts API 

With this update we introduce new improvements for the Advanced Security Get alerts API:

* Minimal API expand option: fetch a minimal version of the Alerts API using the parameter `expand=minimal` in your payload. E.g.: `https://advsec.dev.azure.com/{organization}/{project}/_apis/Alert/repositories/{repository}/Alerts?expand=minimal`. 

> [!div class="mx-imgBorder"]
> [![Screenshot of security overview.](../../media/251-ghazdo-01.png "Screenshot of security overview")](../../media/251-ghazdo-01.png#lightbox)


* New metadata for alerts: the Alerts API now returns specific `AdditionalProperties` such as CVE ID or advisory ID for dependency alerts and tags for code scanning alerts. 

* Batched Alert API calls: use `criteria.alertIds={alertId1},{alertId2}` with the Alerts API to receive details for a comma separated list of alert IDs. E.g.:   `https://advsec.dev.azure.com/{organization}/{project}/_apis/Alert/repositories/{repository}/Alerts?criteria.alertIds=100,200,130`.