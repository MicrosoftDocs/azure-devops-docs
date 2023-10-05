---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 06/23/2022
---

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="../../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot showing how to connect to a feed.":::

1. Select **NuGet.exe**.

    :::image type="content" source="../../media/nuget-connect-feed.png" alt-text="A screenshot the feed's connection type.":::

1. Follow the instructions in **Project setup** to set up your nuget.config file.

    :::image type="content" source="../../media/project-setup.png" alt-text="Project setup":::

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu or [create one](../../get-started-nuget.md#create-a-feed) if you haven't.

1. Select **Connect to feed**.

    :::image type="content" source="../../media/connect-to-feed.png" alt-text="Connect to feed - TFS":::

1. Select **NuGet** and follow the instruction to connect to your feed.

    :::image type="content" source="../../media/connect-to-nuget-feed-tfs.png" alt-text="Connect to NuGet feed - TFS":::

::: moniker-end
