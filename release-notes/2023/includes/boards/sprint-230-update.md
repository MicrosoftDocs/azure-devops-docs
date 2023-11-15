---
author: ckanyika
ms.author: ckanyika
ms.date: 11/15/2023
ms.topic: include
---

### GitHub Integration - Improved AB# validation (private preview)

We're starting our journey of Boards + GitHub integration improvements by addressing the bot responses when linking to work items using the AB# syntax. Today, when you link to a Pull Request using the ``AB#{ID}`` syntax, the only way to know if the link was successful is by looking at the work item or noticing the AB#{ID} turn into a link.

Today, we're launching a private preview featuring several enhancements to the Azure Boards GitHub app to better inform you when a link to a work item is valid or invalid. This helps identify bad links and fix them before the Pull Request is merged.

> [!div class="mx-imgBorder"]
> ![Screenshots of Team Settings.](../../media/230-boards-01.png "Screenshots of Team Settings.")

If you're interested in participating in the private preview, please reach out to us directly [via email](mailto:dahellem@microsoft.com). Be sure to include your organization name (dev.azure.com/{organization})

Be sure to check out the other [Azure Boards + GitHub integration features](/azure/devops/release-notes/features-timeline#improved-boards--github-integration) we have planned on the public roadmap.