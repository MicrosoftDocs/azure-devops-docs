---
title: Connect to an Azure Artifacts feed - npm
description: Learn how to configure project and user .npmrc files to connect npm clients to an Azure Artifacts feed.
ms.service: azure-artifacts
ms.custom: engagement-fy23
ms.topic: how-to
ms.date: 08/21/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Connect to an Azure Artifacts feed - npm

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts uses the *.npmrc* configuration file to authenticate npm clients with feeds. The recommended setup keeps feed configuration and credentials in two separate *.npmrc* files: a project-level file (checked in alongside your `package.json`) that stores the feed URL, and a user-level file (never committed) that stores your credentials.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br>- An Azure Artifacts [feed](../get-started-npm.md#create-a-feed).<br>- Download [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). |

## Connect to a feed

Select the tab that matches your operating system and follow the steps to configure your *.npmrc* files:

::: moniker range="< azure-devops"

> [!NOTE]
> `vsts-npm-auth` is not supported in Azure DevOps Server.

::: moniker-end

::: moniker range="azure-devops"

### [Windows](#tab/windows/)

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **npm** from the left navigation pane.

1. If you didn't install `vsts-npm-auth`, run the following command:

    ```
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
    ```

1. Add a *.npmrc* file to your project in the same directory as your `package.json`, and then paste the snippet from the **Project setup** section into the file.

    :::image type="content" source="../media/npm-project-setup-azure-devops.png" alt-text="A screenshot displaying how to set up your npm project and connect to a feed." lightbox="../media/npm-project-setup-azure-devops.png":::

1. Run the following command to add a token to your user-level *.npmrc* file. npm returns a **401 Unauthorized** error when the token expires—run this command again to refresh it.

    ```
    vsts-npm-auth -config .npmrc
    ```

### [Other](#tab/other/)

1. Sign in to your Azure DevOps organization, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **npm** from the left navigation pane.

1. Add a *.npmrc* file to your project in the same directory as your `package.json`, and then paste the snippet from the **Project setup** section into the file. Your file should look similar to the following:

    ```
    registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/ 
    ```

### Setup credentials

1. Copy the following snippet and paste it into your user-level *npmrc* file:

    - **Organization-scoped feed**:

        ```
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

    - **Project-scoped feed**:

        ```
        ; begin auth token
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

1. Generate a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope.

1. Base64-encode your PAT by using one of the following methods:

    - **Node.js** (all platforms): Run the following command, enter your PAT when prompted, and copy the resulting value.

        ```
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

    - **macOS or Linux**: Run the following command and copy the output.

        ```
        echo -n "YOUR_PERSONAL_ACCESS_TOKEN" | base64
        ```

1. Replace the `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` placeholders in your user-level *.npmrc* file with the encoded value.

* * *

::: moniker-end

::: moniker range="azure-devops-2022"

### [Windows](#tab/windows/)

1. Sign in to your Azure DevOps collection, and then go to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

    :::image type="content" source="../media/server-2022-1-connect-to-feed.png" alt-text="Screenshot showing how to connect to an Azure Artifacts feed in Azure DevOps Server 2022.1.":::

1. Select **npm**, and then follow the steps in the **Project setup** section to configure your *.npmrc* file and authenticate with your feed.

   :::image type="content" source="../media/npm-project-setup-server-2022-1.png" alt-text="A screenshot showing how to set up your npm project in Azure DevOps Server 2022.1." lightbox="../media/npm-project-setup-server-2022-1.png":::

### [Other](#tab/other/)

1. Sign in to your Azure DevOps collection, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **npm** from the left navigation pane.

1. Add a *.npmrc* file to your project in the same directory as your `package.json`, and then paste the snippet from the **Project setup** section into the file. Your file should look similar to the following:

    ```
    registry=http://<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
    ```

### Setup credentials

1. Copy the following snippet and paste it into your user-level *.npmrc* file:

    - **Collection-scoped feed**:

        ```
        ; begin auth token
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=DefaultCollection
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:username=DefaultCollection
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

    - **Project-scoped feed**:

        ```
        ; begin auth token
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/:email=npm requires email to be set but doesn't use the value
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:username=[ENTER_ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
        //<SERVER_NAME>/<COLLECTION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/:email=npm requires email to be set but doesn't use the value
        ; end auth token
        ```

1. Generate a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope.

1. Run the following command, enter your PAT when prompted, and then copy the resulting Base64-encoded value.

    ```
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

1. Replace the `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` placeholders in your user-level *.npmrc* file with the encoded value.

* * *

::: moniker-end

> [!TIP]
> Using multiple registries in *.npmrc* files is supported with [scopes](..//npm/scopes.md) and [upstream sources](../concepts/upstream-sources.md).

## Related content

- [Publish npm packages (CLI)](publish.md)

- [Restore npm packages](restore-npm-packages.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)
