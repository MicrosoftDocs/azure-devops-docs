---
author: ckanyika
ms.author: ckanyika
ms.date: 1/16/2024
ms.topic: include
---


### Custom CodeQL Queries Now Supported in GitHub Advanced Security for Azure DevOps (GHAzDO)

We are thrilled to announce the introduction of support for custom CodeQL queries in Code scanning! This empowers developers to craft their own queries tailored to identify issues specific to their codebase. With this enhancement, you can create and publish packs containing custom queries, execute these queries in your pipelines, and thereby customize the detection of vulnerabilities that are pertinent to your organization.

For more details on utilizing custom queries for code scanning in GHAzDO, refer to [Code scanning alerts for GitHub Advanced Security for Azure DevOps](/azure/devops/repos/security/github-advanced-security-code-scanning?view=azure-devops)

We value your input. If you have any questions or feedback, we encourage you to engage with our community at [Developer Community](https://developercommunity.visualstudio.com/home). 


### Azure Devops OAuth self-service secret rotation

Our Azure DevOps OAuth model has now been made a little more self-sufficient. Every 5 years, you are required to refresh your Azure DevOps OAuth app client secret to ensure you can continue creating access and refresh tokens needed to utilize Azure DevOps APIs. When your client secret is due to expire, you can now generate your own secret instead of relying on reaching out to customer support to generate a new one. This offers your team more flexibility to schedule secret rotation on your time and aid in reducing any potential outage time for your customers due to waiting on a replacement for an expired secret. 

> [!div class="mx-imgBorder"]
> ![Screenshot of Select a geography.](../../media/233-general-01.png "Screenshot of Select a geography")

Look for this new functionality in each of your Azure DevOps app pages that can be accessible through your [profile here](https://aex.dev.azure.com/me?mkt=en-US). Learn more about this new step in our [Azure DevOps OAuth guide](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/azure-devops-oauth?view=azure-devops).