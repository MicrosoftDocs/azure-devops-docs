---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 06/22/2020
---

::: moniker range=">= azure-devops-2019"

1. Go to your feed ([or create a feed if you haven't](../../get-started-nuget.md#create-a-feed)). 

1. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   > ![Connect to feed button on the upper right of the page](../../media/connect-to-feed-azure-devops-newnav.png)

1. Select **NuGet.exe** under the **NuGet** header.

1. If you installed NuGet, and you have at least one edition of Visual Studio on your machine, you can *move to the next step*. Otherwise: <p></p>

    1. Select **Get the tools** in the upper-right corner.
    1. Download the latest NuGet version if you haven't yet.
    1. Download and install the credential provider (if you don't have any Visual Studio edition).

1. Copy the `xml` code snippet in the **Project setup** section and add/create a `nuget.config` file for your project. Place your file in the same folder as your .`csproj` or `.sln` file.

1. To publish your package to your feed, run the command in the **Publish packages** section in an elevated PowerShell window. Don't forget to specify your local package path (for example: ..\HelloWorld\NuGetPackage\HelloWorld1.0.0.nupkg).

   > [!div class="mx-imgBorder"] 
   > ![NuGet publish instructions in Connect to feed dialog box](../../media/nuget-azure-devops-newnav.png)

> [!NOTE]
> * The NuGet `push` command requires an API key. You can use any non-empty string for this variable. In our example, we used the string `key`.
> * For more information on using credential providers with NuGet, see [Creating a NuGet credential provider](/nuget/reference/extensibility/nuget-exe-credential-providers#creating-a-nugetexe-credential-provider).
> * For more information on using personal access tokens, see [Authenticate access with personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

## Publish a NuGet package by using the NuGet CLI

To publish your package by using the NuGet CLI, you need the following variables:

- **SourceName**: The name of your feed created in step 1 of this article.
- **SourceURL**: The feed URL (step 6). You can find it in the **Project setup** section, under `value`. In the Azure DevOps portal, go to **Artifact** > **Your feed name** > **Connect to feed** > **Project setup**.
- **UserName** and **PAT**: Your username and personal access token. For help with setting up your credentials, see [Authenticate access with personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Go to your feed ([or create a feed if you haven't](../../index.yml)). 

2. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   > ![Connect to feed button on the upper right of the page](../../media/connect-to-feed.png)


3. Follow steps 1 and 2 to get the tools, add the feed to your local NuGet configuration, and push the package.

   > [!div class="mx-imgBorder"]
   > ![NuGet publish instructions in the Connect to feed dialog box](../../media/nugeturl.png)

::: moniker-end

> [!NOTE]
> You can use the symbols of your NuGet packages to debug your application. You can publish your symbols to a file share using the [index sources and publish symbols task](../../../pipelines/tasks/build/index-sources-publish-symbols.md) as well as in your build pipeline that produces the NuGet packages. See [Symbol files overview](../../concepts/symbols.md) and [How to publish your symbols for debugging](../../../pipelines/artifacts/symbols.md) for more information.
> Publishing your symbols to Azure Artifact feeds from the command line is not currently supported.