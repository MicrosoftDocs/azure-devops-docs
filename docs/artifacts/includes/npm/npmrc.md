---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 09/11/2023
---

::: moniker range=">= azure-devops-2019"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Connect to feed**.

    :::image type="content" source="../../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot showing how to connect to a feed.":::

1. Select **npm**, and then select **Other**.

1. Add a `.npmrc` file in the same directory as your package.json, and paste the following snippet into your file.

    - **Organization-scoped feed**:
    
        ```Command
        registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME/_packaging/<FEED_NAME>/npm/registry/
        
        always-auth=true
        ```

    - **Project-scoped feed**:

        ```Command
        registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
        
        always-auth=true
        ```

### Set up credentials

1. Copy the following snippet into your `.npmrc` file.

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

1. Generate a [personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scopes.

1. Run the following command to encode your newly generated personal access token. When prompted, paste your personal access token and then copy the resulting Base64 encoded value.

    ```Command
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

1. Open your `.npmrc` file and replace the placeholder `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` with your encoded personal access token you just created.

::: moniker-end

::: moniker range="tfs-2018"

1. Navigate to your project `http://ServerName:8080/tfs/DefaultCollection/<ProjectName>`.

1. Select **Build and Release**.

1. Select **Packages**, and then select **Connect to feed**.

1. Select **npm** and then select **Generate npm credentials**, and then copy the credentials and add them to your .npmrc file.

    :::image type="content" source="../../media/tfs2018-connect-to-npm-feed.png" alt-text="Screenshot showing how to generate npm credentials in TFS.":::

::: moniker-end