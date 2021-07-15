---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 07/15/2021
---

::: moniker range=">= azure-devops-2019"

1. From within your project, select **Artifacts**, and then select your feed. You can [create a new feed](../../get-started-nuget.md#create-a-feed) if you don't have one already. 

1. Select **Connect to feed**.

    :::image type="content" source="../../media/connect-to-feed-azure-devops-newnav.png" alt-text="Connect to your feed":::

1. Select **NuGet.exe** under the **NuGet** header.

    :::image type="content" source="../../media/nuget-connect-feed.png" alt-text="NuGet.exe feed connection":::

1. If this is the first time using Azure Artifacts with Nuget then:

    1. Download the [latest NuGet version](https://www.nuget.org/downloads).
    1. Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

1. Create a `nuget.config` file in the same folder as your *.csproj* *.sln* and add the following content. Replace the placeholders with your feed and organization names.

    ```Command
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
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