---
ms.topic: include
ms.prod: devops
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

::: moniker range=">= azure-devops-2019"

1. Go to your feed ([or create a feed if you haven't](https://docs.microsoft.com/azure/devops/artifacts/get-started-nuget?view=azure-devops&tabs=new-nav#create-a-feed)). 

2. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   >![Connect to feed button on the upper right of the page](../../media/connect-to-feed-azure-devops-newnav.png)
   > 

3. Select **NuGet.exe** under the **NuGet** header

4. Select **Get the tools** in the top right corner

5. Follow steps 1 and 2 to download the latest NuGet version and the credential provider.

6. Follow the instructions in the **Project setup**, **Restore packages**, and **Publish packages** sections to publish.

   > [!div class="mx-imgBorder"] 
   >![NuGet publish instructions in the Connect to feed](../../media/nuget-azure-devops-newnav.png)
   > 

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Go to your feed ([or create a feed if you haven't](../../feeds/create-feed.md)). 

2. Select **Connect to feed**:

   ![Connect to feed button on the upper right of the page](../../media/connect-to-feed.png)


3. Follow steps 1 and 2 to get the tools, add the feed to your local NuGet configuration, and push the package.

   ![NuGet publish instructions in the Connect to feed dialog](../../media/nugeturl.png)

::: moniker-end
