---
title: All WITD XML elements reference
titleSuffix: Azure DevOps & TFS
description: Index to XML syntax elements and main attributes for work item tracking for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: d125917c-9e67-49e6-8274-8b169e76639a
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 02/14/2017
---

# All WITD XML elements reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

You can customize an existing work item type (WIT) or create a WIT to meet your project tracking requirements. A WIT defines the fields, rules, and workflow states and transitions for an item of work that will be tracked for a project, such as a bug, requirement, or risk. You [create a project](../../organizations/projects/create-project.md) either in Azure DevOps Services or an on-premises Team Foundation Server (TFS).  
  
 The root element in each definition of a WIT is the `WITD` element, which must have only one `WORKITEMTYPE` element defined. The name of each WIT must be unique in a project, and each type name must be no more than 128 Unicode characters long.  
  
 To customize or create a WIT definition, you modify the type definition XML file. WITs are scoped to a project within a project collection.  
  
<a name="SyntaxStructure"></a> 
##  WITD syntax structure  
 The following example shows the high-level structure of a WIT definition.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<witd:WITD application="Work item type editor" version="1.0" xmlns:witd="http://schemas.microsoft.com/VisualStudio/2008/workitemtracking/typedef">  
       <WORKITEMTYPE name="bug" refname="Microsoft.VSTS.WorkItemTypes.Bug">  
          <DESCRIPTION> Describes a divergence between required and actual behavior, and tracks the work done to correct the defect and verify the correction.</DESCRIPTION>  
          <GLOBALLISTS> . . . </GLOBALLISTS>  
          <FIELDS> . . . </FIELDS>  
          <WORKFLOW> . . . </WORKFLOW>  
          <FORM> . . . </FORM>  
       </WORKITEMTYPE>  
