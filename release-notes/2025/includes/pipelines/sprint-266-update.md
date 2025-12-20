---
author: gloridelmorales
ms.author: glmorale
ms.date: 12/19/2025
ms.topic: include
---

### Clearer artifact selection for YAML CD deployments  

In this sprint, we enhanced the security and deployment experience for YAML pipelines in CD scenarios.  

Previously, managing the pipeline artifact to deploy was tedious and error‑prone. It wasn’t always clear which run would be deployed by default, and selecting a different artifact such as by run branch was not supported.

The updated deployment panel now guides you to configure parameters first, ensuring they are applied before determining the pipeline artifact to deploy. This reduces deployment errors and makes artifact selection more predictable and secure.

> [!div class="mx-imgBorder"]
> [![Screenshot to show selecting parameters in Run pipelines panel.](../../media/266-pipelines-01.png "Screenshot to show selecting parameters in Run pipelines panel")](../../media/266-pipelines-01.png#lightbox)

After selecting **Next: Resources**, the deployment panel clearly shows which pipeline artifact has been selected, giving confidence in exactly what will be deployed.  

> [!div class="mx-imgBorder"]
> [![Screenshot to show selected pipeline artifacts.](../../media/266-pipelines-02.png "Screenshot to show selected pipeline artifacts.")](../../media/266-pipelines-02.png#lightbox)

If you want to change the pipeline artifact, you can use the branch selector to narrow down your search.  

> [!div class="mx-imgBorder"]
> [![Screenshot to show branch selector.](../../media/266-pipelines-03.png "Screenshot to show branch selector.")](../../media/266-pipelines-03.png#lightbox)

When a pipeline defines parameters but does not use pipeline artifacts, the UI clearly indicates this to avoid confusion.

> [!div class="mx-imgBorder"]
> [![Screenshot to show UI message when pipeline is not using artifacts.](../../media/266-pipelines-04.png "Screenshot to show UI message when pipeline is not using artifacts.")](../../media/266-pipelines-04.png#lightbox)

When your pipeline doesn’t define parameters, the Run pipeline panel remains consistent with the current experience. When the pipeline uses pipeline artifacts, the updated panel reflects that flow, as shown below.

> [!div class="mx-imgBorder"]
> [![Screenshot to show UI message when pipeline is using artifacts.](../../media/266-pipelines-05.png "Screenshot to show UI message when pipeline is using artifacts.")](../../media/266-pipelines-05.png#lightbox)

Here’s how the experience looks when your pipeline doesn’t use pipeline artifacts.

> [!div class="mx-imgBorder"]
> [![Screenshot to show message when pipeline doesn't use pipeline artifacts.](../../media/266-pipelines-06.png "Screenshot to show message when pipeline doesn't use pipeline artifacts.")](../../media/266-pipelines-06.png#lightbox)