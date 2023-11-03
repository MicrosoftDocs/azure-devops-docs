---
author: ckanyika
ms.author: ckanyika
ms.date: 11/14/2023
ms.topic: include
---

### GitHub Integration - Improved AB# validation (preview)

We are starting our journey of Boards + GitHub integration improvements by addressing the bot responses when linking to work items using the AB# syntax. Today, when you link to a Pull Request using the ``AB#{ID}`` syntax, the only way to know if the link was successful is by looking at the work item or noticing the AB#{ID} turn into a link.

Today we are opening up a private preview where we have made some improvements to the Azure Boards GitHub app to better inform users when a link to a work item is valid or invalid. This will help users identify bad links and fix them before the Pull Request is merged.

> [!div class="mx-imgBorder"]
> ![Screenshots of Team Settings.](../../media/230-boards-01.png "Screenshots of Team Settings.")

If you are interested in participating in the private preview, please reach out to us directly [via email](mailto:dahellem@microsoft.com). Be sure to include your organization name (dev.azure.com/{organization})

Be sure to check out the other [Azure Boards + GitHub integration features](azure/devops/release-notes/features-timeline#improved-boards--github-integration) we have planned on the public roadmap.