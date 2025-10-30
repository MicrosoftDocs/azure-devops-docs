---
title: Naming restrictions and conventions
titleSuffix: Azure DevOps
description: See requirements for labeling Azure DevOps objects like organizations, projects, templates, and tags, to enforce consistency and compatibility.
ms.subservice: azure-devops-settings
ms.topic: overview
ms.assetid: F4ED2B52-EDE9-4F2B-B3B5-A3FB504D84B9
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/30/2025
#customer intent: As an Azure DevOps administrator, I need to know the naming restrictions and conventions for Azure DevOps components so I can correctly and effectively manage my Azure DevOps organization or collection.
---

# Naming restrictions and conventions  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

This article describes the naming rules, conventions, and restrictions for Azure DevOps components. Naming rules, restrictions, and conventions help guarantee a consistent user experience and provide compatibility with other applications.

<a id="CommonRestrictions"></a>
## General considerations 

Common restrictions include not exceeding the character length for a name, not containing special characters, and maintaining uniqueness of names within an object set.

- Length restrictions count the number of Unicode characters permitted. Surrogate characters are composed of two Unicode characters, which count against the length restriction as two characters. For more information, see [About Unicode and character sets](/windows/win32/intl/about-unicode-and-character-sets).

- As with other operating system files, ASCII control characters 1-31 and surrogate combinations aren't allowed. For general information about the operating system restrictions applied to file names, see [Naming files, paths, and namespaces](/windows/win32/fileio/naming-a-file).

- For limits on the number of items you can define, see [Work tracking, process, and project limits](work/object-limits.md).

> [!IMPORTANT]   
> When you use the API rather than the user interface (UI), you can directly specify a name that might include characters restricted in the UI. To maintain consistency and prevent unintended issues, follow the UI restrictions. Validate names programmatically and handle special characters appropriately.

<a id="reserved"></a>
### System reserved names 

Avoid using system reserved names like the following examples:

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

Azure Artifacts universal packages and feeds must conform to the following restrictions:

|  Restriction type  |  Restriction  |
|--------------------|---------------|
|Package name        |- Must be lowercase.<br/>- Must start and end with alphanumeric characters.<br/>- Can contain only alphanumeric characters and nonconsecutive hyphens `-`, underscores `_`, or periods `.`.  |
|Package version     |- Must be lowercase without build metadata. |
|Feed name        |- Must start and end with alphanumeric characters.<br>- Not case sensitive, but can't differ from another feed name only by capitalization.<br/>- Can't start with period `.` or underscore `_` or end with period `.`.<br/>- Can't include any of the following characters: `@` `~` `;` `{` `}` `'` `+` `=` `,` `<` `>` `|` `/` `\` `?` `:` `&` `$` `*` `"` `#` `[` `]` `%`. |

## Azure Boards 

<a id="WorkItems"></a>
<a id="work-items-work-item-types-and-customizations"></a>

Azure Boards uses work items to plan and track software development projects. Work items describe the work to be done, assign work, track status, and coordinate efforts within a team. Different types of work items, such as user stories, tasks, bugs, and issues, track different types of information. For more information, see the [Azure Boards documentation](../../boards/index.yml).

Work item tracking objects are associated with one or more names. All objects except work item types and global lists have friendly display names, which are unique, user-visible identifiers for fields. Using friendly names ensures consistency across projects and work item types in a project collection.

Work item types and global lists are associated with reference names. The system uses the reference names internally, and you can't change them once defined.

Several elements associated with work items have restrictions, including reference names, friendly names, field names, and attachment size.

### Area and iteration paths 

The **Area Path** and **Iteration Path** work item fields provide a tree structure hierarchy for grouping work. Area paths group work items by product, function, or feature area. Iteration paths group work items into sprints, milestones, or time periods for addressing the work.

