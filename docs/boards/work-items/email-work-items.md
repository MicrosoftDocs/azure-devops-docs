---
title: Email or print user stories, issues, bugs, or other work items
titleSuffix: Azure Boards
description: Email or print work items to share information in Azure Boards, Azure DevOps, Visual Studio Team Explorer 
ms.custom: work-items, seodec18
ms.technology: devops-agile
ms.prod: devops
ms.assetid: B2E9B082-15BE-448C-96D8-3EF048A15560
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 04/09/2019
--- 


# Email or print user stories, bugs, and other work items 

**Azure DevOps Services | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | TFS 2013 | Visual Studio 2015 | Team Explorer Everywhere** 


Using work items to track your work provides a host of benefits, including the ability to easily share information. You can capture most information within the work item Description or other rich-text formatted field. If you need to maintain the information in a different format, you can easily link to or attach a file.  

Here's a list of the most common ways in which teams share information and plans using work item tracking. 

> [!NOTE]    
> Some features are only available from the web portal or a Team Foundation client such as Visual Studio or the Eclipse plug-in, Team Explorer Everywhere (TEE). 


::: moniker range="azure-devops"  

<table >
<thead align="center">
<tr >
<th align="left" width="46%">Task/feature </th>
<th align="center" width="15%">Web portal</th>
<th align="center" width="15%">Visual Studio</th>
<th align="center" width="24%">TEE (Eclipse plug-in)</th>

</tr>
</thead>
<tbody align="center"  >


