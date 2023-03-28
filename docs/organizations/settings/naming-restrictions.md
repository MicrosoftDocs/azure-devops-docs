---
title: Restrictions and conventions for naming objects
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Requirements for consistency in labeling objects like organizations, projects, tags, templates, and more, by length, uniqueness, and special characters. 
ms.subservice: azure-devops-settings
ms.topic: conceptual
ms.assetid: F4ED2B52-EDE9-4F2B-B3B5-A3FB504D84B9
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/28/2023
---

# Naming restrictions and conventions  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

Most components in Azure DevOps must follow naming restrictions and conventions. Restrictions help guarantee a consistent user experience and provide compatibility with other applications.  

Common restrictions include not exceeding the character length for a name, not containing special characters, and maintaining uniqueness of names within an object set.

> [!NOTE]   
> For limits on the number of items you can define, see [Work tracking, process, and project limits](work/object-limits.md).

<a id="CommonRestrictions">   </a>

## General considerations 

The length restrictions in this article get measured by the number of Unicode characters permitted. Surrogate characters are composed of two Unicode characters, which count as two characters against the length restriction. For more information, see [About Unicode and Character Sets](/windows/win32/intl/about-unicode-and-character-sets). 

As with other operating system files, ASCII control characters (ASCII 1-31) and surrogate combinations are also not allowed. For general information about the operating system restrictions applied to file names, see [Naming Files, Paths, and Namespaces](/windows/win32/fileio/naming-a-file).

<a id="reserved" />

### System reserved names 

Avoid using system reserved names, like the following examples:

- AUX 
- COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10
- CON 
- DefaultCollection
- LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9
- NUL  
- PRN 
- SERVER, SignalR 
- Web or WEB 

For more information about reserved names, see [File names, paths, and namespaces](/windows/win32/fileio/naming-a-file).

## Azure Artifacts

Universal packages must conform to the following restrictions.

|Column1  |Column2  |
|---------|---------|
|Restriction type    | Restriction        |
|Package name    |- Must be lowercase.<br/>- Must start and end with letters or numbers.<br/>- Must only contain letters, numbers, and nonconsecutive dashes, underscore, or periods.         |
|Package version    |Must be lowercase without build metadata.         |

## Azure Boards 

<a id="WorkItems"/>
<a id="work-items-work-item-types-and-customizations"/>

You use work items to capture information to plan and track your software development projects. With work items, you can describe the work to be done, assign work, track status, and coordinate efforts within your team. Different types of work items&mdash;such as user stories, tasks, bugs, and issues&mdash;track different types of information. For more information, see [Azure Boards documentation](../../boards/index.yml).

All work item tracking objects are associated with one or more names. Most have friendly display names, except work item types and global lists, which are associated with reference names. A friendly name is a unique, user-visible identifier for a field. Using friendly names ensures consistency across projects and work item types in a project collection. The system uses the reference name internally and you can't change it after it's defined.  

There are restrictions on several elements that are associated with work items, including reference and friendly names, field names, and attachment size.  

### Area and iteration paths 

Two work item fields, **Area Path** and **Iteration Path**, provide a tree structure hierarchy for grouping work. Area paths group work items by product, functional, or feature area. Iteration paths group work items into sprints, milestones, or time periods for addressing those work items.

