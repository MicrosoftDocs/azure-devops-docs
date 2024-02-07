---
author: ckanyika
ms.author: ckanyika
ms.date: 2/8/2024
ms.topic: include
---

### Code snippets now available in alert details view

Code snippets highlighting the affected line of code now appear in the alert detail page for code scanning and secret scanning alerts. To be taken to the original file in your Azure DevOps repository, click on the file name itself above the code snippet that appears. 

> [!div class="mx-imgBorder"]
> ![Screenshot of case-sensitive middleware path.](../../media/234-general-02.png "Screenshot of case-sensitive middleware path")

### Linked Azure subscription required for GHAzDO enablement

If you previously enabled Advanced Security for repositories in an Azure DevOps organization without a linked Azure subscription, you may have noticed Advanced Security automatically disable itself on those repositories. To re-enable Advanced Security, add an associated Azure subscription to the organization. For more information on how to add or change your subscription, see [Change Azure subscription](/azure/devops/organizations/billing/change-azure-subscription?view=azure-devopsthe&preserve-view=true).

### Final notice of alternate credentials deprecation

Alternate credentials were [formally deprecated in March 2020](https://devblogs.microsoft.com/devops/azure-devops-will-no-longer-support-alternate-credentials-authentication/), but a few current users were grandfathered in with ongoing usage of their existing alternate credentials. We're fully deprecating all alternate credentials as of January 2024. To reduce any chance of downtime, replace your alternate credentials with one of the [available authentication mechanisms](/azure/devops/integrate/get-started/authentication/authentication-guidance?view=azure-devopsthe&preserve-view=true) we have, such as personal access tokens or managed identities.

### Azure Devops OAuth self-service secret rotation

Every five years, it's essential to update the **Client Secret** for your Azure DevOps OAuth app, to ensure continuous generation of access and refresh tokens necessary for utilizing Azure DevOps APIs. As your **Client Secret** approaches expiration, you can now independently generate a new one, providing your team the freedom to manage it without relying on customer support. This flexibility in scheduling secret rotation minimizes potential outage time for your customers waiting for a replacement due to an expired secret. 

> [!div class="mx-imgBorder"]
> ![Screenshot of Select a geography.](../../media/234-general-01.png "Screenshot of Select a geography")

Look for this new functionality in each of your Azure DevOps app pages that can be accessible through [your profile here](https://app.vssps.visualstudio.com/_signin?realm=app.vssps.visualstudio.com&reply_to=https%3A%2F%2Fapp.vssps.visualstudio.com%2Fprofile%2Fview&redirect=1&context=eyJodCI6MywiaGlkIjoiYTVjYTM1ZWItMTQ4ZS00Y2NkLWJiYjMtZDMxNTc2ZDc1OTU4IiwicXMiOnt9LCJyciI6IiIsInZoIjoiIiwiY3YiOiIiLCJjcyI6IiJ90#ctx=eyJTaWduSW5Db29raWVEb21haW5zIjpbImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSIsImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSJdfQ2). Learn more about this new step in our [Azure DevOps OAuth guide](/azure/devops/integrate/get-started/authentication/azure-devops-oauth?view=azure-devops&preserve-view=tru).