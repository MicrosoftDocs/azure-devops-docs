---
title: Add information banner
titleSuffix: Azure DevOps 
description: Learn how to add, update, or remove an information banner to your organization or collection
ms.subservice: azure-devops-settings
ms.custom: devx-track-azurecli
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 09/11/2024
---

# Add and manage information banners in Azure Devops

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Use information banners to quickly and effectively communicate with your Azure DevOps users. Alert users to upcoming changes or events without sending mass emails.

Specify one of three types of banners: error, information, or warning. Only the last added or updated banner is displayed at a time. Banners remain in effect until their expiration date.

The following image shows an information message. Users can cancel the message by selecting **Close** :::image type="icon" source="../../media/icons/close-filter.png" border="false":::.

:::image type="content" source="media/banners/show-banner-info.png" alt-text="Information banner"::: 

We limit banners to 30 words prioritize by level. So, if you post a warning message and an info message, the info message only shows after the user closes or you delete the warning message.

## Prerequisites 

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Permissions** | Member of the [Project Collection Administrators](../security/change-organization-collection-level-permissions.md) group.|
|**Extensions** |- [Banner Settings](https://marketplace.visualstudio.com/items?itemName=ms-eswm.banner-settings-hub). For more information, see [Install extensions](../../marketplace/install-extension.md).<br>- [Azure DevOps CLI](../../cli/index.md).<br>- Sign into Azure DevOps using `az login`.<br>- For the examples in this article, set the default organization using `az devops configure --defaults organization=YourOrganizationURL`.|

::: moniker-end

::: moniker range="< azure-devops"

| Category | Requirements |
|--------------|-------------|
|**Permissions** | Member of the [Project Collection Administrators](../security/change-organization-collection-level-permissions.md) group.|
|**Extensions** |- [Banner Settings](https://marketplace.visualstudio.com/items?itemName=ms-eswm.banner-settings-hub). For more information, see [Install extensions for on-premises servers](../../marketplace/get-tfs-extensions.md).|

::: moniker-end

## Manage banners using the Banner Settings extension 

::: moniker range="azure-devops"
The Banner Settings extension provides a settings pane under **Organization settings** to add and manage sitewide banners. The extension supports the following features: 
::: moniker-end
::: moniker range="< azure-devops"
The Banner Settings extension provides a settings pane under **Collection settings** to add and manage sitewide banners. The extension supports the following features: 
::: moniker-end

- Show banners on any page in Azure DevOps
- Choose between three levels of messages: Info, Warning, and Error
- Choose an expiration date for a message
- Include hyperlinks in banners using markdown syntax

::: moniker range="azure-devops"

### Open Organization settings

To add or delete a banner, open **Organization settings**, scroll down to the **Extensions** section, and choose **Banner**.

Organization settings configure resources for all projects respectively for the entire organization. For an overview of all organization settings, see [Project collection administrator role and managing collections of projects](about-settings.md#admin).

1. Choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**, and then choose **Organization settings**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of opening Organization settings.](../../media/settings/open-admin-settings-vert.png)  

::: moniker-end

::: moniker range=" < azure-devops"

### Open Admin settings

To add or delete a banner, open **Admin settings**, scroll down to the **Extensions** section, and choose **Banner**. 

Admin settings configure resources for all projects in a project collection. For an overview of all collection settings, see [Project collection administrator role and managing collections of projects](about-settings.md#admin).

1. Choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Collections**, and then choose **Admin settings**.

	> [!div class="mx-imgBorder"]  
	> ![Open Admin settings](../../media/settings/open-admin-settings-server.png)  

::: moniker-end
 
### Add and manage banners 

#### [Web portal](#tab/browser)

1. If no banners are defined, select **Create a new banner**. Otherwise, select **Edit more** for the banner and go to step 3.

	::: moniker range="azure-devops"
	:::image type="content" source="media/banners/open-banner-extension-cloud.png" alt-text="Create first banner, on-premises"::: 
	::: moniker-end
	::: moniker range="< azure-devops"
	:::image type="content" source="media/banners/open-banner-extension-on-premises.png" alt-text="Create first banner, on-premises"::: 
	::: moniker-end

2. Enter the banner text into the text box. Select **Edit more** to change the message level and set the expiration date. 

	:::image type="content" source="media/banners/banner-extension-test-message.png" alt-text="Add test banner message"::: 

3. :::image type="icon" source="media/banners/banner-save-icon.png" border="false"::: **Save** your changes.   
4. (Optional) **Delete all banners** or select the trash can icon to delete a specific banner.

#### [Azure CLI](#tab/AzureCLI/)

::: moniker range="azure-devops"

## Azure CLI admin banner commands 

> [!div class="mx-tdBreakAll"]  
> | Command | Description |
> |--------| -----------|
> | `az devops admin banner add`    | Add a new banner and immediately show it. |
> | `az devops admin banner list`   | List banners. |
> | `az devops admin banner remove` | Remove a banner. |
> | `az devops admin banner show`   | Show details for a banner. |
> | `az devops admin banner update` | Update the message, level, or expiration date for a banner. | 

The following parameters are optional for all commands, and not listed in the examples provided in this article. 

- **detect**: Automatically detect organization. Accepted values: false, true. Default is true.
- **org**: Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: `--org https://dev.azure.com/MyOrganizationName/`. 

## Add a banner

To add a banner, enter the `az devops admin banner add` command. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner add --message
                           [--expiration]
                           [--id]
                           [--type {error, info, warning}]
```

### Parameters 

- **message**: Required. Text string that specifies the banner message to display. Text strings are limited to a maximum of 30 words.

  The message might contain links in HTML format (`<a href='https://example.org'>Link text</a>`). Any ampersand in the url, for example in the query string, must be escaped in the xml entity format (`&amp;`).
 
- **expiration**: Optional. Date/time when the banner should no longer be displayed to users. For example, "2019-06-10 17:21:00 UTC", "2019-06-10."
- **ID**: Optional. ID of the banner to update. This identifier is needed to change or remove the message later. A unique identifier is automatically created if one isn't specified.
- **type**: Optional. Type of banner to display. Valid values: **error**, **info**, **warning**. Default is **info**.

### Example 

For example, the following command adds an information banner, which expires on September 4, 2019. When an ID isn't specified, a unique ID is automatically assigned. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner add --message "INFORMATION: Network domain updates will occur on September 3. <a href='https://example.org?page=network-updates&amp;anchor=september-3-2019'>More information</a>" --expiration  2019-09-04 --type  info
{
  "3d584103-6a94-4f46-8696-f424278da072": {
    "expirationDate": "2019-09-04T00:00:00-07:00",
    "level": "info",
    "message": "INFORMATION: Network domain updates will occur on September 3"
  }
}
```

<a id="list-banners"></a> 

## List banners

To determine which banners are defined, enter the `az devops admin banner list` command.

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner list 
```

### Example: Default json output 

If you don't specify the output, the list displays in json format. For other output format options, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli).

For example, the following command indicates that two banners are defined. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner list
{
  "04c4d27f-1fee-4f23-9c44-57ed6a9efef8": {
    "level": "info",
    "message": "BANNER-MESSAGE-BANNER-MESSAGE"
  },
  "27f016aa-be13-4e3b-a1da-8b98d239e074": {
    "level": "warning",
    "message": "WARNING - This is a test warning message."
  }
}
```

### Example: Table output 

To list the banners in table format, use the `--output table` command option.  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner list 
ID                                    Message                            Type     Expiration Date
------------------------------------  ---------------------------------  -------  -----------------
04c4d27f-1fee-4f23-9c44-57ed6a9efef8  BANNER-MESSAGE-BANNER-MESSAGE      Info
27f016aa-be13-4e3b-a1da-8b98d239e074  WARNING - This is a test warning message. 
```

## Remove a banner

To delete a banner, use the `az devops admin banner remove` command. Specify the banner ID, which you can find by [listing the banners](#list-banners).  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner remove --id
```

### Parameters 

- **ID**: Required. ID of the banner to remove.  

### Example 

For example, the following command removes the banner with `id=e090e7b0-4499-4b8f-a09b-1eddf7fdeb44`. No response is returned. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner remove --id e090e7b0-4499-4b8f-a09b-1eddf7fdeb44
```

## List banner details

To list information about a single banner, use the `az devops admin banner show` command. Specify the banner ID, which you can find by [listing the banners](#list-banners).    

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner show --id
```

### Parameters 

- **ID**: Required. ID of the banner to list details.  

### Example 

Here we list the details for banner with `id=7653f414-3c01-424f-8f84-e51aa99b797c`.  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner show --id 7653f414-3c01-424f-8f84-e51aa99b797c
{
  "7653f414-3c01-424f-8f84-e51aa99b797c": {
    "expirationDate": "2024-09-04T07:00:00+00:00",
    "level": "info",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
}
```

## Update a banner

You can change the message, type, and expiration of a banner using the `az devops admin banner update` command. 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner update --id
                              [--expiration]
                              [--message]
                              [--type {error, info, warning}]
```

### Parameters 

- **ID**: Required. ID of the banner to update.
- **expiration**: Optional. Date/time when the banner should no longer be displayed to users. To unset the expiration for the banner, supply an empty value to this argument, for example, "2019-06-10 17:21:00 UTC", "2019-06-10."
- **message**: Text string that specifies the banner message to display.
- **type**: Optional. Type of banner to display. Valid values: **error**, **info**, **warning**. Default is **info**.

### Example 

For example, the following command updates the message string for the banner and updates the expiration date to the end of the year.  

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops admin banner update --id 7653f414-3c01-424f-8f84-e51aa99b797c --message "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac lectus eget erat porttitor dapibus vulputate in ipsum.." --expiration  2019-12-31
{
  "7653f414-3c01-424f-8f84-e51aa99b797c": {
    "expirationDate": "2019-12-31T00:00:00-08:00",
    "level": "info",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
  }
}
```
::: moniker-end

::: moniker range=" < azure-devops"
[!INCLUDE [temp](../../includes/note-cli-not-supported.md)]
::: moniker-end

* * *

## Related content

::: moniker range="azure-devops"
- [Get started managing your organization or project collection](../../user-guide/manage-organization-collection.md)
- [Learn about projects and scaling your organization](../projects/about-projects.md) 
- [Get started with Azure DevOps CLI](../../cli/index.md)  
- [Use az devops admin banner commands](/cli/azure/devops/admin/banner)    
::: moniker-end
::: moniker range="< azure-devops"
- [Get started managing your organization or project collection](../../user-guide/manage-organization-collection.md)
- [Learn about projects and scaling your organization](../projects/about-projects.md)  
::: moniker-end
