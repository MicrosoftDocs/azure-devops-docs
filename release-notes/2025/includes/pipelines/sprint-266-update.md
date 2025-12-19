---
author: gloridelmorales
ms.author: glmorale
ms.date: 12/19/2025
ms.topic: include
---

### New Run Pipeline Panel  

In this sprint, we've improved the security and experience of using YAML pipelines for CD scenarios.  

Managing the pipeline artifact to deploy was tedious and error prone. It wasn't clear which run you were going to deploy by default. If you wanted to change the artifact, you couldn't select by run branch.  

The new panel first lets you fill in parameters, as they may determine which pipeline artifact to deploy.  

> [!div class="mx-imgBorder"]
> [![Screenshot to show selecting parameters in Run pipelines panel.](../../media/266-pipelines-01.png "Screenshot to show selecting parameters in Run pipelines panel")](../../media/266-pipelines-01.png#lightbox)

After you click on _Next:Resources_, you see which pipeline artifact has been chosen. This way, you are sure of what you're going to deploy.  

> [!div class="mx-imgBorder"]
> [![Screenshot to show selected pipeline artifacts.](../../media/266-pipelines-02.png "Screenshot to show selected pipeline artifacts.")](../../media/266-pipelines-02.png#lightbox)

If you want to change the pipeline artifact, you can use the branch selector to narrow down your search.  

> [!div class="mx-imgBorder"]
> [![Screenshot to show branch selector.](../../media/266-pipelines-03.png "Screenshot to show branch selector.")](../../media/266-pipelines-03.png#lightbox)

When your pipeline defines parameters but doesn't use any artifacts, the UI tells you this.

> [!div class="mx-imgBorder"]
> [![Screenshot to show UI message when pipeline is not using artifacts.](../../media/266-pipelines-04.png "Screenshot to show UI message when pipeline is not using artifacts.")](../../media/266-pipelines-04.png#lightbox)

When your pipeline doesn't define parameters, the Run panel is one step, similar to today.  

This is how it looks when the pipeline uses pipeline artifacts.

> [!div class="mx-imgBorder"]
> [![Screenshot to show UI message when pipeline is using artifacts.](../../media/266-pipelines-05.png "Screenshot to show UI message when pipeline is using artifacts.")](../../media/266-pipelines-05.png#lightbox)

And this is how it looks when your pipeline doesn't use pipeline artifacts.

> [!div class="mx-imgBorder"]
> [![Screenshot to show message when pipeline doesn't use pipeline artifacts.](../../media/266-pipelines-06.png "Screenshot to show message when pipeline doesn't use pipeline artifacts.")](../../media/266-pipelines-06.png#lightbox)