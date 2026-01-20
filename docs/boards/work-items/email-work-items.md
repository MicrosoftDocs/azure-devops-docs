---
title: Send an email with work items
titleSuffix: Azure Boards
description: Learn how to send an email with work items in Azure Boards, Azure DevOps, and Visual Studio Team Explorer. Also learn how to print a list of work items.
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: B2E9B082-15BE-448C-96D8-3EF048A15560
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/27/2025
---

# Send an email with work items

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)] 

Using work items to track your work provides many benefits, including the ability to easily share information. You can capture most information within the work item Description or other rich-text formatted fields. If you need to maintain the information in a different format, you can easily link to or attach a file. 

## Supported tasks 

Emailing lists of work items is a common way to share work tracking information. The following table shows which tasks or features have support from the web portal and Visual Studio.   

> [!NOTE]   
> The tasks and features listed in the following table aren't available when you connect to a GitHub or non-Microsoft Git repository. Also, they aren't available from Visual Studio under the following conditions:   
> 
> * If you're set to use the new Git Tool as described in [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio).   

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of the legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

---
:::row:::
   :::column span="2":::
      **Task/feature**
   :::column-end:::
   :::column span="":::
      **Web portal**
   :::column-end:::
   :::column span="":::
      **Visual Studio**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      [Email summary list with links to work items](#email-summary-lists)
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Print work items](#print-items)
   :::column-end:::
   :::column span="":::
        
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Email link to a work item query](#copy-url)
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      [Email query results](#email-summary-lists)
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
:::row-end:::
::: moniker range="<=azure-devops"
:::row:::
   :::column span="2":::
      [Export query result as CSV](#export)
   :::column-end:::
   :::column span="":::
      ✔️
   :::column-end:::
   :::column span="":::
        
   :::column-end:::
:::row-end:::
::: moniker-end 
---

::: moniker range="< azure-devops"
> [!NOTE]   
> For the email feature to work, your administrator for Azure DevOps Server must [configure a Simple Mail Transfer Protocol (SMTP) server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end 

## Prerequisites

[!INCLUDE [temp](../includes/prerequisites-work-items.md)] 

<a id="email-print-send-links"></a>
<a id="email-item"></a>

## Email a single item  

You can quickly email a summary of one or more work items. Summaries include the values assigned to these fields: work item ID, title, work item type, assigned to, state, and tags.  

> [!IMPORTANT]     
> If you use the built-in email feature, you can only send the email to individual addresses for a project member that the system recognizes. Adding a team group or security group to the *to* line isn't supported. If you add an email account that the system doesn't recognize, you receive a message that one or more recipients of your email don't have permissions to read the mailed work items.  

<a id="team-services-email"></a>  

#### [Web portal](#tab/browser/)

From the web portal, open the work item, select the :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon, and select the **Email work item** option. The first 200 items in the list appear in a formatted table. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of work item form, context menu, Email work items option.](media/email/email-work-item.png)   

#### [Visual Studio](#tab/visual-studio/)

<a id="team-explorer-email"></a>

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

From Visual Studio or Team Explorer, select ![Send work item to Microsoft Outlook](../queries/media/IC764665.png). This option requires that you configure Office Outlook on your client computer.

![Screenshot for Email work item from on-prem Azure DevOps Server.](../queries/media/share-plans-email-work-item-te.png)  

* * *

::: moniker range="< azure-devops"  

> [!NOTE]  
> If you connect to an on-premises Azure DevOps Server, your server administrator must have [configured an SMTP server](/azure/devops/server/admin/setup-customize-alerts) for the email feature to work.   

::: moniker-end  

<a id="email-summary-lists"></a>
<a id="team-services-email-list"></a> 
<a id="email-list-web-portal" >  </a> 

## Email summary lists with links to items  

Another way to share items is by emailing summary lists, such as a sprint summary plan or active bugs list. You can share items from a backlog or query results list.  

Depending on the option and client you choose, summary lists might or might not include a hyperlink to the work item ID.  

#### [Web portal](#tab/browser/)

To email items from the web portal, open a backlog or query and highlight the items from the list. Open the context menu for one of the selected items and select to email them.   

> [!div class="mx-imgBorder"]  
> ![Screenshot of backlog, context menu, Email... options.](media/email/bulk-email-backlog-items.png)   

If you want to mail a list of all items in the backlog or query, select the  :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: actions icon, and select the **Email** option. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of backlog, context menu, Email... option, TFS 2018 and later  versions.](media/email/email-backlog.png)  

#### [Visual Studio](#tab/visual-studio/)

<a id="team-explorer-email-list"></a>

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

To email items from Visual Studio, open a query, highlight the items from the list, select the context menu, and select **Send selection to Microsoft Outlook** from the menu. This option requires that you configure Office Outlook on your client computer.  

![Screenshot of Email selected items from Visual Studio query result list.](../queries/media/share-plans-email-work-item-list.png)   

* * *

<a id="copy-formatted-list"></a>

## Copy formatted list of work items  

With this option, you can copy an HTML formatted table of selected items. You can then email this list using your choice of email client.  

1.  From the web portal, open a backlog or a list of query results.  

2.  Select the work items you want to copy.   

    ![Copy as HTML selected work items](../queries/media/IC777601.png)  

    The formatted table contains a link to each work item included in your selected results list.  

3.  Paste the contents of the clipboard into your email client or other application. To open a linked work item, users need read access to the project or area node for those work items.   

<a id="print-items"></a>

## Print items  

Open a query in Visual Studio that contains a work item that you want to print, select or highlight those items, and then select the **Print** option from the context menu.   

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

![Print work items from Team Explorer](../queries/media/share-plans-print-work-item-details.png)   

<a id="print-cards"></a>

## Print work items as cards

Some teams want to work with physical cards when planning or updating their physical Kanban or Scrum task boards. There's no native support for printing work items as cards. However, you might find a solution from the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/search?term=card&target=AzureDevOps&category=Azure%20Boards&sortBy=Relevance).   

<a id="copy-url">  </a>
<a id="team-explorer-copy-url"></a>

## Copy the URL to a single work item  

> [!NOTE]   
> All URLs you copy, regardless of the client you use to copy them, open the work item in the web portal. 

#### [Web portal](#tab/browser/)

<a id="team-services-copy-url"></a>

From the web portal, copy the URL from the web browser address or hover over the title and then select the ![Copy to clipboard icon](../backlogs/media/icon-copy-to-clipboard.png) copy-to-clipboard icon.

![Screenshot for Copy hyperlink for a work item from web portal.](../backlogs/media/add-work-item-copy-URL.png)

#### [Visual Studio](#tab/visual-studio/)

> [!IMPORTANT]
> We strongly recommend that everyone uses the [default view](view-add-work-items.md?view=azure-devops&preserve-view=true&tabs=visual-studio#view-work-items) instead of this legacy view. This view helps you quickly access a list of work items based on your assignment, following, mentioned, or recent updates. We no longer enhance the legacy view and expect to remove it in a future release of Visual Studio.

From Visual Studio, right-click the work item tab to copy the URL. The URL opens the work item in the web portal. 

![Screenshot that shows how to copy full path hyperlink for a work item from Visual Studio.](../backlogs/media/add-work-items-copy-url-for-a-work-item.png)  

* * *

<a id="export"></a> 

::: moniker range="<=azure-devops"

## Export list as CSV 

From any query, you can export a list of work items as a comma-delimited list. Open the query, select the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon, and select <strong>Export to CSV</strong>. For more information, see [Bulk import or update work items using CSV files](../queries/import-work-items-from-csv.md).

::: moniker-end

::: moniker range="<=azure-devops"

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows how to export a query as CSV.](media/email/export.png)   

::: moniker-end  

## Best practices for emailing work items

Consider these best practices when sharing work items via email:

- **Verify recipients have access**: Ensure all email recipients have the appropriate permissions to view the work items you're sharing.
- **Use descriptive subject lines**: Include relevant context in your email subject line to help recipients understand the content.
- **Consider security**: Be mindful of sensitive information when emailing work items outside your organization.
- **Keep emails current**: Work item states and information can change quickly, so send emails close to when the information is needed.
- **Use queries for regular sharing**: For recurring reports, create and save queries that you can easily re-run and share.

## Troubleshooting email issues

If you encounter problems when emailing work items:

- **Permission errors**: Verify that all recipients have access to the project and work items you're trying to share.
- **Email not sending**: For on-premises installations, confirm that your administrator has configured the SMTP server properly.
- **Formatting issues**: Some email clients might not display HTML formatting correctly. Consider using plain text alternatives for better compatibility.
- **Missing work items**: Ensure the work items you're trying to email haven't been deleted or moved to areas where recipients don't have access.

## Marketplace extensions  

You might find other ways to share information by exporting work items to other applications such as Microsoft Word. For more information, review the [Marketplace extensions that support Microsoft Word](https://marketplace.visualstudio.com/search?term=word&target=AzureDevOps&category=Azure%20Boards&sortBy=Relevance). 

## Related content  

::: moniker range="azure-devops"

- [Use templates to add and update work items](../backlogs/work-item-template.md) 
- [Follow a work item or pull request](follow-work-items.md)
- [Bulk modify work items](../backlogs/bulk-modify-work-items.md)

::: moniker-end

::: moniker range="< azure-devops"

- [Use templates to add and update work items](../backlogs/work-item-template.md) 
- [Follow a work item or pull request](follow-work-items.md)
- [Bulk modify work items](../backlogs/bulk-modify-work-items.md)
- [Configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts)

::: moniker-end