These multi-node fields use the backslash `\` characters to denote the hierarchy of nodes within the tree structure.  

The names you assign to child nodes to these fields must conform to the following restrictions.  

[!INCLUDE [area-iteration-paths](includes/name-restrictions/area-iteration-paths.md)] 

### Attachments  

Files attached to work items must conform to the following restrictions.  

::: moniker range=" azure-devops"
|Restriction type  |Restriction  |
|---------|---------|
|File size   | - Must not exceed the maximum size:<br/>- Default maximum size: 4,096 kilobytes.<br/>- Absolute maximum size: 2 gigabytes.   |
::: moniker-end

::: moniker range="< azure-devops"
|Restriction type  |Restriction  |
|---------|---------|
|File size   | - Must not exceed the maximum size:<br>- Default maximum size: 4,096 kilobytes.<br>- Absolute maximum size: 2 gigabytes. For more information, see [Change the maximum attachment size for work items](/previous-versions/azure/devops/reference/xml/change-maximum-attachment-size-work-items).   |
::: moniker-end

<a id="Kanban" />

### Board column and swimlane names 

Your [Kanban board](../../boards/boards/kanban-basics.md) turns your backlog into an interactive signboard, providing a visual flow of work. As work progresses from idea to completion, you update the items on the board. Each column represents a work stage, and each card represents a user story (blue cards) or a bug (red cards) at that stage of work. 

Customize your Kanban boards by adding, removing, or renaming [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md). Columns support the flow of work across the board. Swimlanes allow you to manage different classes of work as horizontal lanes on the board.

Column and swimlane names must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 256 Unicode characters.    |
|Uniqueness     |- Column names must not be the same as any other column name on the Kanban board.<br>- Swimlane names must not be the same as any other swimlane name on the Kanban board.         |
|Special characters    | Must not contain any Unicode control characters or surrogate characters. |

<a id="WorkItemFields">   </a>

### Field names 

Each work item type contains one or more work item fields. These fields define the information stored for work items based on the work item type.  Each work item field has an associated field reference name. The field reference name uniquely identifies each field and can't be changed after it's assigned. For more information about out-of-box work item fields, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). 

Work item field names must conform to the following restrictions.  

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 128 Unicode characters.    |
|Uniqueness     |- Field names must contain at least one alphabetic character.<br>
      - Must not contain any one of the following characters: `.,;':~\/\*|?"&%$!+=()[]{}<>-`.<br>
      - Must not contain leading or trailing spaces.<br>
      - Must not contain two or more consecutive spaces.         |
|Special characters    | Must be unique within the organization or project collection. Work item field names are scoped to the project collection. If you rename a field name, you change it for all work items and WITs defined within all projects in the collection. |
 
#### Field reference names and portability  

The work item type definition language includes the concept of a *field reference name*. Field reference names can help you to port definitions between Team Foundation project collections and also to allow third-party integrations to find and refer to specific fields. These names are globally unique, just as a namespace in the .NET Framework application is globally unique.  

> [!NOTE]
> Field reference names can't be renamed. If for example, you changed the field name "Title" to "Header", the field reference name of that field remains the same. Integrations and internal representations of fields should use the field reference name instead of depending on the field name itself.  
 
The **System** namespace is used only to define all core system fields that are mandatory for Team Foundation system functions. You can't create your own System.X field because it might impede functionality.  

The **Microsoft** namespace is used to define work item tracking fields. These fields are defined in a work item type definition of the process templates. 

> [!IMPORTANT]
> Although you can create your own Microsoft.X field, we don't recommend that you do so, as it might impede functionality or the ability for the Configure Features wizard to successfully update a project after an upgrade.   

Customers and partners can create their own field namespaces for custom work item types. For descriptions of system fields and fields defined in the default process templates, see [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).

<a id="ExamplesFieldReferenceNames">  </a>
    
#### Examples of field reference names  

The following examples show valid field reference names, in various namespaces. Customers and partners can also define their own namespaces to support their custom work item types.   

|System namespace examples |Microsoft namespace examples |Other namespace examples|
|---------|---------|---------|
|System.Id, System.Title, System.CreatedBy, System.CreatedDate, System.ChangedBy, System.ChangedDate, System.State, System.Reason | Microsoft.VSTS.Build.FoundIn, Microsoft.VSTS.Common.Activity, Microsoft.VSTS.Common.Discipline, Microsoft.VSTS.Common.Priority, Microsoft.VSTS.CMMI.TaskType, Microsoft.VSTS.TCM.AutomationStatus, Microsoft.VSTS.TCM.TestSuiteType  | The fictitious company, Fabrikam Fiber, might define the following custom work item fields:<br>FabrikamFiber.Common.Severity, FabrikamFiber.Common.Phase, FabrikamFiber.RiskManagement.RiskType, FabrikamFiber.RiskManagement.Resolution<br>The fictitious software company Contoso Corporation might define the following work item fields:<br>Contoso.Common.BusinessPriority, Contoso.Bug.FoundInPhase, Contoso.Bug.FixInPhase    |

::: moniker range="< azure-devops"

### Field help text

The system displays help text at run time to help users know what to enter into the field. Help text is scoped to a specific work item type in a specific project. 

