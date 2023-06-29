---
title: View sample work item templates that show usage in Azure Boards
titleSuffix: Azure Boards   
description: Learn about sample work item templates you can use to pre-populate fields and provide guidance in work item forms. 
ms.service: azure-devops-boards
ms.assetid: 9b575c05-16f3-4027-aa5a-67b017a0089d
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
monikerRange: '<= azure-devops'
ms.date: 04/01/2022
---

# View sample work item templates in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Work item templates can help save time and provide guidance to your team when defining user stories, features, bugs, or tasks. Teams use templates to support the following goals:

- Create bugs for specific product areas 
- Provide guidance to complete the work item 
- Create work items with specific tags 
- Define a bug template for use with another application or extension, such as [Bug Bash Pro](https://marketplace.visualstudio.com/items?itemName=mohitbagra.bugbashpro).

Review this article for examples of defining specific values of work item templates. For guidance on adding, managing, and applying work item templates, see [Use templates to add and update work items](../backlogs/work-item-template.md).

> [!NOTE]  
> Work item templates are distinct from process templates. For more information, see [About processes and process templates](../work-items/guidance/choose-process.md) or these specific articles for the process templates: [Basic](../get-started/plan-track-work.md), [Agile](../work-items/guidance/agile-process.md), [Scrum](../work-items/guidance/scrum-process.md), or [CMMI](../work-items/guidance/cmmi-process.md).  


<a id="area-path"> </a> 

## Specify the Area Path 

As an organization grows, the number of product or feature areas and number of teams can grow in number. To support work items to appear on a team's backlog or board, templates should specify the Area Path that the team owns.  

In this example, the Voice team sets the <strong>Area Path</strong>=`Fabrikam Fiber/Voice`. 

> [!div class="mx-imgBorder"]  
> ![Specify the Area Path.](media/template/area-path.png) 

To learn more about area paths, see [About area and iteration (sprint) paths](../../organizations/settings/about-areas-iterations.md). 


<a id="rich-text"> </a> 

## Add guidance in a rich-text field

To provide guidance, enter HTML syntax into a rich-text field's value.  

For example, here we add the following syntax into the <strong>Repos Steps</strong> field

> [!div class="tabbedCodeSnippets"]
> ```HTML
> <p><b>Steps to reproduce:</b><br>1.&nbsp; <br><br><b>Expected Behavior:</b><br>1. <br><br><b>Affected Branch:</b> <br> <b>Affected Build:</b><br></p>
> ```
> 
> [!div class="mx-imgBorder"]  
> ![Add syntax into the Repos Steps field.](media/template/repo-steps.png) 

The work item form renders this example as shown. 

> [!div class="mx-imgBorder"]  
> ![Rendered syntax in work item form.](media/template/repo-steps-rendered.png) 


For more information about rich-text fields, see [Share information within work items and social tools](../queries/share-plans.md). 



<a id="add-tags"> </a> 

## Add work item tags 

Work item tags are useful to quickly filter backlogs, boards, or queries. You can add tags to track anything of interest, for example: Customer issue, Release, Milestone.

To add two or more tags, add them all within a single <strong>Tags (Add)</strong> field, entering a comma between tags. 

For example, here we add Web and Sept Release.

> [!div class="mx-imgBorder"]  
> ![Add tags to work items.](media/template/add-tags.png) 

To learn more about tags, see [Add work item tags to categorize and filter lists and boards](../queries/add-tags-to-work-items.md). 

You can also use the <strong>Tags (Remove)</strong> template field to remove tags from work items. For example, if many work items were tagged with Milestone 1, and that no longer applies, you could query for all those work items and remove the tag by doing a bulk apply of a template that removed the Milestone 1 tag. 

## Define and pre-populate custom fields 

You can pre-populate a custom field that has been added to the work item type. Before adding it to a template, you must first add it to the work item type. For inherited process models, see [Add and manage fields for an inherited process](../../organizations/settings/work/customize-process-field.md). For On-premises XML process models, see [Add or modify a field to track work](../../reference/add-modify-field.md).  

For example, the <strong>Triage</strong> custom field can be set to `False`, indicating the bug needs to be triaged. 

> [!div class="mx-imgBorder"]  
> ![Set Triage custom field to False.](media/template/custom-field.png) 


## Access other features through extensions  

An often requested feature is to allow the creation of a work item that automatically links to one or more work items. For example, a user story that links to five tasks. Work item templates don't support this capability. However, you may find a Marketplace extension  supports this feature. For example, see the following extensions: 

- [Work item form one click actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)
- [1-Click Tasks](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-tasks) 
- [1-Click Child-Links](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-child-links)

::: moniker range="< azure-devops"

## Customize the work item web form 

If your project uses the On-premises XML process model to customize work tracking, you can add help text, hyperlinks, or web content to a form to provide guidance. 

For more information, see the following articles: 
- [WebLayout and Control elements](/previous-versions/azure/devops/reference/xml/weblayout-xml-elements)
- [Provide help text, hyperlinks, or web content on a work item form](../../reference/xml/provide-help-text-hyperlinks-web-content-form.md)
- [Edit a WIT definition to add web content to a work item form](/previous-versions/azure/devops/reference/xml/edit-wit-definition-add-web-content-form)
 
::: moniker-end

## Extensibility 

You can programmatically interact with work item templates to create, get, list, and delete using the [Templates REST APIs](/rest/api/azure/devops/wit/templates/list).


## Related articles

- [Use templates to add and update work items](../backlogs/work-item-template.md)
