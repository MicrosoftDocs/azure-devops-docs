---
title: History and auditing 
titleSuffix: VSTS & TFS
description: Track changes and use tools to support audit requirements when working in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) 
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: A5AC271A-8DF0-40AD-9867-1B1E9E5B1FE9
ms.manager: douge
ms.author: kaelli
ms.date: 02/05/2018  
---

# History & auditing  
 
[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The history of a work item tells you who opened the item, what changed, and why. This information helps you track how an item changes over time. When you enter information in the history field, provide as much information as possible to help the next work item owner understand what has happened and what they have to do.  

You can use either the web portal or Team Explorer to view the history of a work item or find work items based on the contents of the ```History``` field. When you perform a search on the contents of the ```History``` field, it returns only work items that have changes recorded in that field. That is, it doesn't register changes that were made to text in other fields.

# [Browser](#tab/browser)

<a id="team-services" /> 
#### VSTS, TFS 2017
    
<img src="_img/hist-audit-query-ts-bt.png" alt="Search for items based on words contained in the History field" style="border: 1px solid #C3C3C3;" /> 

#### TFS 2015, TFS 2013

<img src="_img/ALM_HA_HistoryQuery.png" alt="Search for items based on words contained in the History field" style="border: 1px solid #C3C3C3;" /> 

# [Visual Studio](#tab/visual-studio) 

<a id="tee-query-history" />
<a id="team-explorer" />
#### Visual Studio, Team Explorer, Team Explorer Everywhere
<img src="_img/hist-audit-query-team-explorer.png" alt="Search for items based on words contained in the History field" style="border: 1px solid #C3C3C3;" /> 

---


##List items based on the contents of the History field 

You use the query editor to add the History field to a [query clause](using-queries.md). 

You can filter for work items by the date on which they were changed or for a specific time period. If you limit the scope of your query, it can help with performance by only returning those results that fit the date range that you want to include. 

<table width="100%">
<tbody valign="top">
<tr>
<th width="50%">Filter for</th>
<th width="50%">Include these query clauses</th>
</tr>
<tr>
<td>Items whose History field contains the word "reproducible"  
</td>
<td>
```History _ Contains Words _ reproducible```  
</td>
</tr>
<tr>
<td>Items whose History field doesn't contain the word "beta"
</td>
<td>
```History _ Does Not Contain Words _ beta```
</td>
</tr>
<tr>
<td>
Items that contain the phrase "stack traces" and were closed but reactivated
</td>
<td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```History _ Contains Words _ stack traces```   
```And _ State _ Was Ever _ Closed```  
```And _ State _ <> _  Closed ```  
</td>
</tr>
<tr>
<td>
Items closed within a specified time period
</td>
<td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```State _ = _ Done```  
```And _ Closed Date _ > _ 7/1/2015```  
```And _ Closed Date _ <= _ 7/21/2015```  
</td>
</tr>
<tr>
<td>
Items I've been associated with 
</td>
<td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```History _ Contains Words _ MyName```  
```Or _ Assigned To _ Was Ever _ @Me```  
</td>
</tr>
</tbody>
</table>  

### Tips for using the query editor
<ul>
<li>Type the complete word or phrase that is specified in the ```History``` fields of those work items that you want to find.</li>
<li>Enter the full text for the word that you want to search. The History field is indexed for full-text search. If you enter only a partial word, the query will not return work items that contain the full word. For example, if the History field contains the phrase *reproducible behavior* and you search for *repro*, the work item will not be found. However, if you search for the complete word *reproducible*, the work item will be found. You can also search for the string with a wild card, such as ```repro*```. </li>
<li>The query editor ignores common words or stop words as defined in [Configure and Manage Stopwords and Stoplists for Full-Text Search](https://msdn.microsoft.com/library/ms142551.aspx).</li>
<li>On the query editor toolbar, click ![Run query](../_img/icons/run_query.png) or ![Run query](../_img/icons/run_query_te.png) icon and confirm that your query returns expected results.</li>
<li>If you don't receive the results you expect, adjust the word or phrase that you entered, and run the query again.</li> 
</ul> 



## View the history of work items  

An entry is made to the History field each time a work item is saved. To view the history of changes, open an existing work item, and then choose the ![history tab icon](../_img/icons/icon-history-tab-wi.png) or **History** tab, or for some work item types, choose the **Details** tab. 


<a id="team-services-tab" /> 
#### VSTS, TFS 2017
     
<img src="_img/hist-audit-wi-form-vsts-tab.png" alt="View History tab - VSTS" style="border: 1px solid #C3C3C3;" /> 

> [!NOTE]  
> The History field is no longer a rich-text field. To annotate the work item history, add to the Description or Discussion fields. 

 
<a id="web-portal-explorer-tab" /> 
#### TFS 2015, TFS 2013 and Team Explorer
To view only the comments that were added to the log, choose the <b>Discussion Only</b> tab. To view all changes made to the item, choose the <b>All Changes</b> tab, and then choose the <b>show all changes</b> link for a specific date and time.  
 
<img src="_img/hist-audit-choose-history-tab-tfs.png" alt="View History tab - TFS Web portal, Team Explorer" style="border: 1px solid #C3C3C3;" /> 

If you open the work item from the web portal, you'll see the state change history diagram. To see the entire history of state changes, choose **Show all**.

<img src="_img/state-change-history-diagram.png" alt="State change history diagram (web portal only)" style="border: 1px solid #C3C3C3;" /> 

The history details shown depend on the platform, version, and client you user. 

<a id="team-services-view" /> 
#### VSTS, TFS 2017

Click an entry in the left pane to view the details of changes made.
     
<img src="_img/hist-audit-wi-form.png" alt="History tab - VSTS" style="border: 1px solid #C3C3C3;" /> 


<a id="explorer" /> 
#### TFS 2015, TFS 2013 and Team Explorer

To view only the comments that were added to the log, choose the <b>Discussion Only</b> tab. To view all changes made to the item, choose the <b>All Changes</b> tab, and then choose the <b>show all changes</b> link for a specific date and time. 
 
<img src="_img/ALM_HA_AllChanges.png" alt="View change history" style="border: 1px solid #C3C3C3;" /> 


## Fields that support history, auditing, and revision tracking 

You can use the following fields to filter queries and create reports. Several of these fields are populated with information as a work item progresses from one state to another. Other fields update when the work item is modified. Some fields don't appear on the work item form, but they are tracked for the WITs listed.  


<table width="100%">
<tbody valign="top">
<tr>
  <th width="15%">Field name</th>
  <th width="70%">Description</th>
  <th width="15%">Work item type</th>
</tr>

<tr>
<td>
<p>Changed By</p>
</td>
<td>
The name of the team member who modified the work item most recently.
	<p>Reference name=System.ChangedBy, Data type=String</p>
</td>
<td>All</td>
</tr>
<tr>
  <td>
    <p>Change Date</p>
  </td>
  <td>
    <p>The date and time when a work item was modified.</p>
	<p>Reference name=System.ChangedDate, Data type=DateTime</p>
  </td>
<td>All</td>
</tr>
<tr>
  <td>
    <p>Closed Date <sup>1</sup> </p>
  </td>
  <td>
    <p>The date and time when a work item was closed.</p>
	<p>Reference name=Microsoft.VSTS.Common.ClosedDate, Data type=DateTime</p>
  </td>
<td>All</td>
</tr>
<tr>
  <td>
    <p>Created Date</p>
  </td>
  <td>
    <p>The date and time when a work item was created.</p> 
	<p>Reference name=System.CreatedDate, Data type=DateTime</p>
  </td>
<td>All</td>
</tr>
<tr>
<td>History</td>
<td>
The record of changes that were made to the work item after it was created. Every time that the work item is updated, information is appended to the history, which specifies the date of the change, who made the changes, and which fields were changed. 
<p>You can add formatted text to the history field. Once you've saved the work item, you can't alter the history. </p>
<p>The ```History``` field, along with the ```Description```, ```Steps to Repro``` and ```Title``` fields are automatically indexed for full-text search as described in [Query fields, operators, and macros](query-operators-variables.md). </p>

	<p>Reference name=System.History, Data type=History</p>

</td>
<td>
All
</td>
</tr>
<tr>
  <td>
    <p>Resolved Date <sup>1</sup> </p>
  </td>
  <td>
    <p>The date and time when the work item was moved into a Resolved state. (Agile, CMMI)</p>

	<p>Reference name=Microsoft.VSTS.Common.ResolvedDate, Data type=DateTime</p>
  </td>
  <td>Bug 
  </td>
</tr>

<tr>
<td>
<p>Rev</p>
</td>
<td>
<p>A number that is assigned to the historical revision of a work item. </p>
	<p>Reference name=System.Rev, Data type=Integer</p>
</td>
<td>All</td>
</tr>


<tr>
  <td>
    <p>State Change Date</p>
  </td>
  <td>
    <p>The date and time when the value of the State field changed.</p>
	<p>Reference name=Microsoft.VSTS.Common.StateChangeDate, Data type=DateTime</p>
  </td>
<td>All</td>
</tr>

<tr>
  <td>
Test Suite Audit
  </td>
  <td>
Tracks additional operations performed when modifying a test suite, for example: adding tests to a test suite or changing configurations. This field can be viewed through the History tab or through a separate query. There will be a consolidated history view, including changes performed to work items field and changes resulting from related artifacts such as test points and configurations.

  </td>
  <td>
Test Suite
  </td>
</tr>
</tbody>
</table>

#### Notes: 
1. For these fields to be defined for a WIT, they must be included in the ```WORKFLOW``` section of the WIT definition. For example, this syntax is included within the ```FIELDS``` definition when transitioning to a Resolved state:  
 
	```
	<FIELD refname="Microsoft.VSTS.Common.ResolvedDate">  
	   <SERVERDEFAULT from="clock" />  
	</FIELD>  
	```

## Related notes
To learn more about creating and saving queries, see also: 

- [Query editor](using-queries.md)
- [Query fields, operators, and macros](query-operators-variables.md)   
- [Query by date or current iteration](query-by-date-or-current-iteration.md)


### Getting the history programmatically
See the [Work item tracking](https://docs.microsoft.com/rest/api/vsts/wit/)  for ways to extract history information programmatically.  

[!INCLUDE [temp](../_shared/rest-apis-queries.md)]
 
[!INCLUDE [temp](../../_shared/help-support-shared.md)] 
 
