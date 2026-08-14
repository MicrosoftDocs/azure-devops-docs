---
title: Docker socket no longer mapped by default for Linux container jobs
author: gloridelmorales
ms.author: glmorale
ms.date: 9/10/2026
description: Advance notice that the pipeline agent changes the default of mapDockerSocket to false for Linux container jobs.
---

# Docker socket no longer mapped by default for Linux container jobs

In this sprint, we're giving advance notice of an upcoming breaking change in Azure Pipelines. To follow the principle of least privilege, the pipeline agent will change the default value of `mapDockerSocket` to `false` for Linux container jobs, so the host Docker socket is no longer mounted into the job container by default. Container jobs that rely on Docker-in-container behavior must explicitly set `mapDockerSocket: true`.

Check out the release notes for details.

### Azure Pipelines
[!INCLUDE [sprint-279-update-links](includes/pipelines/sprint-279-update-links.md)]

## Azure Pipelines
[!INCLUDE [sprint-279-update](includes/pipelines/sprint-279-update.md)]

## Next steps

> [!NOTE]
> These features will roll out over the next two to three weeks.
Go to Azure DevOps and take a look.

> [!div class="nextstepaction"]
> [Go to Azure DevOps](https://go.microsoft.com/fwlink/?LinkId=307137&campaign=o~msft~docs~product-vsts~release-notes)

## How to provide feedback

We want to hear what you think about these features. Use the help menu to report a problem or provide a suggestion.

> [!div class="mx-imgBorder"]
> ![Make a suggestion](../media/make-a-suggestion.png)

You can also get advice and your questions answered by the community on [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-devops).
