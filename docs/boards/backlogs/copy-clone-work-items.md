---
title: Copy or clone work items
titleSuffix: Azure Boards
description: Learn how to copy or clone single or multiple Azure Boards work items, and add lists of work items to emails or other apps.
ms.custom: cross-project
ms.service: azure-devops-boards
ms.assetid: 743A3914-CD86-403D-AA4F-42CDBBB69F95
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 10/14/2025
---

# Copy or clone work items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

This article describes how to create copies of Azure Boards work items and add lists of work items to emails or other apps.

- To duplicate a single work item, use **Create copy of work item**.
- To copy a list of work items, multiselect the work items and select **Copy as HTML**. You can then paste the list into Excel or other apps, or send it in email.
- To email a list of work items to project members, you can multiselect the work items and select **Email**.

::: moniker range="<azure-devops"

In Azure DevOps Server, you can also *clone* an exact copy of an existing work item, including all fields and attachments, but with a new ID. Depending on the options you choose, you use **Create copy of work item** to create either a copy or a clone.

You *copy* a work item to adjust prepopulated values, and *clone* a work item to create an exact duplicate. Cloning is useful when no field modifications are needed.

> [!NOTE]
> Some fields might get copied depending on your on-premises version and customizations. If the work item type you clone lacks a state transition rule to clear the **Closed By** field when the **State** is **New** or **Active**, that field gets copied. Current system out-of-box work item templates include this rule.

::: moniker-end

::: moniker range=">=azure-devops"

> [!IMPORTANT]
> The option to clone a work item isn't available in Azure DevOps Services. You can use copy options instead.

::: moniker-end

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-work-items.md)]

<a id="copy-clone"></a>
## Create a copy of a work item

Copy a work item to create a new work item with a new ID and prepopulated fields from the original. You can modify the fields as needed.

Related links to the original work item and any parents, and a discussion comment, are automatically created in the copy. You can copy other links and attachments depending on the options you select. History isn't copied over.

To copy a work item:

1. Open the work item you want to copy in the web portal, select the **More actions** icon at upper right, and then select **Create copy of work item**.

   :::image type="content" source="media/copy/choose-copy-work-item-s171.png" alt-text="Screenshot shows open context menu with Create copy of work item highlighted.":::

1. On the **Copy Work Item** screen, choose a different project and work item type for the new work item if desired, and then select **Copy**

   :::image type="content" source="media/copy/copy-work-item-s171.png" alt-text="Screenshot shows copy work item dialog.":::

1. In the new work item, change the **Title**, update other fields, and add details as needed, and then select **Save** or **Save and Close**.

### Copy options

Optionally, you can select any or all of the following options in the **Copy Work Item** form:

- **Include existing links** includes all **Related** and external links from the copied work item. A **Related** link to the original work item and a comment in the **Discussion** section are always created, whether you select this item or not.
- **Include existing attachments** includes attachments from the original work item in the new work item.
- **Include child work items** includes existing links to child work items in the copied work item. This feature isn't recursive. Only direct child links of the original work item are included. This option appears even if there are no child items in the original work item.

  > [!NOTE]
  > - If you copy a work item and choose to **Include child work items**, a copy of each child work item is created and linked to the copied work item through a parent-child link.
  > - If you copy the work item to a different project or work item type, **Include child work items** is disabled.
  
  ::: moniker range="<azure-devops"
  
  > [!NOTE]
  > For Azure DevOps Server, **Include child work items** requires installing the Azure DevOps Server 2020.1 update.
  
  ::: moniker-end

<a id="copy-url">  </a>
## Copy the title, ID, type, or URL of a work item

#### [Browser](#tab/browser/)

To copy a work item URL, you can:

- Copy the URL from the web browser address bar.
  :::image type="content" source="media/copy/copy-url.png" alt-text="Screenshot shows URL for a work item in the address bar.":::

- Right-click the link at upper left in the work item and select **Copy link address** from the context menu.
  :::image type="content" source="media/add-work-item-copy-URL.png" alt-text="Screenshot shows copy hyperlink for a work item from web portal.":::

- Select the work item's **More action** icon and then select **Copy link** from the context menu.
  :::image type="content" source="media/copy/copy-link.png" alt-text="Screenshot shows Copy link context menu item.":::

To copy the work item type, ID, and title, hover over or select the title in the open work item and then select the **Copy** icon next to the title bar.
  :::image type="content" source="media/copy/add-work-item-copy-title.png" alt-text="Screenshot shows copy work item type, title, and ID.":::

#### [Visual Studio](#tab/visual-studio/)

In Visual Studio, right-select the work item tab to copy the URL. The URL opens the work item in the web portal.

:::image type="content" source="media/add-work-items-copy-url-for-a-work-item.png" alt-text="Screenshot shows copy full path hyperlink for a work item from Visual Studio.":::

---

<a name="copy-a-list-of-work-items"></a>
## Copy or email a list of work items

You can copy an HTML formatted table of selected items from a backlog page or query results list, and paste the list into a Word document, Excel spreadsheet, email, or other application. You can also email the list of selected items directly to team or project members using your default email client.

1. From the web portal, open a backlog or query results page and [multiselect the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.

1. Select the **More actions** icon next to one of the selected work items, and then select either **Copy as HTML** or **Email**.

   :::image type="content" source="media/copy/html-or-email.png" alt-text="Screenshot shows multiselect items, open context menu, Copy as HTML or Email.":::

### Copy as HTML

Selecting **Copy as HTML** produces an HTML-formatted table that contains links and details for the work items in your selected results list. You can paste the table into an Excel spreadsheet, Word doc, or other application.

You can also email the work item list to desired recipients using your choice of email client. To open linked work items, recipients need read access to the project or area node for those work items.

### Send email to project or team members

Selecting **Email** opens a **Send work items in email** screen that includes the HTML-formatted table of work item links. In the form, select team or project members in the **To** field, complete the **Subject** and optional **Note** fields, and then select **Send**.

:::image type="content" source="media/copy/send-email.png" alt-text="Screenshot shows the Send work items in email form with work item list table.":::

The email sends through your default mail client, and includes a link to a query that opens only the selected work items.

## Change work item types

To change a large number of work item types, select **Change type** from the context menu for the multiselected list. For more information, see [Change work item type](move-change-type.md).

If the **Change type** option isn't available, you can export a set of work items to Excel or CSV, copy them to a new list, and reimport them specifying a different work item type. For more information, see [Bulk add or modify work items with Excel](office/bulk-add-modify-work-items-excel.md) or [Import or update work items in bulk by using CSV files](../queries/import-work-items-from-csv.md).

## Related content

- [Prepopulate fields with work item templates](work-item-template.md)
- [Copy or clone test plans, test suites, test cases, and other test items](../../test/copy-clone-test-items.md)
- [Bulk modify work items](bulk-modify-work-items.md)
- [Move work items and change their type](move-change-type.md)
- [Remove, delete, or restore work items](remove-delete-work-items.md)
- [Access Azure Boards FAQs](../faqs.yml)
