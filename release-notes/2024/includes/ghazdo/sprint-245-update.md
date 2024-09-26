---
author: ckanyika
ms.author: ckanyika
ms.date: 9/26/2024
ms.topic: include
---

### Pull request branches appear in Advanced Security branch picker 

Pull request branches were previously hidden in the branch picker despite being able to scan on pull request branches. These results now show accordingly in the Advanced Security branch picker and are searchable. 

> [!div class="mx-imgBorder"]
> [![Screenshot of Pull request branches.](../../media/245-ghazdo-01.png "Screenshot of Pull request branches")](../../media/245-ghazdo-01.png#lightbox)


### Repository default branch changes now reflected in Advanced Security 

Previously, the Advanced Security repository tab didn't automatically update to reflect changes to the default branch, requiring manual selection of the desired branch through the branch picker. Now, the tab automatically recognizes and loads alerts for the newly designated default branch when you visit the page.

The Security Overview also updates to reflect default branch changes, though there may be a longer delay before the updated alert results are processed.


### Generic third-party SARIF support for Advanced Security 

You can now upload results from your third-party scanning tool to show in the Advanced Security code scanning tab. 

Using a scanning tool that publishes a SARIF file to the `$(Agent.TempDirectory)/.advsec` directory, conforms to the SARIF 2.1 standard, and runs the [AdvancedSecurity-Publish](/azure/devops/pipelines/tasks/reference/advanced-security-publish-v1?view=azure-pipelines) after the task will upload results to the code scanning tab.

> [!NOTE]
> The file path associated with a result in the SARIF file must be accessible to the `AdvancedSecurity-Publish` task running in the build agent.

### Alert rule IDs now incorporated into result fingerprints 

Previously, third-party tool results with the same fingerprint, hash, tool, and rule name were grouped into one alert, even with different rule IDs.

Now, rule IDs are included in the fingerprint, creating separate alerts for results with different rule IDs, even if other data is the same. Existing alerts will also be updated and split accordingly.

### Pull request annotations feature in (preview)

As outlined in the Advanced Security roadmap item, [Pull-request annotations](/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation), you will now receive in-line annotations on pull requests that use a pipeline linked to your build validation policy with dependency or code scanning tasks.

No opt-in is required—just create a build validation policy for the relevant branches.

Clicking `Show more details` in the annotation will take you to the alert detail view.

> [!div class="mx-imgBorder"]
> [![Screenshot of In-line annotations.](../../media/245-ghazdo-02.png "Screenshot of in-line annotations")](../../media/245-ghazdo-02.png#lightbox)

