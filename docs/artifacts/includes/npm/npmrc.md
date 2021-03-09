---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 09/01/2020
---

The **Connect to feed** dialog box generates an appropriately formatted token that you can place into your .npmrc file. The token has a lifespan of 90 days.

<a id="tokenpast90"></a>

> [!TIP]
> If you want to create a token that lasts longer than 90 days, make sure you change the default expiration date.

Project setup:

::: moniker range=">= azure-devops-2019"

1. From **Azure Artifacts**, select **Connect to feed**.

1. Select **npm**.

1. Select **Other** in the **Project setup** section.

   > [!div class="mx-imgBorder"] 
   > ![Screenshot of the connect to feed credentials.](../../media/connect-to-feed-npm-creds-azure-devops-newnav.png)

1. Add a .npmrc file to your project, in the same directory as your package.json file.

    ```JSON
    registry=https://pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/registry/
    
    always-auth=true
    ```

Set up credentials by following these steps:

1. Copy the following code to your user .npmrc file.

    ```
    ; begin auth token
    //pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/registry/:username=[ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
    //pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
    //pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/registry/:email=npm requires email to be set but doesn't use the value
    //pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/:username=[ANY_VALUE_BUT_NOT_AN_EMPTY_STRING]
    //pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
    //pkgs.dev.azure.com/<yourOrganization>/_packaging/<yourFeed>/npm/:email=npm requires email to be set but doesn't use the value
    ; end auth token
    ```

2. Generate a [personal access token](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md), with packaging read and write scopes.

3. Base64 encode the personal access token from the previous step. Then safely encode your personal access token:

    1. From a command prompt, run the following:
        
        ```
        node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
        ```

        Other options to convert your personal access token to Base64:

        Windows:
        ```powershell
        [Convert]::ToBase64String([system.Text.Encoding]::UTF8.GetBytes("YOUR_PAT_GOES_HERE"))
        ```
    
        Mac:
        ```
        echo -n "YOUR_PAT_GOES_HERE" | base64
        ```

    2. Paste your personal access token value, and press Enter or Return.
    3. Copy the Base64 encoded value.

4. Replace both `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` values in your user .npmrc file with your Base64 encoded personal access token from the previous step. You should also replace `yourOrganization` and `yourFeed`, and fill in your username, your personal access token, and email.

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. From **Packages**, select **Connect to feed**.

2. Select **npm**.

3. Select **Generate npm credentials**. Copy the credentials to add them to your user .npmrc file manually:
    > [!div class="mx-imgBorder"] 
    >![Screenshot of the connect to npm feed.](../../media/tfs2018-connect-to-npm-feed.png)

::: moniker-end