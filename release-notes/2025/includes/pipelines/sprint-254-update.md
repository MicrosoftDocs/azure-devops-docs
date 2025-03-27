---
author: ckanyika
ms.author: ckanyika
ms.date: 4/2/2025
ms.topic: include
---

### Highlight stage dependencies

YAML pipelines are powerful and, as a consequence, they can get complex.

Imagine you have a pipeline that deploys to multiple Azure regions like in the following example.

> [!div class="mx-imgBorder"]
> [![Screenshot of pipeline that deploys to multiple Azure region.](../../media/254-pipelines-01.png "Screenshot of pipeline that deploys to multiple Azure region")](../../media/254-pipelines-01.png#lightbox)


It's not easy to tell the dependencies between stages. For example, CUS3 depends on WUS2 and WUS3, but does it depend on WUS1? You cant tell just by looking at the stage map.

Starting with this sprint, were highlighting stage dependencies when you expand them. So, if you expand the CUS3 stage, you'll see it depends on WUS1, WUS2, and WUS3.

> [!div class="mx-imgBorder"]
> [![Screenshot of stage dependencies when you expand them.](../../media/254-pipelines-01.png "Screenshot of stage dependencies when you expand them")](../../media/254-pipelines-01.png#lightbox)
