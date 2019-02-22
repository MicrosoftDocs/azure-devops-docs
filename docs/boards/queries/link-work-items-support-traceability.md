---
title: Link work items to support traceability 
titleSuffix: Azure Boards 
description: Manage dependencies, link work items to other work items, code and build objects, add hyperlinks, and more
ms.prod: devops
ms.technology: devops-agile
ms.assetid: eb47069f-e49b-424d-a674-91cb733f3518
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# Linking, traceability, and managing dependencies  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

By linking work items and other objects, you can track related work, dependencies, and changes made over time. All links are defined with a specific link type. For example, you can use Parent/Child links to link work items to support a hierarchical tree structure. Whereas, the Commit and Branch link types support links between work items and commits and branches, respectively.    

In a nutshell, you can:

- Link work items to other work items 
- Link work items to test cases, and test cases to other test items and test results  
- Link work items to code-related objects such as branches, commits, pull requests, and more 
- Link select git code-related objects to builds  
- Link work items to a web address or to a storyboard or a document on a network share 
- Link work items to architecture diagrams (requires Visual Studio Enterprise edition).      


Below, you can learn how to link objects and which link types to use. You can link objects from the web portal or Visual Studio Team Explorer.  

> [!NOTE]    
> Work item forms and features available to you can differ depending on whether you open the form from the web portal or Visual Studio Team Explorer. 

this article describes the link types available for your use. For details on linking work items, see [Add link to work items](../backlogs/add-link.md).  

<a id="link-work-items">  </a>
## Work items linked to work items

There are several system link types used to link work items to each other: two tree topology, one dependency topology, and one network. Tree topology links support nested hierarchies, tree queries, and several reports. Dependent links support tracking tasks that must be completed before others can be started. And, the **Related** link type supports connecting work items that are at the same level.

![Work item link types](_img/link-tracking-work-item-link-types.png)

All two-way link types are characterized by a *Forward* and *Reverse* name, such as Parent/Child and Duplicate/Duplicate Of. When you link using one of these names, the linked work item is updated to include a link with the corresponding link type. For example, if you add a Parent link to a work item, the linked work item contains a Child link. 

As a quick reference guide, use the following link types as indicated: 

- Use the **Duplicate** link type when two work items have been created that essentially capture the same information; close one of the work items and keep the other one active  
- Use the **Parent/Child** link types when you want to break down work items into smaller items&mdash;for example, break down features into stories, or stories into tasks
- Use  **Predecessor-Successor** link types when you want to track tasks that must be completed before others can be started; this link type is most often used when you plan work using Project 
- Use the **Related** link type when the work items being linked are at the same level&mdash;such as two user stories that define features that overlap one another&mdash;or to link work items that are defined in different projects or managed by different teams.

For additional guidance on choosing link types, review the [Link type reference](link-type-reference.md) in the related notes section. 

You can create links from within a work item form, from a work item that appears in a list of query results, in Microsoft Excel, or in Microsoft Project. You can also use any of the client programs for Team Foundation, such as Team Explorer and the web portal, to create links or attach files.

Also, you can use the context menu in the web portal or Team Explorer.

> [!NOTE]
> For each work item, you can add a maximum of 1000 links to other work items.  

::: moniker range="azure-devops" 
<a id="link-remote-work-items">  </a>
## Cross-organization work item linking 

Organizations that use Azure Active Directory can link work items that exist in different projects across organizations. Use the following link types as indicated:

- Use the **Consumes From/Produces For** link types when you want to track dependencies of work items that are defined in different organizations and managed by different teams. 
- Use the **Remote Related** link type when the work items being linked are defined in different organizations and managed by different teams, but don't have strong inter-dependencies.
   
> [!div class="mx-imgBorder"]  
> ![User Story form, Link tab, showing two external links](../backlogs/_img/add-link/link-tab-remote-links.png)  
::: moniker-end    

## Add a work item link 

You can create links between work items by using one of the links control tabs within a work item form. The user interface to link a work item differs based on the platform, version, and client you use. To link several work items to a new or existing item, see [Add link to work items](../backlogs/add-link.md). 

