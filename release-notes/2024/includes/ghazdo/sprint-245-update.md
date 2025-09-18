---
author: ckanyika
ms.author: ckanyika
ms.date: 9/26/2024
ms.topic: include
---

### Pull request branches now visible in Advanced Security branch picker

Pull request branches were previously hidden in the branch picker, even though scanning on pull request branches was possible. Now, these branches are visible in the Advanced Security branch picker and can be searched.

> [!div class="mx-imgBorder"]
> [![Screenshot of Pull request branches.](../../media/245-ghazdo-01.png "Screenshot of Pull request branches")](../../media/245-ghazdo-01.png#lightbox)


### Automatic updates for default branch changes in Advanced Security

In the past, the Advanced Security repository tab did not automatically update when the default branch changed, requiring manual selection of the new branch in the branch picker. Now, the tab automatically detects and displays alerts for the newly designated default branch upon visiting the page.

Additionally, the Security Overview updates to reflect default branch changes, although there may be a slight delay before the updated alert results are processed.

### Generic third-party SARIF support for Advanced Security 

You can now upload results from your third-party scanning tool to show in the Advanced Security code scanning tab. 

Using a scanning tool that publishes a SARIF file to the `$(Agent.TempDirectory)/.advsec` directory, conforms to the SARIF 2.1 standard, and runs the [AdvancedSecurity-Publish@1](/azure/devops/pipelines/tasks/reference/advanced-security-publish-v1?view=azure-pipelines) after the task will upload results to the code scanning tab.

> [!NOTE]
> The file path associated with a result in the SARIF file must be accessible to the `AdvancedSecurity-Publish@1` task running in the build agent.

### Alert rule IDs now integrated into result fingerprints 

Previously, third-party tool results with the same fingerprint, hash, tool, and rule name were grouped into one alert, even if they had different rule IDs.

With this update, rule IDs are now included in the fingerprint, creating separate alerts for results with different rule IDs, even if other data points are the same. Existing alerts will be updated and split accordingly.

### Expanded set of Secret Scanning detections

We're expanding the set of partner patterns that can be detected with Secret Scanning. This expansion brings in several high confidence patterns for new token types.

For more information on the types of partner patterns that GitHub Advanced Security Secret Scanning detects, see [Secret scanning alerts for GitHub Advanced Security for Azure DevOps](/azure/devops/repos/security/github-advanced-security-secret-scanning?view=azure-devops&branch=main#secret-scanning-patterns&preserve-view=true).
