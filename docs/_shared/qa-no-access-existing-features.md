#### Q: Why can't users access some features?

A: Make sure that users have the correct [access level](https://visualstudio.microsoft.com/team-services/compare-features/) assigned to them.  

* Learn [how to manage users and access levels for Azure DevOps](../organizations/accounts/add-organization-users.md).

* Learn [how to change access levels for Team Foundation Server](/azure/devops/organizations/security/change-access-levels).

Some features are available only as [extensions](https://visualstudio.microsoft.com/team-services/compare-features/). You need to install these extensions. Most extensions require you to have at least Basic access, not Stakeholder access. Check the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

For example, to search your code, you can install the free [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search), but you need at least Basic access to use the extension.

To help your team improve app quality, you can install the free [Test & Feedback extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web), but you get different capabilities based on your access level and whether you work offline or connected to Azure DevOps Services or Team Foundation Server (TFS).

To create test plans, assign bu[Basic + Test Plans access level](../organizations/billing/buy-basic-plus-test-plans.md). Some [Visual Studio subscribers](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) can use this feature for free, but Basic users need to upgrade to Basic + Test Plans access before they can create test plans.

* Learn [how to get extensions for Azure DevOps](/azure/devops/marketplace/install-extension).
* Learn [how to get extensions for TFS](/azure/devops/marketplace/get-tfs-extensions).
* Learn [how to buy access to TFS Test](/azure/devops/organizations/billing/buy-access-tfs-test-hub).