<tr>
<td align="left">[Email summary list with links to work item(s)](#email-summary-lists)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Print work item(s)](#print-items)</td>
<td>  </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">[Email link to a work item query](#copy-url) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">[Email query results list](#email-summary-lists) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">[Export list as CSV](#export) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
<td>  </td>
</tr>
</tbody>
</table>

::: moniker-end 



::: moniker range="<= azure-devops-2019"  

<table >
<thead align="center">
<tr >
<th align="left" width="46%">Task/feature </th>
<th align="center" width="15%">Web portal</th>
<th align="center" width="15%">Visual Studio</th>
<th align="center" width="24%">TEE (Eclipse plug-in)</th>

</tr>
</thead>
<tbody align="center"  >


<tr>
<td align="left">[Email summary list with links to work item(s)](#email-summary-lists)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
</tr>

<tr>
<td align="left">[Print work item(s)](#print-items)</td>
<td>  </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">[Email link to a work item query](#copy-url) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">[Email query results list](#email-summary-lists) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
</tr>


</tbody>
</table>

> [!NOTE]   
> For the email feature to work, your administrator for Azure DevOps Server or Team Foundation Server must [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).  

::: moniker-end 

In addition, if you have stakeholders who don't contribute code but want to contribute to the discussion and review progress, make sure you provide them [stakeholder access](../../organizations/security/get-started-stakeholder.md) so that they can view work items and dashboards.  


<a id="email-print-send-links"></a>

Some of the most common ways information is shared within a team or across teams is by emailing lists or links to work items.  

<a id="email-item"></a>

## Email a single item  

You can quickly email a summary of one or more work items. Summaries include the values assigned to these fields: work item ID, title, work item type, assigned to, state, and tags.  

> [!IMPORTANT]     
> If you use the built-in email feature, you can only send the email to individual address for a project member that is recognized by the system. Adding a team group or security group to the to line isn't supported. If you add an email account that the system doesn't recognize, you receive a message that one or more recipients of your email don't have permissions to read the mailed work items.  

# [Browser](#tab/browser)

::: moniker range=">= tfs-2018"  
<a id="team-services-email" />  
**From the web portal**, open the work item, choose the ![ ](../_img/icons/actions-icon.png) actions icon, and select the **Email work item** option. 

> [!div class="mx-imgBorder"]  
> ![Email work items](_img/email/email-work-item.png)   
::: moniker-end  

::: moniker range="tfs-2017"  

**From the web portal**, open the work item, choose the ![ ](../_img/icons/actions-icon.png) actions icon, and select the **Email work item** option. 

![Email work item](../queries/_img/share-plans-email-work-item-ts.png)    
::: moniker-end  

::: moniker range="<= tfs-2015"  
<a id="tfs-portal-email" />

**From the web portal**, open the work item and choose the ![ ](../_img/icons/mail_icon.png) mail icon.   

![Email work item from on-prem TFS](../queries/_img/share-plans-email-work-item-tfs.png)  

::: moniker-end  
::: moniker range="<= azure-devops-2019"  
> [!NOTE]  
> If you connect to an on-premises TFS, your TFS admin must have [configured an SMTP server](/azure/devops/server/admin/setup-customize-alerts) for the email feature to work.   
::: moniker-end  

# [Visual Studio 2015](#tab/visual-studio) 

<a id="team-explorer-email" />

From Visual Studio or Team Explorer, choose ![Send work item to Microsoft Outlook](../queries/_img/IC764665.png). This option requires that you configure Office Outlook on your client computer.

![Email work item from on-prem TFS](../queries/_img/share-plans-email-work-item-te.png)  
  
# [Team Explorer Everywhere](#tab/tee) 

<a id="tee-email" />

**From Eclipse**, open the work item and choose the ![mail icon](../_img/icons/mail_icon.png) mail icon.  

![Email work item from TEE](../queries/_img/share-plans-email-work-item-tfs.png)  
 
---

<a id="email-summary-lists"></a>

## Email summary lists with links to items  

Another way to share items is by emailing summary lists, such as a sprint summary plan or active bugs list. You can do this from a backlog or query results list.  

Depending on the option and client you choose, summary lists may or may not include a hyperlink to the work item ID.  

 
# [Browser](#tab/browser)

::: moniker range=">= tfs-2017"  

<a id="team-services-email-list" /> 
<a id="email-list-web-portal" >  </a> 

**To email items from the web portal**: Open a backlog or query and highlight the items from the list. Open the context menu for one of the selected items and select to email them.   
::: moniker-end  
::: moniker range=">= tfs-2018"

> [!div class="mx-imgBorder"]  
> ![Email work items](_img/email/bulk-email-backlog-items.png)   
::: moniker-end  

::: moniker range="tfs-2017"
![Email selected items from a list](../queries/_img/share-plans-email-selected-work-items-tfs-15.png) 
::: moniker-end  

::: moniker range=">= tfs-2018"
If you want to mail a list of all items in the backlog or query, choose the ![ ](../_img/icons/actions-icon.png) actions icon, and select the **Email** option. 

> [!div class="mx-imgBorder"]  
> ![Email backlog or query results list](_img/email/email-backlog.png)  

::: moniker-end  

::: moniker range="tfs-2017"
If you want to mail a list of all items in the backlog or query, simply choose the ![ ](../_img/icons/mail_icon.png) mail icon. 

![Email full backlog or query results list](../queries/_img/share-plans-email-summary-list-web-portal.png)  

::: moniker-end  

::: moniker range="<= tfs-2015"

**To email items from the web portal for TFS 2015**: Open a backlog or query and highlight the items from the list. Open the context menu for one of the selected items and select to email them.
    
![Email selected items from a list](../queries/_img/share-plans-email-summary-list-ts.png)  

If you want to mail a list of all items in the backlog or query, simply choose the ![mail icon](../_img/icons/mail_icon.png) mail icon. 
 
![Email full backlog or query results list](../queries/_img/share-plans-email-summary-list-web-portal.png)  

::: moniker-end  

# [Visual Studio 2015](#tab/visual-studio) 

<a id="team-explorer-email-list" />

**To email items from Visual Studio**: Open a query, highlight the items from the list, choose the context menu, and select **Send selection to Microsoft Outlook** from the menu. This option requires that you configure Office Outlook on your client computer.  

![Email selected items from Visual Studio query result list ](../queries/_img/share-plans-email-work-item-list.png)   
 

# [Team Explorer Everywhere](#tab/tee) 

<a id="tee-email-list" />

**From Eclipse**: Open a query, highlight the items from the list, and then choose the Copy selected items to the clipboard from the context menu. Paste the clipboard contents to your email application.    
 
![Email selected items from Eclipse query result list](../queries/_img/share-plans-email-work-item-list-eclipse.png)  
 
---

<a id="copy-formatted-list"></a>
## Copy formatted list of work items  

With this option, you can copy an HTML formatted table of selected items. You can then email this list using your choice of email client.  

1.  From the web portal, open a backlog or a list of query results.  

2.  Select the work items you want to copy.   

    ![Copy as HTML selected work items](../queries/_img/IC777601.png)  

    The formatted table contains a link to each work item included in your selected results list.  

3.  Paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the project or area node for those work items.   

<a id="print-items"></a>

## Print items  

To print the details of a work item, open a query in Visual Studio that contains the work item(s) you want to print, and select or highlight those items that you want to print. Then, choose the print option from the context menu.   

![Print work items from Team Explorer](../queries/_img/share-plans-print-work-item-details.png)   


<a id="copy-url">  </a>

## Copy the URL to a single work item  

> [!NOTE]   
> All URLs you copy, regardless of the client you use to copy them, opens the work item in the web portal. 

# [Browser](#tab/browser)

::: moniker range=">= tfs-2017"  

<a id="team-services-copy-url" />

**From the web portal**, simply copy the URL from the web browser address or hover over the title and then click the ![Copy to clipboard icon](../backlogs/_img/icon-copy-to-clipboard.png) copy-to-clipboard icon.

<img src="../backlogs/_img/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" style="border: 1px solid #C3C3C3;" />  

::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015" 

<a id="tfs-portal-copy-url" />

**From the web portal for an on-premises TFS**, open the work item and then from the context menu for the browser, choose the copy link option. 

![Copy hyperlink for a work item from web portal for TFS item](../queries/_img/share-plans-copy-URL-wi-tfs.png) 

::: moniker-end  


# [Visual Studio 2015](#tab/visual-studio)

<a id="team-explorer-copy-url" />

**From Visual Studio**, right-click the work item tab to copy the URL. The URL opens the work item in the web portal. 

![Copy full path hyperlink for a work item from Visual Studio](../backlogs/_img/add-work-items-copy-url-for-a-work-item.png)   

# [Team Explorer Everywhere](#tab/tee) 

<a id="tee-copy-url" />

**From Eclipse**, open a query that contains the work item, and then open the context menu to Copy the URL for the selected work item. 

![Copy full path hyperlink for a work item from Eclipse](../queries/_img/share-plans-copy-URL-wi-eclipse.png)   

---

<a id="export" /> 

::: moniker range="azure-devops" 

## Export list as CSV 

From any query, you can export a list of work items as a comma-delimited list. Simply [open the query](../queries/view-run-query.md), choose the ![  ](../../_img/icons/actions-icon.png) actions icon, and choose <strong>Export to CSV</strong>.

> [!div class="mx-imgBorder"]  
> ![Export a query as CSV](_img/email/export.png)   


::: moniker-end  

## Related articles  

- [Use templates to add and update work items](../backlogs/work-item-template.md)  
- [Share information in work items and social tools](../queries/share-plans.md) 
- [Define the hyperlink for a work item](work-item-url-hyperlink.md)  
- [Configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts)

 
