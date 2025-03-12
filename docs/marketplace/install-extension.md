---
title: Install extensions
description: Learn how to install, assign, disable, and uninstall extensions for Azure DevOps.
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-azurecli
ms.subservice: azure-devops-marketplace
ms.assetid: dd117c5c-111f-4361-91c6-ed37fb476c75 
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 03/03/2025
monikerRange: '<= azure-devops'
---

# Install extensions

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Install, assign, disable, and uninstall extensions, which add new features and capabilities for Azure DevOps.

For more information about extensions, see the [developing](../extend/overview.md) and [publishing](../extend/publish/overview.md) overviews.

## Prerequisites

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the Project Collection Administrators group. Organization owners are automatically members of this group. If you don't have permissions, you can [request extensions](./request-extensions.md) instead or [look up a project collection administrator](../organizations/security/look-up-project-collection-administrators.md).|
|**Extension sharing** | Private extensions [shared with your organization](../extend/publish/overview.md#share-your-extension).|

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the Project Collection Administrators group or **Edit collection-level information** permissions. Organization owners are automatically members of this group. If you don't have permissions, you can [request extensions](./request-extensions.md) instead or [look up a project collection administrator](../organizations/security/look-up-project-collection-administrators.md).|
|**Extension sharing** | Private extensions [shared with your organization](../extend/publish/overview.md#share-your-extension).|

> [!NOTE]
> To use an existing Azure subscription for billing, have at least coadministrator permissions for that subscription. If you don't have permissions, an Azure Account Administrator or Service Administrator can [add you as coadministrator](/azure/billing-add-change-azure-subscription-administrator) to the Azure subscription in the Azure portal.

Your project collection reuses your Azure subscription for future Marketplace purchases. [Where can I find more info about Azure billing?](faq-extensions.yml)

::: moniker-end

## Install an extension

Install an extension to your organization by doing the following steps.

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
2. Select the shopping bag icon, and then select **Browse Marketplace**.

   ![Screenshot showing highlighted shopping bag icon and Browse Marketplace button selection.](media/shopping-bag-icon-browse-marketplace.png)

3. Find the extension that you want to install and select **Get it free**.

    ![Screenshot showing red square highlighting Get it free button.](media/get-vsts-extensions/get-extension.png)

4. Select your organization from the dropdown menu, and then select **Install** to install the extension.

    ![Select organization for this extension](media/get-vsts-extensions/select-install-extension.png)

   * [Why don't I see any organizations?](./faq-extensions.yml) 

   * [Why can't I install this extension?](./faq-extensions.yml) 

Your extension is now installed! You can now go to your organization to use your extension. Also, tell your team about this extension, so they can start using its capabilities.

![Extension installed](media/get-vsts-extensions/you-are-all-set.png)

::: moniker-end

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range=" azure-devops"

Install an extension with the [az devops extension install](/cli/azure/devops/extension#az-devops-extension-install) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

### Search for an extension

If necessary, first search for an extension with the `az devops extension search` command.

```azurecli
az devops extension search --search-query
```
#### Parameters

- **search-query**: Specify a term to search in the marketplace.

#### Example

The following command searches the marketplace for the term **Timetracker** and returns the *Publisher ID* and *Extension ID* in table format.  

```azurecli 
az devops extension search --search-query Timetracker --output table

Publisher Id    Extension Id    Name
--------------  --------------  -----------
7pace           Timetracker     Timetracker
7pacelabs       kitten          Kitten
```

### Install extension

```azurecli 
az devops extension install --extension-id
                            --publisher-id
                            [--org]
``` 

#### Parameters 

- **extension-id**: The name of the extension to install.
- **publisher-id**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

#### Example 

The following command installs the **Timetracker** extension and shows the result in YAML format.  

```azurecli
az devops extension install --extension-id Timetracker --publisher-id 7pace --output yaml

baseUri: null
constraints: null
contributionTypes: null
contributions: null
demands: null
eventCallbacks: null
extensionId: Timetracker
extensionName: Timetracker
fallbackBaseUri: null
files: null
flags: null
installState:
  flags: none
  installationIssues: null
  lastUpdated: '2019-11-26T16:04:32.907000+00:00'
language: null
lastPublished: '2019-11-13T11:58:37.890000+00:00'
licensing: null
manifestVersion: null
publisherId: 7pace
publisherName: 7pace
registrationId: null
restrictedTo: null
scopes: null
serviceInstanceType: null
version: 5.0.1.34507
```

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

**Manual installation:**

1. Use the following command to get the extension you want to install.

   `az extension add --name <extension-name>`

2. Replace `<extension-name>` with the actual name of the extension you want to install.
   - If the extension is from an external resource or you have a direct link to it, provide the source URL or local path.

   `az extension add --source <URL-or-path>`

   You can also build a private extension index following the format in `index.json`, then set the extension index URL used by Azure CLI starting from version 2.20.0. After that, you can install the extension by name from the private extension index.

**Automatic installation (Dynamic install):**

When you run an extension command that isn’t installed, the Azure CLI recognizes the command you run and automatically installs the extension for you (starting from version 2.10.0). This feature referred to as dynamic install, is enabled by default since 2.12.0. You can also enable it through configuration for previous supported versions:

`az config set extension.use_dynamic_install=yes_prompt`

Use the following configuration command to enable dynamic install without a prompt:

`az config set extension.use_dynamic_install=yes_without_prompt`

Use the following configuration command to turn off the dynamic install feature to revert to the default behavior:

`az config set extension.use_dynamic_install=no`

The extension command returns a “command-not-found” error if the extension isn’t installed.

**Extension location:**

Once an extension is installed, you can find it under the value of the `$AZURE_EXTENSION_DIR` shell variable. If this variable is unset, by default the value is `$HOME/.azure/cliextensions` on Linux and macOS, and `%USERPROFILE%\\.azure\\cliextensions` on Windows.

::: moniker-end

* * *

::: moniker range="< azure-devops-2020"

1. Go to [Marketplace.visualstudio.com](https://marketplace.visualstudio.com/azuredevops).
2.	Sign in using your Azure DevOps credentials.
3. Find the extension that you want to install. Use the search box to filter the list of extensions.

   :::image type="content" source="media/get-devops-extensions/install-devops-extension-02.png" alt-text="Screenshot of Selecting an extension.":::

4. Select the extension and select **Get** or **Get it free**.
   Or, for some non-Microsoft extensions, select **Get Started** to show pricing information and extension-specific installation instructions.

   :::image type="content" source="media/get-devops-extensions/install-devops-extension-04.png" alt-text="Screenshot of getting the extensions.":::

   If you don't have permission to install the extension, you can request an administrator
   to install it for you. Your request gets stored in Azure DevOps Server and is ready for attention from an administrator.

5. Select **Download** to download the vsix file.
6. Upload the vsix to your on premises local Marketplace. Open your Azure DevOps Server home page (`https://{server}:DefaultCollection`).
7. Go to **Collection settings** > **Browse local extensions**.

   :::image type="content" source="media/get-tfs-extensions/standalone/browse-local-extensions.png" alt-text="Screenshot of selection, Browse local extensions button.":::

8. Select **Manage extensions** and then **Upload** the vsix file.

   :::image type="content" source="media/manage-extensions-on-premises.png" alt-text="Screenshot of selection, Manage extensions.":::

9.  Install the extension in your project collection on the **Manage extensions** page. Select the project collection where you want to install the extension and choose **Install**.

   :::image type="content" source="media/get-devops-extensions/install-devops-extension-06.png" alt-text="Screenshot of Select project collection and choose Install.":::

10. After installation is complete, go to the project collection or return to the Marketplace to find other extensions. 

   :::image type="content" source="media/get-devops-extensions/install-devops-extension-07.png" alt-text="Screenshot showing completed installation of extension.":::

::: moniker-end

### High-risk extensions

Some extensions are flagged as high-risk. For more information and to understand the reasons behind this classification, see [High risk extensions](../marketplace/high-risk-extensions.md).

<a id="uninstall-disable-extension">  </a>

## Uninstall or disable an extension

::: moniker range="azure-devops"

#### [Browser](#tab/browser)

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing Open Organization settings.](../media/settings/open-admin-settings-vert.png)

3. Select **Extensions**, and then select the extension that you want to uninstall or disable.

   ![Screenshot showing Select uninstall or disable for extension.](media/org-settings-select-extension.png)

4. Select **Uninstall** or select the ellipses (**...**), and then select **Disable**.

   ![Screenshot showing Disable or uninstall extension actions.](media/disable-or-uninstall-extension.png)

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

[Uninstall extension](#uninstall-an-extension) | [Disable extension](#disable-extension)

### Uninstall an extension

Uninstall an extension with the [az devops extension uninstall](/cli/azure/devops/extension#az-devops-extension-uninstall) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension uninstall --extension-name
                              --publisher-name
                              [--org]
                              [--yes]
``` 

#### Parameters - uninstall extension

- **extension-name**: The name of the extension to uninstall.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. Configure the default organization with `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **yes**: Optional. Don't prompt for confirmation.

#### Example - uninstall extension

The following command uninstalls the "Timetracker" extension without prompts for confirmation.  

```azurecli
az devops extension uninstall --extension-name Timetracker --publisher-name 7pace --yes
```
<a id="disable-extension"></a> 

### Disable an extension

Disable an extension with the [az devops extension disable](/cli/azure/devops/extension#az-devops-extension-disable) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension disable --extension-name
                            --publisher-name
                            [--org]
``` 

#### Parameters - disable extension

- **extension-name**: The name of the extension to disable.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. Configure the default organization with `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

#### Example - disable extension

The following command disables the **Timetracker** extension and shows the result in table format.  

```azurecli
az devops extension disable --extension-name Timetracker --publisher-name 7pace --output table

Publisher Id    Extension Id    Name         Version      Last Updated     States
--------------  --------------  -----------  -----------  ---------------  --------
7pace           Timetracker     Timetracker  5.0.1.34507  2019-11-13       disabled
```

::: moniker-end

* * *

::: moniker range="< azure-devops"

To uninstall extensions in a collection, do the following steps: 

1. Go to the local gallery management portal (```http://{server}:8080/tfs/_gallery/manage```).

2. For the wanted extension, select the ellipses (**...**), and then select **Remove**.

   ![Screenshot showing Remove extension action.](media/remove-extension-TFS.png)

::: moniker-end 

::: moniker range="azure-devops"

## Enable or list extensions through the command line

Enable an extension with the [az devops extension enable](/cli/azure/devops/extension#az-devops-extension-enable) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension enable --extension-name
                           --publisher-name
                           [--org]
``` 

### Parameters - enable extension

- **extension-name**: The name of the extension to enable.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. Configure the default organization with `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example - enable extension

The following command enables the **Timetracker** extension and shows the result in table format.  

```azurecli 
az devops extension enable --extension-name Timetracker --publisher-name 7pace --output table

Publisher Id    Extension Id    Name         Version      Last Updated     States
--------------  --------------  -----------  -----------  ---------------  --------
7pace           Timetracker     Timetracker  5.0.1.34507  2019-11-13       none
```

## List extensions

You can list the extensions that are installed in your organization with the [az devops extension list](/cli/azure/devops/extension#az-devops-extension-list) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli
az devops extension list [--include-built-in {false, true}]
                         [--include-disabled {false, true}]
                         [--org]
``` 

### Optional parameters - list extensions

- **include-built-in**: Include the built-in extensions. Accepted values are *true* (default) and *false*.
- **include-disabled**: Include the disabled extensions. Accepted values are *true* (default) and *false*.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example - list extensions

The following command lists extensions in your organization. It excludes the disabled and built-in extensions, and shows the results in table format.

```azurecli 
az devops extension list --include-built-in false --include-disabled false -output table

Publisher Id    Extension Id             Name                     Version              Last Updated     States         		 Flags
--------------  -----------------------  -----------------------  -------------------  ---------------  -----------------------  -------
ms              vss-analytics            Analytics                18.160.0.2130149925  2019-11-22       multiVersion, truste...  trusted
ms              vss-code-search          Code Search              18.160.0.1640944814  2019-11-22       multiVersion, truste...  trusted
ms              vss-plans                Delivery Plans           18.160.0.1266795967  2019-11-25       multiVersion, truste...  trusted
ms-eswm         dependencytracker        Dependency Tracker       2.1910.12801         2019-10-28       none
ms-devlabs      workitem-feature-tim...  Feature timeline and...  0.0.357              2019-10-14       none
AgileParts      gantt                    GANTT chart              1.0.79               2019-10-25       none
gordon-bee...   github                   GitHub Widget            0.10.0               2016-03-16       none
ms-devlabs      vsts-extensions-mult...  Multivalue control       2.2.26               2019-11-15       none
agile-exte...   product-vision           Product Vision           2.0.6                2019-06-04       none
mohitbagra      related-workitems        Related Work items       2.0.4                2017-11-12       none
YodLabs         TagsManager2             Tags Manager             0.9.31               2019-02-04       none
ms-devlabs      team-calendar            Team Calendar            2.0.15               2019-11-01       none
ms              vss-testmanager-web      Test Manager for TFS...  18.160.0.2130893445  2019-11-25       multiVersion, truste...  trusted
mmanela         vsts-workitem-recent...  Who recently viewed ...  1.0.4                2019-03-22       none
ottostreif...   wiql-editor              Wiql Editor              2.0.90               2019-06-21       none
mohitbagra      workitem-checklist       Work item checklist      3.2.4                2019-06-24       none
mohitbagra      witoneclickactions       Work item form one c...  2.3.2                2018-04-03       none
ms-devlabs      WorkItemVisualizatio...  Work Item Visualizat...  1.4.64               2018-04-03       none
``` 

## List extension information

You can list the details about an extension with the [az devops extension show](/cli/azure/devops/extension#az-devops-extension-show) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az devops extension show --extension-name
                         --publisher-name
                         [--org]
```

### Parameters - list extension information

- **extension-name**: The name of the extension.
- **publisher-name**: The name of the extension publisher.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.

### Example - list extension information

The following command shows information about the **Timetracker** extension in table format.  

```azurecli 
az devops extension show --extension-name Timetracker --publisher-name 7pace --output table

Publisher Id    Extension Id    Name         Version      Last Updated     States
--------------  --------------  -----------  -----------  ---------------  --------
7pace           Timetracker     Timetracker  5.0.1.34507  2019-11-13       disabled
```

::: moniker-end

### Troubleshoot extension installation

To resolve common issues, follow these troubleshooting steps:

- **Extension fails to install:**
  - **Check permissions:** To install extensions, ensure you're a Project Collection Administrator or have the necessary permissions granted by an administrator.
  - **Verify extension compatibility:** Ensure the extension is compatible with your version of Azure DevOps. Check the extension's details page for compatibility information.
  - **Network issues:** Verify that your network connection is stable and that there are no firewall or proxy settings blocking the installation process.

- **Extension crashes or causes errors:**
  - **Collect diagnostic information:** If an extension crashes or causes errors, collect diagnostic information to help identify the issue. This information includes error messages, logs, and screenshots of the problem.
  - **Check extension logs:** Some extensions provide logs that can help diagnose issues. Check the extension's documentation for information on how to access and interpret these logs.
  - **Contact support:** If you can't resolve the issue, contact the extension's support team with the collected diagnostic information. Provide as much detail as possible to help them troubleshoot the problem.

- **Extension not visible after installation:**
  - **Refresh the page:** Sometimes, the extension might not appear immediately after installation.
  - **Check permissions:** Ensure you have the necessary permissions to view and use the extension. Some extensions might require specific permissions to be visible.
  - **Reinstall the extension:** If the extension still isn't visible, try uninstalling and reinstalling it.

::: moniker range=" < azure-devops"

## Frequently asked questions (FAQs)

### Q: Why don't I see my organization from the Marketplace installation page?

A: If you don't see your organization when buying from the Azure DevOps Marketplace, try the following steps:
1. Check the identity that you use to sign in to the Visual Studio Marketplace. In the upper-right corner, select your user name to view your profile. 
1. Make sure your email address and directory are correct.
1. Close all browser windows.
1. Open a private or incognito browsing session.
1. Sign in to the Visual Studio Marketplace. Use the identity of a user in the organization that you want.

> [!TIP]
> Azure DevOps might ask you to choose between "work or school account" or "personal account." If so, then you used an email address that's the same for a Microsoft account and a "work or school account" that your organization manages in Microsoft Entra ID. Although these identities have the same email address, they're still separate identities with different profiles, security settings, and permissions.
> Choose the identity for the user in the organization that you want to select.
 
### Q: Why can't I install an extension?

A: You can't install extensions for one of the following reasons.  
- Be a member of the [**Project Collection Administrators** group](../organizations/security/look-up-project-collection-administrators.md) or are the [**Organization owner**](../organizations/security/look-up-organization-owner.md). If you don't have permissions, but you're a project member, you can [request extensions](request-extensions.md) instead.
- For an "already installed or requested" error, check with your Project Collection Administrator and ask them to assign the extension to you.  

### Q: Why can't users access extension features?

A: Users can't access an extension for one of the following reasons.  
- Most extensions require that users have at least Basic access, not Stakeholder. For example, you can install the free [Code Search extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search), but each user must have at least Basic access to search for code. To help your team improve app quality, you can install the free [Test & Feedback extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web). You experience different capabilities, based on your access level and whether you work offline or connected to Azure DevOps Services or on-premises Azure DevOps Server. For more information, see the extension's description in the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.
- If you're using an organization and you started a free extension trial, your trial might be expired. Check whether your trial expired.
   1. On your organization toolbar, select **Users**.
   2. Go to the extension pane.
   3. Check for an expiration message to find if or when your extension expired.

- If you're using an organization and you paid for this extension, make sure that you assigned this extension to users.
   1. On your organization toolbar, go to **Users**.
   2. Go to the extension pane.
   3. Check whether the extension is assigned to the user. If it isn't, assign the extension to the user.

For more information, see [Assign extensions to users](../marketplace/install-extension.md).

### Q: What happened to my preview extension?

A: Your extension might be out of preview. After a preview period, an extension longer is generally available as a paid extension. A grace period might be offered before you have to buy the extension. All preview extensions automatically convert to a [free trial](../organizations/billing/try-additional-features-vs.md) before you have to buy the extension.

### Q: Why can't I install extensions for Azure DevOps Server?

A: You can't install extensions for Azure DevOps Server for one of the following reasons:
- Be a member of the **Project Collection Administrators** group or have the **Edit collection-level information** permission set to **Allow** in the project collection where you want to install extensions. If you don't have permissions, you can [request extensions](./request-extensions.md) instead.
- You might get an error that says you already installed or requested the extension. If so, check with a member of the **Project Collection Administrators** group and ask them to assign the extension to you. For more information, see [Request an increase in permission levels](../organizations/security/request-changes-permissions.md).   
 
### Q: Why don't I see the project collection I want (on-premises)?

A: Be a member of your project collection. Follow these steps to check your identity that you use to sign in to the Marketplace.
1. On your Azure DevOps Server web portal home page (```https://{server}:8080/tfs/```), go to the top-right corner of the page, and select your user name to view your profile.
1. On the left side of your profile, make sure that your email address and directory are correct.
1. Close all browser windows.
1. Open a private or incognito browsing session.
1. Sign in to your Azure DevOps Server home page (```https://{server}:8080/tfs/```) with the identity that's a user in the project collection where you want to install the extension.<br>
   Azure DevOps might ask you to choose between a "work or school organization" or "personal account." This message means that you used an email address that's the same for a Microsoft account and a "work or school account" managed by your organization in Microsoft Entra ID. Although these identities have the same email address, they're still separate identities with different profiles, security settings, and permissions. Choose the identity that's the user in your project collection.<br>
1. From your project collection, go to the Marketplace.

### Q: Why doesn't the extension that I want show a download button (on-premises)?

A: Some extensions work only with Azure DevOps Services for one of the following reasons:  
- The extension uses Azure DevOps features that aren't released yet for Azure DevOps Server.
- The [extension manifest](../extend/develop/manifest.md) indicates that the extension is available only for Azure DevOps Services (targets = Microsoft.Visualstudio.Services.Cloud).
- The extension manifest indicates that the extension is an integration (targets = Microsoft.Visualstudio.Services.Integration).

### Q: Why can't I upload extensions to Azure DevOps Server?

A: Be a member of the [Team Foundation Administrators group](/azure/devops/server/admin/add-administrator#add-a-user-to-the-server-administrators-group). You must also have [**Edit instance-level information** permissions](../organizations/security/permissions.md#server) for the Azure DevOps Server where you want to upload extensions.
::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Manage extension permissions](grant-permissions.md)

## Related articles

- [Request and approve extension requests](request-extensions.md)
- [Develop a web extension](../extend/get-started/node.md)
- [Review Azure Billing and Subscription FAQs](https://azure.microsoft.com/pricing/faq/)
- [Access Azure billing support](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)
- [Get Visual Studio subscriptions support](https://visualstudio.microsoft.com/subscriptions/support)
