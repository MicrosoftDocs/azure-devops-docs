---
title: LinksControlOptions XML elements reference 
titleSuffix: Azure DevOps & TFS  
description: XML syntax to scope the allowed links within a links control element used in the new web form layout 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: FA2BB293-5AC9-4861-B9B1-1033E4E078D4
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 02/02/2018
---

# LinksControlOptions XML elements (Web form) 

**Azure DevOps Services (Hosted XML) | TFS 2018 | TFS 2017 | [Previous versions](linkscontroloptions-elements.md)**


> [!IMPORTANT]  
> This article applies to project customization for Hosted XML and On-premises XML (TFS 2017 and later versions) process models. For TFS 2015, see [LinksControlOptions elements (Client and web, TFS 2015)](linkscontroloptions-elements.md). <br/><br/>
> Customizing the links control is not a supported feature For the Inheritance process model. For an overview of process models, see [Customize your work tracking experience](../customize-work.md).  
 
By linking work items to other objects, you can track related work, dependencies, and changes made over time. With the updated [**Control** element](weblayout-xml-elements.md), you can specify a scoped links control within the work item form for the web portal by setting **type="LinksControl"**.    

The **LinksControlOptions** element is a child element of the **Control** element. With a scoped links control, you can specify filters that restrict the types of links that users can add and the types of work items to which users can create links. Specifically, you use the following child elements to scope the control:

- **LinkFilters**: Use to specify the types of links that appear in the control:
	- Add a **WorkItemLinkFilter** to select links that may be created to other work items
	- Add an **ExternalLinkFilter** to select links to other objects, such as changesets, hyperlinks, or version controlled files
- **WorkItemTypeFilters**: Use to restrict the types of work items you can link to from the links control 
- **Column**: Use to specify the work item fields and link type attributes listed within the links control
 
