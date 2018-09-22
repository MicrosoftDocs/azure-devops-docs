---
title: Link and attachment queries 
titleSuffix: Azure Boards and TFS
description: Query work items based on link type, link count, link restrictions, and attachment file count in Azure Boards & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 219717a0-de6e-4f70-8558-54f813f82507
ms.manager: douge
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.topic: sample
ms.date: 05/10/2017  
---

::: moniker range="vsts"  
# Link, attachment comment count queries  
::: moniker-end  

::: moniker range=">= tfs-2013  <= tfs-2018" 
# Link and attachment queries  
::: moniker-end  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You can [link work items to track related work and dependencies](link-work-items-support-traceability.md) and [attach files to share information with your team](share-plans.md#attachments). You can then list work items based on their link type, link count, or attachment file count.

## Query based on link or attachment counts

<p>You can filter for work items by the link type, link count, or attachment count.  </p>

<table valign="top">
<tbody valign="top">
<tr>
  <th>
    <p>Filter for</p>
  </th>
  <th>
    <p>Include these query clauses</p>
  </th>
</tr>
<tr>
  <td>
    <p>Items with attachments</p>
  </td>
  <td>
    <p>
      ```Attached File Count >= 1```
    </p>
  </td>
</tr>
<tr>
  <td>
    <p>Items with 2 or more hyperlinks</p>
  </td>
  <td>
    <p>
      ```Hyperlink Count >= 2```
    </p>
  </td>
</tr>
<tr>
  <td>
    <p>Items containing external links</p>
  </td>
  <td>
    <p>
      ```External Link Count >=1```
    </p>
  </td>
</tr>
<tr>
  <td>
    <p>Items that contain between 3 and 7 Related links</p>
  </td>
  <td>
    <p>
      &#160;&#160;&#160;```Related Link Count >=3```
    </p>
    <p>
      ```And```
    </p>
    <p>
      &#160;&#160;&#160;```Related Link Count <=7```
    </p>
  </td>
</tr>
</tbody>
</table>



## List hierarchical items in a tree view  

Add a query and select **Tree of work items** to begin your query. You should see something similar to the following: 

<img src="_img/query-link-attach-all-items-tree-query.png" alt="Query editor, new tree of work items query" style="border: 2px solid #C3C3C3;" />

> [!NOTE]    
>You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases. These items aren't linked together using parent-child link types. You can [view the hierarchy through the Test>Test Plans page](../../test/create-a-test-plan.md). 

From there, you can add additional query clauses or change the Filter options for linked work items. 


<table width="100%">
<tbody valign="top">
<tr>
<th width="50%">Filter for</th>
<th width="50%">Include these query clauses</th>
</tr>
<tr>
<td>View only child items of work item 645  
</td>
<td>Add to Filters for top level work items: 
```ID  =  645```  
</td>
</tr>
<tr>
<td>Tasks or bugs  
</td>
<td>
Add to Filters for linked work items: 
```Work Item Type  In  Task,Bug```  
</td>
</tr>
<tr>
<td>
Items assigned to my team (Web)
</td>
<td>
Add to both top and bottom filters: 
```Assigned to  In Group  [Fabrikam Fiber]\Web```  
</td>
</tr>

<tr>
<td>
Parent items of tasks assigned to me:  
</td>
<td>
Change Filter options to **Match linked work items first**  
Add to Filters for linked work items:  
```Assigned To  =  @Me```  
</td>
</tr>

</tbody>
</table>  


## List items based on linked dependents  

The following example shows a dependent linked query that returns items with dependencies on work managed by other teams and other projects. Use this query to see all dependent work items that link to active Product Backlog Items or Bugs that have not been removed, closed, or completed. Only those dependent work items that are under a product area other than the **Phone Save\\Phone Customers** are returned.

![Work Items and Dependent Links Query](_img/example-work-item-queries/IC588290.png)   

**Why this works:**

-   Removing the **Team Project = @Project** clause enables all dependent linked work items that match the filter criteria to be listed, no matter which project they belong to in the collection.

-   Grouping each of two clauses returns all **Product Backlog Item**s on the backlog or in progress, and the second grouped clause returns all **Bug**s on the backlog or in progress.

-   Grouping the two clauses with the **OR** operator at the start of the second clause returns work items that match either of the two filter criteria.

-   Choosing the **Only return items that have the specified links** returns only top-level work items that have dependencies.

-   Choosing **Return links of any type** returns all linked work items that match the filter criteria for linked work items, in this case, returning all work items that are not under the **Phone Saver\\Phone Customers** area path, and aren't completed or removed.

The following image shows the query results that are returned.

![Direct links query results](_img/example-work-item-queries/IC588291.png)  



::: moniker range="vsts"  
# Link, attachment, and comment count fields  
::: moniker-end  

::: moniker range=">= tfs-2013  <= tfs-2018" 
## Link and attachment fields 
::: moniker-end  

The following table describes fields associated with links and attachments. Most of these fields do not appear on the work item forms but are tracked for all work item types. 

<table><thead>
<tr>
<th width="15%"><p><strong>Field name</strong></p></th>
<th width="70%"><p><strong>Description</strong></p></th>
<th width="18%"><p><strong>Work item type</strong></p></th>
</thead>
<tbody valign="top">
<tr>
<td><p>Attachment File Count</p></td>
<td><p>The number of files attached to the work item and stored in the work item tracking database..</p>
<p>Reference Name=System.AttachedFileCount, Data type=Integer</p>

<blockquote>
![note icon](../_img/icons/note-icon.png)<br/>
For Azure Boards, you can add up to 100 attachments to a work item. Attempts to add more result in an error message upon saving the work item.    
</blockquote> 
</td>
<td><p>All</p></td>
</tr>

<tr>
<td><p>Comment Count</p></td>
<td><p>The number of comments added to the **Discussion** section of the work item. </p>
<p>Reference Name=System.CommentCount, Data type=Integer</p>

<blockquote>
![note icon](../_img/icons/note-icon.png)<br/>
Available for Azure DevOps Services only. 
</blockquote> 
</td>
<td><p>All</p></td>
</tr>

<tr>
<td><p>External Link Count</p></td>
<td><p>The number of links from the work item to artifacts that are not work items. such as pull requests, commits, changesets, or other link types.</p>
<p>Reference Name=System.ExternalLinkCount, Data type=Integer</p></td>
<td><p>All</p></td>
</tr>
<tr>
<td><p>Hyperlink Count</p></td>
<td><p>The number of hyperlinks that are defined for the work item.</p><p>Reference Name=System.HyperLinkCount, Data type=Integer</p></td>
<td>All</td>
</tr>
<tr>
<td><p>Link Comment</p></td>
<td><p>Contains comments from the team member who created the link. You can configure this field to appear as a column in a list of links on a work item form. (Not supported in query editor.)  </p><p>Reference Name=System.Links.Comment, Data type=PlainText</p>
</td>
<td>All</td>
</tr>
<tr>
<td><p>Related Link Count</p></td>
<td><p>The number of links defined for a work item with the Related link type. </p><p>Reference Name=System.RelatedLinkCount, Data type=Integer</p>
</td>
<td>All</td>
</tr>
<tr>
<td><p>Link Description</p></td>
<td><p>Contains the work item type, ID, and title of the work item that is the target of the link. You can configure this field to appear as a column in a list of links on a work item form. (Not supported in query editor.) </p>
<p>Reference Name=System.Links.Description, Data type=PlainText</p></td>
<td>All</td>
</tr>
</tbody>
</table>


## Related articles

- [Add link to multiple work items](../backlogs/add-link.md) 
- [Link work items to support traceability](link-work-items-support-traceability.md) 
- [Query editor](using-queries.md)   
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Add work items](../backlogs/add-work-items.md)  
- [Work item field index](../work-items/guidance/work-item-field.md) 

 
::: moniker range=">= tfs-2015  <= tfs-2018"  
### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace. 
::: moniker-end  

