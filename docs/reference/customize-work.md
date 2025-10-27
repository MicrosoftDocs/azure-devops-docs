---
title: Customize your work tracking experience
titleSuffix: Azure DevOps 
description: Guide to configuring and customizing work tracking features. 
ms.service: azure-devops-boards
ms.custom: process
ms.assetid: D1B44480-F88B-4F35-927A-11ADFBCBAA23
ms.author: chcomley
author: chcomley
ms.topic: overview
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 10/27/2025
---

# Customize your work tracking experience 

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

As you plan and track your project, consider configuring features or customizing your experience to align with your team's tracking requirements. The approach for customizing projects, which affects all teams, depends on the process model you use.

This article gives you an overview of the customizations available and how they vary across the three process models. For specific guidance on customizations to support business decisions, see [Configure and customize Azure Boards](../boards/configure-customize.md). For more information, see [What is Azure Boards?](../boards/get-started/what-is-azure-boards.md) and [About work items](../boards/work-items/about-work-items.md). 

## Understanding customization levels

You can customize work tracking at the following levels:   

::: moniker range="azure-devops"
- **[Project-level shared resources](#project-level-shared-resources)**: Define area and iteration paths which teams select to configure their backlogs and boards. Shared queries and work item tags are other objects that once defined can be shared across the project.  
- **Team assets or tools**: Each team can configure their specific tools, such as backlogs, boards, and dashboards. For more information, see [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md). 
- **Project and object-level permissions**: Manage access to work tracking tools, which include setting permissions for objects and the project and assigning users or groups to specific access levels.  
- **Organization-level process customization**: Customize the fields, work item types, and backlogs and boards available to all teams. 
::: moniker-end

::: moniker range="< azure-devops"
- **Project-level shared resources**: Define area and iteration paths which teams select to configure their backlogs and boards. Shared queries and work item tags are other objects that once defined can be shared across the project.  
- **Team assets or tools**: Each team can configure their specific tools, such as backlogs, boards, and dashboards. For more information, see [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md). 
- **Project and object-level permissions**: Manage access to work tracking tools, which include setting permissions for objects and the project and assigning users or groups to specific access levels.
- **Collection-level process customization**: Customize the fields, work item types, and backlogs and boards available to all teams.  
::: moniker-end

### Customization scope and impact

Understanding the scope of each customization level helps you make informed decisions:

| Customization Level | Scope | Impact | Examples |
|-------------------|-------|--------|----------|
| **Project-level** | All teams in project | Affects team configurations | Area paths, iteration paths, shared queries |
| **Team-level** | Individual teams | Team-specific settings | Backlog columns, board swim lanes, capacity |
| **Permission-level** | User/group access | Controls feature visibility | Query permissions, area path access |
| **Process-level** | Organization/collection | All projects using process | Custom fields, work item types, workflows |

<a id="shared-resources"></a>

## Project-level shared resources  

Each project provides many shared resources that support all teams within the project. You configure these features through the user interface or the admin context of the web portal. 

### Core shared resources

The following shared resources form the foundation of work tracking in your project:

- **Area paths**: Organize work items by feature area or team responsibility
- **Iteration paths**: Define sprints and releases for planning and tracking
- **Shared queries**: Create reusable queries that all team members can access
- **Work item tags**: Add metadata for categorization and filtering
- **Security groups**: Manage access permissions across the project

For more information, see the following articles:
- [About area and iteration paths](../organizations/settings/about-areas-iterations.md) 
- [Set area paths](../organizations/settings/set-area-paths.md) 
- [Change the pick list for an iteration path](../boards/sprints/define-sprints.md)
- [Create and edit queries](../boards/queries/using-queries.md)
- [Add tags to work items](../boards/queries/add-tags-to-work-items.md)

### Best practices for shared resources

- **Plan area paths early**: Design your area path structure to reflect team ownership and product organization
- **Establish iteration cadence**: Set up consistent sprint lengths and release schedules
- **Create folder structure**: Organize shared queries in folders for better discoverability
- **Use descriptive tags**: Establish tagging conventions for consistent metadata
- **Review permissions regularly**: Ensure appropriate access levels for all team members

<a id="person-name-field"></a>

### People picker and identity fields

The people picker feature supports identity fields throughout Azure DevOps:

- **The Assigned To field** and other **Identity** fields use the people picker feature.
- **Activation**: When you choose the **Assigned To** field within a work item form, the people picker activates automatically.
- **User selection**: To select a user, start entering their name and search until you find a match.
- **Recent selections**: Previously selected users appear automatically in the list for quick access.
- **Directory integration**: For organizations using Microsoft Entra ID or Active Directory, people pickers allow searching all users and groups added to the directory (not just ones added to a specific project).
- **Scope limitation**: To limit the scope of identities available for selection to project-specific users, use the **Project-Scoped Users** group.
- **Custom restrictions**: Custom rules can further restrict the values available for Identity fields within a work item.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker Assigned To field.](../organizations/notifications/media/at-mention/identity-selector.png)  

