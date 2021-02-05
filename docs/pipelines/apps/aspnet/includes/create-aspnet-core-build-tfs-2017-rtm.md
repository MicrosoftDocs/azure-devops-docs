---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

1. Under the **Build and Release** menu, select **Builds** then **New** to create a new build definition.

   :::image type="content" source="../../media/set-up-first-build.png" alt-text="Create a new build definition for a repository":::

   Select a source and chose your team project, repository, and default branch then select **Continue**.

2. Select **ASP.NET Core** from the featured list then **Apply**.
   
   :::image type="content" source="../media/apply-aspnet-core-build-template.png" alt-text="Screenshot showing dotnet core template":::

You now see all the tasks that were automatically added to the build pipeline by the template. These are the tasks that will automatically run every time you push code changes. Select **Save & queue** to queue your new build when you're done.

> [!NOTE]
> Microsoft-hosted agents are only available with Azure DevOps Services. For TFS and Azure DevOps server, you must use the [self-hosted agents](../../../agents/agents.md).
