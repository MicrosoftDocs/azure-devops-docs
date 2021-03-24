---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 06/22/2020
---

::: moniker range=">= azure-devops-2019"

1. Navigate to your feed or [create a feed](../../get-started-nuget.md#create-a-feed) if you haven't. 

1. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   > ![Connect to feed button on the upper right of the page](../../media/connect-to-feed-azure-devops-newnav.png)

1. Select **NuGet.exe** under the **NuGet** header.

    :::image type="content" source="../../media/nuget-connect-feed.png" alt-text="NuGet.exe feed connection":::

1. If you have NuGet and Visual Studio installed, you can move to the next step. Otherwise:

    1. Select **Get the tools** button.
    1. Download the latest NuGet version.
    1. Download and install the credential provider.

1. Create a nuget.config file with the following content and add it to your project in the same path as your .csproj or .sln file

    ```Command
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<orgName>" value="https://pkgs.dev.azure.com/<orgName>/_packaging/<orgName>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
    ```

1. Run the following command yo publish your NuGet package to your feed.

    ```Command
    nuget.exe push -Source <orgName> -ApiKey az <packagePath>
    ``` 

## Publish a NuGet package with the NuGet CLI

To publish your package using the NuGet CLI, you will need the following variables:

- **SourceName**: The name of your feed (step 1).
- **SourceURL**: The feed URL (step 6).
- **UserName** and **PAT**: Your username and personal access token. For help with setting up your credentials, see [Authenticate access with personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Go to your feed or [create a feed](../../get-started-nuget.md#create-a-feed) if you haven't. 

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