These multi-node fields use the backslash `\` character to denote the hierarchy of nodes within the tree structure. The names you assign to child nodes must conform to the following restrictions.

[!INCLUDE [area-iteration-paths](includes/name-restrictions/area-iteration-paths.md)] 

### Attachments

Files attached to work items must conform to the following restrictions.

|Restriction type  |Restriction  |
|---------|---------|
|File size|Must not exceed the maximum size:<br/>- Default maximum size: 4,096 kilobytes.<br/>- Absolute maximum size: 2 gigabytes.|

::: moniker range="< azure-devops"

For more information, see [Change the maximum attachment size for work items](/previous-versions/azure/devops/reference/xml/change-maximum-attachment-size-work-items).

::: moniker-end

<a id="Kanban"></a>
### Board column and swimlane names 

A [board](../../boards/boards/kanban-overview.md) provides a visual flow of backlog work. As work progresses from planning to completion, you update the items on the board. Each column represents a work stage, and each card represents a work item at that stage of work.

You can customize a board by adding, removing, or renaming [columns](../../boards/boards/add-columns.md) and [swimlanes](../../boards/boards/expedite-work.md). Columns support the flow of work across the board, and swimlanes let you manage different work as horizontal lanes on the board.

Column and swimlane names must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 256 Unicode characters. |
|Uniqueness     |- Column names must not be the same as any other column name on the board.<br>- Swimlane names must not be the same as any other swimlane name on the board. |
|Special characters    | Must not contain any Unicode control characters or surrogate characters. |

<a id="WorkItemFields">   </a>
### Field names 

Each work item type contains one or more fields that define the information stored for that work item type. Each work item field has an associated field reference name that uniquely identifies the field and can't be changed once assigned. For more information about built-in work item fields, see the [Work item field index](../../boards/work-items/guidance/work-item-field.md).

Work item field names are scoped to the project collection. If you rename a field name, you change it for all work items and work item types defined within all projects in the collection.

Work item field names must conform to the following restrictions.

|Restriction type |Restriction |
|-----------------|------------|
|Length    | Must not contain more than 128 Unicode characters. |
|Uniqueness| Must be unique within the organization or project collection. |
|Special characters |- Must contain at least one alphabetic character.<br/>- Must not contain any of the following characters: `.` `,` `;` `'` `:` `~` `\` `/` `*` `?` `"` `&` `%` `$` `!` `+` `=` `(` `)` `[` `]` `{` `}` `<` `>` `-` `|`.<br/>- Must not contain leading or trailing spaces.<br/>- Must not contain two or more consecutive spaces. |

#### Field reference names

The work item type definition language includes the concept of a *field reference name*. Field reference names can help you port definitions between Team Foundation project collections and allow non-Microsoft integrations to find and refer to specific fields. These names, like namespaces in .NET Framework applications, are globally unique. 

The following fields are defined in a work item type definition of the process templates:

- The **System** namespace is used only to define all core system fields that are mandatory for Team Foundation system functions. You can't create your own `System.X` field, because it might impede functionality.  

- The **Microsoft** namespace is used to define work item tracking fields. Although you can create your own `Microsoft.X` field, it isn't recommended because it might impede functionality or the ability to successfully update a project after an upgrade.

Customers and partners can create their own field namespaces for custom work item types. For descriptions of system fields and fields defined in the default process templates, see the [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).

> [!IMPORTANT]
> You can't change field reference names. For example, if you change the field name **Title** to **Header**, the field reference name of that field doesn't change. Integrations and internal representations of fields should use the field reference name instead of the field name.

<a id="ExamplesFieldReferenceNames">  </a>
#### Field reference name examples

The following examples show valid field reference names in various namespaces.

|System namespace examples |Microsoft namespace examples |Other namespace examples|
|---------|---------|---------|
|System.Id, System.Title, System.CreatedBy, System.CreatedDate, System.ChangedBy, System.ChangedDate, System.State, System.Reason | Microsoft.VSTS.Build.FoundIn, Microsoft.VSTS.Common.Activity, Microsoft.VSTS.Common.Discipline, Microsoft.VSTS.Common.Priority, Microsoft.VSTS.CMMI.TaskType, Microsoft.VSTS.TCM.AutomationStatus, Microsoft.VSTS.TCM.TestSuiteType  | FabrikamFiber.Common.Severity, FabrikamFiber.Common.Phase, FabrikamFiber.RiskManagement.RiskType, FabrikamFiber.RiskManagement.Resolution<br><br>Contoso.Common.BusinessPriority, Contoso.Bug.FoundInPhase, Contoso.Bug.FixInPhase |

