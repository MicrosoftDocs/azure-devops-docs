---
title: Copy work items | Team Services & TFS
description: Copy or clone work items, copy the URL link, or copy a list of work items to the clipboard-Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 743A3914-CD86-403D-AA4F-42CDBBB69F95  
ms.manager: douge
ms.author: kaelli
ms.date: 03/29/2017  
---

# Copy or clone work items  

**Team Services | TFS 2017 | TFS 2015**    

There are two types of copy functions you can use. The first is to duplicate a single work item, referred to as copy or clone. In addition, you can choose to change the team project or work item type when copying/cloning a work item. 

The second copy function is to copy a multi-selected list of work items to the clipboard, referred to as copy as HTML or copy to clipboard. 


[!INCLUDE [temp](../_shared/image-differences.md)] 

<a id="copy-clone"></a>
## Copy or clone a work item   
Clone a work item when you want to create another instance of it. This action opens a form with all fields filled out. No  history or attachments are copied. 

Copy a work item when you want to create another instance of it and optionally change its work item type. This action opens a form with all fields filled out except for the Title. A related link to the original work item is created. Also any parent link is copied over. No  history or attachments are copied over from the original work item. 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#clone">Copy or clone a single work item</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clone-tfs-2013">TFS 2013</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clone-tfs-2015">TFS 2015</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clone-tfs-2017">TFS 2017</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clone-team-services">Team Services</a></li>
</ul>

<div id="clone" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">


<div id="clone-tfs-2013" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">



<ol>
<li><p>From the web portal, open the work item you want to copy or clone, and click the copy/clone icon. The copied work item is automatically linked to the original work item through a Related link type.</p>

<img src="_img/IC712055.png" alt="TFS 2013, web portal, user story work item form, click copy-clone icon" style="border: 1px solid #CCCCCC;" /> 

</li>
<li><p>Choose the team project (if copying to another project) and work item type if different from the copied work item. Optionally change the Title and provide additional details. The copied work item is automatically linked to the original work item through a Related link type.</p>
</li>
</ol>

 
</div>


<div id="clone-tfs-2015" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">



<ol>
<li><p>From the web portal, open the work item you want to copy or clone, and click the copy/clone icon. The copied work item is automatically linked to the original work item through a Related link type.</p>
</li>

<img src="_img/copy-wi-copy-clone-2015.png" alt="TFS 2015, web portal, user story work item form, click copy-clone icon" style="border: 1px solid #CCCCCC;" /> 
</li>
<li><p>Choose the team project (if copying to another project) and work item type if different from the copied work item. Optionally change the Title and provide additional details. The copied work item is automatically linked to the original work item through a Related link type.</p>
</li>
</li>
</ol>

 
</div>



<div id="clone-tfs-2017" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li><p>From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and click **Create copy of work item**.  </p>

<img src="_img/copy-wi-copy-clone-2017.png" alt="TFS 2017, web portal, user story work item form, open context menu, click Create copy of work item " style="border: 1px solid #CCCCCC;" /> 

</li>
<li><p>Choose the team project and work item type if different from the copied work item.  Optionally change the Title and provide additional details. To link the copied work item as a Related link type and maintain all other links (related links and external links) included in the copied work item, check the **Include existing links** checkbox.  </p>

<img src="_img/copy-wi-copy-clone-2017-dialogue.png" alt="TFS 2017, web portal, user story work item form, open context menu, click Copy work item " style="border: 1px solid #CCCCCC;" /> 

</li>
</ol>

</div>

<div id="clone-team-services" class="tab-pane fade in active">  

<ol>
<li><p>From the web portal, open the work item you want to copy or clone, open the &hellip; context menu, and click **Create copy of work item**.  </p>
<img src="_img/copy-wi-copy-clone-ts.png" alt="Team Services, web portal, user story work item form, open context menu, click Create copy of work item " style="border: 1px solid #CCCCCC;" /> 

</li>
<li><p>Choose the team project and work item type if different from the copied work item.  Optionally change the Title and provide additional details. To link the copied work item as a Related link type and maintain all other links (related links and external links) included in the copied work item, check the **Include existing links** checkbox.  </p>

<img src="_img/copy-wi-copy-clone-ts-dialogue.png" alt="Team Services, web portal, user story work item form, open context menu, click Copy work item " style="border: 1px solid #CCCCCC;" /> 

</li>
</ol>

</div>


</div>
</div>


## Change the work item type  

>[!NOTE]  
>**Feature availability:**&#160;&#160;The Change the work item type is only available from Team Services.  

