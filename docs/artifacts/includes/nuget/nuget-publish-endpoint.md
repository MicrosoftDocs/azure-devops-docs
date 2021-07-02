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

1. Run the following command to publish your NuGet package to your feed.

    ```Command
    nuget.exe push -Source <orgName> -ApiKey az <packagePath>
    ``` 

## Publish packages by using the command line

To publish your package by using the NuGet CLI, you will need the following variables:

- **SourceName**: the name of your feed.
- **SourceURL**: the feed's source URL: 
    ```Command
    https://pkgs.dev.azure.com/<orgName>/_packaging/<orgName>/nuget/v3/index.json
    ```
- **UserName** and **PAT**: Your username and personal access token. For help with setting up your credentials, see [Authenticate access with personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. Go to your feed or [create one](../../get-started-nuget.md#create-a-feed) if you haven't. 

2. Select **Connect to feed**:

   > [!div class="mx-imgBorder"] 
   > ![Connect to feed button on the upper right of the page](../../media/connect-to-feed.png)


3. Follow steps 1 and 2 to get the tools, add the feed to your local NuGet configuration, and push the package.

   > [!div class="mx-imgBorder"]
   > ![NuGet publish instructions in the Connect to feed dialog box](../../media/nugeturl.png)

::: moniker-end

> [!NOTE]
> Aside from publishing NuGet packages, Azure Artifacts also allow you to publish your symbols to [file shares](../../../pipelines/tasks/build/index-sources-publish-symbols.md) and [symbols server](../../../pipelines/artifacts/symbols.md). Publishing your symbols from the command line is not currently supported.