::: moniker range=">= tfs-2013  <= tfs-2018"  

### Add custom link types or customize the links controls 

To add link types, see [Manage link types [witadmin]](../../reference/witadmin/manage-link-types.md). 

All tabs that support creating links between work items are implemented by using the **LinksControl** element on the work item form. This element controls filtering and restricting the types of work items to which you can link, the types of links that you can create, and whether you can link to work items in another project. To customize the link controls and restrictions, you modify the definition of the `LinksControlOptions` for a work item type, see [LinksControlOptions XML elements](../../reference/xml/linkscontroloptions-xml-elements.md).  

### Default data fields in lists of links

You can add or remove columns from the list of links, and you can customize the default columns and the column order. For more information, see [LinksControlOptions XML elements](../../reference/xml/linkscontroloptions-xml-elements.md).


::: moniker-end  


<!---

### Reports that require links between work items

The default TFS process templates provide reports that require you to create links between specific work items.

<table>
<thead>
<tr>
<th><p>Process template</p></th>
<th><p>Report</p></th>
<th><p>Link requirements</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Scrum</p></td>
<td><p>[Backlog Overview (Scrum)](https://msdn.microsoft.com/library/dn641200.aspx)</p></td>
<td><p>Link PBIs and tasks (Parent-Child) and PBIs and test cases (Tested by-Tests).</p></td>
</tr>
<tr>
<td><p>Agile</p></td>
<td><p>[Stories Overview Report (Agile)](https://msdn.microsoft.com/library/dd380648.aspx)</p>
<p>[Stories Progress Report (Agile)](https://msdn.microsoft.com/library/dd380641.aspx)</p></td>
<td><p>Link user stories and tasks (Parent-Child) and user stories and test cases (Tested by-Tests). Link each bug to the test case that identified the code defect (Tested By) or link it to the user story (Related).</p></td>
</tr>
<tr>
<td><p>CMMI</p></td>
<td><p>[Requirements Overview Report (CMMI)](https://msdn.microsoft.com/library/ee461517.aspx)</p>
<p> [Requirements Progress Report (CMMI)](https://msdn.microsoft.com/library/ee461582.aspx) </p></td>
<td><p>Link requirements and tasks (Parent-Child) and requirements and test cases(Tested by-Tests). Link each bug to the test case that identified the code defect (Tested By) or link it to the requirement (Related).</p></td>
</tr>
</tbody>
</table>


### Link toolbar buttons

Each tab has a toolbar with buttons. The links control toolbar for the web portal, shown here, has a subset of these controls:

Links control toolbar (Team Explorer)

![ ](_img/link-controls-restrictions-field-reference/IC673344.png)

These buttons become available only after you perform a specific action:

-   The button to create a work item that is linked to the open work item (![ ](_img/link-controls-restrictions-field-reference/IC674469.png)) becomes available only after you save the open work item.

-   The buttons to open the list of work items in a query (![ ](_img/link-controls-restrictions-field-reference/IC588335.png)) and ![ ](_img/link-controls-restrictions-field-reference/IC588294.png) **Open in Microsoft Office** become available only when at least one work item is listed in the links control tab.

-   The buttons to open a work item (![ ](_img/link-controls-restrictions-field-reference/IC588293.png)), edit a link (![ ](_img/link-controls-restrictions-field-reference/IC588336.png)), and delete a link (![ ](_img/link-controls-restrictions-field-reference/IC588333.png)) become available only after you click one or more work items listed in the links control tab.

The **Storyboards** links control restricts users to add links only to storyboards or network shared files. With this control, you can add a new link, open a linked item, and delete a link. Also, only the web portal version displays the **Start Storyboarding** link within the toolbar.

Storyboards links control (the web portal)
![ ](_img/link-controls-restrictions-field-reference/IC589934.png)

-->

