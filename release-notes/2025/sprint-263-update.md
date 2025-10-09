---
title: Secret expiration detection in Azure service connection
author: gloridelmorales
ms.author: glmorale
ms.date: 10/13/2025
description: Secret expiration detection in Azure service connection
---

# Secret expiration detection in Azure service connection

Service connections that use a service principal with a secret have always supported secret rotation via connection updates. However, this capability was not clearly surfaced in the configuration experience. We've now enhanced the Azure service connection workflow to automatically detect when a secret is nearing expiration and prompt users to rotate it, streamlining credential management and reducing the risk of service disruptions. 

Check out the release notes for details.

### Pipelines
[!INCLUDE [sprint-263-update-links](includes/pipelines/sprint-263-update-links.md)]

### Test Plans
[!INCLUDE [sprint-263-update-links](includes/testplans/sprint-263-update-links.md)]

## Pipelines
[!INCLUDE [sprint-263-update](includes/pipelines/sprint-263-update.md)]

## Test Plans
[!INCLUDE [sprint-263-update](includes/testplans/sprint-263-update.md)]

## Next steps

> [!NOTE]
> These features will roll out over the next two to three weeks.
Head over to Azure DevOps and take a look.

> [!div class="nextstepaction"] 
> [Go to Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137&campaign=o~msft~docs~product-vsts~release-notes)
## How to provide feedback

We would love to hear what you think about these features. Use the help menu to report a problem or provide a suggestion.

> [!div class="mx-imgBorder"] 
> ![Make a suggestion](../media/make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).