#### Identity field configuration

You can configure identity fields in several ways:

- **Project-scoped users**: Limit identity selection to project members only
- **Custom rules**: Implement business rules that restrict field values
- **Group-based restrictions**: Use Azure AD groups to control available identities
- **Field-level permissions**: Set who can modify identity fields

For more information, see the following articles:
- [Add Active Directory / Microsoft Entra users or groups to a built-in security group](../organizations/security/add-ad-aad-built-in-security-groups.md). 
::: moniker range="azure-devops"
- [Limit identity search](../user-guide/manage-organization-collection.md#limit-user-visibility-for-projects-and-more). 
::: moniker-end

<a id="process-models"></a>
<a id="organization-level-process-customization'"></a>

::: moniker range="azure-devops"

## Organization-level process customization  
 
::: moniker-end

<a id="collection-level-process-customization'"></a>

::: moniker range="< azure-devops"

## Collection-level process customization  
 
::: moniker-end

Your project defines the work item types (WITs) available for tracking work and configures Agile tools. It specifies user stories, tasks, bugs, and the data fields used to capture information. Customized objects are shared across teams within the project.

> [!NOTE]    
>The method you use to customize work tracking depends on the process model you subscribe to: 
>- **Inheritance**: Supports WYSIWYG customization, available for Azure DevOps Services, Azure DevOps Server 2019, and Azure DevOps Server 2020.  
>- **Hosted XML**: Supports customization through import/export of process templates, available for a select number of customers of Azure DevOps Services who have opted into this model.     
>- **On-premises XML**: Supports customization through import/export of XML definition files for work tracking objects and is available for all on-premises deployments.        

## Process model comparison

The following table summarizes the differences between the three supported process models. For definitions of the main work tracking objects, see [Agile glossary](../boards/work-items/agile-glossary.md). For links to customization articles, see [Quick reference index for Azure Boards settings](quick-reference-index-boards-settings.md). 

---
:::row:::
   :::column span="3":::
      **Feature** 
   :::column-end:::
   :::column span="1":::
      **[Inheritance](../organizations/settings/work/inheritance-process-model.md)** 
   :::column-end:::
   :::column span="1":::
      **[Hosted XML](../organizations/settings/work/hosted-xml-process-model.md)**
   :::column-end:::
   :::column span="1":::
     **[On-premises XML](on-premises-xml-process-model.md)**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      WYSIWYG editing
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Create inherited custom processes, Inherit changes in system processes (Agile, Basic, Scrum, CMMI)
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Create custom process templates (see note 1)
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Updated process changes automatically apply to all projects referencing the process
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Support for customizing fields, work item types, form layout, workflow, custom rules, backlog levels, custom controls, test management 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Support for customizing link types, team fields, global workflow, and process configuration (see note 3)
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Initial configuration of Area paths, Iteration Paths, work item queries, security groups, and permissions (see note 3)
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      Global lists
   :::column-end:::
   :::column span="1":::
      Picklists
   :::column-end:::
   :::column span="1":::
      (see note 2)
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---

::: moniker range="azure-devops"
:::row:::
   :::column span="3":::
      Use [**`az boards`** command-line tools](../cli/quick-reference.md#azure-boards) to edit projects and teams and list information
   :::column-end:::
   :::column span="1":::
      ✔️  
   :::column-end:::
   :::column span="1":::
      ✔️  
   :::column-end:::
   :::column span="1":::
      ✔️  
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="3":::
      Use the [**`witadmin`** command-line tools](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) to list and export process information 
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker range="< azure-devops"
:::row:::
   :::column span="3":::
      Use the [**`witadmin`** command-line tools](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) to edit process information 
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
         
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="< azure-devops"
:::row:::
   :::column span="3":::
      Use the **`tcm fieldmapping`** command-line tool to list and export test case management mapping for resolution types, bug filing, and failure types. 
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="3":::
      REST API (read)
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="3":::
      REST API (write)
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
       (see note 5)
   :::column-end:::
:::row-end:::
---

### Process model selection guidance

Choose your process model based on your organization's needs:

#### Inheritance Process Model (Recommended)
- **Best for**: Teams wanting intuitive, web-based customization
- **Advantages**: WYSIWYG editing, automatic updates, easy maintenance
- **Use when**: You need moderate customization with minimal complexity

#### Hosted XML Process Model
- **Best for**: Organizations with complex process requirements
- **Advantages**: Full process template control, extensive customization
- **Use when**: You need advanced process customization but want cloud hosting

#### On-premises XML Process Model
- **Best for**: On-premises deployments with full control requirements
- **Advantages**: Complete customization flexibility, enterprise integration
- **Use when**: You need maximum control and run on-premises infrastructure

**Notes:**

1. A process determines the building blocks used to track work. A process template specifies an interdependent-related set of XML definition files that provide the building blocks and initial configuration for tracking work and other functional areas.     
2. Hosted XML customization supports adding and updating global lists with a process update (subject to limits on maximum size of each list). For more information, see [Work tracking object limits](../organizations/settings/work/object-limits.md).  
3. The Inherited process model doesn't support customization of the following features available with customization of process templates. Instead, you customize these areas within the web portal on a project-by-project basis. 
    - Area and iteration paths 
    - Work item queries  
    - Security groups and permissions   
    - Permissions and access to functional areas such as version control and build 
    ::: moniker range="< azure-devops"
    Or, you can use [REST APIs](/rest/api/azure/devops/wit/classification-nodes/create-or-update). 
    ::: moniker-end
    ::: moniker range="azure-devops"
    Or, you can use [REST APIs](/rest/api/azure/devops/wit/classification-nodes/create-or-update) or the [Azure DevOps CLI command tool](../cli/quick-reference.md). 
    ::: moniker-end
4. Support for Office Project integration with Azure DevOps is deprecated and the `TFSFieldMapping` command isn't supported.
5. Use the REST API to [import and export process templates](/rest/api/azure/devops/processadmin/processes/import%20process%20template).

<a id="choose-process-model"></a>

::: moniker range="< azure-devops"

## Choose the process model for your project collection 

For Azure DevOps Server 2019 and Azure DevOps Server 2020, you can choose between **XML** (On-premises XML process model) and **Inheritance** (Inheritance process model), as shown in the following dialog. 

> [!div class="mx-imgBorder"]  
> ![Screenshot showing Create Team Project Collection wizard, Collection Name dialog.](media/azd-2019/configure-new-collection-inheritance.png)   

> [!IMPORTANT]  
> The process choice you make is irreversible. Once it's set up, you can only customize work tracking objects based on the selected model. Also, existing project collections using the On-premises XML process model can't be migrated to the Inheritance process model. 

### Decision factors for process model selection

Consider these factors when choosing your process model:

| Factor | Inheritance Model | On-premises XML Model |
|--------|------------------|----------------------|
| **Ease of use** | Simple web interface | Requires XML knowledge |
| **Customization depth** | Moderate customization | Deep customization |
| **Maintenance effort** | Low maintenance | Higher maintenance |
| **Migration complexity** | Cannot migrate from XML | Can start with XML |
| **Team skill requirements** | Basic admin skills | Technical expertise |

For more information, see [Manage project collections](/azure/devops/server/admin/manage-project-collections).

::: moniker-end

<a id="test-experience"></a>

## Customize the test experience

Several work item types support the test experience within the web portal **Test** pages and Test Manager client.

### Inheritance process customization
For an **Inherited process**, you can customize the following work item types as you would any other work item type:
- **Test Plan**: Organize and manage test suites
- **Test Suite**: Group related test cases
- **Test Case**: Define individual test scenarios

### On-premises XML customization
For an **On-premises XML process**, you can customize all test-related work item types, including:
- **Test Plan**: High-level test organization
- **Test Suite**: Test case groupings
- **Test Case**: Individual test definitions
- **Shared Steps**: Reusable test procedures
- **Shared Parameters**: Parameterized test data

### Test work item relationships

The following example shows the supported link relationships between test work item types:

  ![Screenshot showing Test management work item types.](../boards/work-items/guidance/media/ALM_PT_WITS_TestExperience.png)

#### Test customization scenarios

Common test experience customizations include:

- **Custom test fields**: Add organization-specific test metadata
- **Test workflow states**: Define custom test execution states
- **Test result tracking**: Customize test outcome reporting
- **Integration fields**: Connect tests with requirements and defects

::: moniker range="< azure-devops"
For more information about test customization, see the following articles:
- [Test configurations and test variables](../test/test-different-configurations.md)
- [Failure types](witadmin/tcm-customize-manage-test-experience.md)  
- [Define the initial test management configuration (process template)](process-templates/define-initial-configuration-test-manager.md)
- [Query based on build and test integration fields](../boards/queries/build-test-integration.md)
::: moniker-end

## Less common customizations   

You can only perform the following customizations when working with the Hosted XML or On-premises XML process models. Customizations made to process configuration apply to all teams within a project.  

<a id="limits">  </a>

### Backlog and board limits (Hosted XML, On-premises XML)

To limit the display load time to acceptable parameters, the task board is restricted to a maximum of 1,000 work items. For details, see [Process configuration XML element reference](xml/process-configuration-xml-element.md). 

You can increase this value up to a maximum of 1500 by specifying a value for the `workItemCountLimit` attribute of the **TaskBacklog** element. For details, see [Process configuration XML element reference](xml/process-configuration-xml-element.md#backlog_page). 

> [!div class="tabbedCodeSnippets"]
> ```XML
> <TaskBacklog category="Microsoft.TaskCategory" pluralName="Tasks" singularName="Task" workItemCountLimit="800" >
>     . . .
> </TaskBacklog>
> ```

#### Performance considerations for board limits

When customizing board limits, consider:

- **Load time impact**: Higher limits may increase page load times
- **User experience**: Balance functionality with performance
- **Browser limitations**: Some browsers handle large datasets differently
- **Network bandwidth**: Consider team members with slower connections

<a id="assign-fields">  </a>

###  Change field assignments (Hosted XML, On-premises XML)  

You can change the work item fields that the system uses in calculating capacity, burndown charts, forecasting, and velocity. Any change you make to one of the default assignments should correspond to a change made to the WIT used to define and capture information for that value. 

For example, if you change the `refname` assigned to `type="Activity"` then you should include the same field in the WIT definition assigned to the Task Category that captures the activity information. For details, see [Process configuration XML element reference](xml/process-configuration-xml-element.md#fields). 

#### Tools that use field assignments

The fields you assign are used by the following tools: 

| Tool | Field type | Purpose |
| ----- | ---------- | ------- |
| Task board, capacity tools, sprint burndown | Remaining work | Track work completion |
| Product and portfolio backlogs | Backlog priority | Order work items |
| Velocity and forecast | Effort (maps to Story Points, Effort, or Size) | Estimate work size |
| Capacity tools | Activity (Task Activity or Discipline) | Plan team capacity |

#### Field assignment best practices

- **Maintain consistency**: Ensure field assignments match work item type definitions
- **Test changes**: Validate that tools work correctly after field reassignments
- **Document customizations**: Record field assignment changes for future reference
- **Consider impact**: Understand how changes affect existing data and reports

<a id="access-permissions"></a>

## Manage access to work tracking tools  

You manage access to specific features through permission settings. When you add user accounts to your team, they're automatically added to the Contributor group. They then have access to most of the features they need to contribute to code, work tracking, builds, and testing. However, the Contributor group doesn't allow users to create shared queries or to add area or iteration paths. You have to grant these permissions separately.  

### Default permission structure

The permission system operates on these principles:

- **Default access**: New team members automatically join the **Contributor** group
- **Core permissions**: The **Contributor** group provides access to most features needed for development work
- **Additional permissions**: Some features require separate permission grants
- **Administrative access**: Project administrators have full control over permissions

### Contributor group limitations

The **Contributor** group doesn't automatically allow users to:
- **Create shared queries**: Requires additional query permissions
- **Add area or iteration paths**: Requires project-level administrative permissions
- **Modify security settings**: Requires administrative access
- **Configure team settings**: Requires team administrator role

### Permission management approach

To effectively manage permissions:

1. **Start with defaults**: Use built-in groups as the foundation
2. **Grant specific permissions**: Add permissions for specific needs
3. **Use security groups**: Leverage Azure AD groups for easier management
4. **Regular reviews**: Periodically audit permissions for appropriateness
5. **Document decisions**: Maintain records of permission grants and rationale

For a simplified overview of common default permissions and access assignments, see [Permissions and access](../organizations/security/permissions-access.md).

If you're new to managing permissions, explore [Get started with permissions, access, and security groups, Permission inheritance and security groups](../organizations/security/about-permissions.md#permission-inheritance).

### Specific permission areas

To manage access to specific features, see the following articles: 

---
:::row:::
   :::column span="1":::
      **Manage access** 
      - [About access levels](../organizations/security/access-levels.md) 
      - [Add team members (Azure DevOps Services)](../organizations/security/add-users-team-project.md) 
      - [Change access levels (on-premises deployments)](../organizations/security/change-access-levels.md) 
      - [Add team members (on-premises deployments)](../organizations/settings/add-teams.md) 
   :::column-end:::
   :::column span="1":::
      **Permissions** 
      - [Area path permissions](../organizations/security/set-permissions-access-work-tracking.md#set-permissions-area-path)  
      - [Process permissions](../organizations/security/set-permissions-access-work-tracking.md)  
      - [Work item query and folder permissions](../boards/queries/set-query-permissions.md)  
      - [Dashboard permissions](../report/dashboards/dashboard-permissions.md#set-permissions)  
      - [Delivery Plan permissions](../organizations/security/set-permissions-access-work-tracking.md)  
      - [Tagging permissions](../organizations/security/permissions.md)  
      - [Test permissions](../organizations/security/permissions.md#project_test)   
   :::column-end:::
   :::column span="1":::
      **Shared resources** 
      - [Alerts](../organizations/notifications/manage-your-personal-notifications.md) 
      - [Area paths](../organizations/settings/set-area-paths.md)  
      - [Iteration paths](../organizations/settings/set-iteration-paths-sprints.md)  
      - [Queries](../boards/queries/using-queries.md)  
      - [Tags](../boards/queries/add-tags-to-work-items.md)  
   :::column-end:::
:::row-end:::
---

## More customization options 

Beyond the built-in customization features, consider these additional options for extending Azure DevOps functionality:

### Marketplace extensions
- **Browse solutions**: Check out [Marketplace extensions](https://marketplace.visualstudio.com/vsts) to see if there's a tool available for your purposes
- **Popular categories**: Look for extensions in work tracking, reporting, and project management
- **Community contributions**: Benefit from solutions developed by the Azure DevOps community

### Custom development options
- **Build extensions**: [Develop your own extension](../extend/get-started/node.md) for specific organizational needs
- **Integration tools**: Create custom integrations using [REST APIs](../integrate/index.md)
- **Service hooks**: Determine if a [Service hook](../service-hooks/overview.md) satisfies your automation needs

### Community engagement
- **Feature requests**: Add a feature request to our [Developer Community page](https://developercommunity.visualstudio.com/content/idea/post.html?space=21)
- **User feedback**: Share your experiences and suggestions with the product team
- **Best practices**: Learn from other organizations' customization approaches

### Planning your customization strategy

Before implementing customizations, consider:

1. **Business requirements**: Clearly define what you want to achieve
2. **Impact assessment**: Understand how changes affect existing workflows
3. **Maintenance overhead**: Consider the long-term cost of maintaining customizations
4. **Alternative solutions**: Evaluate if existing features meet your needs
5. **Migration path**: Plan for future updates and migrations

## Next steps
> [!div class="nextstepaction"]
> [Configure and customize Azure Boards](../boards/configure-customize.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)  

## Related articles
 
- [Work item field index](../boards/work-items/guidance/work-item-field.md)
- [witAdmin command-line tool](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
- [Manage process templates](../boards/work-items/guidance/manage-process-templates.md)
- [Process templates overview](process-templates/overview-process-template-files.md)
- [Work tracking, process, and project limits](../organizations/settings/work/object-limits.md?toc=/azure/devops/reference/toc.json&bc=/azure/devops/reference/breadcrumb/toc.json)
- [Quick reference index for Azure Boards settings](quick-reference-index-boards-settings.md)
