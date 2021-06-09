---
title: Restrictions and conventions for naming objects
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Requirements for consistency in labeling objects like organizations, projects, tags, templates, and more, by length, uniqueness, and special characters. 
ms.technology: devops-settings
ms.topic: reference
ms.assetid: F4ED2B52-EDE9-4F2B-B3B5-A3FB504D84B9
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 05/17/2021
---

# Naming restrictions and conventions  

[!INCLUDE [temp](../../includes/version-all.md)]  

Most components in Azure DevOps must follow naming restrictions and conventions. Restrictions help guarantee a consistent user experience and provide compatibility with other applications.  

Common restrictions include not exceeding the character length for a name, not containing special characters, and maintaining uniqueness of names within an object set.


## Computers, accounts, groups, and collections

<a id="CommonRestrictions">   </a>

### Common considerations 

The length restrictions in this article are measured by the number of Unicode characters permitted. Surrogate characters are composed of two Unicode characters, which count as two characters against the length restriction. For details, see [About Unicode and Character Sets](/windows/win32/intl/about-unicode-and-character-sets). 

As with other operating system files, ASCII control characters (ASCII 1-31) and surrogate combinations are also not allowed. For general information about the operating system restrictions applied to file names, see [Naming Files, Paths, and Namespaces](/windows/win32/fileio/naming-a-file).

::: moniker range=">= tfs-2013 < azure-devops"

<a id="ComputerNames">   </a>

### Computer name 

<a id="computer-name">   </a>

