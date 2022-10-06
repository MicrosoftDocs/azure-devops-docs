---
title: publish and download npm packages
description: How to set up your .npmrc config file to publish and download npm packages
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.assetid: 5BFBA0C3-85ED-40C9-AC5F-F686923160D6
ms.custom: contperf-fy20q4, conterperfq3, contperf-fy21q3
ms.date: 04/13/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Get started with npm packages in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish and download npm packages from feeds and public registries such as npmjs.com. This quickstart will guide you through creating your own feed, setting up your project, and publishing and downloading npm packages to and from your Azure Artifacts feed.

::: moniker range="tfs-2018"

## License the Azure Artifacts extension

To use Azure Artifacts in TFS, you must upgrade to Visual Studio Team Foundation Server 2017. If the Azure Artifacts extension has been removed, you can install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed).

### Assign licenses in Team Foundation Server

Each organization gets five free licenses. If you need more than five licenses, go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.feed), and select **Get it free**.

If you aren't sure, you can select **Start 30-day free trial**. Every user in your organization is then granted access to Azure Artifacts for 30 days. After the 30-day trial period, your organization reverts back to five entitled users, and you must assign licenses to individual users. If you need additional licenses at this point, you can purchase them from Visual Studio Marketplace. If you have a license for Visual Studio Enterprise, you already have access to Azure Artifacts and don't need to be assigned a license. Just ensure that you've been assigned the "Visual Studio Enterprise" access level.

> [!NOTE]
> If you selected **Start 30 day free trial** and are still in the trial period, every user is granted access. Licenses don't need to be assigned until the trial period ends. 

1. From any collection in Team Foundation Server, hover over the settings menu and select **Users**. Then select **Package Management**.

    :::image type="content" source="media/users-hub-tfs.png" alt-text="Screenshot showing the user page in TFS":::

1. Select **Assign**, enter the users you want to assign licenses, and then select **OK**.

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts for free. Make sure that your Visual Studio Enterprise subscribers have the appropriate access level. For more information, see [Change access levels](../organizations/security/change-access-levels.md).

   * Users who are using an instance of Team Foundation Server that's disconnected from the internet (and thus can't purchase licenses from Visual Studio Marketplace) can still assign licenses purchased through an enterprise agreement.

::: moniker-end

## Create a feed

A feed is an organizational construct that allows users to store their packages and control who can access them. Azure Artifacts support storing several package types in a single feed such as NuGet, npm, Maven, Python, and Universal packages.

[!INCLUDE [](includes/create-feed.md)]

::: moniker range="azure-devops"

## Set up your .npmrc files

> [!NOTE]
> `vsts-npm-auth` is not supported in TFS and Azure DevOps Server.

We recommend having two .npmrc files. The first one should be placed in the same directory as your package.json file. The second one should be placed in the **$home** directory (Linux/macOS) or **$env.HOME** (Windows) to store your credentials. The npm client then will be able to look up this file and fetch your credentials for authentication. This enables you to share your config file while keeping your credentials secure.

1. Select **Artifacts**, and then select **Connect to feed**.

    :::image type="content" source="media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed":::

1. Select **npm**. If this is your first time using Azure Artifacts, select **Get the tools** and then follow the steps to download Node.js and set up the credential provider. 

1. Follow the instructions in the **Project setup** to set up your project.

    :::image type="content" source="media/npm-azure-devops-newnav.png" alt-text="Screenshot showing how to set up your project":::

::: moniker-end

::: moniker range=">= azure-devops-2019"
       
### Set up authentication on your development machine

> [!IMPORTANT]
> npm supports a single `registry` in your .npmrc file. Multiple registries are possible with [scopes](npm/scopes.md) and [upstream sources](npm/upstream-sources.md).

#### [Windows](#tab/Windows/)

If you're developing on Windows, we recommend using `vsts-npm-auth` to authenticate with Azure Artifacts. Run `npm install -g vsts-npm-auth` to install the package globally and then add a run script to your package.json.

```JSON
"scripts": {
    "refreshVSToken": "vsts-npm-auth -config .npmrc"
}
```

#### [Other](#tab/Other/)

To authenticate with Azure Artifacts, we have to create a personal access token and add it to our .npmrc file.

1. Copy the following code snippet to your .npmrc file.

    - **Organization-scoped feed**:

        ```Command
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:username=[ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```
    
    - **Project-scoped feed**:

        ```Command
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

1. Generate a [personal access token](../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **packaging read and write** scopes.

1. Encode your newly generated personal access token as follows:

    1. Run the following command in an elevated command prompt window.
        
        ```Command
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

    1. Paste your personal access token, and then press **Enter**.
 
    1. Copy the Base64 encoded value.

1. Replace the `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` placeholder in your .npmrc file with your Base64 personal access token. 

::: moniker-end

* * * 

::: moniker range="tfs-2018"

## Connect to feed

1. Select **Packages**, and then select **Connect to feed**.

2. Select **npm**.

3. Select **Generate npm credentials**. Copy the credentials and add them to your .npmrc file.

    :::image type="content" source="./media/tfs2018-connect-to-npm-feed.png" alt-text="Screenshot showing how generate credentials":::

::: moniker-end

## Publish packages

To publish your npm package, run the following command in your project directory

```Command
npm publish
```

> [!IMPORTANT]
> Using the `publishConfig` property to override the registry config param at publish-time is not supported. 

## Restore packages

To restore an npm package, run the following command in your project directory

```Command
npm install --save <package>
```

## Next steps

> [!div class="nextstepaction"]
> [Publish npm packages (YAML/Classic)](../pipelines/artifacts/npm.md)
> [Use packages from npmjs.com](./npm/upstream-sources.md)
> [Use npm scopes](npm/scopes.md)
> [Use npm audit](npm/npm-audit.md)