</witd:WITD>  
```  
  
<a name="ChildElements"></a> 
##WITD child elements  

The structural elements used in the previous example are described in the following table:  
 
 
<table Responsive="true" summary="table">
<tr Responsive="true">
<th scope="col"><p>Element</p></th><th scope="col"><p>Description</p></th>
</tr>
<tr>
<td><p>**WITD**</p></td>
<td><p>The complete WIT definition is wrapped by the tag <strong>WITD</strong>. You can use any name for the application name. The version identifies the WIT schema that may change from one release to the next. Use "1.0".</p>
<pre><code>
&lt;witd:WITD application="Work item type editor" version="1.0"  
xmlns:witd="http://schemas.microsoft.com/VisualStudio/2008/workitemtracking/typedef"&gt;  
   &lt;WORKITEMTYPE&gt;   
&#160;&#160;&#160;. . .  
&lt;/WORKITEMTYPE&gt;  
&lt;/witd:WITD&gt;
</code></pre>
</td>
</tr>
<tr>
<td data-th="Element"><p>**WORKITEMTYPE**</p></td><td data-th="Description"><p>Names of WITs must be unique in a specific project. At run time, you use the name specified by this element. For example, the name can appear as a menu option. In this case, a user could choose <strong>Bug</strong> on the <strong>New Work Item</strong> menu. </p>
<pre><code>
&lt;WORKITEMTYPE name="WorkItemTypeName" refname="WITReferenceName" &gt;  
&#160;&#160;&#160;&lt;DESCRIPTION&gt;Text&lt;/DESCRIPTION&gt;  
&#160;&#160;&#160;&lt;GLOBALLISTS&gt; . . .&lt;/GLOBALLISTS&gt;  
&#160;&#160;&#160;&lt;FIELDS&gt; . . . &lt;/FIELDS&gt;  
&#160;&#160;&#160;&lt;WORKFLOW&gt; . . . &lt;/WORKFLOW&gt;  
&#160;&#160;&#160;&lt;FORM&gt; . . .&lt;/FORM&gt;  
&lt;/WORKITEMTYPE&gt;
</code></pre>
<p>Friendly name (*name*): Appears in the drop-down menus of work item queries. The friendly name must be unique across all WIT names that are defined within a project.  Specify a name no longer than 128 Unicode characters that uses alphanumeric, underscore, and hyphen characters.  </p>
<p>Reference name (*refname*): Specify a name no longer than 70 Unicode characters that uses alphanumeric, underscore, and hyphen characters. The reference name must contain at least one period (.), but no period can appear at the start or end of a name. Also, the reference name cannot start with a number or an underscore, and it cannot have multiple consecutive hyphens, such as (--).</p><p>Do not specify a name that overlaps with the reserved System. <em>XXX</em> and Microsoft. <em>XXX</em> namespaces. </p></td></tr>
<tr><td data-th="Element"><p>**DESCRIPTION**</p></td>
<td data-th="Description"><p>Specifies a string that describes the type of work item that you are defining. The description should help any user who is customizing the WIT.</p>
<blockquote>
**Note**: You can view the description only in the XML definition. You cannot view the description anywhere in the user interface, and it has no relationship to the field <strong>System.Definition</strong>.
</blockquote>

<pre><code>
&lt;DESCRIPTION&gt; DescriptionOfWorkItemType&lt;/DESCRIPTION&gt;
</code></pre>
<p>You specify a string of text that describes the type of work item that you are defining. </p></td></tr
<tr>
<td data-th="Element"><b>GLOBALLISTS</b></td>
<td><p>Contains the global list definitions that are used by the WIT. You use global lists to share pick lists among multiple WITs defined for a project collection. <a href="define-global-lists.md">Define global lists</a> to support cross-group collaboration and ease of maintenance. </p>
<code></pre>
&lt;GLOBALLIST name="globalListName"&gt;  
   &lt;LISTITEM&gt; . . . &lt;/LISTITEM&gt;  
&lt;/GLOBALLIST&gt;  
</code>
<p /></td></tr><tr><td data-th="Element"><p>**FIELDS**</p></td><td data-th="Description"><p>Defines the fields used to track data for the WIT. Within the <strong>FIELDS</strong> element, you [define all the fields](field-definition-element-reference.md) that you want to use to track data. This includes fields that you will use to run queries and generate reports. </p>
<pre><code>
&lt;FIELDS&gt;  
   &lt;FIELD&gt; . . . &lt;/FIELD&gt;  
&lt;/FIELDS&gt;  
</code>
</td></tr>
<tr>
<td data-th="Element"><b>FORM</b></td><td data-th="Description"><p>Specifies the  <a href="design-work-item-form.md">design of the work item form</a> by defining the fields and controls that appear on the form and in what order.</p>

<p><b>For TFS 2015 and earlier versions</b>, the <b>FORM</b> element contains <strong>Layout</strong>, <strong>Control</strong>, <strong>Group</strong>, <strong>TAB</strong>, <strong>TabGroup</strong>, <strong>Splitter</strong>, and other elements. </p>
<code></pre>
&lt;FORM&gt;  
   &lt;Layout&gt; . . . &lt;/Layout&gt;  
&lt;/FORM&gt;  
</code>
<p>**For the Hosted XML and On-premises XML (TFS 2017 and later versions) process models**, the **FORM** element contains <strong>WebLayout</strong>, <strong>Control</strong>, <strong>SystemControls</strong>, <strong>Section</strong>, <strong>Page</strong>,  and other elements. </p>
<pre><code>&lt;WebLayout&gt; 
      &lt;Page&gt;  
	      &lt;Section&gt;  
		      &lt;Group&gt;  
			      &lt;Control&gt; . . . &lt;/Control&gt;
			      &lt;Control&gt; . . . &lt;/Control&gt;
		      &lt;/Group&gt;
	      &lt;/Section&gt;
      &lt;/Page&gt;
. . .
&lt;/WebLayout&gt;</code></pre>

<blockquote>**Important**:  
For the Hosted XML and On-premises XML process models (TFS 2017 and later versions), see [WebLayout and Control elements](weblayout-xml-elements.md). 
</blockquote>
  


</td>
</tr>
<tr><td>**WORKFLOW**</td>
<td><p>Defines the workflow elements that help track the work item status as it moves from a new state to closed or done. This element contains the set of <strong>STATE</strong> and <strong>TRANSITION</strong> elements that define the workflow. The workflow is a set of valid transitions from one state to another and the specific conditions associated with each transition.</p>
<pre><code>
&lt;WORKFLOW&gt;  
      &lt;STATES&gt; . . . &lt;/STATES&gt;  
      &lt;TRANSITIONS&gt; . . . &lt;/TRANSITIONS&gt;  
&lt;/WORKFLOW&gt;  
</code></pre>
</td>
</tr>

</table>
  
  
<a name="PredefinedWITs"></a> 
## Process template work item types  

Upon installing or upgrading an instance of an on-premises TFS, the [default process templates](../../boards/work-items/guidance/choose-process.md) are downloaded to the following directory:  

**For TFS 2017**: 
```  
%programfiles%/TFS 15.0/Tools/Deploy/ProcessTemplateManagerFiles/1033
```  
 
**For TFS 2015**: 
```  
%programfiles%/TFS 14.0/Tools/Deploy/ProcessTemplateManagerFiles/1033
```  
  
WIT definition files are stored in the WorkItem Tracking\TypeDefinitions folder.  
  
To learn how to create or customize a WIT, see [Modify or add a custom work item type](../add-modify-wit.md).  
  
## Related articles 
 
-  [Customize the work tracking experience](../customize-work.md)  
-  [witAdmin: Customize and manage objects for tracking work](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)  
-  [Naming restrictions, Work item tracking objects](../../organizations/settings/naming-restrictions.md)