::: moniker range="< azure-devops"
### Field help text

The system displays help text at runtime to help users know what to enter into the field. Help text is scoped to a specific work item type in a specific project. 

For the Inheritance process, you specify help text for a field through the **Edit field** dialog, **Definition** tab, **Description**. See [Add a custom field to a work item type](work/add-custom-field.md). For the on-premises XML process, you specify help text by using the `HELPTEXT` element. See [Add or modify a field for work tracking](../../reference/add-modify-field.md#add-rules-to-a-field).

Help text that you add must conform to the following restrictions. 

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 255 Unicode characters.  |

### Global lists 

As you define work item types, you might find that some work item fields share the same set of allowed or suggested values. A global list is a set of list item values that you can define one time and use globally across all project collections within an instance of on-premises Azure DevOps Server.

A global list defined using the `GLOBALLIST` element contains one or more list items specified using the `LISTITEM` element. For details, see [Define global lists](/previous-versions/azure/devops/reference/xml/define-global-lists).

Global lists must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Uniqueness   |The global list must be unique within the Azure DevOps Server instance. |
|Number of items   | Must not be empty. The global list must contain at least one `LISTITEM` element. |

`LISTITEM` names must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Length    |- Must not contain more than 254 Unicode characters.<br>- Must not be empty.  |
|Special characters    |- Must not contain leading or trailing white space.<br>- Must not contain two consecutive spaces.<br>- Must not contain the backslash `\` character.  |
|Scope   |   Since global lists are available among all projects, they must not contain elements defined at the project level, such as project-specific group account definitions. |

::: moniker-end

### Link type or category reference names

Define a reference name when you add or create a link type or category.

|Restriction type |Restriction |
|---------|---------|
|Length    | Must not contain more than 70 Unicode characters.    |
|Uniqueness     | - Must not be the same as any other field reference name within the project collection.<br>- Must not be identical to any other field reference name after the system processes the names to replace all periods `.` with underscores `_`. For example, the field reference names `My._Field` and `My..Field` would both process as the same name: `My__Field`. |
|Special characters    |- Can use alphanumeric characters, underscores, hyphens, and periods.<br>- Can't contain consecutive hyphens `--`.<br>- Must contain at least one period `.`, but can't start or end with a period.<br>- Can't start with a numeral or underscore `_`. |

### Work item tag names

Work item tags consist of one or two keywords that filter or define work tracking tools such as backlogs, boards, and queries. For more information, see [Add work item tags to categorize and filter lists and boards](../../boards/queries/add-tags-to-work-items.md).

Tag names must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Length    | - Must not contain more than 400 Unicode characters.<br>- Must not be null or empty. |
|Special characters    |- Must not contain separator characters `,` or `;`.<br>- Must not contain Unicode control or format characters such as line feeds, paragraph separators, carriage returns, or other mismatched surrogate characters.|

::: moniker range="> azure-devops-2022"

### Work item query names

You can use work item queries to list work items based on field criteria you specify. For more information, see [About managed queries](../../boards/queries/about-managed-queries.md). 

|Restriction type |Restriction |
|-----------------|------------|
|Length    | Must not contain more than 255 Unicode characters.    |
|Special characters    |- Can't be empty.<br/>- Must not contain any one of the following characters: `/` `\` `<` `>` `*` `?` `"` `+` `|` `:`.|
|Uniqueness|- Must be contained in a folder and be named uniquely within the folder.|

::: moniker-end

## Azure Pipelines

Azure Pipeline objects must conform to the following naming restrictions.

|Object type    |Restriction  |
|--------------------|-------------|
|Expressions         | - Must start with a lowercase or uppercase alphabetic character or underscore, followed by lowercase or uppercase alphabetic characters, numerals, or underscores `_`. |
|Variables           | - Must contain only alphanumeric characters, periods `.`, and underscores `_`.<br>- Can't begin with the reserved prefixes `endpoint`, `input`, `secret`, `path`, or `securefile`, case insensitive. |
|Stages              | - Stage name must contain only alphanumeric characters and underscores `_`.<br/>- Name must not start with a numeral.   |
|Jobs and deployment jobs | - Job name must contain only alphanumeric characters and underscores `_`.<br/>- Name must not start with a numeral.<br>- Name can't contain keywords like `deploy`. |
|Matrix job strategy | - Matrix configuration name must contain only alphanumeric characters and underscores `_`.<br>- Name must start with an alphabetic character.<br>- Maximum length: 100 characters.       |
|Build resource      | - Alias or name of build artifact must contain only alphanumeric characters, hyphens `-`, and underscores `_`. |
|Container resources | - Container ID must contain only alphanumeric characters, hyphens `-`, and underscores `_`.|
|Package resources   | - Package artifact alias must contain only alphanumeric characters, hyphens `-`, and underscores `_`. |
|Pipeline resources  | - Pipeline ID must contain only alphanumeric characters, hyphens `-`, and underscores `_`.|
|Repository resources| - Repository alias must contain only alphanumeric characters, hyphens `-`, and underscores `_`. |
|Webhook resources   | - Webhook name must contain only alphanumeric characters, hyphens `-`, and underscores `_`. |
|Steps               | - Step name ID must contain only alphanumeric characters, hyphens `-`, and underscores `_`. |

For more information, see the [Azure Pipelines documentation](../../pipelines/index.yml).

## Azure Repos

Azure Repos repositories can be Git-based or Team Foundation Version Control (TFVC)-based.

#### [Git repos](#tab/git)

Each Azure DevOps project can contain multiple Git repositories. For more information, see the [Azure Repos Git documentation](../../repos/git/index.yml).

Git repository names must conform to the following restrictions.

|Restriction type  |Restriction  |
|---------|---------|
|Length     | Must not contain more than 64 Unicode characters.        |
|Uniqueness    | Must not be identical to any other Git repo name in the project.        |
|Special characters   | - Must not contain any Unicode control characters or surrogate characters.<br/>- Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;` `#` `$` `*` `{` `}` `,` `+` `=` `[` `]` `|`.<br/>- Must not start with an underscore `_`.<br/>- Must not start or end with a period `.`.<br/>- Must not be a [system reserved name](#reserved).<br>- **Important**: Although you can include spaces within repo names, it isn't recommended.|

For information on naming restrictions for other Git items such as branches and tags, see [git check-ref-format](https://git-scm.com/docs/git-check-ref-format).
 
#### [TFVC repos](#tab/tfvc)
<a id="SourceControl">   </a>
 
Team Foundation version control (TFVC) provides a central repository for files and commands required to manage those files across a team. TFVC also provides customizable check-in policies, branching, merging, shelving, and many other features. For more information, see the [Azure Repos TFVC documentation](../../repos/tfvc/index.yml)

TFVC paths must conform to the following restrictions. For more information, see [Optimize your workspace](../../repos/tfvc/optimize-your-workspace.md).

|Restriction type  |Restriction  |
|---------|---------|
|Server folder path length    | - Must not contain more than 259 Unicode characters for a single folder or file name.<br/>- Must not contain more than 388 Unicode characters for a directory.<br/>- Must not contain more than 399 Unicode characters for a combined directory and file name.    |
|Local folder path length   |- Must not contain more than 248 Unicode characters for a directory.<br/>- Must not contain more than 260 Unicode characters for a combined directory and file name. |
|Web portal and REST-specific length restrictions  |Must not contain more than 215 Unicode characters for a combined project name, directory, and file name.  |

In the web portal and REST API, certain operations have a more restrictive path length than Visual Studio and *TF.exe* clients. These operations include Edit, Rename, and Delete. The restrictions occur because the web portal/REST uses a randomly generated workspace for concurrency when pending the changes.

### TFVC files

The TFVC system stores many different types of files. For information on how to add existing Visual Studio projects or solutions, see [Set up Team Foundation version control on your dev machine](../../repos/tfvc/set-up-team-foundation-version-control-your-dev-machine.md).

Files and folders you add to TFVC must conform to the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Files   | - Names must not begin with a `$`.<br>- Names must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;` `|`.     |
|Folders    |- Names must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;`.<br>- Folders must not be outside the mapped directory for the active workspace.   |

### TFVC labels

In TFVC, a label is a name applied to a specific set of revisions. You can attach labels to a set of unrelated files in version control, which lets you retrieve the files or act upon them as a group. Label names have the following restrictions.

|Restriction type |Restriction |
|---------|---------|
|Length    |Must not contain more than 64 Unicode characters.  |
|Special characters | - Can't end with a space ` ` or period `.`.<br>- Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;` `@` `|`. |

### TFVC shelvesets 

Shelvesets let you temporarily set aside a batch of pending changes and optionally remove them from your workspace. Later you can restore the shelveset changes to your workspace or put them into another user's workspace.

Shelveset names must conform to the following restrictions.  

|Restriction type |Restriction |
|---------|---------|
|Length    |Must not contain more than 64 Unicode characters.  |
|Special characters | Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `&` `;` `|`. |

### TFVC workspaces

A workspace is a client-side copy of the files and folders in TFVC. If you have multiple workspaces, you can have different versions of the same TFVC folder on a client computer. For more information, see [Create and work with workspaces](../../repos/tfvc/create-work-workspaces.md). 

Workspace names must conform to the following restrictions.  

|Restriction type |Restriction |
|---------|---------|
|Length    |Must not contain more than 64 Unicode characters.  |
|Special characters | - Must not end with a space ` `.<br/>- Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;` `|`. |

---

::: moniker range="< azure-devops"

## Computer names 

The computer name where you install Azure DevOps is associated with the name of the server. Both the operating system and Active Directory impose certain restrictions on computer names, as described in the following articles:

- [Rename a computer that hosts a standalone instance of SQL Server](/sql/database-engine/install-windows/rename-a-computer-that-hosts-a-stand-alone-instance-of-sql-server)  
- [Naming conventions in Active Directory for computers, domains, sites, and organizational units](https://support.microsoft.com/help/909264/naming-conventions-in-active-directory-for-computers-domains-sites-and)

::: moniker-end

::: moniker range="azure-devops"

## Organization names

[!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

::: moniker-end

<a id="ProjectCollectionNames">   </a>
## Project collection names 

The project collection is the organizing structure you use to define and control a group of projects for Azure DevOps Server. The project collection identifies a group of projects and their resources. The project collection name is also part of the connection string used to connect team members to projects.

The default collection name assigned to a project collection corresponds to *DefaultCollection*. For more information, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).

Project collection names must conform to the following restrictions.  

|Restriction type  |Restriction |
|---------|---------|
|Length    |  Must not contain more than 64 Unicode characters.       |
|Uniqueness    | - Must not be identical to any other collection name in your on-premises deployment.<br>- If your deployment includes SharePoint Products or SQL Server Reporting Services, their names can't be identical to the name and full path of an existing SharePoint site, report server, or Reporting Services website.  |
|Special characters | - Must not contain any Unicode control characters or surrogate characters.<br>- Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;` `#` `$` `*` `{` `}` `,` `+` `=` `[` `]` `|`. <br>- Must not contain an ellipsis `...` or a double period `..`.<br>- Must not start with an underscore `_`.<br>- Must not start or end with a period `.`.<br>  Must not be a [system reserved name](#reserved).  |

::: moniker-end

<a id="ProcessTemplates"></a>
## Process and process templates 

A process defines the building blocks of the work item tracking system and other subsystems that you can access after connecting to a project. Both *process* and *process template* refer to an interdependent set of files used to create a project. For information about the default processes, see [About processes and process templates](../../boards/work-items/guidance/choose-process.md).

Processes that you define or customize must conform to the following restrictions.  

|Restriction type  |Restriction  |
|---------|---------|
|Length     | Must not contain more than 256 Unicode characters.        |
|Uniqueness   |  - Must be unique across Azure DevOps. If you upload a template with the same name as an existing template, the existing template is overwritten. |
|Process template file size    | Must not exceed 2 gigabytes. |

::: moniker range="< azure-devops"

<a id="ProjectNames">   </a>

## Project names

A project establishes a repository for source code and a place for teams to plan, track progress, and collaborate. The name of the  project is part of the connection string used to connect team members to projects.

Names you assign to projects that you create must conform to the following restrictions.  

|Restriction type  |Restriction |
|---------|---------|
|Length    |  Must not contain more than 64 Unicode characters.       |
|Uniqueness    | Must not be identical to any other name in the project collection, the SharePoint Web application that supports the collection, or the instance of SQL Server Reporting Services that supports the collection. |
|Reserved names    | - Must not be a [system reserved name](#reserved). <br>- Must not be one of the hidden segments used for IIS request filtering like `App_Browsers`, `App_code`, `App_Data`, `App_GlobalResources`, `App_LocalResources`, `App_Themes`, `App_WebResources`, `bin`, or `web.config`.  |
| Special characters |  - Must not contain any Unicode control characters or surrogate characters.<br>- Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `'` `<` `>` `;` `#` `$` `*` `{` `}` `,` `+` `=` `[` `]` `|`. <br>- Must not start with an underscore `_`.<br>- Must not start or end with a period `.`.   |

<a id="GroupAccountNames">   </a>
## Security groups

You can use Azure DevOps security groups to apply certain rights or permissions to a group of users. On-premises groups might consist of Active Directory group accounts, Azure DevOps security groups, Windows user accounts, Windows group accounts, or any mixture of these types. For more information, see [Add Active Directory / Microsoft Entra users or groups to a built-in security group](../../organizations/security/add-ad-aad-built-in-security-groups.md).  

Security groups must conform to the following restrictions.  

|Restriction type  |Restriction |
|---------|---------|
|Security group account name length  |  Must not contain more than 256 Unicode characters.       |
|Uniqueness    | - Project-level group accounts must not match any other group name in the same project.<br>- Collection-level group accounts must not match any other name of a group account in the project collection.  |
|Reserved group names    |Must not be named with a `$NAMESPACE` at either the project or the server level.    |
| Special characters |- Must not contain any Unicode control characters or surrogate characters.<br>- Must not contain the following printable characters: `,` `/` `\` `[` `]` `:` `<` `>` `+` `=` `;` `?` `*` `|`. <br>- Must not include nonprintable characters in the ASCII value range of 1-31.<br>- Must not end in a period `.`. |

## Team Foundation Build

Team Foundation Build lets you manage all the aspects of the build process on a single computer. By using Team Foundation Build, you can synchronize sources, compile the application, run associated unit tests, perform code analysis, release builds on a file server, and publish build reports.

### Build computer 

Team Foundation Build is a separate installation from the Azure DevOps Server application tier, data tier, or Visual Studio client. You can choose a separate computer or install the build side-by-side on the client computer or servers.  

Your on-premises build computer must conform to the following restrictions.

|Restriction type  |Restriction |
|---------|---------|
|Disk space    | Must contain sufficient space for the build because insufficient space leads to failed builds.        |
|Build directory   | Must be a local path such as *C:\\BuildDirectory*.        |
|Drop location directory    | Must be a UNC path such as *\\server*\\share*.        |
|Drop location permissions   | Each generated build must be put in a new directory in the drop folder.<br>- The Team Foundation Server Service account, for example `Domain\TFSSERVICE`, must have **Full Control** access to the UNC drop location.<br>- The UNC drop location must be a shared folder.        |
|Team Foundation Build Service account  | If you change the TFS Service account after the initial installation, you must make sure that:<br>- The account is a member of the Build Services group.<br>- The account has read/write permissions to the temporary folders and the ASP.NET temporary folder.<br>- The account has **Full Control** permission to the build directory and drop location. |
|Firewall|If the build computer is firewall enabled, make sure that the program **tfsbuildservice** is in the exceptions list.        |

### Build types

Build types are the conditions for building a single solution or a set of solutions in a project. To run a build, you can create a new build type or use an existing [build type](../../pipelines/create-first-pipeline.md).

Build type names must conform to the following restrictions.  

|Restriction type  |Restriction  |
|---------|---------|
|Uniqueness     | Must not be the same as any other build type name in the project.        |
|Special characters   | Must not contain the dollar-sign `$` character.        |

### Build quality 

The build quality lets you attach a quality level or completion state to a completed build. For a list of the default build quality values, see [Rate the quality of a completed build](/previous-versions/ms181734(v%3dvs.140)). Team Foundation Build also lets you create new values for the [build quality type](../../pipelines/create-first-pipeline.md).

Build quality names must conform to the following restrictions.  

|Restriction type  |Restriction  |
|---------|---------|
|Length   | Must not contain more than 256 Unicode characters.        |
|Uniqueness  |Must not be the same as any other build quality name on the Team Foundation Build computer.  |

::: moniker-end

## Team names 

Team names identify a group of individuals or groups that work together as a team in a project. Team members use this name to connect to the team or to query against members defined for a team. Team names must conform to conventions that allow them to be rendered as part of a valid URL.

Each team name must be unique within a single project, but there aren't any restrictions on using the same team name in different projects within an organization or project collection. For more information, see [Add another team or a hierarchy of teams](../../organizations/settings/add-teams.md).

Team names must conform to the following restrictions.   

|Restriction type  |Restriction  |
|---------|---------|
|Length    | Must not contain more than 64 Unicode characters.        |
|Uniqueness     |Must not be identical to any other team name in the project.         |
|Reserved names   | Must not be a [system reserved name](#reserved).        |
|Special characters     | - Must not contain any Unicode control characters or surrogate characters.<br>- Must not contain the following printable characters: `\` `/` `:` `*` `?` `"` `<` `>` `;` `#` `$` `*` `{` `}` `,` `+` `=` `[` `]` `|`.<br>- Must not contain an ellipsis `...` or a double period `..`.<br>- Must not start with an underscore `_`.<br>- Must not start or end with a period `.`. |

## User account names

User accounts identify users added to a project or project collection. User accounts might correspond to entries within Active Directory, Microsoft Entra ID, or Windows server group.  

To add user accounts to a  project, see [Add users to a project or team](../../organizations/security/add-users-team-project.md). User accounts that you add to an organization or collection must conform to the following restrictions.  

|Restriction type |Restriction |
|---------|---------|
|Account name length   | Must not contain more than 256 Unicode characters.             |
|Uniqueness   | Must not match any other user account in the organization or project collection.  |
|Reserved group names| Must not be named with a `$NAMESPACE` at either the project or the server level.  |
|Special characters   | - Must not include the following printable characters: `,` `"` `/` `\` `[` `]` `:` `<` `>` `+` `=` `;` `?` `*` `|`.</br>- Must not include nonprintable characters in the ASCII value range of 1-31.<br>- Must not end in a period `.` or a dollar sign `$`.<br>- Must not include the following Unicode categories: `LineSeparator`, `ParagraphSeparator`, `Control`, `Format`, `OtherNotAssigned`. |

## Wiki page and file names

[!INCLUDE [temp](../../project/wiki/includes/wiki-naming-conventions.md)]

## Related content

- [Azure Artifacts count and size limits](../../artifacts/reference/limits.md)
- [Work tracking, process, and project limits](./work/object-limits.md)
- [Customize work tracking objects to support your team's processes](../../reference/customize-work.md)
- [Customize a process template](../../reference/process-templates/customize-process.md)
