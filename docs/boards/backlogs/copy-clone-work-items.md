---
title: Copy or clone work items and more
titleSuffix: Azure Boards
description: Learn how to copy work items and lists of stories or issues in Azure Boards.
ms.custom: cross-project
ms.service: azure-devops-boards
ms.assetid: 743A3914-CD86-403D-AA4F-42CDBBB69F95
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 09/09/2024
---

# Copy or clone work items and more

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

There are two types of copy functions you can use:

- **Copy or clone a single work item:** To duplicate a single work item, use the "Create copy of a work item" feature. Depending on the options you choose, this process can be considered either a [copy or a clone](#copy-or-clone-a-work-item).
- **Copy a list of work items:** To copy a list of work items, multi-select a list of work items and use the "Copy as HTML" or "Copy to clipboard" feature.

[!INCLUDE [temp](../includes/image-differences.md)]

[!INCLUDE [temp](../includes/prerequisites-work-items.md)]

<a id="copy-clone"></a>

## Copy or clone a work item

**Copy** a work item to create a new work item with a new ID and prepopulated fields from the original. You can modify the fields as needed. A related link to the original work item and any parent link are copied over, but history and attachments are not.

**Clone** a work item to create an exact copy of an existing work item, including all fields and attachments, but with a new ID. Cloning is useful when no field modifications are needed.

In summary, **copy** a work item to adjust prepopulated values, and **clone** a work item to create an exact duplicate.

::: moniker range="< azure-devops"

> [!NOTE]
> Some fields might get copied depending on your on-premises version and customizations. If the work item type you clone lacks a state transition rule to clear the *Closed By* field when the *State* is **New** or **Active**, that field gets copied. Current system out-of-box templates include this rule.

::: moniker-end

::: moniker range=">= azure-devops-2020"

1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and choose **Create copy of work item**.

   :::image type="content" source="media/copy/choose-copy-work-item-s171.png" alt-text="Screenshot shows open context menu with Create copy of work item highlighted.":::

2. Choose the project and work item type if different from the copied work item. Optionally change the Title and provide more details.

    :::image type="content" source="media/copy/copy-work-item-s171.png" alt-text="Screenshot shows copy work item dialog.":::

	**Choose options:**
 
	- **Include existing links**: To include all **Related** and external links in the copied work item. A **Related** link gets created automatically for the work item copied, and included in the **Discussion** section. There's no method for disabling this feature.  
	- **Include existing attachments**: To include attachments in the copied work item
	- **Include child work items**: To include existing links to child work items in the copied work item. This feature isn't recursive. Only those work items directly linked as children to the work item being copied are included. This option appears even if there are no child items linked to the work item.

	> [!NOTE]
	> - When you copy the work item to a different project, **Include child work items** is disabled. 
	> - When you copy a work item and choose to **Include child work items**, a copy gets made of each child work item and linked to the copied work item through a parent-child link. 
	> - The **Include child work items** feature requires installation of Azure DevOps Server 2020.1 update.

3. In the work item form that opens, update other fields as needed. Select **OK**. All work items start in the "New" state.

::: moniker-end

::: moniker range="azure-devops-2019"

1. From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and choose **Create copy of work item**.  

   :::image type="content" source="media/copy/choose-copy-work-item-s171.png" alt-text="Screenshot of web portal, user story work item form, open context menu, select Create copy of work item.":::

2. Choose the project and work item type if different from the copied work item.

    :::image type="content" source="media/copy/copy-work-item-2020.png" alt-text="Screenshot shows copy work item dialog.":::

	Optionally, check one or more of the boxes:

	- **Include existing links**: To link the copied work item as a Related link type and maintain all other related and external links included in the copied work item.  
	- **Include existing attachments**: To include attachments in the copied work item.

3. Select **OK**.

4. In the work item form that opens, update other fields as needed. All work items start in the New state.

::: moniker-end

> [!TIP]
> Copied or cloned work items always have a higher ID than the original work items.

## Change the work item type

If you have a large number of work items whose type you want to change, use [Change work item type](move-change-type.md). If the **Change work item type** option isn't available to you, you can export a set of work items using Excel or CSV, copy them to a new list, and reimport them by specifying a different work item type. See [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) or [Import or update work items in bulk by using CSV files](../queries/import-work-items-from-csv.md).

## Copy a list of work items

You can copy an HTML formatted table of selected items from either a backlog page or query results list. Then, you can send an email of this list using your choice of email client, or paste the list into a Word document, Excel spreadsheet, or other application. 

::: moniker range="=azure-devops-2019"
> [!NOTE]  
> The data copied with **Copy as HTML** is the same as that copied when you select **Email selected work items**. If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts).
::: moniker-end

1. From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard. 

2. Open the &hellip; context menu of one of the selected work items, and then choose **Copy to clipboard** or **Copy as HTML**.

    ![Screenshot shows backlog page, multi-select items, open context menu, Copy as HTML.](media/copy-work-item-copy-to-clipboard-ts-1.png) 

## Paste the contents into your email client

Paste the contents of the clipboard into your email client or other application. To open a linked work item, users need read access to the project or area node for those work items.

The formatted table contains a link to each work item included in your selected results list. A link to a query that opens only those work items selected is also provided.

![Screenshot shows copy as HTML paste results.](media/bulk-modify-copy-as-html-table-results.png)  

<a id="copy-url">  </a>

## Copy the URL

### [Browser](#tab/browser/)

Copy the URL from the web browser address or hover over the title and then select the ![Copy to clipboard icon](media/icon-copy-to-clipboard.png) copy-to-clipboard icon.

<img src="media/add-work-item-copy-URL.png" alt="Screenshot shows copy hyperlink for a work item from web portal." />

### [Visual Studio](#tab/visual-studio/)

In Visual Studio, right-select the work item tab to copy the URL. The URL opens the work item in the web portal.

![Screenshot shows copy full path hyperlink for a work item from Visual Studio.](media/add-work-items-copy-url-for-a-work-item.png)

* * *

## Related articles

- [Prepopulate fields with work item templates](work-item-template.md)
- [Copy or clone test plans, test suites, test cases, and other test items](../../test/copy-clone-test-items.md)
- [Bulk modify work items](bulk-modify-work-items.md)
- [Move work items and change their type](move-change-type.md)
- [Remove, delete, or restore work items](remove-delete-work-items.md)
- [Access Azure Boards FAQs](../faqs.yml)
