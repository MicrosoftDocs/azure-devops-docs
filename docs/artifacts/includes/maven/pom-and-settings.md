---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 10/04/2022
---

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts**, and then select **Connect to Feed**.
   
    :::image type="content" source="../../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot showing how to connect to a feed.":::

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Packages**, and then select **Connect to Feed**.

    :::image type="content" source="../../media/connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed in TFS.":::

::: moniker-end

2. Select **Maven**.

3. If this is the first time using Azure Artifacts with Maven, select **Get the tools** to download and install Maven.

4. Follow the instructions in the **Project setup**  to set up your pom.xml and settings.xml files. If your *settings.xml* file is shared within your team, you can use Maven to [encrypt your passwords](https://maven.apache.org/guides/mini/guide-encryption.html).

    :::image type="content" source="../../media/maven-azure-devops-newnav.png" alt-text="A screenshot showing how to set up your project.":::
