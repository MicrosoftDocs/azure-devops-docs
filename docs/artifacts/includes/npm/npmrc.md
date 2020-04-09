---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 04/08/2020
---

The **Connect to feed** dialog box generates an appropriately formatted token that you can place into your .npmrc file with a lifespan of 90 days.

>  If you want to create a token that lasts _longer than 90 days_, skip to the second of the following methods.

**90-day token:**

::: moniker range=">= azure-devops-2019"

1. From **Azure Artifacts**, select **Connect to feed**.

2. Select **npm**.

3. Select **Other** in the **Project setup** section.

4. Select **Generate npm credentials**. Copy the credentials to add them to your user .npmrc file manually:

   > [!div class="mx-imgBorder"] 
   >![Connect to feed from Azure Artifacts Linux/Mac credentials](../../media/connect-to-feed-npm-creds-azure-devops-newnav.png)
   > 

::: moniker-end

::: moniker range=">=tfs-2017 < azure-devops-2019"

1. From the **Packages** page, select **Connect to feed**.

2. Select **npm**.

3. Select **Generate npm credentials**. Copy the credentials to add them to your user .npmrc file manually:

    ![Connect to feed from Azure Artifacts Linux/Mac credentials](../../media/connect-to-feed-npm-creds.png)

::: moniker-end

**Create a token that lasts longer than 90 days:**

1. Browse to security and generate a [PAT](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with a narrow scope of "Packaging (read and write)."

2. Base64 encode the PAT.

    # [Windows](#tab/windows)
    ```powershell
    [Convert]::ToBase64String([system.Text.Encoding]::UTF8.GetBytes("YOUR_PAT_GOES_HERE"))
    ```

    # [Mac](#tab/mac)
    ```
    echo -n "YOUR_PAT_GOES_HERE" | base64
    ```

3. In your $home/.npmrc file, add the following lines. Replace `yourorganization` and `yourfeed`, and add your username (can be anything except empty), PAT, and email.

    ```ini
    ; begin auth token
    //pkgs.dev.azure.com/<yourorganization>/_packaging/<yourfeed>/npm/registry/:username=[ANY_VALUE_BUT_NOT_EMPTY_STRING]
    //pkgs.dev.azure.com/<yourorganization>/_packaging/<yourfeed>/npm/registry/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
    //pkgs.dev.azure.com/<yourorganization>/_packaging/<yourfeed>/npm/registry/:email=[NPM REQUIRES EMAIL TO BE SET BUT DOES NOT USE THE VALUE]
    //pkgs.dev.azure.com/<yourorganization>/_packaging/<yourfeed>/npm/:username=[ANY_VALUE_BUT_NOT_EMPTY_STRING]
    //pkgs.dev.azure.com/<yourorganization>/_packaging/<yourfeed>/npm/:_password=[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]
    //pkgs.dev.azure.com/<yourorganization>/_packaging/<yourfeed>/npm/:email=[NPM REQUIRES EMAIL TO BE SET BUT DOES NOT USE THE VALUE]
    ; end auth token
    ```
