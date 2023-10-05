---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 05/06/2022
---

::: moniker range="azure-devops"

1. Navigate to **Azure Artifacts**, and then select the package you want to install and copy the `<dependency>` snippet.

1. Open your pom.xml file and paste your code inside the `<dependencies>` tag.

1. Run `mvn install` from the same path as your pom.xml file.

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Packages**, and then select the package you want to install and copy the `<dependency>` snippet.

1. Open your pom.xml file and paste your code inside the `<dependencies>` tag.

1. Run `mvn install` from the same path as your pom.xml file.

::: moniker-end
