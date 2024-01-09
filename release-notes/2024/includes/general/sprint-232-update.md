---
author: ckanyika
ms.author: ckanyika
ms.date: 1/10/2024
ms.topic: include
---


### Select a geography when creating an organization

Select a geography, instead of a region, when creating a new Azure DevOps organization. Your closest geography is selected automatically, but you can choose a different one, based on where your team is located or because you have sovereignty requirements for your data. You can also view your geography in the overview section of organization settings.

> [!div class="mx-imgBorder"]
> ![Screenshot of Select a geography.](../../media/232-general-01.png "Screenshot of Select a geography")

###  OAuth self-service secret rotation

Our Azure DevOps OAuth model has now been made a little more self-sufficient. Every 5 years, you are required to refresh your Azure DevOps OAuth app client secret to ensure you can continue creating access and refresh tokens needed to utilize Azure DevOps APIs. When your client secret is due to expire, you can now generate your own secret instead of relying on reaching out to customer support to generate a new one. This offers your team more flexibility to schedule secret rotation on your time and aid in reducing any potential outage time for your customers due to waiting on a replacement for an expired secret. 

> [!div class="mx-imgBorder"]
> ![Screenshot of self-service secret rotation.](../../media/232-general-02.png "Screenshot of self-service secret rotation")

Look for this new functionality in each of your Azure DevOps app pages that can be accessible through [your profile here](https://aex.dev.azure.com/me?mkt=en-US). Learn more about this new step in our [Azure DevOps OAuth guide](/azure/devops/integrate/get-started/authentication/azure-devops-oauth?view=azure-devops&preserve-view=true ).