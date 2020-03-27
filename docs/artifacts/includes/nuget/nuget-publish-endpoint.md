---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 03/20/2020
---

::: moniker range=">= azure-devops-2019"

1. Go to your feed ([or create a feed if you haven't](../../get-started-nuget.md#create-a-feed)). 

1. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   >![Connect to feed button on the upper right of the page](../../media/connect-to-feed-azure-devops-newnav.png)
   > 

1. Select **NuGet.exe** under the **NuGet** header

1. If you installed NuGet, and have at least one edition of Visual Studio on your machine, you can **move to the next step** otherwise: <p></p>

    1. Select **Get the tools** in the top right corner
    1. Download the latest NuGet version if you haven't yet
    1. Download and install the credential provider (if you don't have any Visual Studio edition)

1. Copy the `xml` code snippet in the **Project setup** section and add/create a `nuget.config` file to your project. Make sure to place your file in the same folder as your .`csproj` or `.sln` file.

1. To publish your package to your feed, run the command in the **Restore packages** section in an elevated PowerShell window. Don't forget to specify your local package path (eg: ..\HelloWorld\NuGetPackage\HelloWorld1.0.0.nupkg)

   > [!div class="mx-imgBorder"] 
   > ![NuGet publish instructions in the Connect to feed](../../media/nuget-azure-devops-newnav.png)
   > 

> [!NOTE]
>
> * The NuGet push command requires an API key. You can use any non-empty string for this variable. In our example, we used the string `key`.
> * For more information on using credential providers with NuGet, see [Creating a nuget credential provider](/nuget/reference/extensibility/nuget-exe-credential-providers#creating-a-nugetexe-credential-provider).
> * For more information on using personal access token, see [Authenticate access with personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Go to your feed ([or create a feed if you haven't](../../feeds/create-feed.md)). 

2. Select **Connect to feed**:

   ![Connect to feed button on the upper right of the page](../../media/connect-to-feed.png)


3. Follow steps 1 and 2 to get the tools, add the feed to your local NuGet configuration, and push the package.

   ![NuGet publish instructions in the Connect to feed dialog](../../media/nugeturl.png)

::: moniker-end