<blockquote style="font-size: 13px"><b>Note: </b>The standard ![Links page icon](../../boards/_img/icons/icon-links-tab-wi.png) [Links page](../../boards/work-items/work-item-form-controls.md#link-wi) provides a non-customizable control that displays all link types. From this control, you may view all links associated with the work item, and link the work item to other work items or external objects.  
</blockquote>      

## Summary of what's changed

The updated **LinksControlOptions** element introduces several new elements and deprecates several elements that are still in use with the [client **LinksControlOptions** element version](https://msdn.microsoft.com/library/aa337625.aspx). Overall, it's a much simpler syntax structure than its predecessor. 


> [!div class="mx-tdBreakAll"]  
> |New elements  |Maintained elements  |Deprecated elements  |
> |-------------------------|--------------------|----------------------|
> |- ListViewOptions<br/>- LinkFilters<br/>- ExternalLinkFilter<br/>- WorkItemLinkFilter<br/>- Columns<br/>- Column |- Filter<br/>- LinksControlOptions<br/>- WorkItemTypeFilters |- ExternalLinkFilters<br/>- WorkItemLinkFilters<br/>- LinkColumns<br/>- LinkColumn |
 
  
### Differences between web and client links controls   

The following table summarizes the differences between the **LinksControlOptions** elements used within the **WebLayout** section and those that are used within the **Layout** section.  The **WebLayout** section supports display of work item forms through the web portal, while the **Layout** section supports display of work item forms from the web portal for TFS 2015 and clients such as Visual Studio. 

<table width="100%"> 
<tbody valign="top">
<tr>
<th width="20%">Control option</th>
<th width="30%">Web portal elements (WebLayout)</th>
<th width="30%">Client elements (Layout)</th>
</tr>
<tr>
<td>Restrict link relationships to other objects (non work items) </td>
<td>Specify to include an external link type using the **ExternalLinkFilter** element within the **LinkFilters** container element<br/>
When ```ListViewOptions GroupLinks="true"```, links are grouped within the web form by type in the order they are listed within the **LinkFilters** container element</td>
<td>Specify to include or exclude external link types using **ExternalLinkFilters**</td>
</tr>

<tr>
<td>Restrict link relationships to other work items </td>
<td>Specify to include a work link type using the **WorkItemLinkFilter** element within the **LinkFilters** container element, specifying a link type reference name<br/>
When ```ListViewOptions GroupLinks="true"```, links are grouped within the web form by type in the order they are listed within the **LinkFilters** container element</td>
<td>Specify to include or exclude work link types using **WorkItemLinkFilters**, specify a link type reference category </td>
</tr>


<tr>
<td>Restrict links allowed based on work item type </td>
<td>Specify to include a work item type using the **Filter** element within the **WorkItemTypeFilters** container element</td>
<td>Specify to include or exclude work item types using **WorkItemTypeFilters**</td>
</tr>

<tr>
<td>Link order and grouping</td>
<td>When ```ListViewOptions GroupLinks="true"```, linked items are grouped by their link type and work items are arranged by work item type, owner, and title   (a user can change this order by clicking a column field in the control's grid display)  
</td>
<td>All links grouped by type and listed alphabetically or ordered by column field </td>
</tr>

<tr>
<td>Composite display of link information</td>
<td>For each listed item, the links control displays the Work Item Type, ID, Title, and Assigned To as a composite field called *Link* as shown:  

<img src="_img/linkscontrol-composite-field.png" alt="Composite field" style="border: 1px solid #C3C3C3;" />  
<p>When the links control width is less than 460 pixels, the field also displays the item's State and the time of its Latest Update (the creation or latest modification of the item). See [Responsive design and dynamic resizing](#dynamic-sizing) for details.
</td>
<td>Not supported</td>
</tr>

<tr>
<td>Field and attribute display </td>
<td>Specify the fields to display within the link control's grid using a **Column** element within the **Columns** container element </td>
<td>Specify the default fields to display using **LinkColumn** elements, users can change the column options through the client form </td>
</tr>

</tbody>
</table>
  
### Add links through a scoped links control 

From the scoped links control, you can perform the same actions provided from the standard ![Links page icon](../../boards/_img/icons/icon-links-tab-wi.png) Links page&mdash;you simply do them from a menu rather than a tool bar.  

- To open an associated item or object, click the linked item  
- To delete a link, highlight it and click the ![delete icon](../../boards/_img/icons/delete_icon.png) delete icon   
- To link to an existing item, or create and link a new work item, select one of the menu options.  

<img src="_img/linkscontrol-related-work-menu-options.png" alt="Links control menu of options" style="border: 1px solid #C3C3C3;" />  


<a id="dynamic-sizing"></a>
### Responsive design and dynamic resizing   
By default, the scoped links control displays dynamically (`ViewMode=Dynamic`) based on the form's width and the space allocated to the links control. The links control width expands and shrinks proportionally based on the overall form width.
- When the links control width is less than 460 pixels, the control displays as a *List*. Only the composite field called *Link* (consisting of Work Item Type, ID, Title, and Changed By fields)   
- When the links control width equals or exceeds 460 pixels, the control displays information within a *Grid* according to the fields specified within the **Column** elements. The number of columns that appear is space-dependent, starting at a minimum of 4, and increasing by one column for every 100 pixels until the width is sufficient to display all defined columns.  

You can specify whether the links display as a list, grid, or dynamically by setting the `ViewMode` in the [LinksControlOptions](#links-control-options).  

## Sample code for default scoped link controls  

Core system processes&mdash;[Agile, Scrum, CMMI](../../boards/work-items/guidance/choose-process.md)&mdash;have been updated to include the Development and Related Work scoped links control. 


<img src="_img/linkscontrol-bug-form-dev-related-links.png" alt="Bug work item form, Agile process, Development and Related links controls" style="border: 1px solid #C3C3C3;" />  

These controls appear on all default work item types, except the following:
- Code Review Request/Code Review Response
- Feedback Request/Feedback Response
- Shared Steps/Shared Parameter (these items have specific controls that list Test Case items).



<a id="development-links-control">  </a>

### Development links control  

The Development links control displays all of your development links, whether based on a git or Team Foundation version control (TFVC) repository. It displays links in a set order, and provides calls-to-action that support users to [drive development from a work item](../../boards/backlogs/connect-work-items-to-git-dev-ops.md).  

The following code sample specifies the syntax used to code the Development link control. This control supports adding external links of the specified types&mdash; pull requests, builds, branches, commits, and other development-related links&mdash;  and grouping them according to the Development experience.


> [!div class="tabbedCodeSnippets"]
```XML
<Control Type="LinksControl" Label="Development">
   <LinksControlOptions ViewMode="Dynamic" ZeroDataExperience="Development" ShowCallToAction="true">
	  <ListViewOptions GroupLinks="false">
		</ListViewOptions>
		<LinkFilters>
               <ExternalLinkFilter Type="Build" />
               <ExternalLinkFilter Type="Integrated in build" />
               <ExternalLinkFilter Type="Pull Request" />
               <ExternalLinkFilter Type="Branch" />
                <ExternalLinkFilter Type="Fixed in Commit" />
               <ExternalLinkFilter Type="Fixed in Changeset" />
               <ExternalLinkFilter Type="Source Code File" />
               <ExternalLinkFilter Type="Found in build" />
		  </LinkFilters>
	</LinksControlOptions>
</Control>
```

### Related Work links control  

The Related Work links control displays links to other work items in a set order on the front page of the form. It supports these link types: Duplicate/Duplicate of, Parent/Child, Predecessor/Successor, Related, and Tests/Tested by. 

The following code sample specifies the syntax used to support the Related Work links control. 

> [!div class="tabbedCodeSnippets"]
```XML
<Control Type="LinksControl" Name="Related Work">
   <LinksControlOptions>
      <LinkFilters>
         <WorkItemLinkFilter Type="System.LinkTypes.Duplicate-Forward" />
         <WorkItemLinkFilter Type="System.LinkTypes.Duplicate-Reverse" />
         <WorkItemLinkFilter Type="System.LinkTypes.Hierarchy-Forward" />
         <WorkItemLinkFilter Type="System.LinkTypes.Hierarchy-Reverse" />
         <WorkItemLinkFilter Type="System.LinkTypes.Dependency" />
         <WorkItemLinkFilter Type="System.LinkTypes.Related" />
         <WorkItemLinkFilter Type="Microsoft.VSTS.Common.TestedBy-Forward" />
         <WorkItemLinkFilter Type="Microsoft.VSTS.Common.TestedBy-Reverse" />
      </LinkFilters>
      <Columns>
         <Column Name="System.State" />
         <Column Name="System.ChangedDate" />
         <Column Name="System.Links.Comment" />
      </Columns>
   </LinksControlOptions>
</Control>
```
For Test Case items, this control also displays Shared Steps and Shared Parameter links.

## Sample code to showcase test-related work 

You can include work and external links together in a single control, while also filtering specific work item types to display. This powerful range of scoping allows you to create link controls that satisfy any number of scenarios.   

For example, the syntax below would create a control specifically designed to display test results and testing work items. 


> [!div class="tabbedCodeSnippets"]
```XML
<Control  Name="Test" Type=""LinksControl"">
   <LinksControlOptions>
	  <ListViewOptions GroupLinks="true">
		</ListViewOptions>
		  <LinkFilters>
			 <ExternalLinkFilter Type="Result attachment"/>
			 <ExternalLinkFilter Type="Test Result "/>
			 <WorkItemLinkFilter Type="Microsoft.VSTS.Common.TestedBy-Forward" />
			 <WorkItemLinkFilter Type="Microsoft.VSTS.Common.TestedBy-Reverse" />
			 <WorkItemLinkFilter Type="Microsoft.VSTS.TestCase.SharedStepReferencedBy" />
		  </LinkFilters>
      <WorkItemTypeFilters>
         <Filter WorkItemType="Test Case" />
         <Filter WorkItemType="Test Suite" />
         <Filter WorkItemType="Test Plan" />
         <Filter WorkItemType="Shared Steps" />
      </WorkItemTypeFilters>
   </LinksControlOptions>
</Control>
```

<a id="customize">  </a>  
## Create a scoped links control  

To add or modify a scoped links control, use the information provided in this topic to modify the XML definition file for a specific work item type. Each links control must be added as a **Control** of **type="LinksControl"** within the **WebLayout** section, specifying the appropriate **LinksControlOptions**.

To import and export your changes, see [Customize the work item tracking web form](../customize-wit-form.md).   

## LinksControlOptions element syntax

The following table describes the **LinksControlOptions** element and its child elements. The syntax for the **LinksControlOptions** element is:  

> [!div class="tabbedCodeSnippets"]
```XML
<LinksControlOptions ViewMode="Static | Dynamic" ZeroDataExperience="Development" ShowCallToAction="true | false"   WorkItemFiltersScope="Project" >
   <ListViewOptions GroupLinks="true | false" />
   <LinkFilters>    
      <ExternalLinkFilter Type="ExternalLinkName" />
      <WorkItemLinkFilter Type="WorkItemLinkName" />
   </LinkFilters>
   <WorkItemTypeFilters>
      <Filter WorkItemType="WorkItemTypeName" />
   </WorkItemTypeFilters>
   <Columns>
      <Column RefName="FieldReferenceName"/>
   </Columns>
</LinksControlOptions>
```
  
<table width="100%" >
<thead>
<tr>
<th width="22%"><p>Element</p></th>
<th width="78%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top" >


<tr>
<td><p> <strong>Column</strong> </p></td>
<td><p>Required <strong>Columns</strong> element used to specify the work item and link-related fields to display within the links control. </p>
<p>The order in which the <strong>Column</strong> elements are listed defines the order in which the column fields display in the control's grid.</p>
<pre><code>&lt;Column Name=&quot;FieldName&quot; /&gt;</code></pre>
<p>To determine the reference name for a field, see [Work item field index](../../boards/work-items/guidance/work-item-field.md).</p>
<p>Link-related fields include: ```System.ExternalLinkCount, System.HyperLinkCount, System.Links.Comment, System.Links.LinkType,``` and ```System.Related.LinkCount```.</p>
</td>
</tr>
<tr>
<td><p> <strong>Columns</strong> </p></td>
<td><p>Optional child element of the <strong>LinksControlOptions</strong> element.</p>
<p>Container element for one or more <strong>Column</strong> elements you use to specify the fields that display in the control's grid. </p>
<pre><code>&lt;Columns &gt;
   &lt;Column Name=&quot;FieldName&quot; /&gt; 
&lt;/Columns &gt;</code></pre>
</td>
</tr>
<tr>
<td><p> <strong>ExternalLinkFilter</strong> </p></td>
<td><p>Optional <strong>LinkFilters</strong> element used to specify an external link type. With an external link type, users can create a link relationship to objects that are not work items, such as changesets, hyperlinks, and files under version control. </p>
<pre><code>&lt;ExternalLinkFilter Type=&quot;ExternalLinkName&quot; /&gt;</code></pre>
<p>Examples of external link types you can specify include: ```Fixed in Changeset```, ```Fixed in Commit```, ```Source Code File```, ```Pull Request```, and ```Hyperlink```. See [Link type reference](../../boards/queries/link-type-reference.md#external-link-types)for a complete list. </p>
<blockquote><b>Important: </b>For import purposes, use the name `Workitem Hyperlink` in place of `Hyperlink` and `Source Code File` in place of `Versioned item`. 
</blockquote>

<p>Specify ```System.IncludeAllExternalLinks``` to include all external link types.</p>
<blockquote><b>Note: </b>When you specify  ```System.IncludeAllExternalLinks```, the system displays all links in alphabetical order by external link type. 
</blockquote>

</td>
</tr>

<tr>
<td><p> <strong>Filter</strong> </p></td>
<td><p>Required child element of the <strong>WorkItemTypeFilters</strong> container element. Specifies the name of a work item type to include as an allowed type that users can link to from the links control. </p>
<pre><code>&lt;Filter WorkItemType=&quot;WorkItemTypeName&quot;  /&gt;</code></pre>
<p>You can specify any work item type defined within the project or project collection, including custom work item types. Typically, the work item types you specify depend on the process used to create your project. See [Choose a process](../../boards/work-items/guidance/choose-process.md) for details.</p>  
<p>The following lists the default work item types available based on the default system processes:</p>
<div style="float:left;width:120px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Agile</p>
<ul style="list-style-type:none;padding-left:10px">
<li style="margin-bottom:0px">Bug</li>
<li style="margin-bottom:0px">Epic</li>
<li style="margin-bottom:0px">Feature</li>
<li style="margin-bottom:0px">Issue</li>
<li style="margin-bottom:0px">Task</li>
<li style="margin-bottom:0px">Test Case</li>
<li style="margin-bottom:0px">User Story</li>
</ul>
</div>

<div style="float:left;width:180px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Scrum</p>
<ul style="list-style-type:none;padding-left:20px">
<li style="margin-bottom:0px">Bug</li>
<li style="margin-bottom:0px">Epic</li>
<li style="margin-bottom:0px">Feature</li>
<li style="margin-bottom:0px">Impediment</li>
<li style="margin-bottom:0px">Product Backlog Item</li>
<li style="margin-bottom:0px">Task</li>
<li style="margin-bottom:0px">Test Case</li>
</ul>
</div>

<div style="float:left;width:120px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">CMMI</p>
<ul style="list-style-type:none;padding-left:30px">
<li style="margin-bottom:0px">Bug</li>
<li style="margin-bottom:0px">Change Request</li>
<li style="margin-bottom:0px">Epic</li>
<li style="margin-bottom:0px">Feature</li>
<li style="margin-bottom:0px">Issue</li>
<li style="margin-bottom:0px">Review</li>
<li style="margin-bottom:0px">Requirement</li>
<li style="margin-bottom:0px">Risk</li>
<li style="margin-bottom:0px">Task</li>
<li style="margin-bottom:0px">Test Case</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

</td>
</tr>
<tr>
<td><a id="links-control-options">  </a>
<p><strong>LinksControlOptions</strong> </p></td>
<td><p>Required container child element of <strong>Control</strong> element when <strong>type=&quot;LinksControl&quot;</strong> and when used within the **WebLayout** element.</p>
<p>Use to scope the link types and work item types that users can add to a work item and the columns to appear for the list of link relationships in the work item form.</p>
<pre><code>&lt;LinksControlOptions ViewMode="Dynamic | Grid | List" 
ZeroDataExperience="Development" ShowCallToAction="true | false"  
WorkItemFiltersScope="Project" &gt;
  . . . 
&lt;/LinksControlOptions&gt;</code></pre>
<p>All attributes are optional. Supported attributes include: </p>
<ul>
<li><strong>ViewMode</strong>: Can be set to ```Dynamic``` (changing with size), `Grid`, or `List`.  Default is ```Dynamic```. These view modes correspond to those described earlier in this topic in [Responsive design and dynamic resizing](#dynamic-sizing).</li>
<li><strong>ZeroDataExperience</strong>: Currently, only option is ```Development```. This option causes the call-to-action links to appear for development, such as *Create branch, Create a pull request,* and more. To learn more, see [Drive Git development](../../boards/backlogs/connect-work-items-to-git-dev-ops.md).</li>
<li><strong>ShowCallToAction</strong>: Can be set to ```true```, normally is ```false```. Determines whether call-to-actions appear below linked artifacts. 
<blockquote><b>Note: </b>Currently, the only supported call-to-action experience occurs when ```ZeroDataExperience="Development"```.
</blockquote></li>
<li><strong>WorkItemFiltersScope</strong>: Can be set to ```Project```. When set to ```Project```, users can only link to work items within the current project scope. </li>
</ul>
</td>
</tr>

<tr>
<td><p><strong>LinkFilters</strong> </p></td>
<td><p>Optional <strong>LinksControlOptions</strong>  child element.</p>
<p>Use this container element to specify which link types are used to scope the control. List one or more <strong>ExternalLinkFilter</strong> or <strong>WorkItemLinkFilter</strong> elements to specify the link types to use to filter the links control.</p>
<pre><code>&lt;LinkFilters&gt;     
    &lt;ExternalLinkFilter Type="ExternalLinkName" /&gt;
    &lt;WorkItemLinkFilter Type="WorkLinkTypeName" /&gt;
&lt;/LinkFilters&gt;</code></pre>
</td>
</tr>

<tr>
<td><p> <strong>ListViewOptions</strong> </p></td>
<td><p>Optional <strong>LinksControlOptions</strong> child element.</p>
<p>Specifies whether or not to group links according to their type. If ```GroupLinks="false"``` (default), links are not grouped by their link type.</p>
<pre><code>&lt;ListViewOptions GroupLinks="true | false" /&gt;</code></pre>
</td>
</tr>

<tr>
<td><p><strong>WorkItemLinkFilter</strong> </p></td>
<td><p>Optional <strong>LinkFilters</strong> child element.</p>
<p>Specifies a work-specific link type which is included within the links control. Users can create relationships to other work items only for those link types included in the links control.</p>
<pre><code>&lt;WorkItemLinkFilter Type=&quot;WorkLinkTypeName&quot; /&gt;
</code></pre>
<p>Examples of work item link types you can specify include: ```System.LinkTypes.Dependency```, ```System.LinkTypes.Hierarchy-Forward```, ```System.LinkTypes.Hierarchy-Reverse```, and ```System.LinkTypes.Related```. </p>
<p>For a complete list, see [Link type reference](../../boards/queries/link-type-reference.md#work-link-types). In addition, you can specify the reference name for a custom link type. </p>
<p>Specify ```System.IncludeAllWorkItemLinks``` to include all work link types.</p>
<blockquote>When you specify  ```System.IncludeAllWorkItemLinks```, the system displays all links in alphabetical order by link type. 
</blockquote>
</td>
</tr>


<tr>
<td><p> <strong>WorkItemTypeFilters</strong> </p></td>
<td><p>Optional container child element of the <strong>LinkFilters</strong> element. Use this element to specify the set of work item types to include in the links control. This element restricts the work item types that users can create links to and those that will appear in the linked list. Specification of this element depends on specifying at least one **WorkItemLinkFilter** element.    
</p>
<pre><code>&lt;WorkItemTypeFilters &gt;
   &lt;Filter WorkItemType=&quot;WorkItemTypeName&quot; /&gt;
&lt;/WorkItemTypeFilters  &gt;
</code>
</pre>

</td>
</tr>

</tbody>
</table>



## Related articles 

You use scoped links controls to support your team and business needs. You [link work items to support traceability and manage dependencies](../../boards/queries/link-work-items-support-traceability.md). To learn more about customizing the web form, see these topics: 

- [WebLayout and Control elements](weblayout-xml-elements.md)  
- [Manage new form rollout](../manage-new-form-rollout.md)
- [New work item experience](../process/new-work-item-experience.md)
- [Customize the new form](../customize-wit-form.md)
