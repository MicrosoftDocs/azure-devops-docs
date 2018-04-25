---
title: Naming restrictions and conventions 
titleSuffix: VSTS & TFS
description: Length, uniqueness, and special character requirements to meet when labeling objects such as an account, group, server 
ms.technology: devops-collab
ms.prod: devops
ms.topic: reference
ms.assetid: F4ED2B52-EDE9-4F2B-B3B5-A3FB504D84B9
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.date: 03/26/2018
monikerRange: '>= tfs-2013'
---

# Naming restrictions and conventions 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]  

Most components in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) must comply with naming restrictions and conventions. Restrictions help guarantee a consistent user experience and provide compatibility with other applications.  

Common restrictions include not exceeding the character length for a name, not containing special characters, and maintaining uniqueness of names within an object set.


## Computers, accounts, groups, and collections

<a id="CommonRestrictions">   </a>
### Common considerations 

The length restrictions in this topic are measured by the number of Unicode characters permitted. Surrogate characters are composed of two Unicode characters and these will count as two characters against the length restriction. For details, see [About Unicode and Character Sets](http://msdn.microsoft.com/library/windows/desktop/dd317711.aspx). 

As with other operating system files, ASCII control characters (ASCII 1-31) and surrogate combinations are also not allowed. For general information about the operating system restrictions applied to file names, see [Naming Files, Paths, and Namespaces](http://msdn.microsoft.com/library/windows/desktop/aa365247.aspx).

::: moniker range=">= tfs-2013 <= tfs-2018"

<a id="ComputerNames">   </a>

### Computer name 
<a id="computer-name">   </a>

When you install TFS, the computer name where you install TFS is associated with the name of the server.  
Both the operating system and Active Directory impose certain restrictions on computer names as described in these articles:  
*	[Rename the Computer](https://msdn.microsoft.com/library/dd894434.aspx)  
*	[Rename a Computer that Hosts a Stand-Alone Instance of SQL Server](https://msdn.microsoft.com/library/ms143799.aspx)  
*	[Windows Server Active Directory](https://support.microsoft.com/en-us/kb/909264)

::: moniker-end

<a id="AccountNames">   </a>
### User account names
User accounts identify people added to a team project or project collection. These user accounts might correspond to an Active Directory, Azure Active Directory, Windows or other user account types.  

You add existing user accounts. You can't create a user account. To add user accounts to a team project, see [Add users to a team project or team](../security/add-users-team-project.md) . 

User accounts that you add must conform to the following restrictions.  

<table valign="top">
<tbody valign="top">
<tr>
<th width="20%">
<p>Restriction type</p>
</th>
<th>
<p>Restriction</p>
</th>
</tr>
<tr>
<td>
<p>Account name length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 256 Unicode characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Uniqueness </p>
</td>
<td>
<ul>
<li>
<p>Must not match any other user account added to the team project collection</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Reserved group names</p>
</td>
<td>
<ul>
<li>
<p>Must not be named with a $NAMESPACE at either the project or the server level</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Special character restrictions</p>
</td>
<td>
<ul>
<li>
<p>Must not include the following printable characters: "/ \ [ ] : | &lt; &gt; + = ; ? *</p>
</li>
<li>
<p>Must not include nonprintable characters in the ASCII value range of 1-31</p>
</li>
<li>
<p>Must not end in a period (.)</p>
</li>
<li>
<p>Must not include commas (,)</p>
</li>
<li>
<p>Must not include the following Unicode categories: LineSeparator, ParagraphSeparator, Control, Format, OtherNotAssigned  </p>
</li>
</ul>
</td>
</tr>
</tbody>
</table>





<a id="GroupAccountNames">   </a>

### Group name 

Groups enable you to apply certain rights or permissions to a group of users.

On-premises TFS groups can consist of Active Directory group accounts, TFS group accounts, Windows user accounts, Windows group accounts, or any mixture of these types. See [Manage users or groups in TFS](../security/permissions.md).  

Groups that you add must conform to the following restrictions.  

<table>
<tbody valign="top">
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
Group account name length
</td>
<td>
<ul>
<li>
Must not contain more than 256 Unicode characters
</li>
</ul>
</td>
</tr>
<tr>
<td>
Uniqueness
</td>
<td>
<ul>
<li>
Project-level group accounts must not match any other group name in the same project 
</li>
<li>Collection-level group accounts must not match any other name of a group account in the team project collection
</li></ul>
</td>
</tr>
<tr>
<td>
Reserved group names
</td>
<td>
<ul>
<li>
Must not be named $NAMESPACE at either the project or the server level
</li>
</ul>
</td>
</tr>
<tr>
<td>
Special character restrictions
</td>
<td>
<ul>
<li>
Must not include the following printable characters: "/ \ [ ] : | &lt; &gt; + = ; ? *
</li>
<li>
Must not include nonprintable characters in the ASCII value range of 1-31
</li>
<li>
Must not end in a period (.)
</li>
<li>
Must not include commas (,)
</li>
</ul>
</td>
</tr>
</tbody>
</table>


::: moniker range=">= tfs-2013 <= tfs-2018"

<a id="ProjectCollectionNames">   </a>

## Team project collections 

A team project collection identifies a group of team projects and the resources that are associated with those projects. It provides an organizing structure that you can use to define and control a group of team projects within TFS.  

Also, the collection name is part of the connection string used to connect team members to team projects. The default assigned corresponds to *DefaultCollection*. 
[Manage team project collections](../tfs-server/admin/manage-team-project-collections.md) provides more information. 

Names you assign to team project collections must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Length</td>
<td>
<ul>
<li>Must not contain more than 64 Unicode characters
</li>
</ul>
</td>
</tr>
<tr>
<td>
Uniqueness
</td>
<td>
<ul>
<li>
Must not be identical to any other collection name in your on-premises TFS deployment.
</li>
<li>
If your deployment includes SharePoint Products or SQL Server Reporting Services, must not be identical to the name and full path of an existing SharePoint site, report server, or Reporting Services Web site.
</li>
</ul>
</td>
</tr>
<tr>
<td>Special characters</td>
<td>
<ul>
<li>
Must not contain any Unicode control characters or surrogate characters.</li>
<li>Must not contain the following printable characters: / : \ ~ &amp; % ; @ ' " ? &lt; &gt; | # $ * } { , + = [ ]</li>
<li>Must not contain an ellipsis (&hellip;) or a double period (..)</li>
<li>Must not start with an underscore (&#95;)</li>
<li>Must not start or end with a period (.)</li>
</ul>
</td>
</tr>
<tr>
<td>
Reserved names
</td>
<td>
<ul>
<li>Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, AUX, Web, or WEB <br/>
Learn more about reserved names: [File Names, Paths, and Namespaces](https://msdn.microsoft.com/library/aa365247.aspx).
</li>
</ul>
</td>
</tr>
</table>

::: moniker-end

## Team project and work item tracking

<a id="ProjectNames">   </a>

### Team projects

A team project establishes a repository for source code and a place for teams to plan, track progress, and collaborate. The name of the team project is part of the connection string used to connect team members to team projects.

Names you assign to team projects that you create must conform to the following restrictions.  
 
<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Length</td>
<td>
<ul>
<li>Must not contain more than 64 Unicode characters</li>
</ul>
</td>
</tr>
<tr>
<td>
Uniqueness
</td>
<td>
<ul>
<li>Must not be identical to any other name in the team project collection, the SharePoint Web application that supports the collection, or the instance of SQL Server Reporting Services that supports the collection.
</li>
</ul>
</td>
</tr>
<tr>
<td>Special characters</td>
<td>
<ul>
<li>Must not contain any Unicode control characters or surrogate characters</li>
<li>Must not contain the following printable characters: / : \ ~ &amp; % ; @ ' " ? &lt; &gt; | # $ * } { , + = [ ]
</li>
<li>Must not start with an underscore (&#95;)</li>
<li>Must not start or end with a period (.)</li>
</ul>
</td>
</tr>
<tr>
<td>
Reserved names
</td>
<td>
<ul>
<li>
Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, AUX, SERVER, SignalR, DefaultCollection, or Web.
</li>
<li>
Must not be one of the hidden segments used for IIS request filtering like App_Browsers, App_code, App_Data, App_GlobalResources, App_LocalResources, App_Themes, App_WebResources, bin, or web.config.<br/>
Learn more about reserved names: [Naming Files, Paths, and Namespaces](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247.aspx).
</li>
</ul>
</td>
</tr>
</table>


<a id="ProcessTemplates">   </a>

### Process and process templates 

A process defines the building blocks of the work item tracking system as well as other sub-systems you access through VSTS or the web portal for an on-premises TFS. 

> [!NOTE]   
>  **Terminology note**: Both "process" and "process template" refer to an interdependent set of files used to create a team project. [Choose a process](../work/work-items/guidance/choose-process.md) describes the differences among the three default processes available to you.   

Processes you define or customize must conform to the following restrictions.  

<table>
<tbody valign="top">
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Process template name length
</td>
<td>
<ul>
<li>Must not contain more than 256 Unicode characters
</li>
</ul>
</td>
</tr>
<tr>
<td>Process template name uniqueness
</td>
<td>
<ul>
<li>Must be unique across the Team Foundation server.</li>
<li>If you upload a template with the same name as an existing template, the existing template will be overwritten.</li>
</ul>
</td>
</tr>
<tr>
<td>Process template file size
</td>
<td>
<ul>
<li>
Must not exceed 2 GB (gigabytes).
</li>
</ul>
</td>
</tr>
</tbody>
</table>  

<a id="Kanban">   </a>

### Kanban boards 

Your [Kanban board](../Work/kanban/kanban-basics.md) turns your backlog into an interactive signboard, providing a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage, and each card represents a user story (blue cards) or a bug (red cards) at that stage of work. 

You can customize your Kanban boards to match how your team works by adding, removing, or renaming [columns](../Work/kanban/add-columns.md) and [swimlanes](../Work/kanban/expedite-work.md). Columns support the flow of work across the board. Swimlanes allow you to manage different classes of work as horizontal lanes on the board.

Column and swimlane names must conform to the following restrictions.

<table>
<tbody valign="top">
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Length</td>
<td>
<ul>
<li>Must not contain more than 256 Unicode characters</li>
</ul>
</td>
</tr>
<tr>
<td>Uniqueness</td>
<td>
<ul>
<li>
Column names must not be the same as any other column name on the Kanban board
</li>
<li>
Swimlane names must not be the same as any other swimlane name on the Kanban board
</li>
</ul>
</td>
</tr>
<tr>
<td>
Special characters
</td>
<td>
<ul>
<li>
Must not contain any Unicode control characters or surrogate characters
</li>
</ul>
</td>
</tr>
</tbody>
</table>



<a id="TeamNames">   </a>

### Teams 
Team names identify a group of individuals or groups that collectively work together as a team in a team project. Team members use this name to connect to the team or to query against members defined for a team. 

As such, team names must conform to conventions that allow it to be rendered as part of a valid URL. In addition, each team name must be unique within a single project. However, there aren't any restrictions on using the same team name in different team projects within a team project collection. [Add another team or a hierarchy of teams](../Work/scale/multiple-teams.md) provides more information about working with teams.  

Team names must conform to the following restrictions.   

<table>
<tbody valign="top">
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Length
</td>
<td>
<ul>
<li>
Must not contain more than 64 Unicode characters
</li>
</ul>
</td>
</tr>
<tr>
<td>
Uniqueness
</td>
<td>
<ul>
<li>
Must not be identical to any other name in the project
</li>
</ul>
</td>
</tr>
<tr>
<td>
Special characters
</td>
<td>
<ul>
<li>
Must not contain any Unicode control characters or surrogate characters
</li>
<li>
Must not contain the following printable characters: / : \ ~ &amp; % ; @ ' " ? &lt; &gt; | # $ * } { , + = [ ]
</li>
<li>
Must not contain an ellipsis (&hellip;) or a double period (..)
</li>
<li>
Must not start with an underscore (&#95;)
</li>
<li>
Must not start or end with a period (.)
</li>
</ul>
</td>
</tr>
<tr>
<td>
Reserved names
</td>
<td>
<ul>
<li>
Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, or AUX <br/>
Learn more about reserved names: [File Names, Paths, and Namespaces](https://msdn.microsoft.com/library/aa365247.aspx).
</li>
</ul>
</td>
</tr>
</tbody>
</table>

<a id="WorkItems">   </a>

## Work items, work item types and customizations

You use work items to capture information to plan and track your software development projects. With work items, you can describe the work to be done, assign work, track status, and coordinate efforts within your team. Different types of work items -- such as user stories, tasks, bugs, and issues-- track different types of information.  

All work item tracking objects are associated with one or more names. Most have friendly display names and all, except work item types and global lists, are associated with reference names. A friendly name is a unique, user-visible identifier for a field. Using friendly names ensure consistency across all team projects and work item types in a project collection. The system uses the reference name internally and you cannot change it after it is defined.  

Restrictions are placed on several elements associated with work items, including reference and friendly names, field names, and attachment size  

You can [modify or add a custom work item type (WIT)](../work/customize/add-modify-wit.md) to support your team's processes. 

### Attachments  

Files attached to work items must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>File size</p>
</td>
<td>
<ul>
<li>
Must not exceed the maximum size. 
</li>
<li>
Default maximum size: 4,096 kilobytes
</li>
<li>
<p>Absolute maximum size: 2 gigabytes</p>
<p>[Change the maximum attachment size for work items](https://msdn.microsoft.com/library/ms400780.aspx).</p></li>
</ul>
</td>
</tr>
</table>


### Area Path and Iteration Path 

Two work item fields, Area Path and Iteration Path, provide a tree structure hierarchy for grouping work. Area paths group work items by product, functional, or feature area. Iteration paths group work items into sprints, milestones, or time periods in which they'll be worked on.

These multi-node fields use the backslash (&#92;) characters to denote the hierarchy of nodes within the tree structure.  

The names you assign to child nodes to these fields must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Node length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 255 characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Special characters for nodes</p>
</td>
<td>
<ul>
<li>
<p>Must not contain Unicode control characters</p>
</li>
<li>
<p>Must not contain any one of the following characters: &#92; &#47; $ ? &#42; : " &amp; &gt; &lt; &#35; % | +  </p>
</li>
<li>
Must not contain characters prohibited by the local file system. For more information about Windows character restrictions, see [Naming Files, Paths, and Namespaces](https://msdn.microsoft.com/library/windows/desktop/aa365247.aspx).
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Reserved names</p>
</td>
<td>
<ul>
<li>
<p>Must not consist only of a period (.) or two periods (..)</p>
</li>
<li>
<p>Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, or AUX</p>

<p>Learn more about reserved names: [File Names, Paths, and Namespaces](https://msdn.microsoft.com/library/aa365247.aspx).</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Path length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 4000 Unicode characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Path hierarchy depth</p>
</td>
<td>
<ul>
<li>
<p>Must not be more than 14 levels deep</p>
</li>
</ul>
</td>
</tr>
</table>



<a id="WorkItemFields">   </a>

### Field names, work item tracking

Each work item type (WIT) definition contains one or more work item fields. These fields define the information stored for work items based on the WIT. A work item field name uniquely identifies each work item field.  

Work item field names that you add must conform to the following restrictions.  
<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
Length
</td>
<td>
<ul>
<li>Must not contain more than 128 Unicode characters</li>
</ul>
</td>
</tr>
<tr>
<td>Special characters</td>
<td>
<ul>
<li>Must not contain leading or trailing spaces</li>
<li>Must not contain two or more consecutive spaces</li>
<li>Must not contain periods (.)</li>
<li>Must not contain opening or closing square brackets (&#91; &#93;)</li>
</ul>
</td>
</tr>
<tr>
<td>Scope</td>
<td>
<ul>
<li>Work item field names are scoped to the team project collection. If you rename a field name, you change it for all work items and WITs defined within all team projects in the collection. </li>
</ul>
</td>
</tr>
</table>

### Field, link type, and category reference names 

You must define a reference name whenever you add or create a work item field, link type, or category. Each work item field has an associated field reference name. The field reference name uniquely identifies each field and cannot be changed after it's assigned.  

All reference names can be up to 70 Unicode characters long.  

You can define a reference name by using alphanumeric characters, underscore characters, and hyphen characters. Each reference name must contain at least one period (.), but no period can appear at the start or end of a name. A reference name cannot start with a number or an underscore, and it cannot have multiple consecutive hyphens, such as (--).  

Work item field reference names that you add must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
Length
</td>
<td>
<ul>
<li>
Must not contain more than 70 Unicode characters
</li>
</ul>
</td>
</tr>
<tr>
<td>
Special characters
</td>
<td>
<ul>
<li>
Must not contain hyphens (-)
</li>
<li>
Must contain at least one period (.)
</li>
<li>
Must not start or end with a period (.)
</li>
<li>
Must not start with a number
</li>
<li>
Must not start with an underscore (&#95;)
</li>
</ul>
</td>
</tr>
<tr>
<td>
Uniqueness
</td>
<td>
<ul>
<li>
Must not be identical to any other field reference name within the team project collection
</li>
<li>
Must not be identical to any other field reference name after those names are processed by the computer to replace all periods (.) with underscores (&#95;)<br/>
For example, the field reference names ```My._Field``` and ```My_.Field``` would both be processed by the computer to be the same name: ```My__Field```
</li>
</ul>
</td>
</tr>
</table>

**Field reference names and portability** 

The work item type definition language includes the concept of a *field reference name*. Field reference names can help you to port definitions between Team Foundation project collections and also to allow third party integrations to find and refer to specific fields. These names are globally unique, just as a namespace in the .NET Framework application is globally unique.  

Field reference names cannot be renamed. If, for example, you changed the field name "Title" to "Header", the field reference name of that field remains the same. Integrations and internal representations of fields should use the field reference name instead of depending on the field name itself.  
 
The System namespace is used only to define all core system fields that are mandatory for Team Foundation system functions. Team Foundation Server prevents you from creating your own System.X field because it might impede Team Foundation Server functionality.  

The Microsoft namespace is used to define work item tracking fields. These fields are defined in a work item type definition of the TFS process templates. TFS does not prevent you from creating your own Microsoft.X field. However, this practice is strongly discouraged because it might impede Team Foundation Server TFS functionality or the ability for the Configure Features wizard to successfully update a team project after a TFS upgrade.   

Customers and partners can create their own field namespaces for custom work item types.  

For descriptions of system fields and fields defined in the default process templates, see [Index of work item fields](../work/work-items/guidance/work-item-field.md).

<a id="ExamplesFieldReferenceNames">  </a>
    
**Examples of field reference names  **

The following examples show valid field reference names, in various namespaces. Customers and partners can also define their own namespaces to support their custom work item types.   

<table valign="top" width="100%">
<tr >
<th width="31%">System namespace examples </th>
<th width="34%">Microsoft namespace examples</th>
<th width="35%">Other namespace examples</th>
</tr>
<tr valign="top" >
<td>
<p style="font-size: 12px">System.Id<br/>
System.Title<br/>
System.CreatedBy<br/>
System.CreatedDate<br/>
System.ChangedBy<br/>
System.ChangedDate<br/>
System.State<br/>
System.Reason</p>
</td>
<td>
<p style="font-size: 12px">Microsoft.VSTS.Build.FoundIn<br/>
Microsoft.VSTS.Common.Activity<br/>
Microsoft.VSTS.Common.Discipline<br/>
Microsoft.VSTS.Common.Priority<br/>
Microsoft.VSTS.CMMI.TaskType<br/>
Microsoft.VSTS.TCM.AutomationStatus<br/>
Microsoft.VSTS.TCM.TestSuiteType</p>
</td>
<td>
<p>The fictitious company *Fabrikam Fiber* might define the following custom work item fields:</p>
<p style="font-size: 12px">&nbsp;&nbsp;&nbsp;FabrikamFiber.Common.Severity<br/>
&nbsp;&nbsp;&nbsp;FabrikamFiber.Common.Phase<br/>
&nbsp;&nbsp;&nbsp;FabrikamFiber.RiskManagement.RiskType<br/>
&nbsp;&nbsp;&nbsp;FabrikamFiber.RiskManagement.Resolution</p>
<p>The fictitious software company *Contoso Corporation* might define the following work item fields:</p>
<p style="font-size: 12px">&nbsp;&nbsp;&nbsp;Contoso.Common.BusinessPriority<br/>
&nbsp;&nbsp;&nbsp;Contoso.Bug.FoundInPhase<br/>
&nbsp;&nbsp;&nbsp;Contoso.Bug.FixInPhase</p>
</td>

</tr>
</table>



### Field help text

You can specify help text for a WIT field by using the ```HELPTEXT``` element. The system displays this text at run time to help users know what to enter into the field. Help text is scoped to a specific WIT in a specific team project. [Apply a rule to a work item field](../work/customize/set-area-paths.md) provides information on adding help text.

Help text that you add must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 255 Unicode characters</p>
</li>
</ul>
</td>
</tr>
</table>

::: moniker range=">= tfs-2013 <= tfs-2018"
### Global lists 

A global list is a set of list item values that you can use globally across all team project collections within an instance of an on-premises TFS. As you define WITs, you may find that some work item fields share the same set of allowed or suggested values. Global lists enable you to define these values one time and share them across multiple WITs and team projects. See [Define global lists](../work/customize/reference/define-global-lists.md) for details.

A global list, defined using the ```GLOBALLIST``` element contains one or more list items, specified using the ```LISTITEM``` element.

```LISTITEM``` names must conform to the following restrictions.  
<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Length</p>
</td>
<td>
<ul>
<li>Must not contain more than 254 Unicode characters</li>
<li>Must not be empty</li>
</ul>
</td>
</tr>
<tr>
<td>Special characters</td>
<td>
<ul>
<li>
<p>Must not contain leading or trailing white space</p>
</li>
<li>
<p>Must not contain two consecutive spaces</p>
</li>
<li>
<p>Must not contain backslash (&#92;) characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Scope</p>
</td>
<td>
<ul>
<li>Since global lists are available among all projects, they must not contain elements defined at the project level, such as project-specific group account definitions.</li>
</ul>
</td>
</tr>
</table>

Global lists must conform to the following restrictions.

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Number of items</td>
<td>
<ul>
<li>Can't be empty. The global list must contain at least one ```LISTITEM``` element.</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Uniqueness</p>
</td>
<td>
<ul>
<li>The global list name must not be identical to any other global list name within the team project collection.
</li>
</ul>
</td>
</tr>
</table>

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
<a id="TeamBuild">   </a>

##Team Foundation Build   

Team Foundation Build lets you manage all the aspects of the build process on a single computer. By using Team Foundation Build, you can synchronize the sources, compile the application, run associated unit tests, perform code analysis, release builds on a file server, and publish build reports.

### Build computer 

Team Foundation Build is a separate installation from the TFS application tier, data tier, or Visual Studio client. You may designate a separate computer. Otherwise, you can install the build side-by-side on the client computer or on the servers.  

Your on-premises build computer must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>Disk space
</td>
<td>
Must contain sufficient space for the build (insufficient space will lead to failed builds).
</td>
</tr>
<tr>
<td>
<p>Build directory</p>
</td>
<td>Must be a local path (for example, *C:\BuildDirectory*).
</td>
</tr>
<tr>
<td>
Drop location directory</td>
<td>
Must be a UNC path (for example, ```\\server\share```).
</td>
</tr>
<tr>
<td>
<p>Drop location permissions</p>
</td>
<td>Each generated build is put in a new directory in the drop folder.
<ul>
<li>
The Team Foundation Server Service account (for example, *Domain*&#92;TFSSERVICE) must have Full Control permission access to the UNC drop location.
</li>
<li>The UNC drop location must be a shared folder.
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Team Foundation Build Service account</p>
</td>
<td>
If you change the TFS Service account after the initial installation, you must make sure that the following conditions are true.
<ul>
<li>The account is a member of the Build Services group.
</li>
<li>The account has read/write permissions to the temporary folders and the ASP.NET temporary folder.
</li>
<li>The account has Full Control permission to the build directory and drop location.
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Firewall issues</p>
</td>
<td>
If the build computer is firewall enabled, make sure that the program **tfsbuildservice** is in the exceptions list.
</td>
</tr>
</table>

### Build types

Build types configure the conditions under which a single solution or a set of solutions in a team project will be built. To conduct a build, you must either create a new build type or use an existing [build type](https://msdn.microsoft.com/library/ms181715.aspx).

Build type names  must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Uniqueness</p>
</td>
<td>
<ul>
<li>
<p>Must not be the same as any other build type name in the team project</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Special characters</p>
</td>
<td>
<ul>
<li>
<p>Must not contain the following printable character: $</p>
</li>
</ul>
</td>
</tr>
</table>

### Build quality 

The build quality lets you attach a quality level or completion state to a completed build. Team Foundation Build also lets you create new values for the [build quality type](https://msdn.microsoft.com/library/ms181716.aspx). See [Rate the quality of a completed build](https://msdn.microsoft.com/library/ms181734.aspx) for a list of the default build quality values.

Build quality names must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Length</p>
</td>
<td>
<p>Must not contain more than 256 Unicode characters</p>
</td>
</tr>
<tr>
<td>
<p>Uniqueness</p>
</td>
<td>
<p>Must not be the same as any other Build Quality name in the Team Foundation Build computer</p>
</td>
</tr>
</table>

<a id="SourceControl">   </a>

::: moniker-end


##Team Foundation version control 

### Version control names
 
Team Foundation version control provides a central repository for files and the commands that are required to manage those files across a team. It also provides customizable check-in policies, branching, merging, shelving, and many other features.

### Version control paths 

Version control paths must conform to the following restrictions. See also [Optimize your workspace](https://msdn.microsoft.com/library/ms181378.aspx).

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Server source control folder path length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 259 Unicode characters for a single folder or file name.</p>
</li>
<li>
<p>Must not contain more than 388 Unicode characters for a directory.</p>
</li>
<li>
<p>Must not contain more than 399 Unicode characters for a combined directory and file name.</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Local folder path length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 248 Unicode characters for a directory.</p>
</li>
<li>
<p>Must not contain more than 260 Unicode characters for a combined directory and file name.</p>
</li>
</ul>
</td>
</tr>
</table>



### Version control files

The version control system stores many different types of files. [Set up Team Foundation version control on your dev machine](https://msdn.microsoft.com/library/ms181384.aspx) provides details on how to add existing Visual Studio projects or solutions.

Files and folders you add to Team Foundation version control must conform to the following restrictions.

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Files and folders </p>
</td>
<td>
<ul>
<li>Names must not contain the following printable characters: &#92; &#47; : &#42; ? " &lt; &gt; | ; </li>
<li>
Folders must not reside outside the mapped directory for the active workspace
</li>
</ul>
</td>
</tr>
<tr>
<td>
File names
</td>
<td>
<ul>
<li>
Must not begin with a $
</li>
<li>Must not contain the following printable characters: &#92; &#47; : &#42; ? " &lt; &gt; | ; </li>
</ul>
</td>
</tr>
</table>

### Version control labels

In Team Foundation version control, a label is a name applied to a specific set of revisions. You can attach labels to a set of unrelated files in version control. This lets you retrieve the files or act upon them as a group. The following table describes the restrictions put on label names.

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 64 Unicode characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Special characters</p>
</td>
<td>
<ul>
<li>
<p>Cannot end with a space ( ) or period (.)</p>
</li>
<li>
<p>Must not contain the following printable characters: &#92; &#47; "  : &lt; &gt;  | &#42; ? @ ; </p>
</li>
</ul>
</td>
</tr>
</table>

### Shelvesets 

Shelvesets enable you to set aside temporarily a batch of pending changes and then, as an option, remove the pending changes from your workspace. Later, you can restore the changes in a shelveset to your workspace or put them into another user's workspace.

Shelveset names must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 64 Unicode characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Special characters</p>
</td>
<td>
<ul>
<li>

<p>Must not contain the following printable characters: &#92; &#47;  "  : &lt; &gt;  | &#42; ? ; </p>
</li>
</ul>
</td>
</tr>
</table>

### Workspaces

A workspace is a client-side copy of the files and folders in Team Foundation version control. When you create multiple workspaces, you can have different versions of the same version control folder on a client computer. [Create and work with workspaces](https://msdn.microsoft.com/library/ms181383.aspx) provides more details. 

Workspace names must conform to the following restrictions.  

<table>
<tr>
<th width="20%">Restriction type</th>
<th>Restriction</th>
</tr>
<tr>
<td>
<p>Length</p>
</td>
<td>
<ul>
<li>
<p>Must not contain more than 64 Unicode characters</p>
</li>
</ul>
</td>
</tr>
<tr>
<td>
<p>Special characters</p>
</td>
<td>
<ul>
<li>
<p>Cannot end with a space ( )</p>
</li>
<li><p>Must not contain the following printable characters: &#92; &#47;  "  : &lt; &gt;  | &#42; ? ; </p>
</li>
</ul>
</td>
</tr>
</table>

<a id="page-title-names"></a>
## Wiki page title naming conventions

Each wiki page corresponds to a file within the wiki git repo.  
Names you assign to a wiki page title must conform to the following restrictions.

|Restriction type| Restriction|
|---------------|-----------|
| File name     | The fully qualified page path should not exceed 235 characters.  |
| Uniqueness    | Page titles are case sensitive and must be unique within the wiki hierarchy.|
|Special characters| <ul><li>Must not contain any Unicode control characters or surrogate characters</li><li>Must not contain the following printable characters:     / : < > \ * ? \ &#124; - #</li><li>Must not start or end with a period (.)</li><li>Titles of pages added offline titles must not contain a blank space.</li></ul>|
| File size     | Must not exceed the maximum of 15 MB |
| Attachment file size |  Must not exceed the maximum of 10 MB  |



## Related articles 
*	[Customize work tracking objects to support your team's processes](../work/customize/customize-work.md)
*	[Customize a process for import into VSTS](../work/customize/import-process/customize-process.md)
*	[Customize a process template (on-premises TFS)](../work/customize/reference/process-templates/customize-process.md)