For the Inheritance process, you specify help text for a field through the **Edit field** dialog, **Definition** tab, **Description**. See [Add a custom field to a work item type](work/add-custom-field.md). For the On-premises XML process, you specify help text by using the `HELPTEXT` element. See [Add or modify a field to track work](../../reference/add-modify-field.md#add-rules-to-a-field).

Help text that you add must conform to the following restrictions. 

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 255 Unicode characters.  |

### Global lists 

A global list is a set of list item values that you can use globally across all project collections within an instance of an on-premises Azure DevOps Server. As you define work item types, you may find that some work item fields share the same set of allowed or suggested values. Global lists enable you to define these values one time and share them across multiple work item types and projects. For details, see [Define global lists](/previous-versions/azure/devops/reference/xml/define-global-lists).

A global list, defined using the `GLOBALLIST` element contains one or more list items, specified using the `LISTITEM` element.

`LISTITEM` names must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Length    | - Must not contain more than 254 Unicode characters.<br>- Must not be empty.    |
|Special characters    |- Must not contain leading or trailing white space.<br>
      - Must not contain two consecutive spaces.<br>
      - Must not contain backslash `\` characters.  |
|Scope   |   Since global lists are available among all projects, they must not contain elements defined at the project level, such as project-specific group account definitions.

Global lists must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Number of items   | Can't be empty. The global list must contain at least one `LISTITEM` element.    |
|Uniqueness   |Can't be empty. The global list must contain at least one `LISTITEM` element.  |

### Link type and category reference names 

Define a reference name whenever you add or create a link type or category. All reference names can be up to 70 Unicode characters long.  

Define a reference name by using alphanumeric characters, underscore characters, and hyphen characters. Each reference name must contain at least one period `.`, but no period can appear at the start or end of a name. A reference name must not start with a number or an underscore, and it can't have multiple consecutive hyphens, such as `--`.  

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 70 Unicode characters.    |
|Uniqueness     | - Must not be identical to any other field reference name within the project collection.<br>- Must not be identical to any other field reference name after those names get processed by the computer to replace all periods `.` with underscores `_`. For example, the field reference names `My.*Field*` and `My.Field` would both process as the same name: `My__Field` |
|Special characters    |- Must not contain hyphens `-`.<br>
      - Must contain at least one period `.`.<br>
      - Must not start or end with a period `.`.<br>
      - Must not start with a numberMust not start with an underscore `_`.  |

::: moniker-end

### Work item tags

Work item tags correspond to one or two keyword phrases to filter work tracking tools such as backlogs, boards, and queries or define queries. For more information, see [Add work item tags to categorize and filter lists and boards](../../boards/queries/add-tags-to-work-items.md).

Tag names must conform to the following restrictions. 

|Restriction type |Restriction |
|---------|---------|
|Length    | - Must not contain more than 400 Unicode characters.<br>- Must not be null or empty.    |
|Special characters    |- Must not contain separator characters: `,` or `;`.<br>
      - Must not contain Unicode control or format characters, such as a line feed, paragraph separator, carriage return, or other mismatched surrogate characters.|
|Scope   | Since global lists are available among all projects, they must not contain elements defined at the project level, such as project-specific group account definitions.

## Azure Pipelines

Azure pipeline definitions must conform to the following restrictions.

|Restriction type |Restriction  |
|---------|---------|
|Job name    |- Must only contain alphanumeric characters and `'_'`.<br>
      - Must not start with a number.<br>
      - Must have a unique name.<br>
      - Must not contain keywords, for example: "deployment".         |
|Stage name     | - Must only contain alphanumeric characters and `'_'`.<br>
      - Must not start with a number.<br>
      - Must not contain keywords, for example: "deployment".        |
|Expressions    | Must start with `a-Z` or `_AND`, followed by `a-Z`, `0-9`, or `_`.        |

For more information, see [Azure Pipelines documentation](../../pipelines/index.yml).

## Azure Repos (Git)

Each Azure DevOps project can contain multiple Git repositories. The names you assign to Git repositories must conform to the following restrictions. To learn more, see [Azure Repos Git documentation](../../repos/git/index.yml).For more information on naming restrictions for other Git items such as branches and tags, see [git check-ref-format](https://git-scm.com/docs/git-check-ref-format). 

> [!IMPORTANT]
> Although you can include spaces within repo names, we don't recommend that you do so.

|Restriction type  |Restriction  |
|---------|---------|
|Length     | Must not contain more than 64 Unicode characters.        |
|Uniqueness    | Must not be identical to any other Git repo name in the project.        |
|Special characters   | - Must not contain any Unicode control characters or surrogate characters.<br>
      - Must not contain the following printable characters: `/ : \ ~ &amp; % ; @ &#39; &quot; ? &lt; &gt; | # $ * } { , + = [ ]`.<br>
      - Must not start with an underscore `_`.<br>
      - Must not start or end with a period `.`.<br>
      - Must not be a [system reserved name](#reserved).        |

<a id="SourceControl">   </a>

## Azure Repos (TFVC) 
 
Team Foundation version control (TFVC) provides a central repository for files and the commands that are required to manage those files across a team. It also provides customizable check-in policies, branching, merging, shelving, and many other features. To learn more, see [Azure Repos TFVC documentation](../../repos/tfvc/index.yml)

Version control paths must conform to the following restrictions. See also [Optimize your workspace](../../repos/tfvc/optimize-your-workspace.md).

|Restriction type  |Restriction  |
|---------|---------|
|Server source control folder path length    | - Must not contain more than 259 Unicode characters for a single folder or file name.<br>
      - Must not contain more than 388 Unicode characters for a directory.<br>
      - Must not contain more than 399 Unicode characters for a combined directory and file name.    |
|Local folder path length   |- Must not contain more than 248 Unicode characters for a directory.<br>
      - Must not contain more than 260 Unicode characters for a combined directory and file name. |
|Web portal and REST-specific length restrictions  |Must not contain more than 215 Unicode characters for a combined project name, directory, and file name.  |

In the web portal and REST API, certain operations have a more restrictive path length than Visual Studio and TF.exe clients. These operations include Edit, Rename, and Delete, and occur because the web portal/REST uses a randomly generated workspace for concurrency when pending the changes.

### TFVC files

The version control system stores many different types of files. [Set up Team Foundation version control on your dev machine](../../repos/tfvc/set-up-team-foundation-version-control-your-dev-machine.md) provides details on how to add existing Visual Studio projects or solutions.

Files and folders you add to Team Foundation version control must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Files and folders    |- Names must not contain the following printable characters: `\ / : * ? " < > | ;`.<br>- Folders must not be outside the mapped directory for the active workspace.   |
|File names   | - Must not begin with a `$`.<br>- Must not contain the following printable characters: `\ / : * ? " < > | ;`        |

### TFVC labels

In Team Foundation version control (TFVC), a label is a name applied to a specific set of revisions. You can attach labels to a set of unrelated files in version control, which lets you retrieve the files or act upon them as a group. The following table describes the restrictions put on label names.

|Restriction type |Restriction |
|---------|---------|
|Length    |Must not contain more than 64 Unicode characters.  |
|Special characters | - Can't end with a space `( )` or period `.`.<br>
      - Must not contain the following printable characters: `\ / : * ? " < > | ; @` |


### TFVC Shelvesets 

Shelvesets enable you to set aside temporarily a batch of pending changes and then, as an option, remove the pending changes from your workspace. Later, you can restore the changes in a shelveset to your workspace or put them into another user's workspace.

Shelveset names must conform to the following restrictions.  

|Restriction type |Restriction |
|---------|---------|
|Length    |Must not contain more than 64 Unicode characters.  |
|Special characters | Must not contain the following printable characters: `\ / : * ? " < > | ;` |

### TFVC workspaces

A workspace is a client-side copy of the files and folders in Team Foundation version control (TFVC). When you create multiple workspaces, you can have different versions of the same version control folder on a client computer. [Create and work with workspaces](../../repos/tfvc/create-work-workspaces.md) provides more details. 

Workspace names must conform to the following restrictions.  

|Restriction type |Restriction |
|---------|---------|
|Length    |Must not contain more than 64 Unicode characters.  |
|Special characters | - Must not end with a space `( )`.<br>- Must not contain the following printable characters: `\ / : * ? " < > | ;` |

::: moniker range="< azure-devops"

## Computer names 

The computer name where you install Azure DevOps is associated with the name of the server. 
Both the operating system and Active Directory impose certain restrictions on computer names as described in these articles:  
*    [Rename a Computer that Hosts a Stand-Alone Instance of SQL Server](/sql/database-engine/install-windows/rename-a-computer-that-hosts-a-stand-alone-instance-of-sql-server)  
*    [Windows Server Active Directory](https://support.microsoft.com/help/909264/naming-conventions-in-active-directory-for-computers-domains-sites-and)

::: moniker-end

::: moniker range="azure-devops"

## Organization names

[!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

::: moniker-end

<a id="ProcessTemplates">   </a>

## Process and process templates 

A process defines the building blocks of the work item tracking system and other subsystems that you have access to after connecting to a project.  

> [!NOTE]   
>  **Terminology**: Both "process" and "process template" refer to an interdependent set of files used to create a project. For more information, see [Choose a process](../../boards/work-items/guidance/choose-process.md), which describes the differences among the three default processes available to you.   

Processes that you define or customize must conform to the following restrictions.  


|Restriction type  |Restriction  |
|---------|---------|
|Length     | Must not contain more than 256 Unicode characters        |
|Uniqueness   |  - Must be unique across Azure DevOps.<br>
      - If you upload a template with the same name as an existing template, the existing template is overwritten.       |
|Process template file size    | Must not exceed 2 GB (gigabytes).        |

::: moniker range="< azure-devops"

<a id="ProjectCollectionNames">   </a>

## Project collections 

A project collection identifies a group of projects and the resources that are associated with those projects. It provides an organizing structure that you can use to define and control a group of projects defined for an Azure DevOps Server.  

Also, the collection name is part of the connection string used to connect team members to projects. The default assigned corresponds to *DefaultCollection*. 
[Manage project collections](/azure/devops/server/admin/manage-project-collections) provides more information. 

Names you assign to project collections must conform to the following restrictions.  

|Restriction type  |Restriction |
|---------|---------|
|Length    |  Must not contain more than 64 Unicode characters.       |
|Uniqueness    | - Must not be identical to any other collection name in your on-premises deployment.<br>
      - If your deployment includes SharePoint Products or SQL Server Reporting Services, they can't be identical to the name and full path of an existing SharePoint site, report server, or Reporting Services website.        |
|Reserves names    |  Must not be a [system reserved name](#reserved).         |
|  Special characters |  - Must not contain any Unicode control characters or surrogate characters.<br>
      - Must not contain the following printable characters: `\ / : * ? " < > | ; # $ * { } , + = [ ]`. <br>
      - Must not contain an ellipsis `...` or a double period `..`.<br>
      - Must not start with an underscore `_`.<br>
      - Must not start or end with a period `.`.<br>                |

::: moniker-end

<a id="ProjectNames">   </a>

## Project names

A project establishes a repository for source code and a place for teams to plan, track progress, and collaborate. The name of the  project is part of the connection string used to connect team members to projects.

Names you assign to projects that you create must conform to the following restrictions.  

|Restriction type  |Restriction |
|---------|---------|
|Length    |  Must not contain more than 64 Unicode characters.       |
|Uniqueness    | Must not be identical to any other name in the project collection, the SharePoint Web application that supports the collection, or the instance of SQL Server Reporting Services that supports the collection. |
|Reserves names    |  Must not be a [system reserved name](#reserved). <br>- Must not be one of the hidden segments used for IIS request filtering like App_Browsers, App_code, App_Data, App_GlobalResources, App_LocalResources, App_Themes, App_WebResources, bin, or web.config.  |
| Special characters |  - Must not contain any Unicode control characters or surrogate characters.<br>
      - Must not contain the following printable characters: `\ / : * ? " < > | ; # $ * { } , + = [ ]`. <br>
      - Must not start with an underscore `_`.<br>
      - Must not start or end with a period `.`.   |

<a id="GroupAccountNames">   </a>

## Security groups

With Azure DevOps security groups, you can apply certain rights or permissions to a group of users.

On-premises groups may consist of Active Directory group accounts, Azure DevOps security groups, Windows user accounts, Windows group accounts, or any mixture of these types. For more information, see [Add AD/Azure AD users or groups to a built-in security group](../../organizations/security/add-ad-aad-built-in-security-groups.md).  

Security groups must conform to the following restrictions.  

|Restriction type  |Restriction |
|---------|---------|
|Security group account name length  |  Must not contain more than 256 Unicode characters.       |
|Uniqueness    | - Project-level group accounts must not match any other group name in the same project.<br>- Collection-level group accounts must not match any other name of a group account in the project collection.  |
|Reserved group names    |Must not be named with a $NAMESPACE at either the project or the server level.    |
| Special characters |  - Must not contain any Unicode control characters or surrogate characters.<br>
      - Must not contain the following printable characters: `/ \ [ ] : | < > + = ; ? *`. <br>
     - Must not include nonprintable characters in the ASCII value range of 1-31.<br>
      - Must not end in a period `.`.<br>
      - Must not include commas `,`.   |

::: moniker range="< azure-devops"

## Team Foundation Build   

Team Foundation Build lets you manage all the aspects of the build process on a single computer. By using Team Foundation Build, you can synchronize the sources, compile the application, run associated unit tests, perform code analysis, release builds on a file server, and publish build reports.

### Build computer 

Team Foundation Build is a separate installation from the Azure DevOps Server application tier, data tier, or Visual Studio client. You may choose a separate computer. Otherwise, you can install the build side by side on the client computer or on the servers.  

Your on-premises build computer must conform to the following restrictions.

|Restriction type  |Restriction |
|---------|---------|
|Disk space    | Must contain sufficient space for the build (insufficient space leads to failed builds).        |
|Build directory   | Must be a local path (for example, `C:\BuildDirectory`).        |
|Drop location directory    | Must be a UNC path (for example, `\server\share`).        |
|Drop location permissions   | Each generated build is put in a new directory in the drop folder.<br>
      - The Team Foundation Server Service account (for example, `Domain\TFSSERVICE`) must have Full Control permission access to the UNC drop location.<br>
      - The UNC drop location must be a shared folder.        |
|Team Foundation Build Service account  | If you change the TFS Service account after the initial installation, you must make sure that the following conditions are true:<br>
      - The account is a member of the Build Services group.<br>
      - The account has read/write permissions to the temporary folders and the ASP.NET temporary folder.<br>
      - The account has Full Control permission to the build directory and drop location. |
|Firewall issues|If the build computer is firewall enabled, make sure that the program, **tfsbuildservice*,* is in the exceptions list.        |

### Build types

Build types configure the conditions under which a single solution or a set of solutions in a project are built. To conduct a build, you must either create a new build type or use an existing [build type](../../pipelines/create-first-pipeline.md).

Build type names must conform to the following restrictions.  

|Restriction type  |Restriction  |
|---------|---------|
|Uniqueness     | Must not be the same as any other build type name in the project.        |
|Special characters   | Must not contain the following printable character: `$`.        |

### Build quality 

The build quality lets you attach a quality level or completion state to a completed build. Team Foundation Build also lets you create new values for the [build quality type](../../pipelines/create-first-pipeline.md). See [Rate the quality of a completed build](/previous-versions/ms181734(v%3dvs.140)) for a list of the default build quality values.

Build quality names must conform to the following restrictions.  

|Restriction type  |Restriction  |
|---------|---------|
|Length   | Must not contain more than 256 Unicode characters.        |
|Uniqueness  |Must not be the same as any other Build Quality name in the Team Foundation Build computer.  |

::: moniker-end

## Team names 

Team names identify a group of individuals or groups that collectively work together as a team in a project. Team members use this name to connect to the team or to query against members defined for a team. 

Team names must conform to conventions that allow them to be rendered as part of a valid URL. Each team name must be unique within a single project. However, there aren't any restrictions on using the same team name in different projects within a project collection. For more information, see [Add another team or a hierarchy of teams](../../organizations/settings/add-teams.md).

Team names must conform to the following restrictions.   

|Restriction type  |Restriction  |
|---------|---------|
|Length    | Must not contain more than 64 Unicode characters.        |
|Uniqueness     |Must not be identical to any other name in the project.         |
|Reserved names   | - Must not be a [system reserved name](#reserved).        |
|Special characters     | - Must not contain any Unicode control characters or surrogate characters.<br>
      - Must not contain the following printable characters: `\ / : * ? " < > | ; # $ * { } , + = [ ]`.<br>
      - Must not contain an ellipsis `...` or a double period `..`.<br>
      - Must not start with an underscore `_`.<br>
      - Must not start or end with a period `.`.       |

## User account names

User accounts identify people added to a project or project collection. User accounts might correspond to entries within Active Directory, Azure Active Directory, Windows server group.  

User accounts that you add to an organization or collection must conform to the following restrictions. To add user accounts to a  project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md).  

|Restriction type |Restriction |
|---------|---------|
|Account name length   | Must not contain more than 256 Unicode characters.        |
|Uniqueness   | Must not match any other user account added to the project collection.        |
|Reserved group names    | Must not be named with a $NAMESPACE at either the project or the server level.  |
|Special characters   | - Must not include the following printable characters: `"/ \ [ ] : | < > + = ; ? *`<br>- Must not include nonprintable characters in the ASCII value range of 1-31.<br>- Must not end in a period `.` or a dollar sign `$`.<br>- Must not include commas `,`.<br>- Must not include the following Unicode categories: LineSeparator, ParagraphSeparator, Control, Format, OtherNotAssigned.        |

## Wiki page and file names

[!INCLUDE [temp](../../project/wiki/includes/wiki-naming-conventions.md)]

## Related articles

- [Azure Artifacts count and size limits](../../artifacts/reference/limits.md)
- [Work tracking, process, and project limits](./work/object-limits.md)
- [Customize work tracking objects to support your team's processes](../../reference/customize-work.md)
- [Customize a process template](../../reference/process-templates/customize-process.md)
