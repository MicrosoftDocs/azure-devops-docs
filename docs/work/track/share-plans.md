---
title: Share work plans | Team Services & TFS
description: Email links, Copy URL, and share information about work items, queries, and more when connected to Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) 
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 5edac6b9-2642-419a-8745-9e91ee40993b
ms.manager: douge
ms.author: kaelli
ms.date: 05/10/2017  
---

# Share work plans and progress 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013 | Visual Studio 2015 | Team Explorer Everywhere </b>  

Using work items to track your work provides a host of benefits, including the ability to easily share information. You can capture most information within the work item Description or other rich-text formatted field. If you need to maintain the information in a different format, you can easily link to or attach a file.  

Here's a list of the most common ways in which teams share information and plans using work item tracking. 

>[!NOTE]  
><b>Feature availability: </b>Some features are only available from the web portal or a Team Foundation client such as Visual Studio or the Eclipse plug-in, Team Explorer Everywhere (TEE). 


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
<td align="left">[Rich text fields](#rich-text) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>

</tr>


<tr>
<td align="left">[Link objects](#link-items), [attach files](#attachments)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>

</tr>

<tr>
<td align="left">[Storyboard and link to storyboards](#storyboard)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>![checkmark](../_img/icons/checkmark.png)</td>

</tr>


<tr>
<td align="left">[Release summary (Team Services)](#release-summary) </td>
<td>![checkmark](../_img/icons/checkmark.png)</td>
<td>  </td>
<td>  </td>

</tr>

</tbody>
</table>

In addition, if you have stakeholders who don't contribute code but want to contribute to the discussion and review progress, make sure you provide them [stakeholder access](../connect/work-as-a-stakeholder.md) so that they can view work items and dashboards.  

<a id="email-print-send-links"></a>
## Email, print, or send links to work item(s)  

Some of the most common ways information is shared within a team or across teams is by emailing lists or links to work items.  

<a id="email-item"></a>
### Email a single item  

You can quickly email a summary of one or more work items. Summaries include the values assigned to these fields: work item ID, title, work item type, assigned to, state, and tags.  

>[!NOTE]  
>You can only send the email to addresses that are recognized by the system, that is accounts of team members or stakeholders. If you add an email account that the system doesn't recognize, you receive a message that one or more recipients of your email don't  permissions to read the mailed work items.  


<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#attach-files">Email a single item  </li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tee-email">Eclipse, TEE</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-explorer-email">Visual Studio</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tfs-portal-email">TFS 2015, TFS 2013</a></li>


<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-services-email">Team Services, TFS 2017</a></li>
</ul>
 
<div id="email" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services-email" class="tab-pane fade in active">  
<p>**From the web portal**, open the ![Actions icon](../_img/icons/actions-icon.png) Actions menu and choose the email option.  </p>   
![Email work item from Team Services](_img/share-plans-email-work-item-ts.png)    

</div>

<div id="tfs-portal-email" class="tab-pane fade">
<p>**From the web portal**, open the work item and click the ![mail icon](../_img/icons/mail_icon.png) mail icon. </p>  

![Email work item from on-prem TFS](_img/share-plans-email-work-item-tfs.png)  

<blockquote style="font-size: 13px"><b>Note:</b> If you connect to an on-premises TFS, your TFS admin must have [configured an SMTP server](../../setup-admin/tfs/admin/setup-customize-alerts.md) for the email feature to work.</blockquote>   

</div>


<div id="team-explorer-email" class="tab-pane fade">
<p>**From Visual Studio or Team Explorer**, choose ![Send work item to Microsoft Outlook](_img/IC764665.png). This option requires that you configure Office Outlook on your client computer.  </p> 
![Email work item from on-prem TFS](_img/share-plans-email-work-item-te.png)  
  
</div>

<div id="tee-email" class="tab-pane fade">
<p>**From Eclipse**, open the work item and click the ![mail icon](../_img/icons/mail_icon.png) mail icon.  </p>  

![Email work item from TEE](_img/share-plans-email-work-item-tfs.png)  


</div>

</div>
</div>  

<a id="email-summary-lists"></a>
### Email summary lists with links to items  

Another way to share items is by emailing summary lists, such as a sprint summary plan or active bugs list. You can do this from a backlog or query results list.  

Depending on the option and client you choose, summary lists may or may not include a hyperlink to the work item ID.  


<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#attach-files">Email a list of items  </li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tee-email-list">Eclipse, TEE</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-explorer-email-list">Visual Studio</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tfs-portal-email-list">TFS 2015, TFS 2013</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-services-email-list">Team Services, TFS 2017</a></li>
</ul>
 
<div id="email-list" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services-email-list" class="tab-pane fade in active"> 
<a id="email-list-web-portal" >  </a> 
<p>**To email items from the web portal**: Open a backlog or query and highlight the items from the list. Open the context menu for one of the selected items and select to email them.</p>   
   
![Email selected items from a list](_img/share-plans-email-selected-work-items-tfs-15.png) 

<p>If you want to mail a list of all items in the backlog or query, simply click the ![mail icon](../_img/icons/mail_icon.png) mail icon. </p>  

![Email full backlog or query results list](_img/share-plans-email-summary-list-web-portal.png)  

</div>

<div id="tfs-portal-email-list" class="tab-pane fade">
<blockquote style="font-size: 13px"><b>Note:</b> Your TFS admin must have [configured an SMTP server](../../setup-admin/tfs/admin/setup-customize-alerts.md) for the email feature to work.</blockquote>   

<p>**To email items from the web portal for TFS 2015**: Open a backlog or query and highlight the items from the list. Open the context menu for one of the selected items and select to email them.</p>     
![Email selected items from a list](_img/share-plans-email-summary-list-ts.png) 

<p>If you want to mail a list of all items in the backlog or query, simply click the ![mail icon](../_img/icons/mail_icon.png) mail icon. </p>  

![Email full backlog or query results list](_img/share-plans-email-summary-list-web-portal.png)  
 

</div>


<div id="team-explorer-email-list" class="tab-pane fade">
<p>**To email items from Visual Studio**: Open a query, highlight the items from the list, and then choose the Send selection to Microsoft Outlook from the context menu. This option requires that you configure Office Outlook on your client computer.  </p> 
![Email selected items from Visual Studio query result list ](_img/share-plans-email-work-item-list.png)   
 
</div>

<div id="tee-email-list" class="tab-pane fade">
<p>**From Eclipse**: Open a query, highlight the items from the list, and then choose the Copy selected items to the clipboard from the context menu. Paste the clipboard contents to your email application.   </p>  
 
![Email selected items from Eclipse query result list](_img/share-plans-email-work-item-list-eclipse.png)  
 

</div>

</div>
</div> 
<a id="copy-formatted-list"></a>
### Copy formatted list of work items  

With this option, you can copy an HTML formatted table of selected items. You can then email this list using your choice of email client.  

1.  From the web portal, open a backlog or a list of query results.  

2.  Select the work items you want to copy.   

    ![Copy as HTML selected work items](_img/IC777601.png)  

    The formatted table contains a link to each work item included in your selected results list.  

3.  Paste the contents of the clipboard into your email client or other application. To open a linked work item, requires users to have read access to the team project or area node for those work items.   

<a id="print-items"></a>
### Print items  

To print the details of a work item, open a query in Visual Studio that contains the work item(s) you want to print, and select or highlight those items that you want to print. Then, choose the print option from the context menu.   

![Print work items from Team Explorer](_img/share-plans-print-work-item-details.png)   


<a id="copy-url">  </a>
## Copy the URL to a single work item  

<blockquote style="font-size: 13px"><b>Note:</b> All URLs you copy, regardless of the client you use to copy them, opens the work item in the web portal. </blockquote>  


<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#attach-files">Copy the URL of a work item </li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tee-copy-url">Eclipse, TEE</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-explorer-copy-url">Visual Studio</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tfs-portal-copy-url">TFS 2015, TFS 2013</a></li>


<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-services-copy-url">Team Services, TFS 2017</a></li>
</ul>
 
<div id="rich-text" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services-copy-url" class="tab-pane fade in active">
<p>**From the web portal**, simply copy the URL from the web browser address or hover over the title and then click the ![Copy to clipboard icon](../backlogs/_img/icon-copy-to-clipboard.png) copy-to-clipboard icon.</p>
<img src="../backlogs/_img/add-work-item-copy-URL.png" alt="Copy hyperlink for a work item from web portal" style="border: 1px solid #CCCCCC;" />  

</div>

<div id="tfs-portal-copy-url" class="tab-pane fade">
<p> **From the web portal for an on-premises TFS**, open the work item and then from the context menu for the browser, choose the copy link option. </p> 
![Copy hyperlink for a work item from web portal for TFS item](_img/share-plans-copy-URL-wi-tfs.png) 
</div>


<div id="team-explorer-copy-url" class="tab-pane fade">
<p>**From Visual Studio**, right-click the work item tab to copy the URL. The URL opens the work item in the web portal. </p> 
![Copy full path hyperlink for a work item from Visual Studio](../backlogs/_img/add-work-items-copy-url-for-a-work-item.png)   
</div>

<div id="tee-copy-url" class="tab-pane fade">
<p>**From Eclipse**, open a query that contains the work item, and then open the context menu to Copy the URL for the selected work item. </p>
![Copy full path hyperlink for a work item from Eclipse](_img/share-plans-copy-URL-wi-eclipse.png)   

</div>

</div>
</div>


 


<a id="rich-text"></a>

## Rich text fields  

To convey detailed information, you can format text and insert images inline within the description field or any HTML field type.   

The rich text formatting toolbar appears above each text box that can be formatted. It only becomes active when you click within the text box. You can format text in HTML data fields, such as the Description, Accepted Criteria, and History. Available fields depend on the work item type, if you've [customized the process](../process/customize-process.md), and the platform you work on.   

The specific set of formatting features differs depending on the client you use. In all clients, you can bold, italicize, and underline text. You can also add and remove hyperlinks, format text as ordered or unordered lists, and add images. 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#attach-files">Rich text fields</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-explorer-rich-text">Team Explorer</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tfs-portal-rich-text">TFS 2015, TFS 2013, TEE</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-services-rich-text">Team Services, TFS 2017</a></li>
</ul>
 
<div id="rich-text" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services-rich-text" class="tab-pane fade in active">
<p>**Rich text formatting toolbar - Team Services &  TFS 2017 web portal** </p>
<img src="_img/rich-text-ui-team-services.png" alt="Rich text tool bar - Team Services" style="border: 1px solid #CCCCCC;" />
<br/>
<p>In Team Services, you can use the ![Remove format](../_img/icons/remove-formatting-icon.png) icon or CTRL+Spacebar to remove formatting from highlighted text.</p>

<blockquote style="font-size: 13px"><b>Note: </b>The History field is no longer a rich-text field. To annotate the work item history, add to the Description or Discussion fields. </blockquote> 

</div>

<div id="tfs-portal-rich-text" class="tab-pane fade">
<p>**Rich text formatting toolbar - TFS web portal and Team Explorer Everywhere** </p> 
<img src="_img/rich-text-ui-web-portal.png" alt="Rich text tool bar - web portal" style="border: 1px solid #CCCCCC;" />
</div>


<div id="team-explorer-rich-text" class="tab-pane fade">
<p>**Rich text formatting toolbar - Visual Studio**  </p>
<img src="_img/rich-text-ui-te.png" alt="Rich text tool bar - Team Explorer" style="border: 1px solid #CCCCCC;" />
<p>From Team Explorer you can choose the font, font size, and text and background colors.</p>

<p>If inline images aren't displaying correctly, see [Resolve images that don't display in Team Explorer](#images-missing-te).</p>

</div>

</div>
</div>


<p>You can also use the following shortcut keys to format your text:</p>
- **Bold**: Ctrl+B  
- *Italic*: Ctrl+I  
- <u>Underscore</u>: Ctrl+U 
<br/>   
<p>You can copy and paste HTML text or an image from another application directly into the text box using Ctrl+C and Ctrl+V shortcuts.</p>



<a id="link-items"></a>
## Link items

To support traceability and add context to work items, you can link items to other work items or objects. From a links control tab, you can choose from various link types to based on the objects you want to link to. 

Again, your link options will differ depending on the client you use. For specific guidance, see these resources:

- [Add link to work items](../backlogs/add-link.md)  
- [Link items to support traceability and manage dependencies](link-work-items-support-traceability.md)  


<a id="attachments"></a>

## Attach files

<p>To help track a work item, use the ![Attachment tab icon](../backlogs/_img/icon-attachments-tab-wi.png) or **Attachments** tab to attach a file with supplemental information. </p> 
<p>For example, you can attach a screen image that illustrates a problem, a line of code in a text file, a log, an e-mail thread, or a product feature's specification.</p>

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#attach-files">Attachments tab or page</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-explorer">Team Explorer</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tfs-portal">TFS 2015, TFS 2013, TEE</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-services">Team Services, TFS 2017 </a></li>
</ul>
 
<div id="attach-files-example" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services" class="tab-pane fade in active">
<p>**Attachment control toolbar - Team Services &  TFS 2017 web portal**</p>
<img src="_img/share-plans-attachment-tab-vsts.png" alt="Attachment controls, web portal Team Services" style="border: 1px solid #CCCCCC;" />  

<blockquote style="font-size: 13px">
![tip icon](../_img/icons/tip-icon.png)<br/>
From Team Services, you can drag and drop files into the attachment area. From the browse menu, you can multi-select several files and attach within a single action. Also, from Team Services and TFS 2017.1 and later versions, you can add attachments to your pull request comments. You can also add attachments in pull request comments by drag-and-drop or by browsing. For details, see [Syntax support for Markdown files, widgets, and pull request comments, Attachments](../../reference/markdown-guidance.md#attach). </blockquote> 

<p>You can edit, open, save, or delete an attachment by clicking an attachment and opening it's ![actions icon](../_img/icons/actions-icon.png) actions menu. </p>

<img src="_img/share-plans-attachment-menu-options.png" alt="Attachment menu options,  Team Services" style="border: 1px solid #CCCCCC;" />

<blockquote>
![note icon](../_img/icons/note-icon.png)<br/>
For Team Services, you can add up to 100 attachments to a work item. Attempts to add more result in an error message upon saving the work item.    
</blockquote> 

</div>

<div id="tfs-portal" class="tab-pane fade">

<p>**Attachment control toolbar - TFS 2015 web portal and Team Explorer Everywhere** </p>

<img src="_img/share-plans-attachments-tfs-web-portal-tools.png" alt="Attachment controls, web portal (on-premises TFS), and Eclipse" style="border: 1px solid #CCCCCC;" />  

<p>Click the ![plus icon](../_img/icons/Action_Add.png) plus icon to add an attachment. Click an item and then click ![open icon](../_img/icons/open-icon.png) to open the attachment or ![download icon](../_img/icons/download-icon.png) to save a copy.  </p>  

</div>


<div id="team-explorer" class="tab-pane fade">

<p>**Attachment control toolbar - Visual Studio Team Explorer** </p>
<img src="_img/share-plans-attachment-controls-tfs.png" alt="Attachment controls, web portal (on-premises TFS), Visual Studio and Eclipse" style="border: 1px solid #CCCCCC;" />

<blockquote style="font-size: 13px">
![tip icon](../_img/icons/tip-icon.png)<br/>
From Visual Studio, you can drag and drop files into the attachment area. 
</blockquote> 

<p>Click the ![plus icon](../_img/icons/Action_Add.png) plus icon to add an attachment.</p> 
<p>Click one or more items and then right-click to open the menu options to download or delete several attachments.</p> 
<img src="_img/share-plans-attachment-tab-team-explorer.png" alt="Attachment menu options, Team Explorer" style="border: 1px solid #CCCCCC;" />

</div>

</div>
</div>


By default, the size of work item attachments is limited to 4 MB. For on-premises deployments, you can use the TFS web service to [increase the size of files you attach up to 2GB](https://msdn.microsoft.com/library/ms400780.aspx).



<a id="storyboard"></a>
## Storyboard 
Storyboarding your ideas and goals increases visual understanding. With [PowerPoint Storyboarding](../office/storyboard-your-ideas-using-powerpoint.md) you can bring your ideas to life with storyboard shapes, text, animation, and all the other features that PowerPoint provides.  

>[!NOTE]  
><b>Feature availability: </b> Storyboarding with PowerPoint requires [Office PowerPoint 2007 or later](http://www.microsoftstore.com/store/msstore/pd/PowerPoint-2010/productID.216564300) and the TFS Storyboarding add-in. You install the TFS Storyboarding add-in for PowerPoint by installing one of the latest editions of [Visual Studio (2013 or later)](https://www.visualstudio.com/downloads/download-visual-studio-vs) or [Team Foundation Server Standalone Office Integration 2015 (free)](https://www.visualstudio.com/downloads/#team-foundation-server-office-integration-2015-update-3-1). 


By linking your storyboard to a work item, you provide your team access to the shared file where they can add their comments. From the ![Links tab icon](../backlogs/_img/icon-links-tab-wi.png),  **Links**, or a **Storyboards** tab, you can link storyboards that you created using PowerPoint Storyboarding or other application. When you make changes to a linked storyboard, the work item continues to link to the file with the latest changes.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#attach-files">Start storyboarding</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-explorer-storyboard">Team Explorer</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#tfs-portal-storyboard">TFS 2015, TFS 2013, TEE</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#team-services-storyboard">Team Services, TFS 2017 </a></li>
</ul>
 
<div id="attach-files-example" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="team-services-storyboard" class="tab-pane fade in active">
<p>**Start storyboarding - Team Services & TFS 2017 web portal**</p>
<p>You can open Storyboarding with PowerPoint from the ![actions icon](../_img/icons/actions-icon.png) actions menu within a work item form. </p>
<img src="_img/share-plans-storyboard-vsts-menu.png" alt="Start storyboarding within work item web form, web portal Team Services" style="border: 1px solid #CCCCCC;" />  

<p>To link to an existing storyboard, click the ![Links page icon](../_img/icons/icon-links-tab-wi.png) Links tab and add a storyboard link.  </p>
</div>

<div id="tfs-portal-storyboard" class="tab-pane fade">
<p>**Storyboards tab control - TFS 2015 web portal and Team Explorer Everywhere** </p>
<p>From the **Storyboards** tab, click Start Storyboarding to open Storyboarding with PowerPoint. Or, you can link to an existing storyboard.</p>  

<img src="_img/share-plans-storyboard-tfs-web-tab.png" alt="Storyboard links control" style="border: 1px solid #CCCCCC;" />  

</div>


<div id="team-explorer-storyboard" class="tab-pane fade">

<p>**Storyboards tab control - Visual Studio Team Explorer** </p>
<img src="_img/share-plans-storyboard-vs-tab.png" alt="Storyboards tab, Visual Studio Team Explorer and Eclipse" style="border: 1px solid #CCCCCC;" />
To open PowerPoint with storyboarding, see [Storyboard your ideas using PowerPoint](../office/storyboard-your-ideas-using-powerpoint.md).  
</div>

</div>
</div>






<a id="release-summary"></a>
## Email release summary

From the Release hub, [choose a specific release](../../build/actions/view-manage-releases.md) and click the ![email](../_img/icons/email-icon.png) Send Email icon to share the results of that release.  


>[!NOTE]  
><b>Feature availability: </b>This feature is currently available only from Team Services.
 

![Release summary, send email](_img/share-plans-email-release-definition.png)

In the To box, start typing the name of the team member you want to send the summary mail to. 

![Email of a release summary](_img/share-plans-email-release-definition-send.png)

Optionally, enter a note about the release or un-check any section you don't want included. The default is to include all details, environmental summary, issues, and work items associated with the release.   


##Related notes  

As you can see, there are many ways to share information using work items alone. See these additional tools and features to support planning, tracking, and sharing information with your team.   
<div style="float:left;width:180px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Plan</p>
- [Create your backlog](../backlogs/create-your-backlog.md)   
- [Sprint planning](../scrum/sprint-planning.md)   
- [Remove/delete work items](../backlogs/remove-delete-work-items.md)   
</div>

<div style="float:left;width:220px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Track</p>
- [Define a query](using-queries.md)   
- [Add a link to work items](../backlogs/add-link.md)   
- [Follow a work item or pull request](../../collaborate/follow-work-items.md)   
- [Tag work items](add-tags-to-work-items.md)   
- [History & audit](history-and-auditing.md)   
- [Link to Git objects](../backlogs/connect-work-items-to-git-dev-ops.md)   
- [Dashboards](../../report/dashboards.md)      
</div>

<div style="float:left;width:120px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Office clients</p>
- [Excel](../office/bulk-add-modify-work-items-excel.md)    
- [Project ](https://msdn.microsoft.com/library/ms181675.aspx)     
- [Storyboarding](../office/storyboard-your-ideas-using-powerpoint.md)        
</div>

<div style="float:left;width:170px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Other</p>
- [Work from the account hub](../../connect/account-home-pages.md)  
- [Productivity tips](../productivity/productivity-tips.md)     
- [Markdown widget](../../report/widget-catalog.md#markdown-widget)   
- [Practices that scale](../scale/practices-that-scale.md)       
</div>


<div style="clear:left;font-size:100%">
</div>

 
### Work item hyperlink format  
How do you define a hyperlink that opens a work item? Specify a URL that conforms to the following syntax:

**Team Services**:

   <b>https://</b>*AccountName.visualstudio.com/ProjectName/*<b>_workitems?id=</b>*WorkItemNumber*<b>&_a=edit</b>

   Example: `https://fabrikam/DefaultCollection/Phone%20Saver/_workitems?id=133&_a=edit`

**For TFS 2017, TFS 2015**:

   <b>http://</b>*ServerName:Port*/<b>tfs/</b>*CollectionName/TeamProjectName*/<b>_workitems?id=</b>*WorkItemNumber*<b>&_a=edit</b>

   Example: `http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems/133&_a=edit`

**For TFS 2013.2**:

   <b>http://</b>*ServerName:Port*/<b>tfs/</b>*CollectionName/TeamProjectName*/<b>_workitems/edit/</b>*WorkItemNumber*

   Example: `http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems/edit/133`

**For on-premises TFS 2013.1 and earlier versions**:
   <b>http://</b>*ServerName:Port*/<b>tfs/</b>*CollectionName/TeamProjectName*/<b>_workitems#_a=edit&id=</b>*WorkItemNumber*  

   Example: `http://fabrikamprime:8080/tfs/DefaultCollection/Phone%20Saver/_workitems#_a=edit&id=133`


**where**:

-   *AccountName* specifies the name of the Team Services account  
-   *ServerName* specifies the name of the TFS application tier server   
-   *Port* specifies the port, default=8080
-   *CollectionName* specifies the name of the team project collection.
-   *TeamProjectName* specifies the team project name
-   *WorkItemNumber* specifies the ID of the bug, task, or other work item.

### SharePoint project portal (on-premises TFS)  

If you work from an on-premises TFS, you can use a SharePoint site to share and access documents from your team project. Your team can use the SharePoint site, also referred to as the project portal, to share information in the following ways:  
- Share data contained in reports or dashboards  
- Share team progress using predefined or customized SharePoint dashboards  
- Share documents, files, images  
- Share team knowledge and processes using the SharePoint wiki.    

To learn more, see [Share information using the project portal](../../report/sharepoint-dashboards/share-information-using-the-project-portal.md).  

[!INCLUDE [temp](../../_shared/images-not-appearing-vs.md)] 

### Marketplace extensions  

You may find additional ways to share information and collaborate as a team by adding a [Marketplace extension](https://marketplace.visualstudio.com/?targetId=754f8691-19ce-47a2-a1e8-ebeab1e67955#VSTS). 


