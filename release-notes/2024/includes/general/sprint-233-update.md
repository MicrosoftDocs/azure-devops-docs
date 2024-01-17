---
author: ckanyika
ms.author: ckanyika
ms.date: 1/18/2024
ms.topic: include
---

### Azure DevOps OAuth self-service secret rotation

Every five years, it’s essential to update the **Client Secret** for your Azure DevOps OAuth app, to ensure continuous generation of access and refresh tokens necessary for utilizing Azure DevOps APIs. As your **Client Secret** approaches expiration, you can now independently generate a new one, providing your team the freedom to manage it without relying on customer support. This flexibility in scheduling secret rotation minimizes potential outage time for your customers waiting for a replacement due to an expired secret. 

> [!div class="mx-imgBorder"]
> ![Screenshot of Select a geography.](../../media/233-general-01.png "Screenshot of Select a geography")

Look for this new functionality in each of your Azure DevOps app pages, which can be accessed through your [profile here](https://aex.dev.azure.com/me?mkt=en-US). Learn more about this new step in our [Azure DevOps OAuth guide](/azure/devops/integrate/get-started/authentication/azure-devops-oauth?view=azure-devops&preserve-view=true).