[!INCLUDE [temp](../_shared/image-differences.md)]


# [New web form](#tab/new-web-form)

::: moniker range=">= tfs-2017"
<a id="team-services-link" /> 

From the new work item form, you can add a link using the **Related Work** section or from the **Links** tab.

Open a work item and choose the ![ ](../_img/icons/Action_Add.png) plus icon to add a link. 
   
<img src="_img/link-work-items-new-form-control.png" alt="Web portal, work item form, Related work section, " style="border: 2px solid #C3C3C3;" />

Choose **Existing item** to link to a work item or other object using any supported link type. Choose **New item** to initiate a link and define a new work item at the same time. For details, see [Add link to work items](../backlogs/add-link.md).

<img src="../../reference/xml/_img/linkscontrol-related-work-menu-options.png" alt="Links control menu of options" style="border: 2px solid #C3C3C3;" />

From the **Related Work** or **Links** tab, you can also perform these actions: 

- Open an associated item or object: choose the linked item  
- Delete a link: highlight it and choose the ![ ](../_img/icons/delete_icon.png) delete icon  

From a query results page, you can also perform these actions: 
- Link selected items to a new work item  
- Link selected items to an existing work item   

For details, see [Add link to work items](../backlogs/add-link.md#link). 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
The new web form is only available from TFS 2017 and later versions. 

::: moniker-end

# [Old web form](#tab/old-web-form)

::: moniker range=">= tfs-2018"
The old web form is only available for TFS 2017 and earlier versions. 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2017"
<a id="tfs-portal-link" />

Within the old web form, you can link work items to other work items or supported objects from one of the available link tabs. Some work item types have two or more link control tabs. Each tab is designed to support specific types of links and restricts the types of link relationships made.
 
Open a work item and click one of the Links tab. From the links control tab you can link to a new or existing work items, open the linked object, or delete a link.

![Link controls provided in a work item form](../backlogs/_img/work-items-link-controls.png)  

::: moniker-end

# [Visual Studio](#tab/visual-studio)  
<a id="team-explorer-link" />
If you primarily work in Visual Studio or Team Explorer, and want to link work items, you can do so in a number of ways. Depending on the work item form and customizations that may have been made to your work item form, you may see several Link tabs. Link tabs can be customized to allow or restrict specific link types.  

Open a work item and click the Links tab. From the links control tab you can link to new or existing work items, open the linked object, edit the link type, delete a link, or open the list of links in a query or Excel or Project.

![Work item form link toolbar controls](_img/IC673344.png)  

# [Team Explorer Everywhere](#tab/tee) 

Open a work item and click the Links tab. From the links control tab you can link to new or existing work items, delete a link, or open the linked object.

![Link control options (Team Explorer, Eclipse)](_img/IC775501.png)  

**Link a work item to an existing work item (Team Explorer)**

From the Query Results view, you can link a work item to a new or existing work item. Click the work item you want to link, open the context menu for that work item and (1) click Link to an Existing Item... (2)Fill out the dialog that appears, (3) click Save, and then (4) Save Results to save the changes made to the work item. 

![Link to an existing work item](_img/IC588289.png)

---


## Parent-child work item links

These features let you quickly link or change links that use the parent-child link type:

-   To link backlog items to portfolio backlog items or to change the link structure among these items, [use the mapping pane to organize your backlog](../backlogs/organize-backlog.md).
-   To create and link tasks to backlog items, [use the sprint backlog page](../sprints/assign-work-sprint.md); from the web portal you can also drag-and-drop items to change the link structure. 
-   To indent (![Indent](_img/IC588323.png)), outdent (![Outdent](_img/IC588324.png)), and change the link structure of a tree hierarchy, you can [re-parent and reorder items from a backlog in the web portal](../backlogs/organize-backlog.md#reparent) or use a [tree query in Team Explorer](using-queries.md#tree-query).

You can also use Excel or Project to change the link structure. See [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md) and [Create your backlog and tasks using Project](../backlogs/office/create-your-backlog-tasks-using-project.md).

<a id="test-plan-links">  </a>
## Test work item links

Test related link types link test case management work items to one another, or to other work items. From the web portal or Microsoft Test Manager, you can view which test cases are defined for a test suite, and which test suites are defined for a test plan. However, these objects aren't linked to each other through link types.

You can link work items to test cases using the **Tested/Tested By** link types. You use the same link controls you use to link work items to other work items as [described earlier](#link-work-items). 

The following image shows the full set of link types used in linking test management work item types. most links between test management artifacts occur by executing a task from the **Test** pages or Microsoft Test Manager. 

![Link types used to link test objects](_img/link-tracking-work-item-test-case-link-types.png)  

For example, when you add Shared Steps to a Test Case, they are automatically linked using the **Test Case/Shared Steps** link types. See [Share steps between test cases](../../test/mtm/share-steps-between-test-cases.md). 

**Test case work item form (TFS 2015)**

![Create shared steps](_img/IC666631.png) 

From **Test** you can add test plans, test suites, and test cases&mdash;which are linked, but not through a specific link type. Also, the test system creates and manages the associations of test results to test cases and test plans. 


## Work items linked to code artifacts and builds  

As you develop your software, you can capture which code changes and builds support the completion of a work item. In this way, your team can understand what work was done or how a bug was fixed through the audit trail of changes to the code base.  

::: moniker range=">= azure-devops-2019"
The link types used to construct these links&mdash;as illustrated in the following image&mdash;are: Branch, Build, Changeset, Commit, Found in build, Integrated in build, Pull Request, and Versioned Item. 

<img src="_img/link-tracking-artifact-to-artifact-link-types.png" alt="Artifact-to-artifact link types" style="border: 1px solid #C3C3C3;" /> 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"
The link types used to construct these links&mdash;as illustrated in the following image&mdash;are: Branch, Build, Changeset, Commit, Pull Request, and Versioned Item. 

<img src="../backlogs/_img/git/link-tracking-artifact-to-artifact-link-types.png" alt="Artifact-to-artifact link types" style="border: 1px solid #C3C3C3;" /> 

To learn more about the links control or to customize the Development links control, see [LinksControlOptions elements, Development links control](../../reference/xml/linkscontroloptions-xml-elements.md#development-links-control). 
 
::: moniker-end

You can add a link from the work item to the supported artifacts using the method [described earlier for linking work items](#link-work-items). However, an easier method is to add the work item ID to a commit, pull request, changeset, or other supported Git or TFVC operation at the time you create those items. Also, you can link work items from the Development section within the [new work item form](../../reference/process/new-work-item-experience.md). 

::: moniker range=">= tfs-2017"

## Work items linked to Git code development  

The recommended method is to drive development from the work item or add the work item ID when creating branches, commits (git), changesets (TFVC), pull requests (git). 

Git lets you link work items to commits by using the **Commit** link type. You can do this in several ways:

- In Visual Studio Team Explorer, add work item IDs before you commit your changes  
	![Add work item ID or drag items before you commit your changes](_img/link-git-commit-items.png)  
- You can use the [git-commit](http://git-scm.com/docs/git-commit) command and include the work item ID in your comment. For example, you apply this comment #35 Catch null exception to your commit. When you push the commit, the system creates a Commit link between the commit and work item #35. 
- And, with the new work item form (available from Azure Boards and TFS 2017), you can [drive your git development from the work item](../backlogs/connect-work-items-to-git-dev-ops.md) as shown in the following image.  

	<img src="../backlogs/_img/drive-git-development-dev-section.png" alt="Work item form, Development section" style="border: 1px solid #C3C3C3;" />   

::: moniker-end


::: moniker range="azure-devops" 
<a id="link-github">  </a>
## Work items linked to GitHub commits and pull requests  

By connecting Azure Boards with GitHub repositories, you enable linking between GitHub commits and pull requests to work items. You can use GitHub for software development while using Azure Boards to plan and track your work. 

The link types used are **GitHub Commit** and **GitHub Pull Request**.

To learn more, see [GitHub & Azure Boards](../github/index.md). 
::: moniker-end    


## Work items linked to TFVC code development  

Team Foundation version control (TFVC) lets you link work items to version control changesets or versioned source code files by using the **Changeset** and **Versioned Item** link types. When you check in pending changes or use My Work to check in changes, [work items are automatically linked to your changes](../../repos/tfvc/check-your-work-team-codebase.md).

<img src="../../repos/tfvc/_img/check-your-work-team-codebase/ic593474.png" alt="Team Explorer, My Work, Pending Changes, check in" style="border: 1px solid #C3C3C3;" />  


<a id="links-attachments"></a>
## Work items linked to a Web site, network share, storyboard, or document 

You can use the Hyperlinks or Storyboard link type to link a work item to a Web site, network share, or document located on a network share. Both of these link types are one-way links. To add links of this type, you can use the same links controls [described earlier for linking work items](#link-work-items). 

<img src="_img/link-tracking-work-item-to-url-link-types.png" alt="Artifact-to-artifact link types" style="border: 1px solid #C3C3C3;" /> 

::: moniker range=">= tfs-2013 <= tfs-2015"

From the **Storyboards** tab, you can link storyboards that you created using PowerPoint Storyboarding or other application. The Storyboards tab and links control is available from the web and client work item form for TFS 2015. 

For process templates associated with TFS 2015 and earlier versions, the  **Storyboards** tab links control was added to those work item types used to defined requirements, user stories, or features. When you make changes to a linked storyboard, the work item continues to link to the file with the latest changes.

![Storyboard links control](_img/IC589934.png)

::: moniker-end

By using the Storyboard link type, you differentiate the link your adding to specify a storyboard or document that provides work item specifications. Use this link type to provide your team access to the shared file where they can add their comments. You can also link from a Power Point file to a work item using this link type as described in [Storyboard your ideas using PowerPoint](../backlogs/office/storyboard-your-ideas-using-powerpoint.md).


::: moniker range=">= tfs-2013 <= tfs-2015"

## Work items linked to architectural diagrams

You choose the **Model** link type when you want to link a work item to an architectural diagram created using Visual Studio Enterprise. This link type is only available when you work from Visual Studio Enterprise. With this link type, you can  track tasks, test cases, bugs, requirements, issues, or other kinds of work that are associated with specific parts of your model. 

<img src="_img/link-tracking-work-item-to-model-diagrams-link-types.png" alt="Model link type links work items to diagrams" style="border: 1px solid #C3C3C3;" /> 

To link a work item to a diagram, open the work item in Visual Studio, choose the **All Links** or **Other Links** tab and choose the **Model** link type. You can also open the linked diagram from the links tab. 

![Open linked model element from a work item](_img/IC588262.png)

Or, you can link a model element to a work item. See [Link model elements and work items](https://msdn.microsoft.com/library/dd465152.aspx).

::: moniker-end

## Query for linked work items 

To filter items based on hierarchical links, use the **Tree of work items** query type. To filter items based on all link types, use **Work items and direct links**. 

You can search for work items that not only meet criteria for field values but also that are linked to other work items with specific types of links. This kind of query displays a primary set of work items, which meet the field criteria, and a secondary set, which are linked to items in the primary set.

For query examples, see [Link and attachment queries](linking-attachments.md).

> [!NOTE]  
> You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases. These items aren't linked together using Parent/Child or any other link type. You can only view the hierarchy through the [**Test>Test Plans** page](../../test/create-a-test-plan.md). 

## Related articles 

You should now have a broad understanding of the various link relationships you can create to track dependencies and create an audit trail for your code development.

Once you've formed a link relationship, you can't edit the link type of that relationship from the web portal, but you can do it from Team Explorer. 

For additional information, see these topics: 

- [Add link to multiple work items](../backlogs/add-link.md)  
- [Share plans, add attachments](share-plans.md)  
- [Use mapping to link backlog items to features and epics](../backlogs/organize-backlog.md)
- [Bulk modify links using Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)
- [Link types reference](link-type-reference.md)

::: moniker range=">= tfs-2015"

### Visualize related work and other objects 

You can view related work items and object within a work item form by installing the [Work item visualization extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.WorkItemVisualization) available from the Visual Studio Marketplace, Azure DevOps tab. 

::: moniker-end