If you have a large number of work items whose type you want to change, use [Change work item type](#change-wit). If Change work item type isn't available to you, you can export a set of work items using Excel, copy them to a new Excel list, and re-import them by specifying a different work item type. See [Bulk add or modify work items with Excel](../office/bulk-add-modify-work-items-excel.md). 


<a id="html"></a>
## Copy a list of work items  

With this option, you can copy an HTML formatted table of selected items from either a backlog page or query results list. You can then email this list using your choice of email client, or paste into a Word document, Excel spreadsheet, or other application. 
 
>[!NOTE]  
>The data copied with **Copy as HTML** is the same as that copied when you select **Email selected work items**. If you don't have an SMTP server configured, you can work around this by using **Copy as HTML**. For on-premises TFS, all email actions require an [SMTP server to be configured](../../setup-admin/tfs/admin/setup-customize-alerts.md). 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#clipboard">Copy multiple work items to the clipboard</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clipboard-tfs-2015">TFS 2015</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clipboard-tfs-2017">TFS 2017</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#clipboard-team-services">Team Services</a></li>
</ul>

<div id="clipboard" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="clipboard-tfs-2015" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li><p>From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.</p>
</li>

<li><p>Open the ![context icon](../_img/icons/context_menu.png) context menu of one of the selected work items, and then choose <b>Copy as HTML</b>.</p> 
<p>Here we multi-select from the backlog page.</p>
<img src="_img/copy-wi-copy-as-html-2015.png" alt="TFS 2015, Backlog page, multi-select items, open context menu, click Copy as HTML menu option" style="border: 1px solid #CCCCCC;" /> 
</li>
</ol>

 
</div>



<div id="clipboard-tfs-2017" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li><p>From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.</p>
</li>

<li><p>Open the &hellip; context menu of one of the selected work items, and then choose <b>Copy as HTML</b>.</p> 

<p>Here we multi-select from the backlog page.</p>

<img src="_img/bulk-modify-copy-as-html.png" alt="TFS 2017, Backlog page, multi-select items, open context menu, click Copy as HTML menu option" style="border: 1px solid #CCCCCC;" /> 

 
</li>
</ol>

</div>

<div id="clipboard-team-services" class="tab-pane fade in active">  


<ol>
<li><p>From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to copy to the clipboard.</p>
</li>

<li><p>Open the &hellip; context menu of one of the selected work items, and then choose <b>Copy to clipboard</b> or <b>Copy as HTML</b>.</p> 
<p>Here we multi-select from the product backlog and choose <b>Copy to clipboard</b>.</p>
<img src="_img/copy-wi-copy-to-clipboard-ts-1.png" alt="Team Services, backlog page, multi-select items, open context menu, Copy to clipboard" style="border: 1px solid #CCCCCC;" /> 
</li>
</ol>

</div>

</div>
</div>


<ol>
<li value="3">
<p>Paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the team project or area node for those work items.</p>

<p>The formatted table contains a link to each work item included in your selected results list. A link to a query that will open only those work items selected is also provided.</p>
<img src="_img/bulk-modify-copy-as-html-table-results.png" alt=" Copy as HTML paste results" style="border: 1px solid #CCCCCC;" />
</li>
</ol>


<a id="copy-url">  </a>
## Copy the URL
- From the web portal for Team Services and TFS 2017, simply copy the URL from the web browser address or hover over the title and then click the ![Copy to clipboard icon](_img/icon-copy-to-clipboard.png) copy-to-clipboard icon.  

	<img src="_img/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" style="border: 1px solid #CCCCCC;" />
 
- From the web portal for TFS 2015, right click the link ID to open the browser copy link option.
  
	<img src="_img/copy-wi-url-2015.png" alt="Copy hyperlink for a work item from web portal" style="border: 1px solid #CCCCCC;" />  

- In Visual Studio, right-click the work item tab to copy the URL. The URL opens the work item in the web portal.  

	![Copy full path hyperlink for a work item from Visual Studio](_img/add-work-items-copy-url-for-a-work-item.png) 

##Related notes

To add fields or customize a work item form, see [Customize your work tracking experience](../customize/customize-work.md). The method you use depends on the process model that supports your team project.  

- [Create your backlog](create-your-backlog.md)
- [Add and update work items](add-work-items.md)
- [Manage bugs](manage-bugs.md)
- [Use Excel to edit multiple fields](../office/bulk-add-modify-work-items-excel.md)
- [Pre-populate fields using work item templates](../productivity/work-item-template.md)
- [Change the backlog priority](create-your-backlog.md#move-items-priority-order)
- [Organize your backlog](organize-backlog.md)