The computer name where you install Azure DevOps is associated with the name of the server. 
Both the operating system and Active Directory impose certain restrictions on computer names as described in these articles:  
*    [Rename a Computer that Hosts a Stand-Alone Instance of SQL Server](/sql/database-engine/install-windows/rename-a-computer-that-hosts-a-stand-alone-instance-of-sql-server)  
*    [Windows Server Active Directory](https://support.microsoft.com/en-us/help/909264/naming-conventions-in-active-directory-for-computers-domains-sites-and)

::: moniker-end

<a id="AccountNames">   </a>

### User account names

User accounts identify people added to a project or project collection. User accounts might correspond to an Active Directory, Azure Active Directory, Windows, or other user account types.  

You add existing user accounts. You can't create a user account. To add user accounts to a  project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md) . 

User accounts that you add must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Account name length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 256 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must not match any other user account added to the project collection
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Reserved group names
   :::column-end:::
   :::column span="2":::
      - Must not be named with a $NAMESPACE at either the project or the server level
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not include the following printable characters: `"/ \ [ ] : | < > + = ; ? *`
      - Must not include non-printable characters in the ASCII value range of 1-31
      - Must not end in a period (.)
      - Must not include commas (,)
      - Must not include the following Unicode categories: LineSeparator, ParagraphSeparator, Control, Format, OtherNotAssigned
   :::column-end:::
:::row-end:::
---

[!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

<a id="GroupAccountNames">   </a>

### Security group name 

Azure DevOps security groups enable you to apply certain rights or permissions to a group of users.

On-premises groups may consist of Active Directory group accounts, Azure DevOps security groups , Windows user accounts, Windows group accounts, or any mixture of these types. For more information, see [Add AD/Azure AD users or groups to a built-in security group](../../organizations/security/add-ad-aad-built-in-security-groups.md).  

Security groups that you add must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Security group account name length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 256 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Project-level group accounts must not match any other group name in the same project
      - Collection-level group accounts must not match any other name of a group account in the project collection 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Reserved group names
   :::column-end:::
   :::column span="2":::
      - Must not be named with a $NAMESPACE at either the project or the server level
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not include the following printable characters: &quot;/ \ [ ] : | &lt; &gt; + = ; ? *
      - Must not include non-printable characters in the ASCII value range of 1-31
      - Must not end in a period (.)
      - Must not include commas (,)
   :::column-end:::
:::row-end:::
---

::: moniker range=">= tfs-2013 <= tfs-2018"

<a id="ProjectCollectionNames">   </a>

## Project collections 

A project collection identifies a group of projects and the resources that are associated with those projects. It provides an organizing structure that you can use to define and control a group of projects within TFS.  

Also, the collection name is part of the connection string used to connect team members to projects. The default assigned corresponds to *DefaultCollection*. 
[Manage project collections](/azure/devops/server/admin/manage-project-collections) provides more information. 

Names you assign to project collections must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must not be identical to any other collection name in your on-premises deployment
      - If your deployment includes SharePoint Products or SQL Server Reporting Services, they can't be identical to the name and full path of an existing SharePoint site, report server, or Reporting Services website
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Reserved names
   :::column-end:::
   :::column span="2":::
      - Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, AUX, Web, or WEB
      For more information about reserved names, see <a href="/windows/win32/fileio/naming-a-file">File Names, Paths, and Namespaces</a>
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain any Unicode control characters or surrogate characters.
      - Must not contain the following printable characters: `/ : \ ~ &amp; % ; @ &#39; &quot; ? &lt; &gt; | # $ * } { , + = [ ]`
      - Must not contain an ellipsis (&hellip;) or a double period (..)
      - Must not start with an underscore (&#95;)
      - Must not start or end with a period (.)
   :::column-end:::
:::row-end:::
---

::: moniker-end

## Project and work item tracking

<a id="ProjectNames">   </a>

### Projects

A project establishes a repository for source code and a place for teams to plan, track progress, and collaborate. The name of the  project is part of the connection string used to connect team members to projects.

Names you assign to projects that you create must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must not be identical to any other name in the project collection, the SharePoint Web application that supports the collection, or the instance of SQL Server Reporting Services that supports the collection
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Reserved names
   :::column-end:::
   :::column span="2":::
      - Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, AUX, SERVER, SignalR, DefaultCollection, or Web
      - Must not be one of the hidden segments used for IIS request filtering like App_Browsers, App_code, App_Data, App_GlobalResources, App_LocalResources, App_Themes, App_WebResources, bin, or web.config.
      For more information about reserved names, see <a href="/windows/win32/fileio/naming-a-file">Naming Files, Paths, and Namespaces</a>.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain any Unicode control characters or surrogate characters
      - Must not contain the following printable characters: `/ : \ ~ &amp; % ; @ &#39; &quot; ? &lt; &gt; | # $ * } { , + = [ ]`
      - Must not start with an underscore (&#95;)
      - Must not start or end with a period (.)
   :::column-end:::
:::row-end:::
--- 


### Area Path and Iteration Path 

Two work item fields, **Area Path** and **Iteration Path**, provide a tree structure hierarchy for grouping work. Area paths group work items by product, functional, or feature area. Iteration paths group work items into sprints, milestones, or time periods for addressing those work items.

These multi-node fields use the backslash (&#92;) characters to denote the hierarchy of nodes within the tree structure.  

The names you assign to child nodes to these fields must conform to the following restrictions.  


[!INCLUDE [area-iteration-paths](includes/name-restrictions/area-iteration-paths.md)] 


<a id="ProcessTemplates">   </a>

### Process and process templates 

A process defines the building blocks of the work item tracking system and other subsystems that you have access to after connecting to a project.  

> [!NOTE]   
>  **Terminology note**: Both "process" and "process template" refer to an interdependent set of files used to create a project. [Choose a process](../../boards/work-items/guidance/choose-process.md) describes the differences among the three default processes available to you.   

Processes you define or customize must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      Length
   :::column-end:::
   :::column span="1":::
      - Must not contain more than 256 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must be unique across Azure DevOps
      - If you upload a template with the same name as an existing template, the existing template is overwritten
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Process template file size
   :::column-end:::
   :::column span="2":::
      - Must not exceed 2 GB (gigabytes)
   :::column-end:::
:::row-end:::
---

<a id="Kanban">   </a>

### Kanban boards 

Your [Kanban board](../../boards/boards/kanban-basics.md) turns your backlog into an interactive signboard, providing a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage, and each card represents a user story (blue cards) or a bug (red cards) at that stage of work. 

Customize your Kanban boards by adding, removing, or renaming [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md). Columns support the flow of work across the board. Swimlanes allow you to manage different classes of work as horizontal lanes on the board.

Column and swimlane names must conform to the following restrictions.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 256 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Column names must not be the same as any other column name on the Kanban board
      - Swimlane names must not be the same as any other swimlane name on the Kanban board
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain any Unicode control characters or surrogate characters
   :::column-end:::
:::row-end:::
---

<a id="TeamNames">   </a>

### Teams 

Team names identify a group of individuals or groups that collectively work together as a team in a project. Team members use this name to connect to the team or to query against members defined for a team. 

As such, team names must conform to conventions that allow them to be rendered as part of a valid URL. Each team name must be unique within a single project. However, there aren't any restrictions on using the same team name in different projects within a project collection. [Add another team or a hierarchy of teams](../../organizations/settings/add-teams.md) provides more information about working with teams.  

Team names must conform to the following restrictions.   

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="1":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="1":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="1":::
      - Must not be identical to any other name in the project
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Reserved names
   :::column-end:::
   :::column span="1":::
      - Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, or AUX
      For more information about reserved names, see <a href="/windows/win32/fileio/naming-a-file">File Names, Paths, and Namespaces</a>.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="1":::
      - Must not contain any Unicode control characters or surrogate characters
      - Must not contain the following printable characters: `/ : \ ~ &amp; % ; @ &#39; &quot; ? &lt; &gt; | # $ * } { , + = [ ]`
      - Must not contain an ellipsis (&hellip;) or a double period (..)
      - Must not start with an underscore (&#95;)
      - Must not start or end with a period (.)
   :::column-end:::
:::row-end:::
---

<a id="WorkItems">   </a>

## Work items, work item types, and customizations

You use work items to capture information to plan and track your software development projects. With work items, you can describe the work to be done, assign work, track status, and coordinate efforts within your team. Different types of work items&mdash;such as user stories, tasks, bugs, and issues&mdash;track different types of information.  

All work item tracking objects are associated with one or more names. Most have friendly display names, except work item types and global lists, which are associated with reference names. A friendly name is a unique, user-visible identifier for a field. Using friendly names ensures consistency across projects and work item types in a project collection. The system uses the reference name internally and you can't change it after it's defined.  

There are restrictions on several elements that are associated with work items, including reference and friendly names, field names, and attachment size.  

You can [modify or add a custom work item type (WIT)](../../reference/add-modify-wit.md) to support your team's processes. 

### Attachments  

Files attached to work items must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="1":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      File size
   :::column-end:::
   :::column span="1":::
      - Must not exceed the maximum size
      - Default maximum size: 4,096 kilobytes
      - Absolute maximum size: 2 gigabytes
      <a href="../../reference/xml/change-maximum-attachment-size-work-items.md">Change the maximum attachment size for work items</a>.</p></li>
   :::column-end:::
:::row-end:::
---


<a id="WorkItemFields">   </a>

### Field names, work item tracking

Each work item type (WIT) definition contains one or more work item fields. These fields define the information stored for work items based on the WIT. A work item field name uniquely identifies each work item field.  

Work item field names that you add must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="1":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="1":::
      - Must not contain more than 128 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="1":::
      - Field names must contain at least one alphabetic character
      - Must not contain any one of the following characters: `.,;'`:~\/\*|?"&%$!+=()[]{}<>-`
      - Must not contain leading or trailing spaces
      - Must not contain two or more consecutive spaces
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Scope
   :::column-end:::
   :::column span="1":::
      - Must be unique within the organization or project collection
      Work item field names are scoped to the project collection. If you rename a field name, you change it for all work items and WITs defined within all projects in the collection.
   :::column-end:::
:::row-end:::
---
  
### Field, link type, and category reference names 

Define a reference name whenever you add or create a work item field, link type, or category. Each work item field has an associated field reference name. The field reference name uniquely identifies each field and can't be changed after it's assigned.  

All reference names can be up to 70 Unicode characters long.  

Define a reference name by using alphanumeric characters, underscore characters, and hyphen characters. Each reference name must contain at least one period (.), but no period can appear at the start or end of a name. A reference name must not start with a number or an underscore, and it can't have multiple consecutive hyphens, such as (--).  

Work item field reference names that you add must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="1":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="1":::
      - Must not contain more than 70 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="1":::
      - Must not be identical to any other field reference name within the project collection
      - Must not be identical to any other field reference name after those names get processed by the computer to replace all periods (.) with underscores (&#95;)<br/>
For example, the field reference names `My.*Field*` and `My.Field` would both be processed by the computer to be the same name: `My__Field`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="1":::
      - Must not contain hyphens (-)
      - Must contain at least one period (.)
      - Must not start or end with a period (.)
      - Must not start with a numberMust not start with an underscore (&#95;)
   :::column-end:::
:::row-end:::
---

**Field reference names and portability** 

The work item type definition language includes the concept of a *field reference name*. Field reference names can help you to port definitions between Team Foundation project collections and also to allow third-party integrations to find and refer to specific fields. These names are globally unique, just as a namespace in the .NET Framework application is globally unique.  

Field reference names cannot be renamed. If for example, you changed the field name "Title" to "Header", the field reference name of that field remains the same. Integrations and internal representations of fields should use the field reference name instead of depending on the field name itself.  
 
The System namespace is used only to define all core system fields that are mandatory for Team Foundation system functions. You're prevented from creating your own System.X field because it might impede functionality.  

The Microsoft namespace is used to define work item tracking fields. These fields are defined in a work item type definition of the process templates. You're not prevented from creating your own Microsoft.X field. However, we discourage creating your own field because it might impede functionality or the ability for the Configure Features wizard to successfully update a project after an upgrade.   

Customers and partners can create their own field namespaces for custom work item types.  

For descriptions of system fields and fields defined in the default process templates, see [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).

<a id="ExamplesFieldReferenceNames">  </a>
    
**Examples of field reference names**

The following examples show valid field reference names, in various namespaces. Customers and partners can also define their own namespaces to support their custom work item types.   

:::row:::
   :::column span="1":::
      **System namespace examples**
   :::column-end:::
   :::column span="1":::
      **Microsoft namespace examples**
   :::column-end:::
   :::column span="1":::
      **Other namespace examples**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      System.Id
      System.Title
      System.CreatedBy
      System.CreatedDate
      System.ChangedBy
      System.ChangedDate
      System.State
      System.Reason
   :::column-end:::
   :::column span="1":::
      Microsoft.VSTS.Build.FoundIn
      Microsoft.VSTS.Common.Activity
      Microsoft.VSTS.Common.Discipline
      Microsoft.VSTS.Common.Priority
      Microsoft.VSTS.CMMI.TaskType
      Microsoft.VSTS.TCM.AutomationStatus
      Microsoft.VSTS.TCM.TestSuiteType
   :::column-end:::
   :::column span="1":::
      The fictitious company Fabrikam Fiber might define the following custom work item fields:

       FabrikamFiber.Common.Severity
       FabrikamFiber.Common.Phase
       FabrikamFiber.RiskManagement.RiskType
       FabrikamFiber.RiskManagement.Resolution

      The fictitious software company Contoso Corporation might define the following work item fields:

       Contoso.Common.BusinessPriority
       Contoso.Bug.FoundInPhase
       Contoso.Bug.FixInPhas
   :::column-end:::
:::row-end:::
---

::: moniker range=">= tfs-2013 < azure-devops"

### Field help text

The system displays help text at run time to help users know what to enter into the field. Help text is scoped to a specific work item type in a specific project. 

For the Inheritance process, you specify help text for a field through the **Edit field** dialog, **Definition** tab, **Description**. See [Add a custom field to a work item type](work/add-custom-field.md). For the On-premises XML process, you specify help text by using the ```HELPTEXT``` element. See [Add or modify a field to track work](../../reference/add-modify-field.md#add-rules-to-a-field).

Help text that you add must conform to the following restrictions. 

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 255 Unicode characters
   :::column-end:::
:::row-end:::
---

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

### Global lists 

A global list is a set of list item values that you can use globally across all project collections within an instance of an on-premises TFS. As you define WITs, you may find that some work item fields share the same set of allowed or suggested values. Global lists enable you to define these values one time and share them across multiple WITs and projects. See [Define global lists](../../reference/xml/define-global-lists.md) for details.

A global list, defined using the ```GLOBALLIST``` element contains one or more list items, specified using the ```LISTITEM``` element.

```LISTITEM``` names must conform to the following restrictions.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 254 Unicode characters
      - Must not be empty
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain leading or trailing white space
      - Must not contain two consecutive spaces
      - Must not contain backslash (\) characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Scope
   :::column-end:::
   :::column span="2":::
      - Since global lists are available among all projects, they must not contain elements defined at the project level, such as project-specific group account definitions.
   :::column-end:::
:::row-end:::
---

Global lists must conform to the following restrictions.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Number of items
   :::column-end:::
   :::column span="2":::
      - Can't be empty. The global list must contain at least one `LISTITEM` element.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Can't be empty. The global list must contain at least one `LISTITEM` element.
   :::column-end:::
:::row-end:::
---

::: moniker-end

### Work item tags

Work item tags correspond to one or two keyword phrases that 
support your needs to filter work tracking tools such as backlogs, boards, and queries or define queries. To learn more, see [Add work item tags to categorize and filter lists and boards](../../boards/queries/add-tags-to-work-items.md)

Tag names must conform to the following restrictions. 

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 400 characters, cannot be null or empty
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain separator characters: `,` or `;`
      - Must not contain Unicode control or format characters, such as a line feed, paragraph separator, carriage return, or other mismatched surrogate characters 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      Scope
   :::column-end:::
   :::column span="1":::
      - Since global lists are available among all projects, they must not contain elements defined at the project level, such as project-specific group account definitions.
   :::column-end:::
:::row-end:::
---

::: moniker range=">= tfs-2013 <= tfs-2018"

<a id="TeamBuild">   </a>

## Team Foundation Build   

Team Foundation Build lets you manage all the aspects of the build process on a single computer. By using Team Foundation Build, you can synchronize the sources, compile the application, run associated unit tests, perform code analysis, release builds on a file server, and publish build reports.

### Build computer 

Team Foundation Build is a separate installation from the TFS application tier, data tier, or Visual Studio client. You may choose a separate computer. Otherwise, you can install the build side by side on the client computer or on the servers.  

Your on-premises build computer must conform to the following restrictions.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Disk space
   :::column-end:::
   :::column span="2":::
      - Must contain sufficient space for the build (insufficient space leads to failed builds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Build directory
   :::column-end:::
   :::column span="2":::
      - Must be a local path (for example, <em>C:\BuildDirectory</em>)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Drop location directory
   :::column-end:::
   :::column span="2":::
      - Must be a UNC path (for example, `\server\share`)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Drop location permissions
   :::column-end:::
   :::column span="2":::
      Each generated build is put in a new directory in the drop folder.
      - The Team Foundation Server Service account (for example, <em>Domain</em>&#92;TFSSERVICE) must have Full Control permission access to the UNC drop location
      - The UNC drop location must be a shared folder
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Team Foundation Build Service account
   :::column-end:::
   :::column span="2":::
      If you change the TFS Service account after the initial installation, you must make sure that the following conditions are true
      - The account is a member of the Build Services group
      - The account has read/write permissions to the temporary folders and the ASP.NET temporary folder
      - The account has Full Control permission to the build directory and drop location
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Firewall issues
   :::column-end:::
   :::column span="2":::
      If the build computer is firewall enabled, make sure that the program <strong>tfsbuildservice</strong> is in the exceptions list
   :::column-end:::
:::row-end:::
---

### Build types

Build types configure the conditions under which a single solution or a set of solutions in a project are built. To conduct a build, you must either create a new build type or use an existing [build type](../../pipelines/create-first-pipeline.md).

Build type names must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must not be the same as any other build type name in the project
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain the following printable character: `$`
   :::column-end:::
:::row-end:::
---

### Build quality 

The build quality lets you attach a quality level or completion state to a completed build. Team Foundation Build also lets you create new values for the [build quality type](../../pipelines/create-first-pipeline.md). See [Rate the quality of a completed build](/previous-versions/ms181734(v%3dvs.140)) for a list of the default build quality values.

Build quality names must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 256 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must not be the same as any other Build Quality name in the Team Foundation Build computer
   :::column-end:::
:::row-end:::
---

::: moniker-end

<a id="SourceControl">   </a>

### Team Foundation version control (TFVC) names and paths
 
TFVC provides a central repository for files and the commands that are required to manage those files across a team. It also provides customizable check-in policies, branching, merging, shelving, and many other features.

Version control paths must conform to the following restrictions. See also [Optimize your workspace](../../repos/tfvc/optimize-your-workspace.md).

In the web portal and REST API, certain operations have a more restrictive path length than Visual Studio and TF.exe clients. These operations include Edit, Rename, and Delete, and occur because the web portal/REST uses a randomly generated workspace for concurrency when pending the changes.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Server source control folder path length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 259 Unicode characters for a single folder or file name
      - Must not contain more than 388 Unicode characters for a directory
      - Must not contain more than 399 Unicode characters for a combined directory and file name
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Local folder path length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 248 Unicode characters for a directory
      - Must not contain more than 260 Unicode characters for a combined directory and file name
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Web portal and REST-specific length restrictions
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 215 Unicode characters for a combined project name, directory, and file name
   :::column-end:::
:::row-end:::
---

## Azure Repos

A Git repo in Azure Repos establishes a repository for source code. Each project can contain multiple Git repos. The names you assign to Git repos that you create must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Uniqueness
   :::column-end:::
   :::column span="2":::
      - Must not be identical to any other Git repo name in the project
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain any Unicode control characters or surrogate characters
      - Must not contain the following printable characters: `/ : \ ~ &amp; % ; @ &#39; &quot; ? &lt; &gt; | # $ * } { , + = [ ]`
      - Must not start with an underscore (&#95;)
      - Must not start or end with a period (.)
   :::column-end:::
:::row-end:::
---

> [!IMPORTANT]
> Although you can include spaces within repo names, we don't recommend that you do so.

For more information on naming restrictions for other Git items such as branches and tags, see [git check-ref-format](https://git-scm.com/docs/git-check-ref-format).

## TFVC files

The version control system stores many different types of files. [Set up Team Foundation version control on your dev machine](../../repos/tfvc/set-up-team-foundation-version-control-your-dev-machine.md) provides details on how to add existing Visual Studio projects or solutions.

Files and folders you add to Team Foundation version control must conform to the following restrictions.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Files and folders
   :::column-end:::
   :::column span="2":::
      - Names must not contain the following printable characters: &#92; &#47; : &#42; ? &quot; &lt; &gt; | ; 
      - Folders must not be outside the mapped directory for the active workspace
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Files names
   :::column-end:::
   :::column span="2":::
      - Must not begin with a `$`
      - Must not contain the following printable characters: &#92; &#47; : &#42; ? &quot; &lt; &gt; | ; 
   :::column-end:::
:::row-end:::
---

## TFVC Labels

In Team Foundation version control (TFVC), a label is a name applied to a specific set of revisions. You can attach labels to a set of unrelated files in version control, which lets you retrieve the files or act upon them as a group. The following table describes the restrictions put on label names.

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Can&#39;t end with a space ( ) or period (.)
      - Must not contain the following printable characters: &#92; &#47; &quot; : &lt; &gt; &#42; ? @ | ;
   :::column-end:::
:::row-end:::
---

## TFVC Shelvesets 

Shelvesets enable you to set aside temporarily a batch of pending changes and then, as an option, remove the pending changes from your workspace. Later, you can restore the changes in a shelveset to your workspace or put them into another user's workspace.

Shelveset names must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not contain the following printable characters: &#92; &#47;  &quot;  : &lt; &gt; | &#42; ? ;
   :::column-end:::
:::row-end:::
---

## TFVC workspaces

A workspace is a client-side copy of the files and folders in Team Foundation version control (TFVC). When you create multiple workspaces, you can have different versions of the same version control folder on a client computer. [Create and work with workspaces](../../repos/tfvc/create-work-workspaces.md) provides more details. 

Workspace names must conform to the following restrictions.  

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Length
   :::column-end:::
   :::column span="2":::
      - Must not contain more than 64 Unicode characters
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Special characters
   :::column-end:::
   :::column span="2":::
      - Must not end with a space ( )
      - Must not contain the following printable characters: &#92; &#47;  &quot;  : &lt; &gt;  | &#42; ? ;
   :::column-end:::
:::row-end:::
---

## Azure Pipelines

:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="2":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Job name
   :::column-end:::
   :::column span="2":::
      - Must only contain alphanumeric characters and `'_'`
      - Must not start with a number
      - Must have a unique name
      - Must have the following pattern: `^[-_A-Za-z0-9]*$`
      - Must not contain keywords, for example: "deployment"
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Stage name
   :::column-end:::
   :::column span="2":::
      - Must only contain alphanumeric characters and `'_'`
      - Must not start with a number
      - Must not contain keywords, for example: "deployment"
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Expressions
   :::column-end:::
   :::column span="2":::
      - Must start with `a-Z` or `_AND`, followed by `a-Z`, `0-9`, or `_`
   :::column-end:::
:::row-end:::
---

<a id="page-title-names"></a>

## Wiki page title naming conventions

[!INCLUDE [temp](../../project/wiki/includes/wiki-naming-conventions.md)]

## Related articles
- [Azure Artifacts count and size limits](../../artifacts/reference/limits.md)
- [Work tracking, process, and project limits](./work/object-limits.md)
- [Customize work tracking objects to support your team's processes](../../reference/customize-work.md)
- [Customize a process template](../../reference/process-templates/customize-process.md)
