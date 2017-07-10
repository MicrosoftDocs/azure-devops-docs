---
title: Add links to several work items | Team Services & TFS
description: Link several work items to other work items or to a new git branch in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 7130A14B-C760-4622-B97A-8DA27A1B3D02  
ms.manager: douge
ms.author: kaelli
ms.date: 03/29/2017  
---


# Add link to work items  

**Team Services | TFS 2017 | TFS 2015**    

You can add a link to a work item from within the work item form or from a backlog or query results list. From a backlog or query results list, you can [select multiple work items](bulk-modify-work-items.md#multi-select) and then link them to a new or existing work item. In general, use the bulk edit to update several work items to link to the same work item, either new or existing. 

For a list of all link types and supported link relationships, see [Link work items to support traceability](../track/link-work-items-support-traceability.md). 

[!INCLUDE [temp](../_shared/image-differences.md)]  

  
<a id="link"> </a>  
## Link several items to an existing or new work item 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#link">Link multiple work items</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#link-tfs-2015">TFS 2015</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#link-tfs-2017">TFS 2017</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#link-team-services">Team Services</a></li>
</ul>

<div id="link" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">

<div id="link-tfs-2015" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">


<ol>
<li><p>From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to add a link to.</p>
</li>

<li><p>Open the context menu of one of the selected work items, and then choose <b>Link selected item(s) to a new work item&hellip;</b> or <b>Link to an existing item&hellip;</b>.</p> 
<p>Here we multi-select from the Queries page and choose <b>Link selected item(s) to a new work item&hellip;</b>.</p>
<img src="_img/add-link-query-new-work-item-2015.png" alt="TFS 2015, Query results page, multi-select items, open context menu, click Link to a new work item" style="border: 1px solid #CCCCCC;" /> 
</li>
</ol>
 
</div>


<div id="link-tfs-2017" class="tab-pane fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li><p>From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to add a link to.</p>
</li>

<li><p>Open the &hellip; context menu of one of the selected work items, and then choose <b>Link to a new item&hellip;</b> or <b>Link to an existing item&hellip;</b>.</p> 
<p>Here we multi-select from the Queries page and choose <b>Link to a new item&hellip;</b>.</p>
<img src="_img/add-link-query-new-work-item-2016.png" alt="TFS 2017, Query results page, multi-select items, open context menu, click Link to a new work item" style="border: 1px solid #CCCCCC;" /> 
</li>
</ol>

 

</div>

<div id="link-team-services" class="tab-pane fade in active">  


<ol>
<li><p>From the web portal, open a backlog or query results page, and [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to add a link to.</p>
</li>

<li><p>Open the &hellip; context menu of one of the selected work items, choose **Add link**, and then choose <b>Existing item&hellip;</b> or <b>New item&hellip;</b>.</p> 
<p>Here we multi-select from the product backlog and choose <b>Existing item&hellip;</b>.</p>
<img src="_img/add-link-existing-backlog-ts.png" alt="Team Services, Query results page, multi-select items, open context menu, Add link, click Link to new item item" style="border: 1px solid #CCCCCC;" /> 
</li>
</ol>

</div>


</div>
</div>



<a id="link-existing"> </a>  
### Link to an existing work item    

When you link work items, you select a link type. In general, use the following link types as indicated. To learn more about each link type, see [Link work items to support traceability](../track/link-work-items-support-traceability.md#link-type-guidance). 

- Use the **Duplicate** link type when two work items have been created that essentially capture the same information; close one of the work items and keep the other one active  
- Use the **Parent/Child** link types when you want to break down work items into smaller items&mdash;for example, break down features into stories, or stories into tasks
- Use  **Predecessor-Successor** link types when you want to track tasks that must be completed before others can be started; this link type is most often used when you plan work using Project 
- Use the **Related** link type when the work items being linked are at the same level&mdash;such as two user stories that define features that overlap one another&mdash;or to link work items that are defined in different team projects or managed by different teams.

0. Select the link type, enter a work item ID, and then click OK. 

	For example, here we use the Related link type to link three items to the bug with ID of *46*. The image illustrates the target work item is the bug. (Click &#x25BC; for the <a data-toggle="collapse" href="#tfs">**TFS web portal** &#x25BC;</a> and the <a data-toggle="collapse" href="#vs">**Visual Studio** &#x25BC;</a> versions. 
	<div class="collapse" id="tfs">
	<img src="_img/bulk-modify-link-new-ts.png" alt="TFS web portal, Add link dialog " style="border: 1px solid #CCCCCC;" />  		
	</div>	
	<div class="collapse" id="vs">
	<img src="_img/add-link-related-existing-item-vs.png" alt="Visual Studio, Add link dialog" style="border: 1px solid #CCCCCC;" />  		
	</div>

	<img src="_img/add-link-related-specify-id.png" alt="Add link dialog" style="border: 1px solid #CCCCCC;" />

	To link to multiple work items, enter their IDs separated by commas or spaces. If you don't know the IDs or you want to link to an item in a different team project, you can click the &hellip; context menu or Browse button (Visual Studio) to open a dialogue that will support you in [choosing work items based on IDs, a query, or title keyword](#find-items). 

	(Team Services only) To view the work items selected for linking, you can click the ![info icon](../_img/icons/info-icon.png). 

	<img src="_img/add-link-info-icon-clicked.png" alt="Add link dialog, show the work items selected for linking" style="border: 1px solid #CCCCCC;" /> 

0. If you are working from the Query Results page (web portal or Visual Studio), you'll need to bulk save the work items you've modified. Work items are automatically saved when you work from a backlog page.

	<img src="_img/bulk-modify-link-existing-bulk-save-ts.png" alt="Query results page, multi-select items, bulk save modified work items" style="border: 1px solid #CCCCCC;" /> 	

### Link to a new work item   

Here, we have selected to add a link to the selected work items.  

0. Specify the link type, work item type, and title of the new work item. Click OK.

	<img src="_img/add-link-related-new-item-issue.png" alt="Query results page, multi-select items, select Link to an existing work item" style="border: 1px solid #CCCCCC;" /> 
	<!---<img src="_img/bulk-modify-link-new-ts.png" alt="Query results page, multi-select items, select Link to an existing work item" style="border: 1px solid #CCCCCC;" />  -->

0. A work item of the type selected opens. Specify any additional fields you want and then save it. 

0. If you are working from the Query Results page, you'll need to bulk save the work items you've modified as shown in the step 2 of the previous procedure.  

## Link several work items to a new git branch 

>[!NOTE]  
>**Feature availability**: The **New branch&hellip;** option is available from Team Services and the web portal for TFS 2017 and later versions. 

You can add a new git branch and link them to existing work items at the same time. 

From a backlog or query results page, [multi-select the work items](bulk-modify-work-items.md#multi-select) you want to link to a new git branch.  

<img src="_img/add-link-new-branch.png" alt="Query results page, multi-select items, select Link to a new work item" style="border: 1px solid #CCCCCC;" /> 

To learn more, see [Link work items to Git development objects](connect-work-items-to-git-dev-ops.md).  

<a id="find-items"> </a>  
## Find work items to link to   
From the Add link dialog you can open a secondary dialog to help you choose one or more work items to link to. If you are going to find and list work items to link to by using a saved query, first [define the query](../track/using-queries.md) that you want to use. 

0.  From the Add link dialog, click the &hellip; context menu or Browse button (Visual Studio) to open the following dialog. 

	<img src="_img/add-link-choose-linked-work-item-by-title.png" alt="Choose Linked work items" style="border: 1px solid #CCCCCC;" /> 

	If the work items are defined in another team project, then first select the Project. Then, make your selections: 

	-   **Query**. Use this method when you have defined a query that you know contains the set or superset of the work items that you want.   
	-   **IDs**. Use this method when you know the IDs of the work items that you want to link to. 
		  In the **IDs** box, type the IDs of the work items that you want to find, separated by commas or spaces. 
	-   **Title contains**. Use this method to find work items that have a common word or phrase in the title field. In the **and type** list, click the type of work item that you want to retrieve.   
  
        > [!NOTE]
        >  To minimize the time required to run the query, narrow the filter criteria of the search.  
  
6.  Click the **Find** button.
  
     Only those work items defined for the selected team project and specified work item type are listed. To sort on a column field, choose the column title. 

	<!--- You can change the display of the work items that are listed by using one of the following user interface controls:  
  
		To expand or collapse a tree view list, choose the + or signs.    
      To resize a column, point your cursor at the edge of a column header and drag it to a new location.    
      To sort on a column field, choose the column title.    
      To move a column field, choose the column title and drag to another location. -->  
  
7.  In the list of returned work items, select one or more work items.   
  
    -   From the web portal: To select several items in a sequence, hold down the shift key. To select several non-sequential items, use the Ctrl key.   
  
    -   For Visual Studio, select each work item that should link to the current work item. You can also press the SHIFT key while clicking to select a range of work items, or press the CTRL key while clicking to select multiple work items.  
  


## Additional bulk-modify link options

Additional features you can use to quickly link or change links that use the parent-child link type (some features are version dependent, see the linked topic for details):

-   To quickly link backlog items to portfolio backlog items with parent-child links, [use the mapping pane to organize your backlog](organize-backlog.md#mapping). Or, you can choose to Show Parents and [drag-and-drop items within the tree hierarchy](organize-backlog.md#reparent). 

-   To create and link tasks to backlog items, [use the sprint backlog page](../scrum/sprint-planning.md). 

-   To indent (![Indent](../track/_img/IC588323.png)), outdent (![Outdent](../track/_img/IC588324.png)), and change the tree hierarchy, use a tree query in Visual Studio.

- To add or delete work items or change the link structure, you can use Excel or Project. See [Bulk add or modify work items with Excel](../office/bulk-add-modify-work-items-excel.md) and [Create your backlog and tasks using Project](../office/create-your-backlog-tasks-using-project.md).


##Related notes
To add fields or customize a work item form, see [Customize your work tracking experience](../customize/customize-work.md). The method you use depends on the process model that supports your team project.  

For additional information, see: 

- [Link work items to support traceability](../track/link-work-items-support-traceability.md)
- [Map backlog items to portfolio backlog items](organize-backlog.md)
- [Link work items to Git development objects](connect-work-items-to-git-dev-ops.md)
- [Use Excel to edit parent-child links](../office/bulk-add-modify-work-items-excel.md)
- [Use Project to edit parent-child and predecessor-successor links](../office/create-your-backlog-tasks-using-project.md)
 
### Required permissions  
  
To add, modify, or remove a link between work items, you must have permission to view both of the work items and to modify at least one of them. You must be a member of the **Contributors** group or have your **View work items in this node**, and your **Edit work items in this node** permissions set to **Allow**.  